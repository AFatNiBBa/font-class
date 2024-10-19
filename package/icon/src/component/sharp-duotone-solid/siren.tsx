
import { Icon, generic } from "../../index";

/**
 * A component that renders the `siren` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=sharp-duotone-solid siren}
 * @preview ![siren](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAzNTJMODAgOTZsMjg4IDAgMzIgMjU2LTI2MS45IDAgMjEuOC0xNzQgMi4yLTE4LTMyLjIgMC0xLjggMTRMMTA1LjkgMzUyIDQ4IDM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAzNTJMMCAzNTIgMCA0ODBsNDQ4IDAgMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 352L80 96l288 0 32 256-261.9 0 21.8-174 2.2-18-32.2 0-1.8 14L105.9 352 48 352z" />
            <path d="M448 352L0 352 0 480l448 0 0-128z" />
    </Icon>
);

export default Siren;