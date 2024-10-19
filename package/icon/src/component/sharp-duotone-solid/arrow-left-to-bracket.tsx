
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left-to-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-to-bracket?s=sharp-duotone-solid arrow-left-to-bracket}
 * @preview ![arrow-left-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNjQgMCA0NDhsMCAzMiAzMiAwIDEyOCAwIDMyIDAgMC02NC0zMiAwLTk2IDBMNjQgOTZsOTYgMCAzMiAwIDAtNjQtMzIgMEwzMiAzMiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTQ2LjcgMjU2bDIyLjYtMjIuNiAxMjgtMTI4TDMyMCA4Mi43IDM2NS4zIDEyOGwtMjIuNiAyMi42TDI2OS4zIDIyNCA0ODAgMjI0bDMyIDAgMCA2NC0zMiAwLTIxMC43IDAgNzMuNCA3My40TDM2NS4zIDM4NCAzMjAgNDI5LjNsLTIyLjYtMjIuNi0xMjgtMTI4TDE0Ni43IDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowLeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 448l0 32 32 0 128 0 32 0 0-64-32 0-96 0L64 96l96 0 32 0 0-64-32 0L32 32 0 32z" />
            <path d="M146.7 256l22.6-22.6 128-128L320 82.7 365.3 128l-22.6 22.6L269.3 224 480 224l32 0 0 64-32 0-210.7 0 73.4 73.4L365.3 384 320 429.3l-22.6-22.6-128-128L146.7 256z" />
    </Icon>
);

export default ArrowLeftToBracket;