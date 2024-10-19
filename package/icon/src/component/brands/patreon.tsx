
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `patreon` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/patreon?s=brands patreon}
 * @preview ![patreon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTk0LjhjMCAxMDEuMy04Mi40IDE4My44LTE4My44IDE4My44LTEwMS43IDAtMTg0LjQtODIuNC0xODQuNC0xODMuOCAwLTEwMS42IDgyLjctMTg0LjMgMTg0LjQtMTg0LjNDNDI5LjYgMTAuNSA1MTIgOTMuMiA1MTIgMTk0Ljh6TTAgNTAxLjVoOTB2LTQ5MUgwdjQ5MXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Patreon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z" />
        </Icon>
    </>
}