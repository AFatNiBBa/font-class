
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `boot` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=duotone boot}
 * @preview ![boot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAzNzlWNDQ4SDBWOTZIMzIwVjE2MEgyNzJDMjYzLjIgMTYwIDI1NiAxNjcuMiAyNTYgMTc2VjE3NkMyNTYgMTg0LjggMjYzLjIgMTkyIDI3MiAxOTJIMzIwVjIyNEgyNzJDMjYzLjIgMjI0IDI1NiAyMzEuMiAyNTYgMjQwVjI0MEMyNTYgMjQ4LjggMjYzLjIgMjU2IDI3MiAyNTZIMzIwTDQzOS4yNSAyODUuNzVDNDgxLjk5OSAyOTYuNSA1MTIgMzM0Ljg3NSA1MTIgMzc5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0wIDQ0OFY0ODBMMzIgNTEySDk2TDEyOCA0ODBMMTYwIDUxMkgyMjRMMjU2IDQ4MEwyODggNTEySDM1MkwzODQgNDgwTDQxNiA1MTJINDgwTDUxMiA0ODBWNDQ4SDBaTTM1MiA4MFYxNkMzNTIgNy4yNSAzNDQuNzUgMCAzMzYgMEgxNkM3LjI1IDAgMCA3LjI1IDAgMTZWOTZIMzM2QzM0NC43NSA5NiAzNTIgODguNzUgMzUyIDgwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Boot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M512 379V448H0V96H320V160H272C263.2 160 256 167.2 256 176V176C256 184.8 263.2 192 272 192H320V224H272C263.2 224 256 231.2 256 240V240C256 248.8 263.2 256 272 256H320L439.25 285.75C481.999 296.5 512 334.875 512 379Z" />
            <path d="M0 448V480L32 512H96L128 480L160 512H224L256 480L288 512H352L384 480L416 512H480L512 480V448H0ZM352 80V16C352 7.25 344.75 0 336 0H16C7.25 0 0 7.25 0 16V96H336C344.75 96 352 88.75 352 80Z" />
        </Icon>
    </>
}