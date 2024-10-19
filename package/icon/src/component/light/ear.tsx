
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ear` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ear?s=light ear}
 * @preview ![ear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4NiAwIDAgODYgMCAxOTJWMzY4QzAgNDQ3LjUgNjQuNSA1MTIgMTQ0IDUxMlMyODggNDQ3LjUgMjg4IDM2OFYzNTguMTI1QzM0NS4zNzUgMzI0Ljg3NSAzODQgMjYzIDM4NCAxOTJDMzg0IDg2IDI5OCAwIDE5MiAwWk0yNzEuOTU1IDMzMC40MzhDMjYyLjA4IDMzNi4xNjIgMjU2IDM0Ni43MTEgMjU2IDM1OC4xMjVWMzY4QzI1NiA0MjkuNzU4IDIwNS43NTggNDgwIDE0NCA0ODBTMzIgNDI5Ljc1OCAzMiAzNjhWMTkyQzMyIDEwMy43NzUgMTAzLjc3NSAzMiAxOTIgMzJTMzUyIDEwMy43NzUgMzUyIDE5MkMzNTIgMjQ4Ljc3OSAzMjEuMzI4IDMwMS44MjYgMjcxLjk1NSAzMzAuNDM4Wk0yODAuMDc4IDk5LjA5NEMyNTQuMDMxIDc0LjQwNiAyMjAuMjE5IDYxLjc4MSAxODUuMTI1IDY0LjE4OEMxMTguMzQ0IDY3LjY4OCA2NCAxMjguMDYyIDY0IDE5OC43ODFWMjQwQzY0IDI0OC44NDQgNzEuMTU2IDI1NiA4MCAyNTZIODYuMDYyQzEwMC4zNTkgMjU2IDExMiAyNjcuNjI1IDExMiAyODEuOTM4QzExMiAyODguODQ0IDEwOS4yOTcgMjk1LjM3NSAxMDQuNDA2IDMwMC4yODFMNjYuMzQ0IDMzOC4zNDRDNjAuMDk0IDM0NC41OTQgNjAuMDk0IDM1NC43MTkgNjYuMzQ0IDM2MC45NjlDNjkuNDY5IDM2NC4wOTQgNzMuNTYyIDM2NS42NTYgNzcuNjU2IDM2NS42NTZTODUuODQ0IDM2NC4wOTQgODguOTY5IDM2MC45NjlMMTI3LjA0NyAzMjIuOTA2QzEzNy45ODQgMzExLjkzOCAxNDQgMjk3LjQwNiAxNDQgMjgxLjkzOEMxNDQgMjUzLjM3NSAxMjMuMjM0IDIyOS41NjIgOTYgMjI0Ljg0NFYxOTguNzgxQzk2IDE0NC44MTMgMTM2LjczNCA5OC43NSAxODYuOTUzIDk2LjEyNUMyMTMuNDIyIDk0LjU5NCAyMzguNTMxIDEwMy43ODEgMjU4LjA2MyAxMjIuMzEzQzI3Ny4zNzUgMTQwLjY1NiAyODggMTY1LjQwNiAyODggMTkyQzI4OCAyMDAuODQ0IDI5NS4xNTYgMjA4IDMwNCAyMDhTMzIwIDIwMC44NDQgMzIwIDE5MkMzMjAgMTU2LjUzMSAzMDUuODI4IDEyMy41MzEgMjgwLjA3OCA5OS4wOTRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Ear(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C86 0 0 86 0 192V368C0 447.5 64.5 512 144 512S288 447.5 288 368V358.125C345.375 324.875 384 263 384 192C384 86 298 0 192 0ZM271.955 330.438C262.08 336.162 256 346.711 256 358.125V368C256 429.758 205.758 480 144 480S32 429.758 32 368V192C32 103.775 103.775 32 192 32S352 103.775 352 192C352 248.779 321.328 301.826 271.955 330.438ZM280.078 99.094C254.031 74.406 220.219 61.781 185.125 64.188C118.344 67.688 64 128.062 64 198.781V240C64 248.844 71.156 256 80 256H86.062C100.359 256 112 267.625 112 281.938C112 288.844 109.297 295.375 104.406 300.281L66.344 338.344C60.094 344.594 60.094 354.719 66.344 360.969C69.469 364.094 73.562 365.656 77.656 365.656S85.844 364.094 88.969 360.969L127.047 322.906C137.984 311.938 144 297.406 144 281.938C144 253.375 123.234 229.562 96 224.844V198.781C96 144.813 136.734 98.75 186.953 96.125C213.422 94.594 238.531 103.781 258.063 122.313C277.375 140.656 288 165.406 288 192C288 200.844 295.156 208 304 208S320 200.844 320 192C320 156.531 305.828 123.531 280.078 99.094Z" />
        </Icon>
    </>
}