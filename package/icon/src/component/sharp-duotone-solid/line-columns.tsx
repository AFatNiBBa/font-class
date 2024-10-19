
import { Icon, generic } from "../../index";

/**
 * A component that renders the `line-columns` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-columns?s=sharp-duotone-solid line-columns}
 * @preview ![line-columns](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggMzJsMCA2NCAyMjQgMCAwLTY0TDI4OCAzMnptMCAxMjhsMCA2NCAyMjQgMCAwLTY0LTIyNCAwem0wIDEyOGwwIDY0IDIyNCAwIDAtNjQtMjI0IDB6bTAgMTI4bDAgNjQgMjI0IDAgMC02NC0yMjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAzMkwwIDMyIDAgOTZsMjI0IDAgMC02NHptMCAxMjhMMCAxNjBsMCA2NCAyMjQgMCAwLTY0ek0wIDI4OGwwIDY0IDIyNCAwIDAtNjRMMCAyODh6TTIyNCA0MTZMMCA0MTZsMCA2NCAyMjQgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LineColumns: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 32l0 64 224 0 0-64L288 32zm0 128l0 64 224 0 0-64-224 0zm0 128l0 64 224 0 0-64-224 0zm0 128l0 64 224 0 0-64-224 0z" />
            <path d="M224 32L0 32 0 96l224 0 0-64zm0 128L0 160l0 64 224 0 0-64zM0 288l0 64 224 0 0-64L0 288zM224 416L0 416l0 64 224 0 0-64z" />
    </Icon>
);

export default LineColumns;