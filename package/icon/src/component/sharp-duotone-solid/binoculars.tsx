
import { Icon, generic } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=sharp-duotone-solid binoculars}
 * @preview ![binoculars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwwIDY0IDk2IDAgMC02NEw5NiAzMnpNMjI0IDk2bDAgMTYwIDY0IDAgMC0xNjAtNjQgMHptOTYtNjRsMCA2NCA5NiAwIDAtNjQtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiA0ODBsMC0yMjQgMzIgMCAwLTE2MC0zMiAwTDY0IDk2IDQ4IDI1NiAwIDMzNiAwIDQ4MGwxOTIgMHptMTI4IDBsMTkyIDAgMC0xNDQtNDgtODBMNDQ4IDk2IDMyMCA5NmwtMzIgMCAwIDE2MCAzMiAwIDAgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 32l0 64 96 0 0-64L96 32zM224 96l0 160 64 0 0-160-64 0zm96-64l0 64 96 0 0-64-96 0z" />
            <path d="M192 480l0-224 32 0 0-160-32 0L64 96 48 256 0 336 0 480l192 0zm128 0l192 0 0-144-48-80L448 96 320 96l-32 0 0 160 32 0 0 224z" />
    </Icon>
);

export default Binoculars;