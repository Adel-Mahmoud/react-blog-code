import Home from "../pages/frontend/Home/Home";
import Single from "../pages/frontend/Single/Single";
import About from "../pages/frontend/About/About";
import Contact from "../pages/frontend/Contact/Contact";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import { CategoriesIndex, CategoriesCreate, CategoriesEdit } from "../pages/admin/categories";
import { PostsIndex, PostsCreate, PostsEdit } from "../pages/admin/posts";
import { UsersIndex, UsersCreate, UsersEdit } from "../pages/admin/users";
import Dashboard from "../pages/admin/Dashboard/Dashboard";

export const routes = [
  // user routes
  { path: "/", element: Home, layout: true, private: false, role: 'user'},
  { path: "/category/:cayegoryName/post/:id", element: Single, layout: true, private: false, role: 'user'},
  { path: "/about", element: About, layout: true, private: false, role: 'user' },
  { path: "/contact", element: Contact, layout: true, private: false, role: 'user' },
  // admin routes
  { path: "/login", element: Login, layout: false, private: false, role: 'admin' },
  { path: "/register", element: Register, layout:false, private: true, role: 'admin' },
  { path: "/admin/categories", element: CategoriesIndex, layout: true, private: true, role: 'admin' },
  { path: "/admin/categories/create", element: CategoriesCreate, layout: true, private: true, role: 'admin'  },
  { path: "/admin/categories/edit/:id", element: CategoriesEdit, layout: true, private: true, role: 'admin'  },
  { path: "/admin/posts", element: PostsIndex, layout: true, private: true, role: 'admin'  },
  { path: "/admin/posts/create", element: PostsCreate, layout: true, private: true, role: 'admin'  },
  { path: "/admin/posts/edit/:id", element: PostsEdit, layout: true, private: true, role: 'admin'  },
  { path: "/admin/users", element: UsersIndex, layout: true, private: true, role: 'admin'  },
  { path: "/admin/users/create", element: UsersCreate, layout: true, private: true, role: 'admin'  },
  { path: "/admin/users/edit/:id", element: UsersEdit, layout: true, private: true, role: 'admin'  },
  { path: "/admin/", element: Dashboard, layout: true, private: true, role: 'admin'  },
];
