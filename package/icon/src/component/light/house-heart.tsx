
import { Icon } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=light house-heart}
 * @preview ![house-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYuMDAxIDI1Ni4wMDNDNTc2LjAwMSAyNTEuNTcxIDU3NC4xNzMgMjQ3LjE2IDU3MC41OTEgMjQ0TDUxMS45NDcgMTkyLjI1NEM1MTEuOTQ5IDE5Mi4xNjQgNTExLjk5OCAxOTIuMDkgNTExLjk5OCAxOTJWNDhDNTExLjk5OCAzOS4xNTYgNTA0Ljg0MiAzMiA0OTUuOTk4IDMySDM5OS45OTlDMzkxLjE1NiAzMiAzODMuOTk5IDM5LjE1NiAzODMuOTk5IDQ4Vjc5LjM2TDI5OC41OTQgNEMyOTUuNTYzIDEuMzQ0IDI5MS43ODIgMC4wMTYgMjg4IDAuMDE2UzI4MC40MzggMS4zNDQgMjc3LjQwNyA0TDUuNDEgMjQ0QzEuODI4IDI0Ny4xNiAwIDI1MS41NzEgMCAyNTYuMDAzQzAgMjY0Ljc2NCA3LjA2NCAyNzEuOTkzIDE2LjAwMSAyNzEuOTkzQzE5Ljc2MiAyNzEuOTkzIDIzLjU0NCAyNzAuNjggMjYuNTk3IDI2OEw2NC4wMDMgMjM0Ljk5NFY0MzJDNjQuMDAzIDQ3Ni4xMjUgOTkuODc4IDUxMiAxNDQuMDAyIDUxMkg0MzEuOTk5QzQ3Ni4xMjMgNTEyIDUxMS45OTggNDc2LjEyNSA1MTEuOTk4IDQzMlYyMzQuOTk0TDU0OS40MDQgMjY4QzU1Mi40NjYgMjcwLjY4OCA1NTYuMjE2IDI3MiA1NTkuOTk3IDI3MkM1NjguODM3IDI3MiA1NzYuMDAxIDI2NC44NDcgNTc2LjAwMSAyNTYuMDAzWk00MTUuOTk5IDY0SDQ3OS45OThWMTY0LjA2NUw0MTUuOTk5IDEwNy41OTRWNjRaTTQ3OS45OTggMjA4VjQzMkM0NzkuOTk4IDQ1OC40NjkgNDU4LjQ2NyA0ODAgNDMxLjk5OSA0ODBIMTQ0LjAwMkMxMTcuNTM0IDQ4MCA5Ni4wMDMgNDU4LjQ2OSA5Ni4wMDMgNDMyVjIwOEM5Ni4wMDMgMjA3LjYyNSA5NS44MTUgMjA3LjMxMyA5NS43OSAyMDYuOTQ1TDI4OCAzNy4zNDRMNDgwLjIxMSAyMDYuOTQ1QzQ4MC4xODYgMjA3LjMxMyA0NzkuOTk4IDIwNy42MjUgNDc5Ljk5OCAyMDhaTTIzMy4xMDMgMjI0QzIwMy44OTkgMjI0IDE3Ni4wMDIgMjQ5LjUyNSAxNzYuMDAyIDI4My42NzdDMTc2LjAwMiAyOTkuMDc3IDE4MS44MzUgMzE0LjQ4MSAxOTMuNDg4IDMyNi4yNDhMMjc4LjAyNiA0MTEuODc1QzI4MC43NzcgNDE0LjYyNSAyODQuMzQxIDQxNiAyODcuOTA1IDQxNlMyOTUuMDMzIDQxNC42MjUgMjk3Ljc4NCA0MTEuODc1TDM4Mi41NyAzMjYuMjQ4QzM5NC4xOTQgMzE0LjUxIDQwMCAyOTkuMTU1IDQwMCAyODMuNzkzQzQwMCAyNDkuNTMzIDM3Mi4wMDkgMjI0IDM0Mi44NDggMjI0QzMyNy41NCAyMjQgMzA4LjgzMyAyMzAuNzA2IDI4OC4wMyAyNTEuNzQ0QzI2Ny4xNjUgMjMwLjcwNiAyNDguNDI3IDIyNCAyMzMuMTAzIDIyNFpNMjMzLjg2NCAyNTUuOTkzQzI0My4yMDYgMjU1Ljk5MyAyNTIuMDEyIDI2MC45NDggMjU2LjY0MSAyNjUuNDk2TDI4OC4wMyAyOTcuMjQ2TDMxOS40MTggMjY1LjQ5NkMzMjMuOTU2IDI2MC44OCAzMzIuNjk4IDI1NS45NjEgMzQyLjAwMiAyNTUuOTYxQzM1NS4zMzMgMjU1Ljk2MSAzNjguMTExIDI2Ny42NzYgMzY4LjExMSAyODMuNDE0QzM2OC4xMTEgMjkxLjA5NyAzNjUuMDUgMjk4LjU3MiAzNTkuOTM1IDMwMy43NDZMMjg3LjkwNSAzNzYuMzczTDIxNi4xMjQgMzAzLjc0NkMyMTAuOTM0IDI5OC41NTkgMjA3LjgzOSAyOTEuMDU5IDIwNy44MzkgMjgzLjM1NUMyMDcuODM5IDI2OS4zODYgMjE4LjkxNSAyNTUuOTkzIDIzMy44NjQgMjU1Ljk5M1ogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
const HouseHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576.001 256.003C576.001 251.571 574.173 247.16 570.591 244L511.947 192.254C511.949 192.164 511.998 192.09 511.998 192V48C511.998 39.156 504.842 32 495.998 32H399.999C391.156 32 383.999 39.156 383.999 48V79.36L298.594 4C295.563 1.344 291.782 0.016 288 0.016S280.438 1.344 277.407 4L5.41 244C1.828 247.16 0 251.571 0 256.003C0 264.764 7.064 271.993 16.001 271.993C19.762 271.993 23.544 270.68 26.597 268L64.003 234.994V432C64.003 476.125 99.878 512 144.002 512H431.999C476.123 512 511.998 476.125 511.998 432V234.994L549.404 268C552.466 270.688 556.216 272 559.997 272C568.837 272 576.001 264.847 576.001 256.003ZM415.999 64H479.998V164.065L415.999 107.594V64ZM479.998 208V432C479.998 458.469 458.467 480 431.999 480H144.002C117.534 480 96.003 458.469 96.003 432V208C96.003 207.625 95.815 207.313 95.79 206.945L288 37.344L480.211 206.945C480.186 207.313 479.998 207.625 479.998 208ZM233.103 224C203.899 224 176.002 249.525 176.002 283.677C176.002 299.077 181.835 314.481 193.488 326.248L278.026 411.875C280.777 414.625 284.341 416 287.905 416S295.033 414.625 297.784 411.875L382.57 326.248C394.194 314.51 400 299.155 400 283.793C400 249.533 372.009 224 342.848 224C327.54 224 308.833 230.706 288.03 251.744C267.165 230.706 248.427 224 233.103 224ZM233.864 255.993C243.206 255.993 252.012 260.948 256.641 265.496L288.03 297.246L319.418 265.496C323.956 260.88 332.698 255.961 342.002 255.961C355.333 255.961 368.111 267.676 368.111 283.414C368.111 291.097 365.05 298.572 359.935 303.746L287.905 376.373L216.124 303.746C210.934 298.559 207.839 291.059 207.839 283.355C207.839 269.386 218.915 255.993 233.864 255.993Z " />
    </Icon>
);

export default HouseHeart;