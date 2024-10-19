
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-exclamation?s=sharp-duotone-solid star-exclamation}
 * @preview ![star-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOC45IDE5NS42TDE0OC4xIDMyOC41IDEyMS43IDUxMmwxNjYuNC04MS44TDQ1NC40IDUxMiA0MjggMzI4LjUgNTU3LjIgMTk1LjYgMzc0LjYgMTY0IDI4OC4xIDAgMjAxLjUgMTY0IDE4LjkgMTk1LjZ6TTI2NCAxNjBsNDggMCAwIDI0IDAgODAgMCAyNC00OCAwIDAtMjQgMC04MCAwLTI0em0wIDE2MGw0OCAwIDAgNDgtNDggMCAwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzEyIDE4NGwwLTI0LTQ4IDAgMCAyNCAwIDgwIDAgMjQgNDggMCAwLTI0IDAtODB6bTAgMTM2bC00OCAwIDAgNDggNDggMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const StarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M18.9 195.6L148.1 328.5 121.7 512l166.4-81.8L454.4 512 428 328.5 557.2 195.6 374.6 164 288.1 0 201.5 164 18.9 195.6zM264 160l48 0 0 24 0 80 0 24-48 0 0-24 0-80 0-24zm0 160l48 0 0 48-48 0 0-48z" />
            <path d="M312 184l0-24-48 0 0 24 0 80 0 24 48 0 0-24 0-80zm0 136l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default StarExclamation;