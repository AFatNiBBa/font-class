
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `intersection` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/intersection?s=thin intersection}
 * @preview ![intersection](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjI0VjQ3MkMzODQgNDc2LjQwNiAzODAuNDIyIDQ4MCAzNzYgNDgwUzM2OCA0NzYuNDA2IDM2OCA0NzJWMjI0QzM2OCAxMjYuOTY5IDI4OS4wNDcgNDggMTkyIDQ4UzE2IDEyNi45NjkgMTYgMjI0VjQ3MkMxNiA0NzYuNDA2IDEyLjQyMiA0ODAgOCA0ODBTMCA0NzYuNDA2IDAgNDcyVjIyNEMwIDExOC4xMjUgODYuMTI1IDMyIDE5MiAzMlMzODQgMTE4LjEyNSAzODQgMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Intersection(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 224V472C384 476.406 380.422 480 376 480S368 476.406 368 472V224C368 126.969 289.047 48 192 48S16 126.969 16 224V472C16 476.406 12.422 480 8 480S0 476.406 0 472V224C0 118.125 86.125 32 192 32S384 118.125 384 224Z" />
        </Icon>
    </>
}