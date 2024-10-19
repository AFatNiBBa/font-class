
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal-good` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=solid signal-good}
 * @preview ![signal-good](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzODRDMTQuMzI2IDM4NCAwIDM5OC4zMjYgMCA0MTZWNDgwQzAgNDk3LjY3MiAxNC4zMjYgNTEyIDMyIDUxMlM2NCA0OTcuNjcyIDY0IDQ4MFY0MTZDNjQgMzk4LjMyNiA0OS42NzQgMzg0IDMyIDM4NFpNMjg4IDE5MkMyNzAuMzI2IDE5MiAyNTYgMjA2LjMyNiAyNTYgMjI0VjQ4MEMyNTYgNDk3LjY3MiAyNzAuMzI2IDUxMiAyODggNTEyUzMyMCA0OTcuNjcyIDMyMCA0ODBWMjI0QzMyMCAyMDYuMzI2IDMwNS42NzQgMTkyIDI4OCAxOTJaTTE2MCAyODhDMTQyLjMyNiAyODggMTI4IDMwMi4zMjYgMTI4IDMyMFY0ODBDMTI4IDQ5Ny42NzIgMTQyLjMyNiA1MTIgMTYwIDUxMlMxOTIgNDk3LjY3MiAxOTIgNDgwVjMyMEMxOTIgMzAyLjMyNiAxNzcuNjc0IDI4OCAxNjAgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SignalGood(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M32 384C14.326 384 0 398.326 0 416V480C0 497.672 14.326 512 32 512S64 497.672 64 480V416C64 398.326 49.674 384 32 384ZM288 192C270.326 192 256 206.326 256 224V480C256 497.672 270.326 512 288 512S320 497.672 320 480V224C320 206.326 305.674 192 288 192ZM160 288C142.326 288 128 302.326 128 320V480C128 497.672 142.326 512 160 512S192 497.672 192 480V320C192 302.326 177.674 288 160 288Z" />
        </Icon>
    </>
}