import { useTheme } from "./features/theme/hooks/useTheme";

function App() {
  const { isDarkMode, colors, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        minHeight: "100vh",
      }}
    >
      {/* Navigation Bar */}
      <nav className="border-b" style={{ borderColor: colors.secondary }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold" style={{ color: colors.primary }}>
            Twitter Clone
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-opacity-10"
            style={{
              backgroundColor: colors.secondary,
              opacity: 0.1,
            }}
          >
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Tweet Box */}
        <div
          className="border rounded-xl p-4 mb-4"
          style={{ borderColor: colors.secondary }}
        >
          <textarea
            placeholder="What's happening?"
            className="w-full bg-transparent outline-none resize-none"
            style={{ color: colors.text }}
            rows={3}
          />
          <div className="flex justify-end mt-2">
            <button
              className="px-4 py-2 rounded-full font-bold text-white"
              style={{ backgroundColor: colors.primary }}
            >
              Tweet
            </button>
          </div>
        </div>

        {/* Sample Tweet */}
        <div
          className="border rounded-xl p-4 hover:bg-opacity-50 cursor-pointer"
          style={{ borderColor: colors.secondary }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-full"
              style={{ backgroundColor: colors.secondary }}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold">User Name</span>
                <span style={{ color: colors.secondary }}>@username</span>
              </div>
              <p className="mt-1">
                This is a sample tweet showing how the theme colors work in both
                light and dark modes!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
