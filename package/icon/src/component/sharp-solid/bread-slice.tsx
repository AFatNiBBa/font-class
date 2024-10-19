
import { Icon } from "../../index";

/**
 * A component that renders the `bread-slice` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-slice?s=sharp-solid bread-slice}
 * @preview ![bread-slice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyQzE5MiAzMiAwIDY0IDAgMTkyYzAgMzUuMyAyOC43IDY0IDY0IDY0VjQ4MEg0NDhWMjU2YzM1LjMgMCA2NC0yOC43IDY0LTY0QzUxMiA2NCAzMjAgMzIgMjU2IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BreadSlice: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C192 32 0 64 0 192c0 35.3 28.7 64 64 64V480H448V256c35.3 0 64-28.7 64-64C512 64 320 32 256 32z" />
    </Icon>
);

export default BreadSlice;