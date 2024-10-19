
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-square` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-square?s=sharp-regular bracket-square}
 * @preview ![bracket-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmwyNCAwIDk2IDAgMjQgMCAwIDQ4LTI0IDBMNDggODBsMCAzNTIgNzIgMCAyNCAwIDAgNDgtMjQgMC05NiAwTDAgNDgwbDAtMjRMMCA1NiAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BracketSquare: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M0 32l24 0 96 0 24 0 0 48-24 0L48 80l0 352 72 0 24 0 0 48-24 0-96 0L0 480l0-24L0 56 0 32z" />
    </Icon>
);

export default BracketSquare;