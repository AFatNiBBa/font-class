
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `f` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=light f}
 * @preview ![f](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDhDMzIwIDU2Ljg0NCAzMTIuODQ0IDY0IDMwNCA2NEgzMlYyNTZIMjQwQzI0OC44NDQgMjU2IDI1NiAyNjMuMTU2IDI1NiAyNzJTMjQ4Ljg0NCAyODggMjQwIDI4OEgzMlY0NjRDMzIgNDcyLjg0NCAyNC44NDQgNDgwIDE2IDQ4MFMwIDQ3Mi44NDQgMCA0NjRWNDhDMCAzOS4xNTYgNy4xNTYgMzIgMTYgMzJIMzA0QzMxMi44NDQgMzIgMzIwIDM5LjE1NiAzMjAgNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function F(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 48C320 56.844 312.844 64 304 64H32V256H240C248.844 256 256 263.156 256 272S248.844 288 240 288H32V464C32 472.844 24.844 480 16 480S0 472.844 0 464V48C0 39.156 7.156 32 16 32H304C312.844 32 320 39.156 320 48Z" />
        </Icon>
    </>
}