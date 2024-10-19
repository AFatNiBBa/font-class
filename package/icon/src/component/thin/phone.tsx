
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `phone` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone?s=thin phone}
 * @preview ![phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMDk0IDM1MS4yNDhMMzg0LjYwOSAzMDQuNzQ4QzM3MS44MjggMjk5LjIxNyAzNTYuODEzIDMwMi45MzYgMzQ4LjEyNSAzMTMuNzE3TDMwNC4wNzggMzY3LjUyOUMyMzQuODI4IDMzMy41MjkgMTc4LjUzMSAyNzcuMjQ4IDE0NC41NDcgMjA4LjAyOUwxOTguMzc1IDE2My45MzRDMjA5LjEyNSAxNTUuMTUyIDIxMi43OTcgMTQwLjI3NyAyMDcuMzU5IDEyNy40OTZMMTYwLjgyOCAxOC45MzRDMTU0LjczNCA1LjAyNyAxMzkuNjU2IC0yLjU5OCAxMjQuOTY5IDAuODA5TDI0LjIxOSAyNC4wNTlDOS45NjkgMjcuMzA5IDAgMzkuODQgMCA1NC40OTZDMCAzMDYuNzc5IDIwNS4yMzQgNTEyIDQ1Ny40ODQgNTEyQzQ3Mi4xNTYgNTEyIDQ4NC42ODggNTAyLjAzMSA0ODcuOTUzIDQ4Ny43ODFMNTExLjIwMyAzODdDNTE0LjU3OCAzNzIuNDA2IDUwNyAzNTcuMjQ4IDQ5My4wOTQgMzUxLjI0OFpNNDk1LjYwOSAzODMuNDA2TDQ3Mi4zNTkgNDg0LjE4OEM0NzAuNzY2IDQ5MS4xMjUgNDY0LjY0MSA0OTYgNDU3LjQ4NCA0OTZDMjE0LjA0NyA0OTYgMTYgMjk3LjkzNiAxNiA1NC40OTZDMTYgNDcuMzQgMjAuODU5IDQxLjI0NiAyNy44MTIgMzkuNjIxTDEyOC41NjIgMTYuMzcxQzEzNS43NjYgMTQuNzE1IDE0My4xNzIgMTguNDk2IDE0Ni4xNDEgMjUuMzA5TDE5Mi42NTYgMTMzLjgwOUMxOTUuMzE2IDE0MC4wNTMgMTkzLjQ0MyAxNDcuMzA3IDE4OC4yNSAxNTEuNTU5TDEyNC43MTkgMjAzLjU2MUMxODcuMDM1IDMzNy4wNDUgMjkzLjM3NSAzODAuMjg5IDMwOC41MzEgMzg3LjM0NEwzNjAuNTQ3IDMyMy44MTFDMzY0Ljc2NiAzMTguNTYxIDM3Mi4wNjIgMzE2Ljc0OCAzNzguMjgxIDMxOS40MzZMNDg2Ljc2NiAzNjUuOTM2QzQ5My41NDcgMzY4Ljg3NSA0OTcuMjUgMzc2LjI4MSA0OTUuNjA5IDM4My40MDZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Phone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.094 351.248L384.609 304.748C371.828 299.217 356.813 302.936 348.125 313.717L304.078 367.529C234.828 333.529 178.531 277.248 144.547 208.029L198.375 163.934C209.125 155.152 212.797 140.277 207.359 127.496L160.828 18.934C154.734 5.027 139.656 -2.598 124.969 0.809L24.219 24.059C9.969 27.309 0 39.84 0 54.496C0 306.779 205.234 512 457.484 512C472.156 512 484.688 502.031 487.953 487.781L511.203 387C514.578 372.406 507 357.248 493.094 351.248ZM495.609 383.406L472.359 484.188C470.766 491.125 464.641 496 457.484 496C214.047 496 16 297.936 16 54.496C16 47.34 20.859 41.246 27.812 39.621L128.562 16.371C135.766 14.715 143.172 18.496 146.141 25.309L192.656 133.809C195.316 140.053 193.443 147.307 188.25 151.559L124.719 203.561C187.035 337.045 293.375 380.289 308.531 387.344L360.547 323.811C364.766 318.561 372.062 316.748 378.281 319.436L486.766 365.936C493.547 368.875 497.25 376.281 495.609 383.406Z" />
        </Icon>
    </>
}