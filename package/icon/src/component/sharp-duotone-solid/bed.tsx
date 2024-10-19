
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed?s=sharp-duotone-solid bed}
 * @preview ![bed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMjA4QTgwIDgwIDAgMSAxIDk2IDIwOGE4MCA4MCAwIDEgMSAxNjAgMHptMzItODBsMzIgMCAyMjQgMGM1MyAwIDk2IDQzIDk2IDk2bDAgNjQgMCAzMi0zMiAwLTI4OCAwLTMyIDAgMC0zMiAwLTEyOCAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMzJsMCAzMiAwIDI1NiA1NDQgMCAzMiAwIDAgMzIgMCA5NiAwIDMyLTY0IDAgMC0zMiAwLTMyTDY0IDQxNmwwIDMyIDAgMzJMMCA0ODBsMC0zMiAwLTY0IDAtNjRMMCA2NCAwIDMybDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Bed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M256 208A80 80 0 1 1 96 208a80 80 0 1 1 160 0zm32-80l32 0 224 0c53 0 96 43 96 96l0 64 0 32-32 0-288 0-32 0 0-32 0-128 0-32z" />
            <path d="M64 32l0 32 0 256 544 0 32 0 0 32 0 96 0 32-64 0 0-32 0-32L64 416l0 32 0 32L0 480l0-32 0-64 0-64L0 64 0 32l64 0z" />
    </Icon>
);

export default Bed;