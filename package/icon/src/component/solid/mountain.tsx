
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mountain` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mountain?s=solid mountain}
 * @preview ![mountain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDMuMTkzIDM4MS41MzdMMjgwLjA3NCAzMkMyNjkuNjU2IDE1LjY3MiAyNDIuMzQ1IDE1LjY3MiAyMzEuOTI3IDMyTDguODA2IDM4MS41MzdDLTIuMzA3IDM5OC45NDcgLTIuOTQ2IDQyMC45NjEgNy4xNCA0MzguOTg4QzE3LjA3MiA0NTYuNzI3IDM1LjkyMSA0NjcuNzU0IDU2LjMxNCA0NjcuNzU0SDQ1NS42ODVDNDc2LjA3OCA0NjcuNzU0IDQ5NC45MjkgNDU2LjcyNyA1MDQuODYxIDQzOC45ODhDNTE0Ljk0NSA0MjAuOTQ3IDUxNC4zMDYgMzk4LjkzNCA1MDMuMTkzIDM4MS41MzdaTTI1Ni4wMjcgOTkuNTYxTDMyNy44MDIgMjExLjc1NEgyNTZMMjA4IDI3NS43NTRMMTc3LjIyMiAyMjMuMDE0TDI1Ni4wMjcgOTkuNTYxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Mountain(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M503.193 381.537L280.074 32C269.656 15.672 242.345 15.672 231.927 32L8.806 381.537C-2.307 398.947 -2.946 420.961 7.14 438.988C17.072 456.727 35.921 467.754 56.314 467.754H455.685C476.078 467.754 494.929 456.727 504.861 438.988C514.945 420.947 514.306 398.934 503.193 381.537ZM256.027 99.561L327.802 211.754H256L208 275.754L177.222 223.014L256.027 99.561Z" />
        </Icon>
    </>
}