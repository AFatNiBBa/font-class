
import { Icon, generic } from "../../index";

/**
 * A component that renders the `table` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/table?s=duotone table}
 * @preview ![table](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNTZsMCA2NCAxNjAgMCAwIDk2IDY0IDAgMC05NiAxNjAgMCAwLTY0LTE2MCAwIDAtOTYtNjQgMCAwIDk2TDY0IDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDE2MGwwIDI1NiAzODQgMCAwLTI1Nkw2NCAxNjB6TTAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJsMzg0IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAzMjBjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNDgwYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Table: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 256l0 64 160 0 0 96 64 0 0-96 160 0 0-64-160 0 0-96-64 0 0 96L64 256z" />
            <path d="M64 160l0 256 384 0 0-256L64 160zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default Table;