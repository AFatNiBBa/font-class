
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `torii-gate` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=light torii-gate}
 * @preview ![torii-gate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMTYwQzQ5Ny42IDE2MCA1MTIgMTQ1LjYgNTEyIDEyOFYwQzQ2OS44NzUgMjEgNDIzLjUgMzIgMzc2LjUgMzJIMTM1LjVDODguNSAzMiA0Mi4xMjUgMjEgMCAwVjEyOEMwIDE0NS42IDE0LjQgMTYwIDMyIDE2MEg2NFYyNTZIMTZDNy4yIDI1NiAwIDI2My4yIDAgMjcyVjI3MkMwIDI4MC44IDcuMiAyODggMTYgMjg4SDY0VjQ5NkM2NCA1MDQuOCA3MS4yIDUxMiA4MCA1MTJIODBDODguOCA1MTIgOTYgNTA0LjggOTYgNDk2VjI4OEg0MTZWNDk2QzQxNiA1MDQuOCA0MjMuMiA1MTIgNDMyIDUxMkg0MzJDNDQwLjggNTEyIDQ0OCA1MDQuOCA0NDggNDk2VjI4OEg0OTZDNTA0LjggMjg4IDUxMiAyODAuOCA1MTIgMjcyVjI3MkM1MTIgMjYzLjIgNTA0LjggMjU2IDQ5NiAyNTZINDQ4VjE2MEg0ODBaTTMyIDEyOFY0Ny41QzY1LjM3NSA1OC4zNzUgMTAwLjUgNjQgMTM1LjUgNjRIMzc2LjVDNDExLjUgNjQgNDQ2LjYyNSA1OC4zNzUgNDgwIDQ3LjVWMTI4SDMyWk05NiAxNjBIMjQwVjI1Nkg5NlYxNjBaTTQxNiAyNTZIMjcyVjE2MEg0MTZWMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ToriiGate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 160C497.6 160 512 145.6 512 128V0C469.875 21 423.5 32 376.5 32H135.5C88.5 32 42.125 21 0 0V128C0 145.6 14.4 160 32 160H64V256H16C7.2 256 0 263.2 0 272V272C0 280.8 7.2 288 16 288H64V496C64 504.8 71.2 512 80 512H80C88.8 512 96 504.8 96 496V288H416V496C416 504.8 423.2 512 432 512H432C440.8 512 448 504.8 448 496V288H496C504.8 288 512 280.8 512 272V272C512 263.2 504.8 256 496 256H448V160H480ZM32 128V47.5C65.375 58.375 100.5 64 135.5 64H376.5C411.5 64 446.625 58.375 480 47.5V128H32ZM96 160H240V256H96V160ZM416 256H272V160H416V256Z" />
        </Icon>
    </>
}