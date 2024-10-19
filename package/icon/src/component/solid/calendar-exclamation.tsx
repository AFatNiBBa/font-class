
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-exclamation` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-exclamation?s=solid calendar-exclamation}
 * @preview ![calendar-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkg0MDBDNDI2LjUgNTEyIDQ0OCA0OTAuNSA0NDggNDY0VjE5MkgwVjQ2NFpNMjAwIDI2NEMyMDAgMjUwLjc1IDIxMC43NSAyNDAgMjI0IDI0MFMyNDggMjUwLjc1IDI0OCAyNjRWMzQ0QzI0OCAzNTcuMjUgMjM3LjI1IDM2OCAyMjQgMzY4UzIwMCAzNTcuMjUgMjAwIDM0NFYyNjRaTTIyNCA0MDBDMjQxLjY3NCA0MDAgMjU2IDQxNC4zMjggMjU2IDQzMlMyNDEuNjc0IDQ2NCAyMjQgNDY0UzE5MiA0NDkuNjcyIDE5MiA0MzJTMjA2LjMyNiA0MDAgMjI0IDQwMFpNNDAwIDY0SDM1MlYzMkMzNTIgMTQuNCAzMzcuNiAwIDMyMCAwSDMyMEMzMDIuNCAwIDI4OCAxNC40IDI4OCAzMlY2NEgxNjBWMzJDMTYwIDE0LjQgMTQ1LjYgMCAxMjggMEgxMjhDMTEwLjQgMCA5NiAxNC40IDk2IDMyVjY0SDQ4QzIxLjQ5IDY0IDAgODUuNDkgMCAxMTJWMTYwSDQ0OFYxMTJDNDQ4IDg1LjQ5IDQyNi41MSA2NCA0MDAgNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CalendarExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0V464ZM200 264C200 250.75 210.75 240 224 240S248 250.75 248 264V344C248 357.25 237.25 368 224 368S200 357.25 200 344V264ZM224 400C241.674 400 256 414.328 256 432S241.674 464 224 464S192 449.672 192 432S206.326 400 224 400ZM400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V160H448V112C448 85.49 426.51 64 400 64Z" />
        </Icon>
    </>
}