// import React, { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

// const MyModal = ({ closeModal, children, handleCloseButton }) => {
//   const portalContainerRef = useRef(null);

//   useEffect(() => {
//     // Make sure the ref is not null before accessing it
//     if (portalContainerRef.current) {
//       // Apply overflow styling here
//       portalContainerRef.current.style.overflowY = "scroll";

//       // Clean up function
//       return () => {
//         portalContainerRef.current.style.overflowY = "";
//       };
//     }
//   }, []);

//   return (
//     <>
//       {/* Render modal inside the portal container */}
//       {ReactDOM.createPortal(
//         <>
//           <div className="modal-wrapper" onClick={closeModal}></div>
//           <div className="modal-container">
//             {children}
//             {handleCloseButton}
//           </div>
//         </>,
//         portalContainerRef.current // Use ref to specify the container
//       )}
//       {/* Portal container element */}
//       <div className="myPortalModalDiv" ref={portalContainerRef} />
//     </>
//   );
// };

// export default MyModal;
