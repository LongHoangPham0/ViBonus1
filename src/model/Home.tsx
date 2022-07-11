export interface Home {
	_id: string;
	date: string;
	title: string;
	desc: string;
	avatr: any;
	username: string;
	category: string;
	tags: string;
	likes: string;
	comments: {
		date: string;
		comment: string;
		userName: string;
		avatr?: any;
	}[];
}
