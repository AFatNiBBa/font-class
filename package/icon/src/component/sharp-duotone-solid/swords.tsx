
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swords` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swords?s=sharp-duotone-solid swords}
 * @preview ![swords](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMTYgOTYgMzM2IDQxNmw4MC04MEw5NiAxNiAwIDB6TTk2IDMzNmw4MCA4MCA1Ny40LTU3LjQtODAtODBMOTYgMzM2ek0yNzguNiAxNTMuNGw4MCA4MEw0OTYgOTYgNTEyIDAgNDE2IDE2IDI3OC42IDE1My40eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDggNTEybDU2LTU2IDcyIDI0IDMyLTMyTDY0IDMwNCAzMiAzMzZsMjQgNzJMMCA0NjRsNDggNDh6bTQxNiAwbDQ4LTQ4LTU2LTU2IDI0LTcyLTMyLTMyTDMwNCA0NDhsMzIgMzIgNzItMjQgNTYgNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Swords: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L16 96 336 416l80-80L96 16 0 0zM96 336l80 80 57.4-57.4-80-80L96 336zM278.6 153.4l80 80L496 96 512 0 416 16 278.6 153.4z" />
            <path d="M48 512l56-56 72 24 32-32L64 304 32 336l24 72L0 464l48 48zm416 0l48-48-56-56 24-72-32-32L304 448l32 32 72-24 56 56z" />
    </Icon>
);

export default Swords;