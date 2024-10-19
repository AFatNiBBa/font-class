
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `house-crack` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-crack?s=duotone house-crack}
 * @preview ![house-crack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45NzEgMjcwLjUzMVY0NDhDNTExLjk3MSA0ODMuMzQ2IDQ4My4zMTYgNTEyIDQ0Ny45NzEgNTEySDMxOS43MTdMMjc5Ljg0NCA0NTYuNzVMMzgzLjk2MyAzOTIuNzVMMjM1Ljk3MyAyNTZMMjk2LjA5NCAzNzUuMjVMMTkxLjk3NSA0MzkuMjVMMjI5LjIyMyA1MTJIMTI4QzkyLjY1NCA1MTIgNjQgNDgzLjM0NiA2NCA0NDhWMjcwLjUxNkwyODcuOTc3IDc0LjU0MUw1MTEuOTcxIDI3MC41MzFaICIgY2xhc3M9ImZhLXNlY29uZGFyeSI+PC9wYXRoPjxwYXRoIGQ9Ik01NjUuMDc4IDIzMS45MDhMNTExLjk5NCAxODUuNDYzVjQ3Ljk4NEM1MTEuOTk0IDM5LjE1NiA1MDQuODM4IDMxLjk4NCA0OTUuOTk0IDMxLjk4NEg0MzEuOTk4QzQyMy4xNTYgMzEuOTg0IDQxNiAzOS4xNTYgNDE2IDQ3Ljk4NFYxMDEuNDczTDMwOS4wNzggNy45MjJDMzAzLjA0NyAyLjY0MSAyOTUuNTIzIDAgMjg4IDBTMjcyLjk1MyAyLjY0MSAyNjYuOTIyIDcuOTIyTDEwLjkyMiAyMzEuOTA4QzIuNjU2IDIzOS4xNTUgMCAyNDguNjQzIDAgMjU2LjAwOEMwIDI4MC4yOCAyMS45ODkgMjg3Ljk5OCAzMiAyODhDMzkuNDc3IDI4OCA0Ni45OSAyODUuMzk2IDUzLjA3OCAyODAuMDkyTDI4OCA3NC41NDFMNTIyLjkyMiAyODAuMDkyQzUyOSAyODUuNDA0IDUzNi41MTYgMjg3Ljk5OCA1NDMuOTg0IDI4Ny45OThDNTUzLjgyNCAyODcuOTk4IDU3NiAyODAuMjc0IDU3NiAyNTYuMDA4QzU3NiAyNDguNjI5IDU3My4zMjkgMjM5LjE0MiA1NjUuMDc4IDIzMS45MDhaTTIzNS45OTYgMjU2TDI5Ni4xMTcgMzc1LjI1TDE5MS45OTggNDM5LjI1TDIyOS4yNDYgNTEySDMxOS43NEwyNzkuODY3IDQ1Ni43NUwzODMuOTg2IDM5Mi43NUwyMzUuOTk2IDI1NlogIiBjbGFzcz0iZmEtcHJpbWFyeSI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function HouseCrack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M511.971 270.531V448C511.971 483.346 483.316 512 447.971 512H319.717L279.844 456.75L383.963 392.75L235.973 256L296.094 375.25L191.975 439.25L229.223 512H128C92.654 512 64 483.346 64 448V270.516L287.977 74.541L511.971 270.531Z " />
            <path d="M565.078 231.908L511.994 185.463V47.984C511.994 39.156 504.838 31.984 495.994 31.984H431.998C423.156 31.984 416 39.156 416 47.984V101.473L309.078 7.922C303.047 2.641 295.523 0 288 0S272.953 2.641 266.922 7.922L10.922 231.908C2.656 239.155 0 248.643 0 256.008C0 280.28 21.989 287.998 32 288C39.477 288 46.99 285.396 53.078 280.092L288 74.541L522.922 280.092C529 285.404 536.516 287.998 543.984 287.998C553.824 287.998 576 280.274 576 256.008C576 248.629 573.329 239.142 565.078 231.908ZM235.996 256L296.117 375.25L191.998 439.25L229.246 512H319.74L279.867 456.75L383.986 392.75L235.996 256Z " />
        </Icon>
    </>
}