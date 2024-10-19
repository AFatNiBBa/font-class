
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-group` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=sharp-duotone-solid object-group}
 * @preview ![object-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAxMjhsMzIgMCAwIDI1NkwwIDM4NCAwIDUxMmwxMjggMCAwLTMyIDMyMCAwIDAgMzIgMTI4IDAgMC0xMjgtMzIgMCAwLTI1NiAzMiAwTDU3NiAwIDQ0OCAwbDAgMzJMMTI4IDMybDAtMzJMMCAwek05NiA5NmwzODQgMCAwIDMyMEw5NiA0MTYgOTYgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjAgMTI4bC0xOTIgMCAwIDE2MCAxOTIgMCAwLTE2MHpNMjU2IDM4NGwxOTIgMCAwLTE2MC05NiAwIDAgNjQgMCAzMi0zMiAwLTY0IDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ObjectGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 128l32 0 0 256L0 384 0 512l128 0 0-32 320 0 0 32 128 0 0-128-32 0 0-256 32 0L576 0 448 0l0 32L128 32l0-32L0 0zM96 96l384 0 0 320L96 416 96 96z" />
            <path d="M320 128l-192 0 0 160 192 0 0-160zM256 384l192 0 0-160-96 0 0 64 0 32-32 0-64 0 0 64z" />
    </Icon>
);

export default ObjectGroup;