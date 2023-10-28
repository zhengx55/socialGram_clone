import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center py-10">
            <Outlet />
          </section>
          <img
            src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
