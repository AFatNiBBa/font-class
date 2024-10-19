
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `phone-plus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-plus?s=solid phone-plus}
 * @preview ![phone-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMDk0IDM1MS4yNDhMMzg0LjYwOSAzMDQuNzQ4QzM3MS44MjggMjk5LjIxNyAzNTYuODEzIDMwMi45MzYgMzQ4LjEyNSAzMTMuNzE3TDMwNC4wNzggMzY3LjUyOUMyMzQuODI4IDMzMy41MjkgMTc4LjUzMSAyNzcuMjQ4IDE0NC41NDcgMjA4LjAyOUwxOTguMzc1IDE2My45MzRDMjA5LjEyNSAxNTUuMTUyIDIxMi43OTcgMTQwLjI3NyAyMDcuMzU5IDEyNy40OTZMMTYwLjgyOCAxOC45MzRDMTU0LjczNCA1LjAyNyAxMzkuNjU2IC0yLjU5OCAxMjQuOTY5IDAuODA5TDI0LjIxOSAyNC4wNTlDOS45NjkgMjcuMzA5IDAgMzkuODQgMCA1NC40OTZDMCAzMDYuNzc5IDIwNS4yMzQgNTEyIDQ1Ny40ODQgNTEyQzQ3Mi4xNTYgNTEyIDQ4NC42ODggNTAyLjAzMSA0ODcuOTUzIDQ4Ny43ODFMNTExLjIwMyAzODYuOTk4QzUxNC41NzggMzcyLjQwNCA1MDcgMzU3LjI0OCA0OTMuMDk0IDM1MS4yNDhaTTM0NCAxMTkuOTk4SDM5MlYxNjguMDAyQzM5MiAxODEuMjU4IDQwMi43MzQgMTkyIDQxNiAxOTJDNDI5LjI1OCAxOTIgNDQwIDE4MS4yNjIgNDQwIDE2OC4wMDJWMTE5Ljk5OEg0ODhDNTAxLjI2MiAxMTkuOTk4IDUxMiAxMDkuMjU4IDUxMiA5NlM1MDEuMjYyIDcyLjAwMiA0ODggNzIuMDAySDQ0MFYyMy45OThDNDQwIDEwLjczOCA0MjkuMjU4IDAgNDE2IDBTMzkyIDEwLjczOCAzOTIgMjMuOTk4VjcyLjAwMkgzNDRDMzMwLjczOCA3Mi4wMDIgMzIwIDgyLjc0MiAzMjAgOTZDMzIwIDEwOS4yNTYgMzMwLjczIDExOS45OTggMzQ0IDExOS45OThaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PhonePlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.094 351.248L384.609 304.748C371.828 299.217 356.813 302.936 348.125 313.717L304.078 367.529C234.828 333.529 178.531 277.248 144.547 208.029L198.375 163.934C209.125 155.152 212.797 140.277 207.359 127.496L160.828 18.934C154.734 5.027 139.656 -2.598 124.969 0.809L24.219 24.059C9.969 27.309 0 39.84 0 54.496C0 306.779 205.234 512 457.484 512C472.156 512 484.688 502.031 487.953 487.781L511.203 386.998C514.578 372.404 507 357.248 493.094 351.248ZM344 119.998H392V168.002C392 181.258 402.734 192 416 192C429.258 192 440 181.262 440 168.002V119.998H488C501.262 119.998 512 109.258 512 96S501.262 72.002 488 72.002H440V23.998C440 10.738 429.258 0 416 0S392 10.738 392 23.998V72.002H344C330.738 72.002 320 82.742 320 96C320 109.256 330.73 119.998 344 119.998Z" />
        </Icon>
    </>
}