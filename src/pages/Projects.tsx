import { useState, type ReactNode } from "react";
import Table from "../components/Table";
import { projectsData, statsColorMap } from "../data/data";
import { BiGrid, BiTable, BiPencil, BiRightArrowAlt } from "react-icons/bi";
import { CircularIconButton } from "../components/Button";

export default function Projects(): ReactNode {
	const [isGrid, setIsGrid] = useState<boolean>(false);
	return (
		<>
			<div className="flex flex-col gap-4 p-4 w-full">
				<header className="flex items-start justify-between">
					<h1 className="text-3xl mb-2">My Projects</h1>
					<CircularIconButton
						icon={isGrid ? <BiTable /> : <BiGrid />}
						onClick={() => setIsGrid((prev) => !prev)}
						className="button hover:bg-button-active-background hover:text-main-background"
					/>
				</header>
				{isGrid && (
					<div className="w-full grid gap-5 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
						{projectsData.map((project, i) => (
							<div
								key={i}
								className="flex flex-col justify-between bg-white rounded-2xl shadow-md p-3"
							>
								<div className="flex flex-col">
									<div className="flex gap-2 items-center">
										<p className="text-xs font-semibold text-button-foreground">
											{project[2]}
										</p>
										<p
											className={`px-2 inline-flex text-xs leading-5 font-semibold items-center rounded-full`}
											style={{
												color: `${statsColorMap[project[5]]}90`,
												background: `${statsColorMap[project[5]]}10`,
											}}
										>
											{project[5]}
										</p>
									</div>
									<h1 className="mt-2 text-xl">{project[0]}</h1>
									<h2 className="font-semibold">{project[3]}</h2>
									<p className="text-sm">{project[1]}</p>
									<p className="text-xs">{project[4]}</p>
								</div>
								<div className="flex self-end gap-2 mt-2">
									{project[6].split("/").map((action, j) => (
										<>
											{(action.toLowerCase().includes("edit") ||
												action.toLowerCase().includes("view")) && (
												<CircularIconButton
													icon={
														action.toLowerCase().includes("edit") ? (
															<BiPencil />
														) : (
															<BiRightArrowAlt className="rotate-315" />
														)
													}
													key={j}
													className="button hover:bg-button-active-background hover:text-main-background"
												/>
											)}
										</>
									))}
								</div>
							</div>
						))}
					</div>
				)}
				{!isGrid && (
					<div className="">
						<div className="overflow-auto">
							<Table
								header={[
									"Project Title",
									"Freelancer",
									"Category",
									"Budget",
									"Deadline",
									"Status",
									"Actions",
								]}
								data={projectsData}
							/>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
