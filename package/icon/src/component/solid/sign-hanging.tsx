
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=solid sign-hanging}
 * @preview ![sign-hanging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMzg0SDQ4MFYxNjBIMTYwVjM4NFpNNDk2IDY0SDEyOFYxNkMxMjggNy4yNSAxMjAuNzUgMCAxMTIgMEg4MEM3MS4yNSAwIDY0IDcuMjUgNjQgMTZWNjRIMTZDNy4yNSA2NCAwIDcxLjI1IDAgODBWMTEyQzAgMTIwLjc1IDcuMjUgMTI4IDE2IDEyOEg2NFY0OTZDNjQgNTA0Ljc1IDcxLjI1IDUxMiA4MCA1MTJIMTEyQzEyMC43NSA1MTIgMTI4IDUwNC43NSAxMjggNDk2VjEyOEg0OTZDNTA0Ljc1IDEyOCA1MTIgMTIwLjc1IDUxMiAxMTJWODBDNTEyIDcxLjI1IDUwNC43NSA2NCA0OTYgNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SignHanging(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M160 384H480V160H160V384ZM496 64H128V16C128 7.25 120.75 0 112 0H80C71.25 0 64 7.25 64 16V64H16C7.25 64 0 71.25 0 80V112C0 120.75 7.25 128 16 128H64V496C64 504.75 71.25 512 80 512H112C120.75 512 128 504.75 128 496V128H496C504.75 128 512 120.75 512 112V80C512 71.25 504.75 64 496 64Z" />
        </Icon>
    </>
}