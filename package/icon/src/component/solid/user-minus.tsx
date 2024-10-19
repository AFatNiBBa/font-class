
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-minus?s=solid user-minus}
 * @preview ![user-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzQuNjY0IDMwNEgxNzMuMzM2Qzc3LjYwOSAzMDQgMCAzODEuNjAyIDAgNDc3LjMzMkMwIDQ5Ni40NzcgMTUuNTIzIDUxMiAzNC42NjQgNTEySDQxMy4zMzZDNDMyLjQ3NyA1MTIgNDQ4IDQ5Ni40NzcgNDQ4IDQ3Ny4zMzJDNDQ4IDM4MS42MDIgMzcwLjM5OCAzMDQgMjc0LjY2NCAzMDRaTTIyNCAyNTZDMjk0LjY5NSAyNTYgMzUyIDE5OC42OTEgMzUyIDEyOFMyOTQuNjk1IDAgMjI0IDBDMTUzLjMxMiAwIDk2IDU3LjMwOSA5NiAxMjhTMTUzLjMxMiAyNTYgMjI0IDI1NlpNNjE2IDIwMEg0NzJDNDU4Ljc1IDIwMCA0NDggMjEwLjc1IDQ0OCAyMjRTNDU4Ljc1IDI0OCA0NzIgMjQ4SDYxNkM2MjkuMjUgMjQ4IDY0MCAyMzcuMjUgNjQwIDIyNFM2MjkuMjUgMjAwIDYxNiAyMDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM616 200H472C458.75 200 448 210.75 448 224S458.75 248 472 248H616C629.25 248 640 237.25 640 224S629.25 200 616 200Z" />
        </Icon>
    </>
}