import * as Y from "yjs";
import { HocuspocusProvider } from "@hocuspocus/provider";
import { QuillBinding } from "y-quill";
import Quill from "quill";

export const createCollaborationSession = (
  roomCode: string,
  userName: string,
  color: string,
  quill: Quill
) => {
  const ydoc = new Y.Doc();
  const wsUrl = import.meta.env.VITE_WS_URL ?? "ws://localhost:1234";

  const provider = new HocuspocusProvider({
    url: wsUrl,
    name: `secure-workspace-${roomCode}`,
    document: ydoc,
  });

  // CRITICAL: This is what tells the server "I am here!"
  provider.awareness!.setLocalStateField("user", {
    name: userName,
    color: color,
  });

  const binding = new QuillBinding(
    ydoc.getText("quill"),
    quill,
    provider.awareness!
  );

  const chatArray = ydoc.getArray("chat");

  return { ydoc, provider, binding, chatArray };
};
