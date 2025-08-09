import { type ReactNode, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Toaster } from "react-hot-toast";

export default function App(): ReactNode {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
			<Toaster />
			<Header setIsOpen={setIsOpen} isOpen={isOpen} />
			<main className="gap-4 relative mt-18">
				<Sidebar isOpen={isOpen} />
				<section className="flex items-start justify-start sm:ml-20 ml-0">
					<Routes>
						<Route index element={<Overview />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/profile" element={<Profile />} />
					</Routes>
				</section>
			</main>
		</>
	);
}
