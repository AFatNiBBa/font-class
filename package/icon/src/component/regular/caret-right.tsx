
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=regular caret-right}
 * @preview ![caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCAxNDMuOTY4VjM2Ny45NzZDNDggNDEwLjYwMyA5OS43NTggNDMyLjEwMyAxMzAuMDEyIDQwMS44NTJMMjQyLjAyOSAyODkuOTczQzI2MC42NTcgMjcxLjIyMyAyNjAuNjU3IDI0MC43MjIgMjQyLjAyOSAyMjEuOTcxTDEzMC4wMTIgMTEwLjA5MkM5OS43NTggNzkuOTY2IDQ4IDEwMS4zNDIgNDggMTQzLjk2OFpNMjA4LjAyNCAyNTUuOTcyTDk2LjAwNyAzNjcuOTc2VjE0My45NjhMMjA4LjAyNCAyNTUuOTcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CaretRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M48 143.968V367.976C48 410.603 99.758 432.103 130.012 401.852L242.029 289.973C260.657 271.223 260.657 240.722 242.029 221.971L130.012 110.092C99.758 79.966 48 101.342 48 143.968ZM208.024 255.972L96.007 367.976V143.968L208.024 255.972Z" />
        </Icon>
    </>
}