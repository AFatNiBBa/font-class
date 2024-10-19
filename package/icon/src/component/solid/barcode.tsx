
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `barcode` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=solid barcode}
 * @preview ![barcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDAgMzJIMTg0QzE3MC44IDMyIDE2MCA0Mi44IDE2MCA1NlY0NTZDMTYwIDQ2OS4yIDE3MC44IDQ4MCAxODQgNDgwSDIwMEMyMTMuMiA0ODAgMjI0IDQ2OS4yIDIyNCA0NTZWNTZDMjI0IDQyLjggMjEzLjIgMzIgMjAwIDMyWk0xMTIgMzJDMTAzLjIgMzIgOTYgMzkuMiA5NiA0OFY0NjRDOTYgNDcyLjggMTAzLjIgNDgwIDExMiA0ODBTMTI4IDQ3Mi44IDEyOCA0NjRWNDhDMTI4IDM5LjIgMTIwLjggMzIgMTEyIDMyWk00MCAzMkgyNEMxMC44IDMyIDAgNDIuOCAwIDU2VjQ1NkMwIDQ2OS4yIDEwLjggNDgwIDI0IDQ4MEg0MEM1My4yIDQ4MCA2NCA0NjkuMiA2NCA0NTZWNTZDNjQgNDIuOCA1My4yIDMyIDQwIDMyWk00ODggMzJINDcyQzQ1OC44IDMyIDQ0OCA0Mi44IDQ0OCA1NlY0NTZDNDQ4IDQ2OS4yIDQ1OC44IDQ4MCA0NzIgNDgwSDQ4OEM1MDEuMiA0ODAgNTEyIDQ2OS4yIDUxMiA0NTZWNTZDNTEyIDQyLjggNTAxLjIgMzIgNDg4IDMyWk00MDAgMzJDMzkxLjIgMzIgMzg0IDM5LjIgMzg0IDQ4VjQ2NEMzODQgNDcyLjggMzkxLjIgNDgwIDQwMCA0ODBTNDE2IDQ3Mi44IDQxNiA0NjRWNDhDNDE2IDM5LjIgNDA4LjggMzIgNDAwIDMyWk0yOTYgMzJIMjgwQzI2Ni44IDMyIDI1NiA0Mi44IDI1NiA1NlY0NTZDMjU2IDQ2OS4yIDI2Ni44IDQ4MCAyODAgNDgwSDI5NkMzMDkuMiA0ODAgMzIwIDQ2OS4yIDMyMCA0NTZWNTZDMzIwIDQyLjggMzA5LjIgMzIgMjk2IDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Barcode(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M200 32H184C170.8 32 160 42.8 160 56V456C160 469.2 170.8 480 184 480H200C213.2 480 224 469.2 224 456V56C224 42.8 213.2 32 200 32ZM112 32C103.2 32 96 39.2 96 48V464C96 472.8 103.2 480 112 480S128 472.8 128 464V48C128 39.2 120.8 32 112 32ZM40 32H24C10.8 32 0 42.8 0 56V456C0 469.2 10.8 480 24 480H40C53.2 480 64 469.2 64 456V56C64 42.8 53.2 32 40 32ZM488 32H472C458.8 32 448 42.8 448 56V456C448 469.2 458.8 480 472 480H488C501.2 480 512 469.2 512 456V56C512 42.8 501.2 32 488 32ZM400 32C391.2 32 384 39.2 384 48V464C384 472.8 391.2 480 400 480S416 472.8 416 464V48C416 39.2 408.8 32 400 32ZM296 32H280C266.8 32 256 42.8 256 56V456C256 469.2 266.8 480 280 480H296C309.2 480 320 469.2 320 456V56C320 42.8 309.2 32 296 32Z" />
        </Icon>
    </>
}