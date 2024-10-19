
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=sharp-light caret-right}
 * @preview ![caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMTI4bDAgMjU2IDEuNyAwTDIxMyAyNTYgOTcuOCAxMjggOTYgMTI4em0tMzIgMGwwLTMyIDMyIDAgMTYgMEwyNTYgMjU2IDExMiA0MTZsLTE2IDAtMzIgMCAwLTMyIDAtMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M96 128l0 256 1.7 0L213 256 97.8 128 96 128zm-32 0l0-32 32 0 16 0L256 256 112 416l-16 0-32 0 0-32 0-256z" />
    </Icon>
);

export default CaretRight;