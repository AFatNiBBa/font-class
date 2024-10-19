
import { Icon, generic } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=sharp-duotone-solid input-pipe}
 * @preview ![input-pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgNjRMMCAzODRsMCA2NCA2NCAwIDUxMiAwIDY0IDAgMC02NCAwLTI1NiAwLTY0LTY0IDBMNjQgNjQgMCA2NHptNjQgNjRsNTEyIDAgMCAyNTZMNjQgMzg0bDAtMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTA0IDE2MGg0OFYzNTJIMTA0VjE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const InputPipe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 64L0 384l0 64 64 0 512 0 64 0 0-64 0-256 0-64-64 0L64 64 0 64zm64 64l512 0 0 256L64 384l0-256z" />
            <path d="M104 160h48V352H104V160z" />
    </Icon>
);

export default InputPipe;