
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scribble` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scribble?s=duotone scribble}
 * @preview ![scribble](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5My40OSA0ODYuOTlMNDYxLjg5NyA1MDEuNjlDNDQ4LjAwNiA1MDguNjQxIDQzMy4xNzggNTEyIDQxOC40OTEgNTEyQzM4OC41MjMgNTEyIDM1OS4xMTcgNDk4LjAwMyAzMzkuMjI2IDQ3MS45NzdDMzEwLjE0OCA0MzMuOTU0IDMxMi41MDggMzgzLjkzMyAzNDUuMDcgMzQ3LjQ4OEw0NDEuMjU2IDIzNS4wNzRDNDQ5LjkxMyAyMjUuODI2IDQ0OS44ODEgMjEzLjE1NyA0NDIuMjI1IDIwNS4wOTZDNDM4LjI3MiAyMDAuOTI1IDQzMi45NDQgMTk4LjU5NyA0MjcuMTk0IDE5OC41MzVDNDIyLjQ3NSAxOTguMTkxIDQxNi4wNjkgMjAwLjY3NSA0MTIuMDIyIDIwNC43MzZMMTc3LjIxMiA0NTQuMjE1QzE2MC4yOSA0NzEuMTk2IDEzOC4yNzUgNDgxLjAzOCAxMTUuNTQxIDQ3OS43MUM5Mi40NjMgNDc5LjQxMyA3MS4wMjYgNDcwLjAwOSA1NS4xNTEgNDUzLjI2MkMyMy44MjMgNDIwLjE3NiAyNC4xOTggMzY4LjcwMiA1Ni4wNDIgMzM2LjA1M0wyNjMuNjMzIDEyMy4yNTRDMjc1LjU3MSAxMDkuOTQ0IDI3NC45OTIgODguMTM2IDI2MS40MTQgNzQuNTkyQzI1NC4zNjggNjcuNTQ3IDI0NC44OTkgNjMuNjQxIDIzNS4wNzEgNjQuMDE2QzIyNS4xMTggNjQuMjM1IDIxNS45MzEgNjguNDA2IDIwOS4yMTIgNzUuNzMyTDU0LjQzMiAyMjcuOTY2QzQxLjc5MiAyNDAuMzM4IDIxLjU1OCAyNDAuMTgyIDkuMTgzIDIyNy41OTFDLTMuMjA4IDIxNC45ODQgLTMuMDM2IDE5NC43MzkgOS41NTggMTgyLjM1MUwxNjMuMTgxIDMxLjMyQzE4MC42NSAxMi4xODMgMjA2LjA4NyAwLjY1NCAyMzMuNjQ5IDAuMDQ1QzI2MC45MyAtMC43ODMgMjg3LjEzMyA5LjgwOSAzMDYuNjY0IDI5LjMyQzM0NC4zMDQgNjYuOTM3IDM0NS45MTQgMTI3LjQwOSAzMTAuMzM2IDE2Ni45NzlMMTAxLjg1NCAzODAuNzMxQzk0LjEwNCAzODguNjgyIDkzLjk5NCA0MDEuMjExIDEwMS42MzUgNDA5LjI1NkMxMDUuNTEgNDEzLjM2NSAxMTAuNzQ0IDQxNS42NjEgMTE2LjM4NSA0MTUuNzM5QzEyMS42NSA0MTUuNDQyIDEyNy4yOTEgNDEzLjY2MSAxMzEuMjYgNDA5LjY3OEwzNjYuMDIzIDE2MC4yNjFDMzgyLjk0NCAxNDMuMjAzIDQwNS4wMjIgMTM0LjUxNyA0MjcuOTI4IDEzNC41NDhDNDUxLjEzMSAxMzQuODE0IDQ3Mi42OTQgMTQ0LjIxOCA0ODguNjYyIDE2MS4wNDNDNTE5LjY2MiAxOTMuNzIzIDUxOS43NTYgMjQ1LjAwOSA0ODguODY1IDI3Ny43OTlMMzkzLjI0MSAzODkuNjA0QzM3NS40NzYgNDA5LjUwNiAzODUuMTE2IDQyNi42NTkgMzkwLjA2OSA0MzMuMTI2QzM5OS4xMzIgNDQ0Ljk5OCA0MTYuMjcyIDQ1Mi45NSA0MzQuMDg1IDQ0NC4wNjFMNDY2LjQ5IDQyOC45NzFDNDgyLjQ3NSA0MjEuNTUgNTAxLjUzNyA0MjguNDU1IDUwOS4wMDYgNDQ0LjQ4M0M1MTYuNDU5IDQ2MC40OTUgNTA5LjUyMSA0NzkuNTM4IDQ5My40OSA0ODYuOTlaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Scribble(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M493.49 486.99L461.897 501.69C448.006 508.641 433.178 512 418.491 512C388.523 512 359.117 498.003 339.226 471.977C310.148 433.954 312.508 383.933 345.07 347.488L441.256 235.074C449.913 225.826 449.881 213.157 442.225 205.096C438.272 200.925 432.944 198.597 427.194 198.535C422.475 198.191 416.069 200.675 412.022 204.736L177.212 454.215C160.29 471.196 138.275 481.038 115.541 479.71C92.463 479.413 71.026 470.009 55.151 453.262C23.823 420.176 24.198 368.702 56.042 336.053L263.633 123.254C275.571 109.944 274.992 88.136 261.414 74.592C254.368 67.547 244.899 63.641 235.071 64.016C225.118 64.235 215.931 68.406 209.212 75.732L54.432 227.966C41.792 240.338 21.558 240.182 9.183 227.591C-3.208 214.984 -3.036 194.739 9.558 182.351L163.181 31.32C180.65 12.183 206.087 0.654 233.649 0.045C260.93 -0.783 287.133 9.809 306.664 29.32C344.304 66.937 345.914 127.409 310.336 166.979L101.854 380.731C94.104 388.682 93.994 401.211 101.635 409.256C105.51 413.365 110.744 415.661 116.385 415.739C121.65 415.442 127.291 413.661 131.26 409.678L366.023 160.261C382.944 143.203 405.022 134.517 427.928 134.548C451.131 134.814 472.694 144.218 488.662 161.043C519.662 193.723 519.756 245.009 488.865 277.799L393.241 389.604C375.476 409.506 385.116 426.659 390.069 433.126C399.132 444.998 416.272 452.95 434.085 444.061L466.49 428.971C482.475 421.55 501.537 428.455 509.006 444.483C516.459 460.495 509.521 479.538 493.49 486.99Z" />
        </Icon>
    </>
}