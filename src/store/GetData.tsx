// store.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../Api.tsx";
import { Book } from "../Types/Type.tsx";

export const getData = createAsyncThunk("data", async () => {
	const response = await instance.get("/books", {
		headers: {
			Key: "uglon1",
			Sign: "0a02a8304742fb1dbe486b4022ba27c9",
		},
	});

	return response.data.data;
});

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		books: [],
		status: "idle",
		error: null,
	},
	reducers: {
		deleteBook(state, action) {
			const id = action.payload.id;
			try {
				instance.delete(`books/:${id}`, {
					headers: {
						Key: "uglon1",
						Sign: "2ba4b557445deab4a30fe111454e4fec",
					},
				});
				state.books = state.books.filter((book: Book) => book.book.id !== id);
			} catch (err) {
				console.log(err);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getData.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getData.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.books = action.payload;
			});
	},
});

export const bookAction = dataSlice.actions;
