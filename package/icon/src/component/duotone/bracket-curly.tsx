
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-curly` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=duotone bracket-curly}
 * @preview ![bracket-curly](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MS45OTcgMzJIMTU5Ljk5N0MxMDYuOTc3IDMyIDYzLjk5NyA3NC45ODEgNjMuOTk3IDEyOFYxNjUuNUM2My45OTcgMTczLjk4NCA2MC42MjYgMTgyLjEyIDU0LjYyNyAxODguMTE5TDkuMzcyIDIzMy4zNzVDLTMuMTI0IDI0NS44NyAtMy4xMjQgMjY2LjEzIDkuMzcyIDI3OC42MjVMNTQuNjI3IDMyMy44ODFDNjAuNjI2IDMyOS44OCA2My45OTcgMzM4LjAxNiA2My45OTcgMzQ2LjVWMzg0QzYzLjk5NyA0MzcuMDE5IDEwNi45NzcgNDgwIDE1OS45OTcgNDgwSDE5MS45OTdDMjA5LjY3IDQ4MCAyMjMuOTk3IDQ2NS42NzMgMjIzLjk5NyA0NDhWNDQ4QzIyMy45OTcgNDMwLjMyNyAyMDkuNjcgNDE2IDE5MS45OTcgNDE2SDE1OS45OTdDMTQyLjM5NyA0MTYgMTI3Ljk5NyA0MDEuNiAxMjcuOTk3IDM4NFYzNDYuNUMxMjcuOTk3IDMyMS4wNDggMTE3Ljg4NiAyOTYuNjM5IDk5Ljg4OSAyNzguNjQyTDc3LjI0NyAyNTZMOTkuODcyIDIzMy4zNzVDMTE3Ljg4IDIxNS4zNjcgMTI3Ljk5NyAxOTAuOTQzIDEyNy45OTcgMTY1LjQ3NVYxMjhDMTI3Ljk5NyAxMTAuNCAxNDIuMzk3IDk2IDE1OS45OTcgOTZIMTkxLjk5N0MyMDkuNjcgOTYgMjIzLjk5NyA4MS42NzMgMjIzLjk5NyA2NFY2NEMyMjMuOTk3IDQ2LjMyNyAyMDkuNjcgMzIgMTkxLjk5NyAzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BracketCurly(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path class={generic.secondary} d="M191.997 32H159.997C106.977 32 63.997 74.981 63.997 128V165.5C63.997 173.984 60.626 182.12 54.627 188.119L9.372 233.375C-3.124 245.87 -3.124 266.13 9.372 278.625L54.627 323.881C60.626 329.88 63.997 338.016 63.997 346.5V384C63.997 437.019 106.977 480 159.997 480H191.997C209.67 480 223.997 465.673 223.997 448V448C223.997 430.327 209.67 416 191.997 416H159.997C142.397 416 127.997 401.6 127.997 384V346.5C127.997 321.048 117.886 296.639 99.889 278.642L77.247 256L99.872 233.375C117.88 215.367 127.997 190.943 127.997 165.475V128C127.997 110.4 142.397 96 159.997 96H191.997C209.67 96 223.997 81.673 223.997 64V64C223.997 46.327 209.67 32 191.997 32Z" />
        </Icon>
    </>
}