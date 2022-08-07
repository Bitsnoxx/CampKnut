import Header from "../components/header/Header";
import { contributors } from "../content/contributors";

const HallOfFame = () => {
	return (
		<>
			<Header />
			<h1 className="text-center text-3xl mb-4 font-bold">Hall of Fame 🥇</h1>
			<div className="flex justify-center">
				<div className="p-4">
					<table className="w-96">
						<thead>
							<tr>
								<th className="p-2">Username</th>
								<th className="p-2">Help</th>
							</tr>
						</thead>
						<tbody>
							{contributors.map((contributor, index) => (
								<tr
									key={`halloffame-${contributor.username}`}
									className={index % 2 === 0 ? 'bg-knut-light-bg-info dark:bg-knut-dark-bg-info' : ''}
								>
									<td className="p-2">{contributor.username}</td>
									<td className="p-2">{contributor.help}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default HallOfFame;
