
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-f` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-f?s=sharp-duotone-solid square-f}
 * @preview ![square-f](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6bTEyOCA5NmwyNCAwIDE0NCAwIDI0IDAgMCA0OC0yNCAwLTEyMCAwIDAgNjQgODggMCAyNCAwIDAgNDgtMjQgMC04OCAwIDAgNzIgMCAyNC00OCAwIDAtMjQgMC05NiAwLTExMiAwLTI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDEyOGwyNCAwIDE0NCAwIDI0IDAgMCA0OC0yNCAwLTEyMCAwIDAgNjQgODggMCAyNCAwIDAgNDgtMjQgMC04OCAwIDAgNzIgMCAyNC00OCAwIDAtMjQgMC05NiAwLTExMiAwLTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareF: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm128 96l24 0 144 0 24 0 0 48-24 0-120 0 0 64 88 0 24 0 0 48-24 0-88 0 0 72 0 24-48 0 0-24 0-96 0-112 0-24z" />
            <path d="M128 128l24 0 144 0 24 0 0 48-24 0-120 0 0 64 88 0 24 0 0 48-24 0-88 0 0 72 0 24-48 0 0-24 0-96 0-112 0-24z" />
    </Icon>
);

export default SquareF;