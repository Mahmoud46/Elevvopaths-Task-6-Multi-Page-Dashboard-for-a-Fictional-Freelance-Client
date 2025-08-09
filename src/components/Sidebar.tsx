import type { ReactNode } from "react";
import { BiHome, BiUser, BiRocket } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { CircularIconButton } from "./Button";

export default function Sidebar({ isOpen }: { isOpen: boolean }): ReactNode {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<aside
			className={`${
				isOpen ? "flex" : "hidden"
			} p-4 flex-col justify-evenly fixed h-full backdrop-blur-md bg-white/50 sm:flex z-20`}
		>
			<div className="flex flex-col justify-center gap-2">
				<CircularIconButton
					icon={<BiHome />}
					onClick={() => navigate("/")}
					className={location.pathname == "/" ? "active-button" : "button"}
				/>
				<CircularIconButton
					icon={<BiRocket />}
					onClick={() => navigate("/projects")}
					className={
						location.pathname == "/projects" ? "active-button" : "button"
					}
				/>

				<CircularIconButton
					icon={<BiUser />}
					onClick={() => navigate("/profile")}
					className={
						location.pathname == "/profile" ? "active-button" : "button"
					}
				/>
			</div>
			<div className="">
				<CircularIconButton icon={<FiSettings />} className="button" />
			</div>
		</aside>
	);
}
