
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=duotone object-subtract}
 * @preview ![object-subtract](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgMjg4YzAgMzUuMyAyOC43IDY0IDY0IDY0bDk2IDAgMTI4IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0xMjggMC05NmMwLTM1LjMtMjguNy02NC02NC02NEw2NCAwQzI4LjcgMCAwIDI4LjcgMCA2NHptNjQgMGwyMjQgMCAwIDIyNEw2NCAyODggNjQgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggNTEyYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjI0YzAtMzUuMy0yOC43LTY0LTY0LTY0bC05NiAwIDAgMTI4YzAgMzUuMy0yOC43IDY0LTY0IDY0bC0xMjggMCAwIDk2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDIyNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 288c0 35.3 28.7 64 64 64l96 0 128 0c35.3 0 64-28.7 64-64l0-128 0-96c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zm64 0l224 0 0 224L64 288 64 64z" />
            <path d="M448 512c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0 128c0 35.3-28.7 64-64 64l-128 0 0 96c0 35.3 28.7 64 64 64l224 0z" />
    </Icon>
);

export default ObjectSubtract;