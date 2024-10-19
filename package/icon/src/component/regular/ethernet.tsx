
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ethernet` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=regular ethernet}
 * @preview ![ethernet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMTkySDQ0OFYxNjBDNDQ4IDE0Mi40IDQzMy42IDEyOCA0MTYgMTI4SDM4NFY5NkMzODQgNzguNCAzNjkuNiA2NCAzNTIgNjRIMTYwQzE0Mi40IDY0IDEyOCA3OC40IDEyOCA5NlYxMjhIOTZDNzguNCAxMjggNjQgMTQyLjQgNjQgMTYwVjE5MkgzMkMxNC40IDE5MiAwIDIwNi40IDAgMjI0VjQxNkMwIDQzMy42IDE0LjQgNDQ4IDMyIDQ0OEg0ODBDNDk3LjYgNDQ4IDUxMiA0MzMuNiA1MTIgNDE2VjIyNEM1MTIgMjA2LjQgNDk3LjYgMTkyIDQ4MCAxOTJaTTQ2NCA0MDBINDI0VjM0NEM0MjQgMzMwLjc1IDQxMy4yNSAzMjAgNDAwIDMyMFMzNzYgMzMwLjc1IDM3NiAzNDRWNDAwSDMyOFYzNDRDMzI4IDMzMC43NSAzMTcuMjUgMzIwIDMwNCAzMjBTMjgwIDMzMC43NSAyODAgMzQ0VjQwMEgyMzJWMzQ0QzIzMiAzMzAuNzUgMjIxLjI1IDMyMCAyMDggMzIwUzE4NCAzMzAuNzUgMTg0IDM0NFY0MDBIMTM2VjM0NEMxMzYgMzMwLjc1IDEyNS4yNSAzMjAgMTEyIDMyMFM4OCAzMzAuNzUgODggMzQ0VjQwMEg0OFYyNDBIOTZDMTA0LjgzNiAyNDAgMTEyIDIzMi44MzYgMTEyIDIyNFYxNzZIMTYwQzE2OC44MzYgMTc2IDE3NiAxNjguODM2IDE3NiAxNjBWMTEySDMzNlYxNjBDMzM2IDE2OC44MzYgMzQzLjE2NCAxNzYgMzUyIDE3Nkg0MDBWMjI0QzQwMCAyMzIuODM2IDQwNy4xNjQgMjQwIDQxNiAyNDBINDY0VjQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Ethernet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 192H448V160C448 142.4 433.6 128 416 128H384V96C384 78.4 369.6 64 352 64H160C142.4 64 128 78.4 128 96V128H96C78.4 128 64 142.4 64 160V192H32C14.4 192 0 206.4 0 224V416C0 433.6 14.4 448 32 448H480C497.6 448 512 433.6 512 416V224C512 206.4 497.6 192 480 192ZM464 400H424V344C424 330.75 413.25 320 400 320S376 330.75 376 344V400H328V344C328 330.75 317.25 320 304 320S280 330.75 280 344V400H232V344C232 330.75 221.25 320 208 320S184 330.75 184 344V400H136V344C136 330.75 125.25 320 112 320S88 330.75 88 344V400H48V240H96C104.836 240 112 232.836 112 224V176H160C168.836 176 176 168.836 176 160V112H336V160C336 168.836 343.164 176 352 176H400V224C400 232.836 407.164 240 416 240H464V400Z" />
        </Icon>
    </>
}