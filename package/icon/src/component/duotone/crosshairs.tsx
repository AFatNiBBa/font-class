
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs?s=duotone crosshairs}
 * @preview ![crosshairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwNS4zMDUgMjI0SDQ3MS4wNjJDNDU3LjAxIDEyOC43MjEgMzgxLjUyMyA1NC45ODIgMjg4LjA3IDQxLjAzN1YxMDguNTg4QzMxNi40NzEgMTEzLjkzOSAzNDMuMzU0IDEyNy42ODggMzY0Ljg3MSAxNTAuNEMzODUuMjkxIDE3MC44MiAzOTguODk1IDE5Ni4yMDcgNDA1LjMwNSAyMjRaTTEwOS44OTYgMjg4SDQxQzU0LjY4IDM4My41MTggMTI4LjU1MyA0NTcuMzkxIDIyNC4wNyA0NzEuMDdWNDA2LjQ2OUMxOTYuODgxIDQwMC4zMTggMTcxLjE2MiAzODYuNjM5IDE1MC40NzEgMzY0Ljc5OUMxMjkuNTIzIDM0Mi42ODkgMTE1Ljk5MiAzMTUuODgzIDEwOS44OTYgMjg4Wk00MDYuNjc0IDI4OEM0MDAuODA1IDMxNi4yOTMgMzg2LjQzMiAzNDMuMjM4IDM2NC44NzEgMzY0Ljc5OUMzNDIuNzYgMzg2LjkxIDMxNS45NTMgNDAwLjc0NCAyODguMDcgNDA2Ljc3M1Y0NzEuMDdDMzgzLjU4OCA0NTcuMzkxIDQ1Ny40NjEgMzgzLjUxOCA0NzEuMTQxIDI4OEg0MDYuNjc0Wk00MS4wNzggMjI0SDEwOS41OTRDMTE1LjM2MSAxOTYuODExIDEyOC42MzEgMTcxLjA5MiAxNTAuNDcxIDE1MC40QzE3MS43MjMgMTMwLjI2NiAxOTcuMzU5IDExNy4yMTcgMjI0LjA3IDExMC43ODdWNDEuMDM3QzEzMC42MTcgNTQuOTgyIDU1LjEzMSAxMjguNzIxIDQxLjA3OCAyMjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiAzNTJDMjM4LjMyNiAzNTIgMjI0IDM2Ni4zMjYgMjI0IDM4NFY0ODBDMjI0IDQ5Ny42NzIgMjM4LjMyNiA1MTIgMjU2IDUxMlMyODggNDk3LjY3MiAyODggNDgwVjM4NEMyODggMzY2LjMyNiAyNzMuNjc0IDM1MiAyNTYgMzUyWk0xMjggMjI0SDMyQzE0LjMyNiAyMjQgMCAyMzguMzI2IDAgMjU2QzAgMjczLjY3MiAxNC4zMjYgMjg4IDMyIDI4OEgxMjhDMTQ1LjY3NCAyODggMTYwIDI3My42NzIgMTYwIDI1NkMxNjAgMjM4LjMyNiAxNDUuNjc0IDIyNCAxMjggMjI0Wk00ODAgMjI0SDM4NEMzNjYuMzI2IDIyNCAzNTIgMjM4LjMyNiAzNTIgMjU2QzM1MiAyNzMuNjcyIDM2Ni4zMjYgMjg4IDM4NCAyODhINDgwQzQ5Ny42NzQgMjg4IDUxMiAyNzMuNjcyIDUxMiAyNTZDNTEyIDIzOC4zMjYgNDk3LjY3NCAyMjQgNDgwIDIyNFpNMjU2IDBDMjM4LjMyNiAwIDIyNCAxNC4zMjYgMjI0IDMyVjEyOEMyMjQgMTQ1LjY3MiAyMzguMzI2IDE2MCAyNTYgMTYwUzI4OCAxNDUuNjcyIDI4OCAxMjhWMzJDMjg4IDE0LjMyNiAyNzMuNjc0IDAgMjU2IDBaTTI1NiAyMjRDMjM4LjMyNiAyMjQgMjI0IDIzOC4zMjYgMjI0IDI1NkMyMjQgMjczLjY3MiAyMzguMzI2IDI4OCAyNTYgMjg4UzI4OCAyNzMuNjcyIDI4OCAyNTZDMjg4IDIzOC4zMjYgMjczLjY3NCAyMjQgMjU2IDIyNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Crosshairs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M405.305 224H471.062C457.01 128.721 381.523 54.982 288.07 41.037V108.588C316.471 113.939 343.354 127.688 364.871 150.4C385.291 170.82 398.895 196.207 405.305 224ZM109.896 288H41C54.68 383.518 128.553 457.391 224.07 471.07V406.469C196.881 400.318 171.162 386.639 150.471 364.799C129.523 342.689 115.992 315.883 109.896 288ZM406.674 288C400.805 316.293 386.432 343.238 364.871 364.799C342.76 386.91 315.953 400.744 288.07 406.773V471.07C383.588 457.391 457.461 383.518 471.141 288H406.674ZM41.078 224H109.594C115.361 196.811 128.631 171.092 150.471 150.4C171.723 130.266 197.359 117.217 224.07 110.787V41.037C130.617 54.982 55.131 128.721 41.078 224Z" />
            <path d="M256 352C238.326 352 224 366.326 224 384V480C224 497.672 238.326 512 256 512S288 497.672 288 480V384C288 366.326 273.674 352 256 352ZM128 224H32C14.326 224 0 238.326 0 256C0 273.672 14.326 288 32 288H128C145.674 288 160 273.672 160 256C160 238.326 145.674 224 128 224ZM480 224H384C366.326 224 352 238.326 352 256C352 273.672 366.326 288 384 288H480C497.674 288 512 273.672 512 256C512 238.326 497.674 224 480 224ZM256 0C238.326 0 224 14.326 224 32V128C224 145.672 238.326 160 256 160S288 145.672 288 128V32C288 14.326 273.674 0 256 0ZM256 224C238.326 224 224 238.326 224 256C224 273.672 238.326 288 256 288S288 273.672 288 256C288 238.326 273.674 224 256 224Z" />
        </Icon>
    </>
}