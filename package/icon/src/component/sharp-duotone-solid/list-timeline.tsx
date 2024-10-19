
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-timeline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-timeline?s=sharp-duotone-solid list-timeline}
 * @preview ![list-timeline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDQgOTZsNjQgNDggMjQwIDAgMC05NkwyMDggNDggMTQ0IDk2em0wIDE2MGw2NCA0OCAzMDQgMCAwLTk2LTMwNCAwLTY0IDQ4em0wIDE2MGw2NCA0OCAyNDAgMCAwLTk2LTI0MCAwLTY0IDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMTQ0YTQ4IDQ4IDAgMSAwIDAtOTYgNDggNDggMCAxIDAgMCA5NnptNDggMTEyYTQ4IDQ4IDAgMSAwIC05NiAwIDQ4IDQ4IDAgMSAwIDk2IDB6bTAgMTYwYTQ4IDQ4IDAgMSAwIC05NiAwIDQ4IDQ4IDAgMSAwIDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ListTimeline: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M144 96l64 48 240 0 0-96L208 48 144 96zm0 160l64 48 304 0 0-96-304 0-64 48zm0 160l64 48 240 0 0-96-240 0-64 48z" />
            <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 112a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default ListTimeline;