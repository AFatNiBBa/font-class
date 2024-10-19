
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=duotone diagram-previous}
 * @preview ![diagram-previous](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgNjRjMCAzNS4zIDI4LjcgNjQgNjQgNjRsNDkgMGMtNS41LTE4LjQtMi0zOS42IDE0LjEtNTUuNkwyMTYuNCA3OWMyMS45LTIxLjkgNTcuMy0yMS45IDc5LjIgMEwzODUgMTY4LjRjMTYgMTYgMTkuNiAzNy4yIDE0LjEgNTUuNmw0OSAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtNjRjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAyODhjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCA2NGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0bDAtNjRjMC0zNS4zIDI4LjctNjQgNjQtNjRsMTY4IDAgMC02NC00Ni4xIDBjLTIxLjQgMC0zMi4xLTI1LjktMTctNDFMMjM5IDExM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMEwzNDMgMTgzYzE1LjEgMTUuMSA0LjQgNDEtMTcgNDFMMjgwIDIyNGwwIDY0IDE2OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 64c0 35.3 28.7 64 64 64l49 0c-5.5-18.4-2-39.6 14.1-55.6L216.4 79c21.9-21.9 57.3-21.9 79.2 0L385 168.4c16 16 19.6 37.2 14.1 55.6l49 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96z" />
            <path d="M448 288c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l168 0 0-64-46.1 0c-21.4 0-32.1-25.9-17-41L239 113c9.4-9.4 24.6-9.4 33.9 0L343 183c15.1 15.1 4.4 41-17 41L280 224l0 64 168 0z" />
    </Icon>
);

export default DiagramPrevious;