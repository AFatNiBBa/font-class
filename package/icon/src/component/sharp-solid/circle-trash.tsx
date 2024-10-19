
import { Icon } from "../../index";

/**
 * A component that renders the `circle-trash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-trash?s=sharp-solid circle-trash}
 * @preview ![circle-trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTE2MCAxMjhsNDEuNCAwIDExLjMtMTEuMyA0LjctNC43IDYuNiAwIDY0IDAgNi42IDAgNC43IDQuN0wzMTAuNiAxMjhsNDEuNCAwIDE2IDAgMCAzMi0xNiAwLTE5MiAwLTE2IDAgMC0zMiAxNiAwem0wIDY0bDE5MiAwTDMzNiAzODRsLTE2MCAwTDE2MCAxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleTrash: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l41.4 0 11.3-11.3 4.7-4.7 6.6 0 64 0 6.6 0 4.7 4.7L310.6 128l41.4 0 16 0 0 32-16 0-192 0-16 0 0-32 16 0zm0 64l192 0L336 384l-160 0L160 192z" />
    </Icon>
);

export default CircleTrash;