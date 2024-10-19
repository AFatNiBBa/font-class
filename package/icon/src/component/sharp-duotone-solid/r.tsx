
import { Icon, generic } from "../../index";

/**
 * A component that renders the `r` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/r?s=sharp-duotone-solid r}
 * @preview ![r](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMkwwIDMyIDAgNjQgMCAyODggMCA0NDhsMCAzMiA2NCAwIDAtMzIgMC0xMjggOTMuMiAwTDI0NiA0ODBsNzMuMiAwLTQuMi03LjVMMjI1LjUgMzExLjNDMjgwLjcgMjkxLjEgMzIwIDIzOC4xIDMyMCAxNzZjMC03OS41LTY0LjUtMTQ0LTE0NC0xNDRMMzIgMzJ6TTE3NiAyNTZMNjQgMjU2IDY0IDk2bDExMiAwYzQ0LjIgMCA4MCAzNS44IDgwIDgwcy0zNS44IDgwLTgwIDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const R: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 32L0 32 0 64 0 288 0 448l0 32 64 0 0-32 0-128 93.2 0L246 480l73.2 0-4.2-7.5L225.5 311.3C280.7 291.1 320 238.1 320 176c0-79.5-64.5-144-144-144L32 32zM176 256L64 256 64 96l112 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default R;