
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=sharp-thin caret-right}
 * @preview ![caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTA0LjkgMTEyTDIzNC41IDI1NiAxMDQuOSA0MDAgODAgNDAwbDAtMjg4IDI0LjkgMHpNMjU2IDI1NkwxMTIgOTYgODAgOTYgNjQgOTZsMCAxNiAwIDI4OCAwIDE2IDE2IDAgMzIgMEwyNTYgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M104.9 112L234.5 256 104.9 400 80 400l0-288 24.9 0zM256 256L112 96 80 96 64 96l0 16 0 288 0 16 16 0 32 0L256 256z" />
    </Icon>
);

export default CaretRight;