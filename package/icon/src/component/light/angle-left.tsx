
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-left` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-left?s=light angle-left}
 * @preview ![angle-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDMuODkzIDQwNS4yNzFDMjA5Ljc3IDQxMS44NjUgMjA5LjI1NCA0MjEuOTU5IDIwMi43MDUgNDI3Ljg5NkMxOTYuMTQzIDQzMy44MDMgMTg2LjAxOCA0MzMuMjcxIDE4MC4xMTEgNDI2LjcwOUwzNi4xMDIgMjY2LjcxOUMzMC42MzMgMjYwLjU5NCAzMC42MzMgMjUxLjQwNiAzNi4xMDIgMjQ1LjI4MUwxODAuMTExIDg1LjI5MUMxODYuMDE4IDc4LjcyOSAxOTYuMTQzIDc4LjE5NyAyMDIuNzA1IDg0LjEwNEMyMDkuNjIzIDkwLjM3NSAyMDkuNDg4IDEwMC40OTggMjAzLjg5MyAxMDYuNzI5TDY5LjUyNSAyNTZMMjAzLjg5MyA0MDUuMjcxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AngleLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M203.893 405.271C209.77 411.865 209.254 421.959 202.705 427.896C196.143 433.803 186.018 433.271 180.111 426.709L36.102 266.719C30.633 260.594 30.633 251.406 36.102 245.281L180.111 85.291C186.018 78.729 196.143 78.197 202.705 84.104C209.623 90.375 209.488 100.498 203.893 106.729L69.525 256L203.893 405.271Z" />
        </Icon>
    </>
}