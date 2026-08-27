import React from 'react';
import { useToast } from '../context/ToastContext';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

export const ToastNotification = () => {
  const { toasts, removeToast } = useToast();

  if (!toasts || toasts.length === 0) return null;

  const getTypeStyle = (type) => {
    switch (type) {
      case 'success':
        return {
          bg: '#064e3b',
          border: '#10b981',
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
        };
      case 'error':
        return {
          bg: '#7f1d1d',
          border: '#da2b1f',
          icon: <AlertCircle className="w-5 h-5 text-red-400" />,
        };
      case 'warning':
        return {
          bg: '#78350f',
          border: '#f59e0b',
          icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
        };
      default:
        return {
          bg: '#0c4a6e',
          border: '#00c4ee',
          icon: <Info className="w-5 h-5 text-cyan-400" />,
        };
    }
  };

  return (
    <div className="toast-container">
      {toasts.map((toast) => {
        const style = getTypeStyle(toast.type);
        return (
          <div
            key={toast.id}
            style={{
              backgroundColor: style.bg,
              borderColor: style.border,
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg border text-white shadow-xl min-w-[280px] max-w-[400px] animate-fadeIn"
          >
            {style.icon}
            <span className="flex-1 text-sm font-medium">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
