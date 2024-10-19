
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rocket` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rocket?s=solid rocket}
 * @preview ![rocket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuMDk4IDE5LjEyNUM1MDMuODQ4IDEzLjUgNDk4LjQ3MyA4LjEyNSA0OTIuODQ4IDYuODc1QzQ2MC43MjUgMCA0MzUuNDc2IDAgNDEwLjM1MyAwQzMwNy4xMDggMCAyNDUuMjM3IDU1LjI1IDE5OC45ODkgMTI4SDk0Ljg3Qzc4LjQ5NiAxMjggNTkuMjQ3IDEzOS44NzUgNTEuOTk3IDE1NC41TDIuNSAyNTMuMjVDMSAyNTYuNjI1IDAuMTI1IDI2MC4yNSAwIDI2NEMwIDI3Ny4yNSAxMC43NDkgMjg4IDIzLjk5OSAyODhIMTI3Ljg2OEwxMDUuMzY5IDMxMC41QzkzLjk5NCAzMjEuODc1IDkyLjM3IDM0Mi43NSAxMDUuMzY5IDM1NS43NUwxNTYuMjQyIDQwNi42MjVDMTY3LjM2NiA0MTcuNzUgMTg4LjM2NSA0MTkuNzUgMjAxLjQ4OSA0MDYuNjI1TDIyMy45ODggMzg0LjEyNVY0ODhDMjIzLjk4OCA1MDEuMjUgMjM0LjczNyA1MTIgMjQ3Ljk4NyA1MTJDMjUxLjczNiA1MTEuODc1IDI1NS4zNjEgNTExIDI1OC43MzYgNTA5LjVMMzU3LjQ4MSA0NjAuMTI1QzM3Mi4xMDUgNDUyLjc1IDM4My45NzkgNDMzLjYyNSAzODMuOTc5IDQxNy4yNVYzMTIuNzVDNDU2LjQ3NSAyNjYuNSA1MTEuOTcyIDIwNC4zNzUgNTExLjk3MiAxMDEuNzVDNTEyLjA5NyA3Ni41IDUxMi4wOTcgNTEuMjUgNTA1LjA5OCAxOS4xMjVaTTM4My45NzkgMTY4QzM2MS45OCAxNjggMzQzLjk4MSAxNTAuMTI1IDM0My45ODEgMTI4UzM2MS45OCA4OCAzODMuOTc5IDg4QzQwNi4xMDMgODggNDIzLjk3NyAxMDUuODc1IDQyMy45NzcgMTI4UzQwNi4xMDMgMTY4IDM4My45NzkgMTY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rocket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.098 19.125C503.848 13.5 498.473 8.125 492.848 6.875C460.725 0 435.476 0 410.353 0C307.108 0 245.237 55.25 198.989 128H94.87C78.496 128 59.247 139.875 51.997 154.5L2.5 253.25C1 256.625 0.125 260.25 0 264C0 277.25 10.749 288 23.999 288H127.868L105.369 310.5C93.994 321.875 92.37 342.75 105.369 355.75L156.242 406.625C167.366 417.75 188.365 419.75 201.489 406.625L223.988 384.125V488C223.988 501.25 234.737 512 247.987 512C251.736 511.875 255.361 511 258.736 509.5L357.481 460.125C372.105 452.75 383.979 433.625 383.979 417.25V312.75C456.475 266.5 511.972 204.375 511.972 101.75C512.097 76.5 512.097 51.25 505.098 19.125ZM383.979 168C361.98 168 343.981 150.125 343.981 128S361.98 88 383.979 88C406.103 88 423.977 105.875 423.977 128S406.103 168 383.979 168Z" />
        </Icon>
    </>
}