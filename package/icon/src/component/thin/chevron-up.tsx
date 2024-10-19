
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=thin chevron-up}
 * @preview ![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDUuMzQ4IDM0OS45MzRDNDQzLjgxNyAzNTEuMzEgNDQxLjkxIDM1MS45ODIgNDQwLjAwNCAzNTEuOTgyQzQzNy44MTYgMzUxLjk4MiA0MzUuNjI5IDM1MS4wOTEgNDM0LjA2NiAzNDkuMzRMMjI0IDExNS44MjlMMTMuOTM0IDM0OS4zNEMxMS4wMjcgMzUyLjYyMyA1LjkzMyAzNTIuOTIgMi42NTIgMzQ5LjkzNEMtMC42MjkgMzQ2Ljk2NCAtMC45MSAzNDEuOTE1IDIuMDU4IDMzOC42MTdMMjE4LjA2MiA5OC41MDlDMjIxLjA2MiA5NS4xNjQgMjI2LjkzOCA5NS4xNjQgMjI5LjkzOCA5OC41MDlMNDQ1Ljk0MiAzMzguNjE3QzQ0OC45MSAzNDEuOTE1IDQ0OC42MjkgMzQ2Ljk2NCA0NDUuMzQ4IDM0OS45MzRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M445.348 349.934C443.817 351.31 441.91 351.982 440.004 351.982C437.816 351.982 435.629 351.091 434.066 349.34L224 115.829L13.934 349.34C11.027 352.623 5.933 352.92 2.652 349.934C-0.629 346.964 -0.91 341.915 2.058 338.617L218.062 98.509C221.062 95.164 226.938 95.164 229.938 98.509L445.942 338.617C448.91 341.915 448.629 346.964 445.348 349.934Z" />
        </Icon>
    </>
}