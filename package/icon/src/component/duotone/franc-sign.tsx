
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `franc-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/franc-sign?s=duotone franc-sign}
 * @preview ![franc-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMzUyQzAgMzY5LjY3MiAxNC4zMTIgMzg0IDMyIDM4NEg0OFYzMjBIMzJDMTQuMzEyIDMyMCAwIDMzNC4zMjggMCAzNTJaTTE5MiAzMjBIMTI4VjM4NEgxOTJDMjA5LjY4OCAzODQgMjI0IDM2OS42NzIgMjI0IDM1MlMyMDkuNjg4IDMyMCAxOTIgMzIwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMjAgNzJDMzIwIDk0LjA5NCAzMDIuMDk0IDExMiAyODAgMTEySDEyOFYxOTJIMjQ4QzI3MC4wOTQgMTkyIDI4OCAyMDkuOTA2IDI4OCAyMzJTMjcwLjA5NCAyNzIgMjQ4IDI3MkgxMjhWNDQwQzEyOCA0NjIuMDk0IDExMC4wOTQgNDgwIDg4IDQ4MFM0OCA0NjIuMDk0IDQ4IDQ0MFY3MkM0OCA0OS45MDYgNjUuOTA2IDMyIDg4IDMySDI4MEMzMDIuMDk0IDMyIDMyMCA0OS45MDYgMzIwIDcyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FrancSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M0 352C0 369.672 14.312 384 32 384H48V320H32C14.312 320 0 334.328 0 352ZM192 320H128V384H192C209.688 384 224 369.672 224 352S209.688 320 192 320Z" />
            <path d="M320 72C320 94.094 302.094 112 280 112H128V192H248C270.094 192 288 209.906 288 232S270.094 272 248 272H128V440C128 462.094 110.094 480 88 480S48 462.094 48 440V72C48 49.906 65.906 32 88 32H280C302.094 32 320 49.906 320 72Z" />
        </Icon>
    </>
}