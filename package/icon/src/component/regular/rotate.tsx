
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rotate` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rotate?s=regular rotate}
 * @preview ![rotate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODEuMjUgMzMuODEyQzQ3Mi4zMTIgMzAuMTU2IDQ2MS45MzggMzIuMTU2IDQ1NS4wOTQgMzkuMDMxTDQwNC41ODggODkuNTM5QzM2NC40MDggNTMuODEyIDMxMi4xNTIgMzIgMjU2LjA2MiAzMkMxNTcuMDYyIDMyIDY4LjU5NCA5OC4zMTIgNDAuOTY5IDE5My4yODFDMzcuMjUgMjA2LjAzMSA0NC41NjIgMjE5LjM0NCA1Ny4yODEgMjIzLjAzMUM3MC4wOTQgMjI2LjgxMyA4My4zNDQgMjE5LjQwNiA4Ny4wMzEgMjA2LjcxOUMxMDguNzUgMTMyLjA5NCAxNzguMjgxIDgwIDI1Ni4wNjIgODBDMjk5LjE4MiA4MCAzMzkuNDE2IDk2LjQxOCAzNzAuNzI1IDEyMy4zOThMMzExLjA5NCAxODMuMDMxQzMwNC4yMTkgMTg5LjkwNiAzMDIuMTg3IDIwMC4yMTkgMzA1Ljg3NSAyMDkuMTg4QzMwOS41OTQgMjE4LjE1NiAzMTguMzQ0IDIyNCAzMjguMDYyIDIyNEg0NzIuMDYyQzQ4NS4zMTIgMjI0IDQ5Ni4wNjIgMjEzLjI1IDQ5Ni4wNjIgMjAwVjU2QzQ5Ni4wNjIgNDYuMjgxIDQ5MC4yMTkgMzcuNTMxIDQ4MS4yNSAzMy44MTJaTTQ1NC43ODEgMjg4Ljk2OUM0NDIgMjg1LjIxOSA0MjguNzE5IDI5Mi41NjIgNDI1LjAzMSAzMDUuMjgxQzQwMy4zMTIgMzc5LjkwNiAzMzMuNzgxIDQzMiAyNTYgNDMyQzIxMi44NzcgNDMyIDE3Mi42NDggNDE1LjU3OCAxNDEuMzQ4IDM4OC41OUwyMDAuOTY5IDMyOC45NjlDMjA3Ljg0NCAzMjIuMDk0IDIwOS44NzUgMzExLjc4MSAyMDYuMTg4IDMwMi44MTJDMjAyLjQ2OSAyOTMuODQ0IDE5My43MTkgMjg4IDE4NCAyODhINDBDMjYuNzUgMjg4IDE2IDI5OC43NSAxNiAzMTJWNDU2QzE2IDQ2NS43MTkgMjEuODQ0IDQ3NC40NjkgMzAuODEyIDQ3OC4xODhDMzMuNzgxIDQ3OS40MDYgMzYuOTA2IDQ4MCA0MCA0ODBDNDYuMjUgNDgwIDUyLjM3NSA0NzcuNTYyIDU2Ljk2OSA0NzIuOTY5TDEwNy40ODIgNDIyLjQ1M0MxNDcuNjU0IDQ1OC4xODQgMTk5LjkwNCA0ODAgMjU2IDQ4MEMzNTUgNDgwIDQ0My40NjkgNDEzLjY4OCA0NzEuMDk0IDMxOC43MTlDNDc0LjgxMiAzMDUuOTY5IDQ2Ny41IDI5Mi42NTYgNDU0Ljc4MSAyODguOTY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rotate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M481.25 33.812C472.312 30.156 461.938 32.156 455.094 39.031L404.588 89.539C364.408 53.812 312.152 32 256.062 32C157.062 32 68.594 98.312 40.969 193.281C37.25 206.031 44.562 219.344 57.281 223.031C70.094 226.813 83.344 219.406 87.031 206.719C108.75 132.094 178.281 80 256.062 80C299.182 80 339.416 96.418 370.725 123.398L311.094 183.031C304.219 189.906 302.187 200.219 305.875 209.188C309.594 218.156 318.344 224 328.062 224H472.062C485.312 224 496.062 213.25 496.062 200V56C496.062 46.281 490.219 37.531 481.25 33.812ZM454.781 288.969C442 285.219 428.719 292.562 425.031 305.281C403.312 379.906 333.781 432 256 432C212.877 432 172.648 415.578 141.348 388.59L200.969 328.969C207.844 322.094 209.875 311.781 206.188 302.812C202.469 293.844 193.719 288 184 288H40C26.75 288 16 298.75 16 312V456C16 465.719 21.844 474.469 30.812 478.188C33.781 479.406 36.906 480 40 480C46.25 480 52.375 477.562 56.969 472.969L107.482 422.453C147.654 458.184 199.904 480 256 480C355 480 443.469 413.688 471.094 318.719C474.812 305.969 467.5 292.656 454.781 288.969Z" />
        </Icon>
    </>
}