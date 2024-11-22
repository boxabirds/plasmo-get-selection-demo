import type { PlasmoCSConfig } from "plasmo"
import { useMessage } from "@plasmohq/messaging/hook"

export const config: PlasmoCSConfig = {
  all_frames: true,
  matches: ["<all_urls>"]
}

const GetSelectedText = () => {
  const { data } = useMessage<string, string>(async (req, res) => {
    if (req.name !== "get-selected-text") {
      return
    }
    res.send(window.getSelection()?.toString() || "No text selected")
  })

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        padding: 8,
        background: "#333",
        color: "#fff",
        borderRadius: 4,
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        zIndex: 999999,
        display: data ? "block" : "none"
      }}>
      Selected Text: {data}
    </div>
  )
}

export default GetSelectedText
