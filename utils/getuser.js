import { useSelector, useDispatch } from "react-redux";
import { parseCookies, destroyCookie } from "nookies";
import { login, logout } from "../redux/auth";

export function getUser() {
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

export function logoutUser(dispatch) {
    destroyCookie(null, "linkedin-user");

    dispatch(logout());
}
