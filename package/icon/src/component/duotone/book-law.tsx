
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `book-law` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-law?s=duotone book-law}
 * @preview ![book-law](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAzODRWNDQ4SDk2Qzc4LjMyNiA0NDggNjQgNDMzLjY3MiA2NCA0MTZDNjQgMzk4LjMyNiA3OC4zMjYgMzg0IDk2IDM4NEg0MTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIzNS45MzggMTcxLjIzNEwyMjguNDY5IDE2OS4yODFDMjI3LjYxNyAxNjkuMDU1IDIyNi41MzEgMTY4Ljc0IDIyNS42MTMgMTY4LjQ5MkMyMTYuOTM4IDE2OS42NzYgMjAyLjU5NCAxNzMuMzAxIDIwMC40MzggMTg0LjU3OEMxOTguNjU2IDE5My44NDQgMjAwLjIxOSAyMDAuNjQxIDIzNi42ODggMjEwLjM0NEwyNDMuOTY5IDIxMi4yNUMyNDcuMjY2IDIxMy4xMDQgMjUwLjgwNSAyMTQuMDM3IDI1NC4zODMgMjE1LjAyNUMyNjMuMDg2IDIxMy44NTcgMjc3LjQwNiAyMTAuMjQ4IDI3OS41NjMgMTk4Ljk2OUMyODIgMTg2LjIxOSAyNzMuODQ0IDE4MS4wMzEgMjM1LjkzOCAxNzEuMjM0Wk05NiAzODRINDI0QzQzNy4yNTQgMzg0IDQ0OCAzNzMuMjU0IDQ0OCAzNjBWMzJDNDQ4IDE0LjMyOCA0MzMuNjcyIDAgNDE2IDBIOTZDNDIuOTggMCAwIDQyLjk4IDAgOTZWNDE2QzAgNDY5LjAyIDQyLjk4IDUxMiA5NiA1MTJINDI0QzQzNy4yNTQgNTEyIDQ0OCA1MDEuMjU0IDQ0OCA0ODhWNDcyQzQ0OCA0NTguNzQyIDQzNy4yNTQgNDQ4IDQyNCA0NDhIOTZDNzguMzI4IDQ0OCA2NCA0MzMuNjcyIDY0IDQxNlM3OC4zMjggMzg0IDk2IDM4NFpNMjM1LjkzOCAyNDMuMjM0TDIyOC40NjkgMjQxLjI4MUMyMDYuMzc1IDIzNS4zOTEgMTYwLjQ2OSAyMjMuMTcyIDE2OSAxNzguNTYyQzE3MS4xNDEgMTY3LjQgMTc2Ljk0OSAxNTguMTE3IDE4NS42NTIgMTUxLjAyNUMxNzMuNDA2IDE0MS42NTggMTY0LjkyMiAxMjcuODc5IDE2OSAxMDYuNTYyQzE3NS4wNjIgNzQuODEyIDIwOS40MzggNTguNTQ3IDI1Ni41MzEgNjUuMjE5QzI2NC44NzUgNjYuNDA2IDI3NC41IDY4LjczNCAyODYuNzUgNzIuNTYyQzI5NS4xODggNzUuMjAzIDI5OS45MDYgODQuMTcyIDI5Ny4yODEgOTIuNjA5QzI5NC42NTYgMTAxLjAzMSAyODUuNTk0IDEwNS43NSAyNzcuMjUgMTAzLjEyNUMyNjYuNjU2IDk5LjgxMiAyNTguNjI1IDk3Ljg0NCAyNTIuMDMxIDk2LjkwNkMyMjQuMjE5IDkyLjg3NSAyMDIuOTM4IDk5LjQwNiAyMDAuNDM4IDExMi41NzhDMTk4LjY1NiAxMjEuODQ0IDIwMC4yMTkgMTI4LjY0MSAyMzYuNjg4IDEzOC4zNDRMMjQzLjk2OSAxNDAuMjVDMjc0LjA5NCAxNDguMDQ3IDMxOS42MjUgMTU5LjgxMiAzMTEgMjA0Ljk2OUMzMDguODU5IDIxNi4xNiAzMDMuMDM5IDIyNS40NjkgMjk0LjMyIDIzMi41NjJDMzA2Ljk1MyAyNDIuMDg4IDMxNS4wNTEgMjU1Ljc1OCAzMTEgMjc2Ljk2OUMzMDUuODQ0IDMwNC4wMTYgMjgwLjE4OCAzMTkuODEyIDI0My42NTYgMzE5LjgxMkMyMzcuMjUgMzE5LjgxMiAyMzAuNSAzMTkuMzI4IDIyMy40NjkgMzE4LjMyOEMyMTAuNTMxIDMxNi41NDcgMTk2Ljg3NSAzMTIuMTA5IDE4NC44NDQgMzA4LjIwM0wxNzkuMTI1IDMwNi4zNDRDMTcwLjcxOSAzMDMuNjU2IDE2Ni4wNjIgMjk0LjY1NiAxNjguNzUgMjg2LjIzNEMxNzEuNDY5IDI3Ny44MTIgMTgwLjQ2OSAyNzMuMTI1IDE4OC44NzUgMjc1Ljg3NUwxOTQuNzUgMjc3Ljc2NkMyMDUuNSAyODEuMjY2IDIxNy42ODcgMjg1LjIzNCAyMjcuODc1IDI4Ni42MjVDMjU1LjkwNiAyOTAuNTQ3IDI3Ny4wNjIgMjg0LjE1NiAyNzkuNTYyIDI3MC45NjlDMjgyIDI1OC4yMTkgMjczLjg0NCAyNTMuMDMxIDIzNS45MzggMjQzLjIzNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BookLaw(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M416 384V448H96C78.326 448 64 433.672 64 416C64 398.326 78.326 384 96 384H416Z" />
            <path d="M235.938 171.234L228.469 169.281C227.617 169.055 226.531 168.74 225.613 168.492C216.938 169.676 202.594 173.301 200.438 184.578C198.656 193.844 200.219 200.641 236.688 210.344L243.969 212.25C247.266 213.104 250.805 214.037 254.383 215.025C263.086 213.857 277.406 210.248 279.563 198.969C282 186.219 273.844 181.031 235.938 171.234ZM96 384H424C437.254 384 448 373.254 448 360V32C448 14.328 433.672 0 416 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 458.742 437.254 448 424 448H96C78.328 448 64 433.672 64 416S78.328 384 96 384ZM235.938 243.234L228.469 241.281C206.375 235.391 160.469 223.172 169 178.562C171.141 167.4 176.949 158.117 185.652 151.025C173.406 141.658 164.922 127.879 169 106.562C175.062 74.812 209.438 58.547 256.531 65.219C264.875 66.406 274.5 68.734 286.75 72.562C295.188 75.203 299.906 84.172 297.281 92.609C294.656 101.031 285.594 105.75 277.25 103.125C266.656 99.812 258.625 97.844 252.031 96.906C224.219 92.875 202.938 99.406 200.438 112.578C198.656 121.844 200.219 128.641 236.688 138.344L243.969 140.25C274.094 148.047 319.625 159.812 311 204.969C308.859 216.16 303.039 225.469 294.32 232.562C306.953 242.088 315.051 255.758 311 276.969C305.844 304.016 280.188 319.812 243.656 319.812C237.25 319.812 230.5 319.328 223.469 318.328C210.531 316.547 196.875 312.109 184.844 308.203L179.125 306.344C170.719 303.656 166.062 294.656 168.75 286.234C171.469 277.812 180.469 273.125 188.875 275.875L194.75 277.766C205.5 281.266 217.687 285.234 227.875 286.625C255.906 290.547 277.062 284.156 279.562 270.969C282 258.219 273.844 253.031 235.938 243.234Z" />
        </Icon>
    </>
}