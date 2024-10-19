
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tally-1` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tally-1?s=light tally-1}
 * @preview ![tally-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzMkMyMy4xNTYgMzIgMTYgMzkuMTU2IDE2IDQ4VjQ2NEMxNiA0NzIuODQ0IDIzLjE1NiA0ODAgMzIgNDgwUzQ4IDQ3Mi44NDQgNDggNDY0VjQ4QzQ4IDM5LjE1NiA0MC44NDQgMzIgMzIgMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Tally_1(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M32 32C23.156 32 16 39.156 16 48V464C16 472.844 23.156 480 32 480S48 472.844 48 464V48C48 39.156 40.844 32 32 32Z" />
        </Icon>
    </>
}