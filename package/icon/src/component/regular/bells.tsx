
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bells` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bells?s=regular bells}
 * @preview ![bells](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDEuOTk2IDI1My44NzVDMjE0LjEyMyAxNzcuMjYyIDI0Ni45OTYgOTMuMjc3IDMxNS43NDIgNTQuMTU2QzMwNy4yNDIgNDguNTM1IDI5OC4yNDIgNDMuNjYgMjg4LjI0NCA0MC4wMzVDMjE4Ljk5OCAxNC45MTQgMTQyLjUwNCA1MC42NTYgMTE3LjI1NiAxMTkuNzczQzExNi41MDYgMTIxLjg5OCAxMDIuNjMxIDE2MC4yNjYgMTAxLjg4MSAxNjIuMzkxQzcyLjc1OCAyNDIuNSAzNS41MTIgMjU2Ljc1IDE0LjUxMiAyNjcuMzc1Qy01LjYxMSAyNzcuNzQ2IC00Ljk4NiAzMDcuOTkyIDE3LjUxMiAzMTYuMjM4TDI2MC43NDYgNDA0LjcyN0MyNjkuMjQ0IDM4NS42MDIgMjgwLjI0NCAzNTkuMjM0IDI1Ny40OTYgMjk2LjYxN0MyNDcuNzQ2IDI2OS42MjUgMjUxLjI0NiAyNzkuNDk2IDI0MS45OTYgMjUzLjg3NVpNMTM4LjEyOSA0NDQuMjE5QzE2NS43NTIgNDU0LjIxOSAxOTUuNjI1IDQ0My44NDQgMjExLjg3MyA0MjAuOTY5TDk2LjUwNiAzNzguOTc3Qzk0LjI1OCA0MDYuODUyIDExMC4zODEgNDM0LjA5NCAxMzguMTI5IDQ0NC4yMTlaTTUwMS44NTQgNDc2LjIxMUM1MjkuNDc3IDQ2Ni4wODYgNTQ1LjcyNyA0MzguOTY5IDU0My40NzcgNDEwLjk3M0w0MjguMTA5IDQ1Mi45NjlDNDQ0LjM1OCA0NzUuNzExIDQ3NC4yMzEgNDg2LjIxMSA1MDEuODU0IDQ3Ni4yMTFaTTYyNS41OTYgMjk5LjM2N0M2MDQuNTk4IDI4OC43NDYgNTY3LjIyNSAyNzQuNDk2IDUzOC4yMjcgMTk0LjM4N0M1MzcuMzUyIDE5Mi4yNjIgNTIzLjQ3OSAxNTMuODkxIDUyMi43MjkgMTUxLjc2NkM1MDIuOTc3IDk3LjY5OSA0NTEuODYzIDY0LjA1NSAzOTcuMzkzIDY0LjA1NUMzODIuMjMzIDY0LjA1NSAzNjYuODE1IDY2LjY2IDM1MS43NCA3Mi4xNTZDMjgyLjYxOSA5Ny4yNzcgMjQ2Ljg3MSAxNzMuNzY2IDI3Mi4xMjEgMjQzLjAwNEMyNzIuODcxIDI0NS4xMjUgMjg2Ljg2OSAyODMuMzcxIDI4Ny43NDQgMjg1LjYyMUMzMTYuODY3IDM2NS43MyAyOTcuMzY5IDQwMC40NzcgMjg4LjI0NCA0MjIuMjIzQzI4MC42MjkgNDM5LjkxOCAyOTQuMjc3IDQ1OS4yNyAzMTIuNTE4IDQ1OS4yN0MzMTUuNTM1IDQ1OS4yNyAzMTguNjc0IDQ1OC43NDIgMzIxLjg2NyA0NTcuNTlMNjIyLjQ3MSAzNDguMjM0QzY0Mi45NzEgMzQwLjczNCA2NDcuMzQ2IDMxMC42MTcgNjI1LjU5NiAyOTkuMzY3Wk0zNDcuNTUzIDM5Ny4xNjhDMzUzLjU4MiAzNjguMjczIDM1My45MzQgMzI3LjIwNyAzMzIuNTUzIDI2OC40MUMzMzEuMjMxIDI2NC45MjYgMzE4LjM2NSAyMjkuNzczIDMxNy4yMTUgMjI2LjU1OUMzMDkuNDA4IDIwNS4xNDggMzEwLjQxIDE4MS45ODggMzIwLjAzNSAxNjEuMzRDMzI5LjY2IDE0MC42OTUgMzQ2Ljc0MiAxMjUuMDQzIDM2OC4xODIgMTE3LjI1NEMzNzcuNjQzIDExMy44MDUgMzg3LjQ2OSAxMTIuMDU1IDM5Ny4zOTMgMTEyLjA1NUM0MzMuMTE3IDExMi4wNTUgNDY1LjM2NyAxMzQuNjMzIDQ3Ny40NjUgMTY3Ljc0MkM0NzcuNTggMTY4LjA3IDQ4OS42OCAyMDEuNjYgNDkzLjA5NCAyMTAuNzIzQzUxNC4yMTUgMjY5LjA3NCA1NDAuNzgzIDMwMC4xOTUgNTY0LjAxMiAzMTguNDIyTDM0Ny41NTMgMzk3LjE2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bells(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M241.996 253.875C214.123 177.262 246.996 93.277 315.742 54.156C307.242 48.535 298.242 43.66 288.244 40.035C218.998 14.914 142.504 50.656 117.256 119.773C116.506 121.898 102.631 160.266 101.881 162.391C72.758 242.5 35.512 256.75 14.512 267.375C-5.611 277.746 -4.986 307.992 17.512 316.238L260.746 404.727C269.244 385.602 280.244 359.234 257.496 296.617C247.746 269.625 251.246 279.496 241.996 253.875ZM138.129 444.219C165.752 454.219 195.625 443.844 211.873 420.969L96.506 378.977C94.258 406.852 110.381 434.094 138.129 444.219ZM501.854 476.211C529.477 466.086 545.727 438.969 543.477 410.973L428.109 452.969C444.358 475.711 474.231 486.211 501.854 476.211ZM625.596 299.367C604.598 288.746 567.225 274.496 538.227 194.387C537.352 192.262 523.479 153.891 522.729 151.766C502.977 97.699 451.863 64.055 397.393 64.055C382.233 64.055 366.815 66.66 351.74 72.156C282.619 97.277 246.871 173.766 272.121 243.004C272.871 245.125 286.869 283.371 287.744 285.621C316.867 365.73 297.369 400.477 288.244 422.223C280.629 439.918 294.277 459.27 312.518 459.27C315.535 459.27 318.674 458.742 321.867 457.59L622.471 348.234C642.971 340.734 647.346 310.617 625.596 299.367ZM347.553 397.168C353.582 368.273 353.934 327.207 332.553 268.41C331.231 264.926 318.365 229.773 317.215 226.559C309.408 205.148 310.41 181.988 320.035 161.34C329.66 140.695 346.742 125.043 368.182 117.254C377.643 113.805 387.469 112.055 397.393 112.055C433.117 112.055 465.367 134.633 477.465 167.742C477.58 168.07 489.68 201.66 493.094 210.723C514.215 269.074 540.783 300.195 564.012 318.422L347.553 397.168Z" />
        </Icon>
    </>
}