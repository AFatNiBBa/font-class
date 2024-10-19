
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `angle-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=thin angle-left}
 * @preview ![angle-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAyNTUuOTk5QzMyIDI1My45OTkgMzIuNzM0IDI1Mi4wMyAzNC4yMTkgMjUwLjQ2OEwxNzguMjI2IDk4LjQ3MUMxODEuMjczIDk1LjI4MyAxODYuMzUxIDk1LjE1OCAxODkuNTM5IDk4LjIyMUMxOTIuNzI3IDEwMS4zMTQgMTkyLjgyIDEwNi4zNzcgMTg5Ljc4OSAxMDkuNTMzTDUxLjA3OSAyNTUuOTk5TDE4OS43OTEgNDAyLjQ2N0MxOTIuODIyIDQwNS42ODYgMTkyLjcyOSA0MTAuNzQ4IDE4OS41NDEgNDEzLjc3OUMxODYuMzU0IDQxNi44NDIgMTgxLjI3NSA0MTYuNzE3IDE3OC4yMjggNDEzLjUyOUwzNC4yMTkgMjYxLjUzQzMyLjczNCAyNTkuOTY4IDMyIDI1Ny45OTkgMzIgMjU1Ljk5OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AngleLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M32 255.999C32 253.999 32.734 252.03 34.219 250.468L178.226 98.471C181.273 95.283 186.351 95.158 189.539 98.221C192.727 101.314 192.82 106.377 189.789 109.533L51.079 255.999L189.791 402.467C192.822 405.686 192.729 410.748 189.541 413.779C186.354 416.842 181.275 416.717 178.228 413.529L34.219 261.53C32.734 259.968 32 257.999 32 255.999Z" />
        </Icon>
    </>
}