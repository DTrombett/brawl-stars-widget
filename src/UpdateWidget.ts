import { env, WorkflowEntrypoint, type WorkflowStep } from "cloudflare:workers";
import fetchPlayer from "./utils/fetchPlayer";
import fetchTrophyWorlds from "./utils/fetchTrophyWorlds";
import updateWidget from "./utils/updateWidget";

export class UpdateWidget extends WorkflowEntrypoint<Env> {
	override async run({}, step: WorkflowStep) {
		const [player, worlds] = await Promise.all([
			step.do("Fetch player data", fetchPlayer.bind(null, env)),
			step
				.do("Fetch trophy road worlds", fetchTrophyWorlds)
				.catch<undefined>((reason) => {
					console.error(reason);
				}),
		]);

		await step.do(
			"Update widget",
			updateWidget.bind(null, player, worlds, env),
		);
	}
}
