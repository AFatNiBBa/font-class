
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up?s=thin message-arrow-up}
 * @preview ![message-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk0VjM1MS45NzFDMCAzODcuMjE5IDI4Ljc1IDQxNS45NjcgNjQgNDE1Ljk2N0gxNjBWNDk5Ljk1OUMxNjAgNTA3LjAzMSAxNjUuOTIgNTEyIDE3Mi4xNzggNTEyQzE3NC41NDcgNTEyIDE3Ni45NjMgNTExLjI4NyAxNzkuMTI1IDUwOS43MDlMMzA0IDQxNS45NjdINDQ4QzQ4My4yNSA0MTUuOTY3IDUxMiAzODcuMjE5IDUxMiAzNTEuOTcxVjYzLjk5NEM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk00OTYgMzUxLjk3MUM0OTYgMzc4LjQzNiA0NzQuNDY3IDM5OS45NjcgNDQ4IDM5OS45NjdIMjk4LjY2MkwyOTQuMzk1IDQwMy4xNzJMMTc2IDQ5Mi4wNTNWMzk5Ljk2N0g2NEMzNy41MzMgMzk5Ljk2NyAxNiAzNzguNDM2IDE2IDM1MS45NzFWNjMuOTk0QzE2IDM3LjUyOSAzNy41MzMgMTUuOTk4IDY0IDE1Ljk5OEg0NDhDNDc0LjQ2NyAxNS45OTggNDk2IDM3LjUyOSA0OTYgNjMuOTk0VjM1MS45NzFaTTI2MS42NTYgMTE0LjM0NEMyNjAuMTU2IDExMi44NDQgMjU4LjEyNSAxMTIgMjU2IDExMkgyNTUuOTUzQzI1My44MjggMTEyIDI1MS43ODEgMTEyLjg3NSAyNTAuMjgxIDExNC40MDZDMjE5LjgyOCAxNDUuNDY5IDE3MC4xMDkgMTk1LjgxMiAxNjMuODEyIDIwMS4xODhDMTYyLjM5MSAyMDIuMDYyIDE2MS4yMTkgMjAzLjM3NSAxNjAuNTYyIDIwNS4wNjJDMTU4LjkzOCAyMDkuMTU2IDE2MC45NTMgMjEzLjgxMiAxNjUuMDYyIDIxNS40MzhDMTY1LjkzOCAyMTUuNzgxIDE2Ni42NzIgMjE2LjA5NCAxNjcuNTYyIDIxNi4wOTRDMTcyLjY4NiAyMTYuMDk0IDE4My4xNjIgMjA1LjcyOSAyNDggMTM5LjU5NlYyOTZDMjQ4IDMwMC40MDYgMjUxLjU3OCAzMDQgMjU2IDMwNFMyNjQgMzAwLjQwNiAyNjQgMjk2VjEzOS4zMTJMMzM4LjM0NCAyMTMuNjU2QzM0MS40NjkgMjE2Ljc4MSAzNDYuNTMxIDIxNi43ODEgMzQ5LjY1NiAyMTMuNjU2UzM1Mi43ODEgMjA1LjQ2OSAzNDkuNjU2IDIwMi4zNDRMMjYxLjY1NiAxMTQuMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM496 351.971C496 378.436 474.467 399.967 448 399.967H298.662L294.395 403.172L176 492.053V399.967H64C37.533 399.967 16 378.436 16 351.971V63.994C16 37.529 37.533 15.998 64 15.998H448C474.467 15.998 496 37.529 496 63.994V351.971ZM261.656 114.344C260.156 112.844 258.125 112 256 112H255.953C253.828 112 251.781 112.875 250.281 114.406C219.828 145.469 170.109 195.812 163.812 201.188C162.391 202.062 161.219 203.375 160.562 205.062C158.938 209.156 160.953 213.812 165.062 215.438C165.938 215.781 166.672 216.094 167.562 216.094C172.686 216.094 183.162 205.729 248 139.596V296C248 300.406 251.578 304 256 304S264 300.406 264 296V139.312L338.344 213.656C341.469 216.781 346.531 216.781 349.656 213.656S352.781 205.469 349.656 202.344L261.656 114.344Z" />
    </Icon>
);

export default MessageArrowUp;