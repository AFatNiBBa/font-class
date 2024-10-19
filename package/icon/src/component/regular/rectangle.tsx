
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rectangle` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle?s=regular rectangle}
 * @preview ![rectangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTEyQzQ1Ni44MjIgMTEyIDQ2NCAxMTkuMTc4IDQ2NCAxMjhWMzg0QzQ2NCAzOTIuODIyIDQ1Ni44MjIgNDAwIDQ0OCA0MDBINjRDNTUuMTc4IDQwMCA0OCAzOTIuODIyIDQ4IDM4NFYxMjhDNDggMTE5LjE3OCA1NS4xNzggMTEyIDY0IDExMkg0NDhNNDQ4IDY0SDY0QzI4LjY1NCA2NCAwIDkyLjY1MyAwIDEyOFYzODRDMCA0MTkuMzQ3IDI4LjY1NCA0NDggNjQgNDQ4SDQ0OEM0ODMuMzQ2IDQ0OCA1MTIgNDE5LjM0NyA1MTIgMzg0VjEyOEM1MTIgOTIuNjUzIDQ4My4zNDYgNjQgNDQ4IDY0TDQ0OCA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Rectangle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 112C456.822 112 464 119.178 464 128V384C464 392.822 456.822 400 448 400H64C55.178 400 48 392.822 48 384V128C48 119.178 55.178 112 64 112H448M448 64H64C28.654 64 0 92.653 0 128V384C0 419.347 28.654 448 64 448H448C483.346 448 512 419.347 512 384V128C512 92.653 483.346 64 448 64L448 64Z" />
        </Icon>
    </>
}