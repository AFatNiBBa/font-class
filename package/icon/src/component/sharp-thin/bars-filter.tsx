
import { Icon } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=sharp-thin bars-filter}
 * @preview ![bars-filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA4MGw0NDggMCAwIDE2TDAgOTYgMCA4MHpNNjQgMjQwbDMyMCAwIDAgMTZMNjQgMjU2bDAtMTZ6TTI4OCA0MDBsMCAxNi0xMjggMCAwLTE2IDEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 80l448 0 0 16L0 96 0 80zM64 240l320 0 0 16L64 256l0-16zM288 400l0 16-128 0 0-16 128 0z" />
    </Icon>
);

export default BarsFilter;