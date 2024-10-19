
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=sharp-duotone-solid toggle-large-off}
 * @preview ![toggle-large-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgNjRMMCAzODRsMCA2NCA2NCAwIDQ0OCAwIDY0IDAgMC02NCAwLTI1NiAwLTY0LTY0IDBMNjQgNjQgMCA2NHptNjQgNjRsMjU2IDAgMTkyIDAgMCAyNTYtMTkyIDBMNjQgMzg0bDAtMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMTI4aDI1NnYyNTZINjRWMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 64L0 384l0 64 64 0 448 0 64 0 0-64 0-256 0-64-64 0L64 64 0 64zm64 64l256 0 192 0 0 256-192 0L64 384l0-256z" />
            <path d="M64 128h256v256H64V128z" />
    </Icon>
);

export default ToggleLargeOff;