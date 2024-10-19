
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `signal-weak` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=light signal-weak}
 * @preview ![signal-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzODRDMjMuMTU2IDM4NCAxNiAzOTEuMTU2IDE2IDQwMFY0OTZDMTYgNTA0Ljg0NCAyMy4xNTYgNTEyIDMyIDUxMlM0OCA1MDQuODQ0IDQ4IDQ5NlY0MDBDNDggMzkxLjE1NiA0MC44NDQgMzg0IDMyIDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SignalWeak(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M32 384C23.156 384 16 391.156 16 400V496C16 504.844 23.156 512 32 512S48 504.844 48 496V400C48 391.156 40.844 384 32 384Z" />
        </Icon>
    </>
}