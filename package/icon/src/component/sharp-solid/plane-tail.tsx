
import { Icon } from "../../index";

/**
 * A component that renders the `plane-tail` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-tail?s=sharp-solid plane-tail}
 * @preview ![plane-tail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDI1NmwwIDI1Ni0yNTYgMEwwIDQxNmwwLTk2IDY0LTE2TDAgMCAxNDQgMCAzODQgMjU2bDEyOCAwek0yMjQgMzUybC0yNCAwIDAgNDggMjQgMCAxMjggMCAyNCAwIDAtNDgtMjQgMC0xMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PlaneTail: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256l0 256-256 0L0 416l0-96 64-16L0 0 144 0 384 256l128 0zM224 352l-24 0 0 48 24 0 128 0 24 0 0-48-24 0-128 0z" />
    </Icon>
);

export default PlaneTail;