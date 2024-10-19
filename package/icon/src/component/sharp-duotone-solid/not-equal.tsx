
import { Icon, generic } from "../../index";

/**
 * A component that renders the `not-equal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/not-equal?s=sharp-duotone-solid not-equal}
 * @preview ![not-equal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAxNDRsMzIgMCAyMDkuMSAwYy0xMy41IDIxLjMtMjcgNDIuNy00MC41IDY0TDQ4IDIwOGwtMzIgMCAwLTY0em0wIDE2MGwzMiAwIDEwNy43IDBjLTEzLjUgMjEuMy0yNyA0Mi43LTQwLjUgNjRMNDggMzY4bC0zMiAwIDAtNjR6bTE3NC45IDY0YzEzLjUtMjEuMyAyNy00Mi43IDQwLjUtNjRMNDAwIDMwNGwzMiAwIDAgNjQtMzIgMC0yMDkuMSAwek0yOTIuMyAyMDhjMTMuNS0yMS4zIDI3LTQyLjcgNDAuNS02NGw2Ny4yIDAgMzIgMCAwIDY0LTMyIDAtMTA3LjcgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyOCAzMmw3NS44IDAtLjcgMS4xTDEyMCA0ODBsLTc1LjggMCAuNy0xLjFMMzI4IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const NotEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 144l32 0 209.1 0c-13.5 21.3-27 42.7-40.5 64L48 208l-32 0 0-64zm0 160l32 0 107.7 0c-13.5 21.3-27 42.7-40.5 64L48 368l-32 0 0-64zm174.9 64c13.5-21.3 27-42.7 40.5-64L400 304l32 0 0 64-32 0-209.1 0zM292.3 208c13.5-21.3 27-42.7 40.5-64l67.2 0 32 0 0 64-32 0-107.7 0z" />
            <path d="M328 32l75.8 0-.7 1.1L120 480l-75.8 0 .7-1.1L328 32z" />
    </Icon>
);

export default NotEqual;