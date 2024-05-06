import Sidebar from "@/components/Sidebar";
import RootLayout from "./layout";
import Hero from "@/components/Hero";
import Coins from "@/components/Coins";
import Activity from "@/components/Activity";

export default function Home() {
  return (
    <main className="flex">
      <div className="mb-[48px]">
        <Hero />
        <Coins />
        <Activity />
      </div>
    </main>
  );
}
