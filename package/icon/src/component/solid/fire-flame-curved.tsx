
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fire-flame-curved` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fire-flame-curved?s=solid fire-flame-curved}
 * @preview ![fire-flame-curved](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzIwQzM4NCA0MjUuODc1IDI5Ny44NzUgNTEyIDE5MiA1MTJTMCA0MjUuODc1IDAgMzIwQzAgMjYxLjMyOCAyNy44MTIgMjEzLjE1NiA1NC41NjIgMTg1LjA0N0M2OS41MzEgMTY5LjMxMyA5NiAxNzkuODQ0IDk2IDIwMS41NDdWMjg3LjA0N0M5NiAzMjIuMjE5IDEyMy45NjkgMzUxLjU0NyAxNTkuMTU2IDM1MS45ODVDMTk0Ljg3NSAzNTIuNDUzIDIyNCAzMjMuNjI1IDIyNCAyODhDMjI0IDIwMCA0OCAxOTEuODQ0IDE3MS44NDQgMTAuODEzQzE4NS4zNDQgLTguOTA2IDIxNiAwLjA2MyAyMTYgMjMuODZDMjE2IDEyNyAzODQgMTQ5LjcwMyAzODQgMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FireFlameCurved(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 320C384 425.875 297.875 512 192 512S0 425.875 0 320C0 261.328 27.812 213.156 54.562 185.047C69.531 169.313 96 179.844 96 201.547V287.047C96 322.219 123.969 351.547 159.156 351.985C194.875 352.453 224 323.625 224 288C224 200 48 191.844 171.844 10.813C185.344 -8.906 216 0.063 216 23.86C216 127 384 149.703 384 320Z" />
        </Icon>
    </>
}