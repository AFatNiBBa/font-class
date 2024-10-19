
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=light plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMjU2QzQzMiAyNjQuODQ0IDQyNC44NDQgMjcyIDQxNiAyNzJIMjQwVjQ0OEMyNDAgNDU2Ljg0NCAyMzIuODQ0IDQ2NCAyMjQgNDY0UzIwOCA0NTYuODQ0IDIwOCA0NDhWMjcySDMyQzIzLjE1NiAyNzIgMTYgMjY0Ljg0NCAxNiAyNTZTMjMuMTU2IDI0MCAzMiAyNDBIMjA4VjY0QzIwOCA1NS4xNTYgMjE1LjE1NiA0OCAyMjQgNDhTMjQwIDU1LjE1NiAyNDAgNjRWMjQwSDQxNkM0MjQuODQ0IDI0MCA0MzIgMjQ3LjE1NiA0MzIgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Plus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 256C432 264.844 424.844 272 416 272H240V448C240 456.844 232.844 464 224 464S208 456.844 208 448V272H32C23.156 272 16 264.844 16 256S23.156 240 32 240H208V64C208 55.156 215.156 48 224 48S240 55.156 240 64V240H416C424.844 240 432 247.156 432 256Z" />
        </Icon>
    </>
}