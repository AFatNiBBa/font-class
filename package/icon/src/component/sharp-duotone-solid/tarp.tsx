
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tarp` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp?s=sharp-duotone-solid tarp}
 * @preview ![tarp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4bDQxNiAwIDAtMTYwIDE2MCAwIDAtMjI0TDAgNjR6bTEyOCA5NmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTc2IDI4OEw0MTYgNDQ4bDAtMTYwIDE2MCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tarp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l416 0 0-160 160 0 0-224L0 64zm128 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M576 288L416 448l0-160 160 0z" />
    </Icon>
);

export default Tarp;