import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    const paymentId = searchParams.get('razorpay_payment_id');
    if (paymentId) {
      setTransactionId(paymentId);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-md w-full">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto" />
        <h1 className="text-2xl font-semibold mt-4">Payment Successful!</h1>
        <p className="text-gray-600 mt-2">Thank you for your payment.</p>
        {transactionId && (
          <p className="text-gray-800 mt-2 font-medium">Transaction ID: {transactionId}</p>
        )}
        <button 
          onClick={() => navigate('/')} 
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
