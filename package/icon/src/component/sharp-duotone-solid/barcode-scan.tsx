
import { Icon, generic } from "../../index";

/**
 * A component that renders the `barcode-scan` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode-scan?s=sharp-duotone-solid barcode-scan}
 * @preview ![barcode-scan](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIzMmwyNCAwIDU5MiAwIDI0IDAgMCA0OC0yNCAwTDI0IDI4MCAwIDI4MGwwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMzJsNjQgMCAwIDE2MC02NCAwTDY0IDMyem0wIDI4OGw2NCAwIDAgMTYwLTY0IDAgMC0xNjB6bTk2IDBsMzIgMCAwIDE2MC0zMiAwIDAtMTYwem02NCAwbDY0IDAgMCAxNjAtNjQgMCAwLTE2MHptNjQtMTI4bC02NCAwIDAtMTYwIDY0IDAgMCAxNjB6bTMyIDEyOGw2NCAwIDAgMTYwLTY0IDAgMC0xNjB6bTY0LTEyOGwtNjQgMCAwLTE2MCA2NCAwIDAgMTYwem02NCAxMjhsMzIgMCAwIDE2MC0zMiAwIDAtMTYwem0zMi0xMjhsLTMyIDAgMC0xNjAgMzIgMCAwIDE2MHptMzIgMTI4bDY0IDAgMCAxNjAtNjQgMCAwLTE2MHptNjQtMTI4bC02NCAwIDAtMTYwIDY0IDAgMCAxNjB6bS0zODQgMGwtMzIgMCAwLTE2MCAzMiAwIDAgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BarcodeScan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 232l24 0 592 0 24 0 0 48-24 0L24 280 0 280l0-48z" />
            <path d="M64 32l64 0 0 160-64 0L64 32zm0 288l64 0 0 160-64 0 0-160zm96 0l32 0 0 160-32 0 0-160zm64 0l64 0 0 160-64 0 0-160zm64-128l-64 0 0-160 64 0 0 160zm32 128l64 0 0 160-64 0 0-160zm64-128l-64 0 0-160 64 0 0 160zm64 128l32 0 0 160-32 0 0-160zm32-128l-32 0 0-160 32 0 0 160zm32 128l64 0 0 160-64 0 0-160zm64-128l-64 0 0-160 64 0 0 160zm-384 0l-32 0 0-160 32 0 0 160z" />
    </Icon>
);

export default BarcodeScan;