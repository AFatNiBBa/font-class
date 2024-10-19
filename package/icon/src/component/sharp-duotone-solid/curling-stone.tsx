
import { Icon, generic } from "../../index";

/**
 * A component that renders the `curling-stone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/curling-stone?s=sharp-duotone-solid curling-stone}
 * @preview ![curling-stone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwwIDQ4IDU3NiAwIDAtNDgtNjQtNjQtMzIgMEw5NiAyMjRsLTMyIDBMMCAyODh6bTAgODBsMCA0OCA2NCA2NCA0NDggMCA2NC02NCAwLTQ4TDAgMzY4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDMybC0zMiAwIDAgMzIgMCA5Ni02NCAwIDAgNjQgMzg0IDAgMC02NC0yNTYgMCAwLTY0IDE2MCAwIDMyIDAgMC02NC0zMiAwTDE5MiAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CurlingStone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 48 576 0 0-48-64-64-32 0L96 224l-32 0L0 288zm0 80l0 48 64 64 448 0 64-64 0-48L0 368z" />
            <path d="M192 32l-32 0 0 32 0 96-64 0 0 64 384 0 0-64-256 0 0-64 160 0 32 0 0-64-32 0L192 32z" />
    </Icon>
);

export default CurlingStone;