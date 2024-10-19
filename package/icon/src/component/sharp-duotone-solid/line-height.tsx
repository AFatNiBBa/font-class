
import { Icon, generic } from "../../index";

/**
 * A component that renders the `line-height` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/line-height?s=sharp-duotone-solid line-height}
 * @preview ![line-height](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgNjRsMzIwIDAgMCA2NC0zMjAgMCAwLTY0em0wIDE2MGwzMjAgMCAwIDY0LTMyMCAwIDAtNjR6bTAgMTYwbDMyMCAwIDAgNjQtMzIwIDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDMybDk2IDk2LTY0IDAgMCAyNTYgNjQgMEw5NiA0ODAgMCAzODRsNjQgMCAwLTI1NkwwIDEyOCA5NiAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LineHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 64l320 0 0 64-320 0 0-64zm0 160l320 0 0 64-320 0 0-64zm0 160l320 0 0 64-320 0 0-64z" />
            <path d="M96 32l96 96-64 0 0 256 64 0L96 480 0 384l64 0 0-256L0 128 96 32z" />
    </Icon>
);

export default LineHeight;