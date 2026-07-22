<div align="center">

# 📝 SyncPad

### Real-time Collaborative Text Editor using CRDTs

Google Docs–style collaborative editor built with **React, TypeScript, Yjs, Hocuspocus, and WebSockets**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Yjs](https://img.shields.io/badge/Yjs-CRDT-000000)
![Hocuspocus](https://img.shields.io/badge/Hocuspocus-Realtime_Server-2E2E2E)
![WebSocket](https://img.shields.io/badge/WebSocket-Realtime-4A4A4A)

</div>

---

# SyncPad

SyncPad is a real-time collaborative text editor where multiple users can edit the same document simultaneously. It uses **Yjs CRDTs** to merge concurrent edits without conflicts and **Hocuspocus** as the synchronization server. Users simply enter a display name and workspace code to collaborate instantly.

---

## ✨ Features

- Real-time collaborative editing
- Shared workspace using room codes
- Live cursor tracking
- User presence with unique colors
- Conflict-free synchronization (CRDT)
- Rich text editing with Quill
- Local persistence using IndexedDB
- Automatic synchronization after reconnect
- Responsive UI

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Quill

### Backend
- Node.js
- Hocuspocus Server
- WebSockets

### Collaboration
- Yjs
- y-quill
- y-indexeddb
- Awareness API

---

## 📂 Folder Structure

```
SyncPad
│
├── public
├── src
│   ├── components
│   ├── assets
│   ├── App.tsx
│   └── main.tsx
│
├── server.cjs
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/amrit2603/SyncPad.git
```

Move inside the project

```bash
cd SyncPad
```

Install dependencies

```bash
npm install
```

---

## ▶️ Run the Project

### Start Collaboration Server

```bash
node server.cjs
```

Expected Output

```
🚀 Signaling backend running on ws://localhost:1234
```

### Start Frontend

Open another terminal

```bash
npm run dev
```

Application runs at

```
http://localhost:5173
```

---

## ⚙ Available Scripts

| Command | Description |
|----------|-------------|
| npm run dev | Start development server |
| npm run build | Production build |
| npm run preview | Preview production build |
| npm run lint | Run ESLint |

---

## 🏗 Architecture

```
React + Quill
      │
      ▼
   Yjs CRDT
      │
      ▼
Hocuspocus Server
      │
      ▼
 Connected Clients
```

---

## 📌 How It Works

1. User enters name.
2. User enters workspace code.
3. Connects to Hocuspocus server.
4. Yjs synchronizes edits.
5. All connected users receive updates instantly.
6. Cursor positions and user presence are synchronized separately using Awareness API.

---

## 🔒 Security

Current version includes:

- Workspace-based collaboration
- Local WebSocket server
- No authentication
- No authorization
- No encryption

Future improvements include:

- User Authentication
- Role Based Access
- Database Storage
- End-to-End Encryption

---

## 📈 Future Enhancements

- Authentication
- File Uploads
- Version History
- Comments
- Dark Mode
- User Avatars
- Cloud Deployment

---

## 🧠 Skills Demonstrated

- React Development
- TypeScript
- Real-time Communication
- WebSockets
- CRDT
- Distributed Systems
- Client-Server Architecture
- Local-first Applications
- State Synchronization

---

## 👨‍💻 Author

**Amrit Kumar**

GitHub: https://github.com/amrit2603

LinkedIn: https://www.linkedin.com/in/amrit-kumar-130164306/

---

## ⭐ If you like this project

Give the repository a ⭐ on GitHub.