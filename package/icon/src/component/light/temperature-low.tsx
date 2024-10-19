
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-low` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-low?s=light temperature-low}
 * @preview ![temperature-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMzU0Ljg3NVYzMDRDMTkyIDI5NS4yNSAxODQuNzUgMjg4IDE3NiAyODhTMTYwIDI5NS4yNSAxNjAgMzA0VjM1NC44NzVDMTQxLjM3NSAzNjEuNSAxMjggMzc5LjEyNSAxMjggNDAwQzEyOCA0MjYuNSAxNDkuNSA0NDggMTc2IDQ0OFMyMjQgNDI2LjUgMjI0IDQwMEMyMjQgMzc5LjEyNSAyMTAuNjI1IDM2MS41IDE5MiAzNTQuODc1Wk0zODQgMzJDMzQ4Ljc1IDMyIDMyMCA2MC43NSAzMjAgOTZTMzQ4Ljc1IDE2MCAzODQgMTYwUzQ0OCAxMzEuMjUgNDQ4IDk2UzQxOS4yNSAzMiAzODQgMzJaTTM4NCAxMjhDMzY2LjI1IDEyOCAzNTIgMTEzLjc1IDM1MiA5NlMzNjYuMjUgNjQgMzg0IDY0UzQxNiA3OC4yNSA0MTYgOTZTNDAxLjc1IDEyOCAzODQgMTI4Wk0yNTYgODBDMjU2IDM1Ljg3NSAyMjAuMTI1IDAgMTc2IDBTOTYgMzUuODc1IDk2IDgwVjMyMS44NzVDNzUuNzUgMzQyLjYyNSA2NCAzNzAuNzUgNjQgNDAwQzY0IDQ2MS43NSAxMTQuMjUgNTEyIDE3NiA1MTJTMjg4IDQ2MS43NSAyODggNDAwQzI4OCAzNzAuNzUgMjc2LjI1IDM0Mi42MjUgMjU2IDMyMS44NzVWODBaTTE3NiA0ODBDMTMxLjg3NSA0ODAgOTYgNDQ0LjEyNSA5NiA0MDBDOTYgMzc0LjUgMTA4LjI1IDM1MS4xMjUgMTI4IDMzNi4yNVY4MEMxMjggNTMuNSAxNDkuNSAzMiAxNzYgMzJTMjI0IDUzLjUgMjI0IDgwVjMzNi4yNUMyNDMuNzUgMzUxIDI1NiAzNzQuNSAyNTYgNDAwQzI1NiA0NDQuMTI1IDIyMC4xMjUgNDgwIDE3NiA0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TemperatureLow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M192 354.875V304C192 295.25 184.75 288 176 288S160 295.25 160 304V354.875C141.375 361.5 128 379.125 128 400C128 426.5 149.5 448 176 448S224 426.5 224 400C224 379.125 210.625 361.5 192 354.875ZM384 32C348.75 32 320 60.75 320 96S348.75 160 384 160S448 131.25 448 96S419.25 32 384 32ZM384 128C366.25 128 352 113.75 352 96S366.25 64 384 64S416 78.25 416 96S401.75 128 384 128ZM256 80C256 35.875 220.125 0 176 0S96 35.875 96 80V321.875C75.75 342.625 64 370.75 64 400C64 461.75 114.25 512 176 512S288 461.75 288 400C288 370.75 276.25 342.625 256 321.875V80ZM176 480C131.875 480 96 444.125 96 400C96 374.5 108.25 351.125 128 336.25V80C128 53.5 149.5 32 176 32S224 53.5 224 80V336.25C243.75 351 256 374.5 256 400C256 444.125 220.125 480 176 480Z" />
        </Icon>
    </>
}