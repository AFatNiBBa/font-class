
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `drone-front` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/drone-front?s=duotone drone-front}
 * @preview ![drone-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAxMzYuMTA5QzI4OCAxMjIuODY1IDI3Ny4yNSAxMTIuMTE5IDI2NCAxMTIuMTE5SDI0QzEwLjc1IDExMi4xMTkgMCAxMjIuODY1IDAgMTM2LjEwOVMxMC43NSAxNjAuMSAyNCAxNjAuMUgyNjRDMjc3LjI1IDE2MC4xIDI4OCAxNDkuMzU0IDI4OCAxMzYuMTA5Wk02MTYuMzc1IDExMi4yNDRMMzc1LjYyNSAxMTIuOTkzQzM2Mi43NSAxMTMuMjQzIDM1Mi41IDEyMy43MzkgMzUyLjYyNSAxMzYuNjA5QzM1Mi42MjUgMTQ5LjM1NCAzNjIuODc1IDE1OS44NSAzNzUuNzUgMTU5Ljk3NUw2MTYuNSAxNTkuMjI1QzYyOS41IDE1OS4yMjUgNjQwIDE0OC42MDQgNjQwIDEzNS42MUM2NDAgMTIyLjYxNSA2MjkuMzc1IDExMi4xMTkgNjE2LjM3NSAxMTIuMjQ0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00OTYgOTZDNDg1Ljc1IDk2LjEyNSA0NzYuNjI1IDEwMi43NDYgNDczLjYyNSAxMTIuNjE3TDUxOC42MjUgMTEyLjQ5MkM1MTUuNSAxMDIuNjIxIDUwNi4zNzUgOTYgNDk2IDk2Wk0xNDQgOTYuMTI1QzEzMy44NzUgOTYuMTI1IDEyNC44NzUgMTAyLjQ5NiAxMjEuNjI1IDExMi4xMTlIMTY2LjM3NUMxNjMuMTI1IDEwMi40OTYgMTU0LjEyNSA5Ni4xMjUgMTQ0IDk2LjEyNVpNNDcyIDE2MFYyMzcuNjkzTDM3NS4xMjUgMjA4LjcwNUMzMzkuMTI1IDE5Ny44MzQgMzAwLjc1IDE5Ny44MzQgMjY0Ljg3NSAyMDguNzA1TDE2OCAyMzcuNjkzVjE2MEgxMjBWMjU2LjA2MkMxMjAgMjczLjgwNSAxMzQuMzc1IDI4OC4wNDkgMTUyIDI4OC4wNDlIMTk3LjM3NUMxNjcuMjUgMzE3LjQxMiAxNDguMzc1IDM1Ni4zOTggMTQ0LjEyNSAzOTguMjU2QzE0My42MjUgNDAyLjc1NCAxNDUuMTI1IDQwNy4yNTIgMTQ4LjEyNSA0MTAuNjI3QzE1MS4yNSA0MTQuMDAxIDE1NS41IDQxNiAxNjAuMTI1IDQxNkgxNzYuMzc1QzE4NC42MjUgNDE2IDE5MS4xMjUgNDA5LjM3NyAxOTIgNDAxLjEzMUMxOTYuMTI1IDM2NC4zOTUgMjE1LjYyNSAzMzEuMjgzIDI0NS42MjUgMzA5Ljc5MUwyNzguNjI1IDM0Mi42NTJDMjg0LjYyNSAzNDguNjUgMjkyLjc1IDM1Mi4wMjUgMzAxLjI1IDM1Mi4wMjVIMzM4Ljc1QzM0Ny4yNSAzNTIuMDI1IDM1NS4zNzUgMzQ4LjY1IDM2MS4zNzUgMzQyLjY1MkwzOTQuMjUgMzA5Ljc5MUM0MjQuMzc1IDMzMS4yODMgNDQzLjg3NSAzNjQuMzk1IDQ0OCA0MDEuMTMxQzQ0OC44NzUgNDA5LjM3NyA0NTUuMzc1IDQxNiA0NjMuNjI1IDQxNkg0NzkuODc1QzQ4NC41IDQxNiA0ODguNzUgNDE0LjAwMSA0OTEuODc1IDQxMC42MjdDNDk0Ljg3NSA0MDcuMjUyIDQ5Ni4zNzUgNDAyLjc1NCA0OTUuODc1IDM5OC4yNTZDNDkxLjYyNSAzNTYuMzk4IDQ3Mi43NSAzMTcuNDEyIDQ0Mi42MjUgMjg4LjA0OUg0ODhDNTA1LjYyNSAyODguMDQ5IDUyMCAyNzMuODA1IDUyMCAyNTYuMDYyVjE2MEg0NzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DroneFront(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M288 136.109C288 122.865 277.25 112.119 264 112.119H24C10.75 112.119 0 122.865 0 136.109S10.75 160.1 24 160.1H264C277.25 160.1 288 149.354 288 136.109ZM616.375 112.244L375.625 112.993C362.75 113.243 352.5 123.739 352.625 136.609C352.625 149.354 362.875 159.85 375.75 159.975L616.5 159.225C629.5 159.225 640 148.604 640 135.61C640 122.615 629.375 112.119 616.375 112.244Z" />
            <path d="M496 96C485.75 96.125 476.625 102.746 473.625 112.617L518.625 112.492C515.5 102.621 506.375 96 496 96ZM144 96.125C133.875 96.125 124.875 102.496 121.625 112.119H166.375C163.125 102.496 154.125 96.125 144 96.125ZM472 160V237.693L375.125 208.705C339.125 197.834 300.75 197.834 264.875 208.705L168 237.693V160H120V256.062C120 273.805 134.375 288.049 152 288.049H197.375C167.25 317.412 148.375 356.398 144.125 398.256C143.625 402.754 145.125 407.252 148.125 410.627C151.25 414.001 155.5 416 160.125 416H176.375C184.625 416 191.125 409.377 192 401.131C196.125 364.395 215.625 331.283 245.625 309.791L278.625 342.652C284.625 348.65 292.75 352.025 301.25 352.025H338.75C347.25 352.025 355.375 348.65 361.375 342.652L394.25 309.791C424.375 331.283 443.875 364.395 448 401.131C448.875 409.377 455.375 416 463.625 416H479.875C484.5 416 488.75 414.001 491.875 410.627C494.875 407.252 496.375 402.754 495.875 398.256C491.625 356.398 472.75 317.412 442.625 288.049H488C505.625 288.049 520 273.805 520 256.062V160H472Z" />
        </Icon>
    </>
}