
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tenge-sign` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=thin tenge-sign}
 * @preview ![tenge-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04IDQ4SDM3NkMzODAuNDIyIDQ4IDM4NCA0NC40MDYgMzg0IDQwUzM4MC40MjIgMzIgMzc2IDMySDhDMy41NzggMzIgMCAzNS41OTQgMCA0MFMzLjU3OCA0OCA4IDQ4Wk0zNzYgMTYwSDhDMy41NzggMTYwIDAgMTYzLjU5NCAwIDE2OFMzLjU3OCAxNzYgOCAxNzZIMTg0VjQ3MkMxODQgNDc2LjQwNiAxODcuNTc4IDQ4MCAxOTIgNDgwUzIwMCA0NzYuNDA2IDIwMCA0NzJWMTc2SDM3NkMzODAuNDIyIDE3NiAzODQgMTcyLjQwNiAzODQgMTY4UzM4MC40MjIgMTYwIDM3NiAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TengeSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M8 48H376C380.422 48 384 44.406 384 40S380.422 32 376 32H8C3.578 32 0 35.594 0 40S3.578 48 8 48ZM376 160H8C3.578 160 0 163.594 0 168S3.578 176 8 176H184V472C184 476.406 187.578 480 192 480S200 476.406 200 472V176H376C380.422 176 384 172.406 384 168S380.422 160 376 160Z" />
        </Icon>
    </>
}