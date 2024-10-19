
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `coffin` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=solid coffin}
 * @preview ![coffin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDguNTM3IDExNS4yNUwzMDAuNzY2IDkuMzc1QzI5NC42MzggMy4zNzUgMjg2LjI2MyAwIDI3Ny42MzYgMEgxNzQuMzY0QzE2NS43MzcgMCAxNTcuMzYyIDMuMzc1IDE1MS4yMzQgOS4zNzVMNDMuNDYzIDExNS4yNUMzNS40NjEgMTIzLjEyNSAzMi4yMTEgMTM0LjYyNSAzNC45NjEgMTQ1LjYyNUwxMjIuMTAzIDQ4Ny43NUMxMjUuNzI5IDUwMiAxMzguNzMzIDUxMiAxNTMuNzM1IDUxMkgyOTguMzlDMzEzLjI2NyA1MTIgMzI2LjI3MSA1MDIgMzI5Ljg5NyA0ODcuNzVMNDE3LjAzOSAxNDUuNjI1QzQxOS43ODkgMTM0LjYyNSA0MTYuNTM5IDEyMy4xMjUgNDA4LjUzNyAxMTUuMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Coffin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M408.537 115.25L300.766 9.375C294.638 3.375 286.263 0 277.636 0H174.364C165.737 0 157.362 3.375 151.234 9.375L43.463 115.25C35.461 123.125 32.211 134.625 34.961 145.625L122.103 487.75C125.729 502 138.733 512 153.735 512H298.39C313.267 512 326.271 502 329.897 487.75L417.039 145.625C419.789 134.625 416.539 123.125 408.537 115.25Z" />
        </Icon>
    </>
}