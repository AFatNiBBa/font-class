
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-star` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=regular calendar-star}
 * @preview ![calendar-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzEuNzUgMzUzLjA3TDE2My4xNTggNDAzLjEzM0MxNjEuNTU1IDQxMi4xODQgMTcxLjA2MiA0MTguOTQxIDE3OS4wODIgNDE0LjcwM0wyMjMuODczIDM5MC45OTJMMjY4LjY2NiA0MTQuNzAzQzI3Ni42ODQgNDE4Ljk0MSAyODYuMTkzIDQxMi4wNyAyODQuNzAzIDQwMy4xMzNMMjc1Ljk5NiAzNTMuMDdMMzEyLjMxMiAzMTcuNjcyQzMxOC44NDIgMzExLjM3NSAzMTUuMjkxIDMwMC4yNTggMzA2LjI0IDI5OC44ODdMMjU2LjE3OCAyOTEuNTU1TDIzMy43MjUgMjQ2LjE4OEMyMjkuNzE1IDIzOC4wNTUgMjE4LjAzMSAyMzcuOTQxIDIxNC4wMjEgMjQ2LjE4OEwxOTEuNTY4IDI5MS41NTVMMTQxLjM5MyAyOTguODg3QzEzMi40NTcgMzAwLjI1OCAxMjguOTA0IDMxMS4yNTggMTM1LjMyIDMxNy42NzJMMTcxLjc1IDM1My4wN1pNMzg0IDY0SDM0NFYyNEMzNDQgMTAuNzUgMzMzLjI1IDAgMzIwIDBTMjk2IDEwLjc1IDI5NiAyNFY2NEgxNTJWMjRDMTUyIDEwLjc1IDE0MS4yNSAwIDEyOCAwUzEwNCAxMC43NSAxMDQgMjRWNjRINjRDMjguNjU0IDY0IDAgOTIuNjUyIDAgMTI4VjQ0OEMwIDQ4My4zNDggMjguNjU0IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ4IDQ0OCA0NDhWMTI4QzQ0OCA5Mi42NTIgNDE5LjM0NiA2NCAzODQgNjRaTTQwMCA0NDhDNDAwIDQ1Ni44MjQgMzkyLjgyMiA0NjQgMzg0IDQ2NEg2NEM1NS4xNzggNDY0IDQ4IDQ1Ni44MjQgNDggNDQ4VjE5Mkg0MDBWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CalendarStar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M171.75 353.07L163.158 403.133C161.555 412.184 171.062 418.941 179.082 414.703L223.873 390.992L268.666 414.703C276.684 418.941 286.193 412.07 284.703 403.133L275.996 353.07L312.312 317.672C318.842 311.375 315.291 300.258 306.24 298.887L256.178 291.555L233.725 246.188C229.715 238.055 218.031 237.941 214.021 246.188L191.568 291.555L141.393 298.887C132.457 300.258 128.904 311.258 135.32 317.672L171.75 353.07ZM384 64H344V24C344 10.75 333.25 0 320 0S296 10.75 296 24V64H152V24C152 10.75 141.25 0 128 0S104 10.75 104 24V64H64C28.654 64 0 92.652 0 128V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V128C448 92.652 419.346 64 384 64ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V192H400V448Z" />
        </Icon>
    </>
}