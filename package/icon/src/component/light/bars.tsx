
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars?s=light bars}
 * @preview ![bars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAxMTJINDMyQzQ0MC44NDQgMTEyIDQ0OCAxMDQuODQ0IDQ0OCA5NlM0NDAuODQ0IDgwIDQzMiA4MEgxNkM3LjE1NiA4MCAwIDg3LjE1NiAwIDk2UzcuMTU2IDExMiAxNiAxMTJaTTQzMiAyNDBIMTZDNy4xNTYgMjQwIDAgMjQ3LjE1NiAwIDI1NlM3LjE1NiAyNzIgMTYgMjcySDQzMkM0NDAuODQ0IDI3MiA0NDggMjY0Ljg0NCA0NDggMjU2UzQ0MC44NDQgMjQwIDQzMiAyNDBaTTQzMiA0MDBIMTZDNy4xNTYgNDAwIDAgNDA3LjE1NiAwIDQxNlM3LjE1NiA0MzIgMTYgNDMySDQzMkM0NDAuODQ0IDQzMiA0NDggNDI0Ljg0NCA0NDggNDE2UzQ0MC44NDQgNDAwIDQzMiA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Bars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M16 112H432C440.844 112 448 104.844 448 96S440.844 80 432 80H16C7.156 80 0 87.156 0 96S7.156 112 16 112ZM432 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H432C440.844 272 448 264.844 448 256S440.844 240 432 240ZM432 400H16C7.156 400 0 407.156 0 416S7.156 432 16 432H432C440.844 432 448 424.844 448 416S440.844 400 432 400Z" />
        </Icon>
    </>
}