
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-simple?s=sharp-duotone-solid film-simple}
 * @preview ![film-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzJsMTkyIDAgMCA0NDgtMTkyIDAgMC00NDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMzJsLTQ4IDAgMCA2NEw0OCA5NmwwLTY0TDAgMzIgMCA0ODBsNDggMCAwLTY0IDY0IDAgMCA2NCA0OCAwIDAtNDQ4ek0zNTIgNDgwbDQ4IDAgMC02NCA2NCAwIDAgNjQgNDggMCAwLTQ0OC00OCAwIDAgNjQtNjQgMCAwLTY0LTQ4IDAgMCA0NDh6TTExMiAxNjBsMCA2NC02NCAwIDAtNjQgNjQgMHptMjg4IDBsNjQgMCAwIDY0LTY0IDAgMC02NHpNMTEyIDI4OGwwIDY0LTY0IDAgMC02NCA2NCAwem0yODggMGw2NCAwIDAgNjQtNjQgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FilmSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 32l192 0 0 448-192 0 0-448z" />
            <path d="M160 32l-48 0 0 64L48 96l0-64L0 32 0 480l48 0 0-64 64 0 0 64 48 0 0-448zM352 480l48 0 0-64 64 0 0 64 48 0 0-448-48 0 0 64-64 0 0-64-48 0 0 448zM112 160l0 64-64 0 0-64 64 0zm288 0l64 0 0 64-64 0 0-64zM112 288l0 64-64 0 0-64 64 0zm288 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default FilmSimple;