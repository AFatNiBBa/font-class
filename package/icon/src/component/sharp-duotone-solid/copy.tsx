
import { Icon, generic } from "../../index";

/**
 * A component that renders the `copy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=sharp-duotone-solid copy}
 * @preview ![copy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOGwwIDY0TDAgNDQ4bDAgNjQgNjQgMCAxOTIgMCA2NCAwIDAtNjQgMC0zMi02NCAwIDAgMzJMNjQgNDQ4bDAtMjU2IDY0IDAgMC02NC02NCAwTDAgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDBIMzUybDk2IDk2VjM4NEgxNjBWMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 64L0 448l0 64 64 0 192 0 64 0 0-64 0-32-64 0 0 32L64 448l0-256 64 0 0-64-64 0L0 128z" />
            <path d="M160 0H352l96 96V384H160V0z" />
    </Icon>
);

export default Copy;