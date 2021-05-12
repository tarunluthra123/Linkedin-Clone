import { useSelector, useDispatch } from "react-redux";
import { parseCookies } from "nookies";
import { login } from "../redux/auth";

export default function getUser() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    if (user) return user;

    const cookies = parseCookies();

    const userCookie = cookies["linkedin-user"];

    if (userCookie) {
        const currentUser = JSON.parse(userCookie);
        console.log("Logged in from cookie");
        dispatch(login(currentUser));
    }

    return null;
}
