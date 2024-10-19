
import { Icon, generic } from "../../index";

/**
 * A component that renders the `id-card-clip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=sharp-duotone-solid id-card-clip}
 * @preview ![id-card-clip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDIyNCAwIDAgNjQtMzIgMCAwIDMyIDMyIDAgMTI4IDAgMzIgMCAwLTMyLTMyIDAgMC02NCAyMjQgMCAwIDQ0OEwwIDUxMiAwIDY0ek0xNzYgNDQ4bDIyNCAwLTMyLTY0LTE2MCAwLTMyIDY0em00OC0xNjBhNjQgNjQgMCAxIDAgMTI4IDAgNjQgNjQgMCAxIDAgLTEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDBMMjI0IDBsMCAxMjggMTI4IDBMMzUyIDB6bTAgMjg4YTY0IDY0IDAgMSAwIC0xMjggMCA2NCA2NCAwIDEgMCAxMjggMHptMTYgOTZsLTE2MCAwLTMyIDY0IDIyNCAwLTMyLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const IdCardClip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l224 0 0 64-32 0 0 32 32 0 128 0 32 0 0-32-32 0 0-64 224 0 0 448L0 512 0 64zM176 448l224 0-32-64-160 0-32 64zm48-160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
            <path d="M352 0L224 0l0 128 128 0L352 0zm0 288a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96l-160 0-32 64 224 0-32-64z" />
    </Icon>
);

export default IdCardClip;