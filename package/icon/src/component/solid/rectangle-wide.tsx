
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=solid rectangle-wide}
 * @preview ![rectangle-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgNDQ4SDY0QzI4LjY1NCA0NDggMCA0MTkuMzQ2IDAgMzg0VjEyOEMwIDkyLjY1NCAyOC42NTQgNjQgNjQgNjRINTc2QzYxMS4zNDYgNjQgNjQwIDkyLjY1NCA2NDAgMTI4VjM4NEM2NDAgNDE5LjM0NiA2MTEuMzQ2IDQ0OCA1NzYgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RectangleWide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 448H64C28.654 448 0 419.346 0 384V128C0 92.654 28.654 64 64 64H576C611.346 64 640 92.654 640 128V384C640 419.346 611.346 448 576 448Z" />
    </Icon>
);

export default RectangleWide;