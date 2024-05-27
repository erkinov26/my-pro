import axios from "axios";
export const instance = axios.create({
	baseURL: "https://no23.lavina.tech",
	headers: {
		"Content-Type": "application/json",
	},
});
