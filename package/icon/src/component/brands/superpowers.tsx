
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `superpowers` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/superpowers?s=brands superpowers}
 * @preview ![superpowers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJjLTgzLjMgMTEtMTY2LjggMjItMjUwIDMzLTkyIDEyLjUtMTYzLjMgODYuNy0xNjkgMTgwLTMuMyA1NS41IDE4IDEwOS41IDU3LjggMTQ4LjJMMCA0ODBjODMuMy0xMSAxNjYuNS0yMiAyNDkuOC0zMyA5MS44LTEyLjUgMTYzLjMtODYuOCAxNjguNy0xNzkuOCAzLjUtNTUuNS0xOC0xMDkuNS01Ny43LTE0OC4yTDQ0OCAzMnptLTc5LjcgMjMyLjNjLTQuMiA3OS41LTc0IDEzOS4yLTE1Mi44IDEzNC41LTc5LjUtNC43LTE0MC43LTcxLTEzNi4zLTE1MSA0LjUtNzkuMiA3NC4zLTEzOS4zIDE1My0xMzQuNSA3OS4zIDQuNyAxNDAuNSA3MSAxMzYuMSAxNTF6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Superpowers(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 32c-83.3 11-166.8 22-250 33-92 12.5-163.3 86.7-169 180-3.3 55.5 18 109.5 57.8 148.2L0 480c83.3-11 166.5-22 249.8-33 91.8-12.5 163.3-86.8 168.7-179.8 3.5-55.5-18-109.5-57.7-148.2L448 32zm-79.7 232.3c-4.2 79.5-74 139.2-152.8 134.5-79.5-4.7-140.7-71-136.3-151 4.5-79.2 74.3-139.3 153-134.5 79.3 4.7 140.5 71 136.1 151z" />
        </Icon>
    </>
}