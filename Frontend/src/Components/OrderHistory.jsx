import React from "react";

// Mock Data (You can replace this with real data)
const orders = [
  {
    id: 1,
    customerName: "John Doe",
    orderDate: "2025-01-12",
    total: "$120.50",
    status: "Shipped",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    orderDate: "2025-01-10",
    total: "$80.75",
    status: "Processing",
  },
  {
    id: 3,
    customerName: "Emily Johnson",
    orderDate: "2025-01-08",
    total: "$50.00",
    status: "Delivered",
  },
];

const OrderHistory = () => {
  return (
    <div className="order-history-container p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Order History</h2>

      {/* Order List */}
      <div className="order-table bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Order Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Total</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 text-sm text-gray-700">{order.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.customerName}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.orderDate}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{order.total}</td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      order.status === "Shipped"
                        ? "bg-blue-500"
                        : order.status === "Processing"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => alert(`View details for Order ID: ${order.id}`)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State Message (If no orders exist) */}
      {orders.length === 0 && (
        <div className="mt-8 p-6 text-center text-gray-600 bg-white shadow-lg rounded-lg">
          <p className="text-xl">No orders found.</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
