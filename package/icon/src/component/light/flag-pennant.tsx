
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flag-pennant` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=light flag-pennant}
 * @preview ![flag-pennant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYuNTE0IDE4NS43ODlMMzEuNzAzIDE0LjUzMUMzMC45MjYgNi40MTggMjQuMzE0IDAgMTYgMEM3LjE2NCAwIDAgNy4xNjQgMCAxNlY0OTZDMCA1MDQuODM2IDcuMTY0IDUxMiAxNiA1MTJTMzIgNTA0LjgzNiAzMiA0OTZWNDAxLjM1Mkw0OTYuNTE0IDIzMC4yMTFDNTE3LjE2MiAyMjIuNjAyIDUxNy4xNjIgMTkzLjM5NSA0OTYuNTE0IDE4NS43ODlaTTMyIDM2Ny4yNDJWNDguNzVMNDY0LjIzMiAyMDhMMzIgMzY3LjI0MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FlagPennant(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496.514 185.789L31.703 14.531C30.926 6.418 24.314 0 16 0C7.164 0 0 7.164 0 16V496C0 504.836 7.164 512 16 512S32 504.836 32 496V401.352L496.514 230.211C517.162 222.602 517.162 193.395 496.514 185.789ZM32 367.242V48.75L464.232 208L32 367.242Z" />
        </Icon>
    </>
}