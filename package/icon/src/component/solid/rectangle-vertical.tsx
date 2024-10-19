
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=solid rectangle-vertical}
 * @preview ![rectangle-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiA0NDhWNjRDMzIgMjguNjU0IDYwLjY1NCAwIDk2IDBIMzUyQzM4Ny4zNDYgMCA0MTYgMjguNjU0IDQxNiA2NFY0NDhDNDE2IDQ4My4zNDYgMzg3LjM0NiA1MTIgMzUyIDUxMkg5NkM2MC42NTQgNTEyIDMyIDQ4My4zNDYgMzIgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RectangleVertical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448V64C32 28.654 60.654 0 96 0H352C387.346 0 416 28.654 416 64V448C416 483.346 387.346 512 352 512H96C60.654 512 32 483.346 32 448Z" />
    </Icon>
);

export default RectangleVertical;