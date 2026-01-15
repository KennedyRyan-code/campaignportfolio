import { useState } from "react";
("use client");

export const usePayment = () => {
  const [paymentState, setPaymentState] = useState({
    isProcessing: false,
    isSuccess: false,
    error: null,
  });

  const processPayment = async (phoneNumber, option) => {
    setPaymentState({ isProcessing: true, isSuccess: false, error: null });

    try {
      const res = await fetch("/api/stkpush", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber,
          amount: option.price,
          accountReference: option.name || "Coffee",
          transactionDesc: option.description || "Buy Me A Coffee",
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        const msg =
          (json && (json.message || JSON.stringify(json.details))) ||
          "Payment failed";
        setPaymentState({ isProcessing: false, isSuccess: false, error: msg });
        return { success: false, message: msg };
      }

      setPaymentState({ isProcessing: false, isSuccess: true, error: null });
      return {
        success: true,
        message: `STK Push initiated for KES ${option.price}`,
        data: json.data,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Payment failed";
      setPaymentState({
        isProcessing: false,
        isSuccess: false,
        error: errorMessage,
      });
      return { success: false, message: errorMessage };
    }
  };

  const resetPayment = () => {
    setPaymentState({ isProcessing: false, isSuccess: false, error: null });
  };

  return { paymentState, processPayment, resetPayment };
};
