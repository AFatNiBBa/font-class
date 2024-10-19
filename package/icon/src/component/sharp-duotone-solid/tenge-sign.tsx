
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tenge-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tenge-sign?s=sharp-duotone-solid tenge-sign}
 * @preview ![tenge-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwwIDY0IDE2MCAwIDAgMjU2IDY0IDAgMC0yNTYgMTYwIDAgMC02NC0xNjAgMC02NCAwTDAgMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMkgzODRWOTZIMFYzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const TengeSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 64 160 0 0 256 64 0 0-256 160 0 0-64-160 0-64 0L0 160z" />
            <path d="M0 32H384V96H0V32z" />
    </Icon>
);

export default TengeSign;