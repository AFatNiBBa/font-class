
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clipboard-list` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-list?s=light clipboard-list}
 * @preview ![clipboard-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgMTI4SDI3MkMyODAuODQ0IDEyOCAyODggMTIwLjg0NCAyODggMTEyUzI4MC44NDQgOTYgMjcyIDk2SDI0Ny4xMjNDMjUyLjYyMSA4Ni41NTUgMjU2IDc1LjcxNyAyNTYgNjRDMjU2IDI4LjY1NCAyMjcuMzQ2IDAgMTkyIDBTMTI4IDI4LjY1NCAxMjggNjRDMTI4IDc1LjcxNyAxMzEuMzc5IDg2LjU1NSAxMzYuODc3IDk2SDExMkMxMDMuMTU2IDk2IDk2IDEwMy4xNTYgOTYgMTEyUzEwMy4xNTYgMTI4IDExMiAxMjhaTTE5MiAzMkMyMDkuNjQ1IDMyIDIyNCA0Ni4zNTUgMjI0IDY0UzIwOS42NDUgOTYgMTkyIDk2UzE2MCA4MS42NDUgMTYwIDY0UzE3NC4zNTUgMzIgMTkyIDMyWk0zMjAgNjRDMzExLjE1NiA2NCAzMDQgNzEuMTU2IDMwNCA4MFMzMTEuMTU2IDk2IDMyMCA5NkMzMzcuNjQxIDk2IDM1MiAxMTAuMzQ0IDM1MiAxMjhWNDQ4QzM1MiA0NjUuNjU2IDMzNy42NDEgNDgwIDMyMCA0ODBINjRDNDYuMzU5IDQ4MCAzMiA0NjUuNjU2IDMyIDQ0OFYxMjhDMzIgMTEwLjM0NCA0Ni4zNTkgOTYgNjQgOTZDNzIuODQ0IDk2IDgwIDg4Ljg0NCA4MCA4MFM3Mi44NDQgNjQgNjQgNjRDMjguNzAzIDY0IDAgOTIuNzE5IDAgMTI4VjQ0OEMwIDQ4My4yODEgMjguNzAzIDUxMiA2NCA1MTJIMzIwQzM1NS4yOTcgNTEyIDM4NCA0ODMuMjgxIDM4NCA0NDhWMTI4QzM4NCA5Mi43MTkgMzU1LjI5NyA2NCAzMjAgNjRaTTcyIDI1NkM3MiAyNjkuMjU0IDgyLjc0NiAyODAgOTYgMjgwQzEwOS4yNTYgMjgwIDEyMCAyNjkuMjU0IDEyMCAyNTZDMTIwIDI0Mi43NDQgMTA5LjI1NiAyMzIgOTYgMjMyQzgyLjc0NiAyMzIgNzIgMjQyLjc0NCA3MiAyNTZaTTk2IDMyOEM4Mi43NDYgMzI4IDcyIDMzOC43NDQgNzIgMzUyQzcyIDM2NS4yNTQgODIuNzQ2IDM3NiA5NiAzNzZDMTA5LjI1NiAzNzYgMTIwIDM2NS4yNTQgMTIwIDM1MkMxMjAgMzM4Ljc0NCAxMDkuMjU2IDMyOCA5NiAzMjhaTTMwNCAyNDBIMTc2QzE2Ny4xNTYgMjQwIDE2MCAyNDcuMTU2IDE2MCAyNTZTMTY3LjE1NiAyNzIgMTc2IDI3MkgzMDRDMzEyLjg0NCAyNzIgMzIwIDI2NC44NDQgMzIwIDI1NlMzMTIuODQ0IDI0MCAzMDQgMjQwWk0zMDQgMzM2SDE3NkMxNjcuMTU2IDMzNiAxNjAgMzQzLjE1NiAxNjAgMzUyUzE2Ny4xNTYgMzY4IDE3NiAzNjhIMzA0QzMxMi44NDQgMzY4IDMyMCAzNjAuODQ0IDMyMCAzNTJTMzEyLjg0NCAzMzYgMzA0IDMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ClipboardList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M112 128H272C280.844 128 288 120.844 288 112S280.844 96 272 96H247.123C252.621 86.555 256 75.717 256 64C256 28.654 227.346 0 192 0S128 28.654 128 64C128 75.717 131.379 86.555 136.877 96H112C103.156 96 96 103.156 96 112S103.156 128 112 128ZM192 32C209.645 32 224 46.355 224 64S209.645 96 192 96S160 81.645 160 64S174.355 32 192 32ZM320 64C311.156 64 304 71.156 304 80S311.156 96 320 96C337.641 96 352 110.344 352 128V448C352 465.656 337.641 480 320 480H64C46.359 480 32 465.656 32 448V128C32 110.344 46.359 96 64 96C72.844 96 80 88.844 80 80S72.844 64 64 64C28.703 64 0 92.719 0 128V448C0 483.281 28.703 512 64 512H320C355.297 512 384 483.281 384 448V128C384 92.719 355.297 64 320 64ZM72 256C72 269.254 82.746 280 96 280C109.256 280 120 269.254 120 256C120 242.744 109.256 232 96 232C82.746 232 72 242.744 72 256ZM96 328C82.746 328 72 338.744 72 352C72 365.254 82.746 376 96 376C109.256 376 120 365.254 120 352C120 338.744 109.256 328 96 328ZM304 240H176C167.156 240 160 247.156 160 256S167.156 272 176 272H304C312.844 272 320 264.844 320 256S312.844 240 304 240ZM304 336H176C167.156 336 160 343.156 160 352S167.156 368 176 368H304C312.844 368 320 360.844 320 352S312.844 336 304 336Z" />
        </Icon>
    </>
}