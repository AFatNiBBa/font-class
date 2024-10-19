
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-injured` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-injured?s=light user-injured}
 * @preview ![user-injured](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzQuNjY0IDMwNEgxNzMuMzM2Qzc3LjYwOSAzMDQgMCAzODEuNjAyIDAgNDc3LjMzMkMwIDQ5Ni40NzcgMTUuNTIzIDUxMiAzNC42NjQgNTEySDQxMy4zMzZDNDMyLjQ3NyA1MTIgNDQ4IDQ5Ni40NzcgNDQ4IDQ3Ny4zMzJDNDQ4IDM4MS42MDIgMzcwLjM5OCAzMDQgMjc0LjY2NCAzMDRaTTY0IDQ4MEgzNC42NjRDMzMuMTk1IDQ4MCAzMiA0NzguODAzIDMyIDQ3Ny4zMzJDMzIgNDQzLjY5MSA0NC4zMDMgNDEzLjE3NiA2NCAzODguODgxVjQ4MFpNOTYgNDgwVjM1OS4yODNDMTA4Ljc4OSAzNTAuODc3IDEyMy4xMjcgMzQ0LjgyNiAxMzguMzQgMzQwLjkxMkwyMjYuODU0IDQ4MEg5NlpNMjg4IDQ4MEgyNjQuNzgxTDIyNC4wNjMgNDE2SDI4OEMzMDUuNjQxIDQxNiAzMjAgNDMwLjM1OSAzMjAgNDQ4UzMwNS42NDEgNDgwIDI4OCA0ODBaTTQxMy4zMzYgNDgwSDM0My4xQzM0OC42MTEgNDcwLjU0OSAzNTIgNDU5LjcwOSAzNTIgNDQ4QzM1MiA0MTIuNzAzIDMyMy4yOTcgMzg0IDI4OCAzODRIMjAzLjY4OEwxNzMuMTU4IDMzNi4wMThDMTczLjIxOSAzMzYuMDE4IDE3My4yNzUgMzM2IDE3My4zMzYgMzM2SDI3NC42NjRDMzUyLjU5OCAzMzYgNDE2IDM5OS40IDQxNiA0NzcuMzMyQzQxNiA0NzguODAzIDQxNC44MDUgNDgwIDQxMy4zMzYgNDgwWk0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTIgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTIgMjU2IDIyNCAyNTZaTTMwNi42NDUgODBIMjM3LjYyNUwyNzcuMzE4IDQ4LjI0NEMyODkuNDMyIDU2LjM2OSAyOTkuMjc1IDY3LjM2NSAzMDYuNjQ1IDgwWk0yMjQgMzJDMjMwLjc3NyAzMiAyMzcuMzc5IDMyLjc0OCAyNDMuNzY0IDM0LjA5TDE4Ni4zNzUgODBIMTQxLjM1NUMxNTguMDEgNTEuNDQ1IDE4OC42MjcgMzIgMjI0IDMyWk0xMjkuNjE3IDExMkgzMTguMzgzQzMxOS4yNyAxMTcuMjMgMzIwIDEyMi41MjEgMzIwIDEyOEMzMjAgMTgwLjkzNCAyNzYuOTM2IDIyNCAyMjQgMjI0UzEyOCAxODAuOTM0IDEyOCAxMjhDMTI4IDEyMi41MjEgMTI4LjczIDExNy4yMyAxMjkuNjE3IDExMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserInjured(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM64 480H34.664C33.195 480 32 478.803 32 477.332C32 443.691 44.303 413.176 64 388.881V480ZM96 480V359.283C108.789 350.877 123.127 344.826 138.34 340.912L226.854 480H96ZM288 480H264.781L224.063 416H288C305.641 416 320 430.359 320 448S305.641 480 288 480ZM413.336 480H343.1C348.611 470.549 352 459.709 352 448C352 412.703 323.297 384 288 384H203.688L173.158 336.018C173.219 336.018 173.275 336 173.336 336H274.664C352.598 336 416 399.4 416 477.332C416 478.803 414.805 480 413.336 480ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM306.645 80H237.625L277.318 48.244C289.432 56.369 299.275 67.365 306.645 80ZM224 32C230.777 32 237.379 32.748 243.764 34.09L186.375 80H141.355C158.01 51.445 188.627 32 224 32ZM129.617 112H318.383C319.27 117.23 320 122.521 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 122.521 128.73 117.23 129.617 112Z" />
        </Icon>
    </>
}