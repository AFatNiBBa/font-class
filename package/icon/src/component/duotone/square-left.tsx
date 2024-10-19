
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-left?s=duotone square-left}
 * @preview ![square-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2Wk0yMTQuMTI1IDEyOS4yMTlDMjIwLjEwOSAxMzEuNjg4IDIyNCAxMzcuNTMxIDIyNCAxNDRWMjA4SDMyMEMzMzcuNjczIDIwOCAzNTIgMjIyLjMyNyAzNTIgMjQwVjI3MkMzNTIgMjg5LjY3MyAzMzcuNjczIDMwNCAzMjAgMzA0SDIyNFYzNjhDMjI0IDM3NC40NjkgMjIwLjEwOSAzODAuMzEyIDIxNC4xMjUgMzgyLjc4MUMyMDguMTQxIDM4NS4yNjYgMjAxLjI2NiAzODMuODkxIDE5Ni42ODcgMzc5LjMxM0w4NC42ODcgMjY3LjMxM0M3OC40NCAyNjEuMDY1IDc4LjQ0IDI1MC45MzUgODQuNjg3IDI0NC42ODhMMTk2LjY4NyAxMzIuNjg4QzIwMS4yNjYgMTI4LjEwOSAyMDguMTQxIDEyNi43MzQgMjE0LjEyNSAxMjkuMjE5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMTQuMTIzIDEyOS4yMTlDMjIwLjEwOCAxMzEuNjg4IDIyMy45OTggMTM3LjUzMSAyMjMuOTk4IDE0NFYyMDhIMzE5Ljk5OEMzMzcuNjcxIDIwOCAzNTEuOTk4IDIyMi4zMjcgMzUxLjk5OCAyNDBWMjcyQzM1MS45OTggMjg5LjY3MyAzMzcuNjcxIDMwNCAzMTkuOTk4IDMwNEgyMjMuOTk4VjM2OEMyMjMuOTk4IDM3NC40NjkgMjIwLjEwOCAzODAuMzEyIDIxNC4xMjMgMzgyLjc4MUMyMDguMTM5IDM4NS4yNjYgMjAxLjI2NCAzODMuODkxIDE5Ni42ODYgMzc5LjMxM0w4NC42ODYgMjY3LjMxM0M3OC40MzggMjYxLjA2NSA3OC40MzggMjUwLjkzNSA4NC42ODYgMjQ0LjY4OEwxOTYuNjg2IDEzMi42ODhDMjAxLjI2NCAxMjguMTA5IDIwOC4xMzkgMTI2LjczNCAyMTQuMTIzIDEyOS4yMTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96ZM214.125 129.219C220.109 131.688 224 137.531 224 144V208H320C337.673 208 352 222.327 352 240V272C352 289.673 337.673 304 320 304H224V368C224 374.469 220.109 380.312 214.125 382.781C208.141 385.266 201.266 383.891 196.687 379.313L84.687 267.313C78.44 261.065 78.44 250.935 84.687 244.688L196.687 132.688C201.266 128.109 208.141 126.734 214.125 129.219Z" />
            <path d="M214.123 129.219C220.108 131.688 223.998 137.531 223.998 144V208H319.998C337.671 208 351.998 222.327 351.998 240V272C351.998 289.673 337.671 304 319.998 304H223.998V368C223.998 374.469 220.108 380.312 214.123 382.781C208.139 385.266 201.264 383.891 196.686 379.313L84.686 267.313C78.438 261.065 78.438 250.935 84.686 244.688L196.686 132.688C201.264 128.109 208.139 126.734 214.123 129.219Z" />
        </Icon>
    </>
}