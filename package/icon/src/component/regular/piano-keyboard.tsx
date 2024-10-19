
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=regular piano-keyboard}
 * @preview ![piano-keyboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNjRINjRDMjguOCA2NCAwIDkyLjggMCAxMjhWMzg0QzAgNDE5LjIgMjguOCA0NDggNjQgNDQ4SDUxMkM1NDcuMiA0NDggNTc2IDQxOS4yIDU3NiAzODRWMTI4QzU3NiA5Mi44IDU0Ny4yIDY0IDUxMiA2NFpNMTQ0IDQwMEg2NEM1NS4xNjMgNDAwIDQ4IDM5Mi44MzcgNDggMzg0VjIyNEgxMjhWMzA0QzEyOCAzMTIuODc1IDEzNS4xMjUgMzIwIDE0NCAzMjBWNDAwWk0yNzIgNDAwSDE3NlYzMjBDMTg0Ljg3NSAzMjAgMTkyIDMxMi44NzUgMTkyIDMwNFYyMjRIMjU2VjMwNEMyNTYgMzEyLjg3NSAyNjMuMTI1IDMyMCAyNzIgMzIwVjQwMFpNNDAwIDQwMEgzMDRWMzIwQzMxMi44NzUgMzIwIDMyMCAzMTIuODc1IDMyMCAzMDRWMjI0SDM4NFYzMDRDMzg0IDMxMi44NzUgMzkxLjEyNSAzMjAgNDAwIDMyMFY0MDBaTTUxMiA0MDBINDMyVjMyMEM0NDAuODc1IDMyMCA0NDggMzEyLjg3NSA0NDggMzA0VjIyNEg1MjhWMzg0QzUyOCAzOTIuODM3IDUyMC44MzcgNDAwIDUxMiA0MDBaTTUyOCAxNzZINDhWMTI4QzQ4IDExOS4xNjMgNTUuMTYzIDExMiA2NCAxMTJINTEyQzUyMC44MzcgMTEyIDUyOCAxMTkuMTYzIDUyOCAxMjhWMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PianoKeyboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M512 64H64C28.8 64 0 92.8 0 128V384C0 419.2 28.8 448 64 448H512C547.2 448 576 419.2 576 384V128C576 92.8 547.2 64 512 64ZM144 400H64C55.163 400 48 392.837 48 384V224H128V304C128 312.875 135.125 320 144 320V400ZM272 400H176V320C184.875 320 192 312.875 192 304V224H256V304C256 312.875 263.125 320 272 320V400ZM400 400H304V320C312.875 320 320 312.875 320 304V224H384V304C384 312.875 391.125 320 400 320V400ZM512 400H432V320C440.875 320 448 312.875 448 304V224H528V384C528 392.837 520.837 400 512 400ZM528 176H48V128C48 119.163 55.163 112 64 112H512C520.837 112 528 119.163 528 128V176Z" />
        </Icon>
    </>
}