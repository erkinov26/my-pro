import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/GetData";
import { AppDispatch } from "../../store";
import { RootState } from "../../store";
import { Book } from "../../Types/Type";
import BookCard from "../../Components/BookCard";

const Books: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	const books: Book[] = useSelector((state: RootState) => state.data.books);

	return (
		<div>
			<div className="book-list">
				{books.map((bookObj) => (
					<BookCard
						key={bookObj.book.id}
						book={bookObj.book}
					/>
				))}
			</div>
		</div>
	);
};

export default Books;
