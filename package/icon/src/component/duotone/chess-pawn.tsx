
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=duotone chess-pawn}
 * @preview ![chess-pawn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA0OTZDMzIwIDUwNC44MzYgMzEyLjgzNiA1MTIgMzA0IDUxMkgxNkM3LjE2NCA1MTIgMCA1MDQuODM2IDAgNDk2QzAgNDc1LjEzMSAxMy40IDQ1Ny41NDkgMzIgNDUwLjkzOFY0MzJDMzIgNDIzLjE2MiAzOS4xNjQgNDE2IDQ4IDQxNkgyNzJDMjgwLjgzNiA0MTYgMjg4IDQyMy4xNjIgMjg4IDQzMlY0NTAuOTM4QzMwNi42IDQ1Ny41NDkgMzIwIDQ3NS4xMzEgMzIwIDQ5NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTA1LjEyNSAyMjRIODBDNzEuMTI1IDIyNCA2NCAyMzEuMTI1IDY0IDI0MFYyNzJDNjQgMjgwLjg3NSA3MS4xMjUgMjg4IDgwIDI4OEg5NlYyOTMuNUM5NiAzMzcuNSA5MS44NzUgMzgwLjEyNSA3MiA0MTZIMjQ4QzIyOC4xMjUgMzgwLjEyNSAyMjQgMzM3LjUgMjI0IDI5My41VjI4OEgyNDBDMjQ4Ljg3NSAyODggMjU2IDI4MC44NzUgMjU2IDI3MlYyNDBDMjU2IDIzMS4xMjUgMjQ4Ljg3NSAyMjQgMjQwIDIyNEgyMTQuODc1QzI0NC4yNSAyMDUuNjI1IDI2NCAxNzMuMjUgMjY0IDEzNkMyNjQgNzguNSAyMTcuNSAzMiAxNjAgMzJTNTYgNzguNSA1NiAxMzZDNTYgMTczLjI1IDc1Ljc1IDIwNS42MjUgMTA1LjEyNSAyMjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M320 496C320 504.836 312.836 512 304 512H16C7.164 512 0 504.836 0 496C0 475.131 13.4 457.549 32 450.938V432C32 423.162 39.164 416 48 416H272C280.836 416 288 423.162 288 432V450.938C306.6 457.549 320 475.131 320 496Z" />
            <path d="M105.125 224H80C71.125 224 64 231.125 64 240V272C64 280.875 71.125 288 80 288H96V293.5C96 337.5 91.875 380.125 72 416H248C228.125 380.125 224 337.5 224 293.5V288H240C248.875 288 256 280.875 256 272V240C256 231.125 248.875 224 240 224H214.875C244.25 205.625 264 173.25 264 136C264 78.5 217.5 32 160 32S56 78.5 56 136C56 173.25 75.75 205.625 105.125 224Z" />
    </Icon>
);

export default ChessPawn;