
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbs-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-down?s=duotone thumbs-down}
 * @preview ![thumbs-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2Ny4yNzUgMjQwLjIzOUM0NzUuMTA3IDIzMS43MDIgNDgwIDIyMC40MjMgNDgwIDIwNy45MjNDNDgwIDE4NC40NTMgNDYzLjEzMSAxNjQuOTk4IDQ0MC44NjEgMTYwLjgzNkM0NDUuMzAzIDE1My41NjIgNDQ4IDE0NS4xMDMgNDQ4IDEzNS45NTVDNDQ4IDExNC42MyA0MzQgOTYuNzcyIDQxNC43NTQgOTAuNTI1QzQxNS41MiA4Ny4xMjIgNDE2IDgzLjYxNCA0MTYgNzkuOTc5QzQxNiA1My40NzUgMzk0LjUxNiAzMiAzNjggMzJIMzA5LjMwOUMyNzQuNzAyIDMyIDI0MS4wMjcgNDMuMjIxIDIxMy4zMzYgNjMuOThMMTc5LjE5OCA4OS41NzNDMTY3LjExMyA5OC42MzIgMTYwIDExMi44NTQgMTYwIDEyNy45NThWMjg3Ljg4OEMxNjAgMjg3Ljg4OCAxNjAuMTkxIDI4OC4wNzkgMTYwLjIxNSAyODguMTAzQzE2MC4yODUgMzAyLjA5NyAxNjYuMjMgMzE1Ljk0IDE3OC4wMTYgMzI1LjM1NkwxOTQuMzEyIDMzOC4zODJDMjc2LjE3NiA0MDMuODUyIDIzOS40MTEgNDgwIDMwMi41NCA0ODBDMzMzLjQ5NSA0ODAgMzUyLjAwNSA0NTUuNDc3IDM1Mi4wMDUgNDMxLjg5QzM1Mi4wMDUgNDE2Ljc0MyAzNDAuMjUgMzczLjc3NCAzMTcuNDgyIDMzNS44NjdINDY0QzQ5MC41MTYgMzM1Ljg2NyA1MTIgMzE0LjM5MiA1MTIgMjg3Ljg4OEM1MTIgMjYyLjUwNSA0OTIuMjM0IDI0MS45NDkgNDY3LjI3NSAyNDAuMjM5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik05NiAzMkgzMkMxNC4zMjYgMzIgMCA0Ni4zMjYgMCA2NFYyODhDMCAzMDUuNjcyIDE0LjMyNiAzMjAgMzIgMzIwSDk2QzExMy42NzQgMzIwIDEyOCAzMDUuNjcyIDEyOCAyODhWNjRDMTI4IDQ2LjMyNiAxMTMuNjc0IDMyIDk2IDMyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const ThumbsDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M467.275 240.239C475.107 231.702 480 220.423 480 207.923C480 184.453 463.131 164.998 440.861 160.836C445.303 153.562 448 145.103 448 135.955C448 114.63 434 96.772 414.754 90.525C415.52 87.122 416 83.614 416 79.979C416 53.475 394.516 32 368 32H309.309C274.702 32 241.027 43.221 213.336 63.98L179.198 89.573C167.113 98.632 160 112.854 160 127.958V287.888C160 287.888 160.191 288.079 160.215 288.103C160.285 302.097 166.23 315.94 178.016 325.356L194.312 338.382C276.176 403.852 239.411 480 302.54 480C333.495 480 352.005 455.477 352.005 431.89C352.005 416.743 340.25 373.774 317.482 335.867H464C490.516 335.867 512 314.392 512 287.888C512 262.505 492.234 241.949 467.275 240.239Z" />
            <path d="M96 32H32C14.326 32 0 46.326 0 64V288C0 305.672 14.326 320 32 320H96C113.674 320 128 305.672 128 288V64C128 46.326 113.674 32 96 32Z" />
    </Icon>
);

export default ThumbsDown;