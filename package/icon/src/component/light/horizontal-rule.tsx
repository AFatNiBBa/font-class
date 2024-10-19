
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `horizontal-rule` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=light horizontal-rule}
 * @preview ![horizontal-rule](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQgMjcySDE2QzcuMTU2IDI3MiAwIDI2NC44NDQgMCAyNTZTNy4xNTYgMjQwIDE2IDI0MEg2MjRDNjMyLjg0NCAyNDAgNjQwIDI0Ny4xNTYgNjQwIDI1NlM2MzIuODQ0IDI3MiA2MjQgMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HorizontalRule(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624 272H16C7.156 272 0 264.844 0 256S7.156 240 16 240H624C632.844 240 640 247.156 640 256S632.844 272 624 272Z" />
        </Icon>
    </>
}