import { RouteBases, type RESTError } from "discord-api-types/v10";

export default async (
	player: Brawl.Player,
	worlds: TrophyWorlds | undefined,
	env: Env,
) => {
	const maxWinStreakBrawler = player.brawlers.reduce((a, b) =>
		b.maxWinStreak > a.maxWinStreak ? b : a,
	);
	const dynamic: ({ name: string } & (
		| { type: 1; value: string }
		| { type: 2; value: number }
		| { type: 3; value: { url: string } }
	))[] = [
		{
			type: 3,
			name: "icon",
			value: {
				url: `https://cdn.brawlify.com/profile-icons/regular/${player.icon.id}.png`,
			},
		},
		{
			type: 1,
			name: "username",
			value: player.name,
		},
		{
			type: 1,
			name: "tag",
			value: player.tag,
		},
		{
			type: 2,
			name: "trophies",
			value: player.trophies,
		},
		{
			type: 2,
			name: "sdVictories",
			value: player.soloVictories + player.duoVictories,
		},
		{
			type: 2,
			name: "3v3Victories",
			value: player["3vs3Victories"],
		},
		{
			type: 2,
			name: "brawlers",
			value: player.brawlers.length,
		},
		{
			type: 2,
			name: "totalPrestigeLevel",
			value: player.totalPrestigeLevel,
		},
		{
			type: 2,
			name: "maxWinStreak",
			value: maxWinStreakBrawler.maxWinStreak,
		},
		{
			type: 3,
			name: "maxWinStreakBrawlerEmoji",
			value: {
				url: `https://cdn.brawlify.com/brawlers/emoji/${maxWinStreakBrawler.id}.png`,
			},
		},
	];
	if (player.rankedRank)
		dynamic.push(
			{
				type: 2,
				name: "rankedElo",
				value: player.rankedElo,
			},
			{
				type: 3,
				name: "rankedRank",
				value: {
					url: `https://cdn.brawlify.com/ranked/tiered/${58000000 + player.rankedRank - 1}.png`,
				},
			},
		);
	if (player.highestAllTimeRankedRank)
		dynamic.push(
			{
				type: 2,
				name: "highestAllTimeRankedElo",
				value: player.highestAllTimeRankedElo,
			},
			{
				type: 3,
				name: "highestAllTimeRankedRank",
				value: {
					url: `https://cdn.brawlify.com/ranked/tiered/${58000000 + player.highestAllTimeRankedRank - 1}.png`,
				},
			},
		);
	if (player.club.name)
		dynamic.push({
			type: 1,
			name: "clubName",
			value: player.club.name,
		});
	if (worlds && Object.keys(worlds).length)
		dynamic.push({
			type: 3,
			name: "trophyRoad",
			value: {
				url: new URL(
					`/trophy_world_common/${
						Object.values(worlds).findLast(
							(_value, index, array) =>
								player.highestTrophies >=
								(array[index - 1]?.TierTrophyThresholds.at(-1) ?? 0),
						)!.IconExportPath
					}.png`,
					`https://${env.DOMAIN}`,
				).href,
			},
		});
	const res = await fetch(
		`${RouteBases.api}/applications/${env.DISCORD_APPLICATION_ID}/users/${env.DISCORD_USER_ID}/identities/0/profile`,
		{
			method: "PATCH",
			body: JSON.stringify({
				data: {
					username: player.name,
					dynamic,
				},
			}),
			headers: {
				authorization: `Bot ${env.DISCORD_TOKEN}`,
				"content-type": "application/json",
			},
		},
	);

	if (res.ok) return;
	throw new Error(
		res.headers.get("Content-Type")?.startsWith("application/json")
			? (await res.json<RESTError>()).message
			: await res.text(),
	);
};
