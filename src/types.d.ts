// These are from https://github.com/DTrombett/ms-bot/blob/main/src/types.ts
namespace Brawl {
	type Player = {
		club: PlayerClub;
		"3vs3Victories": number;
		isQualifiedFromChampionshipChallenge: boolean;
		icon: PlayerIcon;
		tag: string;
		name: string;
		trophies: number;
		expLevel: number;
		expPoints: number;
		highestTrophies: number;
		totalPrestigeLevel: number;
		soloVictories: number;
		duoVictories: number;
		bestRoboRumbleTime: number;
		bestTimeAsBigBrawler: number;
		brawlers: BrawlerStatList;
		rankedSeasonId: number;
		rankedRank: number;
		rankedRankName?: string;
		rankedElo: number;
		highestSeasonRankedRank: number;
		highestSeasonRankedRankName?: string;
		highestSeasonRankedElo: number;
		highestAllTimeRankedRank: number;
		highestAllTimeRankedRankName?: string;
		highestAllTimeRankedElo: number;
		nameColor: string;
	};
	type PlayerClub = Partial<{ tag: string; name: string }>;
	type PlayerIcon = { id: number };
	type BrawlerStatList = BrawlerStat[];
	type BrawlerStat = {
		starPowers: StarPowerList;
		hyperCharges: HyperChargeList;
		gadgets: AccessoryList;
		currentWinStreak: number;
		id: number;
		rank: number;
		trophies: number;
		highestTrophies: number;
		prestigeLevel: number;
		power: number;
		buffies: BrawlerBuffies;
		gears: GearStatList;
		maxWinStreak: number;
		name: JsonLocalizedName;
		skin: Skin;
	};
	type HyperChargeList = HyperCharge[];
	type HyperCharge = { name: JsonLocalizedName; id: number };
	type BrawlerBuffies = {
		gadget: boolean;
		starPower: boolean;
		hyperCharge: boolean;
	};
	type Skin = { name: JsonLocalizedName; id: number };
	type AccessoryList = Accessory[];
	type Accessory = { id: number; name: JsonLocalizedName };
	type JsonLocalizedName = string;
	type StarPowerList = StarPower[];
	type StarPower = { id: number; name: JsonLocalizedName };
	type GearStatList = GearStat[];
	type GearStat = { id: number; name: JsonLocalizedName; level: number };
	type BrawlerList = Brawler[];
	type Brawler = {
		gadgets: AccessoryList;
		name: JsonLocalizedName;
		id: number;
		starPowers: StarPowerList;
		hyperCharges: HyperChargeList;
		gears: GearStatList;
	};
	type Club = {
		tag: string;
		name: string;
		description: string;
		trophies: number;
		requiredTrophies: number;
		members: ClubMemberList;
		type: "open" | "inviteOnly" | "closed" | "unknown";
		badgeId: number;
		isFamilyFriendly: boolean;
	};
	type ClubMemberList = ClubMember[];
	type ClubMember = {
		icon: PlayerIcon;
		tag: string;
		name: string;
		trophies: number;
		role:
			| "notMember"
			| "member"
			| "vicePresident"
			| "president"
			| "unknown"
			| "senior";
		nameColor: string;
	};
	type EventTypeList = EventType[];
	type EventType = { name: JsonLocalizedName; id: number };
	type BattleList = Battle[];
	type Battle = { event: Event; battleTime: string; battle: BattleResult };
	type Event = { mode: string; modeId: number; id: number; map: string };
	type BattlePlayer = {
		tag: string;
		name: string;
		brawler?: { id: number; name: string; power: number; trophies: number };
		brawlers?: {
			id: number;
			name: string;
			power: number;
			trophies: number;
		}[];
	};
	type BattleResult = {
		mode: string;
		type: string;
		result?: string;
		duration?: number;
		trophyChange?: number;
		starPlayer?: BattlePlayer;
		teams?: BattlePlayer[][];
		players?: BattlePlayer[];
	};
	type Paginated<T> = {
		items: T[];
		paging: { cursors: { after?: string; before?: string } };
	};
}

type TrophyWorlds = Record<
	string,
	{
		id: string;
		Name: string;
		WorldNumber: number;
		IconExportPath: string;
		TierTrophyThresholds: number[];
		NameTID: string;
	}
>;

namespace NodeJS {
	interface Process {
		env: Env;
	}
}
