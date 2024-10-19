
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `redhat` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/redhat?s=brands redhat}
 * @preview ![redhat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDEuNTIgMjg1LjU2YzMzLjY1IDAgODIuMzQtNi45NCA4Mi4zNC00NyAuMjItNi43NC44Ni0xLjgyLTIwLjg4LTk2LjI0LTQuNjItMTkuMTUtOC42OC0yNy44NC00Mi4zMS00NC42NS0yNi4wOS0xMy4zNC04Mi45Mi0zNS4zNy05OS43My0zNS4zNy0xNS42NiAwLTIwLjIgMjAuMTctMzguODcgMjAuMTctMTggMC0zMS4zMS0xNS4wNi00OC4xMi0xNS4wNi0xNi4xNCAwLTI2LjY2IDExLTM0Ljc4IDMzLjYyLTI3LjUgNzcuNTUtMjYuMjggNzQuMjctMjYuMTIgNzguMjcgMCAyNC44IDk3LjY0IDEwNi4xMSAyMjguNDcgMTA2LjExTTQyOSAyNTQuODRjNC42NSAyMiA0LjY1IDI0LjM1IDQuNjUgMjcuMjUgMCAzNy42Ni00Mi4zMyA1OC41Ni05OCA1OC41Ni0xMjUuNzQuMDgtMjM1LjkxLTczLjY1LTIzNS45MS0xMjIuMzNhNDkuNTUgNDkuNTUgMCAwIDEgNC4wNi0xOS43MkM1OC41NiAyMDAuODYgMCAyMDguOTMgMCAyNjAuNjNjMCA4NC42NyAyMDAuNjMgMTg5IDM1OS40OSAxODkgMTIxLjc5IDAgMTUyLjUxLTU1LjA4IDE1Mi41MS05OC41OCAwLTM0LjIxLTI5LjU5LTczLjA1LTgyLjkzLTk2LjI0Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Redhat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M341.52 285.56c33.65 0 82.34-6.94 82.34-47 .22-6.74.86-1.82-20.88-96.24-4.62-19.15-8.68-27.84-42.31-44.65-26.09-13.34-82.92-35.37-99.73-35.37-15.66 0-20.2 20.17-38.87 20.17-18 0-31.31-15.06-48.12-15.06-16.14 0-26.66 11-34.78 33.62-27.5 77.55-26.28 74.27-26.12 78.27 0 24.8 97.64 106.11 228.47 106.11M429 254.84c4.65 22 4.65 24.35 4.65 27.25 0 37.66-42.33 58.56-98 58.56-125.74.08-235.91-73.65-235.91-122.33a49.55 49.55 0 0 1 4.06-19.72C58.56 200.86 0 208.93 0 260.63c0 84.67 200.63 189 359.49 189 121.79 0 152.51-55.08 152.51-98.58 0-34.21-29.59-73.05-82.93-96.24" />
        </Icon>
    </>
}