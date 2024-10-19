
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chrome` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chrome?s=brands chrome}
 * @preview ![chrome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzEuNSAyMTcuNUw1NS4xIDEwMC4xYzQ3LjYtNTkuMiAxMTktOTEuOCAxOTItOTIuMSA0Mi4zLS4zIDg1LjUgMTAuNSAxMjQuOCAzMy4yIDQzLjQgMjUuMiA3Ni40IDYxLjQgOTcuNCAxMDNMMjY0IDEzMy40Yy01OC4xLTMuNC0xMTMuNCAyOS4zLTEzMi41IDg0LjF6bTMyLjkgMzguNWMwIDQ2LjIgMzcuNCA4My42IDgzLjYgODMuNnM4My42LTM3LjQgODMuNi04My42LTM3LjQtODMuNi04My42LTgzLjYtODMuNiAzNy4zLTgzLjYgODMuNnptMzE0LjktODkuMkwzMzkuNiAxNzRjMzcuOSA0NC4zIDM4LjUgMTA4LjIgNi42IDE1Ny4yTDIzNC4xIDUwMy42YzQ2LjUgMi41IDk0LjQtNy43IDEzNy44LTMyLjkgMTA3LjQtNjIgMTUwLjktMTkyIDEwNy40LTMwMy45ek0xMzMuNyAzMDMuNkw0MC40IDEyMC4xQzE0LjkgMTU5LjEgMCAyMDUuOSAwIDI1NmMwIDEyNCA5MC44IDIyNi43IDIwOS41IDI0NC45bDYzLjctMTI0LjhjLTU3LjYgMTAuOC0xMTMuMi0yMC44LTEzOS41LTcyLjV6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Chrome(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z" />
        </Icon>
    </>
}