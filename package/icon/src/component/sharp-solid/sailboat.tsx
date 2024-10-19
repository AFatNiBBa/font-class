
import { Icon } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=sharp-solid sailboat}
 * @preview ![sailboat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDM1MkwyNTYgMCA1MjggMzUybC0yNzIgMHpNMCAzODRsNTc2IDBMNDgwIDUxMiA5NiA1MTIgMCAzODR6TTIyNCA2NGwwIDI4OEw0OCAzNTIgMjI0IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 352L256 0 528 352l-272 0zM0 384l576 0L480 512 96 512 0 384zM224 64l0 288L48 352 224 64z" />
    </Icon>
);

export default Sailboat;