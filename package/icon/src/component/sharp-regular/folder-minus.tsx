
import { Icon } from "../../index";

/**
 * A component that renders the `folder-minus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-minus?s=sharp-regular folder-minus}
 * @preview ![folder-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDMybDQ4IDY0IDE5MiAwIDQ4IDAgMCA0OCAwIDI4OCAwIDQ4LTQ4IDBMNDggNDgwIDAgNDgwbDAtNDhMMCA4MCAwIDMybDQ4IDAgMTc2IDB6bTQ4IDExMmwtMjQgMC0xNC40LTE5LjJMMjAwIDgwIDQ4IDgwbDAgMzUyIDQxNiAwIDAtMjg4LTE5MiAwek0xODQgMjcybDE0NCAwIDI0IDAgMCA0OC0yNCAwLTE0NCAwLTI0IDAgMC00OCAyNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 192 0 48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 80 0 32l48 0 176 0zm48 112l-24 0-14.4-19.2L200 80 48 80l0 352 416 0 0-288-192 0zM184 272l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0z" />
    </Icon>
);

export default FolderMinus;