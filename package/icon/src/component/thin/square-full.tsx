
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-full` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-full?s=thin square-full}
 * @preview ![square-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDBWNTEySDUxMlYwSDBaTTQ5NiA0OTZIMTZWMTZINDk2VjQ5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareFull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M0 0V512H512V0H0ZM496 496H16V16H496V496Z" />
        </Icon>
    </>
}