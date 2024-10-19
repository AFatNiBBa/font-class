
import { Icon } from "../../index";

/**
 * A component that renders the `left-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=sharp-solid left-right}
 * @preview ![left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDEyOEw1MTIgMjU2IDM4NCAzODRsLTMyIDAgMC04MC0xOTIgMCAwIDgwLTMyIDBMMCAyNTYgMTI4IDEyOGwzMiAwIDAgODAgMTkyIDAgMC04MCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 128L512 256 384 384l-32 0 0-80-192 0 0 80-32 0L0 256 128 128l32 0 0 80 192 0 0-80 32 0z" />
    </Icon>
);

export default LeftRight;