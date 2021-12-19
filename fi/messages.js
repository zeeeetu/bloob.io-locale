import error from './error'
import game from './game'
import chat from './chat'

export default {
	name: 'Bloob.io',
	error,
	game,
	chat,
	header: {
		message: {
			lobby: 'Match Lobby',
			finished: 'Match Finished',
			tied: `Match Tied`,
			finishedRematch: 'Rematch Starting Soon',
			inProgress: `Match in Progress`,
			staleMoves: `Match Staled — %{staleCount} moves with no take over`,
			concede: `Match Finished — Opponent chose to forfeit`,
			winner: `Match Won by %{name}`,
			inactive: `Match Ended Due to Inactivity`,
			late: `Match Ended Due to Missing %{turns} Turn(s)`,
			pickActionCard: 'Picking Action Card',
			makingCardSelections: 'Making Card Selection',
			handDump: 'Dump Round',
			handPreview: 'Hand Preview',
			voting: 'Voting',
			voteResults: 'Vote Results',
			flippingField: 'Flipping Field',
			removingRow: 'Removing Row',
			yourTurn: 'Your Turn',
			nameTurn: `%{name}'s Turn`,
			roundCount: `Round %{current} out of %{total}`
		},
		description: {
			lobby: `Waiting for players`,
			start: `Match starts in %{TEXT}...`,
			rematchStart: `Rematch starts in %{TEXT}...`,
			timeRemaining: `%{CLOCK} remaining...`,
			nextRound: `Next round in %{TEXT}...`,
			youWon: `You won`,
			nameWon: `%{name} has won`
		}
	},
	placeholder: {
		cardSetId: 'Fill in card set ID...',
		cardContent: 'Fill in card content...',
		cardSetName: 'Fill in name for this card set...',
		nickname: 'Fill in a nickname...',
		matchId: 'Match ID or URL',
		message: 'Message...',
		username: 'Username',
		password: 'Password'
	},
	language: {
		'nl-NL': 'Dutch',
		'en-US': 'English (US)',
		'en-GB': 'English (UK)',
		'fr-FR': 'French',
		'de-DE': 'German',
		'it-IT': 'Italian',
		'pl-PL': 'Polish',
		'pt-BR': 'Portuguese (BR)',
		'es-ES': 'Spanish (EU)',
		'es-MX': 'Spanish (MX)',
		'sv-SE': 'Swedish'
		'fi-FI': 'Finnish'
	},
	topHeader: {
		matchesWaiting: `<b>0</b> matches waiting | <b>1</b> match waiting | <b>{count}</b> matches waiting`,
		playingGame: `<b>{count}</b> playing this game`,
		online: `<b>{count}</b> online`
	},
	content: {
		percentage: '{percentage}%',
		percentageDisabled: '{percentage}% (Disabled)',
		scrollBackDown: 'Scroll back down',
		pickYourself: 'Pick for yourself',
		highPing: 'Your ping is high (%{ping}ms)',
		round: 'Round (%{current}/%{total})',
		skip: 'Skip (%{current}/%{total})',
		ready: 'Ready (%{current}/%{total})',
		skipStep: `This step can also be skipped if over half the users vote to.`,
		skipStepAll: `This step can also be skipped if all users vote to.`,
		voteReduceTime: `The remaining time is automatically reduced when everyone has voted.`,
		filterDisclaimer: `Please note that this filter can only be guaranteed for official card sets. Custom sets may not work with this filter.`,
		resize: '<span class="warning-text">Resizes the interface to fit field</span>',
		winningSelection: `%{name} won this round with selection %{selection}`,
		noticeDescription: 'A notice is stuck on the top of the page until removed',
		actionResponseCardCounter: `Action & response card counter. Some sets use the same cards; duplicates are removed automatically. Filtering <b>NSFW</b> or <b>Specific Cards</b> also reduces the total amount.`
	},
	category: {
		misc: 'Misc',
		field: 'Field',
		dump: 'Dump',
		bomb: 'Bomb',
		filter: 'Filter',
		times: 'Times',
		round: 'Round',
		flip: 'Flip',
		default: 'Default',
		fallback: 'Fallback Conditions',
		take: 'Take Over',
		tetris: 'Tetris',
		basic: 'Basic',
		language: 'Language'
	},
	time: {
		hours: '0 hours | 1 hour | {count} hours',
		minutes: '0 minutes | 1 minute | {count} minutes',
		seconds: '0 seconds | 1 second | {count} seconds'
	},
	count: {
		kills: '0 kills | 1 kill | {count} kills',
		deaths: '0 deaths | 1 death | {count} deaths',
		lives: '0 lives | 1 life | {count} lives',
		files: '0 files | 1 file | {count} files',
		points: '0 points | 1 point | {count} points',
		pieces: '0 pieces | 1 piece | {count} pieces',
		wins: '0 wins | 1 win | {count} wins',
		cards: '0 cards | 1 card | {count} cards',
		moves: '0 moves | 1 move | {count} moves',
		playing: '0 playing | 1 playing | {count} playing',
		players: '0 players | 1 player | {count} players',
		selectedCards: 'No cards selected | 1 card selected | {count} cards selected',
		matches: '0 matches | 1 match | {count} matches',
		matchesFound: '0 matches found | 1 match found | {count} matches found',
		matchesWaiting: '0 matches waiting | 1 match waiting | {count} matches waiting',
		needMorePlayers: 'Need 0 more players | Need 1 more player | Need {count} more players'
	},
	misc: {
		kills: 'Kills',
		deaths: 'Deaths',
		bot: 'Bot',
		bots: 'Bots',
		missingSet: 'Missing Set',
		share: 'Share',
		copy: 'Copy',
		matchId: 'Match ID',
		vibration: 'Vibration',
		unavailable: 'Unavailable',
		changeLog: 'Change Log',
		status: 'Status',
		information: 'Information',
		language: 'Language',
		toggle: 'Toggle',
		concedeGame: 'Forfeit Game',
		processFiles: 'Process Files',
		sendMessage: 'Send Message',
		chat: 'Chat',
		viewAllGames: 'View all games',
		refreshWindow: 'Refresh Window',
		makeHost: 'Make Host',
		kickUser: 'Kick User',
		menu: 'Menu',
		admin: 'Admin',
		maintenance: 'Maintenance',
		notice: 'Notice',
		pending: 'Pending',
		connection: 'Connection',
		ping: 'Ping',
		timeOffset: 'Time Offset',
		version: 'Version',
		userID: 'User ID',
		unknown: 'Unknown',
		adminLogin: 'Admin Login',
		globalAnnouncement: 'Global Announcement',
		broadcast: 'Broadcast',
		login: 'Login',
		about: 'About',
		public: 'Public',
		private: 'Private',
		yes: 'Yes',
		no: 'No',
		disabled: 'Disabled',
		enabled: 'Enabled',
		excluded: 'Excluded',
		included: 'Included',
		nsfw: 'NSFW',
		specificCards: 'Specific Cards',
		view: 'View',
		new: 'New',
		fixed: 'Fixed',
		changed: 'Changed',
		confirm: 'Confirm',
		close: 'Close',
		edit: 'Edit',
		delete: 'Delete',
		cancel: 'Cancel',
		reset: 'Reset',
		guest: 'Guest',
		start: 'Start',
		playAsGuest: 'Play as Guest',
		download: 'Download',
		settings: 'Settings',
		preset: 'Preset',
		averageLength: 'Avg. Length',
		largestTake: 'Largest Take',
		takes: 'Takes',
		pieces: 'Pieces',
		words: 'Words',
		score: 'Score',
		and: 'and',
		vs: 'vs',
		rank: 'Rank',
		points: 'Points',
		player: 'Player',
		players: 'Players',
		selectAll: 'Select all',
		deselectAll: 'Deselect all',
		areYouSure: 'Are you sure?',
		resetData: 'Reset Data',
		customise: 'Customise',
		cancelCountdown: 'Cancel Countdown',
		inviteOthers: 'Invite Others',
		rematch: 'Rematch',
		activeFilters: 'Active Filters',
		minMax: 'Min. %{min} | Max. %{max}',
		playersMinMax: '%{min}-%{max} players',
		madeBy: 'Made by %{name}',
		incrementCounter: 'Increments of %{count}',
		selectedOfLimit: 'Selected %{current} out of %{total} limit',
		helpLocalise: 'Help improve localisation',
		tiredOfWaiting: 'Tired of waiting?',
		playAgainstBots: 'Play Against Bots',
		howToPlay: 'Learn how to play this game',
		volume: {
			title: 'Volume',
			interface: 'Interface Volume',
			effects: 'Effects Volume'
		},
		match: {
			random: 'Play Random Opponents',
			create: 'Create Match',
			rematch: 'Rematch',
			start: 'Start Match',
			starting: 'Match Starting',
			leave: 'Leave Match',
			join: 'Join Match',
			rejoin: 'Rejoin Match',
			full: 'Full Match',
			waiting: 'Waiting for host to start the match'
		},
		matches: {
			browse: 'Browse Matches',
			available: 'Available Matches',
			noneAvailable: 'No Available Matches'
		},
		game: {
			join: 'Join %{title} Match',
			help: '%{title} Help',
			host: 'Host',
			duration: 'Game Duration',
			menu: 'Game Menu'
		},
		card: {
			pick: 'Pick Cards',
			content: 'Card Content',
			editor: 'Card Editor',
			create: 'Create Card',
			none: 'No Cards',
			total: 'Total Cards',
			view: 'View Cards',
			noneFound: 'No Cards Found',
			type: {
				title: 'Card Type',
				black: 'Action (Black)',
				white: 'Response (White)'
			},
			sets: {
				create: 'Create Card Set',
				import: 'Import Card Set',
				name: 'Card Set Name',
				title: 'Card Sets',
				importer: 'Card Set Importer',
				namedTitle: 'Card Set "%{title}"',
				custom: 'Custom Card Sets',
				default: 'Default Card Sets',
				noneFound: 'No Sets Found',
				noneSelected: 'No Sets Selected',
				edit: 'Edit Sets',
				view: 'View Sets'
			}
		},
		select: {
			language: 'Select Your Language',
			color: 'Select Your Colour'
		},
		changes: {
			latest: 'Latest Changes',
			new: 'New Changes',
			save: 'Save Changes',
			previous: 'See Previous Changes'
		},
		return: {
			menu: 'Return to Menu',
			lobby: 'Return to Lobby'
		}
	},
	info: {
		highPing: `The ping is the time it takes for you to communicate with the server. You are seeing everything later than other players and may experience jitter and delays.`,
		menu: `A collection of multiplayer browser-based games without the need to make an account. Play hassle free and customise the experience to your liking.`,
		hasBots: 'This game can be played against bots.',
		file: {
			upload: `Click to browse or drag your file(s) in here`,
			uploadAdditional: `Add more files by dragging or clicking here`,
			download: {
				automatic: `Opens a new tab and automatically starts .csv download`,
				saveAs: `Opens a new tab where you will then have to save the file by right clicking and using "Save As"`
			}
		},
		matchmaking: {
			cancel: 'Cancel Matchmaking',
			searching: 'Looking for opponents... (%{time})',
			found: 'Match found! Starting in %{time}...'
		},
		chat: {
			empty: {
				title: 'No Messages',
				description: 'Be the first to send a message!'
			}
		},
		copy: {
			url: {
				success: `Copied URL to clipboard!`,
				error: `Unable to copy to clipboard`
			}
		},
		user: {
			inactive: `User is not connected to this match.`
		},
		match: {
			leave: {
				player: `You may not be able to join back if you choose to leave.`,
				alone: `Since you are the only person in the game, the match will be closed when you leave.`,
				others: `Somebody else will become the new host when you leave.`
			},
			join: {
				waiting: `Waiting for other player to accept rematch...`,
				starting: `Rematch will start in %{time}...`,
				private: `You can join a private match by filling in the four-digit ID.`,
				rematch: `%{name} would like a rematch`
			},
			makeHost: `You are about to make "%{name}" the new host.`,
			kickUser: `You are about to kick "%{name}" from this match.`,
			finishedSettings: `Finished editing the match settings?`,
			available: `New matches will show up here`,
			rematch: `Would you like to play again?`,
			public: `<b>Public: </b>Anyone can join by browsing the available matches.`,
			private: `<b>Private: </b>Players can only join using the URL or 4-digit ID.`
		},
		judge: {
			pickingCard: `Judge %{name} is picking an action card`,
			waitForPicks: `You are the <b>judge</b> this round — wait for everyone to make their picks`
		},
		navigate: {
			self: `Navigate yourself`,
			judge: `See what judge sees`
		},
		opponent: {
			inactive: `Your opponent was inactive`,
			multipleInactive: `All opponents were inactive`
		},
		maintenance: {
			title: 'Under Maintenance',
			noMatch: 'You cannot make or join a match right now',
			description: 'During maintenance, nobody can create or join a match'
		},
		vote: {
			noSelfVote: 'Cannot vote for yourself',
			selection: 'Vote for %{selection}',
			selectionChange: 'Change vote to %{selection}',
			selected: 'You voted for %{selection}'
		},
		about: {
			description: `Bloob.io is a project of passion consisting of multiplayer browser games. This site will remain ad-free and all games entirely configurable to your liking. Suggestions are always welcome, feel free to reach out!`,
			licensing: `Some games can be licensed for use on your site or platform (with custom adjustments). Get in touch in case you are interested.`,
			developedBy: 'Developed by %{name}',
			iconsSource: 'Icons courtesy of %{name} (Free)',
			soundsSource: 'Sounds provided by %{name} (Licensed)',
			rottenApples: 'Rotten Apples based on %{name} (Creative Commons BY-NC-SA 2.0)',
			support: 'Donate'
		},
		card: {
			sets: {
				importId: {
					title: `Import card sets from an ID (such as from Many Decks)`,
					content: `You can fill in the ID of card sets from popular providers below. Once downloaded you can simply upload them below.`
				},
				loading: 'Card sets are being downloaded...',
				loadingError: 'Unable to download the card sets.',
				missing: `This custom card set was added by another user. You can add it to your library to use it again in the future.`,
				csv: `Please note CSV file support is limited and the resulting card set may not be flawless. For best results please use the native .json files (same as export).`,
				delete: `Deleting custom card set named "%{name}" cannot be undone. Download the set locally first if you wish to be able to recover it at a later time.`,
				storage: `Custom card sets are stored in your browser. Keep them safe by having a downloaded copy stored somewhere else.`,
				share: 'Share and browse for custom card sets here.',
				noneSelected: 'The host must select card sets.',
				notHost: `Your imported cards are hidden, as you are not the host.`,
				sizeLimit: `Each custom card set takes up an amount of available storage. For performance reasons, a single game cannot use more than <b>%{size}</b> of custom card sets at a time.`,
				processing: {
					finished: 'Processed all %{total} card sets',
					progress: 'Processing card set %{current} out of %{total}',
					failed: 'Failed to process card set "%{name}"'
				},
				empty: {
					host: `Your custom card sets will show up here.`,
					other: `The host has not selected any custom card sets.`,
					editor: `Your (imported) custom card sets will show up here.`
				}
			},
			edit: {
				success: `Modified card successfully!`
			},
			create: {
				success: `Added a new card successfully!`
			},
			addToLibrary: 'Add to your library',
			preview: `Take a moment to look at your (new) cards`,
			dump: `Select any cards you'd like to dump`,
			underscore: 'Use _ to mark a space for reaction cards',
			noType: `There are no %{type} cards`,
			type: {
				black: 'action',
				white: 'response'
			},
			pickAction: `Pick an action card for this round`
		},
		game: {
			menu: 'Feel like playing something else?'
		},
		flip: {
			turns: 'Turns to flip | Turn to flip | Turns to flip'
		},
		data: {
			concedeGame: `Forfeiting the game will result in a loss for you.`,
			unsaved: `You have unsaved changes which will be erased if you proceed.`,
			reset: `Resetting your data is irreversible and will clear your profile, settings, and statistics.`
		}
	}
}
