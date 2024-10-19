
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dice-two` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-two?s=solid dice-two}
 * @preview ![dice-two](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZWNDE2QzAgNDUxLjM3NSAyOC42MjUgNDgwIDY0IDQ4MEgzODRDNDE5LjM3NSA0ODAgNDQ4IDQ1MS4zNzUgNDQ4IDQxNlY5NkM0NDggNjAuNjI1IDQxOS4zNzUgMzIgMzg0IDMyWk0xMjggMTkyQzExMC4zNzUgMTkyIDk2IDE3Ny42MjUgOTYgMTYwUzExMC4zNzUgMTI4IDEyOCAxMjhTMTYwIDE0Mi4zNzUgMTYwIDE2MFMxNDUuNjI1IDE5MiAxMjggMTkyWk0zMjAgMzg0QzMwMi4zNzUgMzg0IDI4OCAzNjkuNjI1IDI4OCAzNTJTMzAyLjM3NSAzMjAgMzIwIDMyMFMzNTIgMzM0LjM3NSAzNTIgMzUyUzMzNy42MjUgMzg0IDMyMCAzODRaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function DiceTwo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM128 192C110.375 192 96 177.625 96 160S110.375 128 128 128S160 142.375 160 160S145.625 192 128 192ZM320 384C302.375 384 288 369.625 288 352S302.375 320 320 320S352 334.375 352 352S337.625 384 320 384Z " />
        </Icon>
    </>
}