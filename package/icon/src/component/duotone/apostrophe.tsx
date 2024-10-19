
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=duotone apostrophe}
 * @preview ![apostrophe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik03MiAzNTJjNjYuMyAwIDEyMC01My43IDEyMC0xMjBsMC03MiAwLTMyIDAtMzJjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NmwwIDY0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDY0IDAgMCA4YzAgMzAuOS0yNS4xIDU2LTU2IDU2bC04IDBjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M72 352c66.3 0 120-53.7 120-120l0-72 0-32 0-32c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l64 0 0 8c0 30.9-25.1 56-56 56l-8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l8 0z" />
    </Icon>
);

export default Apostrophe;