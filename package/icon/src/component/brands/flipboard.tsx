
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flipboard` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flipboard?s=brands flipboard}
 * @preview ![flipboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMydjQ0OGg0NDhWMzJIMHptMzU4LjQgMTc5LjJoLTg5LjZ2ODkuNmgtODkuNnY4OS42SDg5LjZWMTIxLjZoMjY4Ljh2ODkuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Flipboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z" />
        </Icon>
    </>
}