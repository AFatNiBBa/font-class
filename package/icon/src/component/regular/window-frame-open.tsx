
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-frame-open` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=regular window-frame-open}
 * @preview ![window-frame-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggNDY0SDQ4MFYzMjBINDMyVjQ2NEg4MFYzMjBIMzJWNDY0SDI0QzEwLjc0NSA0NjQgMCA0NzQuNzQ1IDAgNDg4VjQ4OEMwIDUwMS4yNTUgMTAuNzQ1IDUxMiAyNCA1MTJINDg4QzUwMS4yNTUgNTEyIDUxMiA1MDEuMjU1IDUxMiA0ODhWNDg4QzUxMiA0NzQuNzQ1IDUwMS4yNTUgNDY0IDQ4OCA0NjRaTTQ4MCAzMkM0ODAgMTQuMzc1IDQ2NS42MjUgMCA0NDggMEg2NEM0Ni4zNzUgMCAzMiAxNC4zNzUgMzIgMzJWMjcySDQ4MFYzMlpNMjMyIDIyNEg4MFY0OEgyMzJWMjI0Wk00MzIgMjI0SDI4MFY0OEg0MzJWMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WindowFrameOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M488 464H480V320H432V464H80V320H32V464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H488C501.255 512 512 501.255 512 488V488C512 474.745 501.255 464 488 464ZM480 32C480 14.375 465.625 0 448 0H64C46.375 0 32 14.375 32 32V272H480V32ZM232 224H80V48H232V224ZM432 224H280V48H432V224Z" />
        </Icon>
    </>
}