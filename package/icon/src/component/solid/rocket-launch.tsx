
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rocket-launch` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rocket-launch?s=solid rocket-launch}
 * @preview ![rocket-launch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuMDk4IDE5LjI1QzUwMy45NzMgMTMuODc1IDQ5OC4wOTggOCA0OTIuNzIzIDYuODc1QzQ2MC42IDAgNDM1LjQ3NiAwIDQxMC4zNTMgMEMzMDcuMjMzIDAgMjQ1LjIzNyA1NS4yNSAxOTkuMTE0IDEyOEg5NC44N0M3OC42MjEgMTI4IDU5LjI0NyAxMzkuODc1IDUxLjk5NyAxNTQuNUwyLjYyNSAyNTMuMjVDMSAyNTYuNjI1IDAuMjUgMjYwLjI1IDAgMjY0QzAuMTI1IDI3Ny4yNSAxMC43NDkgMjg4IDI0LjEyNCAyODhIMTI3Ljk5M0MxODAuOTkgMjg4IDIyMy45ODggMzMxIDIyMy45ODggMzg0VjQ4OEMyMjMuOTg4IDUwMS4yNSAyMzQuNzM3IDUxMiAyNDcuOTg3IDUxMkMyNTEuNzM2IDUxMS44NzUgMjU1LjM2MSA1MTEgMjU4LjczNiA1MDkuNUwzNTcuNDgxIDQ2MC4xMjVDMzcxLjk4IDQ1Mi43NSAzODMuOTc5IDQzMy41IDM4My45NzkgNDE3LjI1VjMxMi43NUM0NTYuNDc1IDI2Ni41IDUxMS45NzIgMjA0LjM3NSA1MTEuOTcyIDEwMS43NUM1MTIuMDk3IDc2LjUgNTEyLjA5NyA1MS4zNzUgNTA1LjA5OCAxOS4yNVpNMzgzLjk3OSAxNjhDMzYxLjk4IDE2OCAzNDMuOTgxIDE1MC4xMjUgMzQzLjk4MSAxMjhDMzQ0LjEwNiAxMDUuODc1IDM2MS45OCA4OCAzODQuMTA0IDg4QzQwNi4xMDMgODggNDIzLjk3NyAxMDUuODc1IDQyMy45NzcgMTI4UzQwNi4xMDMgMTY4IDM4My45NzkgMTY4Wk0zNS42MjMgMzUyLjEyNUM5Ljg3NCAzNzcuODc1IC0zIDQ0Mi42MjUgMC42MjUgNTExLjM3NUM2OS43NDYgNTE1IDEzNC4yNDMgNTAyIDE1OS45OTEgNDc2LjI1QzIwMC4yMzkgNDM2IDIwMi44NjQgMzgyLjM3NSAxNjYuMjQxIDM0NS43NUMxMjkuNjE4IDMwOS4yNSA3NS45OTYgMzExLjc1IDM1LjYyMyAzNTIuMTI1Wk0xMTcuMzY5IDQzNi4xMjVDMTA4Ljc0NCA0NDQuNjI1IDg3LjI0NSA0NDkgNjQuMjQ3IDQ0Ny43NUM2Mi45OTcgNDI0Ljg3NSA2Ny4yNDYgNDAzLjI1IDc1Ljg3MSAzOTQuNzVDODkuMzcgMzgxLjI1IDEwNy4yNDQgMzgwLjM3NSAxMTkuMzY5IDM5Mi42MjVDMTMxLjYxOCA0MDQuNzUgMTMwLjc0MyA0MjIuNjI1IDExNy4zNjkgNDM2LjEyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RocketLaunch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.098 19.25C503.973 13.875 498.098 8 492.723 6.875C460.6 0 435.476 0 410.353 0C307.233 0 245.237 55.25 199.114 128H94.87C78.621 128 59.247 139.875 51.997 154.5L2.625 253.25C1 256.625 0.25 260.25 0 264C0.125 277.25 10.749 288 24.124 288H127.993C180.99 288 223.988 331 223.988 384V488C223.988 501.25 234.737 512 247.987 512C251.736 511.875 255.361 511 258.736 509.5L357.481 460.125C371.98 452.75 383.979 433.5 383.979 417.25V312.75C456.475 266.5 511.972 204.375 511.972 101.75C512.097 76.5 512.097 51.375 505.098 19.25ZM383.979 168C361.98 168 343.981 150.125 343.981 128C344.106 105.875 361.98 88 384.104 88C406.103 88 423.977 105.875 423.977 128S406.103 168 383.979 168ZM35.623 352.125C9.874 377.875 -3 442.625 0.625 511.375C69.746 515 134.243 502 159.991 476.25C200.239 436 202.864 382.375 166.241 345.75C129.618 309.25 75.996 311.75 35.623 352.125ZM117.369 436.125C108.744 444.625 87.245 449 64.247 447.75C62.997 424.875 67.246 403.25 75.871 394.75C89.37 381.25 107.244 380.375 119.369 392.625C131.618 404.75 130.743 422.625 117.369 436.125Z" />
        </Icon>
    </>
}