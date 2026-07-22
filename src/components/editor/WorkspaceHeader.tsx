import type { ActiveUser } from "../../types/chat";

interface WorkspaceHeaderProps {
  roomCode: string;
  userName: string;
  activeUsers: ActiveUser[];
  showUserList: boolean;
  setShowUserList: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WorkspaceHeader({
  roomCode,
  userName,
  activeUsers,
  showUserList,
  setShowUserList,
  isDarkMode,
  setIsDarkMode,
}: WorkspaceHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            fontSize: "1.2rem",
            color: "var(--text-main)", // Uses CSS variable for Day/Night text
          }}
        >
          Workspace: {roomCode}
        </h2>

        <p
          style={{
            margin: "0.25rem 0 0",
            color: "var(--text-main)", 
            opacity: 0.7,
            fontSize: ".85rem",
          }}
        >
          Logged in as <strong>{userName}</strong>
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          position: "relative",
        }}
      >
        {/* THEME TOGGLE BUTTON */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "0 4px",
            display: "flex",
            alignItems: "center",
          }}
          title={isDarkMode ? "Switch to Day Mode" : "Switch to Night Mode"}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>

        <button
          onClick={() => setShowUserList(!showUserList)}
          style={{
            padding: ".35rem .75rem",
            backgroundColor: "var(--btn-bg)", 
            color: "var(--btn-text)",         
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          👥 {activeUsers.length}
        </button>

        <span
          style={{
            padding: ".35rem .75rem",
            backgroundColor: isDarkMode ? "#1b5e20" : "#e8f5e9", 
            color: isDarkMode ? "#a5d6a7" : "#2e7d32",
            borderRadius: "16px",
            fontWeight: "bold",
            fontSize: ".85rem",
          }}
        >
          Live
        </span>

        {/* ACTIVE USERS DROPDOWN */}
        {showUserList && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              width: "220px",
              marginTop: "8px",
              background: "var(--bg-panel)", 
              border: "1px solid var(--border-color)", 
              color: "var(--text-main)",
              borderRadius: "8px",
              /* Windows 11 style dynamic shadow */
              boxShadow: isDarkMode 
                ? "0 8px 16px rgba(0,0,0,0.5)" 
                : "0 8px 16px rgba(0,0,0,0.1)",
              padding: "12px",
              /* FIX: Forces this menu to float above the Quill Editor */
              zIndex: 9999, 
            }}
          >
            <div
              style={{
                fontWeight: "600",
                fontSize: ".85rem",
                borderBottom: "1px solid var(--border-color)",
                paddingBottom: "8px",
                marginBottom: "8px",
              }}
            >
              Active Users
            </div>

            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {activeUsers.map((u) => (
                <li
                  key={u.id}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    fontSize: "0.9rem"
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: u.color,
                      border: "2px solid var(--bg-panel)"
                    }}
                  />
                  {u.name}
                  {u.name === userName && <span style={{opacity: 0.6}}> (You)</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}