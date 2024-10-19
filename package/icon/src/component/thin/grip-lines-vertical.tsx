
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `grip-lines-vertical` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=thin grip-lines-vertical}
 * @preview ![grip-lines-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTIgNDBWNDcyQzE1MiA0NzYuNDA2IDE1NS41OTQgNDgwIDE2MCA0ODBTMTY4IDQ3Ni40MDYgMTY4IDQ3MlY0MEMxNjggMzUuNTk0IDE2NC40MDYgMzIgMTYwIDMyUzE1MiAzNS41OTQgMTUyIDQwWk00MCA0NzJWNDBDNDAgMzUuNTk0IDM2LjQwNiAzMiAzMiAzMlMyNCAzNS41OTQgMjQgNDBWNDcyQzI0IDQ3Ni40MDYgMjcuNTk0IDQ4MCAzMiA0ODBTNDAgNDc2LjQwNiA0MCA0NzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GripLinesVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M152 40V472C152 476.406 155.594 480 160 480S168 476.406 168 472V40C168 35.594 164.406 32 160 32S152 35.594 152 40ZM40 472V40C40 35.594 36.406 32 32 32S24 35.594 24 40V472C24 476.406 27.594 480 32 480S40 476.406 40 472Z" />
        </Icon>
    </>
}