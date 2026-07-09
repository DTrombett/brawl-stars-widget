import { env, loadEnvFile } from "node:process";
import fetchPlayer from "./utils/fetchPlayer";
import fetchTrophyWorlds from "./utils/fetchTrophyWorlds";
import updateWidget from "./utils/updateWidget";

loadEnvFile();

const [player, worlds] = await Promise.all([
	fetchPlayer(env),
	fetchTrophyWorlds().catch<undefined>((reason) => {
		console.error(reason);
	}),
]);

await updateWidget(player, worlds, env);
