
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `grip-lines` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=regular grip-lines}
 * @preview ![grip-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgMTY4SDI0QzEwLjggMTY4IDAgMTc4LjggMCAxOTJWMTkyQzAgMjA1LjIgMTAuOCAyMTYgMjQgMjE2SDQyNEM0MzcuMiAyMTYgNDQ4IDIwNS4yIDQ0OCAxOTJWMTkyQzQ0OCAxNzguOCA0MzcuMiAxNjggNDI0IDE2OFpNNDI0IDI5NkgyNEMxMC44IDI5NiAwIDMwNi44IDAgMzIwVjMyMEMwIDMzMy4yIDEwLjggMzQ0IDI0IDM0NEg0MjRDNDM3LjIgMzQ0IDQ0OCAzMzMuMiA0NDggMzIwVjMyMEM0NDggMzA2LjggNDM3LjIgMjk2IDQyNCAyOTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GripLines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M424 168H24C10.8 168 0 178.8 0 192V192C0 205.2 10.8 216 24 216H424C437.2 216 448 205.2 448 192V192C448 178.8 437.2 168 424 168ZM424 296H24C10.8 296 0 306.8 0 320V320C0 333.2 10.8 344 24 344H424C437.2 344 448 333.2 448 320V320C448 306.8 437.2 296 424 296Z" />
        </Icon>
    </>
}