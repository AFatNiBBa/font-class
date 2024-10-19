
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `peach` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/peach?s=thin peach}
 * @preview ![peach](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjIuMzc1IDk0LjIxOUMxMjUuNjU2IDkxLjI1IDEyNS45MDYgODYuMTg3IDEyMi45MzggODIuOTIyQzExMC43MTkgNjkuNDY5IDEwNCA1Mi4zNDQgMTA0IDM0LjY3MlYxNkgxNzZDMjE1LjY4OCAxNiAyNDggNDguMjk3IDI0OCA4OFY5NS44MjhDMjQ4IDEwMC4yNSAyNTEuNTk0IDEwMy44MjggMjU2IDEwMy44MjhTMjY0IDEwMC4yNSAyNjQgOTUuODI4Vjg4QzI2NCA0OC4yOTcgMjk2LjMxMiAxNiAzMzYgMTZINDA4VjM0LjY3MkM0MDggNTIuMzQ0IDQwMS4yODEgNjkuNDY5IDM4OS4wNjIgODIuOTIyQzM4Ni4wOTQgODYuMTg4IDM4Ni4zNDQgOTEuMjUgMzg5LjYyNSA5NC4yMTlDMzkxLjE1NiA5NS42MDkgMzkzLjA5NCA5Ni4yOTcgMzk1IDk2LjI5N0MzOTcuMTg4IDk2LjI5NyAzOTkuMzQ0IDk1LjQwNiA0MDAuOTM4IDkzLjY3MkM0MTUuODEyIDc3LjI4MSA0MjQgNTYuMzI4IDQyNCAzNC42NzJWOEM0MjQgMy41NzggNDIwLjQwNiAwIDQxNiAwSDMzNkMzMDAuNDA2IDAgMjY5Ljg1MiAyMS4zNCAyNTYuMDAyIDUxLjgwM0MyNDIuMTU2IDIxLjMzMiAyMTEuNTk4IDAgMTc2IDBIOTZDOTEuNTk0IDAgODggMy41NzggODggOFYzNC42NzJDODggNTYuMzI4IDk2LjE4OCA3Ny4yODEgMTExLjA2MiA5My42NzJDMTE0LjAzMSA5Ni45MDYgMTE5LjA2MiA5Ny4xODggMTIyLjM3NSA5NC4yMTlaTTMzNiAxMTJDMzA4Ljg3NSAxMTIgMjgwLjYyNSAxMTguNjg4IDI1NS45NjkgMTMwLjg5MUMyMzAuOTcxIDExOC42MjMgMjAzLjY3IDExMi4xNTQgMTc2LjcxMSAxMTIuMDQzQzE3Ni42ODIgMTEyLjA0MSAxNzYuNjU0IDExMi4wMzMgMTc2LjYyNSAxMTIuMDMxQzE3Ni42MTkgMTEyLjAzMSAxNzYuNjE1IDExMi4wMzcgMTc2LjYwOSAxMTIuMDM3QzE3Ni40MDYgMTEyLjAzNyAxNzYuMjAzIDExMiAxNzYgMTEyQzgxLjc4MSAxMTIgOCAxODIuOTg0IDggMjczLjU5NEM4IDM4Mi43OTcgMTM1LjI4MSA0NzMuNTMxIDI1My41NjIgNTExLjYwOUMyNTQuMzQ0IDUxMS44NzUgMjU1LjE4OCA1MTIgMjU2IDUxMlMyNTcuNjU2IDUxMS44NzUgMjU4LjQzOCA1MTEuNjA5QzM4MC42ODggNDcyLjIzNCA1MDQgMzgzLjM3NSA1MDQgMjczLjU5NEM1MDQgMTgyLjk4NCA0MzAuMjE5IDExMiAzMzYgMTEyWk0yNTYgNDk1LjU5NEMxMTkuMjgxIDQ1MC44NDQgMjQgMzU5Ljc5NyAyNCAyNzMuNTk0QzI0IDE5Mi4wMjUgOTAuNjcgMTI4LjEzMyAxNzUuNzgzIDEyOC4wMkMyNTIuMjYyIDEzNC4zMDMgMzI4IDE4Mi43NjIgMzI4IDI1My41NjJDMzI4IDI1Ny45ODQgMzMxLjU5NCAyNjEuNTYyIDMzNiAyNjEuNTYyUzM0NCAyNTcuOTg0IDM0NCAyNTMuNTYyQzM0NCAyMDkuNDUxIDMxNy4wOSAxNjguNDkgMjcxLjczIDE0MS41NTFDMjkyLjA2OCAxMzIuOTE4IDMxNC4zNzEgMTI4IDMzNiAxMjhDNDIxLjIxOSAxMjggNDg4IDE5MS45NTMgNDg4IDI3My41OTRDNDg4IDM1OS43ODEgMzkyLjcxOSA0NTAuODI4IDI1NiA0OTUuNTk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Peach(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M122.375 94.219C125.656 91.25 125.906 86.187 122.938 82.922C110.719 69.469 104 52.344 104 34.672V16H176C215.688 16 248 48.297 248 88V95.828C248 100.25 251.594 103.828 256 103.828S264 100.25 264 95.828V88C264 48.297 296.312 16 336 16H408V34.672C408 52.344 401.281 69.469 389.062 82.922C386.094 86.188 386.344 91.25 389.625 94.219C391.156 95.609 393.094 96.297 395 96.297C397.188 96.297 399.344 95.406 400.938 93.672C415.812 77.281 424 56.328 424 34.672V8C424 3.578 420.406 0 416 0H336C300.406 0 269.852 21.34 256.002 51.803C242.156 21.332 211.598 0 176 0H96C91.594 0 88 3.578 88 8V34.672C88 56.328 96.188 77.281 111.062 93.672C114.031 96.906 119.062 97.188 122.375 94.219ZM336 112C308.875 112 280.625 118.688 255.969 130.891C230.971 118.623 203.67 112.154 176.711 112.043C176.682 112.041 176.654 112.033 176.625 112.031C176.619 112.031 176.615 112.037 176.609 112.037C176.406 112.037 176.203 112 176 112C81.781 112 8 182.984 8 273.594C8 382.797 135.281 473.531 253.562 511.609C254.344 511.875 255.188 512 256 512S257.656 511.875 258.438 511.609C380.688 472.234 504 383.375 504 273.594C504 182.984 430.219 112 336 112ZM256 495.594C119.281 450.844 24 359.797 24 273.594C24 192.025 90.67 128.133 175.783 128.02C252.262 134.303 328 182.762 328 253.562C328 257.984 331.594 261.562 336 261.562S344 257.984 344 253.562C344 209.451 317.09 168.49 271.73 141.551C292.068 132.918 314.371 128 336 128C421.219 128 488 191.953 488 273.594C488 359.781 392.719 450.828 256 495.594Z" />
        </Icon>
    </>
}