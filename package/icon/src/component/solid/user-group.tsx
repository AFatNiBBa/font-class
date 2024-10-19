
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-group` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-group?s=solid user-group}
 * @preview ![user-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTIgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTIgMjU2IDIyNCAyNTZaTTI3NC42NjQgMzA0SDE3My4zMzZDNzcuNjA5IDMwNCAwIDM4MS42MDIgMCA0NzcuMzMyQzAgNDk2LjQ3NyAxNS41MjMgNTEyIDM0LjY2NCA1MTJINDEzLjMzNkM0MzIuNDc3IDUxMiA0NDggNDk2LjQ3NyA0NDggNDc3LjMzMkM0NDggMzgxLjYwMiAzNzAuMzk4IDMwNCAyNzQuNjY0IDMwNFpNNDc5Ljk5OCAzMjBINDA2LjE1QzQ1MS4xODIgMzU3LjY5NSA0ODAgNDE0LjE0OCA0ODAgNDc3LjMzMkM0ODAgNDkwLjA3IDQ3Ni4yMjUgNTAxLjg2NyA0NzAuMDAyIDUxMkg2MDguMDAyQzYyNS42NyA1MTIgNjQwIDQ5Ny42NzIgNjQwIDQ4MEM2NDAgMzkxLjYzMyA1NjguMzY3IDMyMCA0NzkuOTk4IDMyMFpNNDMyIDI1NkM0OTMuODU5IDI1NiA1NDQgMjA1Ljg1NSA1NDQgMTQ0UzQ5My44NTkgMzIgNDMyIDMyQzQwNi44OTMgMzIgMzgzLjk1OSA0MC41NTUgMzY1LjI4MSA1NC41MTJDMzc2LjgzOCA3Ni42MjUgMzg0IDEwMS4zNzEgMzg0IDEyOEMzODQgMTYzLjUyMyAzNzIuMDY4IDE5Ni4xMzcgMzUyLjQxIDIyMi43MTFDMzcyLjcxMyAyNDMuMjQyIDQwMC44NSAyNTYgNDMyIDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserGroup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM479.998 320H406.15C451.182 357.695 480 414.148 480 477.332C480 490.07 476.225 501.867 470.002 512H608.002C625.67 512 640 497.672 640 480C640 391.633 568.367 320 479.998 320ZM432 256C493.859 256 544 205.855 544 144S493.859 32 432 32C406.893 32 383.959 40.555 365.281 54.512C376.838 76.625 384 101.371 384 128C384 163.523 372.068 196.137 352.41 222.711C372.713 243.242 400.85 256 432 256Z" />
        </Icon>
    </>
}