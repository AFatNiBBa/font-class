
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `piggy-bank` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/piggy-bank?s=light piggy-bank}
 * @preview ![piggy-bank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIuMDE5IDI0OEM0MTguODk0IDI0OCA0MDguMDE5IDI1OC44NzUgNDA4LjAxOSAyNzJTNDE4Ljg5NCAyOTYgNDMyLjAxOSAyOTZTNDU2LjAyMSAyODUuMTI1IDQ1Ni4wMjEgMjcyUzQ0NS4xNDQgMjQ4IDQzMi4wMTkgMjQ4Wk01NDMuOTk5IDIyNEg1MzAuNDk3QzUxOS4zNzIgMTk4Ljc1IDUwMS43NDUgMTc3LjEyNSA0NzkuOTk1IDE2MC42MjVWOTZINDYzLjk5M0M0MTcuMzY2IDk2IDM4MC44NjQgMTIzLjI1IDM3NC42MTQgMTI4SDIyMy45ODRDMTgyLjYwNyAxMjggMTQxLjM1NSAxNDUuMzc1IDExMi4yMjggMTczLjg3NUM4OS44NTMgMTk1Ljc1IDczLjcyNiAyMjQuMTI1IDY3LjEwMSAyNTZINTUuOTc2QzQxLjEwMSAyNTYgMjkuNDc0IDI0Mi41IDMyLjQ3NCAyMjcuMjVDMzQuMDg5IDIxOC41MDYgNDAuOTk1IDIxMC44MzggNTEuNjE4IDIwOC42MzVDNTguODc4IDIwNy4xMjcgNjMuOTc2IDIwMC41NDcgNjMuOTc2IDE5My4xMzFDNjMuOTc2IDE4Mi45ODYgNTQuNTQgMTc1LjI0MiA0NC42NSAxNzcuNTA0QzIxLjkzMyAxODIuNzAxIDMuNTIxIDIwMC44ODEgMC40NzQgMjI0LjYyNUMtMy45MDEgMjU4Ljc1IDIyLjU5OSAyODggNTUuOTc2IDI4OEg2My45NzZDNjMuOTc2IDM0MC4yNSA4OS4zNTMgMzg2LjEyNSAxMjcuOTggNDE1LjI1VjQ2NEMxMjcuOTggNDkwLjQgMTQ5LjU4IDUxMiAxNzUuOTggNTEySDIyMy45ODZDMjUwLjM4NiA1MTIgMjcxLjk4NiA0OTAuNCAyNzEuOTg2IDQ2NFY0NDhIMzM1Ljk4OFY0NjRDMzM1Ljk4OCA0OTAuNCAzNTcuNTg4IDUxMiAzODMuOTg4IDUxMkg0MzEuOTk1QzQ1OC4zOTUgNTEyIDQ3OS45OTUgNDkwLjQgNDc5Ljk5NSA0NjRWNDE1LjEyNUM0OTEuNjIgNDA2LjEyNSA1MDIuMzcgMzk1Ljc1IDUxMS4yNDUgMzg0SDU0My45OTdDNTYxLjU5OCAzODQgNTc1Ljk5OSAzNjkuNTk5IDU3NS45OTkgMzUxLjk5OFYyNTZDNTc1Ljk5OSAyMzguNCA1NjEuNTk5IDIyNCA1NDMuOTk5IDIyNFpNNTQzLjk5NyAzNTJINDk1LjI0NUM0NzguMjQ1IDM3NC4zNzUgNDc4LjI0NSAzNzYuMTI1IDQ0Ny45OTMgMzk5LjI1VjQ2NEM0NDcuOTkzIDQ3Mi44MzcgNDQwLjgzIDQ4MCA0MzEuOTkzIDQ4MEgzODMuOTg5QzM3NS4xNTMgNDgwIDM2Ny45ODkgNDcyLjgzNyAzNjcuOTg5IDQ2NFY0MTZIMjM5Ljk4NFY0NjRDMjM5Ljk4NCA0NzIuODM3IDIzMi44MiA0ODAgMjIzLjk4NCA0ODBIMTc1Ljk4QzE2Ny4xNDMgNDgwIDE1OS45OCA0NzIuODM3IDE1OS45OCA0NjRWMzk5LjI1Qzk1LjEwMyAzNTAuMjUgOTUuOTc4IDMwNS43NSA5NS45NzggMjg4Qzk1Ljk3OCAyMTcuMzc1IDE1My4zNTUgMTYwIDIyMy45ODQgMTYwSDM4NS43NDFDNDAyLjYxNiAxNDYuNSA0MTguODY2IDEzMy41IDQ0Ny45OTMgMTI5LjI1VjE3Ni41QzQ4Ny43NDUgMjA2LjYyNSA0OTEuOTk1IDIxNS43NSA1MDkuNjIgMjU2SDU0My45OTdWMzUyWk0xNzMuOTA2IDExMS43OTdDMTc0Ljc3MyAxMTEuOTM4IDE3NS42NDIgMTEyIDE3Ni41MDkgMTEyQzE4NC40NTQgMTEyIDE5MS40NjYgMTA2LjQzIDE5Mi43NTMgOTguNjExQzE5OS4xMiA1OS44ODcgMjMzLjMxMiAzMS43NzMgMjc0LjA2NCAzMS43NzNDMzA5LjI0OSAzMS43NzMgMzQwLjU0NiA1My4zMjIgMzUxLjk2NCA4NS4zNzdDMzU0LjkyMyA5My42NjIgMzY0LjIxOCA5OC4wMzcgMzcyLjg3IDk1LjI2QzM4MS40ODkgOTIuNDA0IDM4Ni4wNTggODMuMzc1IDM4My4wOTkgNzUuMDc0QzM2Ny4xNDYgMzAuMTc2IDMyMy4zMDYgMCAyNzQuMDY0IDBDMjE3LjAzNiAwIDE2OS4xNDQgMzkuMzc1IDE2MC4yMDIgOTMuNjE1QzE1OC43ODggMTAyLjI4NyAxNjQuOSAxMTAuNDE4IDE3My45MDYgMTExLjc5N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PiggyBank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M432.019 248C418.894 248 408.019 258.875 408.019 272S418.894 296 432.019 296S456.021 285.125 456.021 272S445.144 248 432.019 248ZM543.999 224H530.497C519.372 198.75 501.745 177.125 479.995 160.625V96H463.993C417.366 96 380.864 123.25 374.614 128H223.984C182.607 128 141.355 145.375 112.228 173.875C89.853 195.75 73.726 224.125 67.101 256H55.976C41.101 256 29.474 242.5 32.474 227.25C34.089 218.506 40.995 210.838 51.618 208.635C58.878 207.127 63.976 200.547 63.976 193.131C63.976 182.986 54.54 175.242 44.65 177.504C21.933 182.701 3.521 200.881 0.474 224.625C-3.901 258.75 22.599 288 55.976 288H63.976C63.976 340.25 89.353 386.125 127.98 415.25V464C127.98 490.4 149.58 512 175.98 512H223.986C250.386 512 271.986 490.4 271.986 464V448H335.988V464C335.988 490.4 357.588 512 383.988 512H431.995C458.395 512 479.995 490.4 479.995 464V415.125C491.62 406.125 502.37 395.75 511.245 384H543.997C561.598 384 575.999 369.599 575.999 351.998V256C575.999 238.4 561.599 224 543.999 224ZM543.997 352H495.245C478.245 374.375 478.245 376.125 447.993 399.25V464C447.993 472.837 440.83 480 431.993 480H383.989C375.153 480 367.989 472.837 367.989 464V416H239.984V464C239.984 472.837 232.82 480 223.984 480H175.98C167.143 480 159.98 472.837 159.98 464V399.25C95.103 350.25 95.978 305.75 95.978 288C95.978 217.375 153.355 160 223.984 160H385.741C402.616 146.5 418.866 133.5 447.993 129.25V176.5C487.745 206.625 491.995 215.75 509.62 256H543.997V352ZM173.906 111.797C174.773 111.938 175.642 112 176.509 112C184.454 112 191.466 106.43 192.753 98.611C199.12 59.887 233.312 31.773 274.064 31.773C309.249 31.773 340.546 53.322 351.964 85.377C354.923 93.662 364.218 98.037 372.87 95.26C381.489 92.404 386.058 83.375 383.099 75.074C367.146 30.176 323.306 0 274.064 0C217.036 0 169.144 39.375 160.202 93.615C158.788 102.287 164.9 110.418 173.906 111.797Z" />
        </Icon>
    </>
}