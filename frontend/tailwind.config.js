// tailwind.config.js


module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./app/**/*.{js,jsx}",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['"Poppins"', '"Inter"', 'ui-sans-serif', 'system-ui'],
            },
            colors: {
                primary: "#F97316",        // Orange
                accent: "#10B981",         // Green
                background: "#FFFFFF",
                darkBackground: "#1F2937",
                surface: "#F9FAFB",
                darkSurface: "#374151",
                textPrimary: "#111827",
                textSecondary: "#6B7280",
                border: "#E5E7EB",
                danger: "#EF4444",
                success: "#84CC16",
            },
            borderRadius: {
                lg: "0.5rem",
                md: "0.375rem",
                sm: "0.25rem",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "scale-in": {
                    "0%": { transform: "scale(0.95)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                "slide-in-right": {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                "bounce-gentle": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },

                "pulse-soft": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.8" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.3s ease-out",
                "fade-in-up": "fade-in-up 0.5s ease-out",
                "scale-in": "scale-in 0.2s ease-out",
                "slide-in-right": "slide-in-right 0.3s ease-out",
                "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
                "pulse-soft": "pulse-soft 2s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
