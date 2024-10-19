
import { Icon } from "../../index";

/**
 * A component that renders the `house-building` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-building?s=light house-building}
 * @preview ![house-building](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzYgODBINDg4QzQ3NC43NDYgODAgNDY0IDkwLjc0NCA0NjQgMTA0VjE1MkM0NjQgMTY1LjI1NCA0NzQuNzQ2IDE3NiA0ODggMTc2SDUzNkM1NDkuMjU0IDE3NiA1NjAgMTY1LjI1NCA1NjAgMTUyVjEwNEM1NjAgOTAuNzQ0IDU0OS4yNTQgODAgNTM2IDgwWk01MjggMTQ0SDQ5NlYxMTJINTI4VjE0NFpNMjM0LjcxNSAyNTUuOTcxSDE0OS4zOTNDMTM3LjYzMyAyNTUuOTcxIDEyOCAyNjUuNDcxIDEyOCAyNzcuMzQ4VjM2Mi42MDlDMTI4IDM3NC40ODYgMTM3LjYzMyAzODMuOTg2IDE0OS4zOTMgMzgzLjk4NkgyMzQuNzE1QzI0Ni40NzUgMzgzLjk4NiAyNTYuMTA3IDM3NC4zNjEgMjU2LjEwNyAzNjIuNjA5VjI3Ny4zNDhDMjU2LjEwNyAyNjUuNTk2IDI0Ni42IDI1NS45NzEgMjM0LjcxNSAyNTUuOTcxWk0yMjQuMDggMzUxLjk4MkgxNjAuMDI3VjI4Ny45NzVIMjI0LjA4VjM1MS45ODJaTTU3NiAwSDMyMEMyODQuNjU0IDAgMjU2IDI4LjY1MiAyNTYgNjRWODBDMjU2IDg4LjgzNiAyNjMuMTY0IDk2IDI3MiA5NlMyODggODguODM2IDI4OCA4MFY2NEMyODggNDYuMzI2IDMwMi4zMjYgMzIgMzIwIDMySDU3NkM1OTMuNjc0IDMyIDYwOCA0Ni4zMjYgNjA4IDY0VjQ5NkM2MDggNTA0LjgzNiA2MTUuMTY0IDUxMiA2MjQgNTEyUzY0MCA1MDQuODM2IDY0MCA0OTZWNjRDNjQwIDI4LjY1MiA2MTEuMzQ2IDAgNTc2IDBaTTUzNiAyMDhINDg4QzQ3NC43NDYgMjA4IDQ2NCAyMTguNzQ0IDQ2NCAyMzJWMjgwQzQ2NCAyOTMuMjU0IDQ3NC43NDYgMzA0IDQ4OCAzMDRINTM2QzU0OS4yNTQgMzA0IDU2MCAyOTMuMjU0IDU2MCAyODBWMjMyQzU2MCAyMTguNzQ0IDU0OS4yNTQgMjA4IDUzNiAyMDhaTTUyOCAyNzJINDk2VjI0MEg1MjhWMjcyWk0yMTUuNDc3IDEwNS4wNzhDMjA4LjgyIDk5LjAyNSAyMDAuNDA4IDk2IDE5MS45OTYgOTZTMTc1LjE3IDk5LjAyNSAxNjguNTE0IDEwNS4wNzhMMTcuMTM5IDI0Mi42OTFDNi4yMjMgMjUyLjYxMyAwIDI2Ni42ODIgMCAyODEuNDM0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzE5Ljk5NEMzNTUuMzQgNTEyIDM4My45OTIgNDgzLjQ0MSAzODMuOTk0IDQ0OC4wOThDMzgzLjk5OCAzOTQuMzIyIDM4NCAzMjAuOTA4IDM4NCAyODEuMTA3QzM4NCAyNjYuNDU1IDM3Ny44MTggMjUyLjY1NiAzNjYuOTc3IDI0Mi44MDFMMjE1LjQ3NyAxMDUuMDc4Wk0zNTEuOTk0IDQ0OEMzNTEuOTkyIDQ2NS42IDMzNy41OTIgNDgwIDMxOS45OTQgNDgwSDY0QzQ2LjMyNiA0ODAgMzIgNDY1LjY3MiAzMiA0NDhWMjgxLjQzOEMzMiAyNzUuNjk5IDM0LjQyIDI3MC4yMjcgMzguNjY2IDI2Ni4zNjVMMTkxLjk5NiAxMjcuOTk4TDM0NS4zNTcgMjY2LjM5NUMzNDkuNTg4IDI3MC4yNCAzNTIgMjc1LjY5MyAzNTIgMjgxLjQxTDM1MS45OTQgNDQ4Wk01MzYgMzM2SDQ4OEM0NzQuNzQ2IDMzNiA0NjQgMzQ2Ljc0NCA0NjQgMzYwVjQwOEM0NjQgNDIxLjI1NCA0NzQuNzQ2IDQzMiA0ODggNDMySDUzNkM1NDkuMjU0IDQzMiA1NjAgNDIxLjI1NCA1NjAgNDA4VjM2MEM1NjAgMzQ2Ljc0NCA1NDkuMjU0IDMzNiA1MzYgMzM2Wk01MjggNDAwSDQ5NlYzNjhINTI4VjQwMFpNNDA4IDgwSDM2MEMzNDYuNzQ2IDgwIDMzNiA5MC43NDQgMzM2IDEwNFYxNTJDMzM2IDE2NS4yNTQgMzQ2Ljc0NiAxNzYgMzYwIDE3Nkg0MDhDNDIxLjI1NCAxNzYgNDMyIDE2NS4yNTQgNDMyIDE1MlYxMDRDNDMyIDkwLjc0NCA0MjEuMjU0IDgwIDQwOCA4MFpNNDAwIDE0NEgzNjhWMTEySDQwMFYxNDRaIi8+PC9zdmc+|width=32|height=32)
 */
