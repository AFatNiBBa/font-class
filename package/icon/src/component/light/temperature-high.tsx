
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `temperature-high` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-high?s=light temperature-high}
 * @preview ![temperature-high](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJDMzQ4Ljc1IDMyIDMyMCA2MC43NSAzMjAgOTZTMzQ4Ljc1IDE2MCAzODQgMTYwUzQ0OCAxMzEuMjUgNDQ4IDk2UzQxOS4yNSAzMiAzODQgMzJaTTM4NCAxMjhDMzY2LjI1IDEyOCAzNTIgMTEzLjc1IDM1MiA5NlMzNjYuMjUgNjQgMzg0IDY0UzQxNiA3OC4yNSA0MTYgOTZTNDAxLjc1IDEyOCAzODQgMTI4Wk0yNTYgODBDMjU2IDM1Ljg3NSAyMjAuMTI1IDAgMTc2IDBTOTYgMzUuODc1IDk2IDgwVjMyMS44NzVDNzUuNzUgMzQyLjYyNSA2NCAzNzAuNzUgNjQgNDAwQzY0IDQ2MS43NSAxMTQuMjUgNTEyIDE3NiA1MTJTMjg4IDQ2MS43NSAyODggNDAwQzI4OCAzNzAuNzUgMjc2LjI1IDM0Mi42MjUgMjU2IDMyMS44NzVWODBaTTE3NiA0ODBDMTMxLjg3NSA0ODAgOTYgNDQ0LjEyNSA5NiA0MDBDOTYgMzc0LjUgMTA4LjI1IDM1MS4xMjUgMTI4IDMzNi4yNVY4MEMxMjggNTMuNSAxNDkuNSAzMiAxNzYgMzJTMjI0IDUzLjUgMjI0IDgwVjMzNi4yNUMyNDMuNzUgMzUxIDI1NiAzNzQuNSAyNTYgNDAwQzI1NiA0NDQuMTI1IDIyMC4xMjUgNDgwIDE3NiA0ODBaTTE5MiAzNTQuODc1VjgwQzE5MiA3MS4yNSAxODQuNzUgNjQgMTc2IDY0UzE2MCA3MS4yNSAxNjAgODBWMzU0Ljg3NUMxNDEuMzc1IDM2MS41IDEyOCAzNzkuMTI1IDEyOCA0MDBDMTI4IDQyNi41IDE0OS41IDQ0OCAxNzYgNDQ4UzIyNCA0MjYuNSAyMjQgNDAwQzIyNCAzNzkuMTI1IDIxMC42MjUgMzYxLjUgMTkyIDM1NC44NzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TemperatureHigh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M384 32C348.75 32 320 60.75 320 96S348.75 160 384 160S448 131.25 448 96S419.25 32 384 32ZM384 128C366.25 128 352 113.75 352 96S366.25 64 384 64S416 78.25 416 96S401.75 128 384 128ZM256 80C256 35.875 220.125 0 176 0S96 35.875 96 80V321.875C75.75 342.625 64 370.75 64 400C64 461.75 114.25 512 176 512S288 461.75 288 400C288 370.75 276.25 342.625 256 321.875V80ZM176 480C131.875 480 96 444.125 96 400C96 374.5 108.25 351.125 128 336.25V80C128 53.5 149.5 32 176 32S224 53.5 224 80V336.25C243.75 351 256 374.5 256 400C256 444.125 220.125 480 176 480ZM192 354.875V80C192 71.25 184.75 64 176 64S160 71.25 160 80V354.875C141.375 361.5 128 379.125 128 400C128 426.5 149.5 448 176 448S224 426.5 224 400C224 379.125 210.625 361.5 192 354.875Z" />
        </Icon>
    </>
}