
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can?s=sharp-duotone-solid trash-can}
 * @preview ![trash-can](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwwIDQxNiAzODQgMCAwLTQxNkwzMiA5NnptODAgNjRsMzIgMCAwIDE2IDAgMjI0IDAgMTYtMzIgMCAwLTE2IDAtMjI0IDAtMTZ6bTk2IDBsMzIgMCAwIDE2IDAgMjI0IDAgMTYtMzIgMCAwLTE2IDAtMjI0IDAtMTZ6bTk2IDBsMzIgMCAwIDE2IDAgMjI0IDAgMTYtMzIgMCAwLTE2IDAtMjI0IDAtMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMDQgMEwxNDQgMCAxMjggMzIgMCAzMiAwIDk2bDQ0OCAwIDAtNjRMMzIwIDMyIDMwNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TrashCan: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 416 384 0 0-416L32 96zm80 64l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16zm96 0l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16zm96 0l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16z" />
            <path d="M304 0L144 0 128 32 0 32 0 96l448 0 0-64L320 32 304 0z" />
    </Icon>
);

export default TrashCan;