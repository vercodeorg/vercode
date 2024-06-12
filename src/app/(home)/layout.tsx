import { Navbar } from "~/components/Navbar";
import { SideBar } from "~/components/Sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        <Navbar />
        <div className="w-full contents">{children}</div>
      </div>
    </div>
  );
}
