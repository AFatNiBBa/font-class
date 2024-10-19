
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `camera-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=solid camera-slash}
 * @preview ![camera-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzAuODEgNDY5LjEwMkw1NzUuOTk5IDQyNi4xNDNWMTQ0QzU3NS45OTkgMTE3LjUgNTU0LjQ5OSA5NiA1MjcuOTk5IDk2SDQzOS45OTlMNDI3LjYyNCA2My4xMjVDNDIwLjYyNCA0NC4zNzUgNDAyLjc0OSAzMiAzODIuNzQ5IDMySDI1Ny4yNDlDMjM3LjI0OSAzMiAyMTkuMjQ5IDQ0LjM3NSAyMTIuMjQ5IDYzLjEyNUwxOTkuOTk5IDk2SDE1NC43NzlMMzguODE0IDUuMTA5QzM0LjQwNyAxLjY3MiAyOS4xODkgMCAyNC4wMzIgMEMxNi45MDcgMCA5Ljg0NSAzLjE1NiA1LjEyNiA5LjE4OEMtMy4wNjEgMTkuNjI1IC0xLjI0OSAzNC43MTkgOS4xODkgNDIuODkxTDYwMS4xODUgNTA2Ljg4M0M2MTEuNjg1IDUxNS4wODYgNjI2Ljc0NyA1MTMuMjExIDYzNC44NzIgNTAyLjgwNUM2NDMuMDYgNDkyLjM2NyA2NDEuMjQ3IDQ3Ny4yNzMgNjMwLjgxIDQ2OS4xMDJaTTQxNC45NjggMjk5LjkzTDI4Ni4xMDMgMTk4LjkyOEMyOTYuNjgzIDE5NC44MDMgMzA3LjkyNyAxOTIgMzE5Ljk5OSAxOTJDMzcyLjk5OSAxOTIgNDE1Ljk5OSAyMzUgNDE1Ljk5OSAyODhDNDE1Ljk5OSAyOTIuMDc0IDQxNS40NzggMjk2LjAwMiA0MTQuOTY4IDI5OS45M1pNMzE5Ljk5OSAzODRDMjY2Ljk5OSAzODQgMjIzLjk5OSAzNDEgMjIzLjk5OSAyODhDMjIzLjk5OSAyODMuMDAyIDIyNC43MzYgMjc4LjE5OSAyMjUuNDcyIDI3My40MDZMNjMuOTk5IDE0Ni44NDhWNDMyQzYzLjk5OSA0NTguNSA4NS40OTkgNDgwIDExMS45OTkgNDgwSDQ4OS4wNThMMzU3LjA2NCAzNzYuNTQ1QzM0NS42NTUgMzgxLjMyOCAzMzMuMTQgMzg0IDMxOS45OTkgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CameraSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M630.81 469.102L575.999 426.143V144C575.999 117.5 554.499 96 527.999 96H439.999L427.624 63.125C420.624 44.375 402.749 32 382.749 32H257.249C237.249 32 219.249 44.375 212.249 63.125L199.999 96H154.779L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102ZM414.968 299.93L286.103 198.928C296.683 194.803 307.927 192 319.999 192C372.999 192 415.999 235 415.999 288C415.999 292.074 415.478 296.002 414.968 299.93ZM319.999 384C266.999 384 223.999 341 223.999 288C223.999 283.002 224.736 278.199 225.472 273.406L63.999 146.848V432C63.999 458.5 85.499 480 111.999 480H489.058L357.064 376.545C345.655 381.328 333.14 384 319.999 384Z" />
        </Icon>
    </>
}