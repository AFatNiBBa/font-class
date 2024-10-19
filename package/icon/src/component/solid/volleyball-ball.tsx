
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `volleyball-ball` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volleyball-ball?s=solid volleyball-ball}
 * @preview ![volleyball-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODAuOTMyIDI4MS4xMDlDMzg2Ljk3OSAyNDQuODk4IDM5Ni4zOTUgMTI1LjA5IDI4OS4yMDkgMTguNTYzQzI3OC4zMjYgMTcuMDU1IDI2Ny4yOTkgMTYgMjU2IDE2QzIzMC4wMjkgMTYgMjA1LjA3OCAyMC4yNSAxODEuNjUyIDI3Ljg3OUMyNjQuNTAyIDExNS44MTIgMjcyLjEyOSAyMTUuNTMxIDI3Mi4yMjEgMjQ3LjE1NkMyODcuNjkxIDI1Ni4wMDggMzI2LjcwOSAyNzUuMTcyIDM4MC45MzIgMjgxLjEwOVpNMjQwLjIxNyAyNDYuMzkxQzI0MC4xMzMgMjI4LjU3OCAyMzcuMjE5IDE4NS4xOTEgMjE1LjI1OCAxMzUuMjY2QzE4MC44MyAxNDguMTU2IDcyLjI2MiAxOTkuOTc3IDMzLjY5NyAzNDYuMjQ2QzQ3LjQ4OCAzODAuMTggNjguODgxIDQxMC4xMDkgOTUuNjc0IDQzNC4yMjdDMTMwLjQzMiAzMTguNjg4IDIxMi44NTcgMjYyLjI3MyAyNDAuMjE3IDI0Ni4zOTFaTTIwMC42MDkgMTA2LjY0OEMxODguMDM3IDg0Ljc5MyAxNzEuMzkzIDYyLjUzOSAxNDkuNjA3IDQxLjEwOUM3MC41MDggODAuMzUyIDE2IDE2MS43MTEgMTYgMjU2QzE2IDI2Ny40NDUgMTcuMDc4IDI3OC42MTcgMTguNjI3IDI4OS42MzdDNjcuOTggMTY5LjY1MiAxNjIuMzk1IDEyMS42NjQgMjAwLjYwOSAxMDYuNjQ4Wk0zNDUuMzU1IDMzLjM3MUM0MjQuNzg1IDEzNi4yMTEgNDE5LjE1IDI0Mi4xMDIgNDEzLjA1MSAyODIuNzI3QzQzOC4yMzggMjgyLjc1OCA0NjUuODA1IDI3OS40NjEgNDk1LjIyNyAyNzEuMzJDNDk1LjU0OSAyNjYuMjMgNDk2IDI2MS4xNzIgNDk2IDI1NkM0OTYgMTU1LjA2MiA0MzMuNjA5IDY4LjgzMiAzNDUuMzU1IDMzLjM3MVpNMjU1LjY0NSAyNzQuNDNDMjQwLjMxMSAyODMuMzc1IDIwNC4xMzUgMzA3LjU5NCAxNzEuODExIDM1MS42NTZDMjAwLjE4OSAzNzUuMDIzIDI5OS4zMjQgNDQzLjAxNiA0NDUuMDcyIDQwMy40NzdDNDY3LjEwOSAzNzUuMjY2IDQ4My4wODQgMzQyLjExNyA0OTAuNzUgMzA1LjgyOEM0NjMuNDA2IDMxMi4yOTcgNDM3LjUxIDMxNSA0MTMuNTk0IDMxNUMzMzMuOTEyIDMxNSAyNzYuMjQ2IDI4Ni4zNDQgMjU1LjY0NSAyNzQuNDNaTTE1NC4zODMgMzc4LjU5OEMxNDEuNzAzIDQwMC40NjkgMTMwLjcyMSA0MjYuMDg2IDEyMy4wNDkgNDU1Ljc2MkMxNjEuMTE3IDQ4MS4xNDggMjA2LjgxMSA0OTYgMjU2IDQ5NkMzMTEuOTQxIDQ5NiAzNjMuMjgxIDQ3Ni43MDMgNDA0LjA5MiA0NDQuNjEzQzM4Ny44MjIgNDQ2LjgwNSAzNzIuMDU3IDQ0OC4wMzEgMzU3LjA5NCA0NDguMDMxQzI1My4xNTggNDQ4LjAzMSAxODIuMTc2IDQwMC44MzIgMTU0LjM4MyAzNzguNTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function VolleyballBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M380.932 281.109C386.979 244.898 396.395 125.09 289.209 18.563C278.326 17.055 267.299 16 256 16C230.029 16 205.078 20.25 181.652 27.879C264.502 115.812 272.129 215.531 272.221 247.156C287.691 256.008 326.709 275.172 380.932 281.109ZM240.217 246.391C240.133 228.578 237.219 185.191 215.258 135.266C180.83 148.156 72.262 199.977 33.697 346.246C47.488 380.18 68.881 410.109 95.674 434.227C130.432 318.688 212.857 262.273 240.217 246.391ZM200.609 106.648C188.037 84.793 171.393 62.539 149.607 41.109C70.508 80.352 16 161.711 16 256C16 267.445 17.078 278.617 18.627 289.637C67.98 169.652 162.395 121.664 200.609 106.648ZM345.355 33.371C424.785 136.211 419.15 242.102 413.051 282.727C438.238 282.758 465.805 279.461 495.227 271.32C495.549 266.23 496 261.172 496 256C496 155.062 433.609 68.832 345.355 33.371ZM255.645 274.43C240.311 283.375 204.135 307.594 171.811 351.656C200.189 375.023 299.324 443.016 445.072 403.477C467.109 375.266 483.084 342.117 490.75 305.828C463.406 312.297 437.51 315 413.594 315C333.912 315 276.246 286.344 255.645 274.43ZM154.383 378.598C141.703 400.469 130.721 426.086 123.049 455.762C161.117 481.148 206.811 496 256 496C311.941 496 363.281 476.703 404.092 444.613C387.822 446.805 372.057 448.031 357.094 448.031C253.158 448.031 182.176 400.832 154.383 378.598Z" />
        </Icon>
    </>
}