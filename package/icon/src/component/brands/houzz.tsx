
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `houzz` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/houzz?s=brands houzz}
 * @preview ![houzz](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzUuOSAzMzAuN0gxNzEuM1Y0ODBIMTdWMzJoMTA5LjV2MTA0LjVsMzA1LjEgODUuNlY0ODBIMjc1Ljl6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Houzz(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z" />
        </Icon>
    </>
}