
import { Icon } from "../../index";

/**
 * A component that renders the `bars-sort` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-sort?s=sharp-solid bars-sort}
 * @preview ![bars-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NGw0NDggMCAwIDY0TDAgMTI4IDAgNjR6TTAgMjI0bDMyMCAwIDAgNjRMMCAyODhsMC02NHpNMTkyIDM4NGwwIDY0TDAgNDQ4bDAtNjQgMTkyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const BarsSort: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64l448 0 0 64L0 128 0 64zM0 224l320 0 0 64L0 288l0-64zM192 384l0 64L0 448l0-64 192 0z" />
    </Icon>
);

export default BarsSort;