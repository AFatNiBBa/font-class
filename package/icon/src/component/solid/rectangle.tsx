
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=solid rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNDQ4SDY0QzI4LjY1NCA0NDggMCA0MTkuMzQ2IDAgMzg0VjEyOEMwIDkyLjY1NCAyOC42NTQgNjQgNjQgNjRINDQ4QzQ4My4zNDYgNjQgNTEyIDkyLjY1NCA1MTIgMTI4VjM4NEM1MTIgNDE5LjM0NiA0ODMuMzQ2IDQ0OCA0NDggNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rectangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 448H64C28.654 448 0 419.346 0 384V128C0 92.654 28.654 64 64 64H448C483.346 64 512 92.654 512 128V384C512 419.346 483.346 448 448 448Z" />
        </Icon>
    </>
}