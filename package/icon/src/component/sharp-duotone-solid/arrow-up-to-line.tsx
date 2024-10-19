
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=sharp-duotone-solid arrow-up-to-line}
 * @preview ![arrow-up-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgMzIwIDAgMzIgMCAwIDY0LTMyIDBMMzIgOTYgMCA5NiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDE0Ni43bDIyLjYgMjIuNiAxMjggMTI4TDM2NS4zIDMyMCAzMjAgMzY1LjNsLTIyLjYtMjIuNkwyMjQgMjY5LjMgMjI0IDQ0OGwwIDMyLTY0IDAgMC0zMiAwLTE3OC43TDg2LjYgMzQyLjYgNjQgMzY1LjMgMTguNyAzMjBsMjIuNi0yMi42IDEyOC0xMjhMMTkyIDE0Ni43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 320 0 32 0 0 64-32 0L32 96 0 96 0 32z" />
            <path d="M192 146.7l22.6 22.6 128 128L365.3 320 320 365.3l-22.6-22.6L224 269.3 224 448l0 32-64 0 0-32 0-178.7L86.6 342.6 64 365.3 18.7 320l22.6-22.6 128-128L192 146.7z" />
    </Icon>
);

export default ArrowUpToLine;