
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-predecessor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-predecessor?s=sharp-duotone-solid diagram-predecessor}
 * @preview ![diagram-predecessor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDQ4MGw1MTIgMCAwLTE5MkwwIDI4OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAyMjRsMC0xMjggOTYgMCAwIDMyLTY0IDAgMCAzMiA5NiA5NiA5Ni05NiAwLTMyLTY0IDAgMC02NCAwLTMyLTMyIDBMMjg4IDMybC04MCAwTDAgMzIgMCAyMjRsMjg4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const DiagramPredecessor: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192L0 288z" />
            <path d="M288 224l0-128 96 0 0 32-64 0 0 32 96 96 96-96 0-32-64 0 0-64 0-32-32 0L288 32l-80 0L0 32 0 224l288 0z" />
    </Icon>
);

export default DiagramPredecessor;