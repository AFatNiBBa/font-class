
import { Icon } from "../../index";

/**
 * A component that renders the `bandcamp` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bandcamp?s=brands bandcamp}
 * @preview ![bandcamp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2LDhDMTE5LDgsOCwxMTksOCwyNTZTMTE5LDUwNCwyNTYsNTA0LDUwNCwzOTMsNTA0LDI1NiwzOTMsOCwyNTYsOFptNDguMiwzMjYuMWgtMTgxTDIwNy45LDE3OGgxODFaIi8+PC9zdmc+|width=32|height=32)
 */
const Bandcamp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z" />
    </Icon>
);

export default Bandcamp;