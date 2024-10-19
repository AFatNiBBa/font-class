
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=solid gamepad}
 * @preview ![gamepad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNjRIMTkyQzg1Ljk2MSA2NCAwIDE0OS45NjEgMCAyNTZTODUuOTYxIDQ0OCAxOTIgNDQ4SDQ0OEM1NTQuMDM5IDQ0OCA2NDAgMzYyLjAzOSA2NDAgMjU2UzU1NC4wMzkgNjQgNDQ4IDY0Wk0yNDguMDU1IDI2Ny45ODhDMjQ4LjA1NSAyNzQuNjEzIDI0Mi42OCAyNzkuOTg4IDIzNi4wNTUgMjc5Ljk4OEgxODQuMDU1VjMzMS45ODhDMTg0LjA1NSAzMzguNjEzIDE3OC42OCAzNDMuOTg4IDE3Mi4wNTUgMzQzLjk4OEgxNDguMDU1QzE0MS40MyAzNDMuOTg4IDEzNi4wNTUgMzM4LjYxMyAxMzYuMDU1IDMzMS45ODhWMjc5Ljk4OEg4NC4wNTVDNzcuNDMgMjc5Ljk4OCA3Mi4wNTUgMjc0LjYxMyA3Mi4wNTUgMjY3Ljk4OFYyNDMuOTg4QzcyLjA1NSAyMzcuMzYzIDc3LjQzIDIzMS45ODggODQuMDU1IDIzMS45ODhIMTM2LjA1NVYxNzkuOTg4QzEzNi4wNTUgMTczLjM2MyAxNDEuNDMgMTY3Ljk4OCAxNDguMDU1IDE2Ny45ODhIMTcyLjA1NUMxNzguNjggMTY3Ljk4OCAxODQuMDU1IDE3My4zNjMgMTg0LjA1NSAxNzkuOTg4VjIzMS45ODhIMjM2LjA1NUMyNDIuNjggMjMxLjk4OCAyNDguMDU1IDIzNy4zNjMgMjQ4LjA1NSAyNDMuOTg4VjI2Ny45ODhaTTQzMiAzNDQuMDEyQzQwOS44NzUgMzQ0LjAxMiAzOTIgMzI2LjEzNyAzOTIgMzA0LjAxMlM0MDkuODc1IDI2NC4wMTIgNDMyIDI2NC4wMTJTNDcyIDI4MS44ODcgNDcyIDMwNC4wMTJTNDU0LjEyNSAzNDQuMDEyIDQzMiAzNDQuMDEyWk00OTYgMjQ4QzQ3My44NzUgMjQ4IDQ1NiAyMzAuMTI1IDQ1NiAyMDhTNDczLjg3NSAxNjggNDk2IDE2OFM1MzYgMTg1Ljg3NSA1MzYgMjA4UzUxOC4xMjUgMjQ4IDQ5NiAyNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Gamepad(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M448 64H192C85.961 64 0 149.961 0 256S85.961 448 192 448H448C554.039 448 640 362.039 640 256S554.039 64 448 64ZM248.055 267.988C248.055 274.613 242.68 279.988 236.055 279.988H184.055V331.988C184.055 338.613 178.68 343.988 172.055 343.988H148.055C141.43 343.988 136.055 338.613 136.055 331.988V279.988H84.055C77.43 279.988 72.055 274.613 72.055 267.988V243.988C72.055 237.363 77.43 231.988 84.055 231.988H136.055V179.988C136.055 173.363 141.43 167.988 148.055 167.988H172.055C178.68 167.988 184.055 173.363 184.055 179.988V231.988H236.055C242.68 231.988 248.055 237.363 248.055 243.988V267.988ZM432 344.012C409.875 344.012 392 326.137 392 304.012S409.875 264.012 432 264.012S472 281.887 472 304.012S454.125 344.012 432 344.012ZM496 248C473.875 248 456 230.125 456 208S473.875 168 496 168S536 185.875 536 208S518.125 248 496 248Z" />
        </Icon>
    </>
}