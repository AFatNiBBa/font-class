
import { Icon } from "../../index";

/**
 * A component that renders the `plus-large` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-large?s=sharp-solid plus-large}
 * @preview ![plus-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDMybDAtMzJMMjI0IDBsMCAzMiAwIDE5MkwzMiAyMjQgMCAyMjRsMCA2NCAzMiAwIDE5MiAwIDAgMTkyIDAgMzIgNjQgMCAwLTMyIDAtMTkyIDE5MiAwIDMyIDAgMC02NC0zMiAwLTE5MiAwIDAtMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PlusLarge: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32l0-32L224 0l0 32 0 192L32 224 0 224l0 64 32 0 192 0 0 192 0 32 64 0 0-32 0-192 192 0 32 0 0-64-32 0-192 0 0-192z" />
    </Icon>
);

export default PlusLarge;