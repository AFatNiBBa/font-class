
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-curly` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-curly?s=thin bracket-curly}
 * @preview ![bracket-curly](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCAxNTIuNDUzVjEwNEM4MCA3My4xMjUgMTA1LjEyNSA0OCAxMzYgNDhIMTg0QzE4OC40MjIgNDggMTkyIDQ0LjQyMiAxOTIgNDBTMTg4LjQyMiAzMiAxODQgMzJIMTM2Qzk2LjI5NyAzMiA2NCA2NC4yOTcgNjQgMTA0VjE1Mi40NTNDNjQgMTkzLjUzMSA0MS4xNzIgMjMwLjQ2OSA0LjQyMiAyNDguODQ0QzEuNzE5IDI1MC4yMDMgMCAyNTIuOTY5IDAgMjU2UzEuNzE5IDI2MS43OTcgNC40MjIgMjYzLjE1NkM0MS4xNzIgMjgxLjUzMSA2NCAzMTguNDY5IDY0IDM1OS41NDdWNDA4QzY0IDQ0Ny43MDMgOTYuMjk3IDQ4MCAxMzYgNDgwSDE4NEMxODguNDIyIDQ4MCAxOTIgNDc2LjQyMiAxOTIgNDcyUzE4OC40MjIgNDY0IDE4NCA0NjRIMTM2QzEwNS4xMjUgNDY0IDgwIDQzOC44NzUgODAgNDA4VjM1OS41NDdDODAgMzE3LjIwMyA1OC44OTEgMjc4LjcwMyAyNC4wNjIgMjU2QzU4Ljg5MSAyMzMuMjk3IDgwIDE5NC43OTcgODAgMTUyLjQ1M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BracketCurly(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M80 152.453V104C80 73.125 105.125 48 136 48H184C188.422 48 192 44.422 192 40S188.422 32 184 32H136C96.297 32 64 64.297 64 104V152.453C64 193.531 41.172 230.469 4.422 248.844C1.719 250.203 0 252.969 0 256S1.719 261.797 4.422 263.156C41.172 281.531 64 318.469 64 359.547V408C64 447.703 96.297 480 136 480H184C188.422 480 192 476.422 192 472S188.422 464 184 464H136C105.125 464 80 438.875 80 408V359.547C80 317.203 58.891 278.703 24.062 256C58.891 233.297 80 194.797 80 152.453Z" />
        </Icon>
    </>
}