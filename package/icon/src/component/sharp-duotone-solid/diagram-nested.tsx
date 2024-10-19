
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-nested` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=sharp-duotone-solid diagram-nested}
 * @preview ![diagram-nested](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMjRsMCAxNjAgMCAzMiAzMiAwIDE2MCAwIDAtNjQtMTI4IDAgMC0xMjgtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAzMkwwIDMyIDAgMjI0bDE5MiAwIDAtMTkyek00NDggMjg4bC0xOTIgMCAwIDE5MiAxOTIgMCAwLTE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiagramNested: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 224l0 160 0 32 32 0 160 0 0-64-128 0 0-128-64 0z" />
            <path d="M192 32L0 32 0 224l192 0 0-192zM448 288l-192 0 0 192 192 0 0-192z" />
    </Icon>
);

export default DiagramNested;