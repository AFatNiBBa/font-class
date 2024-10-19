
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `equals` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=solid equals}
 * @preview ![equals](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NiAyMDBIMzkyQzQxNC4wOTQgMjAwIDQzMiAxODIuMDk0IDQzMiAxNjBTNDE0LjA5NCAxMjAgMzkyIDEyMEg1NkMzMy45MDYgMTIwIDE2IDEzNy45MDYgMTYgMTYwUzMzLjkwNiAyMDAgNTYgMjAwWk0zOTIgMzEySDU2QzMzLjkwNiAzMTIgMTYgMzI5LjkwNiAxNiAzNTJTMzMuOTA2IDM5MiA1NiAzOTJIMzkyQzQxNC4wOTQgMzkyIDQzMiAzNzQuMDk0IDQzMiAzNTJTNDE0LjA5NCAzMTIgMzkyIDMxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Equals(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M56 200H392C414.094 200 432 182.094 432 160S414.094 120 392 120H56C33.906 120 16 137.906 16 160S33.906 200 56 200ZM392 312H56C33.906 312 16 329.906 16 352S33.906 392 56 392H392C414.094 392 432 374.094 432 352S414.094 312 392 312Z" />
        </Icon>
    </>
}