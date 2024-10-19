
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=solid message}
 * @preview ![message](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNjMuOTk1VjM1MkM1MTIgMzg3LjI0NyA0ODMuMjUgNDE1Ljk5NSA0NDggNDE1Ljk5NUgzMDRMMTc5LjEyNSA1MDkuNzFDMTcxLjI1IDUxNS40NTkgMTYwIDUwOS43MSAxNjAgNDk5Ljk2VjQxNS45OTVINjRDMjguNzUgNDE1Ljk5NSAwIDM4Ny4yNDcgMCAzNTJWNjMuOTk1QzAgMjguNzQ4IDI4Ljc1IDAgNjQgMEg0NDhDNDgzLjI1IDAgNTEyIDI4Ljc0OCA1MTIgNjMuOTk1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Message(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 63.995V352C512 387.247 483.25 415.995 448 415.995H304L179.125 509.71C171.25 515.459 160 509.71 160 499.96V415.995H64C28.75 415.995 0 387.247 0 352V63.995C0 28.748 28.75 0 64 0H448C483.25 0 512 28.748 512 63.995Z" />
        </Icon>
    </>
}