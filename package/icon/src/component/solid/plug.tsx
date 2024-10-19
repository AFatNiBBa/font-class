
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `plug` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plug?s=solid plug}
 * @preview ![plug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMzJDMzIwIDE0LjM3NSAzMDUuNjI1IDAgMjg4IDBTMjU2IDE0LjM3NSAyNTYgMzJWMTI4SDMyMFYzMlpNMzY4IDE2MEgxNkM3LjEyNSAxNjAgMCAxNjcuMTI1IDAgMTc2VjIwOEMwIDIxNi44NzUgNy4xMjUgMjI0IDE2IDIyNEgzMlYyNTZDMzIgMzMyIDg1LjUgMzk3LjYyNSAxNjAgNDEyLjc1VjUxMkgyMjRWNDEyLjc1QzI5OC41IDM5Ny42MjUgMzUyIDMzMiAzNTIgMjU2VjIyNEgzNjhDMzc2Ljg3NSAyMjQgMzg0IDIxNi44NzUgMzg0IDIwOFYxNzZDMzg0IDE2Ny4xMjUgMzc2Ljg3NSAxNjAgMzY4IDE2MFpNMTI4IDMyQzEyOCAxNC4zNzUgMTEzLjYyNSAwIDk2IDBTNjQgMTQuMzc1IDY0IDMyVjEyOEgxMjhWMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Plug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 32C320 14.375 305.625 0 288 0S256 14.375 256 32V128H320V32ZM368 160H16C7.125 160 0 167.125 0 176V208C0 216.875 7.125 224 16 224H32V256C32 332 85.5 397.625 160 412.75V512H224V412.75C298.5 397.625 352 332 352 256V224H368C376.875 224 384 216.875 384 208V176C384 167.125 376.875 160 368 160ZM128 32C128 14.375 113.625 0 96 0S64 14.375 64 32V128H128V32Z" />
        </Icon>
    </>
}