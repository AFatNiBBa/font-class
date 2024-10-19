
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stop` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stop?s=solid stop}
 * @preview ![stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMTI4VjM4NEMzODQgNDE5LjM0NiAzNTUuMzQ2IDQ0OCAzMjAgNDQ4SDY0QzI4LjY1NCA0NDggMCA0MTkuMzQ2IDAgMzg0VjEyOEMwIDkyLjY1NCAyOC42NTQgNjQgNjQgNjRIMzIwQzM1NS4zNDYgNjQgMzg0IDkyLjY1NCAzODQgMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Stop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 128V384C384 419.346 355.346 448 320 448H64C28.654 448 0 419.346 0 384V128C0 92.654 28.654 64 64 64H320C355.346 64 384 92.654 384 128Z" />
        </Icon>
    </>
}