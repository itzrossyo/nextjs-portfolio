import Image from "next/image";
import HeroSection from "./compoments/HeroSection";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-stone-800 container mx-auto px-12 py-4">
			<HeroSection />
		</main>
	);
}
