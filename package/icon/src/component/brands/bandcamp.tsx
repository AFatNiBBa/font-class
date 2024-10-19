
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bandcamp` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bandcamp?s=brands bandcamp}
 * @preview ![bandcamp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYsOEMxMTksOCw4LDExOSw4LDI1NlMxMTksNTA0LDI1Niw1MDQsNTA0LDM5Myw1MDQsMjU2LDM5Myw4LDI1Niw4Wm00OC4yLDMyNi4xaC0xODFMMjA3LjksMTc4aDE4MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bandcamp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z" />
        </Icon>
    </>
}