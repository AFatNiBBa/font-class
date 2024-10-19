
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=light rectangle-vertical}
 * @preview ![rectangle-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMEg5NkM2MC42NTQgMCAzMiAyOC42NTQgMzIgNjRWNDQ4QzMyIDQ4My4zNDYgNjAuNjU0IDUxMiA5NiA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ2IDQ0OCA0NDhWNjRDNDQ4IDI4LjY1NCA0MTkuMzQ2IDAgMzg0IDBaTTQxNiA0NDhDNDE2IDQ2NS42NDUgNDAxLjY0NSA0ODAgMzg0IDQ4MEg5NkM3OC4zNTUgNDgwIDY0IDQ2NS42NDUgNjQgNDQ4VjY0QzY0IDQ2LjM1NSA3OC4zNTUgMzIgOTYgMzJIMzg0QzQwMS42NDUgMzIgNDE2IDQ2LjM1NSA0MTYgNjRWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RectangleVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 0H96C60.654 0 32 28.654 32 64V448C32 483.346 60.654 512 96 512H384C419.346 512 448 483.346 448 448V64C448 28.654 419.346 0 384 0ZM416 448C416 465.645 401.645 480 384 480H96C78.355 480 64 465.645 64 448V64C64 46.355 78.355 32 96 32H384C401.645 32 416 46.355 416 64V448Z" />
        </Icon>
    </>
}