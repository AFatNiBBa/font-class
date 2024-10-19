
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fire-smoke` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fire-smoke?s=light fire-smoke}
 * @preview ![fire-smoke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjYuNTk0IDI1NkMxNjguMTg4IDI1NiAxNjkuODI4IDI1NS43NSAxNzEuNDM4IDI1NS4yNUMxNzkuODU5IDI1Mi41OTQgMTg0LjUxNiAyNDMuNTk0IDE4MS44NDQgMjM1LjE1NkMxNzcuOTY5IDIyMi45MzggMTc2IDIxMC41IDE3NiAxOTguMTg4QzE3NiAxNjMuOTY5IDIxMi4zNzUgOTcuMjE5IDI4MC4wNjIgMzcuMTI1QzMwMS44NDQgNTYuMzc1IDMyMS44MjggNzcuMTg4IDMzOC4zNTkgOTcuODQ0QzM0MS4yOTcgMTAxLjUgMzQ1LjcwMyAxMDMuNjg4IDM1MC4zOTEgMTAzLjg0NEMzNTUuMTQxIDEwNC4xMjUgMzU5LjYwOSAxMDIuMDYyIDM2Mi43NSA5OC41NjJDMzcxLjUgODguODQ0IDM4MC45NjkgNzkuNDA2IDM5MSA3MC4zNDRDNDM1Ljg5MSAxMTIuNzgxIDQ2NCAxNzIuNSA0NjQgMTk3Ljk2OUM0NjQgMjEwLjI1IDQ2Mi4wNjIgMjIyLjc1IDQ1OC4yMTkgMjM1LjE4N0M0NTUuNjI1IDI0My42MjUgNDYwLjM1OSAyNTIuNTk0IDQ2OC43OTcgMjU1LjE4N0M0NzcuMjE5IDI1Ny44MTIgNDg2LjE4NyAyNTMuMDYyIDQ4OC44MTIgMjQ0LjYyNUM0OTMuNTc4IDIyOS4xMjUgNDk2IDIxMy40MzggNDk2IDE5Ny45NjlDNDk2IDE1OS4xODcgNDU3LjE0MSA4My40NjkgNDAxLjM3NSAzNi43NUMzOTUuNDM4IDMxLjgxMiAzODYuNzUgMzEuNzgxIDM4MC44MTMgMzYuNzgxQzM3MC41NzggNDUuNDA2IDM2MC43OTcgNTQuNDM4IDM1MS41OTQgNjMuNzVDMzMzLjU3OCA0MyAzMTIuNjU2IDIyLjUgMjkwLjMyOCAzLjc1QzI4NC4zOTEgLTEuMjUgMjc1LjcwMyAtMS4yNSAyNjkuNzY2IDMuNzVDMTk1LjcxOSA2NS44NDQgMTQ0IDE0NS43ODEgMTQ0IDE5OC4xODhDMTQ0IDIxMy43ODEgMTQ2LjQ2OSAyMjkuNDY5IDE1MS4zNDQgMjQ0Ljg0NEMxNTMuNSAyNTEuNjU2IDE1OS43OTcgMjU2IDE2Ni41OTQgMjU2Wk0zOTYuMjAzIDIzOS43ODFDNDA0LjgyOCAyNDEuMzQ0IDQxMy4xNDEgMjM1LjI1IDQxNC41NDcgMjI2LjUzMUM0MTguMTQxIDIwNC4xNTYgNDE0Ljk1MyAxODAuNzE5IDQwNS41MzEgMTYwLjQwNkM0MDMuMzQ0IDE1NS43NSA0MDAuODI4IDE1MC43NSAzOTguMjAzIDE0NS43ODFDMzk1LjY3MiAxNDAuOTY5IDM5MC44NzUgMTM3Ljc1IDM4NS40NjkgMTM3LjI4MUMzNzkuODEzIDEzNi44MTMgMzc0Ljc2NiAxMzkuMDk0IDM3MS40MjIgMTQzLjM3NUwzNDguMDMxIDE3My40MDZDMzMwLjY0MSAxNDguNDA2IDMwMS41MTYgMTA2LjYyNSAyOTguMjk3IDEwMi4zNDRDMjk1LjI2NiA5OC4zNDQgMjkwLjU0NyA5NiAyODUuNTMxIDk2SDI4NS40NTNDMjgwLjQwNiA5Ni4wMzEgMjc1LjY3MiA5OC40MzggMjcyLjY3MiAxMDIuNDY5QzI0My4yNjYgMTQyLjE4OCAyMjQgMTcwLjcxOSAyMjQgMjA0LjEyNUMyMjQgMjEyLjE1NiAyMjQuNzAzIDIxOS43NSAyMjYuMDMxIDIyNi45MDZDMjI3LjQ1MyAyMzQuNjI1IDIzNC4xODggMjQwIDI0MS43NSAyNDBDMjQyLjcxOSAyNDAgMjQzLjY4OCAyMzkuOTA2IDI0NC42NzIgMjM5LjcxOUMyNTMuMzU5IDIzOC4xMjUgMjU5LjEwOSAyMjkuNzgxIDI1Ny41IDIyMS4wOTRDMjU2LjUxNiAyMTUuNzUgMjU2IDIxMC4wOTQgMjU2IDIwNC4xMjVDMjU2IDE4NS45NjkgMjY1LjE3MiAxNjguMDYyIDI4NS4zNTkgMTM5LjQ2OUMyOTguNDUzIDE1OC4xODcgMzE4Ljk4NCAxODcuNjU2IDMzNC4xNTYgMjA5LjVDMzM3LjA2MiAyMTMuNjg4IDM0MS43ODEgMjE2LjIxOSAzNDYuODU5IDIxNi4zNzVDMzUyLjM1OSAyMTYuNzUgMzU2Ljc5NyAyMTQuMjE5IDM1OS45MjIgMjEwLjIxOUwzODAuMzc1IDE4My45NjlDMzg0LjA0NyAxOTUuOTM4IDM4NC45NjkgMjA4LjkwNiAzODIuOTUzIDIyMS40NjlDMzgxLjU0NyAyMzAuMTg4IDM4Ny40ODQgMjM4LjQwNiAzOTYuMjAzIDIzOS43ODFaTTUyOCAyODhDNDk1LjIwMyAyODggNDY0LjQzOCAzMDIuNjI1IDQ0My40NjkgMzI2Ljg3NUM0MTggMjgzLjUzMSAzNzEuNDY5IDI1NiAzMjAgMjU2UzIyMiAyODMuNTMxIDE5Ni41MzEgMzI2Ljg3NUMxNzUuNTYyIDMwMi42MjUgMTQ0Ljc5NyAyODggMTEyIDI4OEM1MC4yNSAyODggMCAzMzguMjUgMCA0MDBTNTAuMjUgNTEyIDExMiA1MTJINTI4QzU4OS43NSA1MTIgNjQwIDQ2MS43NSA2NDAgNDAwUzU4OS43NSAyODggNTI4IDI4OFpNNTI4IDQ4MEgxMTJDNjcuODkxIDQ4MCAzMiA0NDQuMTI1IDMyIDQwMFM2Ny44OTEgMzIwIDExMiAzMjBDMTQyLjk1MyAzMjAgMTcxLjQwNiAzMzguMzEyIDE4NC40ODQgMzY2LjY1NkMxODcuMjUgMzcyLjY1NiAxOTMuNTc4IDM3Ni42ODggMTk5LjkwNiAzNzUuOTM4QzIwNi40NjkgMzc1LjU2MiAyMTIuMTQxIDM3MS4yMTkgMjE0LjIwMyAzNjVDMjI5LjQ1MyAzMTguOTM4IDI3MS45NjkgMjg4IDMyMCAyODhTNDEwLjU0NyAzMTguOTM4IDQyNS43OTcgMzY1QzQyNy44NTkgMzcxLjIxOSA0MzMuNTMxIDM3NS41NjIgNDQwLjA5NCAzNzUuOTM4QzQ0Ni42NDEgMzc2LjY4OCA0NTIuNzY2IDM3Mi42NTYgNDU1LjUxNiAzNjYuNjU2QzQ2OC41OTQgMzM4LjMxMiA0OTcuMDQ3IDMyMCA1MjggMzIwQzU3Mi4xMDkgMzIwIDYwOCAzNTUuODc1IDYwOCA0MDBTNTcyLjEwOSA0ODAgNTI4IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FireSmoke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M166.594 256C168.188 256 169.828 255.75 171.438 255.25C179.859 252.594 184.516 243.594 181.844 235.156C177.969 222.938 176 210.5 176 198.188C176 163.969 212.375 97.219 280.062 37.125C301.844 56.375 321.828 77.188 338.359 97.844C341.297 101.5 345.703 103.688 350.391 103.844C355.141 104.125 359.609 102.062 362.75 98.562C371.5 88.844 380.969 79.406 391 70.344C435.891 112.781 464 172.5 464 197.969C464 210.25 462.062 222.75 458.219 235.187C455.625 243.625 460.359 252.594 468.797 255.187C477.219 257.812 486.187 253.062 488.812 244.625C493.578 229.125 496 213.438 496 197.969C496 159.187 457.141 83.469 401.375 36.75C395.438 31.812 386.75 31.781 380.813 36.781C370.578 45.406 360.797 54.438 351.594 63.75C333.578 43 312.656 22.5 290.328 3.75C284.391 -1.25 275.703 -1.25 269.766 3.75C195.719 65.844 144 145.781 144 198.188C144 213.781 146.469 229.469 151.344 244.844C153.5 251.656 159.797 256 166.594 256ZM396.203 239.781C404.828 241.344 413.141 235.25 414.547 226.531C418.141 204.156 414.953 180.719 405.531 160.406C403.344 155.75 400.828 150.75 398.203 145.781C395.672 140.969 390.875 137.75 385.469 137.281C379.813 136.813 374.766 139.094 371.422 143.375L348.031 173.406C330.641 148.406 301.516 106.625 298.297 102.344C295.266 98.344 290.547 96 285.531 96H285.453C280.406 96.031 275.672 98.438 272.672 102.469C243.266 142.188 224 170.719 224 204.125C224 212.156 224.703 219.75 226.031 226.906C227.453 234.625 234.188 240 241.75 240C242.719 240 243.688 239.906 244.672 239.719C253.359 238.125 259.109 229.781 257.5 221.094C256.516 215.75 256 210.094 256 204.125C256 185.969 265.172 168.062 285.359 139.469C298.453 158.187 318.984 187.656 334.156 209.5C337.062 213.688 341.781 216.219 346.859 216.375C352.359 216.75 356.797 214.219 359.922 210.219L380.375 183.969C384.047 195.938 384.969 208.906 382.953 221.469C381.547 230.188 387.484 238.406 396.203 239.781ZM528 288C495.203 288 464.438 302.625 443.469 326.875C418 283.531 371.469 256 320 256S222 283.531 196.531 326.875C175.562 302.625 144.797 288 112 288C50.25 288 0 338.25 0 400S50.25 512 112 512H528C589.75 512 640 461.75 640 400S589.75 288 528 288ZM528 480H112C67.891 480 32 444.125 32 400S67.891 320 112 320C142.953 320 171.406 338.312 184.484 366.656C187.25 372.656 193.578 376.688 199.906 375.938C206.469 375.562 212.141 371.219 214.203 365C229.453 318.938 271.969 288 320 288S410.547 318.938 425.797 365C427.859 371.219 433.531 375.562 440.094 375.938C446.641 376.688 452.766 372.656 455.516 366.656C468.594 338.312 497.047 320 528 320C572.109 320 608 355.875 608 400S572.109 480 528 480Z" />
        </Icon>
    </>
}