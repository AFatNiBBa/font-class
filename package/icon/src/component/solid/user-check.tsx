
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-check` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-check?s=solid user-check}
 * @preview ![user-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzQuNjY0IDMwNEgxNzMuMzM2Qzc3LjYwOSAzMDQgMCAzODEuNjAyIDAgNDc3LjMzMkMwIDQ5Ni40NzcgMTUuNTIzIDUxMiAzNC42NjQgNTEySDQxMy4zMzZDNDMyLjQ3NyA1MTIgNDQ4IDQ5Ni40NzcgNDQ4IDQ3Ny4zMzJDNDQ4IDM4MS42MDIgMzcwLjM5OCAzMDQgMjc0LjY2NCAzMDRaTTIyNCAyNTZDMjk0LjY5NSAyNTYgMzUyIDE5OC42OTEgMzUyIDEyOFMyOTQuNjk1IDAgMjI0IDBDMTUzLjMxMiAwIDk2IDU3LjMwOSA5NiAxMjhTMTUzLjMxMiAyNTYgMjI0IDI1NlpNNjMyLjMyOCAxMzQuNDA2QzYyMi42MjUgMTI1LjQwNiA2MDcuNDIyIDEyNS45NTMgNTk4LjQwNiAxMzUuNjcyTDUxMS4zNTkgMjI5LjQyMkw0NzIuOTY5IDE5MS4wMzFDNDYzLjU5NCAxODEuNjU2IDQ0OC40MDYgMTgxLjY1NiA0MzkuMDMxIDE5MS4wMzFTNDI5LjY1NiAyMTUuNTk0IDQzOS4wMzEgMjI0Ljk2OUw0OTUuMDMxIDI4MC45NjlDNDk5LjUzMSAyODUuNDY5IDUwNS42NDEgMjg4IDUxMiAyODhINTEyLjQzOEM1MTguOTY5IDI4Ny44NzUgNTI1LjE1NiAyODUuMTA5IDUyOS41OTQgMjgwLjMyOEw2MzMuNTk0IDE2OC4zMjhDNjQyLjYwOSAxNTguNjI1IDY0Mi4wNDcgMTQzLjQzOCA2MzIuMzI4IDEzNC40MDZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM632.328 134.406C622.625 125.406 607.422 125.953 598.406 135.672L511.359 229.422L472.969 191.031C463.594 181.656 448.406 181.656 439.031 191.031S429.656 215.594 439.031 224.969L495.031 280.969C499.531 285.469 505.641 288 512 288H512.438C518.969 287.875 525.156 285.109 529.594 280.328L633.594 168.328C642.609 158.625 642.047 143.438 632.328 134.406Z" />
        </Icon>
    </>
}