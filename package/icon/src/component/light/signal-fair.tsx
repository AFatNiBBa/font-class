
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal-fair` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=light signal-fair}
 * @preview ![signal-fair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzODRDMjMuMTU2IDM4NCAxNiAzOTEuMTU2IDE2IDQwMFY0OTZDMTYgNTA0Ljg0NCAyMy4xNTYgNTEyIDMyIDUxMlM0OCA1MDQuODQ0IDQ4IDQ5NlY0MDBDNDggMzkxLjE1NiA0MC44NDQgMzg0IDMyIDM4NFpNMTYwIDI4OEMxNTEuMTU2IDI4OCAxNDQgMjk1LjE1NiAxNDQgMzA0VjQ5NkMxNDQgNTA0Ljg0NCAxNTEuMTU2IDUxMiAxNjAgNTEyUzE3NiA1MDQuODQ0IDE3NiA0OTZWMzA0QzE3NiAyOTUuMTU2IDE2OC44NDQgMjg4IDE2MCAyODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SignalFair(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M32 384C23.156 384 16 391.156 16 400V496C16 504.844 23.156 512 32 512S48 504.844 48 496V400C48 391.156 40.844 384 32 384ZM160 288C151.156 288 144 295.156 144 304V496C144 504.844 151.156 512 160 512S176 504.844 176 496V304C176 295.156 168.844 288 160 288Z" />
        </Icon>
    </>
}