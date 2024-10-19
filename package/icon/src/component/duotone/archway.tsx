
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `archway` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=duotone archway}
 * @preview ![archway](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2MCA0NDhINTQ0VjY0SDMyVjQ0OEgxNkM3LjEyNSA0NDggMCA0NTUuMTI1IDAgNDY0VjQ5NkMwIDUwNC44NzUgNy4xMjUgNTEyIDE2IDUxMkgxNzZDMTg0Ljg3NSA1MTIgMTkyIDUwNC44NzUgMTkyIDQ5NlYzMjBDMTkyIDI2NyAyMzUgMjI0IDI4OCAyMjRTMzg0IDI2NyAzODQgMzIwVjQ5NkMzODQgNTA0Ljg3NSAzOTEuMTI1IDUxMiA0MDAgNTEySDU2MEM1NjguODc1IDUxMiA1NzYgNTA0Ljg3NSA1NzYgNDk2VjQ2NEM1NzYgNDU1LjEyNSA1NjguODc1IDQ0OCA1NjAgNDQ4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01NjAgMEgxNkM3LjEyNSAwIDAgNy4xMjUgMCAxNlY0OEMwIDU2Ljg3NSA3LjEyNSA2NCAxNiA2NEg1NjBDNTY4Ljg3NSA2NCA1NzYgNTYuODc1IDU3NiA0OFYxNkM1NzYgNy4xMjUgNTY4Ljg3NSAwIDU2MCAwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Archway(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M560 448H544V64H32V448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H176C184.875 512 192 504.875 192 496V320C192 267 235 224 288 224S384 267 384 320V496C384 504.875 391.125 512 400 512H560C568.875 512 576 504.875 576 496V464C576 455.125 568.875 448 560 448Z" />
            <path d="M560 0H16C7.125 0 0 7.125 0 16V48C0 56.875 7.125 64 16 64H560C568.875 64 576 56.875 576 48V16C576 7.125 568.875 0 560 0Z" />
        </Icon>
    </>
}