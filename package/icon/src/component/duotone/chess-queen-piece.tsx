
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chess-queen-piece` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=duotone chess-queen-piece}
 * @preview ![chess-queen-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0Ny4xMjUgNDU5LjYyNUwyMjQgNDQ4VjQwMEMyMjQgMzkxLjEyNSAyMTYuODc1IDM4NCAyMDggMzg0SDQ4QzM5LjEyNSAzODQgMzIgMzkxLjEyNSAzMiA0MDBWNDQ4TDguODc1IDQ1OS42MjVDMy4zNzUgNDYyLjI1IDAgNDY3Ljg3NSAwIDQ3My44NzVWNDk2QzAgNTA0Ljg3NSA3LjEyNSA1MTIgMTYgNTEySDI0MEMyNDguODc1IDUxMiAyNTYgNTA0Ljg3NSAyNTYgNDk2VjQ3My44NzVDMjU2IDQ2Ny44NzUgMjUyLjYyNSA0NjIuMjUgMjQ3LjEyNSA0NTkuNjI1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMzAuNjk3IDg3LjYyNUwyMjAuNTcyIDgxQzIxNy40NDcgNzguODc1IDIxMy40NDcgODAgMjExLjE5NyA4M0MyMDYuNTcyIDg5LjEyNSAxOTguODIyIDkyLjEyNSAxOTEuMzIyIDkwLjYyNUMxODEuNTcyIDg4Ljc1IDE3NC45NDcgNzkuNjI1IDE3NC45NDcgNjkuNjI1QzE3NC45NDcgNjYuNSAxNzIuNDQ3IDY0IDE2OS4zMjIgNjRIMTUzLjA3MkMxNTAuNDQ3IDY0IDE0OC4xOTcgNjUuNjI1IDE0Ny41NzIgNjguMTI1QzE0NS41NzIgNzcuNSAxMzcuMzIyIDg0LjI1IDEyNy44MjIgODQuMjVTMTEwLjA3MiA3Ny41IDEwOC4wNzIgNjguMTI1QzEwNy40NDcgNjUuNjI1IDEwNS4xOTcgNjQgMTAyLjU3MiA2NEg4Ni4zMjJDODMuMTk3IDY0IDgwLjY5NyA2Ni41IDgwLjY5NyA2OS42MjVDODAuNjk3IDgwLjUgNzIuNjk3IDkwLjEyNSA2MS44MjIgOTAuODc1QzU1LjA3MiA5MS4zNzUgNDguNDQ3IDg4LjM3NSA0NC4zMjIgODIuODc1QzQyLjMyMiA3OS43NSAzOC4xOTcgNzkgMzUuMDcyIDgwLjg3NUwyNC45NDcgODcuNjI1QzIyLjE5NyA4OS41IDIxLjE5NyA5My4yNSAyMi42OTcgOTYuMjVMNjcuMTk3IDE5Mkg2My44MjJDNTQuOTQ3IDE5MiA0Ny44MjIgMTk5LjEyNSA0Ny44MjIgMjA4VjIyNEM0Ny44MjIgMjMyLjg3NSA1NC45NDcgMjQwIDYzLjgyMiAyNDBINzkuODIyVjI1NEM3OS44MjIgMjk3Ljg3NSA3NC40NDcgMzQxLjUgNjMuODIyIDM4NEgxOTEuODIyQzE4MS4xOTcgMzQxLjUgMTc1LjgyMiAyOTcuODc1IDE3NS44MjIgMjU0VjI0MEgxOTEuODIyQzIwMC42OTcgMjQwIDIwNy44MjIgMjMyLjg3NSAyMDcuODIyIDIyNFYyMDhDMjA3LjgyMiAxOTkuMTI1IDIwMC42OTcgMTkyIDE5MS44MjIgMTkySDE4OC40NDdMMjMyLjk0NyA5Ni4yNUMyMzQuNDQ3IDkzLjI1IDIzMy40NDcgODkuNSAyMzAuNjk3IDg3LjYyNVpNMTI3LjgyMiA0OEMxNDEuMDcyIDQ4IDE1MS44MjIgMzcuMjUgMTUxLjgyMiAyNFMxNDEuMDcyIDAgMTI3LjgyMiAwUzEwMy44MjIgMTAuNzUgMTAzLjgyMiAyNFMxMTQuNTcyIDQ4IDEyNy44MjIgNDhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChessQueenPiece(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path class={generic.secondary} d="M247.125 459.625L224 448V400C224 391.125 216.875 384 208 384H48C39.125 384 32 391.125 32 400V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H240C248.875 512 256 504.875 256 496V473.875C256 467.875 252.625 462.25 247.125 459.625Z" />
            <path d="M230.697 87.625L220.572 81C217.447 78.875 213.447 80 211.197 83C206.572 89.125 198.822 92.125 191.322 90.625C181.572 88.75 174.947 79.625 174.947 69.625C174.947 66.5 172.447 64 169.322 64H153.072C150.447 64 148.197 65.625 147.572 68.125C145.572 77.5 137.322 84.25 127.822 84.25S110.072 77.5 108.072 68.125C107.447 65.625 105.197 64 102.572 64H86.322C83.197 64 80.697 66.5 80.697 69.625C80.697 80.5 72.697 90.125 61.822 90.875C55.072 91.375 48.447 88.375 44.322 82.875C42.322 79.75 38.197 79 35.072 80.875L24.947 87.625C22.197 89.5 21.197 93.25 22.697 96.25L67.197 192H63.822C54.947 192 47.822 199.125 47.822 208V224C47.822 232.875 54.947 240 63.822 240H79.822V254C79.822 297.875 74.447 341.5 63.822 384H191.822C181.197 341.5 175.822 297.875 175.822 254V240H191.822C200.697 240 207.822 232.875 207.822 224V208C207.822 199.125 200.697 192 191.822 192H188.447L232.947 96.25C234.447 93.25 233.447 89.5 230.697 87.625ZM127.822 48C141.072 48 151.822 37.25 151.822 24S141.072 0 127.822 0S103.822 10.75 103.822 24S114.572 48 127.822 48Z" />
        </Icon>
    </>
}