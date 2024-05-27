// types.ts
export interface Book {
	book: {
		id: number;
		cover: string;
		author: string;
		title: string;
		isbn: string;
		pages: number;
		published: number;
	};
	status?: number;
}

export interface DataState {
	items: Book[];
}

// export interface Book

export interface BooksObj {
	books?: Book[];
	status?: string;
	error?: string;
}
