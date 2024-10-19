
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sparkles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkles?s=sharp-duotone-solid sparkles}
 * @preview ![sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgOTZsNjQgMzIgMzIgNjQgMzItNjQgNjQtMzJMNDQ4IDY0IDQxNiAwIDM4NCA2NCAzMjAgOTZ6bTAgMzIwbDY0IDMyIDMyIDY0IDMyLTY0IDY0LTMyLTY0LTMyLTMyLTY0LTMyIDY0LTY0IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDE5MkwxOTIgNjRsNjQgMTI4IDEyOCA2NEwyNTYgMzIwIDE5MiA0NDggMTI4IDMyMCAwIDI1NmwxMjgtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sparkles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M320 96l64 32 32 64 32-64 64-32L448 64 416 0 384 64 320 96zm0 320l64 32 32 64 32-64 64-32-64-32-32-64-32 64-64 32z" />
            <path d="M128 192L192 64l64 128 128 64L256 320 192 448 128 320 0 256l128-64z" />
    </Icon>
);

export default Sparkles;