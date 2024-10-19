
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `kickstarter-k` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/kickstarter-k?s=brands kickstarter-k}
 * @preview ![kickstarter-k](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDcuMyAxMTQuNGMwLTU2LjItMzIuNS04Mi40LTczLjQtODIuNEMyNi4yIDMyIDAgNjguMiAwIDExMy40djI4M2MwIDQ3LjMgMjUuMyA4My40IDc0LjkgODMuNCAzOS44IDAgNzIuNC0yNS42IDcyLjQtODMuNHYtNzYuNWwxMTIuMSAxMzguM2MyMi43IDI3LjIgNzIuMSAzMC43IDEwMy4yIDAgMjctMjcuNiAyNy4zLTY3LjQgNy40LTkyLjJsLTkwLjgtMTE0LjggNzQuOS0xMDcuNGMxNy40LTI0LjcgMTcuNS02My4xLTEwLjQtODkuOC0zMC4zLTI5LTgyLjQtMzEuNi0xMTMuNiAxMi44TDE0Ny4zIDE4NXYtNzAuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function KickstarterK(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M147.3 114.4c0-56.2-32.5-82.4-73.4-82.4C26.2 32 0 68.2 0 113.4v283c0 47.3 25.3 83.4 74.9 83.4 39.8 0 72.4-25.6 72.4-83.4v-76.5l112.1 138.3c22.7 27.2 72.1 30.7 103.2 0 27-27.6 27.3-67.4 7.4-92.2l-90.8-114.8 74.9-107.4c17.4-24.7 17.5-63.1-10.4-89.8-30.3-29-82.4-31.6-113.6 12.8L147.3 185v-70.6z" />
        </Icon>
    </>
}