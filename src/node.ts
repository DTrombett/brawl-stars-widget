import { env, loadEnvFile } from "node:process";
import fetchPlayer from "./utils/fetchPlayer.ts";
import fetchTrophyWorlds from "./utils/fetchTrophyWorlds.ts";
import updateWidget from "./utils/updateWidget.ts";

loadEnvFile(".dev.vars");

const [player, worlds] = await Promise.all([
	fetchPlayer(env),
	fetchTrophyWorlds().catch<undefined>((reason) => {
		console.error(reason);
	}),
]);

await updateWidget(player, worlds, env);
console.log("Profile updated!");
