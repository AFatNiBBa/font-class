
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folders` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=sharp-duotone-solid folders}
 * @preview ![folders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgMjRMMCA0NTZsMCAyNCAyNCAwIDQzMiAwIDI0IDAgMC00OC0yNCAwTDQ4IDQzMmwwLTMxMiAwLTI0TDAgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAzODRINTc2Vjk2SDM2OEwzMDQgMzJIOTZWMzg0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Folders: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312 0-24L0 96z" />
            <path d="M96 384H576V96H368L304 32H96V384z" />
    </Icon>
);

export default Folders;