
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=sharp-duotone-solid align-right}
 * @preview ![align-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzJsMCA2NCAyODggMCAwLTY0TDE2MCAzMnptMCAyNTZsMCA2NCAyODggMCAwLTY0LTI4OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDQ4MEwwIDQ4MGwwLTY0IDQ0OCAwIDAgNjR6bTAtMjU2TDAgMjI0bDAtNjQgNDQ4IDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 32l0 64 288 0 0-64L160 32zm0 256l0 64 288 0 0-64-288 0z" />
            <path d="M448 480L0 480l0-64 448 0 0 64zm0-256L0 224l0-64 448 0 0 64z" />
    </Icon>
);

export default AlignRight;