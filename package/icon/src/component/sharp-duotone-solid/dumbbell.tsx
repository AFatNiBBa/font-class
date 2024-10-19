
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dumbbell` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumbbell?s=sharp-duotone-solid dumbbell}
 * @preview ![dumbbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDY0IDMyIDAgMC02NEwwIDIyNHptMTkyIDBsMCA2NCAyNTYgMCAwLTY0LTI1NiAwem00MTYgMGwwIDY0IDMyIDAgMC02NC0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDMyTDk2IDMybDAgOTYtNjQgMCAwIDI1NiA2NCAwIDAgOTYgOTYgMCAwLTQ0OHptMjU2IDBsMCA0NDggOTYgMCAwLTk2IDY0IDAgMC0yNTYtNjQgMCAwLTk2LTk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Dumbbell: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 0-64L0 224zm192 0l0 64 256 0 0-64-256 0zm416 0l0 64 32 0 0-64-32 0z" />
            <path d="M192 32L96 32l0 96-64 0 0 256 64 0 0 96 96 0 0-448zm256 0l0 448 96 0 0-96 64 0 0-256-64 0 0-96-96 0z" />
    </Icon>
);

export default Dumbbell;