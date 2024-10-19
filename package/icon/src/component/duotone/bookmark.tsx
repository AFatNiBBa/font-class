
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=duotone bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAwbDAgMzIyLjFjMCAxMi44IDE0LjIgMjAuNCAyNC45IDEzLjNMMTkyIDI4OGw3MS4xIDQ3LjRjMTAuNiA3LjEgMjQuOS0uNSAyNC45LTEzLjNMMjg4IDAgOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNDg3LjdMMCA0OEMwIDIxLjUgMjEuNSAwIDQ4IDBMOTYgMGwwIDMyMi4xYzAgMTIuOCAxNC4yIDIwLjQgMjQuOSAxMy4zTDE5MiAyODhsNzEuMSA0Ny40YzEwLjYgNy4xIDI0LjktLjUgMjQuOS0xMy4zTDI4OCAwbDQ4IDBjMjYuNSAwIDQ4IDIxLjUgNDggNDhsMCA0MzkuN2MwIDEzLjQtMTAuOSAyNC4zLTI0LjMgMjQuM2MtNSAwLTkuOS0xLjUtMTQtNC40TDE5MiA0MDAgMzguMyA1MDcuNmMtNC4xIDIuOS05IDQuNC0xNCA0LjRDMTAuOSA1MTIgMCA1MDEuMSAwIDQ4Ny43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 322.1c0 12.8 14.2 20.4 24.9 13.3L192 288l71.1 47.4c10.6 7.1 24.9-.5 24.9-13.3L288 0 96 0z" />
            <path d="M0 487.7L0 48C0 21.5 21.5 0 48 0L96 0l0 322.1c0 12.8 14.2 20.4 24.9 13.3L192 288l71.1 47.4c10.6 7.1 24.9-.5 24.9-13.3L288 0l48 0c26.5 0 48 21.5 48 48l0 439.7c0 13.4-10.9 24.3-24.3 24.3c-5 0-9.9-1.5-14-4.4L192 400 38.3 507.6c-4.1 2.9-9 4.4-14 4.4C10.9 512 0 501.1 0 487.7z" />
    </Icon>
);

export default Bookmark;