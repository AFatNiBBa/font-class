
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-arrow-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-arrow-down?s=regular calendar-arrow-down}
 * @preview ![calendar-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDcuMDMxIDQyNC45NjlDMjExLjcxOSA0MjkuNjU2IDIxNy44NTkgNDMyIDIyNCA0MzJTMjM2LjI4MSA0MjkuNjU2IDI0MC45NjkgNDI0Ljk2OUwzMjAuOTY5IDM0NC45NjlDMzMwLjM0NCAzMzUuNTk0IDMzMC4zNDQgMzIwLjQwNiAzMjAuOTY5IDMxMS4wMzFTMjk2LjQwNiAzMDEuNjU2IDI4Ny4wMzEgMzExLjAzMUwyNDggMzUwLjA2MlYyNDhDMjQ4IDIzNC43NSAyMzcuMjUgMjI0IDIyNCAyMjRTMjAwIDIzNC43NSAyMDAgMjQ4VjM1MC4wNjJMMTYwLjk2OSAzMTEuMDMxQzE1MS41OTQgMzAxLjY1NiAxMzYuNDA2IDMwMS42NTYgMTI3LjAzMSAzMTEuMDMxUzExNy42NTYgMzM1LjU5NCAxMjcuMDMxIDM0NC45NjlMMjA3LjAzMSA0MjQuOTY5Wk0zODQgNjRIMzQ0VjI0QzM0NCAxMC43NSAzMzMuMjUgMCAzMjAgMFMyOTYgMTAuNzUgMjk2IDI0VjY0SDE1MlYyNEMxNTIgMTAuNzUgMTQxLjI1IDAgMTI4IDBTMTA0IDEwLjc1IDEwNCAyNFY2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTIgMCAxMjhWNDQ4QzAgNDgzLjM0OCAyOC42NTQgNTEyIDY0IDUxMkgzODRDNDE5LjM0NiA1MTIgNDQ4IDQ4My4zNDggNDQ4IDQ0OFYxMjhDNDQ4IDkyLjY1MiA0MTkuMzQ2IDY0IDM4NCA2NFpNNDAwIDQ0OEM0MDAgNDU2LjgyNCAzOTIuODIyIDQ2NCAzODQgNDY0SDY0QzU1LjE3OCA0NjQgNDggNDU2LjgyNCA0OCA0NDhWMTkySDQwMFY0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CalendarArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M207.031 424.969C211.719 429.656 217.859 432 224 432S236.281 429.656 240.969 424.969L320.969 344.969C330.344 335.594 330.344 320.406 320.969 311.031S296.406 301.656 287.031 311.031L248 350.062V248C248 234.75 237.25 224 224 224S200 234.75 200 248V350.062L160.969 311.031C151.594 301.656 136.406 301.656 127.031 311.031S117.656 335.594 127.031 344.969L207.031 424.969ZM384 64H344V24C344 10.75 333.25 0 320 0S296 10.75 296 24V64H152V24C152 10.75 141.25 0 128 0S104 10.75 104 24V64H64C28.654 64 0 92.652 0 128V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V128C448 92.652 419.346 64 384 64ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V192H400V448Z" />
        </Icon>
    </>
}