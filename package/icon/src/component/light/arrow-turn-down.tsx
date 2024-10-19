
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-turn-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=light arrow-turn-down}
 * @preview ![arrow-turn-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDcuMzEyIDM2My4zMTJMMjAzLjMxMiA1MDcuMzEyQzIwMC4xODggNTEwLjQzOCAxOTYuMDk0IDUxMiAxOTIgNTEyUzE4My44MTIgNTEwLjQzOCAxODAuNjg4IDUwNy4zMTJMMzYuNjg4IDM2My4zMTJDMzAuNDM4IDM1Ny4wNjIgMzAuNDM4IDM0Ni45MzcgMzYuNjg4IDM0MC42ODhTNTMuMDYzIDMzNC40MzggNTkuMzEyIDM0MC42ODhMMTc2IDQ1Ny4zNzVWODBDMTc2IDUzLjUzMSAxNTQuNDY5IDMyIDEyOCAzMkgxNkM3LjE1NiAzMiAwIDI0Ljg0NCAwIDE2UzcuMTU2IDAgMTYgMEgxMjhDMTcyLjEwOSAwIDIwOCAzNS44NzUgMjA4IDgwVjQ1Ny4zNzVMMzI0LjY4OCAzNDAuNjg4QzMzMC45MzggMzM0LjQzOCAzNDEuMDYzIDMzNC40MzggMzQ3LjMxMiAzNDAuNjg4UzM1My41NjIgMzU3LjA2MiAzNDcuMzEyIDM2My4zMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowTurnDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M347.312 363.312L203.312 507.312C200.188 510.438 196.094 512 192 512S183.812 510.438 180.688 507.312L36.688 363.312C30.438 357.062 30.438 346.937 36.688 340.688S53.063 334.438 59.312 340.688L176 457.375V80C176 53.531 154.469 32 128 32H16C7.156 32 0 24.844 0 16S7.156 0 16 0H128C172.109 0 208 35.875 208 80V457.375L324.688 340.688C330.938 334.438 341.063 334.438 347.312 340.688S353.562 357.062 347.312 363.312Z" />
        </Icon>
    </>
}