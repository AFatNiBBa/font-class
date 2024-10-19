
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=duotone circle-camera}
 * @preview ![circle-camera](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC02NGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzNiAwIDYuMi0xNi40YzMuNS05LjQgMTIuNS0xNS42IDIyLjUtMTUuNmw2Mi43IDBjMTAgMCAxOSA2LjIgMjIuNSAxNS42TDMxNiAxNjBsMzYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDEyOGMwIDE3LjctMTQuMyAzMi0zMiAzMmwtMTkyIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjAyLjIgMTQzLjZMMTk2IDE2MGwtMzYgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCAxMjhjMCAxNy43IDE0LjMgMzIgMzIgMzJsMTkyIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xMjhjMC0xNy43LTE0LjMtMzItMzItMzJsLTM2IDAtNi4yLTE2LjRjLTMuNS05LjQtMTIuNS0xNS42LTIyLjUtMTUuNmwtNjIuNyAwYy0xMCAwLTE5IDYuMi0yMi41IDE1LjZ6TTI1NiAyMDhhNDggNDggMCAxIDEgMCA5NiA0OCA0OCAwIDEgMSAwLTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-64c0-17.7 14.3-32 32-32l36 0 6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6l62.7 0c10 0 19 6.2 22.5 15.6L316 160l36 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-128z" />
            <path d="M202.2 143.6L196 160l-36 0c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l-36 0-6.2-16.4c-3.5-9.4-12.5-15.6-22.5-15.6l-62.7 0c-10 0-19 6.2-22.5 15.6zM256 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CircleCamera;