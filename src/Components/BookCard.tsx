import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Book } from "../Types/Type";
import DefaultImage from "../assets/defaultBook.jpg";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { bookAction } from "../store/GetData";

export default function BookCard({ book }: Book) {
	console.log(book);

	const dispatch = useDispatch();
	const deleteBook = (id: number) => {
		dispatch(bookAction.deleteBook({ id }));
	};

	return (
		<Card className="card-item">
			<CardHeader
				avatar={
					<Avatar
						sx={{ bgcolor: red[500] }}
						aria-label="recipe">
						{book.author[0]}
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={book.author !== "" ? book.author : "Default Name"}
				subheader={`Book Published in ${book.published} year`}
			/>
			<CardMedia
				component="img"
				height="194"
				image={book.cover !== "" ? book.cover : DefaultImage}
				alt={book.cover !== "" ? book.cover : DefaultImage}
			/>
			<CardContent>
				<Typography
					variant="body2"
					color="text.secondary">
					{`This book is ${book.pages !== 0 ? book.pages : "Default Pages"}`}
				</Typography>
			</CardContent>
			<div className="action-area">
				<Button variant="outlined">Edit</Button>
				<Button
					variant="outlined"
					color="error"
					onClick={() => {
						deleteBook(book.id);
					}}>
					Delete
				</Button>
			</div>
		</Card>
	);
}
