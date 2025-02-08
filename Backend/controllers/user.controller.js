import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { instance } from "../index.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Failed to register user",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    // const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });
    const token = jwt.sign(
      { id: user._id, email: user.email }, // Include the user ID in the payload
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 60 * 60 * 24 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullName}`,
        user,
        token,
        success: true,
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const userid = req.id;
    let user = await User.findById(userid);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    await user.save();
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    };

    return res.status(200).json({
      message: "User updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User with this email does not exist." });
    }

    // Step 2: Generate a reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000;
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiry = resetTokenExpiry;
    await user.save();

    const resetLink = `${req.protocol}://${req.get("host")}/reset-password/${resetToken}`;
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      html: `
                <p>You requested a password reset. Click the link below to reset your password:</p>
                <a href="${resetLink}">Reset Password</a>
                <p>If you didn't request this, please ignore this email.</p>
            `,
    };
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Password reset email sent successfully." });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or expired reset token." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;

    await user.save();
    res
      .status(200)
      .json({
        message:
          "Password reset successfully. You can now log in with your new password.",
      });
  } catch (error) {
    console.error(error.message);

    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
};

// Controller to get user data by ID
// export const getUserProfile = async (req, res) => {
//   const userId = req.params.id;

//   try {
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       name: user.fullName,
//       email: user.email,
//       profilePicture: user.profilePicture || "", // Add this field to schema if needed
//       bio: user.bio || "No bio available",
//       location: user.location || "Location not provided",
//       joinedDate: user.createdAt.toDateString(),
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };
export const getProfile = async (req, res) => {
  try {
    // Extract user ID from the token payload
    const token = req.headers.authorization.split(" ")[1]; // 'Bearer <token>'
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;

    // Fetch the user data from the database
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Controller to update user profile
export const updateUserProfile = async (req, res) => {
  const userId = req.params.id;
  const { name, email, bio, location, profilePicture } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        fullName: name,
        email,
        bio,
        location,
        profilePicture,
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "Profile updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const paymentProcess = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.totalPrice*100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    res.status(200).json({
        message: "Order created",
        order,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getkey = (req, res) => {
  return res.status(200).json({
    key: process.env.RAZORPAY_KEY_ID 
  })
}

export const paymentVerification = (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;
  const expected = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  console.log(expected, razorpay_signature);

  const isMatch = expected === razorpay_signature;
  if (isMatch) {
    return res.redirect (
      `https://spare-sphere.netlify.app/paymentSuccess?reference=${razorpay_payment_id}`
    );
  }

  // Instead of JSON, redirect to a failure page
  return res.redirect(`${req.protocol}://${req.get("host")}/paymentFailure`);
};
