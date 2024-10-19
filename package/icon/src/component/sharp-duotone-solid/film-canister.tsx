
import { Icon, generic } from "../../index";

/**
 * A component that renders the `film-canister` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/film-canister?s=sharp-duotone-solid film-canister}
 * @preview ![film-canister](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwyODggMCAwIDMyIDAgMjg4IDAgMzJMMzIgNDQ4IDMyIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMEwyNTYgMGwwIDMyIDY0IDAgMzIgMCAwIDY0LTMyIDBMMzIgOTYgMCA5NiAwIDMybDMyIDAgNjQgMEw5NiAwek0wIDQ0OGwzMiAwIDI4OCAwIDMyIDAgMCA2NC0zMiAwTDMyIDUxMiAwIDUxMmwwLTY0ek0zMjAgMTI4bDI1NiAwIDAgMTkyLTY0IDAgMCA5Ni0xOTIgMCAwLTI4OHptNzIgNDBsMCA0OCA0OCAwIDAtNDgtNDggMHptMTQ0IDBsLTQ4IDAgMCA0OCA0OCAwIDAtNDh6TTM5MiAzMjhsMCA0OCA0OCAwIDAtNDgtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FilmCanister: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 96l288 0 0 32 0 288 0 32L32 448 32 96z" />
            <path d="M96 0L256 0l0 32 64 0 32 0 0 64-32 0L32 96 0 96 0 32l32 0 64 0L96 0zM0 448l32 0 288 0 32 0 0 64-32 0L32 512 0 512l0-64zM320 128l256 0 0 192-64 0 0 96-192 0 0-288zm72 40l0 48 48 0 0-48-48 0zm144 0l-48 0 0 48 48 0 0-48zM392 328l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default FilmCanister;