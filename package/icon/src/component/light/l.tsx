
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `l` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=light l}
 * @preview ![l](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQgNDgwSDQ4QzM5LjE1NiA0ODAgMzIgNDcyLjg0NCAzMiA0NjRWNDhDMzIgMzkuMTU2IDM5LjE1NiAzMiA0OCAzMlM2NCAzOS4xNTYgNjQgNDhWNDQ4SDMwNEMzMTIuODQ0IDQ0OCAzMjAgNDU1LjE1NiAzMjAgNDY0UzMxMi44NDQgNDgwIDMwNCA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function L(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M304 480H48C39.156 480 32 472.844 32 464V48C32 39.156 39.156 32 48 32S64 39.156 64 48V448H304C312.844 448 320 455.156 320 464S312.844 480 304 480Z" />
        </Icon>
    </>
}