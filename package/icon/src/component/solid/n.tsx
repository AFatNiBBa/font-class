
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `n` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/n?s=solid n}
 * @preview ![n](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgNDgwQzMyMS44NzUgNDgwIDMwOC4xNTYgNDczLjc1IDI5OC44NDQgNDYyLjQwN0w5NiAyMTQuNDc0VjQzMi4wMDFDOTYgNDU4LjUgNzQuNSA0ODAgNDggNDgwUzAgNDU4LjUgMCA0MzIuMDAxVjgwLjAwOEMwIDU5LjcyNyAxMi43NSA0MS42MzQgMzEuODc1IDM0Ljc5QzUwLjkwNiAyNy45NzggNzIuMjUgMzMuOTE1IDg1LjE1NiA0OS42MDJMMjg4IDI5Ny41MzVWODAuMDA4QzI4OCA1My41MDggMzA5LjUgMzIuMDA5IDMzNiAzMi4wMDlTMzg0IDUzLjUwOCAzODQgODAuMDA4VjQzMi4wMDFDMzg0IDQ1Mi4yODIgMzcxLjI1IDQ3MC4zNzUgMzUyLjEyNSA0NzcuMjE5QzM0Ni44NDQgNDc5LjA5NCAzNDEuNDA2IDQ4MCAzMzYgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function N(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 480C321.875 480 308.156 473.75 298.844 462.407L96 214.474V432.001C96 458.5 74.5 480 48 480S0 458.5 0 432.001V80.008C0 59.727 12.75 41.634 31.875 34.79C50.906 27.978 72.25 33.915 85.156 49.602L288 297.535V80.008C288 53.508 309.5 32.009 336 32.009S384 53.508 384 80.008V432.001C384 452.282 371.25 470.375 352.125 477.219C346.844 479.094 341.406 480 336 480Z" />
        </Icon>
    </>
}