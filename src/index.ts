export default {
	scheduled: (_, env) => env.UPDATE_WIDGET.create().then(),
} satisfies ExportedHandler<Env>;

export { UpdateWidget } from "./UpdateWidget";
