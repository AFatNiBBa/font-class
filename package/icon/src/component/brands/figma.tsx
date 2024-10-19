
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `figma` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/figma?s=brands figma}
 * @preview ![figma](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzcgMTcwLjdBODUuMzUgODUuMzUgMCAwIDAgMjc3IDBIMTA2LjNhODUuMyA4NS4zIDAgMCAwIDAgMTcwLjYgODUuMzUgODUuMzUgMCAwIDAgMCAxNzAuNyA4NS4zNSA4NS4zNSAwIDEgMCA4NS4zIDg1LjR2LTI1NnptMCAwYTg1LjMgODUuMyAwIDEgMCA4NS4zIDg1LjMgODUuMzEgODUuMzEgMCAwIDAtODUuMy04NS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Figma(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M277 170.7A85.35 85.35 0 0 0 277 0H106.3a85.3 85.3 0 0 0 0 170.6 85.35 85.35 0 0 0 0 170.7 85.35 85.35 0 1 0 85.3 85.4v-256zm0 0a85.3 85.3 0 1 0 85.3 85.3 85.31 85.31 0 0 0-85.3-85.3z" />
        </Icon>
    </>
}