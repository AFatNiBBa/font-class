
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad-modern` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=regular gamepad-modern}
 * @preview ![gamepad-modern](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzguNTc0IDMzOC4zNzVMNjExLjA3NCAxNTcuMTI1QzYwMy4zMjQgMTA2IDU2NS40NSA2NSA1MTUuNTc1IDUzLjc1QzM4Ni44MjYgMjQuNzUgMjUzLjA3NiAyNC43NSAxMjQuMzI3IDUzLjc1Qzc0LjQ1MiA2NSAzNi41NzggMTA2IDI4LjgyOCAxNTcuMTI1TDEuNDUzIDMzOC4zNzVDLTkuOTIyIDQxMi44NzUgNDYuOTUzIDQ4MCAxMjEuMjAyIDQ4MEgxMjEuNDUyQzE2Ny41NzcgNDc5Ljg3NSAyMDkuNTc3IDQ1My41IDIyOS44MjYgNDEyTDI0My41NzYgMzg0SDM5Ni4zMjZMNDEwLjA3NSA0MTJDNDMwLjMyNSA0NTMuNSA0NzIuMzI1IDQ3OS44NzUgNTE4LjQ1IDQ4MEg1MTguN0M1OTMuMDc0IDQ4MCA2NDkuODI0IDQxMi44NzUgNjM4LjU3NCAzMzguMzc1Wk01NzMuNyA0MDYuNjI1QzU1OS45NSA0MjIuODc1IDUzOS43IDQzMi4xMjUgNTE4LjQ1IDQzMkM0OTAuNyA0MzIgNDY1LjcgNDE2LjI1IDQ1My4yIDM5MC44NzVMNDM0Ljg4NCAzNTMuODJDNDI5LjQ5IDM0Mi45MDcgNDE4LjM3MSAzMzYgNDA2LjE5NyAzMzZIMjMzLjcwNUMyMjEuNTMxIDMzNiAyMTAuNDEyIDM0Mi45MDcgMjA1LjAxOCAzNTMuODJMMTg2LjcwMiAzOTAuODc1QzE3NC4yMDIgNDE2LjI1IDE0OS4yMDIgNDMyIDEyMS4yMDIgNDMyQzk5Ljk1MiA0MzIuMTI1IDc5LjgyNyA0MjIuNzUgNjYuMjAyIDQwNi42MjVDNTEuODI3IDM4OS43NSA0NS40NTMgMzY3LjUgNDguODI4IDM0NS42MjVMNzYuMzI3IDE2NC4zNzVDODEuMjAyIDEzMi41IDEwNC4wNzcgMTA3LjUgMTM0LjgyNyAxMDAuNjI1QzI1Ni43MDEgNzMuMTI1IDM4My4yMDEgNzMuMTI1IDUwNS4wNzUgMTAwLjYyNUM1MzUuODI1IDEwNy41IDU1OC43IDEzMi41IDU2My41NzUgMTY0LjM3NUw1OTEuMDc0IDM0NS42MjVDNTk0LjQ0OSAzNjcuNSA1ODguMDc0IDM4OS43NSA1NzMuNyA0MDYuNjI1Wk0zOTkuOTk3IDI0MEMzODIuMzcyIDI0MCAzNjcuOTk3IDI1NC4zNzUgMzY3Ljk5NyAyNzJTMzgyLjM3MiAzMDQgMzk5Ljk5NyAzMDRTNDMxLjk5NyAyODkuNjI1IDQzMS45OTcgMjcyUzQxNy42MjIgMjQwIDM5OS45OTcgMjQwWk0yNDcuOTUxIDIwMEgyMTUuOTUyVjE2OEMyMTUuOTUyIDE1NC43OTkgMjA1LjE1MSAxNDQgMTkxLjk1MiAxNDRDMTc4Ljc1MSAxNDQgMTY3Ljk1MiAxNTQuNzk5IDE2Ny45NTIgMTY4VjIwMEgxMzUuOTUyQzEyMi43NTEgMjAwIDExMS45NTIgMjEwLjc5OSAxMTEuOTUyIDIyNEMxMTEuOTUyIDIzNy4xOTkgMTIyLjc1MSAyNDggMTM1Ljk1MiAyNDhIMTY3Ljk1MlYyODBDMTY3Ljk1MiAyOTMuMTk5IDE3OC43NTEgMzA0IDE5MS45NTIgMzA0QzIwNS4xNTEgMzA0IDIxNS45NTIgMjkzLjE5OSAyMTUuOTUyIDI4MFYyNDhIMjQ3Ljk1MUMyNjEuMTUxIDI0OCAyNzEuOTUxIDIzNy4xOTkgMjcxLjk1MSAyMjRDMjcxLjk1MSAyMTAuNzk5IDI2MS4xNTEgMjAwIDI0Ny45NTEgMjAwWk00NjMuOTk3IDE0NEM0NDYuMzcyIDE0NCA0MzEuOTk3IDE1OC4zNzUgNDMxLjk5NyAxNzZTNDQ2LjM3MiAyMDggNDYzLjk5NyAyMDhDNDgxLjYyMiAyMDggNDk1Ljk5NyAxOTMuNjI1IDQ5NS45OTcgMTc2UzQ4MS42MjIgMTQ0IDQ2My45OTcgMTQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GamepadModern(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M638.574 338.375L611.074 157.125C603.324 106 565.45 65 515.575 53.75C386.826 24.75 253.076 24.75 124.327 53.75C74.452 65 36.578 106 28.828 157.125L1.453 338.375C-9.922 412.875 46.953 480 121.202 480H121.452C167.577 479.875 209.577 453.5 229.826 412L243.576 384H396.326L410.075 412C430.325 453.5 472.325 479.875 518.45 480H518.7C593.074 480 649.824 412.875 638.574 338.375ZM573.7 406.625C559.95 422.875 539.7 432.125 518.45 432C490.7 432 465.7 416.25 453.2 390.875L434.884 353.82C429.49 342.907 418.371 336 406.197 336H233.705C221.531 336 210.412 342.907 205.018 353.82L186.702 390.875C174.202 416.25 149.202 432 121.202 432C99.952 432.125 79.827 422.75 66.202 406.625C51.827 389.75 45.453 367.5 48.828 345.625L76.327 164.375C81.202 132.5 104.077 107.5 134.827 100.625C256.701 73.125 383.201 73.125 505.075 100.625C535.825 107.5 558.7 132.5 563.575 164.375L591.074 345.625C594.449 367.5 588.074 389.75 573.7 406.625ZM399.997 240C382.372 240 367.997 254.375 367.997 272S382.372 304 399.997 304S431.997 289.625 431.997 272S417.622 240 399.997 240ZM247.951 200H215.952V168C215.952 154.799 205.151 144 191.952 144C178.751 144 167.952 154.799 167.952 168V200H135.952C122.751 200 111.952 210.799 111.952 224C111.952 237.199 122.751 248 135.952 248H167.952V280C167.952 293.199 178.751 304 191.952 304C205.151 304 215.952 293.199 215.952 280V248H247.951C261.151 248 271.951 237.199 271.951 224C271.951 210.799 261.151 200 247.951 200ZM463.997 144C446.372 144 431.997 158.375 431.997 176S446.372 208 463.997 208C481.622 208 495.997 193.625 495.997 176S481.622 144 463.997 144Z" />
        </Icon>
    </>
}