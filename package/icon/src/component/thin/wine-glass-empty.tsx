
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wine-glass-empty` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass-empty?s=thin wine-glass-empty}
 * @preview ![wine-glass-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDMuMzk4IDE5Mi42NThMMjg4Ljc0NiAyOS4xMDRDMjg3LjI2OSAxMi42MjEgMjczLjY1MiAwIDI1Ny4zNDEgMEg2Mi42NTlDNDYuMzQ4IDAgMzIuNzMxIDEyLjYyMSAzMS4yNTQgMjkuMTA0TDE2LjYwMiAxOTIuNjU4QzkuMTc0IDI3NS41NjQgNzEuNDU4IDM0Ni43ODMgMTUyLjM0NiAzNTEuMTdDMTUyLjMwOCAzNTEuNDg0IDE1MiAzNTEuNjc2IDE1MiAzNTJWNDk2SDYzLjk5OUM1OS41OTIgNDk2IDU1Ljk5OSA0OTkuNTk0IDU1Ljk5OSA1MDRTNTkuNTkyIDUxMiA2My45OTkgNTEySDI1Ni4wMDFDMjYwLjQwOCA1MTIgMjY0LjAwMSA1MDguNDA2IDI2NC4wMDEgNTA0UzI2MC40MDggNDk2IDI1Ni4wMDEgNDk2SDE2OFYzNTJDMTY4IDM1MS42NzYgMTY3LjY5MSAzNTEuNDg0IDE2Ny42NTQgMzUxLjE3QzI0OC41NDIgMzQ2Ljc4MyAzMTAuODI2IDI3NS41NjQgMzAzLjM5OCAxOTIuNjU4Wk0xNjAgMzM2QzEyNC4wMzcgMzM2IDkwLjc0NyAzMjEuMjU2IDY2LjI2NCAyOTQuNDgyQzQxLjUzNyAyNjcuNDM5IDI5LjI0NCAyMzAuODQ4IDMyLjUzNyAxOTQuMDg2TDQ3LjE5IDMwLjUzMUM0Ny45MzIgMjIuMjQ2IDU0LjU4MyAxNiA2Mi42NTkgMTZIMjU3LjM0MUMyNjUuNDE3IDE2IDI3Mi4wNjggMjIuMjQ2IDI3Mi44MSAzMC41MzFMMjg3LjQ2MyAxOTQuMDg2QzI5MC43NTYgMjMwLjg0OCAyNzguNDYzIDI2Ny40MzkgMjUzLjczNiAyOTQuNDgyQzIyOS4yNTMgMzIxLjI1NiAxOTUuOTYzIDMzNiAxNjAgMzM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WineGlassEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M303.398 192.658L288.746 29.104C287.269 12.621 273.652 0 257.341 0H62.659C46.348 0 32.731 12.621 31.254 29.104L16.602 192.658C9.174 275.564 71.458 346.783 152.346 351.17C152.308 351.484 152 351.676 152 352V496H63.999C59.592 496 55.999 499.594 55.999 504S59.592 512 63.999 512H256.001C260.408 512 264.001 508.406 264.001 504S260.408 496 256.001 496H168V352C168 351.676 167.691 351.484 167.654 351.17C248.542 346.783 310.826 275.564 303.398 192.658ZM160 336C124.037 336 90.747 321.256 66.264 294.482C41.537 267.439 29.244 230.848 32.537 194.086L47.19 30.531C47.932 22.246 54.583 16 62.659 16H257.341C265.417 16 272.068 22.246 272.81 30.531L287.463 194.086C290.756 230.848 278.463 267.439 253.736 294.482C229.253 321.256 195.963 336 160 336Z" />
        </Icon>
    </>
}