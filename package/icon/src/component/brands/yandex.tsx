
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `yandex` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/yandex?s=brands yandex}
 * @preview ![yandex](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTMuMSAzMTUuOEw2NS43IDUxMkgybDk2LTIwOS44Yy00NS4xLTIyLjktNzUuMi02NC40LTc1LjItMTQxLjFDMjIuNyA1My43IDkwLjggMCAxNzEuNyAwSDI1NHY1MTJoLTU1LjFWMzE1LjhoLTQ1Ljh6bTQ1LjgtMjY5LjNoLTI5LjRjLTQ0LjQgMC04Ny40IDI5LjQtODcuNCAxMTQuNiAwIDgyLjMgMzkuNCAxMDguOCA4Ny40IDEwOC44aDI5LjRWNDYuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Yandex(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M153.1 315.8L65.7 512H2l96-209.8c-45.1-22.9-75.2-64.4-75.2-141.1C22.7 53.7 90.8 0 171.7 0H254v512h-55.1V315.8h-45.8zm45.8-269.3h-29.4c-44.4 0-87.4 29.4-87.4 114.6 0 82.3 39.4 108.8 87.4 108.8h29.4V46.5z" />
        </Icon>
    </>
}