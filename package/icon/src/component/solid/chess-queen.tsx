
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-queen` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen?s=solid chess-queen}
 * @preview ![chess-queen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuOTcgMTEyQzI4Ni44NDUgMTEyIDMxMS45NyA4Ni44NzUgMzExLjk3IDU2UzI4Ni44NDUgMCAyNTUuOTcgMFMxOTkuOTcgMjUuMTI1IDE5OS45NyA1NlMyMjUuMDk1IDExMiAyNTUuOTcgMTEyWk0zOTkuOTcgNDQ4SDExMS45N0M4NS40NjEgNDQ4IDYzLjk3IDQ2OS40OSA2My45NyA0OTZWNDk2QzYzLjk3IDUwNC44MzcgNzEuMTM0IDUxMiA3OS45NyA1MTJINDMxLjk3QzQ0MC44MDcgNTEyIDQ0Ny45NyA1MDQuODM3IDQ0Ny45NyA0OTZWNDk2QzQ0Ny45NyA0NjkuNDkgNDI2LjQ4IDQ0OCAzOTkuOTcgNDQ4Wk01MDQuODQ1IDE4NC4xMjVMNDc2LjM0NSAxNjguMjVDNDY4Ljg0NSAxNjMuMjUgNDU5LjQ3IDE2NS43NSA0NTQuMDk1IDE3Mi44NzVDNDQzLjA5NSAxODcuNSA0MjQuNzIgMTk0LjYyNSA0MDYuODQ1IDE5MS4xMjVDMzgzLjcyIDE4Ni44NzUgMzY3Ljk3IDE2NC44NzUgMzY3Ljk3IDE0MS4zNzVDMzY3Ljk3IDEzNCAzNjEuOTcgMTI4IDM1NC41OTUgMTI4SDMxNS44NDVDMzA5Ljg0NSAxMjggMzA0LjIyIDEzMiAzMDIuOTcgMTM3Ljg3NUMyOTguMjIgMTYwLjEyNSAyNzguNzIgMTc2IDI1NS45NyAxNzZTMjEzLjcyIDE2MC4xMjUgMjA4Ljk3IDEzNy44NzVDMjA3LjcyIDEzMiAyMDIuMjIgMTI4IDE5Ni4wOTUgMTI4SDE1Ny4zNDVDMTQ5Ljk3IDEyOCAxNDMuOTcgMTM0IDE0My45NyAxNDEuMzc1QzE0My45NyAxNjcuMTI1IDEyNC45NyAxOTAuMTI1IDk5LjM0NSAxOTEuODc1QzgzLjA5NSAxOTMgNjcuNDcgMTg1Ljc1IDU3LjcyIDE3Mi43NUM1Mi40NyAxNjUuNjI1IDQyLjk3IDE2My4yNSAzNS43MiAxNjguMjVMNy4wOTUgMTg0LjI1QzAuMzQ1IDE4OC42MjUgLTEuOTA1IDE5Ny41IDEuNzIgMjA0LjYyNUwxMDQuMjIgNDE2SDQwNy43Mkw1MTAuMjIgMjA0LjYyNUM1MTMuODQ1IDE5Ny4zNzUgNTExLjU5NSAxODguNjI1IDUwNC44NDUgMTg0LjEyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChessQueen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M255.97 112C286.845 112 311.97 86.875 311.97 56S286.845 0 255.97 0S199.97 25.125 199.97 56S225.095 112 255.97 112ZM399.97 448H111.97C85.461 448 63.97 469.49 63.97 496V496C63.97 504.837 71.134 512 79.97 512H431.97C440.807 512 447.97 504.837 447.97 496V496C447.97 469.49 426.48 448 399.97 448ZM504.845 184.125L476.345 168.25C468.845 163.25 459.47 165.75 454.095 172.875C443.095 187.5 424.72 194.625 406.845 191.125C383.72 186.875 367.97 164.875 367.97 141.375C367.97 134 361.97 128 354.595 128H315.845C309.845 128 304.22 132 302.97 137.875C298.22 160.125 278.72 176 255.97 176S213.72 160.125 208.97 137.875C207.72 132 202.22 128 196.095 128H157.345C149.97 128 143.97 134 143.97 141.375C143.97 167.125 124.97 190.125 99.345 191.875C83.095 193 67.47 185.75 57.72 172.75C52.47 165.625 42.97 163.25 35.72 168.25L7.095 184.25C0.345 188.625 -1.905 197.5 1.72 204.625L104.22 416H407.72L510.22 204.625C513.845 197.375 511.595 188.625 504.845 184.125Z" />
        </Icon>
    </>
}