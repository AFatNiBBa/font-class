
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=light i}
 * @preview ![i](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDY0QzMyMCA0NzIuODQ0IDMxMi44NDQgNDgwIDMwNCA0ODBIMTZDNy4xNTYgNDgwIDAgNDcyLjg0NCAwIDQ2NFM3LjE1NiA0NDggMTYgNDQ4SDE0NFY2NEgxNkM3LjE1NiA2NCAwIDU2Ljg0NCAwIDQ4UzcuMTU2IDMyIDE2IDMySDMwNEMzMTIuODQ0IDMyIDMyMCAzOS4xNTYgMzIwIDQ4UzMxMi44NDQgNjQgMzA0IDY0SDE3NlY0NDhIMzA0QzMxMi44NDQgNDQ4IDMyMCA0NTUuMTU2IDMyMCA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function I(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 464C320 472.844 312.844 480 304 480H16C7.156 480 0 472.844 0 464S7.156 448 16 448H144V64H16C7.156 64 0 56.844 0 48S7.156 32 16 32H304C312.844 32 320 39.156 320 48S312.844 64 304 64H176V448H304C312.844 448 320 455.156 320 464Z" />
        </Icon>
    </>
}