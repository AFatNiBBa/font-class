
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `champagne-glass` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/champagne-glass?s=light champagne-glass}
 * @preview ![champagne-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDggNDgwSDE0NFYzNDkuODc3QzIwNi45MTIgMzQxLjc0NiAyNTYgMjg3Ljk3MyAyNTYgMjIxLjgxMkMyNTYgMTg2LjcxOSAyNDIuNzM0IDkxLjY4OCAyMjIuOTg0IDYuMTg4QzIyMi4xNDEgMi41NjIgMjE4LjkwNiAwIDIxNS4xODggMEg0MC44MTJDMzcuMDk0IDAgMzMuODU5IDIuNTYyIDMzLjAxNiA2LjE4OEMxMy4yNjYgOTEuNjg4IDAgMTg2LjcxOSAwIDIyMS44MTJDMCAyODcuOTczIDQ5LjA4OCAzNDEuNzQ2IDExMiAzNDkuODc3VjQ4MEg0OEMzOS4xNjQgNDgwIDMyIDQ4Ny4xNjIgMzIgNDk2QzMyIDUwNC44MzYgMzkuMTY0IDUxMiA0OCA1MTJIMjA4QzIxNi44MzYgNTEyIDIyNCA1MDQuODM2IDIyNCA0OTZDMjI0IDQ4Ny4xNjIgMjE2LjgzNiA0ODAgMjA4IDQ4MFpNMTk1Ljk2NyAzMkMyMDMuMDIzIDY0LjU4NCAyMDkuMDI5IDk3Ljg3NyAyMTMuNzE1IDEyOEg0Mi4yODVDNDYuOTczIDk3Ljg3MyA1Mi45NzkgNjQuNTc2IDYwLjAzMyAzMkgxOTUuOTY3Wk0zMiAyMjEuODEyQzMyIDIwOS4xMDkgMzQuMDk2IDE4Ni44ODUgMzcuNjU2IDE2MEgyMTguMzQ0QzIyMS45MDQgMTg2Ljg4NyAyMjQgMjA5LjExMSAyMjQgMjIxLjgxMkMyMjQgMjczLjM0MiAxODQuMzM4IDMxNi4xNTIgMTMzLjcwNyAzMTkuMjcxQzEyNi42OTcgMzE5LjcwMyAxMjkuNDEgMzE5LjcwOSAxMjIuMjk1IDMxOS4yNzFDNzEuNjYyIDMxNi4xNTIgMzIgMjczLjM0MiAzMiAyMjEuODEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChampagneGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M208 480H144V349.877C206.912 341.746 256 287.973 256 221.812C256 186.719 242.734 91.688 222.984 6.188C222.141 2.562 218.906 0 215.188 0H40.812C37.094 0 33.859 2.562 33.016 6.188C13.266 91.688 0 186.719 0 221.812C0 287.973 49.088 341.746 112 349.877V480H48C39.164 480 32 487.162 32 496C32 504.836 39.164 512 48 512H208C216.836 512 224 504.836 224 496C224 487.162 216.836 480 208 480ZM195.967 32C203.023 64.584 209.029 97.877 213.715 128H42.285C46.973 97.873 52.979 64.576 60.033 32H195.967ZM32 221.812C32 209.109 34.096 186.885 37.656 160H218.344C221.904 186.887 224 209.111 224 221.812C224 273.342 184.338 316.152 133.707 319.271C126.697 319.703 129.41 319.709 122.295 319.271C71.662 316.152 32 273.342 32 221.812Z" />
        </Icon>
    </>
}