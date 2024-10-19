
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-large` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=solid user-large}
 * @preview ![user-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMjg4QzMzNS41MzMgMjg4IDQwMCAyMjMuNTI3IDQwMCAxNDRTMzM1LjUzMyAwIDI1NiAwQzE3Ni40NzcgMCAxMTIgNjQuNDczIDExMiAxNDRTMTc2LjQ3NyAyODggMjU2IDI4OFpNMzUxLjk5OCAzMjBIMTYwLjAwMkM3MS42MzkgMzIwIDAgMzkxLjYzMyAwIDQ4MEMwIDQ5Ny42NzIgMTQuMzMgNTEyIDMxLjk5OCA1MTJINDgwLjAwMkM0OTcuNjcgNTEyIDUxMiA0OTcuNjcyIDUxMiA0ODBDNTEyIDM5MS42MzMgNDQwLjM2NyAzMjAgMzUxLjk5OCAzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserLarge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 288C335.533 288 400 223.527 400 144S335.533 0 256 0C176.477 0 112 64.473 112 144S176.477 288 256 288ZM351.998 320H160.002C71.639 320 0 391.633 0 480C0 497.672 14.33 512 31.998 512H480.002C497.67 512 512 497.672 512 480C512 391.633 440.367 320 351.998 320Z" />
        </Icon>
    </>
}