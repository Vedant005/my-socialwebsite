

import { createContext, useState } from "react";
 import axios from "axios";

export const AuthContext = createContext({ isLoggedIn: false });

export  function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = async (e) => {
  
    try {
      const response = await axios.post("/api/auth/signup");
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  handleSubmit();
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
// import axios from "axios";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/api/auth/signup", formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <br />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };
