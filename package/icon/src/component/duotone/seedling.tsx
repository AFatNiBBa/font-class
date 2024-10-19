
import { Icon, generic } from "../../index";

/**
 * A component that renders the `seedling` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=duotone seedling}
 * @preview ![seedling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMzcuNyAxNDYuNmMyNS4xIDMwLjcgNDIuMSA2OC4zIDQ4IDEwOS40bDIuMyAwYzEyMy43IDAgMjI0LTEwMC4zIDIyNC0yMjRjMC0xNy43LTE0LjMtMzItMzItMzJMNDQ4IDBDMzUxLjUgMCAyNjkuMiA2MSAyMzcuNyAxNDYuNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDY0QzE0LjMgNjQgMCA3OC4zIDAgOTZDMCAyMTkuNyAxMDAuMyAzMjAgMjI0IDMyMGwwIDE2MGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMTYwIDAtMzJDMjg4IDE2NC4zIDE4Ny43IDY0IDY0IDY0TDMyIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M237.7 146.6c25.1 30.7 42.1 68.3 48 109.4l2.3 0c123.7 0 224-100.3 224-224c0-17.7-14.3-32-32-32L448 0C351.5 0 269.2 61 237.7 146.6z" />
            <path d="M32 64C14.3 64 0 78.3 0 96C0 219.7 100.3 320 224 320l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-32C288 164.3 187.7 64 64 64L32 64z" />
    </Icon>
);

export default Seedling;