
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal-weak` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-weak?s=regular signal-weak}
 * @preview ![signal-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NiA0MDhWNDg4QzU2IDUwMS4yNSA0NS4yNSA1MTIgMzIgNTEyUzggNTAxLjI1IDggNDg4VjQwOEM4IDM5NC43NSAxOC43NSAzODQgMzIgMzg0UzU2IDM5NC43NSA1NiA0MDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SignalWeak(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M56 408V488C56 501.25 45.25 512 32 512S8 501.25 8 488V408C8 394.75 18.75 384 32 384S56 394.75 56 408Z" />
        </Icon>
    </>
}