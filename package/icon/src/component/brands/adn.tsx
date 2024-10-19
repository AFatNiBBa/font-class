
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `adn` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/adn?s=brands adn}
 * @preview ![adn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggMTY3LjVsNjQuOSA5OC44SDE4My4xbDY0LjktOTguOHpNNDk2IDI1NmMwIDEzNi45LTExMS4xIDI0OC0yNDggMjQ4UzAgMzkyLjkgMCAyNTYgMTExLjEgOCAyNDggOHMyNDggMTExLjEgMjQ4IDI0OHptLTk5LjggODIuN0wyNDggMTE1LjUgOTkuOCAzMzguN2gzMC40bDMzLjYtNTEuN2gxNjguNmwzMy42IDUxLjdoMzAuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Adn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M248 167.5l64.9 98.8H183.1l64.9-98.8zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256 111.1 8 248 8s248 111.1 248 248zm-99.8 82.7L248 115.5 99.8 338.7h30.4l33.6-51.7h168.6l33.6 51.7h30.2z" />
        </Icon>
    </>
}