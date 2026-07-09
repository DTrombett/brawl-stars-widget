export default async () => {
	const res = await fetch(
		new URL("csv_logic/trophy_worlds", "https://api.brawlapi.com/game/"),
	);

	if (res.ok) return res.json<TrophyWorlds>();
	throw new Error(
		res.headers.get("Content-Type")?.startsWith("application/json")
			? (await res.json<{ message: string }>()).message
			: await res.text(),
	);
};
