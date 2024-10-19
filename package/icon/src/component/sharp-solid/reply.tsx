
import { Icon } from "../../index";

/**
 * A component that renders the `reply` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=sharp-solid reply}
 * @preview ![reply](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyMDhMMTkyIDM4NGwzMiAwIDAtOTYgODAgMGM2MS45IDAgMTEyIDUwLjEgMTEyIDExMmMwIDQ4LTMyIDgwLTMyIDgwczEyOC00OCAxMjgtMTc2YzAtOTcuMi03OC44LTE3Ni0xNzYtMTc2bC0xMTIgMCAwLTk2LTMyIDBMMCAyMDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 208L192 384l32 0 0-96 80 0c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-97.2-78.8-176-176-176l-112 0 0-96-32 0L0 208z" />
    </Icon>
);

export default Reply;