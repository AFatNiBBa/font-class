
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `h` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=light h}
 * @preview ![h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDhWNDY0QzM4NCA0NzIuODQ0IDM3Ni44NDQgNDgwIDM2OCA0ODBTMzUyIDQ3Mi44NDQgMzUyIDQ2NFYyNTZIMzJWNDY0QzMyIDQ3Mi44NDQgMjQuODQ0IDQ4MCAxNiA0ODBTMCA0NzIuODQ0IDAgNDY0VjQ4QzAgMzkuMTU2IDcuMTU2IDMyIDE2IDMyUzMyIDM5LjE1NiAzMiA0OFYyMjRIMzUyVjQ4QzM1MiAzOS4xNTYgMzU5LjE1NiAzMiAzNjggMzJTMzg0IDM5LjE1NiAzODQgNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function H(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 48V464C384 472.844 376.844 480 368 480S352 472.844 352 464V256H32V464C32 472.844 24.844 480 16 480S0 472.844 0 464V48C0 39.156 7.156 32 16 32S32 39.156 32 48V224H352V48C352 39.156 359.156 32 368 32S384 39.156 384 48Z" />
        </Icon>
    </>
}