
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `blinds` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/blinds?s=regular blinds}
 * @preview ![blinds](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTQuNzc1IDQzMi40MDZDNDkwLjU1NyA0MTkuODQ0IDQ3Ny4wNTcgNDEzLjA5NCA0NjQuNDAyIDQxNy4yMTlDNDUxLjg0IDQyMS40MzcgNDQ1LjAyNyA0MzUgNDQ5LjIxNSA0NDcuNTk0TDQ1NC42ODQgNDY0SDU3LjMxNkw2Mi43ODUgNDQ3LjU5NEM2Ni45NzMgNDM1IDYwLjE2IDQyMS40MzggNDcuNTk4IDQxNy4yMTlDMzQuOTEyIDQxMy4wOTQgMjEuNDQzIDQxOS44NDQgMTcuMjI1IDQzMi40MDZMMS4yMjUgNDgwLjQwNkMtMS4yMTMgNDg3LjcxOSAwLjAzNyA0OTUuNzgxIDQuNTM3IDUwMi4wMzFTMTYuMjg3IDUxMiAyNC4wMDYgNTEySDQ4Ny45OTRDNDk1LjcxMyA1MTIgNTAyLjk2MyA1MDguMjgxIDUwNy40NjMgNTAyLjAzMVM1MTMuMjEzIDQ4Ny43MTkgNTEwLjc3NSA0ODAuNDA2TDQ5NC43NzUgNDMyLjQwNlpNNDk0Ljc3NSAzMDQuNDA2QzQ5MC41NTcgMjkxLjg0NCA0NzcuMDU3IDI4NS4wOTQgNDY0LjQwMiAyODkuMjE5QzQ1MS44NCAyOTMuNDM3IDQ0NS4wMjcgMzA3IDQ0OS4yMTUgMzE5LjU5NEw0NTQuNjg0IDMzNkg1Ny4zMTZMNjIuNzg1IDMxOS41OTRDNjYuOTczIDMwNyA2MC4xNiAyOTMuNDM4IDQ3LjU5OCAyODkuMjE5QzM0LjkxMiAyODUuMTI1IDIxLjQ0MyAyOTEuODQ0IDE3LjIyNSAzMDQuNDA2TDEuMjI1IDM1Mi40MDZDLTEuMjEzIDM1OS43MTkgMC4wMzcgMzY3Ljc4MSA0LjUzNyAzNzQuMDMxUzE2LjI4NyAzODQgMjQuMDA2IDM4NEg0ODcuOTk0QzQ5NS43MTMgMzg0IDUwMi45NjMgMzgwLjI4MSA1MDcuNDYzIDM3NC4wMzFTNTEzLjIxMyAzNTkuNzE5IDUxMC43NzUgMzUyLjQwNkw0OTQuNzc1IDMwNC40MDZaTTQ5NC4yMjEgNDYuNzQyQzUwNC4zNzcgNDMuOTQ3IDUxMS45OTQgMzUuMDQxIDUxMS45OTQgMjRDNTExLjk5NCAxMC43NSA1MDEuMjQ0IDAgNDg3Ljk5NCAwSDI0LjAwNkMxMC43NTYgMCAwLjAwNiAxMC43NSAwLjAwNiAyNEMwLjAwNiAzNS4wNDEgNy42MjUgNDMuOTQ3IDE3Ljc3OSA0Ni43NDJMMS4yMjUgOTYuNDA2Qy0xLjIxMyAxMDMuNzE5IDAuMDM3IDExMS43ODEgNC41MzcgMTE4LjAzMVMxNi4yODcgMTI4IDI0LjAwNiAxMjhIMTQ0LjAwMlYxNjQuNDA4QzExNi4xMDIgMTc0LjMyNiA5Ni4wMDQgMjAwLjY5NyA5Ni4wMDQgMjMyQzk2LjAwNCAyNzEuNzY0IDEyOC4yNCAzMDQgMTY4LjAwMiAzMDRDMjA3Ljc2NiAzMDQgMjQwIDI3MS43NjQgMjQwIDIzMkMyNDAgMjAwLjY5NyAyMTkuOTAyIDE3NC4zMjYgMTkyLjAwMiAxNjQuNDA4VjQ4SDQ0NC4wMThMNDU0LjY4NCA4MEgyMjRWMTI4SDQ4Ny45OTRDNDk1LjcxMyAxMjggNTAyLjk2MyAxMjQuMjgxIDUwNy40NjMgMTE4LjAzMVM1MTMuMjEzIDEwMy43MTkgNTEwLjc3NSA5Ni40MDZMNDk0LjIyMSA0Ni43NDJaTTU3LjMxNiA4MEw2Ny45ODMgNDhIMTQ0LjAwMlY4MEg1Ny4zMTZaTTE2OC4wMDIgMjU2QzE1NC43NjggMjU2IDE0NC4wMDIgMjQ1LjIzNCAxNDQuMDAyIDIzMlMxNTQuNzY4IDIwOCAxNjguMDAyIDIwOFMxOTIuMDAyIDIxOC43NjYgMTkyLjAwMiAyMzJTMTgxLjIzNiAyNTYgMTY4LjAwMiAyNTZaTTQ5NC43NzUgMTc2LjQwNkM0OTAuNTU3IDE2My44NDQgNDc3LjA1NyAxNTcuMTI1IDQ2NC40MDIgMTYxLjIxOUM0NTEuODQgMTY1LjQzNyA0NDUuMDI3IDE3OSA0NDkuMjE1IDE5MS41OTRMNDU0LjY4NCAyMDhIMjY4Ljk0M0MyNzAuNzc5IDIxNS43MzYgMjcyIDIyMy43MDEgMjcyIDIzMlMyNzAuNzc5IDI0OC4yNjQgMjY4Ljk0MyAyNTZINDg3Ljk5NEM0OTUuNzEzIDI1NiA1MDIuOTYzIDI1Mi4yODEgNTA3LjQ2MyAyNDYuMDMxUzUxMy4yMTMgMjMxLjcxOSA1MTAuNzc1IDIyNC40MDZMNDk0Ljc3NSAxNzYuNDA2Wk00Ny41OTggMTYxLjIxOUMzNC45MTIgMTU3LjE1NiAyMS40NDMgMTYzLjg0NCAxNy4yMjUgMTc2LjQwNkwxLjIyNSAyMjQuNDA2Qy0xLjIxMyAyMzEuNzE5IDAuMDM3IDIzOS43ODEgNC41MzcgMjQ2LjAzMVMxNi4yODcgMjU2IDI0LjAwNiAyNTZINjcuMDYxQzY1LjIyNSAyNDguMjY0IDY0LjAwNCAyNDAuMjk5IDY0LjAwNCAyMzJTNjUuMjI1IDIxNS43MzYgNjcuMDYxIDIwOEg1Ny4zMTZMNjIuNzg1IDE5MS41OTRDNjYuOTczIDE3OSA2MC4xNiAxNjUuNDM4IDQ3LjU5OCAxNjEuMjE5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Blinds(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M494.775 432.406C490.557 419.844 477.057 413.094 464.402 417.219C451.84 421.437 445.027 435 449.215 447.594L454.684 464H57.316L62.785 447.594C66.973 435 60.16 421.438 47.598 417.219C34.912 413.094 21.443 419.844 17.225 432.406L1.225 480.406C-1.213 487.719 0.037 495.781 4.537 502.031S16.287 512 24.006 512H487.994C495.713 512 502.963 508.281 507.463 502.031S513.213 487.719 510.775 480.406L494.775 432.406ZM494.775 304.406C490.557 291.844 477.057 285.094 464.402 289.219C451.84 293.437 445.027 307 449.215 319.594L454.684 336H57.316L62.785 319.594C66.973 307 60.16 293.438 47.598 289.219C34.912 285.125 21.443 291.844 17.225 304.406L1.225 352.406C-1.213 359.719 0.037 367.781 4.537 374.031S16.287 384 24.006 384H487.994C495.713 384 502.963 380.281 507.463 374.031S513.213 359.719 510.775 352.406L494.775 304.406ZM494.221 46.742C504.377 43.947 511.994 35.041 511.994 24C511.994 10.75 501.244 0 487.994 0H24.006C10.756 0 0.006 10.75 0.006 24C0.006 35.041 7.625 43.947 17.779 46.742L1.225 96.406C-1.213 103.719 0.037 111.781 4.537 118.031S16.287 128 24.006 128H144.002V164.408C116.102 174.326 96.004 200.697 96.004 232C96.004 271.764 128.24 304 168.002 304C207.766 304 240 271.764 240 232C240 200.697 219.902 174.326 192.002 164.408V48H444.018L454.684 80H224V128H487.994C495.713 128 502.963 124.281 507.463 118.031S513.213 103.719 510.775 96.406L494.221 46.742ZM57.316 80L67.983 48H144.002V80H57.316ZM168.002 256C154.768 256 144.002 245.234 144.002 232S154.768 208 168.002 208S192.002 218.766 192.002 232S181.236 256 168.002 256ZM494.775 176.406C490.557 163.844 477.057 157.125 464.402 161.219C451.84 165.437 445.027 179 449.215 191.594L454.684 208H268.943C270.779 215.736 272 223.701 272 232S270.779 248.264 268.943 256H487.994C495.713 256 502.963 252.281 507.463 246.031S513.213 231.719 510.775 224.406L494.775 176.406ZM47.598 161.219C34.912 157.156 21.443 163.844 17.225 176.406L1.225 224.406C-1.213 231.719 0.037 239.781 4.537 246.031S16.287 256 24.006 256H67.061C65.225 248.264 64.004 240.299 64.004 232S65.225 215.736 67.061 208H57.316L62.785 191.594C66.973 179 60.16 165.438 47.598 161.219Z" />
        </Icon>
    </>
}