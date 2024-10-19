
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-square` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=regular bracket-square}
 * @preview ![bracket-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjAgMzJIMzJDMTQuNCAzMiAwIDQ2LjQgMCA2NFY0NDhDMCA0NjUuNiAxNC40IDQ4MCAzMiA0ODBIMTIwQzEzMy4yNTUgNDgwIDE0NCA0NjkuMjU1IDE0NCA0NTZWNDU2QzE0NCA0NDIuNzQ1IDEzMy4yNTUgNDMyIDEyMCA0MzJINDhWODBIMTIwQzEzMy4yNTUgODAgMTQ0IDY5LjI1NSAxNDQgNTZWNTZDMTQ0IDQyLjc0NSAxMzMuMjU1IDMyIDEyMCAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BracketSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M120 32H32C14.4 32 0 46.4 0 64V448C0 465.6 14.4 480 32 480H120C133.255 480 144 469.255 144 456V456C144 442.745 133.255 432 120 432H48V80H120C133.255 80 144 69.255 144 56V56C144 42.745 133.255 32 120 32Z" />
        </Icon>
    </>
}