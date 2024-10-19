
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tally-2` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tally-2?s=regular tally-2}
 * @preview ![tally-2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzMkMxOC43NSAzMiA4IDQyLjc1IDggNTZWNDU2QzggNDY5LjI1IDE4Ljc1IDQ4MCAzMiA0ODBTNTYgNDY5LjI1IDU2IDQ1NlY1NkM1NiA0Mi43NSA0NS4yNSAzMiAzMiAzMlpNMTYwIDMyQzE0Ni43NSAzMiAxMzYgNDIuNzUgMTM2IDU2VjQ1NkMxMzYgNDY5LjI1IDE0Ni43NSA0ODAgMTYwIDQ4MFMxODQgNDY5LjI1IDE4NCA0NTZWNTZDMTg0IDQyLjc1IDE3My4yNSAzMiAxNjAgMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Tally_2(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M32 32C18.75 32 8 42.75 8 56V456C8 469.25 18.75 480 32 480S56 469.25 56 456V56C56 42.75 45.25 32 32 32ZM160 32C146.75 32 136 42.75 136 56V456C136 469.25 146.75 480 160 480S184 469.25 184 456V56C184 42.75 173.25 32 160 32Z" />
        </Icon>
    </>
}