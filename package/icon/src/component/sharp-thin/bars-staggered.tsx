
import { Icon } from "../../index";

/**
 * A component that renders the `bars-staggered` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-staggered?s=sharp-thin bars-staggered}
 * @preview ![bars-staggered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA4MGw0NDggMCAwIDE2TDAgOTYgMCA4MHpNNjQgMjQwbDQ0OCAwIDAgMTZMNjQgMjU2bDAtMTZ6TTQ0OCA0MDBsMCAxNkwwIDQxNmwwLTE2IDQ0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BarsStaggered: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 80l448 0 0 16L0 96 0 80zM64 240l448 0 0 16L64 256l0-16zM448 400l0 16L0 416l0-16 448 0z" />
    </Icon>
);

export default BarsStaggered;