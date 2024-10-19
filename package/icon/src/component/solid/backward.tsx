
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `backward` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/backward?s=solid backward}
 * @preview ![backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDguMDU1IDcxLjQwNkwyNzYuNTY1IDIxNC4yNzNWMjk3LjcyN0w0NDguMDU1IDQ0MC41OTRDNDY4LjY4MiA0NTcuNzE2IDUwMC41NjEgNDQzLjM0MyA1MDAuNTYxIDQxNS45NzNWOTYuMDI3QzUwMC41NjEgNjguNjU3IDQ2OC42ODIgNTQuMjg0IDQ0OC4wNTUgNzEuNDA2Wk0xOTIuMDIzIDcxLjQwNkwwIDIzMS4zNzlDLTE1LjI1MiAyNDQuMjUyIC0xNS4yNTIgMjY3Ljc0OCAwIDI4MC42MjFMMTkyLjAyMyA0NDAuNTk0QzIxMi42NTEgNDU3LjcxNiAyNDQuNTMgNDQzLjM0MyAyNDQuNTMgNDE1Ljk3M1Y5Ni4wMjdDMjQ0LjUzIDY4LjY1NyAyMTIuNjUxIDU0LjI4NCAxOTIuMDIzIDcxLjQwNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Backward(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448.055 71.406L276.565 214.273V297.727L448.055 440.594C468.682 457.716 500.561 443.343 500.561 415.973V96.027C500.561 68.657 468.682 54.284 448.055 71.406ZM192.023 71.406L0 231.379C-15.252 244.252 -15.252 267.748 0 280.621L192.023 440.594C212.651 457.716 244.53 443.343 244.53 415.973V96.027C244.53 68.657 212.651 54.284 192.023 71.406Z" />
        </Icon>
    </>
}