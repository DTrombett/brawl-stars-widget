export default async (env: Env) => {
	const res = await fetch(
		new URL(
			`players/${encodeURIComponent(env.PLAYER_TAG)}`,
			env.BRAWL_API_BASE,
		),
		{
			headers: {
				"x-env": env.NODE_ENV,
				authorization: `Bearer ${env.BRAWL_STARS_API_TOKEN}`,
			},
		},
	);

	if (res.ok) return res.json<Brawl.Player>();
	throw new Error(
		res.headers.get("Content-Type")?.startsWith("application/json")
			? (await res.json<{ message: string }>()).message
			: await res.text(),
	);
};
