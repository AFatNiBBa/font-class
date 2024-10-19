
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brackets-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brackets-square?s=duotone brackets-square}
 * @preview ![brackets-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggNjRjMCAxNy43IDE0LjMgMzIgMzIgMzJsNjQgMCAwIDMyMC02NCAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDY0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zMjBjMC0zNS4zLTI4LjctNjQtNjQtNjRsLTY0IDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA5NkMwIDYwLjcgMjguNyAzMiA2NCAzMmw2NCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDY0IDk2bDAgMzIwIDY0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTY0IDBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const BracketsSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M288 64c0 17.7 14.3 32 32 32l64 0 0 320-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-64 0c-17.7 0-32 14.3-32 32z" />
            <path d="M0 96C0 60.7 28.7 32 64 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 96l0 320 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default BracketsSquare;