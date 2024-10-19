
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-doctor` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-doctor?s=duotone user-doctor}
 * @preview ![user-doctor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxOS43NSAzNjIuMzc1VjMxMC4xOTVDMzA5LjUwMiAzMDcuNDIyIDI5OC45MSAzMDUuNTM1IDI4OCAzMDQuNjg2VjM2Mi4yNUMyNTkuNzUgMzY5Ljc1IDI0MCAzOTYuNzUgMjQwIDQyNi43NVY0NTZDMjQwIDQ2MC4yNSAyNDEuNzUgNDY0LjI1IDI0NC43NSA0NjcuMjVMMjU1IDQ3Ny42MjVDMjU4LjEyNSA0ODAuNzUgMjYzLjI1IDQ4MC43NSAyNjYuMjUgNDc3LjYyNUwyNzcuNjI1IDQ2Ni4yNUMyODAuNzUgNDYzLjI1IDI4MC43NSA0NTguMTI1IDI3Ny42MjUgNDU1TDI3MS44NzUgNDQ5LjI1VjQyNEMyNzEuODc1IDQwNC42MjUgMjg5LjI1IDM4OS4yNSAzMDkuMjUgMzkyLjM3NUMzMjUgMzk1IDMzNS44NzUgNDA5Ljc1IDMzNS44NzUgNDI1Ljc1VjQ0OS4yNUwzMzAuMjUgNDU1QzMyNy4xMjUgNDU4LjEyNSAzMjcuMTI1IDQ2My4yNSAzMzAuMjUgNDY2LjI1TDM0MS41IDQ3Ny42MjVDMzQ0LjYyNSA0ODAuNzUgMzQ5Ljc1IDQ4MC43NSAzNTIuNzUgNDc3LjYyNUwzNjMuMTI1IDQ2Ny4yNUMzNjYuMTI1IDQ2NC4yNSAzNjcuNzUgNDYwLjI1IDM2Ny43NSA0NTZWNDI0QzM2Ny43NSAzOTQuMjUgMzQ3LjI1IDM2OS41IDMxOS43NSAzNjIuMzc1Wk0xNjAgMzcwLjYyNVYzMDQuNjZDMTQ5LjAwNCAzMDUuNDg0IDEzOC4zMjYgMzA3LjM1NCAxMjggMzEwLjEzM1YzNzAuNjI1QzEwNC44NzUgMzc3LjUgODggMzk4Ljc1IDg4IDQyNEM4OCA0NTQuODc1IDExMy4xMjUgNDgwIDE0NCA0ODBTMjAwIDQ1NC44NzUgMjAwIDQyNEMyMDAgMzk4Ljc1IDE4My4xMjUgMzc3LjUgMTYwIDM3MC42MjVaTTE0NCA0NDhDMTMwLjc1IDQ0OCAxMjAgNDM3LjI1IDEyMCA0MjRTMTMwLjc1IDQwMCAxNDQgNDAwUzE2OCA0MTAuNzUgMTY4IDQyNFMxNTcuMjUgNDQ4IDE0NCA0NDhaTTM1MS43NSAxMjhDMzUxLjc1IDU3LjMwOSAyOTQuNDQ1IDAgMjIzLjc1IDBDMTUzLjA2MiAwIDk1Ljc1IDU3LjMwOSA5NS43NSAxMjhTMTUzLjA2MiAyNTYgMjIzLjc1IDI1NkMyOTQuNDQ1IDI1NiAzNTEuNzUgMTk4LjY5MSAzNTEuNzUgMTI4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMjAgMzEwLjE5NVYzNjIuMzc1QzM0Ny41IDM2OS41IDM2OCAzOTQuMjUgMzY4IDQyNFY0NTZDMzY4IDQ2MC4yNSAzNjYuMzc1IDQ2NC4yNSAzNjMuMzc1IDQ2Ny4yNUwzNTMgNDc3LjYyNUMzNTAgNDgwLjc1IDM0NC44NzUgNDgwLjc1IDM0MS43NSA0NzcuNjI1TDMzMC41IDQ2Ni4yNUMzMjcuMzc1IDQ2My4yNSAzMjcuMzc1IDQ1OC4xMjUgMzMwLjUgNDU1TDMzNi4xMjUgNDQ5LjI1VjQyNS43NUMzMzYuMTI1IDQwOS43NSAzMjUuMjUgMzk1IDMwOS41IDM5Mi4zNzVDMjg5LjUgMzg5LjI1IDI3Mi4xMjUgNDA0LjYyNSAyNzIuMTI1IDQyNFY0NDkuMjVMMjc3Ljg3NSA0NTVDMjgxIDQ1OC4xMjUgMjgxIDQ2My4yNSAyNzcuODc1IDQ2Ni4yNUwyNjYuNSA0NzcuNjI1QzI2My41IDQ4MC43NSAyNTguMzc1IDQ4MC43NSAyNTUuMjUgNDc3LjYyNUwyNDUgNDY3LjI1QzI0MiA0NjQuMjUgMjQwLjI1IDQ2MC4yNSAyNDAuMjUgNDU2VjQyNi43NUMyNDAuMjUgMzk2Ljc1IDI2MCAzNjkuNzUgMjg4LjI1IDM2Mi4yNVYzMDQuNjg2QzI4My43NTQgMzA0LjMzNiAyNzkuMjUgMzA0IDI3NC42NjQgMzA0SDE3My4zMzZDMTY4LjkxOCAzMDQgMTY0LjU4NCAzMDQuMzM2IDE2MC4yNSAzMDQuNjZWMzcwLjYyNUMxODMuMzc1IDM3Ny41IDIwMC4yNSAzOTguNzUgMjAwLjI1IDQyNEMyMDAuMjUgNDU0Ljg3NSAxNzUuMTI1IDQ4MCAxNDQuMjUgNDgwUzg4LjI1IDQ1NC44NzUgODguMjUgNDI0Qzg4LjI1IDM5OC43NSAxMDUuMTI1IDM3Ny41IDEyOC4yNSAzNzAuNjI1VjMxMC4xMzNDNTQuNDIgMzMwLjAwNCAwIDM5Ny4yMjUgMCA0NzcuMzMyQzAgNDk2LjQ3NyAxNS41MjMgNTEyIDM0LjY2NCA1MTJINDEzLjMzNkM0MzIuNDc3IDUxMiA0NDggNDk2LjQ3NyA0NDggNDc3LjMzMkM0NDggMzk3LjMxNCAzOTMuNzA3IDMzMC4xNSAzMjAgMzEwLjE5NVpNMTIwLjI1IDQyNEMxMjAuMjUgNDM3LjI1IDEzMSA0NDggMTQ0LjI1IDQ0OFMxNjguMjUgNDM3LjI1IDE2OC4yNSA0MjRTMTU3LjUgNDAwIDE0NC4yNSA0MDBTMTIwLjI1IDQxMC43NSAxMjAuMjUgNDI0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const UserDoctor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M319.75 362.375V310.195C309.502 307.422 298.91 305.535 288 304.686V362.25C259.75 369.75 240 396.75 240 426.75V456C240 460.25 241.75 464.25 244.75 467.25L255 477.625C258.125 480.75 263.25 480.75 266.25 477.625L277.625 466.25C280.75 463.25 280.75 458.125 277.625 455L271.875 449.25V424C271.875 404.625 289.25 389.25 309.25 392.375C325 395 335.875 409.75 335.875 425.75V449.25L330.25 455C327.125 458.125 327.125 463.25 330.25 466.25L341.5 477.625C344.625 480.75 349.75 480.75 352.75 477.625L363.125 467.25C366.125 464.25 367.75 460.25 367.75 456V424C367.75 394.25 347.25 369.5 319.75 362.375ZM160 370.625V304.66C149.004 305.484 138.326 307.354 128 310.133V370.625C104.875 377.5 88 398.75 88 424C88 454.875 113.125 480 144 480S200 454.875 200 424C200 398.75 183.125 377.5 160 370.625ZM144 448C130.75 448 120 437.25 120 424S130.75 400 144 400S168 410.75 168 424S157.25 448 144 448ZM351.75 128C351.75 57.309 294.445 0 223.75 0C153.062 0 95.75 57.309 95.75 128S153.062 256 223.75 256C294.445 256 351.75 198.691 351.75 128Z" />
            <path d="M320 310.195V362.375C347.5 369.5 368 394.25 368 424V456C368 460.25 366.375 464.25 363.375 467.25L353 477.625C350 480.75 344.875 480.75 341.75 477.625L330.5 466.25C327.375 463.25 327.375 458.125 330.5 455L336.125 449.25V425.75C336.125 409.75 325.25 395 309.5 392.375C289.5 389.25 272.125 404.625 272.125 424V449.25L277.875 455C281 458.125 281 463.25 277.875 466.25L266.5 477.625C263.5 480.75 258.375 480.75 255.25 477.625L245 467.25C242 464.25 240.25 460.25 240.25 456V426.75C240.25 396.75 260 369.75 288.25 362.25V304.686C283.754 304.336 279.25 304 274.664 304H173.336C168.918 304 164.584 304.336 160.25 304.66V370.625C183.375 377.5 200.25 398.75 200.25 424C200.25 454.875 175.125 480 144.25 480S88.25 454.875 88.25 424C88.25 398.75 105.125 377.5 128.25 370.625V310.133C54.42 330.004 0 397.225 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 397.314 393.707 330.15 320 310.195ZM120.25 424C120.25 437.25 131 448 144.25 448S168.25 437.25 168.25 424S157.5 400 144.25 400S120.25 410.75 120.25 424Z" />
    </Icon>
);

export default UserDoctor;