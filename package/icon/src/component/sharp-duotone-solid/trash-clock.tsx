
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=sharp-duotone-solid trash-clock}
 * @preview ![trash-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5Nkw1NiA1MTJsMjc0LjggMEMyODUuNiA0ODAuMSAyNTYgNDI3LjUgMjU2IDM2OGMwLTg5LjkgNjcuNC0xNjQgMTU0LjQtMTc0LjdMNDE2IDk2IDMyIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTQ0IDBMMzA0IDBsMTYgMzIgMTI4IDAgMCA2NEwwIDk2IDAgMzJsMTI4IDBMMTQ0IDB6TTI4OCAzNjhhMTQ0IDE0NCAwIDEgMSAyODggMCAxNDQgMTQ0IDAgMSAxIC0yODggMHptMTYwLTgwbC0zMiAwIDAgMTYgMCA2NCAwIDE2IDE2IDAgNDggMCAxNiAwIDAtMzItMTYgMC0zMiAwIDAtNDggMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const TrashClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l274.8 0C285.6 480.1 256 427.5 256 368c0-89.9 67.4-164 154.4-174.7L416 96 32 96z" />
            <path d="M144 0L304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default TrashClock;