import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import BookDetailPage from "./pages/BookDetailPage";
import ReaderPage from "./pages/ReaderPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLayout from "./layouts/AdminLayout";
// import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBooks from "./pages/admin/AdminBooks";
import AdminUpload from "./pages/admin/AdminUpload";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "library", element: <LibraryPage /> },
      { path: "library/:bookId", element: <BookDetailPage /> },
      { path: "read/:bookId", element: <ReaderPage /> },
      { path: "leaderboard", element: <LeaderboardPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
    //   { index: true, element: <AdminDashboard /> },
      { path: "books", element: <AdminBooks /> },
      { path: "upload", element: <AdminUpload /> },
    ],
  },
]);
