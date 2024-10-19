
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chess-bishop` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=duotone chess-bishop}
 * @preview ![chess-bishop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA0OTZDMzIwIDUwNC44MzYgMzEyLjgzNiA1MTIgMzA0IDUxMkgxNkM3LjE2NCA1MTIgMCA1MDQuODM2IDAgNDk2QzAgNDc1LjEzMSAxMy40IDQ1Ny41NDkgMzIgNDUwLjkzOFY0MzJDMzIgNDIzLjE2MiAzOS4xNjQgNDE2IDQ4IDQxNkgyNzJDMjgwLjgzNiA0MTYgMjg4IDQyMy4xNjIgMjg4IDQzMlY0NTAuOTM4QzMwNi42IDQ1Ny41NDkgMzIwIDQ3NS4xMzEgMzIwIDQ5NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzEyIDI4Ny44NzVDMzEyIDMzOS41IDI4OS44NzUgMzYxLjc1IDI1NiAzNzIuNVY0MTZINjRWMzcyLjVDMzAuMTI1IDM2MS43NSA4IDMzOS41IDggMjg3Ljg3NUM4IDIxNC41IDY3Ljc1IDEwNi43NSAxMjAuNjI1IDYyLjVDMTA2LjYyNSA1OS4xMjUgOTYgNDcgOTYgMzJDOTYgMTQuMzc1IDExMC4zNzUgMCAxMjggMEgxOTJDMjA5LjYyNSAwIDIyNCAxNC4zNzUgMjI0IDMyQzIyNCA0NyAyMTMuMzc1IDU5LjEyNSAxOTkuMzc1IDYyLjVDMjIzLjc1IDgzIDI0OS41IDExNy4yNSAyNzAuMjUgMTU1LjEyNUwxNjIuMzc1IDI2M0MxNTkuMjUgMjY2LjEyNSAxNTkuMjUgMjcxLjI1IDE2Mi4zNzUgMjc0LjM3NUwxNzMuNzUgMjg1LjYyNUMxNzYuODc1IDI4OC43NSAxODEuODc1IDI4OC43NSAxODUgMjg1LjYyNUwyODUuMjUgMTg1LjM3NUMzMDEuMjUgMjIwLjc1IDMxMiAyNTcuMjUgMzEyIDI4Ny44NzVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChessBishop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path opacity={.4} d="M320 496C320 504.836 312.836 512 304 512H16C7.164 512 0 504.836 0 496C0 475.131 13.4 457.549 32 450.938V432C32 423.162 39.164 416 48 416H272C280.836 416 288 423.162 288 432V450.938C306.6 457.549 320 475.131 320 496Z" />
            <path d="M312 287.875C312 339.5 289.875 361.75 256 372.5V416H64V372.5C30.125 361.75 8 339.5 8 287.875C8 214.5 67.75 106.75 120.625 62.5C106.625 59.125 96 47 96 32C96 14.375 110.375 0 128 0H192C209.625 0 224 14.375 224 32C224 47 213.375 59.125 199.375 62.5C223.75 83 249.5 117.25 270.25 155.125L162.375 263C159.25 266.125 159.25 271.25 162.375 274.375L173.75 285.625C176.875 288.75 181.875 288.75 185 285.625L285.25 185.375C301.25 220.75 312 257.25 312 287.875Z" />
        </Icon>
    </>
}