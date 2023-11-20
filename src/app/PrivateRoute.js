// src/app/PrivateRoute.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/");
    }
  }, [router]);

  return <>{children}</>;
};

export default PrivateRoute;
