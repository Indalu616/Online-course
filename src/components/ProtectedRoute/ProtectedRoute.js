import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const ProtectedRoute = () => {
  const [user, setUser] = useState(null);

  console.log(user)

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setUser(user);
      } else {
        // User is not logged in
        setUser(null);
      }
    });
    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);
console.log(auth.currentUser)
  return auth.currentUser? <Outlet /> : <Navigate to="/Online-course" />;
};

export default ProtectedRoute;
