
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `do-not-enter` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/do-not-enter?s=duotone do-not-enter}
 * @preview ![do-not-enter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNi4wMDQgMzA0SDk2LjEwNUM4Ny4yNjYgMzA0IDgwIDI5Ni44NzUgODAgMjg4VjIyNEM4MCAyMTUuMTI1IDg3LjI2NiAyMDggOTYuMTA1IDIwOEg0MTYuMDA0QzQyNC44NDQgMjA4IDQzMi4xMDkgMjE1LjEyNSA0MzIuMTA5IDIyNFYyODhDNDMyLjEwOSAyOTYuODc1IDQyNC44NDQgMzA0IDQxNi4wMDQgMzA0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDE4IDE2IDI1NkMxNiAzODguNTggMTIzLjQ2MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU4IDQ5NiAyNTZDNDk2IDEyMy40MTggMzg4LjUzOSAxNiAyNTYgMTZaTTQxNS45NDkgMzA0SDk2LjA1MUM4Ny4yMTEgMzA0IDc5Ljk0NSAyOTYuODc1IDc5Ljk0NSAyODhWMjI0Qzc5Ljk0NSAyMTUuMTI1IDg3LjIxMSAyMDggOTYuMDUxIDIwOEg0MTUuOTQ5QzQyNC43ODkgMjA4IDQzMi4wNTUgMjE1LjEyNSA0MzIuMDU1IDIyNFYyODhDNDMyLjA1NSAyOTYuODc1IDQyNC43ODkgMzA0IDQxNS45NDkgMzA0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DoNotEnter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M416.004 304H96.105C87.266 304 80 296.875 80 288V224C80 215.125 87.266 208 96.105 208H416.004C424.844 208 432.109 215.125 432.109 224V288C432.109 296.875 424.844 304 416.004 304Z" />
            <path d="M256 16C123.461 16 16 123.418 16 256C16 388.58 123.461 496 256 496S496 388.58 496 256C496 123.418 388.539 16 256 16ZM415.949 304H96.051C87.211 304 79.945 296.875 79.945 288V224C79.945 215.125 87.211 208 96.051 208H415.949C424.789 208 432.055 215.125 432.055 224V288C432.055 296.875 424.789 304 415.949 304Z" />
        </Icon>
    </>
}