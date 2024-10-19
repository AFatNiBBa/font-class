
import { Icon } from "../../index";

/**
 * A component that renders the `right-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=sharp-solid right-left}
 * @preview ![right-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDBMNTEyIDEyOCAzODQgMjU2bC0zMiAwIDAtOTZMMzIgMTYwIDAgMTYwIDAgOTZsMzIgMCAzMjAgMCAwLTk2IDMyIDB6TTEyOCAyNTZsMzIgMCAwIDk2IDMyMCAwIDMyIDAgMCA2NC0zMiAwLTMyMCAwIDAgOTYtMzIgMEwwIDM4NCAxMjggMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 0L512 128 384 256l-32 0 0-96L32 160 0 160 0 96l32 0 320 0 0-96 32 0zM128 256l32 0 0 96 320 0 32 0 0 64-32 0-320 0 0 96-32 0L0 384 128 256z" />
    </Icon>
);

export default RightLeft;