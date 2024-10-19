
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `contao` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/contao?s=brands contao}
 * @preview ![contao](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NS40IDMwNWMxNC40IDY3LjEgMjYuNCAxMjkgNjguMiAxNzVIMzRjLTE4LjcgMC0zNC0xNS4yLTM0LTM0VjY2YzAtMTguNyAxNS4yLTM0IDM0LTM0aDU3LjdDNzcuOSA0NC42IDY1LjYgNTkuMiA1NC44IDc1LjZjLTQ1LjQgNzAtMjcgMTQ2LjgtOS40IDIyOS40ek00NzggMzJoLTkwLjJjMjEuNCAyMS40IDM5LjIgNDkuNSA1Mi43IDg0LjFsLTEzNy4xIDI5LjNjLTE0LjktMjktMzcuOC01My4zLTgyLjYtNDMuOS0yNC42IDUuMy00MSAxOS4zLTQ4LjMgMzQuNi04LjggMTguNy0xMy4yIDM5LjggOC4yIDE0MC4zIDIxLjEgMTAwLjIgMzMuNyAxMTcuNyA0OS41IDEzMS4yIDEyLjkgMTEuMSAzMy40IDE3IDU4LjMgMTEuNyA0NC41LTkuNCA1NS43LTQwLjcgNTcuNC03My4ybDEzNy40LTI5LjZjMy4yIDcxLjUtMTguNyAxMjUuMi01Ny40IDE2My42SDQ3OGMxOC43IDAgMzQtMTUuMiAzNC0zNFY2NmMwLTE4LjgtMTUuMi0zNC0zNC0zNHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Contao(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M45.4 305c14.4 67.1 26.4 129 68.2 175H34c-18.7 0-34-15.2-34-34V66c0-18.7 15.2-34 34-34h57.7C77.9 44.6 65.6 59.2 54.8 75.6c-45.4 70-27 146.8-9.4 229.4zM478 32h-90.2c21.4 21.4 39.2 49.5 52.7 84.1l-137.1 29.3c-14.9-29-37.8-53.3-82.6-43.9-24.6 5.3-41 19.3-48.3 34.6-8.8 18.7-13.2 39.8 8.2 140.3 21.1 100.2 33.7 117.7 49.5 131.2 12.9 11.1 33.4 17 58.3 11.7 44.5-9.4 55.7-40.7 57.4-73.2l137.4-29.6c3.2 71.5-18.7 125.2-57.4 163.6H478c18.7 0 34-15.2 34-34V66c0-18.8-15.2-34-34-34z" />
        </Icon>
    </>
}