
import { Icon } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=sharp-regular circle-trash}
 * @preview ![circle-trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAwIDQ4IDI1NmEyMDggMjA4IDAgMSAwIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTE2MCAxMjhsNDEuNCAwIDExLjMtMTEuMyA0LjctNC43IDYuNiAwIDY0IDAgNi42IDAgNC43IDQuN0wzMTAuNiAxMjhsNDEuNCAwIDE2IDAgMCAzMi0xNiAwLTE5MiAwLTE2IDAgMC0zMiAxNiAwem0wIDY0bDE5MiAwTDMzNiAzODRsLTE2MCAwTDE2MCAxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM160 128l41.4 0 11.3-11.3 4.7-4.7 6.6 0 64 0 6.6 0 4.7 4.7L310.6 128l41.4 0 16 0 0 32-16 0-192 0-16 0 0-32 16 0zm0 64l192 0L336 384l-160 0L160 192z" />
    </Icon>
);

export default CircleTrash;