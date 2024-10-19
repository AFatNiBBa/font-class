
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bars-filter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bars-filter?s=sharp-duotone-solid bars-filter}
 * @preview ![bars-filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMjRsMzIwIDAgMCA2NEw2NCAyODhsMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCA2NEwwIDY0bDAgNjQgNDQ4IDAgMC02NHpNMjg4IDM4NGwtMTI4IDAgMCA2NCAxMjggMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BarsFilter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 224l320 0 0 64L64 288l0-64z" />
            <path d="M448 64L0 64l0 64 448 0 0-64zM288 384l-128 0 0 64 128 0 0-64z" />
    </Icon>
);

export default BarsFilter;