import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <nav>navbar</nav>
      <main className="w-1/2 md:w-1/2 mx-auto">
        <Outlet />
      </main>
    </>
  );
}
