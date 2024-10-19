
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fort` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fort?s=sharp-duotone-solid fort}
 * @preview ![fort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNjQgMGwwIDY0IDMyIDBMOTYgMGw2NCAwIDAgNjQgMzIgMCAwLTY0IDY0IDAgMCA2NCAwIDY0IDAgMzIgMCAzMi0zMiAzMkwzMiAyMjQgMCAxOTJsMC02NEwwIDY0IDAgMHpNMzg0IDBsNjQgMCAwIDY0IDMyIDAgMC02NCA2NCAwIDAgNjQgMzIgMCAwLTY0IDY0IDAgMCA2NCAwIDY0IDAgNjQtMzIgMzItMTkyIDAtMzItMzIgMC0zMiAwLTMyIDAtNjQgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxNjBsLTEyOCAwIDAgMzItMzIgMzJMMzIgMjI0bDAgMjg4IDIyNCAwIDAtMTI4YzAtMzUuMyAyOC43LTY0IDY0LTY0czY0IDI4LjcgNjQgNjRsMCAxMjggMjI0IDAgMC0yODgtMTkyIDAtMzItMzIgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Fort: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L64 0l0 64 32 0L96 0l64 0 0 64 32 0 0-64 64 0 0 64 0 64 0 32 0 32-32 32L32 224 0 192l0-64L0 64 0 0zM384 0l64 0 0 64 32 0 0-64 64 0 0 64 32 0 0-64 64 0 0 64 0 64 0 64-32 32-192 0-32-32 0-32 0-32 0-64 0-64z" />
            <path d="M384 160l-128 0 0 32-32 32L32 224l0 288 224 0 0-128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 128 224 0 0-288-192 0-32-32 0-32z" />
    </Icon>
);

export default Fort;