import api from "./api";

// export const login = async (email, password) => {
//   try {
//     const response = await api.post("/auth/login", { email, password });
//     const { token } = response.data;

//     localStorage.setItem("token", token);

//     return response.data;
//   } catch (error) {
//     console.error("Login failed:", error);
//     throw error;
//   }
// };

// export const register = async (name, email, password) => {
//   try {
//     const response = await api.post("/auth/register", {
//       name,
//       email,
//       password,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Registration failed:", error);
//     throw error;
//   }
// };

export const logout = (navigate) => {
  localStorage.removeItem("token"); 
  navigate("/login"); 
};
