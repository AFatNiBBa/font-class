
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sd-card` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sd-card?s=solid sd-card}
 * @preview ![sd-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMEgxMjhMMCAxMjhWNDQ4QzAgNDgzLjI1IDI4Ljc1IDUxMiA2NCA1MTJIMzIwQzM1NS4yNSA1MTIgMzg0IDQ4My4yNSAzODQgNDQ4VjY0QzM4NCAyOC43NSAzNTUuMjUgMCAzMjAgMFpNMTYwIDE2MEgxMTJWNjRIMTYwVjE2MFpNMjQwIDE2MEgxOTJWNjRIMjQwVjE2MFpNMzIwIDE2MEgyNzJWNjRIMzIwVjE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SdCard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 0H128L0 128V448C0 483.25 28.75 512 64 512H320C355.25 512 384 483.25 384 448V64C384 28.75 355.25 0 320 0ZM160 160H112V64H160V160ZM240 160H192V64H240V160ZM320 160H272V64H320V160Z" />
        </Icon>
    </>
}