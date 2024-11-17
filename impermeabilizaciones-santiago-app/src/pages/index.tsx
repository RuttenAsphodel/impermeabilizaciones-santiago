import { Inter } from "next/font/google";
// import Component from "../components/component/component";
import ComponentAlt from "../components/component/component-alt"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <ComponentAlt />
    </div>
    
  );
}
