
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `money-check-dollar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-check-dollar?s=light money-check-dollar}
 * @preview ![money-check-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMjg3Ljk5OEgyNzJDMjYzLjE2NCAyODcuOTk4IDI1NiAyOTUuMTYgMjU2IDMwMy45OThDMjU2IDMxMi44MzQgMjYzLjE2NCAzMTkuOTk4IDI3MiAzMTkuOTk4SDQ5NkM1MDQuODM2IDMxOS45OTggNTEyIDMxMi44MzQgNTEyIDMwMy45OThDNTEyIDI5NS4xNiA1MDQuODM2IDI4Ny45OTggNDk2IDI4Ny45OThaTTE0Ny44NzcgMjQwLjQ4NEwxNDEuNTggMjM4Ljg1OUMxMTAuMTg5IDIzMC42NTYgMTExLjE3NCAyMjUuNTYyIDExMi4yMjEgMjIwLjE1NkMxMTQuMDQ5IDIxMC43MDMgMTMxLjk3MSAyMDUuODkxIDE1My45MzkgMjA4LjkzOEMxNjAuNzA1IDIwOS44NzUgMTY4LjE0MyAyMTEuOTIyIDE3NS4yMjEgMjE0LjA5NEMxODMuNzIxIDIxNi43MzQgMTkyLjYyNyAyMTEuOTM4IDE5NS4yMDUgMjAzLjQ4NEMxOTcuNzk5IDE5NS4wNDcgMTkzLjA0OSAxODYuMDk0IDE4NC41OTYgMTgzLjVDMTc0LjU2NCAxODAuNDIyIDE2Ni42MzkgMTc4LjU1MyAxNTkuNjA3IDE3Ny40OTJDMTU5LjY1OCAxNzYuOTc3IDE1OS45MDggMTc2LjUyOSAxNTkuOTA4IDE3NlYxNjBDMTU5LjkwOCAxNTEuMTU2IDE1Mi43NTIgMTQ0IDE0My45MDggMTQ0UzEyNy45MDggMTUxLjE1NiAxMjcuOTA4IDE2MFYxNzZDMTI3LjkwOCAxNzYuMzAxIDEyOC4wNjIgMTc2LjU0OSAxMjguMDc4IDE3Ni44NDZDMTAyLjUwNCAxODAuMTExIDg0Ljg0IDE5My4zNSA4MC44MTQgMjE0LjA2MkM3My4wNDkgMjU0LjAzMSAxMTMuODc3IDI2NC43MDMgMTMzLjQ4NiAyNjkuODI4TDEzOS45ODYgMjcxLjQ4NEMxNzIuMjM2IDI3OS43MDMgMTc3LjE1OCAyODMuNzY2IDE3NS41OTYgMjkxLjgyOEMxNzMuNzUyIDMwMS4yODEgMTU1LjgxNCAzMDYuMTcyIDEzMy43ODMgMzAzLjA0N0MxMjUuMjA1IDMwMS45MDYgMTE0LjgzIDI5OC41NzggMTA1LjY4OSAyOTUuNjU2TDEwMC43MjEgMjk0LjA2MkM5Mi4yOTkgMjkxLjQ4NCA4My4zMTQgMjk2LjA3OCA4MC42NDMgMzA0LjUxNkM3Ny45ODYgMzEyLjk1MyA4Mi42NzQgMzIxLjkzOCA5MS4wOTYgMzI0LjU5NEw5NS45MDggMzI2LjEyNUMxMDUuOTYzIDMyOS4zNDYgMTE3LjI4MyAzMzIuODgxIDEyOC4yMTMgMzM0LjQ4NEMxMjguMTYyIDMzNS4wMDggMTI3LjkwOCAzMzUuNDYzIDEyNy45MDggMzM2VjM1MkMxMjcuOTA4IDM2MC44NDQgMTM1LjA2NCAzNjggMTQzLjkwOCAzNjhTMTU5LjkwOCAzNjAuODQ0IDE1OS45MDggMzUyVjMzNkMxNTkuOTA4IDMzNS40OTIgMTU5LjY2NiAzMzUuMDYyIDE1OS42MTkgMzM0LjU2NkMxODUuMDM5IDMzMS4yMzYgMjAyLjk3NSAzMTguNTgyIDIwNy4wMDIgMjk3LjkzOEMyMTQuODYxIDI1Ny41MzEgMTc0LjU0OSAyNDcuMjY2IDE0Ny44NzcgMjQwLjQ4NFpNNDk2IDE5MkgyNzJDMjYzLjE2NCAxOTIgMjU2IDE5OS4xNjIgMjU2IDIwOEMyNTYgMjE2LjgzNiAyNjMuMTY0IDIyNCAyNzIgMjI0SDQ5NkM1MDQuODM2IDIyNCA1MTIgMjE2LjgzNiA1MTIgMjA4QzUxMiAxOTkuMTYyIDUwNC44MzYgMTkyIDQ5NiAxOTJaTTUxMiA2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTQgMCAxMjhWMzg0QzAgNDE5LjM0NiAyOC42NTQgNDQ4IDY0IDQ0OEg1MTJDNTQ3LjM0NiA0NDggNTc2IDQxOS4zNDYgNTc2IDM4NFYxMjhDNTc2IDkyLjY1NCA1NDcuMzQ2IDY0IDUxMiA2NFpNNTQ0IDM4NEM1NDQgNDAxLjY0NSA1MjkuNjQ1IDQxNiA1MTIgNDE2SDY0QzQ2LjM1NSA0MTYgMzIgNDAxLjY0NSAzMiAzODRWMTI4QzMyIDExMC4zNTUgNDYuMzU1IDk2IDY0IDk2SDUxMkM1MjkuNjQ1IDk2IDU0NCAxMTAuMzU1IDU0NCAxMjhWMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MoneyCheckDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M496 287.998H272C263.164 287.998 256 295.16 256 303.998C256 312.834 263.164 319.998 272 319.998H496C504.836 319.998 512 312.834 512 303.998C512 295.16 504.836 287.998 496 287.998ZM147.877 240.484L141.58 238.859C110.189 230.656 111.174 225.562 112.221 220.156C114.049 210.703 131.971 205.891 153.939 208.938C160.705 209.875 168.143 211.922 175.221 214.094C183.721 216.734 192.627 211.938 195.205 203.484C197.799 195.047 193.049 186.094 184.596 183.5C174.564 180.422 166.639 178.553 159.607 177.492C159.658 176.977 159.908 176.529 159.908 176V160C159.908 151.156 152.752 144 143.908 144S127.908 151.156 127.908 160V176C127.908 176.301 128.062 176.549 128.078 176.846C102.504 180.111 84.84 193.35 80.814 214.062C73.049 254.031 113.877 264.703 133.486 269.828L139.986 271.484C172.236 279.703 177.158 283.766 175.596 291.828C173.752 301.281 155.814 306.172 133.783 303.047C125.205 301.906 114.83 298.578 105.689 295.656L100.721 294.062C92.299 291.484 83.314 296.078 80.643 304.516C77.986 312.953 82.674 321.938 91.096 324.594L95.908 326.125C105.963 329.346 117.283 332.881 128.213 334.484C128.162 335.008 127.908 335.463 127.908 336V352C127.908 360.844 135.064 368 143.908 368S159.908 360.844 159.908 352V336C159.908 335.492 159.666 335.062 159.619 334.566C185.039 331.236 202.975 318.582 207.002 297.938C214.861 257.531 174.549 247.266 147.877 240.484ZM496 192H272C263.164 192 256 199.162 256 208C256 216.836 263.164 224 272 224H496C504.836 224 512 216.836 512 208C512 199.162 504.836 192 496 192ZM512 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H512C547.346 448 576 419.346 576 384V128C576 92.654 547.346 64 512 64ZM544 384C544 401.645 529.645 416 512 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H512C529.645 96 544 110.355 544 128V384Z" />
        </Icon>
    </>
}