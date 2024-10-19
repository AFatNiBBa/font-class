
import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=sharp-solid box-ballot}
 * @preview ![box-ballot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDBMNDQ4IDBsMCAyMjQtMzIwIDBMMTI4IDB6TTAgMzUybDU3NiAwIDAgMTYwTDAgNTEyIDAgMzUyek0wIDE2MGw5NiAwIDAgOTYgMzg0IDAgMC05NiA5NiAwIDAgMTYwTDAgMzIwIDAgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 0L448 0l0 224-320 0L128 0zM0 352l576 0 0 160L0 512 0 352zM0 160l96 0 0 96 384 0 0-96 96 0 0 160L0 320 0 160z" />
    </Icon>
);

export default BoxBallot;