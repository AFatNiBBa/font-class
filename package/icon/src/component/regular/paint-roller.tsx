
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `paint-roller` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=regular paint-roller}
 * @preview ![paint-roller](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTYgNzJINDQ4VjEyMEg0NTZDNDYwLjM3NSAxMjAgNDY0IDEyMy42MjUgNDY0IDEyOFYxODRDNDY0IDIxMC40IDQ0Mi40IDIzMiA0MTYgMjMySDI1NkMyMjUuMDcyIDIzMiAyMDAgMjU3LjA3MiAyMDAgMjg4VjMyMEgxOTJDMTc0LjM3NSAzMjAgMTYwIDMzNC4zNzUgMTYwIDM1MlY0ODBDMTYwIDQ5Ny42IDE3NC40IDUxMiAxOTIgNTEySDI1NkMyNzMuNiA1MTIgMjg4IDQ5Ny42IDI4OCA0ODBWMzUyQzI4OCAzMzQuMzc1IDI3My42MjUgMzIwIDI1NiAzMjBIMjQ4VjI4OEMyNDggMjgzLjYyNSAyNTEuNjI1IDI4MCAyNTYgMjgwSDQxNkM0NjkuMDIgMjgwIDUxMiAyMzcuMDIgNTEyIDE4NFYxMjhDNTEyIDk3LjA3MiA0ODYuOTI4IDcyIDQ1NiA3MlpNNDE2IDE0NFY0OEM0MTYgMjEuNSAzOTQuNSAwIDM2OCAwSDQ4QzIxLjUgMCAwIDIxLjUgMCA0OFYxNDRDMCAxNzAuNSAyMS41IDE5MiA0OCAxOTJIMzY4QzM5NC41IDE5MiA0MTYgMTcwLjUgNDE2IDE0NFpNNDggNDhIMzY4VjE0NEg0OFY0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PaintRoller(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M456 72H448V120H456C460.375 120 464 123.625 464 128V184C464 210.4 442.4 232 416 232H256C225.072 232 200 257.072 200 288V320H192C174.375 320 160 334.375 160 352V480C160 497.6 174.4 512 192 512H256C273.6 512 288 497.6 288 480V352C288 334.375 273.625 320 256 320H248V288C248 283.625 251.625 280 256 280H416C469.02 280 512 237.02 512 184V128C512 97.072 486.928 72 456 72ZM416 144V48C416 21.5 394.5 0 368 0H48C21.5 0 0 21.5 0 48V144C0 170.5 21.5 192 48 192H368C394.5 192 416 170.5 416 144ZM48 48H368V144H48V48Z" />
        </Icon>
    </>
}