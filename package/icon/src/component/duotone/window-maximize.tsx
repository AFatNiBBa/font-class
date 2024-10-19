
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-maximize` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-maximize?s=duotone window-maximize}
 * @preview ![window-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxMjhjMC0xNy43IDE0LjMtMzIgMzItMzJsMzIwIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJMOTYgMTYwYy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCA0ODBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zMjBjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NkwwIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGwzODQgMHpNOTYgOTZsMzIwIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJMOTYgMTYwYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WindowMaximize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 128c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32z" />
            <path d="M448 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0zM96 96l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </Icon>
);

export default WindowMaximize;