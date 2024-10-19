
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=regular transporter-empty}
 * @preview ![transporter-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYgNDY0SDI0QzEwLjc0NSA0NjQgMCA0NzQuNzQ1IDAgNDg4VjQ4OEMwIDUwMS4yNTUgMTAuNzQ1IDUxMiAyNCA1MTJIMjk2QzMwOS4yNTUgNTEyIDMyMCA1MDEuMjU1IDMyMCA0ODhWNDg4QzMyMCA0NzQuNzQ1IDMwOS4yNTUgNDY0IDI5NiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TransporterEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M296 464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H296C309.255 512 320 501.255 320 488V488C320 474.745 309.255 464 296 464Z" />
        </Icon>
    </>
}