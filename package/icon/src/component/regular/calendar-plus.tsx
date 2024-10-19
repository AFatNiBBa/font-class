
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-plus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-plus?s=regular calendar-plus}
 * @preview ![calendar-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNjRIMzQ0VjI0QzM0NCAxMC43NSAzMzMuMjUgMCAzMjAgMFMyOTYgMTAuNzUgMjk2IDI0VjY0SDE1MlYyNEMxNTIgMTAuNzUgMTQxLjI1IDAgMTI4IDBTMTA0IDEwLjc1IDEwNCAyNFY2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTIgMCAxMjhWNDQ4QzAgNDgzLjM0OCAyOC42NTQgNTEyIDY0IDUxMkgzODRDNDE5LjM0NiA1MTIgNDQ4IDQ4My4zNDggNDQ4IDQ0OFYxMjhDNDQ4IDkyLjY1MiA0MTkuMzQ2IDY0IDM4NCA2NFpNNDAwIDQ0OEM0MDAgNDU2LjgyNCAzOTIuODIyIDQ2NCAzODQgNDY0SDY0QzU1LjE3OCA0NjQgNDggNDU2LjgyNCA0OCA0NDhWMTkySDQwMFY0NDhaTTE0My45OTggMzUxLjk5OEgyMDAuMDAyVjQwOC4wMDJDMjAwLjAwMiA0MjEuMjU4IDIxMC43MzQgNDMyIDIyNCA0MzJDMjM3LjI1OCA0MzIgMjQ3Ljk5OCA0MjEuMjYyIDI0Ny45OTggNDA4LjAwMlYzNTEuOTk4SDMwNC4wMDJDMzE3LjI2MiAzNTEuOTk4IDMyOCAzNDEuMjU4IDMyOCAzMjhTMzE3LjI2MiAzMDQuMDAyIDMwNC4wMDIgMzA0LjAwMkgyNDcuOTk4VjI0Ny45OThDMjQ3Ljk5OCAyMzQuNzM4IDIzNy4yNTggMjI0IDIyNCAyMjRTMjAwLjAwMiAyMzQuNzM4IDIwMC4wMDIgMjQ3Ljk5OFYzMDQuMDAySDE0My45OThDMTMwLjczOCAzMDQuMDAyIDEyMCAzMTQuNzQyIDEyMCAzMjhDMTIwIDM0MS4yNTYgMTMwLjczIDM1MS45OTggMTQzLjk5OCAzNTEuOTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CalendarPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 64H344V24C344 10.75 333.25 0 320 0S296 10.75 296 24V64H152V24C152 10.75 141.25 0 128 0S104 10.75 104 24V64H64C28.654 64 0 92.652 0 128V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V128C448 92.652 419.346 64 384 64ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V192H400V448ZM143.998 351.998H200.002V408.002C200.002 421.258 210.734 432 224 432C237.258 432 247.998 421.262 247.998 408.002V351.998H304.002C317.262 351.998 328 341.258 328 328S317.262 304.002 304.002 304.002H247.998V247.998C247.998 234.738 237.258 224 224 224S200.002 234.738 200.002 247.998V304.002H143.998C130.738 304.002 120 314.742 120 328C120 341.256 130.73 351.998 143.998 351.998Z" />
        </Icon>
    </>
}