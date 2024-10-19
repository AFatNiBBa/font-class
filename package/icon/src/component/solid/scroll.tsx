
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scroll` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scroll?s=solid scroll}
 * @preview ![scroll](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCAzMkMyMS41IDMyIDAgNTMuNSAwIDgwVjE0NEMwIDE1Mi44NzUgNy4xMjUgMTYwIDE2IDE2MEg5NlY4MEM5NiA1My41IDc0LjUgMzIgNDggMzJaTTI1NiAzODAuNjI1VjMyMEg0ODBWMTI4QzQ4MCA3NSA0MzcgMzIgMzg0IDMySDExMS42MjVDMTIxLjc1IDQ1LjM3NSAxMjggNjEuODc1IDEyOCA4MFYzODRDMTI4IDQyMi44NzUgMTYyLjYyNSA0NTMuNjI1IDIwMi43NSA0NDcuMTI1QzIzNC4yNSA0NDIgMjU2IDQxMi41IDI1NiAzODAuNjI1Wk0yODggMzUyVjM4NEMyODggNDM2Ljg3NSAyNDUgNDgwIDE5MiA0ODBINDY0QzUyNS44NzUgNDgwIDU3NiA0MjkuODc1IDU3NiAzNjhDNTc2IDM1OS4xMjUgNTY4Ljg3NSAzNTIgNTYwIDM1MkgyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Scroll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M48 32C21.5 32 0 53.5 0 80V144C0 152.875 7.125 160 16 160H96V80C96 53.5 74.5 32 48 32ZM256 380.625V320H480V128C480 75 437 32 384 32H111.625C121.75 45.375 128 61.875 128 80V384C128 422.875 162.625 453.625 202.75 447.125C234.25 442 256 412.5 256 380.625ZM288 352V384C288 436.875 245 480 192 480H464C525.875 480 576 429.875 576 368C576 359.125 568.875 352 560 352H288Z" />
        </Icon>
    </>
}