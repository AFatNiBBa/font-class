
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-line?s=sharp-duotone-solid left-to-line}
 * @preview ![left-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgOTYgMCA0MTZsMCAzMiA2NCAwIDAtMzJMNjQgOTZsMC0zMkwwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMjU2TDI1NiA0MTZsMzIgMCAwLTk2IDE2MCAwIDAtMTI4LTE2MCAwIDAtOTYtMzIgMEw5NiAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const LeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 416l0 32 64 0 0-32L64 96l0-32L0 64z" />
            <path d="M96 256L256 416l32 0 0-96 160 0 0-128-160 0 0-96-32 0L96 256z" />
    </Icon>
);

export default LeftToLine;