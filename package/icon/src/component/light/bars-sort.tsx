
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bars-sort` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=light bars-sort}
 * @preview ![bars-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAxMTJINDMyQzQ0MC44NDQgMTEyIDQ0OCAxMDQuODQ0IDQ0OCA5NlM0NDAuODQ0IDgwIDQzMiA4MEgxNkM3LjE1NiA4MCAwIDg3LjE1NiAwIDk2UzcuMTU2IDExMiAxNiAxMTJaTTMwNCAyNDBIMTZDNy4xNTYgMjQwIDAgMjQ3LjE1NiAwIDI1NlM3LjE1NiAyNzIgMTYgMjcySDMwNEMzMTIuODQ0IDI3MiAzMjAgMjY0Ljg0NCAzMjAgMjU2UzMxMi44NDQgMjQwIDMwNCAyNDBaTTE3NiA0MDBIMTZDNy4xNTYgNDAwIDAgNDA3LjE1NiAwIDQxNlM3LjE1NiA0MzIgMTYgNDMySDE3NkMxODQuODQ0IDQzMiAxOTIgNDI0Ljg0NCAxOTIgNDE2UzE4NC44NDQgNDAwIDE3NiA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BarsSort(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M16 112H432C440.844 112 448 104.844 448 96S440.844 80 432 80H16C7.156 80 0 87.156 0 96S7.156 112 16 112ZM304 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H304C312.844 272 320 264.844 320 256S312.844 240 304 240ZM176 400H16C7.156 400 0 407.156 0 416S7.156 432 16 432H176C184.844 432 192 424.844 192 416S184.844 400 176 400Z" />
        </Icon>
    </>
}