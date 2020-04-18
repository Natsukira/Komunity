module.exports = {
	name: 'mods',
	description: 'Aide',
	execute(message, args) {
		const argsembed = {
				color: 0xffffff,
				fields: [
					{
						name: `Arguments invalides, liste des arguments :`,
						value:  `parts, utilitaire, planet`
					}
				],
					
			};
	
	if (!args.length) {
		return message.channel.send({ embed: argsembed });
	} else {
		if(args[0] === "parts") {
			
			const partsembed = {
				color: 0xd49e0b,
				fields: [
					{
						name: `Liste des mods ajoutant des parts :`,
						value:  `(Liste non exhaustive) `
					},
					{
						name: '\u200b',
						value: '\u200b',
		 			},
		 			{
						name: `Restock`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/182679-18x-restock-revamping-ksps-art-january-12th-2020/) / [Download](https://spacedock.info/mod/2098/Restock)`
					},
					{
						name: `Cryo Engines`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/106089-19x-cryogenic-engines-high-isp-chemical-rockets-february-20%C2%A02020/) / [Download](https://spacedock.info/mod/709/Cryogenic%20Engines)`
					},
					{
						name: `Near Future Solar`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/155465-19x-near-future-technologies-19-updates-feb-20/) / [Download](https://spacedock.info/mod/559/Near%20Future%20Solar)`
					},
					{
						name: `Near Future Exploration`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/155465-19x-near-future-technologies-19-updates-feb-20/) / [Download](https://spacedock.info/mod/2305/Near%20Future%20Exploration)`
					},
					{
						name: `Near Future Propulsion `,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/155465-19x-near-future-technologies-19-updates-feb-20/) / [Download](https://spacedock.info/mod/557/Near%20Future%20Propulsion)`
					},
					{
						name: `Near Future Electrical`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/155465-19x-near-future-technologies-19-updates-feb-20/) / [Download](https://spacedock.info/mod/558/Near%20Future%20Electrical)`
					},
					{
						name: `Near Future Spacecraft`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/155465-19x-near-future-technologies-19-updates-feb-20/) / [Download](https://spacedock.info/mod/708/Near%20Future%20Spacecraft)`
					},
					{
						name: `Near Future Construction`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/155465-19x-near-future-technologies-19-updates-feb-20/) / [Download](https://spacedock.info/mod/563/Near%20Future%20Construction)`
					},
					
					{
						name: `Near Future Launch Vehicles`,
						value: `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/155465-19x-near-future-technologies-19-updates-feb-20/) / [Download](https://spacedock.info/mod/1434/Near%20Future%20Launch%20Vehicles)`
					},
					{
						name: `Near Future Aeronautics`,
						value: `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/155465-19x-near-future-technologies-19-updates-feb-20/) / [Download](https://spacedock.info/mod/1957/Near%20Future%20Aeronautics)`
					},
					{
						name: `Infernal Robotics`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/184787-infernal-robotics-next/) / [Download](https://github.com/meirumeiru/InfernalRobotics/releases)`
					},
					{
						name: `SSPXR`,
						value: `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/170211-19x-stockalike-station-parts-redux-february-20th-2020/) / [Download](https://spacedock.info/mod/1682/Stockalike%20Station%20Parts%20Expansion%20Redux)`
					},

				],
					
			};
			message.channel.send({ embed: partsembed });
		} else if(args[0] === "utilitaire") {
				const utilityembed = {
				color: 0xff9900,
				fields: [
					{
						name: `Liste des mods utilitaires :`,
						value:  `(Liste non exhaustive) `
					},
					{
						name: '\u200b',
						value: '\u200b',
		 			},
					{
						name: `Kerbal Joint Reinforcement`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/184206-kerbal-joint-reinforcement-next/) / [Download](https://spacedock.info/mod/153/Kerbal%20Joint%20Reinforcement)`
					},
					{
						name: `Kerbal Engineer Redux`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/17833-130-kerbal-engineer-redux-1130-2017-05-28/) / [Download](https://github.com/jrbudda/KerbalEngineer/releases)`
					},
					{
						name: `Mechjeb`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/154834-17x-anatid-robotics-mumech-mechjeb-autopilot-284-14-june-2019/) / [Download](https://spacedock.info/mod/1854/MechJeb%20and%20Engineer%20For%20All)`
					},
					{
						name: `Docking Port Alignement Indicator`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/40423-16x-docking-port-alignment-indicator-version-683-updated-030319/) / [Download](https://spacedock.info/mod/543/Docking%20Port%20Alignment%20Indicator)`
					},
					{
						name: `Transfer Window Planner`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/84005-14x-transfer-window-planner-v1630-march-18/) / [Download](https://spacedock.info/mod/713/Transfer%20Window%20Planner)`
					},
					{
						name: `BetterTimeWarp`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/154935-151-161-172-bettertimewarpcontinued-customizable-time-warp-and-lossless-physics-warp/) / [Download](https://spacedock.info/mod/1162/BetterTimeWarpContinued)`
					},
					{
						name: `Kronal Vessel Viewer`,
						value: `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/152430-17-kvv-kronal-vessel-viewer-exploded-ship-view/) / [Download](https://spacedock.info/mod/1092/Kronal%20Vessel%20Viewer%20Continued)`
					},
					{
						name: `Hyperedit`,
						value: `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/34785-17-hyperedit-v158-july-10-2018-cheat-teleporter-orbitplanet-editor-more/) / [Download](https://www.kerbaltek.com/_downloads/hyperedit/HyperEdit-1.5.8_for-KSP-1.4.4.zip)`
					},
					{
						name: `Trajectories`,
						value: `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/162324-131-181-trajectories-v230-2019-12-03-atmospheric-predictions/) / [Download](https://spacedock.info/mod/396/Trajectories)`
					}
					

				],
					
			};
			message.channel.send({ embed: utilityembed });
		} else if(args[0] === "planet") {
				const utilityembed = {
				color: 0xff9900,
				fields: [
					{
						name: `Liste des planets packs:`,
						value:  `(Liste non exhaustive) `
					},
					{
						name: '\u200b',
						value: '\u200b',
		 			},
					{
						name: `KSRSS`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/192818-181-ksrssve-better-grounds-for-better-flights/) / [Download](https://github.com/KerbalFrench/KSRSS/releases)`
					},
					{
						name: `RSS`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/177216-173-real-solar-system-v164-26-nov-2019/) / [Download](https://github.com/KSP-RO/RealSolarSystem/releases/tag/v16.4)`
					},
					{
						name: `Beyond Home`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/182708-181-planets-beyond-home-13/) / [Download](https://github.com/Gameslinx/BeyondHomePlanetMod/releases)`
					},
					{
						name: `JNSQ`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/184880-181-jnsq-090-03-feb-2020/) / [Download](https://github.com/Galileo88/JNSQ/releases)`
					},
					{
						name: `Outer Planets Mod`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/184789-131-18x-outer-planets-mod-v226-4th-feb-2020/) / [Download](https://github.com/Poodmund/Outer-Planets-Mod/releases/)`
					},
					{
						name: `Galaxies Unbound`,
						value:  `[Thread](https://forum.kerbalspaceprogram.com/index.php?/topic/183536-181-galaxies-unbound-nova-kirbani-123-1-08-february-2020/) / [Download](https://spacedock.info/mod/2320/Galaxies%20Unbound:%20Nova%20Kirbani)`
					},
				],
					
			};
			message.channel.send({ embed: utilityembed });
		} else {
			return message.channel.send( { embed: argsembed });
		}
	}
	},
};
