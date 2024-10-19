
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shovel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=sharp-duotone-solid shovel}
 * @preview ![shovel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTMuNCAyNzMuNGMxNS4xIDE1LjEgMzAuMiAzMC4yIDQ1LjMgNDUuM0wzNDEuMyAyMTZjMTEuNCA1LjEgMjQgOCAzNy4zIDhjMjQgMCA0Ny05LjUgNjQtMjYuNWwyNC4yLTI0LjJMNTEyIDEyOCA0NjYuNyA4Mi43IDQyOS4zIDQ1LjMgMzg0IDAgMzM4LjcgNDUuMyAzMTQuNSA2OS41Yy0xNyAxNy0yNi41IDQwLTI2LjUgNjRjMCAxMy4zIDIuOSAyNS45IDggMzcuM0wxOTMuNCAyNzMuNHpNMzUyIDEzMy41YzAtNyAyLjgtMTMuOCA3LjgtMTguN0wzODQgOTAuNSA0MjEuNSAxMjhsLTI0LjIgMjQuMmMtNSA1LTExLjcgNy44LTE4LjcgNy44Yy0xNC42IDAtMjYuNS0xMS45LTI2LjUtMjYuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMwNCAzODRMMTI4IDIwOCAwIDMzNlY1MTJIMTc2TDMwNCAzODR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M193.4 273.4c15.1 15.1 30.2 30.2 45.3 45.3L341.3 216c11.4 5.1 24 8 37.3 8c24 0 47-9.5 64-26.5l24.2-24.2L512 128 466.7 82.7 429.3 45.3 384 0 338.7 45.3 314.5 69.5c-17 17-26.5 40-26.5 64c0 13.3 2.9 25.9 8 37.3L193.4 273.4zM352 133.5c0-7 2.8-13.8 7.8-18.7L384 90.5 421.5 128l-24.2 24.2c-5 5-11.7 7.8-18.7 7.8c-14.6 0-26.5-11.9-26.5-26.5z" />
            <path d="M304 384L128 208 0 336V512H176L304 384z" />
    </Icon>
);

export default Shovel;