
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rotate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate?s=sharp-duotone-solid rotate}
 * @preview ![rotate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAyODhsMCAxNjAgMjQgMjQgNTcuNi01Ny42QzE0MS40IDQ1OC4xIDE5OC43IDQ4MCAyNTYgNDgwYzU3LjMgMCAxMTQuNy0yMS45IDE1OC40LTY1LjZjMjQuNC0yNC40IDQyLjEtNTMuMSA1Mi45LTgzLjdsLTYwLjQtMjEuM2MtNy43IDIxLjgtMjAuMiA0Mi4zLTM3LjggNTkuOGMtNjIuNSA2Mi41LTE2My44IDYyLjUtMjI2LjMgMEwyMDAgMzEybC0yNC0yNEwxNiAyODh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMDUuMSAyMDIuNmM3LjctMjEuOCAyMC4yLTQyLjMgMzcuOC01OS44YzYyLjUtNjIuNSAxNjMuOC02Mi41IDIyNi4zIDBjMCAwIDAgMCAwIDBMMzEyIDIwMGwyNCAyNCAxNjAgMCAwLTE2MEw0NzIgNDAgNDE0LjQgOTcuNnMwIDAgMCAwYy04Ny41LTg3LjUtMjI5LjMtODcuNS0zMTYuOCAwQzczLjIgMTIyIDU1LjYgMTUwLjcgNDQuOCAxODEuNGw2MC40IDIxLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const Rotate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 288l0 160 24 24 57.6-57.6C141.4 458.1 198.7 480 256 480c57.3 0 114.7-21.9 158.4-65.6c24.4-24.4 42.1-53.1 52.9-83.7l-60.4-21.3c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0L200 312l-24-24L16 288z" />
            <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0c0 0 0 0 0 0L312 200l24 24 160 0 0-160L472 40 414.4 97.6s0 0 0 0c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4l60.4 21.3z" />
    </Icon>
);

export default Rotate;