import RandomFox from "@/components/RandomFox";
import Image from "next/image";

export default function Home() {
  const random = () => Math.floor(Math.floor(Math.random() * 123) + 1);
  return (
    <div>
      <div>
        <RandomFox image={`http://randomfox.ca/images/${random()}.jpg`} />
      </div>
    </div>
  );
}
