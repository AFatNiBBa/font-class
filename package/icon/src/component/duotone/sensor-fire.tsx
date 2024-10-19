
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-fire` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-fire?s=duotone sensor-fire}
 * @preview ![sensor-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OC44NzUgMzE1LjM3NUMyODguODc1IDI1NC4zNzUgMzQyLjYyNSAxNjIgNDE5LjUgOTAuODc1QzQyNS4zNzUgODUuMzc1IDQzMy4yNSA4Mi4yNSA0NDEuMzc1IDgyLjI1QzQ0My42MjUgODIuMjUgNDQ1Ljc1IDgzIDQ0OCA4My41QzQ0MiA1My41IDQxNS42MjUgMzIgMzg1LjEyNSAzMkg2NC4xMjVDMjguNzUgMzIgMCA2MC42MjUgMCA5NlY0MTZDMCA0NTEuMzc1IDI4Ljc1IDQ4MCA2NC4xMjUgNDgwSDM3Ni41QzMyMS42MjUgNDQzLjI1IDI4OC43NSAzODEuNSAyODguODc1IDMxNS4zNzVaTTk2LjI1IDI3MkM5Ni4yNSAyODAuODc1IDg5LjEyNSAyODggODAuMjUgMjg4UzY0LjEyNSAyODAuODc1IDY0LjEyNSAyNzJWMTEyQzY0LjEyNSAxMDMuMTI1IDcxLjM3NSA5NiA4MC4yNSA5NlM5Ni4yNSAxMDMuMTI1IDk2LjI1IDExMlYyNzJaTTE2MC41IDI3MkMxNjAuNSAyODAuODc1IDE1My4yNSAyODggMTQ0LjM3NSAyODhTMTI4LjM3NSAyODAuODc1IDEyOC4zNzUgMjcyVjExMkMxMjguMzc1IDEwMy4xMjUgMTM1LjUgOTYgMTQ0LjM3NSA5NlMxNjAuNSAxMDMuMTI1IDE2MC41IDExMlYyNzJaTTIyNC42MjUgMjcyQzIyNC42MjUgMjgwLjg3NSAyMTcuNSAyODggMjA4LjYyNSAyODhTMTkyLjUgMjgwLjg3NSAxOTIuNSAyNzJWMTEyQzE5Mi41IDEwMy4xMjUgMTk5Ljc1IDk2IDIwOC42MjUgOTZTMjI0LjYyNSAxMDMuMTI1IDIyNC42MjUgMTEyVjI3MlpNNTY1LjEyNSAyODIuODc1QzU2Mi42MjUgMjc4IDU1OS44NzUgMjczIDU1Ni43NSAyNjcuODc1TDUxMi43NSAzMThDNTEyLjc1IDMxOCA0NDMuNzUgMjMwIDQzOC42MjUgMjI0QzQwMi4yNSAyNjcuNjI1IDM4NCAyOTMuMTI1IDM4NCAzMjIuMTI1QzM4NCAzODAuMjUgNDI4IDQxNiA0ODIuMTI1IDQxNkM1MDIuODc1IDQxNiA1MjMuMTI1IDQwOS43NSA1NDAgMzk3Ljg3NUM1NzcgMzcyIDU4NS42MjUgMzIyIDU2NS4xMjUgMjgyLjg3NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNODAuMTI1IDk2QzcxLjI1IDk2IDY0IDEwMy4xMjUgNjQgMTEyVjI3MkM2NCAyODAuODc1IDcxLjI1IDI4OCA4MC4xMjUgMjg4Uzk2LjEyNSAyODAuODc1IDk2LjEyNSAyNzJWMTEyQzk2LjEyNSAxMDMuMTI1IDg5IDk2IDgwLjEyNSA5NlpNNTUxIDE1MC44NzVDNTM2LjYyNSAxNjQuMjUgNTIzLjI1IDE3OC41IDUxMC44NzUgMTkzLjc1QzQ4OS44NzUgMTY1IDQ2NiAxMzguMzc1IDQzOS44NzUgMTE0LjI1QzM2OS42MjUgMTc5LjM3NSAzMTkuODc1IDI2NC4yNSAzMTkuODc1IDMxNS4zNzVDMzE5Ljg3NSA0MDYuMzc1IDM5MS41IDQ4MCA0NzkuODc1IDQ4MFM2MzkuODc1IDQwNi4zNzUgNjM5Ljg3NSAzMTUuMzc1QzYzOS44NzUgMjc3LjM3NSA2MDIuNzUgMTk4Ljg3NSA1NTEgMTUwLjg3NVpNNTM5Ljg3NSAzOTcuODc1QzUyMyA0MDkuNzUgNTAyLjc1IDQxNiA0ODIgNDE2QzQyNy44NzUgNDE2IDM4My44NzUgMzgwLjI1IDM4My44NzUgMzIyLjEyNUMzODMuODc1IDI5My4xMjUgNDAyLjEyNSAyNjcuNjI1IDQzOC41IDIyNEM0NDMuNjI1IDIzMCA1MTIuNjI1IDMxOCA1MTIuNjI1IDMxOEw1NTYuNjI1IDI2Ny44NzVDNTU5Ljc1IDI3MyA1NjIuNSAyNzggNTY1IDI4Mi44NzVDNTg1LjUgMzIyIDU3Ni44NzUgMzcyIDUzOS44NzUgMzk3Ljg3NVpNMTQ0LjI1IDk2QzEzNS4zNzUgOTYgMTI4LjI1IDEwMy4xMjUgMTI4LjI1IDExMlYyNzJDMTI4LjI1IDI4MC44NzUgMTM1LjM3NSAyODggMTQ0LjI1IDI4OFMxNjAuMzc1IDI4MC44NzUgMTYwLjM3NSAyNzJWMTEyQzE2MC4zNzUgMTAzLjEyNSAxNTMuMTI1IDk2IDE0NC4yNSA5NlpNMjA4LjUgOTZDMTk5LjYyNSA5NiAxOTIuMzc1IDEwMy4xMjUgMTkyLjM3NSAxMTJWMjcyQzE5Mi4zNzUgMjgwLjg3NSAxOTkuNjI1IDI4OCAyMDguNSAyODhTMjI0LjUgMjgwLjg3NSAyMjQuNSAyNzJWMTEyQzIyNC41IDEwMy4xMjUgMjE3LjM3NSA5NiAyMDguNSA5NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SensorFire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M288.875 315.375C288.875 254.375 342.625 162 419.5 90.875C425.375 85.375 433.25 82.25 441.375 82.25C443.625 82.25 445.75 83 448 83.5C442 53.5 415.625 32 385.125 32H64.125C28.75 32 0 60.625 0 96V416C0 451.375 28.75 480 64.125 480H376.5C321.625 443.25 288.75 381.5 288.875 315.375ZM96.25 272C96.25 280.875 89.125 288 80.25 288S64.125 280.875 64.125 272V112C64.125 103.125 71.375 96 80.25 96S96.25 103.125 96.25 112V272ZM160.5 272C160.5 280.875 153.25 288 144.375 288S128.375 280.875 128.375 272V112C128.375 103.125 135.5 96 144.375 96S160.5 103.125 160.5 112V272ZM224.625 272C224.625 280.875 217.5 288 208.625 288S192.5 280.875 192.5 272V112C192.5 103.125 199.75 96 208.625 96S224.625 103.125 224.625 112V272ZM565.125 282.875C562.625 278 559.875 273 556.75 267.875L512.75 318C512.75 318 443.75 230 438.625 224C402.25 267.625 384 293.125 384 322.125C384 380.25 428 416 482.125 416C502.875 416 523.125 409.75 540 397.875C577 372 585.625 322 565.125 282.875Z" />
            <path d="M80.125 96C71.25 96 64 103.125 64 112V272C64 280.875 71.25 288 80.125 288S96.125 280.875 96.125 272V112C96.125 103.125 89 96 80.125 96ZM551 150.875C536.625 164.25 523.25 178.5 510.875 193.75C489.875 165 466 138.375 439.875 114.25C369.625 179.375 319.875 264.25 319.875 315.375C319.875 406.375 391.5 480 479.875 480S639.875 406.375 639.875 315.375C639.875 277.375 602.75 198.875 551 150.875ZM539.875 397.875C523 409.75 502.75 416 482 416C427.875 416 383.875 380.25 383.875 322.125C383.875 293.125 402.125 267.625 438.5 224C443.625 230 512.625 318 512.625 318L556.625 267.875C559.75 273 562.5 278 565 282.875C585.5 322 576.875 372 539.875 397.875ZM144.25 96C135.375 96 128.25 103.125 128.25 112V272C128.25 280.875 135.375 288 144.25 288S160.375 280.875 160.375 272V112C160.375 103.125 153.125 96 144.25 96ZM208.5 96C199.625 96 192.375 103.125 192.375 112V272C192.375 280.875 199.625 288 208.5 288S224.5 280.875 224.5 272V112C224.5 103.125 217.375 96 208.5 96Z" />
        </Icon>
    </>
}