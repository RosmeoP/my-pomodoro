// import React, { useRef, useState } from "react";

// const FloatingMiniPomodoro = ({ mode, timeLeft, formatTime }) => {
//     const cardRef = useRef(null);
//     const [drag, setDrag] = useState({ x: 30, y: 30 });
//     const [dragging, setDragging] = useState(false);
//     const [offset, setOffset] = useState({ x: 0, y: 0 });

//     const handleMouseDown = (e) => {
//         setDragging(true);
//         setOffset({
//             x: e.clientX - drag.x,
//             y: e.clientY - drag.y,
//         });
//     };

//     const handleMouseMove = (e) => {
//         if (dragging) {
//             setDrag({
//                 x: e.clientX - offset.x,
//                 y: e.clientY - offset.y,
//             });
//         }
//     };

//     const handleMouseUp = () => setDragging(false);

//     React.useEffect(() => {
//         if (dragging) {
//             window.addEventListener("mousemove", handleMouseMove);
//             window.addEventListener("mouseup", handleMouseUp);
//         } else {
//             window.removeEventListener("mousemove", handleMouseMove);
//             window.removeEventListener("mouseup", handleMouseUp);
//         }
//         return () => {
//             window.removeEventListener("mousemove", handleMouseMove);
//             window.removeEventListener("mouseup", handleMouseUp);
//         };
//     }, [dragging]);

//     return (
//         <div
//             ref={cardRef}
//             style={{
//                 position: "fixed",
//                 left: drag.x,
//                 top: drag.y,
//                 zIndex: 9999,
//                 width: 220,
//                 background: "#222",
//                 color: "#fff",
//                 borderRadius: 12,
//                 boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
//                 cursor: dragging ? "grabbing" : "grab",
//                 userSelect: "none",
//                 padding: 16,
//             }}
//             onMouseDown={handleMouseDown}
//         >
//             <div style={{ fontWeight: "bold", marginBottom: 8, fontSize: 18 }}>
//                 {mode === "focus" && "Focus"}
//                 {mode === "shortBreak" && "Short Break"}
//                 {mode === "longBreak" && "Long Break"}
//             </div>
//             <div style={{ fontSize: 36, fontFamily: "monospace", textAlign: "center" }}>
//                 {formatTime(timeLeft)}
//             </div>
//         </div>
//     );
// };

// export default FloatingMiniPomodoro;