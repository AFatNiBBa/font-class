
import { Icon } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=sharp-solid binoculars}
 * @preview ![binoculars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDMybDAgNjRMOTYgOTZsMC02NCA5NiAwem0wIDk2bDAgMzUyTDAgNDgwIDAgMzM2bDQ4LTgwTDY0IDEyOGwxMjggMHptMTI4IDBsMTI4IDAgMTYgMTI4IDQ4IDgwIDAgMTQ0LTE5MiAwIDAtMzUyem0wLTk2bDk2IDAgMCA2NC05NiAwIDAtNjR6bS0zMiA5NmwwIDE2MC02NCAwIDAtMTYwIDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 32l0 64L96 96l0-64 96 0zm0 96l0 352L0 480 0 336l48-80L64 128l128 0zm128 0l128 0 16 128 48 80 0 144-192 0 0-352zm0-96l96 0 0 64-96 0 0-64zm-32 96l0 160-64 0 0-160 64 0z" />
    </Icon>
);

export default Binoculars;