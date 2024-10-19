
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `signal-good` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-good?s=regular signal-good}
 * @preview ![signal-good](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAzODRDMTguNzUgMzg0IDggMzk0Ljc1IDggNDA4VjQ4OEM4IDUwMS4yNSAxOC43NSA1MTIgMzIgNTEyUzU2IDUwMS4yNSA1NiA0ODhWNDA4QzU2IDM5NC43NSA0NS4yNSAzODQgMzIgMzg0Wk0xNjAgMjg4QzE0Ni43NSAyODggMTM2IDI5OC43NSAxMzYgMzEyVjQ4OEMxMzYgNTAxLjI1IDE0Ni43NSA1MTIgMTYwIDUxMlMxODQgNTAxLjI1IDE4NCA0ODhWMzEyQzE4NCAyOTguNzUgMTczLjI1IDI4OCAxNjAgMjg4Wk0yODggMTkyQzI3NC43NSAxOTIgMjY0IDIwMi43NSAyNjQgMjE2VjQ4OEMyNjQgNTAxLjI1IDI3NC43NSA1MTIgMjg4IDUxMlMzMTIgNTAxLjI1IDMxMiA0ODhWMjE2QzMxMiAyMDIuNzUgMzAxLjI1IDE5MiAyODggMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SignalGood(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M32 384C18.75 384 8 394.75 8 408V488C8 501.25 18.75 512 32 512S56 501.25 56 488V408C56 394.75 45.25 384 32 384ZM160 288C146.75 288 136 298.75 136 312V488C136 501.25 146.75 512 160 512S184 501.25 184 488V312C184 298.75 173.25 288 160 288ZM288 192C274.75 192 264 202.75 264 216V488C264 501.25 274.75 512 288 512S312 501.25 312 488V216C312 202.75 301.25 192 288 192Z" />
        </Icon>
    </>
}