
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-xmark` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-xmark?s=thin message-xmark}
 * @preview ![message-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk0VjM1MS45NzFDMCAzODcuMjE5IDI4Ljc1IDQxNS45NjcgNjQgNDE1Ljk2N0gxNjBWNDk5Ljk1OUMxNjAgNTA3LjAzMSAxNjUuOTIyIDUxMiAxNzIuMTggNTEyQzE3NC41NDcgNTEyIDE3Ni45NjEgNTExLjI4NyAxNzkuMTI1IDUwOS43MDlMMzA0IDQxNS45NjdINDQ4QzQ4My4yNSA0MTUuOTY3IDUxMiAzODcuMjE5IDUxMiAzNTEuOTcxVjYzLjk5NEM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk00OTYgMzUxLjk3MUM0OTYgMzc4LjQzNiA0NzQuNDY5IDM5OS45NjcgNDQ4IDM5OS45NjdIMjk4LjY2NEwyOTQuMzk1IDQwMy4xNzJMMTc2IDQ5Mi4wNTNWMzk5Ljk2N0g2NEMzNy41MzEgMzk5Ljk2NyAxNiAzNzguNDM2IDE2IDM1MS45NzFWNjMuOTk0QzE2IDM3LjUyOSAzNy41MzEgMTUuOTk4IDY0IDE1Ljk5OEg0NDhDNDc0LjQ2OSAxNS45OTggNDk2IDM3LjUyOSA0OTYgNjMuOTk0VjM1MS45NzFaTTMzMy42NTYgMTMwLjM0NEMzMzAuNTMxIDEyNy4yMTkgMzI1LjQ2OSAxMjcuMjE5IDMyMi4zNDQgMTMwLjM0NEwyNTYgMTk2LjY4NkwxODkuNjU2IDEzMC4zNDRDMTg2LjUzMSAxMjcuMjE5IDE4MS40NjkgMTI3LjIxOSAxNzguMzQ0IDEzMC4zNDRTMTc1LjIxOSAxMzguNTMxIDE3OC4zNDQgMTQxLjY1NkwyNDQuNjg4IDIwNy45OThMMTc4LjM0NCAyNzQuMzQyQzE3NS4yMTkgMjc3LjQ2NyAxNzUuMjE5IDI4Mi41MjkgMTc4LjM0NCAyODUuNjU0QzE4MS40NjkgMjg4Ljc4MSAxODYuNTMxIDI4OC43ODEgMTg5LjY1NiAyODUuNjU0TDI1NiAyMTkuMzExTDMyMi4zNDQgMjg1LjY1NEMzMjUuNDY5IDI4OC43ODEgMzMwLjUzMSAyODguNzgxIDMzMy42NTYgMjg1LjY1NEMzMzYuNzgxIDI4Mi41MjkgMzM2Ljc4MSAyNzcuNDY3IDMzMy42NTYgMjc0LjM0MkwyNjcuMzEyIDIwNy45OThMMzMzLjY1NiAxNDEuNjU2QzMzNi43ODEgMTM4LjUzMSAzMzYuNzgxIDEzMy40NjkgMzMzLjY1NiAxMzAuMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.922 512 172.18 512C174.547 512 176.961 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM496 351.971C496 378.436 474.469 399.967 448 399.967H298.664L294.395 403.172L176 492.053V399.967H64C37.531 399.967 16 378.436 16 351.971V63.994C16 37.529 37.531 15.998 64 15.998H448C474.469 15.998 496 37.529 496 63.994V351.971ZM333.656 130.344C330.531 127.219 325.469 127.219 322.344 130.344L256 196.686L189.656 130.344C186.531 127.219 181.469 127.219 178.344 130.344S175.219 138.531 178.344 141.656L244.688 207.998L178.344 274.342C175.219 277.467 175.219 282.529 178.344 285.654C181.469 288.781 186.531 288.781 189.656 285.654L256 219.311L322.344 285.654C325.469 288.781 330.531 288.781 333.656 285.654C336.781 282.529 336.781 277.467 333.656 274.342L267.312 207.998L333.656 141.656C336.781 138.531 336.781 133.469 333.656 130.344Z" />
        </Icon>
    </>
}