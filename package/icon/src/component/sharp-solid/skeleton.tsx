
import { Icon } from "../../index";

/**
 * A component that renders the `skeleton` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=sharp-solid skeleton}
 * @preview ![skeleton](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDBsMCAzMiAwIDMyIDEyOCAwIDMyIDAgMCA2NC0zMiAwLTEyOCAwIDAgMzIgMTkyIDAgMzIgMCAwIDY0LTMyIDAtMTkyIDAgMCAzMiA5NiAwIDMyIDAgMCA2NC0zMiAwLTk2IDAgMCA2NCAwIDIuM0wzNjggMzUybDgwIDAgMCA5Ni02NCA2NC0yNTYgMEw2NCA0NDhsMC05NiA4MCAwIDgwIDM0LjMgMC0yLjMgMC02NC05NiAwLTMyIDAgMC02NCAzMiAwIDk2IDAgMC0zMkwzMiAyMjQgMCAyMjRsMC02NCAzMiAwIDE5MiAwIDAtMzJMOTYgMTI4bC0zMiAwIDAtNjQgMzIgMCAxMjggMCAwLTMyIDAtMzIgNjQgMHpNMTg0IDQ0MGEyNCAyNCAwIDEgMCAtNDggMCAyNCAyNCAwIDEgMCA0OCAwem0xOTIgMGEyNCAyNCAwIDEgMCAtNDggMCAyNCAyNCAwIDEgMCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Skeleton: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 32 0 32 128 0 32 0 0 64-32 0-128 0 0 32 192 0 32 0 0 64-32 0-192 0 0 32 96 0 32 0 0 64-32 0-96 0 0 64 0 2.3L368 352l80 0 0 96-64 64-256 0L64 448l0-96 80 0 80 34.3 0-2.3 0-64-96 0-32 0 0-64 32 0 96 0 0-32L32 224 0 224l0-64 32 0 192 0 0-32L96 128l-32 0 0-64 32 0 128 0 0-32 0-32 64 0zM184 440a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm192 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Skeleton;