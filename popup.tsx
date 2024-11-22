import { useState } from "react"
import { sendToContentScript } from "@plasmohq/messaging"

function IndexPopup() {
  const [selectedText, setSelectedText] = useState("")

  return (
    <div style={{ minWidth: "300px", padding: "16px" }}>
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={async () => {
          const response = await sendToContentScript({
            name: "get-selected-text"
          })
          setSelectedText(response)
        }}>
        Get Selected Text
      </button>

      {selectedText && (
        <div style={{ marginTop: "16px" }}>
          <h4>Selected Text:</h4>
          <p style={{ 
            padding: "8px", 
            backgroundColor: "#f5f5f5", 
            borderRadius: "4px",
            wordBreak: "break-word"
          }}>
            {selectedText}
          </p>
        </div>
      )}
    </div>
  )
}

export default IndexPopup
