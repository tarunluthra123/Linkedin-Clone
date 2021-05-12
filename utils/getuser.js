import { useSelector } from "react-redux";


export default function getUser() {
    const user = useSelector((state) => state.auth.user);

    return user;
}
