<script lang="ts" context="module">
	// ----------------------------------------------------------------------------
	// -------------------------  JSON Objects  -----------------------------------
	// ----------------------------------------------------------------------------

	// icon, title, subtitle, free, open, website cli
	// 0: free, 1: freemium, 2: paid

	// if not available on choco -> `cli = 'custom: <customresponsehere>'` || space deleted
	// can also leave `cli = ''` for a default response

	export const productivity = [
		{
			icon: 'https://cdn.imgchest.com/files/myd5c3b6x4b.png',
			title: 'Microsoft PowerToys',
			subtitle:
				'Set of utilities for power users to tune and streamline their Windows 10 experience for greater productivity. Features color picker, fancy zones, image resizer, Alt+Space run, shortcut guide, and more.',
			free: 0,
			open: true,
			website: 'https://github.com/microsoft/PowerToys',
			cli: 'powertoys'
		},
		{
			icon: 'https://cdn.imgchest.com/files/3yrgc562v4z.png',
			title: 'Notion',
			subtitle:
				'Notion is an application that provides components such as notes, databases, kanban boards, wikis, calendars and reminders. Users can connect these components to create their own systems for knowledge management, note taking, data management, and project management.',
			free: 1,
			open: false,
			website: 'https://www.notion.so/',
			cli: 'notion'
		}
	];

	// ----------------------------------------------------------------------------
	// -------------------------   FUNCTIONS   ------------------------------------
	// ----------------------------------------------------------------------------

	// Generate choco cli command
	export function chocoCLI(cli: string): string {
		if (cli === '') return 'not available on choco 🙁';
		if (cli.slice(0, 7) === 'custom:') return cli.slice(8, cli.length);
		return `choco install ${cli} -y`;
	}

	// Generate a space separated list of all the `cli` in JSON objects
	export function fullAppList(JSONobject: any): string {
		let fullList: string = 'choco install';

		for (const appObject in JSONobject) {
			if (Object.prototype.hasOwnProperty.call(JSONobject, appObject)) {
				const element: string = JSONobject[appObject]['cli'];
				fullList += ` ${element}`;
			}
		}

		fullList += ' -y';

		return fullList;
	}
</script>
