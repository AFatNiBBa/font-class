
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=sharp-duotone-solid forward-step}
 * @preview ![forward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgNjRsNjQgMCAwIDMyIDAgMzIwIDAgMzItNjQgMCAwLTMyIDAtMTYwIDAtMTYwIDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDY0VjQ0OEwyNTYgMjU2IDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M256 64l64 0 0 32 0 320 0 32-64 0 0-32 0-160 0-160 0-32z" />
            <path d="M0 64V448L256 256 0 64z" />
    </Icon>
);

export default ForwardStep;