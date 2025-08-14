import { useState, type ReactNode } from "react";
import { BiBell, BiEnvelope, BiMenuAltLeft, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CircularIconButton } from "./Button";
import { recentActivity } from "../data/data";
import { RAFCard } from "./Card";
import logo from "../assets/worknest.svg";

export default function Header({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): ReactNode {
	const [isShow, setIsShow] = useState<boolean>(false);
	return (
		<header className="fixed z-30 w-full flex justify-between items-center px-4 py-4 backdrop-blur-md bg-white/50">
			<div className="flex gap-2 items-center">
				{isOpen && (
					<BiMenuAltLeft
						className="text-2xl cursor-pointer sm:hidden"
						onClick={() => setIsOpen((prev) => !prev)}
					/>
				)}

				{!isOpen && (
					<BiMenu
						className="text-2xl cursor-pointer sm:hidden"
						onClick={() => setIsOpen((prev) => !prev)}
					/>
				)}

				<Link to={"/"} className="text-2xl cursor-pointer">
					<img src={logo} alt="worknest" className="h-[30px]" />
				</Link>
			</div>

			<div className="flex justify-center items-center gap-2">
				<div className="relative" onClick={() => setIsShow((prev) => !prev)}>
					<CircularIconButton
						icon={<BiBell />}
						className={`${
							isShow ? "active-button" : "button"
						} hover:bg-button-active-background hover:text-main-background`}
					/>
					<div className="absolute bg-red-500 w-2 h-2 top-2.5 rounded-full right-3 "></div>
				</div>
				<CircularIconButton icon={<BiEnvelope />} className="button" />

				<div className="button rounded-full text-xl cursor-pointer h-10 w-10">
					<img
						src="https://i.postimg.cc/8PNJ3nBk/mahmoud-elsayed.jpg"
						alt="user-img"
						className="rounded-full"
					/>
				</div>
			</div>

			{isShow && (
				<div className="absolute top-15 right-10 z-30 bg-white p-2 rounded-2xl max-w-[400px] shadow-sm">
					<div className="flex flex-col gap-2 max-h-[270px] overflow-y-auto">
						{recentActivity.slice(0, 3).map((activity, i) => (
							<RAFCard
								key={i}
								content={activity.activity}
								date={activity.date}
								className="cursor-pointer"
							/>
						))}
					</div>
				</div>
			)}
		</header>
	);
}
