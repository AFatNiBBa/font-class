
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `power-off` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=solid power-off}
 * @preview ![power-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuOTk5IDI4OEgyNTUuOTk5QzI3My42NzIgMjg4IDI4Ny45OTkgMjczLjY3MyAyODcuOTk5IDI1NlYzMkMyODcuOTk5IDE0LjMyNyAyNzMuNjcyIDAgMjU1Ljk5OSAwSDI1NS45OTlDMjM4LjMyNiAwIDIyMy45OTkgMTQuMzI3IDIyMy45OTkgMzJWMjU2QzIyMy45OTkgMjczLjY3MyAyMzguMzI2IDI4OCAyNTUuOTk5IDI4OFpNNDAxLjc5NiA2NS4zMjhDMzg2LjM5NyA1My41NDUgMzYzLjg4NCA1OC44MjQgMzU0LjU2MyA3NS44MjRMMzQ2Ljc1NSA5MC4wNjRDMzM5LjIxNiAxMDMuODE0IDM0Mi45NjggMTIwLjc2IDM1NS4yNjIgMTMwLjQ5NEMzOTMuMjU3IDE2MC41NyA0MTUuOTk5IDIwNi42MjUgNDE1Ljk5OSAyNTZDNDE1Ljk5OSAzNTguMTY4IDMxOS43MjMgNDM4LjI4OSAyMTMuMTM1IDQxMC4zOTZDMTY1LjE5IDM5Ny44NSAxMjUuMTA2IDM2MS45NjEgMTA3LjI3NCAzMTUuNzIxQzgwLjM1IDI0NS44OTEgMTAzLjU2NSAxNzIuNzE5IDE1Ni41NDIgMTMwLjY0NkMxNjguODk3IDEyMC44MzQgMTcyLjgxMSAxMDMuODY5IDE2NS4yMjUgOTAuMDMzTDE1Ny40NDggNzUuODQ4QzE0OC4xMDQgNTguODA3IDEyNS41MzggNTMuNTgyIDExMC4xMSA2NS40QzM3LjYxMiAxMjAuOTM4IDAuOCAyMTQuNzQyIDIxLjkxNSAzMDkuMzIyQzQ0LjY2NyA0MTEuMjM4IDEzNC45MTcgNDg4LjI0MiAyMzkuMDk0IDQ5NS40MTZDMzc5LjA1MyA1MDUuMDU1IDQ5NS45OTkgMzkzLjkzNiA0OTUuOTk5IDI1NkM0OTUuOTk5IDE4MC41OTIgNDYwLjYzOSAxMTAuMzU5IDQwMS43OTYgNjUuMzI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PowerOff(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M255.999 288H255.999C273.672 288 287.999 273.673 287.999 256V32C287.999 14.327 273.672 0 255.999 0H255.999C238.326 0 223.999 14.327 223.999 32V256C223.999 273.673 238.326 288 255.999 288ZM401.796 65.328C386.397 53.545 363.884 58.824 354.563 75.824L346.755 90.064C339.216 103.814 342.968 120.76 355.262 130.494C393.257 160.57 415.999 206.625 415.999 256C415.999 358.168 319.723 438.289 213.135 410.396C165.19 397.85 125.106 361.961 107.274 315.721C80.35 245.891 103.565 172.719 156.542 130.646C168.897 120.834 172.811 103.869 165.225 90.033L157.448 75.848C148.104 58.807 125.538 53.582 110.11 65.4C37.612 120.938 0.8 214.742 21.915 309.322C44.667 411.238 134.917 488.242 239.094 495.416C379.053 505.055 495.999 393.936 495.999 256C495.999 180.592 460.639 110.359 401.796 65.328Z" />
        </Icon>
    </>
}