
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen-piece` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen-piece?s=solid chess-queen-piece}
 * @preview ![chess-queen-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02Ny4zNzUgMTkySDY0QzU1LjEyNSAxOTIgNDggMTk5LjEyNSA0OCAyMDhWMjI0QzQ4IDIzMi44NzUgNTUuMTI1IDI0MCA2NCAyNDBIODBWMjU0QzgwIDI5Ny44NzUgNzQuNjI1IDM0MS41IDY0IDM4NEgxOTJDMTgxLjM3NSAzNDEuNSAxNzYgMjk3Ljg3NSAxNzYgMjU0VjI0MEgxOTJDMjAwLjg3NSAyNDAgMjA4IDIzMi44NzUgMjA4IDIyNFYyMDhDMjA4IDE5OS4xMjUgMjAwLjg3NSAxOTIgMTkyIDE5MkgxODguNjI1TDIzMy4xMjUgOTYuMjVDMjM0LjYyNSA5My4yNSAyMzMuNjI1IDg5LjUgMjMwLjg3NSA4Ny42MjVMMjIwLjc1IDgxQzIxNy42MjUgNzguODc1IDIxMy42MjUgODAgMjExLjM3NSA4M0MyMDYuNzUgODkuMTI1IDE5OSA5Mi4xMjUgMTkxLjUgOTAuNjI1QzE4MS43NSA4OC43NSAxNzUuMTI1IDc5LjYyNSAxNzUuMTI1IDY5LjYyNUMxNzUuMTI1IDY2LjUgMTcyLjYyNSA2NCAxNjkuNSA2NEgxNTMuMjVDMTUwLjYyNSA2NCAxNDguMzc1IDY1LjYyNSAxNDcuNzUgNjguMTI1QzE0NS43NSA3Ny41IDEzNy41IDg0LjI1IDEyOCA4NC4yNVMxMTAuMjUgNzcuNSAxMDguMjUgNjguMTI1QzEwNy42MjUgNjUuNjI1IDEwNS4zNzUgNjQgMTAyLjc1IDY0SDg2LjVDODMuMzc1IDY0IDgwLjg3NSA2Ni41IDgwLjg3NSA2OS42MjVDODAuODc1IDgwLjUgNzIuODc1IDkwLjEyNSA2MiA5MC44NzVDNTUuMjUgOTEuMzc1IDQ4LjYyNSA4OC4zNzUgNDQuNSA4Mi44NzVDNDIuNSA3OS43NSAzOC4zNzUgNzkgMzUuMjUgODAuODc1TDI1LjEyNSA4Ny42MjVDMjIuMzc1IDg5LjUgMjEuMzc1IDkzLjI1IDIyLjg3NSA5Ni4yNUw2Ny4zNzUgMTkyWk0xMjggNDhDMTQxLjI1IDQ4IDE1MiAzNy4yNSAxNTIgMjRTMTQxLjI1IDAgMTI4IDBTMTA0IDEwLjc1IDEwNCAyNFMxMTQuNzUgNDggMTI4IDQ4Wk0yNDcuMTI1IDQ1OS42MjVMMjI0IDQ0OFY0MzJDMjI0IDQyMy4xMjUgMjE2Ljg3NSA0MTYgMjA4IDQxNkg0OEMzOS4xMjUgNDE2IDMyIDQyMy4xMjUgMzIgNDMyVjQ0OEw4Ljg3NSA0NTkuNjI1QzMuMzc1IDQ2Mi4yNSAwIDQ2Ny44NzUgMCA0NzMuODc1VjQ5NkMwIDUwNC44NzUgNy4xMjUgNTEyIDE2IDUxMkgyNDBDMjQ4Ljg3NSA1MTIgMjU2IDUwNC44NzUgMjU2IDQ5NlY0NzMuODc1QzI1NiA0NjcuODc1IDI1Mi42MjUgNDYyLjI1IDI0Ny4xMjUgNDU5LjYyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChessQueenPiece(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M67.375 192H64C55.125 192 48 199.125 48 208V224C48 232.875 55.125 240 64 240H80V254C80 297.875 74.625 341.5 64 384H192C181.375 341.5 176 297.875 176 254V240H192C200.875 240 208 232.875 208 224V208C208 199.125 200.875 192 192 192H188.625L233.125 96.25C234.625 93.25 233.625 89.5 230.875 87.625L220.75 81C217.625 78.875 213.625 80 211.375 83C206.75 89.125 199 92.125 191.5 90.625C181.75 88.75 175.125 79.625 175.125 69.625C175.125 66.5 172.625 64 169.5 64H153.25C150.625 64 148.375 65.625 147.75 68.125C145.75 77.5 137.5 84.25 128 84.25S110.25 77.5 108.25 68.125C107.625 65.625 105.375 64 102.75 64H86.5C83.375 64 80.875 66.5 80.875 69.625C80.875 80.5 72.875 90.125 62 90.875C55.25 91.375 48.625 88.375 44.5 82.875C42.5 79.75 38.375 79 35.25 80.875L25.125 87.625C22.375 89.5 21.375 93.25 22.875 96.25L67.375 192ZM128 48C141.25 48 152 37.25 152 24S141.25 0 128 0S104 10.75 104 24S114.75 48 128 48ZM247.125 459.625L224 448V432C224 423.125 216.875 416 208 416H48C39.125 416 32 423.125 32 432V448L8.875 459.625C3.375 462.25 0 467.875 0 473.875V496C0 504.875 7.125 512 16 512H240C248.875 512 256 504.875 256 496V473.875C256 467.875 252.625 462.25 247.125 459.625Z" />
        </Icon>
    </>
}