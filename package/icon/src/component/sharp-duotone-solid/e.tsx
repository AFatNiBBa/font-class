
import { Icon, generic } from "../../index";

/**
 * A component that renders the `e` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=sharp-duotone-solid e}
 * @preview ![e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMkwwIDMyIDAgNjQgMCAyMjRsMCAzMiAwIDMyTDAgNDQ4bDAgMzIgMzIgMCAyNTYgMCAzMiAwIDAtNjQtMzIgMEw2NCA0MTZsMC0xMjggMTYwIDAgMzIgMCAwLTY0LTMyIDBMNjQgMjI0IDY0IDk2bDIyNCAwIDMyIDAgMC02NC0zMiAwTDMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const E: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 32L0 32 0 64 0 224l0 32 0 32L0 448l0 32 32 0 256 0 32 0 0-64-32 0L64 416l0-128 160 0 32 0 0-64-32 0L64 224 64 96l224 0 32 0 0-64-32 0L32 32z" />
    </Icon>
);

export default E;