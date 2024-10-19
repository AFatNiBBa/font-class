
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-knight-piece` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight-piece?s=regular chess-knight-piece}
 * @preview ![chess-knight-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04OS43OTMgMTk1LjI1Qzk1LjI5MyAxOTUuMjUgMTAwLjQxOCAxOTEuODc1IDEwMi41NDMgMTg2LjYyNUMxMDQuNzkzIDE4MS41IDEwMy41NDMgMTc1LjUgOTkuNjY4IDE3MS41Qzk1LjY2OCAxNjcuNjI1IDg5LjY2OCAxNjYuMzc1IDg0LjU0MyAxNjguNUM3OS4yOTMgMTcwLjYyNSA3NS45MTggMTc1Ljc1IDc1LjkxOCAxODEuMzc1Qzc1LjkxOCAxODkgODIuMDQzIDE5NS4xMjUgODkuNzkzIDE5NS4yNVpNMzEzLjY2OCA0MzUuMjVMMjg4LjA0MyA0MTZWMzg1Ljg3NUMyOTguMjkzIDM3Mi4yNSAzMDMuOTE4IDM1NS43NSAzMDQuMDQzIDMzOC43NVYyMzIuNjI1QzMwNC4wNDMgMTM5LjYyNSAyMjguNDE4IDY0IDEzNS40MTggNjRINTUuNDE4QzM3LjQxOCA2NCAyMC41NDMgNzIuODc1IDEwLjE2OCA4Ny42MjVDLTAuMjA3IDEwMi4yNSAtMi44MzIgMTIxLjEyNSAzLjE2OCAxMzguMTI1QzEuMDQzIDE0NC41IDAuMDQzIDE1MS4xMjUgMC4wNDMgMTU3Ljc1VjI0Mi41QzAuMDQzIDI2OCAxNC40MTggMjkxLjM3NSAzNy4wNDMgMzAzQzI2LjU0MyAzMTcuNzUgMTkuNzkzIDMzNC44NzUgMTYuOTE4IDM1NC41QzE0LjA0MyAzNzQuNzUgMTkuNDE4IDM5NS4zNzUgMzIuMDQzIDQxMS42MjVWNDE2TDYuNDE4IDQzNS4yNUMyLjQxOCA0MzguMjUgMC4wNDMgNDQzIDAuMDQzIDQ0OFY0OTZDMC4wNDMgNTA0Ljg3NSA3LjE2OCA1MTIgMTYuMDQzIDUxMkgzMDQuMDQzQzMxMi45MTggNTEyIDMyMC4wNDMgNTA0Ljg3NSAzMjAuMDQzIDQ5NlY0NDhDMzIwLjA0MyA0NDMgMzE3LjY2OCA0MzguMjUgMzEzLjY2OCA0MzUuMjVaTTU1LjQxOCAxMTJIMTM1LjQxOEMyMDEuNzkzIDExMiAyNTYuMDQzIDE2Ni4yNSAyNTYuMDQzIDIzMi42MjVWMzM4Ljc1QzI1Ni4wNDMgMzQ3LjI1IDI1Mi42NjggMzU1LjM3NSAyNDYuNjY4IDM2MS4zNzVMMjQwLjA0MyAzNjhINjQuNzkzQzY0LjY2OCAzNjUuODc1IDY0LjA0MyAzNjMuNzUgNjQuNDE4IDM2MS42MjVDNjguNzkzIDMzMi42MjUgODUuOTE4IDMxNS43NSAxMTAuNTQzIDMwNC42MjVMMTQ1LjQxOCAyOTMuNzVDMTU0LjI5MyAyODkuNzUgMTYwLjA0MyAyODAuODc1IDE2MC4wNDMgMjcxLjI1VjIyMi44NzVMMTMyLjkxOCAyMjcuNjI1QzEyOS4wNDMgMjI5LjYyNSAxMjYuMjkzIDIzMy4xMjUgMTI1LjE2OCAyMzcuMjVMMTE5LjU0MyAyNTYuMjVDMTE3Ljc5MyAyNjIgMTEzLjU0MyAyNjYuNjI1IDEwOC4wNDMgMjY4Ljg3NVM5Ny43OTMgMjczLjUgOTIuNTQzIDI3My41Qzg5LjkxOCAyNzMuNSA4Ny4yOTMgMjcyLjg3NSA4NC43OTMgMjcxLjc1TDU5Ljc5MyAyNjAuNjI1QzUyLjY2OCAyNTcuNSA0OC4wNDMgMjUwLjM3NSA0OC4wNDMgMjQyLjVWMTU3Ljc1QzQ4LjA0MyAxNTAuMzc1IDUyLjQxOCAxNDcuMTI1IDU3LjkxOCAxNDEuNzVMNDkuMTY4IDEyNC4xMjVDNDUuOTE4IDExNy41IDUwLjI5MyAxMTIgNTUuNDE4IDExMlpNNDguMDQzIDQ2NEw4MC4wNDMgNDQwVjQxNkgyNDAuMDQzVjQ0MEwyNzIuMDQzIDQ2NEg0OC4wNDNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChessKnightPiece(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M89.793 195.25C95.293 195.25 100.418 191.875 102.543 186.625C104.793 181.5 103.543 175.5 99.668 171.5C95.668 167.625 89.668 166.375 84.543 168.5C79.293 170.625 75.918 175.75 75.918 181.375C75.918 189 82.043 195.125 89.793 195.25ZM313.668 435.25L288.043 416V385.875C298.293 372.25 303.918 355.75 304.043 338.75V232.625C304.043 139.625 228.418 64 135.418 64H55.418C37.418 64 20.543 72.875 10.168 87.625C-0.207 102.25 -2.832 121.125 3.168 138.125C1.043 144.5 0.043 151.125 0.043 157.75V242.5C0.043 268 14.418 291.375 37.043 303C26.543 317.75 19.793 334.875 16.918 354.5C14.043 374.75 19.418 395.375 32.043 411.625V416L6.418 435.25C2.418 438.25 0.043 443 0.043 448V496C0.043 504.875 7.168 512 16.043 512H304.043C312.918 512 320.043 504.875 320.043 496V448C320.043 443 317.668 438.25 313.668 435.25ZM55.418 112H135.418C201.793 112 256.043 166.25 256.043 232.625V338.75C256.043 347.25 252.668 355.375 246.668 361.375L240.043 368H64.793C64.668 365.875 64.043 363.75 64.418 361.625C68.793 332.625 85.918 315.75 110.543 304.625L145.418 293.75C154.293 289.75 160.043 280.875 160.043 271.25V222.875L132.918 227.625C129.043 229.625 126.293 233.125 125.168 237.25L119.543 256.25C117.793 262 113.543 266.625 108.043 268.875S97.793 273.5 92.543 273.5C89.918 273.5 87.293 272.875 84.793 271.75L59.793 260.625C52.668 257.5 48.043 250.375 48.043 242.5V157.75C48.043 150.375 52.418 147.125 57.918 141.75L49.168 124.125C45.918 117.5 50.293 112 55.418 112ZM48.043 464L80.043 440V416H240.043V440L272.043 464H48.043Z" />
        </Icon>
    </>
}