
import { Icon, generic } from "../../index";

/**
 * A component that renders the `warehouse-full` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse-full?s=sharp-duotone-solid warehouse-full}
 * @preview ![warehouse-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjI0bDE5MiAwIDAgMTI4LTE5MiAwIDAtMTI4em0wIDE2MGwxOTIgMCAwIDEyOC0xOTIgMCAwLTEyOHptMjI0IDBsMTYwIDAgMCAxMjgtMTYwIDAgMC0xMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDEyOFY1MTJIOTZWMTkySDU0NFY1MTJoOTZWMTI4TDMyMCAwIDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WarehouseFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 224l192 0 0 128-192 0 0-128zm0 160l192 0 0 128-192 0 0-128zm224 0l160 0 0 128-160 0 0-128z" />
            <path d="M0 128V512H96V192H544V512h96V128L320 0 0 128z" />
    </Icon>
);

export default WarehouseFull;