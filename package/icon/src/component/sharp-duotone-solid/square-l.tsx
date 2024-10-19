
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-l` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-l?s=sharp-duotone-solid square-l}
 * @preview ![square-l](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6bTEyOCA5Nmw0OCAwIDAgMjQgMCAxODQgMTIwIDAgMjQgMCAwIDQ4LTI0IDAtMTQ0IDAtMjQgMCAwLTI0IDAtMjA4IDAtMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMTI4bDAgMjQgMCAxODQgMTIwIDAgMjQgMCAwIDQ4LTI0IDAtMTQ0IDAtMjQgMCAwLTI0IDAtMjA4IDAtMjQgNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareL: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l48 0 0 24 0 184 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-208 0-24z" />
            <path d="M176 128l0 24 0 184 120 0 24 0 0 48-24 0-144 0-24 0 0-24 0-208 0-24 48 0z" />
    </Icon>
);

export default SquareL;