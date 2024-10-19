
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=duotone object-intersect}
 * @preview ![object-intersect](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGwyMjQgMCAwIDk2IDY0IDAgMCA2NCA5NiAwIDAgMjI0LTIyNCAwIDAtOTYtNjQgMCAwLTY0LTk2IDBMNjQgNjR6bTk2IDI4OGwwIDk2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDIyNCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjI0YzAtMzUuMy0yOC43LTY0LTY0LTY0bC05NiAwIDAtOTZjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMEMyOC43IDAgMCAyOC43IDAgNjRMMCAyODhjMCAzNS4zIDI4LjcgNjQgNjQgNjRsOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAyMjRjMC0zNS4zIDI4LjctNjQgNjQtNjRIMzUyVjI4OGMwIDM1LjMtMjguNyA2NC02NCA2NEgxNjBWMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 64l224 0 0 96 64 0 0 64 96 0 0 224-224 0 0-96-64 0 0-64-96 0L64 64zm96 288l0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0-96c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l96 0z" />
            <path d="M160 224c0-35.3 28.7-64 64-64H352V288c0 35.3-28.7 64-64 64H160V224z" />
    </Icon>
);

export default ObjectIntersect;