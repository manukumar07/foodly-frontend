import { Toaster } from "react-hot-toast";

function CustomToaster() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        className:
          "font-sans rounded-lg px-4 py-3 text-sm shadow-lg animate-fade-in-up",
        style: {
          background: "#F9FAFB",
          color: "#111827",
        },
        success: {
          style: {
            background: "#10B981",
            color: "#FFFFFF",
          },
          iconTheme: {
            primary: "#FFFFFF",
            secondary: "#10B981",
          },
        },
        error: {
          style: {
            background: "#EF4444",
            color: "#FFFFFF",
          },
          iconTheme: {
            primary: "#FFFFFF",
            secondary: "#EF4444",
          },
        },
      }}
    />
  );
}
export default CustomToaster;
