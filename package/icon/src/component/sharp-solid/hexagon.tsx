
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=sharp-solid hexagon}
 * @preview ![hexagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDMyTDAgMjU2IDEyOCA0ODBsMjU2IDBMNTEyIDI1NiAzODQgMzIgMTI4IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32L0 256 128 480l256 0L512 256 384 32 128 32z" />
    </Icon>
);

export default Hexagon;