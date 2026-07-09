let wpRequire = webpackChunkdiscord_developers.push([[Symbol()], {}, (r) => r]);
webpackChunkdiscord_developers.pop();

let ApexStore = Object.values(wpRequire.c).find(
	(x) => x?.exports?.A?.createOverride,
).exports.A;
let UserStore = Object.values(wpRequire.c).find(
	(x) => x?.exports?.A?.__proto__?.getCurrentUser,
).exports.A;
let FluxDispatcher = Object.values(wpRequire.c).find(
	(x) => x?.exports?.A?.__proto__?.flushWaitQueue,
).exports.A;
let api = Object.values(wpRequire.c).find((x) => x?.exports?.Bo?.get).exports
	.Bo;
let globalCopy = navigator.userAgent.includes("Firefox")
	? navigator.clipboard.writeText.bind(navigator.clipboard)
	: copy;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const userId = UserStore.getCurrentUser().id;
console.log(
	"[Widget Creator] Creating a new app... Please solve the captcha if prompted",
);
const appRes = await api.post({
	url: "/applications",
	body: { name: "Brawl Stars Profile", team_id: null },
});
FluxDispatcher.dispatch({
	type: "APPLICATION_CREATE_SUCCESS",
	application: appRes.body,
});
const appId = appRes.body.id;

console.log("[Widget Creator] Enabling social sdk...");
await api.post({
	url: `/applications/${appId}/social-sdk/enable`,
	body: {
		name: "a",
		business_email: "foo@bar.com",
		game_or_studio_name: "a",
		game_or_studio_url: "",
		email_updates_consent: false,
		country_or_region: "United States",
		title_role: "Founder",
		target_platforms: [],
		form_type: "Dev Solutions",
		sfdc_leadsource: "Dev Portal",
		utm_campaign: "SDK Enable Form",
	},
});

