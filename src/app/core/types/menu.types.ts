export type MenuItem = {
	title: string;
	price: number;
	quantity: number;
};

export type Menu = {
	title: string;
	content: MenuItem[];
};
