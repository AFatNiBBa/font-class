
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=sharp-duotone-solid trash-list}
 * @preview ![trash-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5Nkw1NiA1MTJsMzA0IDBMMzg0IDk2IDMyIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDBMMTI4IDAgMTEyIDMyIDAgMzIgMCA5Nmw0MjQgMCAwLTY0TDMwNCAzMiAyODggMHpNNDQ4IDEyOGwwIDY0IDE5MiAwIDAtNjQtMTkyIDB6bTAgMTI4bDAgNjQgMTYwIDAgMC02NC0xNjAgMHptOTYgMTI4bC05NiAwIDAgNjQgOTYgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TrashList: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l304 0L384 96 32 96z" />
            <path d="M288 0L128 0 112 32 0 32 0 96l424 0 0-64L304 32 288 0zM448 128l0 64 192 0 0-64-192 0zm0 128l0 64 160 0 0-64-160 0zm96 128l-96 0 0 64 96 0 0-64z" />
    </Icon>
);

export default TrashList;