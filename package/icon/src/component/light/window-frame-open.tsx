
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=light window-frame-open}
 * @preview ![window-frame-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNDgwSDQ4MFYzMjBINDQ4VjQ4MEg2NFYzMjBIMzJWNDgwSDE2QzcuMTY0IDQ4MCAwIDQ4Ny4xNjIgMCA0OTZDMCA1MDQuODM2IDcuMTY0IDUxMiAxNiA1MTJINDk2QzUwNC44MzYgNTEyIDUxMiA1MDQuODM2IDUxMiA0OTZDNTEyIDQ4Ny4xNjIgNTA0LjgzNiA0ODAgNDk2IDQ4MFpNNDgwIDY0QzQ4MCAyOC42NTIgNDUxLjM0NiAwIDQxNiAwSDk2QzYwLjY1NCAwIDMyIDI4LjY1MiAzMiA2NFYyODhINDgwVjY0Wk0yNDAgMjU2SDY0VjY0QzY0IDQ2LjMyNiA3OC4zMjYgMzIgOTYgMzJIMjQwVjI1NlpNNDQ4IDI1NkgyNzJWMzJINDE2QzQzMy42NzQgMzIgNDQ4IDQ2LjMyNiA0NDggNjRWMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WindowFrameOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 480H480V320H448V480H64V320H32V480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H496C504.836 512 512 504.836 512 496C512 487.162 504.836 480 496 480ZM480 64C480 28.652 451.346 0 416 0H96C60.654 0 32 28.652 32 64V288H480V64ZM240 256H64V64C64 46.326 78.326 32 96 32H240V256ZM448 256H272V32H416C433.674 32 448 46.326 448 64V256Z" />
        </Icon>
    </>
}