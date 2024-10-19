
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `border-outer` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=light border-outer}
 * @preview ![border-outer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMzI4QzIxMC43NDYgMzI4IDIwMCAzMzguNzQ0IDIwMCAzNTJDMjAwIDM2NS4yNTQgMjEwLjc0NiAzNzYgMjI0IDM3NlMyNDggMzY1LjI1NCAyNDggMzUyQzI0OCAzMzguNzQ0IDIzNy4yNTQgMzI4IDIyNCAzMjhaTTEyOCAyMzJDMTE0Ljc0NiAyMzIgMTA0IDI0Mi43NDQgMTA0IDI1NkMxMDQgMjY5LjI1NCAxMTQuNzQ2IDI4MCAxMjggMjgwUzE1MiAyNjkuMjU0IDE1MiAyNTZDMTUyIDI0Mi43NDQgMTQxLjI1NCAyMzIgMTI4IDIzMlpNMjI0IDIzMkMyMTAuNzQ2IDIzMiAyMDAgMjQyLjc0NCAyMDAgMjU2QzIwMCAyNjkuMjU0IDIxMC43NDYgMjgwIDIyNCAyODBTMjQ4IDI2OS4yNTQgMjQ4IDI1NkMyNDggMjQyLjc0NCAyMzcuMjU0IDIzMiAyMjQgMjMyWk0zMjAgMjMyQzMwNi43NDYgMjMyIDI5NiAyNDIuNzQ0IDI5NiAyNTZDMjk2IDI2OS4yNTQgMzA2Ljc0NiAyODAgMzIwIDI4MFMzNDQgMjY5LjI1NCAzNDQgMjU2QzM0NCAyNDIuNzQ0IDMzMy4yNTQgMjMyIDMyMCAyMzJaTTIyNCAxMzZDMjEwLjc0NiAxMzYgMjAwIDE0Ni43NDQgMjAwIDE2MEMyMDAgMTczLjI1NCAyMTAuNzQ2IDE4NCAyMjQgMTg0UzI0OCAxNzMuMjU0IDI0OCAxNjBDMjQ4IDE0Ni43NDQgMjM3LjI1NCAxMzYgMjI0IDEzNlpNNDAwIDMySDQ4QzIxLjQ5MiAzMiAwIDUzLjQ5IDAgODBWNDMyQzAgNDU4LjUxIDIxLjQ5MiA0ODAgNDggNDgwSDQwMEM0MjYuNTA4IDQ4MCA0NDggNDU4LjUxIDQ0OCA0MzJWODBDNDQ4IDUzLjQ5IDQyNi41MDggMzIgNDAwIDMyWk00MTYgNDMyQzQxNiA0NDAuODIyIDQwOC44MjQgNDQ4IDQwMCA0NDhINDhDMzkuMTc2IDQ0OCAzMiA0NDAuODIyIDMyIDQzMlY4MEMzMiA3MS4xNzggMzkuMTc2IDY0IDQ4IDY0SDQwMEM0MDguODI0IDY0IDQxNiA3MS4xNzggNDE2IDgwVjQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BorderOuter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 328C210.746 328 200 338.744 200 352C200 365.254 210.746 376 224 376S248 365.254 248 352C248 338.744 237.254 328 224 328ZM128 232C114.746 232 104 242.744 104 256C104 269.254 114.746 280 128 280S152 269.254 152 256C152 242.744 141.254 232 128 232ZM224 232C210.746 232 200 242.744 200 256C200 269.254 210.746 280 224 280S248 269.254 248 256C248 242.744 237.254 232 224 232ZM320 232C306.746 232 296 242.744 296 256C296 269.254 306.746 280 320 280S344 269.254 344 256C344 242.744 333.254 232 320 232ZM224 136C210.746 136 200 146.744 200 160C200 173.254 210.746 184 224 184S248 173.254 248 160C248 146.744 237.254 136 224 136ZM400 32H48C21.492 32 0 53.49 0 80V432C0 458.51 21.492 480 48 480H400C426.508 480 448 458.51 448 432V80C448 53.49 426.508 32 400 32ZM416 432C416 440.822 408.824 448 400 448H48C39.176 448 32 440.822 32 432V80C32 71.178 39.176 64 48 64H400C408.824 64 416 71.178 416 80V432Z" />
        </Icon>
    </>
}