
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `moon` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/moon?s=solid moon}
 * @preview ![moon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAyNTZDMzIgMTMyLjE4OCAxMzIuMjU5IDMyIDI1NS43OTMgMzJDMjY3LjE1OCAzMiAyODUuNDg4IDMzLjY2OCAyOTYuNjg5IDM1Ljc0NkMzMDYuMzA1IDM3LjUyMyAzMDguNDM2IDUwLjM3NSAyOTkuOTY3IDU1LjE4N0MyNDUuMDMgODYuNDk2IDIxMS4yMzcgMTQ0LjYwMiAyMTEuMjM3IDIwNy43OTNDMjExLjIzNyAzMTcuNDk2IDMxMC45NDkgNDAwLjgxMyA0MTkuNTEzIDM4MC4xMTNDNDI5LjA3NSAzNzguMzA5IDQzNS43OTUgMzg5LjQzOCA0MjkuNjIxIDM5Ny4wNjZDMzg3Ljg1MSA0NDguNTU1IDMyNC44MjcgNDgwIDI1NS43OTMgNDgwQzEzMi4wOTUgNDgwIDMyIDM3OS42NDggMzIgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Moon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M32 256C32 132.188 132.259 32 255.793 32C267.158 32 285.488 33.668 296.689 35.746C306.305 37.523 308.436 50.375 299.967 55.187C245.03 86.496 211.237 144.602 211.237 207.793C211.237 317.496 310.949 400.813 419.513 380.113C429.075 378.309 435.795 389.438 429.621 397.066C387.851 448.555 324.827 480 255.793 480C132.095 480 32 379.648 32 256Z" />
        </Icon>
    </>
}