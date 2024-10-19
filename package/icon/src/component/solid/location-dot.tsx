
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location-dot` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot?s=solid location-dot}
 * @preview ![location-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4NS45NjkgMCAwIDg1Ljk2OSAwIDE5Mi4wMDFDMCAyNjkuNDA4IDI2Ljk2OSAyOTEuMDMzIDE3Mi4yODEgNTAxLjY3NkMxODEuODEzIDUxNS40NDEgMjAyLjE4OCA1MTUuNDQxIDIxMS43MTkgNTAxLjY3NkMzNTcuMDMxIDI5MS4wMzMgMzg0IDI2OS40MDggMzg0IDE5Mi4wMDFDMzg0IDg1Ljk2OSAyOTguMDMxIDAgMTkyIDBaTTE5MiAyNzEuOTk4QzE0Ny44NzUgMjcxLjk5OCAxMTIgMjM2LjEyMyAxMTIgMTkxLjk5OFMxNDcuODc1IDExMS45OTcgMTkyIDExMS45OTdTMjcyIDE0Ny44NzIgMjcyIDE5MS45OThTMjM2LjEyNSAyNzEuOTk4IDE5MiAyNzEuOTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LocationDot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C85.969 0 0 85.969 0 192.001C0 269.408 26.969 291.033 172.281 501.676C181.813 515.441 202.188 515.441 211.719 501.676C357.031 291.033 384 269.408 384 192.001C384 85.969 298.031 0 192 0ZM192 271.998C147.875 271.998 112 236.123 112 191.998S147.875 111.997 192 111.997S272 147.872 272 191.998S236.125 271.998 192 271.998Z" />
        </Icon>
    </>
}