
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `backward-step` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=duotone backward-step}
 * @preview ![backward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxLjk5OCA2NC4wMzFDMTQuMzI2IDY0LjAzMSAwIDc4LjM1NyAwIDk2LjAzMVY0MTUuOTY3QzAgNDMzLjY0MSAxNC4zMjggNDQ3Ljk2NyAzMi4wMDIgNDQ3Ljk2N0M0OS42NzQgNDQ3Ljk2NyA2NCA0MzMuNjQxIDY0IDQxNS45NjlWMjU2Vjk2LjAzM0M2NCA3OC4zNTkgNDkuNjcyIDY0LjAzMSAzMS45OTggNjQuMDMxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNjcuNDYzIDcxLjQwNkw3NS40MzkgMjMxLjM3OUM2Ny44MTQgMjM3LjgxNCA2NCAyNDYuOTA4IDY0IDI1NkM2NCAyNjUuMDk0IDY3LjgxNCAyNzQuMTg0IDc1LjQzOSAyODAuNjIxTDI2Ny40NjMgNDQwLjU5NEMyODguMDkgNDU3LjcxNSAzMTkuOTY5IDQ0My4zNDQgMzE5Ljk2OSA0MTUuOTczVjk2LjAyN0MzMTkuOTY5IDY4LjY1NiAyODguMDkgNTQuMjgzIDI2Ny40NjMgNzEuNDA2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BackwardStep(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M31.998 64.031C14.326 64.031 0 78.357 0 96.031V415.967C0 433.641 14.328 447.967 32.002 447.967C49.674 447.967 64 433.641 64 415.969V256V96.033C64 78.359 49.672 64.031 31.998 64.031Z" />
            <path d="M267.463 71.406L75.439 231.379C67.814 237.814 64 246.908 64 256C64 265.094 67.814 274.184 75.439 280.621L267.463 440.594C288.09 457.715 319.969 443.344 319.969 415.973V96.027C319.969 68.656 288.09 54.283 267.463 71.406Z" />
        </Icon>
    </>
}