const HouseBuilding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M536 80H488C474.746 80 464 90.744 464 104V152C464 165.254 474.746 176 488 176H536C549.254 176 560 165.254 560 152V104C560 90.744 549.254 80 536 80ZM528 144H496V112H528V144ZM234.715 255.971H149.393C137.633 255.971 128 265.471 128 277.348V362.609C128 374.486 137.633 383.986 149.393 383.986H234.715C246.475 383.986 256.107 374.361 256.107 362.609V277.348C256.107 265.596 246.6 255.971 234.715 255.971ZM224.08 351.982H160.027V287.975H224.08V351.982ZM576 0H320C284.654 0 256 28.652 256 64V80C256 88.836 263.164 96 272 96S288 88.836 288 80V64C288 46.326 302.326 32 320 32H576C593.674 32 608 46.326 608 64V496C608 504.836 615.164 512 624 512S640 504.836 640 496V64C640 28.652 611.346 0 576 0ZM536 208H488C474.746 208 464 218.744 464 232V280C464 293.254 474.746 304 488 304H536C549.254 304 560 293.254 560 280V232C560 218.744 549.254 208 536 208ZM528 272H496V240H528V272ZM215.477 105.078C208.82 99.025 200.408 96 191.996 96S175.17 99.025 168.514 105.078L17.139 242.691C6.223 252.613 0 266.682 0 281.434V448C0 483.346 28.654 512 64 512H319.994C355.34 512 383.992 483.441 383.994 448.098C383.998 394.322 384 320.908 384 281.107C384 266.455 377.818 252.656 366.977 242.801L215.477 105.078ZM351.994 448C351.992 465.6 337.592 480 319.994 480H64C46.326 480 32 465.672 32 448V281.438C32 275.699 34.42 270.227 38.666 266.365L191.996 127.998L345.357 266.395C349.588 270.24 352 275.693 352 281.41L351.994 448ZM536 336H488C474.746 336 464 346.744 464 360V408C464 421.254 474.746 432 488 432H536C549.254 432 560 421.254 560 408V360C560 346.744 549.254 336 536 336ZM528 400H496V368H528V400ZM408 80H360C346.746 80 336 90.744 336 104V152C336 165.254 346.746 176 360 176H408C421.254 176 432 165.254 432 152V104C432 90.744 421.254 80 408 80ZM400 144H368V112H400V144Z" />
    </Icon>
);

export default HouseBuilding;