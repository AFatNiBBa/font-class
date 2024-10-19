
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lock` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=solid lock}
 * @preview ![lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMjI0SDQwMFYxNDRDNDAwIDY0LjU5NCAzMzUuNDA2IDAgMjU2IDBTMTEyIDY0LjU5NCAxMTIgMTQ0VjIyNEg5NkM2MC42NTQgMjI0IDMyIDI1Mi42NTIgMzIgMjg4VjQ0OEMzMiA0ODMuMzQ0IDYwLjY1NCA1MTIgOTYgNTEySDQxNkM0NTEuMzQ2IDUxMiA0ODAgNDgzLjM0NCA0ODAgNDQ4VjI4OEM0ODAgMjUyLjY1MiA0NTEuMzQ2IDIyNCA0MTYgMjI0Wk0xNzYgMTQ0QzE3NiA5OS44NzUgMjExLjg5MSA2NCAyNTYgNjRTMzM2IDk5Ljg3NSAzMzYgMTQ0VjIyNEgxNzZWMTQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Lock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416 224H400V144C400 64.594 335.406 0 256 0S112 64.594 112 144V224H96C60.654 224 32 252.652 32 288V448C32 483.344 60.654 512 96 512H416C451.346 512 480 483.344 480 448V288C480 252.652 451.346 224 416 224ZM176 144C176 99.875 211.891 64 256 64S336 99.875 336 144V224H176V144Z" />
        </Icon>
    </>
}