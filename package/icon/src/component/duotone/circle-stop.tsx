
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-stop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-stop?s=duotone circle-stop}
 * @preview ![circle-stop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE2MC02NGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxMjggMGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDEyOGMwIDE3LjctMTQuMyAzMi0zMiAzMmwtMTI4IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDE2MGgxMjhhMzIgMzIgMCAwIDEgMzIgMzJ2MTI4YTMyIDMyIDAgMCAxIC0zMiAzMkgxOTJhMzIgMzIgMCAwIDEgLTMyLTMyVjE5MmEzMiAzMiAwIDAgMSAzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleStop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160-64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128z" />
            <path d="M192 160h128a32 32 0 0 1 32 32v128a32 32 0 0 1 -32 32H192a32 32 0 0 1 -32-32V192a32 32 0 0 1 32-32z" />
    </Icon>
);

export default CircleStop;