console.log("[Widget Creator] Creating a new widget...");
const configRes = await api.post({
	url: `/applications/${appId}/widget-configs`,
	body: { display_name: "Brawl Stars Profile" },
});
const configId = configRes.body.config_id;
await api.patch({
	url: `/applications/${appId}/widget-configs/${configId}`,
	body: {
		surfaces: {
			widget_bottom: {
				layout: "widget_bottom_stats",
				components: {
					stat_5: {
						fields: {
							value: {
								value_type: "data",
								presentation_type: "number",
								value: "highestAllTimeRankedElo",
								fallback: {
									value_type: "custom_string",
									presentation_type: "text",
									value: "0",
								},
							},
							icon: {
								value_type: "data",
								presentation_type: "image",
								value: "highestAllTimeRankedRank",
							},
							label: {
								value_type: "custom_string",
								presentation_type: "text",
								value: "Highest Ranked",
							},
						},
					},
					stat_1: {
						fields: {
							value: {
								value_type: "data",
								presentation_type: "number",
								value: "trophies",
								fallback: {
									value_type: "custom_string",
									presentation_type: "text",
									value: "0",
								},
							},
							icon: {
								value_type: "data",
								presentation_type: "image",
								value: "trophyRoad",
								fallback: {
									value_type: "application_asset",
									presentation_type: "image",
									value: "65",
								},
							},
							label: {
								value_type: "custom_string",
								presentation_type: "text",
								value: "Total Trophies",
							},
						},
					},
					stat_3: {
						fields: {
							value: {
								value_type: "data",
								presentation_type: "number",
								value: "sdVictories",
								fallback: {
									value_type: "custom_string",
									presentation_type: "text",
									value: "0",
								},
							},
							icon: {
								value_type: "application_asset",
								presentation_type: "image",
								value: "83",
							},
							label: {
								value_type: "custom_string",
								presentation_type: "text",
								value: "Showdown Wins",
							},
						},
					},
					stat_2: {
						fields: {
							value: {
								value_type: "data",
								presentation_type: "number",
								value: "rankedElo",
								fallback: {
									value_type: "custom_string",
									presentation_type: "text",
									value: "0",
								},
							},
							icon: {
								value_type: "data",
								presentation_type: "image",
								value: "rankedRank",
							},
							label: {
								value_type: "custom_string",
								presentation_type: "text",
								value: "Current Ranked",
							},
						},
					},
					stat_4: {
						fields: {
							value: {
								value_type: "data",
								presentation_type: "number",
								value: "maxWinStreak",
							},
							icon: {
								value_type: "data",
								presentation_type: "image",
								value: "maxWinStreakBrawlerEmoji",
								fallback: {
									value_type: "application_asset",
									presentation_type: "image",
									value: "356",
								},
							},
							label: {
								value_type: "custom_string",
								presentation_type: "text",
								value: "Max Win Streak",
							},
						},
					},
					stat_6: {
						fields: {
							value: {
								value_type: "data",
								presentation_type: "number",
								value: "3v3Victories",
								fallback: {
									value_type: "custom_string",
									presentation_type: "text",
									value: "0",
								},
							},
							icon: {
								value_type: "application_asset",
								presentation_type: "image",
								value: "81",
							},
							label: {
								value_type: "custom_string",
								presentation_type: "text",
								value: "3v3 Wins",
							},
						},
					},
				},
			},
			add_widget_preview: {
				layout: "add_widget_preview_contained",
				components: {
					contained_image: {
						fields: {
							image: {
								value_type: "data",
								presentation_type: "image",
								value: "icon",
								fallback: {
									value_type: "application_asset",
									presentation_type: "image",
									value: "108",
								},
							},
						},
					},
				},
			},
			widget_top: {
				layout: "widget_top_contained",
				components: {
					contained_image: {
						fields: {
							image: {
								value_type: "data",
								presentation_type: "image",
								value: "icon",
								fallback: {
									value_type: "application_asset",
									presentation_type: "image",
									value: "108",
								},
							},
						},
					},
					title: {
						fields: {
							text: {
								value_type: "data",
								presentation_type: "text",
								value: "username",
							},
						},
					},
					subtitle_1: {
						fields: {
							text: {
								value_type: "data",
								presentation_type: "text",
								value: "tag",
							},
							label: {
								value_type: "custom_string",
								presentation_type: "text",
								value: "Tag",
							},
						},
					},
					subtitle_3: {
						fields: {
							text: {
								value_type: "data",
								presentation_type: "number",
								value: "totalPrestigeLevel",
								fallback: {
									value_type: "custom_string",
									presentation_type: "text",
									value: "0",
								},
							},
							icon: {
								value_type: "application_asset",
								presentation_type: "image",
								value: "39",
							},
							label: {
								value_type: "custom_string",
								presentation_type: "text",
								value: "Prestige",
							},
						},
					},
					subtitle_2: {
						fields: {
							text: {
								value_type: "data",
								presentation_type: "text",
								value: "clubName",
							},
							icon: {
								value_type: "application_asset",
								presentation_type: "image",
								value: "9",
							},
							label: {
								value_type: "custom_string",
								presentation_type: "text",
								value: "Club",
							},
						},
					},
				},
			},
		},
	},
});
await api.post({
	url: `/applications/${appId}/widget-configs/${configId}/publish`,
});

console.log("[Widget Creator] Adding the widget to profile...");
await api.patch({
	url: `/applications/${appId}`,
	body: { redirect_uris: ["http://127.0.0.1/callback"] },
});
await api.post({
	url: `/oauth2/authorize?client_id=${appId}&response_type=token&scope=sdk.social_layer_presence`,
	body: { authorize: true },
});
const profileRes = await api.get({ url: `/users/${userId}/profile` });
const existingWidgets = profileRes.body.widgets;
existingWidgets.unshift({
	data: { type: "application", application_id: appId },
});
await api.put({
	url: `/users/@me/widgets`,
	body: { widgets: existingWidgets },
});
