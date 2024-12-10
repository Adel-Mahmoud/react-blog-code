import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes"; 
import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import PrivateRoute from "../components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Component, private: isPrivate, layout: byLayout, role: userType }) => (
        <Route
          key={path}
          path={path}
          element={
            userType == 'admin' ? (
              byLayout ? (
                isPrivate ? (
                  <PrivateRoute>
                    <AdminLayout>
                      <Component />
                    </AdminLayout>
                  </PrivateRoute>
                ) : (
                  <AdminLayout>
                    <Component />
                  </AdminLayout>
                )
              ) : (
                isPrivate ? (
                  <PrivateRoute>
                      <Component />
                  </PrivateRoute>
                ) : (
                    <Component />
                )
              ) 
            ) : (
              byLayout ? (
                isPrivate ? (
                  <PrivateRoute>
                    <UserLayout>
                      <Component />
                    </UserLayout>
                  </PrivateRoute>
                ) : (
                  <UserLayout>
                    <Component />
                  </UserLayout>
                )
              ) : (
                isPrivate ? (
                  <PrivateRoute>
                      <Component />
                  </PrivateRoute>
                ) : (
                    <Component />
                )
              ) 
            )
            
          }
        />
      ))}
      <Route
        path="*"
        element={
          <AdminLayout>
            <h3>Page Not Found 404</h3>
          </AdminLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
