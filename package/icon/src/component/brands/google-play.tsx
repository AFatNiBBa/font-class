
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `google-play` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/google-play?s=brands google-play}
 * @preview ![google-play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjUuMyAyMzQuM0wxMDQuNiAxM2wyODAuOCAxNjEuMi02MC4xIDYwLjF6TTQ3IDBDMzQgNi44IDI1LjMgMTkuMiAyNS4zIDM1LjN2NDQxLjNjMCAxNi4xIDguNyAyOC41IDIxLjcgMzUuM2wyNTYuNi0yNTZMNDcgMHptNDI1LjIgMjI1LjZsLTU4LjktMzQuMS02NS43IDY0LjUgNjUuNyA2NC41IDYwLjEtMzQuMWMxOC0xNC4zIDE4LTQ2LjUtMS4yLTYwLjh6TTEwNC42IDQ5OWwyODAuOC0xNjEuMi02MC4xLTYwLjFMMTA0LjYgNDk5eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GooglePlay(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
        </Icon>
    </>
}