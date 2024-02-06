const toolboxItems = [
	{
		name: "TypeScript",
		category: "BackEnd"
	},
	{
		name: "Python",
		category: "BackEnd"
	},
	{
		name: "JavaScript",
		category: "BackEnd"
	},
	{
		name: "fastAPI",
		category: "BackEnd"
	},
	{
		name: "Node.js",
		category: "BackEnd"
	},
	{
		name: "Express.js",
		category: "BackEnd"
	},
	{
		name: "Nest.js",
		category: "BackEnd"
	},
	{
		name: "MongoDB",
		category: "BackEnd"
	},
	{
		name: "Flask",
		category: "BackEnd"
	},
	{
		name: "React",
		category: "FrontEnd"
	},
	{
		name: "HTML",
		category: "FrontEnd"
	},
	{
		name: "CSS",
		category: "FrontEnd"
	},
	{
		name: "Bootstrap",
		category: "FrontEnd"
	},
	{
		name: "Figma",
		category: "FrontEnd"
	},
	{
		name: "UI Design",
		category: "FrontEnd"
	},
	{
		name: "Solidity",
		category: "Blockchain"
	},
	{
		name: "Web3.js",
		category: "Blockchain"
	},
	{
		name: "Ethers.js",
		category: "Blockchain"
	},
	{
		name: "Hardhat",
		category: "Blockchain"
	},
	{
		name: "Foundry",
		category: "Blockchain"
	},
	{
		name: "Wagmi",
		category: "Blockchain"
	},
	{
		name: "Jupyter",
		category: "python"
	},
	{
		name: "Pandas",
		category: "python"
	},
	{
		name: "Numpy",
		category: "python"
	},
	{
		name: "Scipy",
		category: "python"
	},
	{
		name: "Matplotlib",
		category: "python"
	},
	{
		name: "Seaborn",
		category: "python"
	},
	{
		name: "Scikit-learn",
		category: "python"
	},
	{
		name: "BeautifulSoup",
		category: "python"
	},
	{
		name: "Selenium",
		category: "python"
	},
]


const toolboxItemsPerCategory = toolboxItems.reduce((acc: Record<string, string[]>, item) => {
	if (!acc[item.category]) {
		acc[item.category] = [];
	}
	acc[item.category].push(item.name);
	return acc;
}, {} as Record<string, string[]>); // Update the type of the accumulator

console.log(toolboxItemsPerCategory);

export default toolboxItems;
