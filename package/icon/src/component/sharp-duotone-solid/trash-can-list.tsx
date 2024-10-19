
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-list?s=sharp-duotone-solid trash-can-list}
 * @preview ![trash-can-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwwIDQxNiAzNTIgMCAwLTQxNkwzMiA5NnptOTYgODBsMzIgMCAwIDE2IDAgMjI0IDAgMTYtMzIgMCAwLTE2IDAtMjI0IDAtMTZ6bTEyOCAwbDMyIDAgMCAxNiAwIDIyNCAwIDE2LTMyIDAgMC0xNiAwLTIyNCAwLTE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDBMMjg4IDBsMTYgMzIgMTEyIDAgMCA2NEwwIDk2IDAgMzJsMTEyIDBMMTI4IDB6TTY0MCAxMjhsMCA2NC0xOTIgMCAwLTY0IDE5MiAwek02MDggMjU2bDAgNjQtMTYwIDAgMC02NCAxNjAgMHpNNDQ4IDM4NGw5NiAwIDAgNjQtOTYgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TrashCanList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 416 352 0 0-416L32 96zm96 80l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16zm128 0l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16z" />
            <path d="M128 0L288 0l16 32 112 0 0 64L0 96 0 32l112 0L128 0zM640 128l0 64-192 0 0-64 192 0zM608 256l0 64-160 0 0-64 160 0zM448 384l96 0 0 64-96 0 0-64z" />
    </Icon>
);

export default TrashCanList;