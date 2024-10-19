
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-round-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round-right?s=solid bracket-round-right}
 * @preview ![bracket-round-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNy41MzQgNDY1Ljg0NEMyNy42OTEgNDUxLjI1MSAzMS41NjYgNDMxLjM3NiA0Ni4xMjggNDIxLjQ3QzQ5LjQ3MiA0MTkuMTg5IDEyOC4wMDEgMzY0LjM3OCAxMjguMDAxIDI1Ni4wMDVDMTI4LjAwMSAxNDcuNzU4IDQ5LjYyOCA5Mi45NDcgNDYuMTI4IDkwLjU0QzMxLjUzNCA4MC43MjggMjcuNTk3IDYwLjkxNiAzNy4zNzggNDYuMjZDNDcuMTkgMzEuNTQyIDY3LjAzNCAyNy41NzMgODEuNzUyIDM3LjM4NUM4Ni4yNTIgNDAuMzg1IDE5MiAxMTIuNTQgMTkyIDI1Ni4wMDVTODYuMjUyIDQ3MS42MjUgODEuNzUyIDQ3NC42MjVDNzYuMzE1IDQ3OC4yNSA3MC4xNTkgNDgwIDY0LjA5NiA0ODBDNTMuODE1IDQ4MCA0My43MjIgNDc1LjAzMSAzNy41MzQgNDY1Ljg0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BracketRoundRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M37.534 465.844C27.691 451.251 31.566 431.376 46.128 421.47C49.472 419.189 128.001 364.378 128.001 256.005C128.001 147.758 49.628 92.947 46.128 90.54C31.534 80.728 27.597 60.916 37.378 46.26C47.19 31.542 67.034 27.573 81.752 37.385C86.252 40.385 192 112.54 192 256.005S86.252 471.625 81.752 474.625C76.315 478.25 70.159 480 64.096 480C53.815 480 43.722 475.031 37.534 465.844Z" />
        </Icon>
    </>
}