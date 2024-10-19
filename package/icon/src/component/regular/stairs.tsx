
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `stairs` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=regular stairs}
 * @preview ![stairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgNTZDNTc2IDY5LjI1IDU2NS4yNSA4MCA1NTIgODBINDMyVjIwMEM0MzIgMjEzLjI1IDQyMS4yNSAyMjQgNDA4IDIyNEgzMDRWMzI4QzMwNCAzNDEuMjUgMjkzLjI1IDM1MiAyODAgMzUySDE3NlY0NTZDMTc2IDQ2OS4yNSAxNjUuMjUgNDgwIDE1MiA0ODBIMjRDMTAuNzUgNDgwIDAgNDY5LjI1IDAgNDU2UzEwLjc1IDQzMiAyNCA0MzJIMTI4VjMyOEMxMjggMzE0Ljc1IDEzOC43NSAzMDQgMTUyIDMwNEgyNTZWMjAwQzI1NiAxODYuNzUgMjY2Ljc1IDE3NiAyODAgMTc2SDM4NFY1NkMzODQgNDIuNzUgMzk0Ljc1IDMyIDQwOCAzMkg1NTJDNTY1LjI1IDMyIDU3NiA0Mi43NSA1NzYgNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Stairs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M576 56C576 69.25 565.25 80 552 80H432V200C432 213.25 421.25 224 408 224H304V328C304 341.25 293.25 352 280 352H176V456C176 469.25 165.25 480 152 480H24C10.75 480 0 469.25 0 456S10.75 432 24 432H128V328C128 314.75 138.75 304 152 304H256V200C256 186.75 266.75 176 280 176H384V56C384 42.75 394.75 32 408 32H552C565.25 32 576 42.75 576 56Z" />
        </Icon>
    </>
}