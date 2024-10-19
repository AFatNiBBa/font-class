
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-plus?s=sharp-duotone-solid trash-plus}
 * @preview ![trash-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5Nkw1NiA1MTJsMzM2IDBMNDE2IDk2IDMyIDk2em04MCAxNjhsMjQgMCA2NCAwIDAtNjQgMC0yNCA0OCAwIDAgMjQgMCA2NCA2NCAwIDI0IDAgMCA0OC0yNCAwLTY0IDAgMCA2NCAwIDI0LTQ4IDAgMC0yNCAwLTY0LTY0IDAtMjQgMCAwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTQ0IDBMMzA0IDBsMTYgMzIgMTI4IDAgMCA2NEwwIDk2IDAgMzJsMTI4IDBMMTQ0IDB6bTU2IDQwMGwwLTI0IDAtNjQtNjQgMC0yNCAwIDAtNDggMjQgMCA2NCAwIDAtNjQgMC0yNCA0OCAwIDAgMjQgMCA2NCA2NCAwIDI0IDAgMCA0OC0yNCAwLTY0IDAgMCA2NCAwIDI0LTQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const TrashPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l336 0L416 96 32 96zm80 168l24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0 0-24 0-64-64 0-24 0 0-48z" />
            <path d="M144 0L304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0zm56 400l0-24 0-64-64 0-24 0 0-48 24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0z" />
    </Icon>
);

export default TrashPlus;