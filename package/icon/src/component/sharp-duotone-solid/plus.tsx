
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=sharp-duotone-solid plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgODBsMC0zMi02NCAwIDAgMzIgMCAxNDRMNDggMjI0bC0zMiAwIDAgNjQgMzIgMCAxNDQgMCAwIDE0NCAwIDMyIDY0IDAgMC0zMiAwLTE0NCAxNDQgMCAzMiAwIDAtNjQtMzIgMC0xNDQgMCAwLTE0NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 80l0-32-64 0 0 32 0 144L48 224l-32 0 0 64 32 0 144 0 0 144 0 32 64 0 0-32 0-144 144 0 32 0 0-64-32 0-144 0 0-144z" />
    </Icon>
);

export default Plus;