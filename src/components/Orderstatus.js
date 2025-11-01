import React from "react";

const orderStages = [
  { label: "Order Placed", date: "Oct 21, 2025", expected: "Oct 25, 2025" },
  { label: "Packed", date: "Oct 22, 2025" },
  { label: "Shipped", date: "Oct 23, 2025" },
  { label: "Delivered", date: "Oct 24, 2025" },
];

const OrderStatusBarVertical = ({ currentStatus = "Delivered" }) => {
  const getStatusIndex = () =>
    orderStages.findIndex((stage) => stage.label === currentStatus);

  return (
    <div className="order-container">
   
      <h2 className="order-title">Order Status</h2>
      <div className="order-steps">
        {orderStages.map((stage, index) => {
          const isCompleted = index <= getStatusIndex();
          return (
            <div key={stage.label} className="order-step">
              <div
                className={`order-icon ${isCompleted ? "order-icon-complete" : "order-icon-pending"
                  }`}
              >
                {index + 1}
              </div>
              <div className="order-details">
                <p className="order-label">{stage.label}</p>
                <p className="order-date">{stage.date}</p>
                {stage.expected && (
                  <p className="order-expected">Expected: {stage.expected}</p>
                )}
              </div>
              {index < orderStages.length - 1 && (
                <div className="order-line"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStatusBarVertical;