
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-pawn-piece` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=duotone chess-pawn-piece}
 * @preview ![chess-pawn-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiA0NzMuOTA5VjQ5Ni4wMTRDMjU2IDUwNC44ODEgMjQ4Ljg3NSA1MTIgMjQwIDUxMkgxNkM3LjEyNSA1MTIgMCA1MDQuODgxIDAgNDk2LjAxNFY0NzMuOTA5QzAgNDY3LjkxNSAzLjM3NSA0NjIuMjk1IDguODc1IDQ1OS42NzJMMzIgNDQ4LjA1OFY0MDAuMTAxQzMyIDM5MS4yMzQgMzkuMTI1IDM4NC4xMTUgNDggMzg0LjExNUgyMDhDMjE2Ljg3NSAzODQuMTE1IDIyNCAzOTEuMjM0IDIyNCA0MDAuMTAxVjQ0OC4wNThMMjQ3LjEyNSA0NTkuNjcyQzI1Mi42MjUgNDYyLjI5NSAyNTYgNDY3LjkxNSAyNTYgNDczLjkwOVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjQuMDAyIDI4OC4yMDJINzguODc3Qzc2Ljg3NyAzMjAuNTQ4IDcxLjg3NyAzNTIuNjQ0IDY0LjAwMiAzODQuMTE1SDE5Mi4wMDJDMTg0LjEyNyAzNTIuNjQ0IDE3OS4xMjcgMzIwLjU0OCAxNzcuMTI3IDI4OC4yMDJIMTkyLjAwMkMyMDAuODc3IDI4OC4yMDIgMjA4LjAwMiAyODEuMDgzIDIwOC4wMDIgMjcyLjIxNlYyNTYuMjMxQzIwOC4wMDIgMjQ3LjM2NCAyMDAuODc3IDI0MC4yNDUgMTkyLjAwMiAyNDAuMjQ1SDE3NS41MDJDMjAzLjM3NyAyMTkuNzYzIDIxNC43NTIgMTgzLjY3MSAyMDQuMDAyIDE1MC45NUMxOTMuMTI3IDExOC4yMyAxNjIuNTAyIDk2IDEyOC4wMDIgOTZTNjIuODc3IDExOC4yMyA1Mi4wMDIgMTUwLjk1QzQxLjI1MiAxODMuNjcxIDUyLjYyNyAyMTkuNzYzIDgwLjUwMiAyNDAuMjQ1SDY0LjAwMkM1NS4xMjcgMjQwLjI0NSA0OC4wMDIgMjQ3LjM2NCA0OC4wMDIgMjU2LjIzMVYyNzIuMjE2QzQ4LjAwMiAyODEuMDgzIDU1LjEyNyAyODguMjAyIDY0LjAwMiAyODguMjAyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChessPawnPiece(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path class={generic.secondary} d="M256 473.909V496.014C256 504.881 248.875 512 240 512H16C7.125 512 0 504.881 0 496.014V473.909C0 467.915 3.375 462.295 8.875 459.672L32 448.058V400.101C32 391.234 39.125 384.115 48 384.115H208C216.875 384.115 224 391.234 224 400.101V448.058L247.125 459.672C252.625 462.295 256 467.915 256 473.909Z" />
            <path d="M64.002 288.202H78.877C76.877 320.548 71.877 352.644 64.002 384.115H192.002C184.127 352.644 179.127 320.548 177.127 288.202H192.002C200.877 288.202 208.002 281.083 208.002 272.216V256.231C208.002 247.364 200.877 240.245 192.002 240.245H175.502C203.377 219.763 214.752 183.671 204.002 150.95C193.127 118.23 162.502 96 128.002 96S62.877 118.23 52.002 150.95C41.252 183.671 52.627 219.763 80.502 240.245H64.002C55.127 240.245 48.002 247.364 48.002 256.231V272.216C48.002 281.083 55.127 288.202 64.002 288.202Z" />
        </Icon>
    </>
}