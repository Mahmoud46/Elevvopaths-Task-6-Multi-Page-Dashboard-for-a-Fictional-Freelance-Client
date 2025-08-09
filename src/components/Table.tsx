import type { ReactNode } from "react";
import { statsColorMap } from "../data/data";

export default function Table({
	header,
	data,
}: {
	header: string[];
	data: string[][];
}): ReactNode {
	return (
		<div className="">
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-100">
					<tr>
						{header.map((head, i) => (
							<th
								key={i}
								className={`sticky ${i == 0 ? "left-0" : ""} top-0 ${
									i == 0 ? "z-11" : "z-10"
								} bg-gray-100 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-fit`}
							>
								{head}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{data.map((row, i) => (
						<tr key={i}>
							{row.map((content, j) => (
								<td
									key={j}
									className={`${
										j == 0 ? "sticky left-0 font-medium" : ""
									} text-gray-${
										j == 0 ? 900 : 500
									} bg-white z-10 px-6 py-4 whitespace-nowrap text-sm ${
										header[header.length - 1].includes("Action") &&
										j == row.length - 1
											? "cursor-pointer hover:text-blue-400"
											: ""
									}`}
								>
									{!(
										header[header.length - 2].includes("Status") &&
										j == row.length - 2
									) && content}
									{header[header.length - 2].includes("Status") &&
										j == row.length - 2 && (
											<span
												className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
												style={{
													color: `${statsColorMap[content]}90`,
													background: `${statsColorMap[content]}10`,
												}}
											>
												{content}
											</span>
										)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
