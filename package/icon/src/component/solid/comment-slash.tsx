
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-slash?s=solid comment-slash}
 * @preview ![comment-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCAyNDBDNjQgMjg5LjU5NCA4NS40MDYgMzM1IDEyMSAzNzAuNzAzQzEwOC41IDQyMS4wOTQgNjYuNjg4IDQ2NiA2Ni4xODggNDY2LjVDNjQgNDY4Ljc5NyA2My40MDYgNDcyLjIwMyA2NC42ODggNDc1LjIwM0M2NiA0NzguMjAzIDY4LjgxMiA0ODAgNzIgNDgwQzEzOC4zMTIgNDgwIDE4OCA0NDguMjAzIDIxMi41OTQgNDI4LjU5NEMyNDUuMzEyIDQ0MC45MDYgMjgxLjU5NCA0NDggMzIwIDQ0OEMzNTcuMzkxIDQ0OCAzOTIuODAxIDQ0MS4zMzggNDI0LjgyIDQyOS42MzdMODIuOTI2IDE2MS42NjZDNzAuODA5IDE4NS44NTUgNjQgMjEyLjI2NiA2NCAyNDBaTTYzMC44MTEgNDY5LjEwMkw1MTIuNjQ0IDM3Ni40ODRDNTUxLjk1NCAzMzkuOTY3IDU3Ni4wMDEgMjkyLjM1NSA1NzYuMDAxIDI0MC4wMDRDNTc2LjAwMSAxMjUuMSA0NjEuNDA4IDMyLjAwNyAzMjAuMDAyIDMyLjAwN0MyNTIuMjY0IDMyLjAwNyAxOTAuOTA3IDUzLjU0NCAxNDUuMTU5IDg4LjQ2TDM4LjgxNCA1LjEwOUMyOC4yMTEgLTMuMTYyIDEzLjE3NCAtMS4wOTkgNS4xMjYgOS4xODdDLTMuMDYxIDE5LjYyNSAtMS4yNDkgMzQuNzE4IDkuMTg5IDQyLjg5TDYwMS4xODYgNTA2Ljg4M0M2MTEuNjg2IDUxNS4wODYgNjI2Ljc0OSA1MTMuMjExIDYzNC44NzQgNTAyLjgwNUM2NDMuMDYxIDQ5Mi4zNjcgNjQxLjI0OSA0NzcuMjc0IDYzMC44MTEgNDY5LjEwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M64 240C64 289.594 85.406 335 121 370.703C108.5 421.094 66.688 466 66.188 466.5C64 468.797 63.406 472.203 64.688 475.203C66 478.203 68.812 480 72 480C138.312 480 188 448.203 212.594 428.594C245.312 440.906 281.594 448 320 448C357.391 448 392.801 441.338 424.82 429.637L82.926 161.666C70.809 185.855 64 212.266 64 240ZM630.811 469.102L512.644 376.484C551.954 339.967 576.001 292.355 576.001 240.004C576.001 125.1 461.408 32.007 320.002 32.007C252.264 32.007 190.907 53.544 145.159 88.46L38.814 5.109C28.211 -3.162 13.174 -1.099 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102Z" />
        </Icon>
    </>
}