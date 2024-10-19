
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-frame` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=light window-frame}
 * @preview ![window-frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNDgwSDQ4MFY2NEM0ODAgMjguNjUyIDQ1MS4zNDYgMCA0MTYgMEg5NkM2MC42NTQgMCAzMiAyOC42NTIgMzIgNjRWNDgwSDE2QzcuMTY0IDQ4MCAwIDQ4Ny4xNjIgMCA0OTZDMCA1MDQuODM2IDcuMTY0IDUxMiAxNiA1MTJINDk2QzUwNC44MzYgNTEyIDUxMiA1MDQuODM2IDUxMiA0OTZDNTEyIDQ4Ny4xNjIgNTA0LjgzNiA0ODAgNDk2IDQ4MFpNMjQwIDQ4MEg2NFYyODhIMjQwVjQ4MFpNMjQwIDI1Nkg2NFY2NEM2NCA0Ni4zMjYgNzguMzI2IDMyIDk2IDMySDI0MFYyNTZaTTQ0OCA0ODBIMjcyVjI4OEg0NDhWNDgwWk00NDggMjU2SDI3MlYzMkg0MTZDNDMzLjY3NCAzMiA0NDggNDYuMzI2IDQ0OCA2NFYyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WindowFrame(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 480H480V64C480 28.652 451.346 0 416 0H96C60.654 0 32 28.652 32 64V480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H496C504.836 512 512 504.836 512 496C512 487.162 504.836 480 496 480ZM240 480H64V288H240V480ZM240 256H64V64C64 46.326 78.326 32 96 32H240V256ZM448 480H272V288H448V480ZM448 256H272V32H416C433.674 32 448 46.326 448 64V256Z" />
        </Icon>
    </>
}