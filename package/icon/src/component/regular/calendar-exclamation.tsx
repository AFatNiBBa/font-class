
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-exclamation` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-exclamation?s=regular calendar-exclamation}
 * @preview ![calendar-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDMyQzI0MS42NzQgNDMyIDI1NiA0MTcuNjcyIDI1NiA0MDBTMjQxLjY3NCAzNjggMjI0IDM2OEMyMDYuMzI4IDM2OCAxOTIgMzgyLjMyOCAxOTIgNDAwUzIwNi4zMjggNDMyIDIyNCA0MzJaTTIyNCAzMzZDMjM3LjI1IDMzNiAyNDggMzI1LjI1IDI0OCAzMTJWMjQ4QzI0OCAyMzQuNzUgMjM3LjI1IDIyNCAyMjQgMjI0UzIwMCAyMzQuNzUgMjAwIDI0OFYzMTJDMjAwIDMyNS4yNSAyMTAuNzUgMzM2IDIyNCAzMzZaTTM4NCA2NEgzNDRWMjRDMzQ0IDEwLjc1IDMzMy4yNSAwIDMyMCAwUzI5NiAxMC43NSAyOTYgMjRWNjRIMTUyVjI0QzE1MiAxMC43NSAxNDEuMjUgMCAxMjggMFMxMDQgMTAuNzUgMTA0IDI0VjY0SDY0QzI4LjY1NCA2NCAwIDkyLjY1MiAwIDEyOFY0NDhDMCA0ODMuMzQ4IDI4LjY1NCA1MTIgNjQgNTEySDM4NEM0MTkuMzQ2IDUxMiA0NDggNDgzLjM0OCA0NDggNDQ4VjEyOEM0NDggOTIuNjUyIDQxOS4zNDYgNjQgMzg0IDY0Wk00MDAgNDQ4QzQwMCA0NTYuODI0IDM5Mi44MjIgNDY0IDM4NCA0NjRINjRDNTUuMTc4IDQ2NCA0OCA0NTYuODI0IDQ4IDQ0OFYxOTJINDAwVjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CalendarExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 432C241.674 432 256 417.672 256 400S241.674 368 224 368C206.328 368 192 382.328 192 400S206.328 432 224 432ZM224 336C237.25 336 248 325.25 248 312V248C248 234.75 237.25 224 224 224S200 234.75 200 248V312C200 325.25 210.75 336 224 336ZM384 64H344V24C344 10.75 333.25 0 320 0S296 10.75 296 24V64H152V24C152 10.75 141.25 0 128 0S104 10.75 104 24V64H64C28.654 64 0 92.652 0 128V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V128C448 92.652 419.346 64 384 64ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V192H400V448Z" />
        </Icon>
    </>
}