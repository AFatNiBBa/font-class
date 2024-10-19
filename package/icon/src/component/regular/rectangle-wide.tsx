
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=regular rectangle-wide}
 * @preview ![rectangle-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMTEyQzU4NC44MjMgMTEyIDU5MiAxMTkuMTc4IDU5MiAxMjhWMzg0QzU5MiAzOTIuODIyIDU4NC44MjMgNDAwIDU3NiA0MDBINjRDNTUuMTc3IDQwMCA0OCAzOTIuODIyIDQ4IDM4NFYxMjhDNDggMTE5LjE3OCA1NS4xNzcgMTEyIDY0IDExMkg1NzZNNTc2IDY0SDY0QzI4LjY1NCA2NCAwIDkyLjY1MyAwIDEyOFYzODRDMCA0MTkuMzQ3IDI4LjY1NCA0NDggNjQgNDQ4SDU3NkM2MTEuMzQ2IDQ0OCA2NDAgNDE5LjM0NyA2NDAgMzg0VjEyOEM2NDAgOTIuNjUzIDYxMS4zNDYgNjQgNTc2IDY0TDU3NiA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RectangleWide(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 112C584.823 112 592 119.178 592 128V384C592 392.822 584.823 400 576 400H64C55.177 400 48 392.822 48 384V128C48 119.178 55.177 112 64 112H576M576 64H64C28.654 64 0 92.653 0 128V384C0 419.347 28.654 448 64 448H576C611.346 448 640 419.347 640 384V128C640 92.653 611.346 64 576 64L576 64Z" />
        </Icon>
    </>
}