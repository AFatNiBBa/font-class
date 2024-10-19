
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `check-to-slot` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=light check-to-slot}
 * @preview ![check-to-slot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTUuMjgxIDEzNC4yODFMMjY3LjkzOCAyNDguNjU2TDIxOC41OTQgMjA1LjE1NkMyMTEuOTA2IDE5OS4zMTIgMjAxLjg0NCAxOTkuOTY5IDE5NiAyMDYuNTYyQzE5MC4xNTYgMjEzLjIxOSAxOTAuNzgxIDIyMy4zMTIgMTk3LjQwNiAyMjkuMTU2TDI1OS42MjUgMjg0QzI2Mi41NjIgMjg2LjU5NCAyNjYuMzQ0IDI4OCAyNzAuMjE5IDI4OEMyNzAuNzUgMjg4IDI3MS4yNSAyODcuOTY5IDI3MS43ODEgMjg3LjkzOEMyNzYuMTg4IDI4Ny41IDI4MC4yNSAyODUuMjUgMjgyLjkzOCAyODEuNzE5TDM4MC43MTkgMTUzLjcxOUMzODYuMDk0IDE0Ni42ODcgMzg0Ljc1IDEzNi42NTYgMzc3LjcxOSAxMzEuMjgxQzM3MC43MTkgMTI1LjkzOCAzNjAuNjU2IDEyNy4yMTkgMzU1LjI4MSAxMzQuMjgxWk01MjggMzIwQzUxOS4xNTYgMzIwIDUxMiAzMjcuMTU2IDUxMiAzMzZTNTE5LjE1NiAzNTIgNTI4IDM1MkM1MzYuODEyIDM1MiA1NDQgMzU5LjE3MiA1NDQgMzY4VjQzMkM1NDQgNDQwLjgyOCA1MzYuODEyIDQ0OCA1MjggNDQ4SDQ4QzM5LjE4OCA0NDggMzIgNDQwLjgyOCAzMiA0MzJWMzY4QzMyIDM1OS4xNzIgMzkuMTg4IDM1MiA0OCAzNTJDNTYuODQ0IDM1MiA2NCAzNDQuODQ0IDY0IDMzNlM1Ni44NDQgMzIwIDQ4IDMyMEMyMS41MzEgMzIwIDAgMzQxLjUzMSAwIDM2OFY0MzJDMCA0NTguNDY5IDIxLjUzMSA0ODAgNDggNDgwSDUyOEM1NTQuNDY5IDQ4MCA1NzYgNDU4LjQ2OSA1NzYgNDMyVjM2OEM1NzYgMzQxLjUzMSA1NTQuNDY5IDMyMCA1MjggMzIwWk04MCA0MTZINDk2QzUwNC44MzYgNDE2IDUxMiA0MDguODM2IDUxMiA0MDBTNTA0LjgzNiAzODQgNDk2IDM4NEg0ODBWODBDNDgwIDUzLjQ5MiA0NTguNTEgMzIgNDMyIDMySDE0NEMxMTcuNDkgMzIgOTYgNTMuNDkyIDk2IDgwVjM4NEg4MEM3MS4xNjQgMzg0IDY0IDM5MS4xNjQgNjQgNDAwUzcxLjE2NCA0MTYgODAgNDE2Wk0xMjggODBDMTI4IDcxLjE2NCAxMzUuMTY0IDY0IDE0NCA2NEg0MzJDNDQwLjgzNiA2NCA0NDggNzEuMTY0IDQ0OCA4MFYzODRIMTI4VjgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CheckToSlot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M355.281 134.281L267.938 248.656L218.594 205.156C211.906 199.312 201.844 199.969 196 206.562C190.156 213.219 190.781 223.312 197.406 229.156L259.625 284C262.562 286.594 266.344 288 270.219 288C270.75 288 271.25 287.969 271.781 287.938C276.188 287.5 280.25 285.25 282.938 281.719L380.719 153.719C386.094 146.687 384.75 136.656 377.719 131.281C370.719 125.938 360.656 127.219 355.281 134.281ZM528 320C519.156 320 512 327.156 512 336S519.156 352 528 352C536.812 352 544 359.172 544 368V432C544 440.828 536.812 448 528 448H48C39.188 448 32 440.828 32 432V368C32 359.172 39.188 352 48 352C56.844 352 64 344.844 64 336S56.844 320 48 320C21.531 320 0 341.531 0 368V432C0 458.469 21.531 480 48 480H528C554.469 480 576 458.469 576 432V368C576 341.531 554.469 320 528 320ZM80 416H496C504.836 416 512 408.836 512 400S504.836 384 496 384H480V80C480 53.492 458.51 32 432 32H144C117.49 32 96 53.492 96 80V384H80C71.164 384 64 391.164 64 400S71.164 416 80 416ZM128 80C128 71.164 135.164 64 144 64H432C440.836 64 448 71.164 448 80V384H128V80Z" />
        </Icon>
    </>
}