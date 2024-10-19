
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `knife` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/knife?s=duotone knife}
 * @preview ![knife](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3OS42MDkgMzE1LjA4NkwyMDIgMjM3LjQ3N0w0NDEuMzIyIDguMzc5QzQ1Mi40NDMgLTIuNzQyIDQ3MC41NzQgLTIuODQ0IDQ4MS44MDEgOC4zNzlDNTI5LjU3NCA1Ni4xNTYgNTU2LjQ2MSAzMzEuMTggMjc5LjYwOSAzMTUuMDg2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMDEuODI2IDIzNy40NzdMMjc5LjQzNSAzMTUuMDg2TDkwLjM4OCA1MDIuNTA0Qzg1LjE0NCA1MDguMzI4IDc3LjczOCA1MTEuNzgxIDY5Ljg4NiA1MTEuOTkyQzYyLjAwNSA1MTIuMTc2IDU0LjQxNyA1MDkuMTcyIDQ4Ljg1NyA1MDMuNjA5TDguMzggNDYzLjEzM0MtMi43OTMgNDUxLjk2MSAtMi43OTMgNDMzLjgyOCA4LjM4IDQyMi42NTZMMjAxLjgyNiAyMzcuNDc3WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Knife(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M279.609 315.086L202 237.477L441.322 8.379C452.443 -2.742 470.574 -2.844 481.801 8.379C529.574 56.156 556.461 331.18 279.609 315.086Z" />
            <path d="M201.826 237.477L279.435 315.086L90.388 502.504C85.144 508.328 77.738 511.781 69.886 511.992C62.005 512.176 54.417 509.172 48.857 503.609L8.38 463.133C-2.793 451.961 -2.793 433.828 8.38 422.656L201.826 237.477Z" />
        </Icon>
    </>
}