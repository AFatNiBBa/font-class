
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-successor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-successor?s=sharp-duotone-solid diagram-successor}
 * @preview ![diagram-successor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgMjI0bDI4OCAwIDAtMTI4IDk2IDAgMCAzMi02NCAwIDAgMzIgOTYgOTYgOTYtOTYgMC0zMi02NCAwIDAtNjQgMC0zMi0zMiAwTDI4OCAzMmwtODAgMEwwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTEyIDQ4MGwwLTE5MkwwIDI4OCAwIDQ4MGw1MTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiagramSuccessor: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 224l288 0 0-128 96 0 0 32-64 0 0 32 96 96 96-96 0-32-64 0 0-64 0-32-32 0L288 32l-80 0L0 32z" />
            <path d="M512 480l0-192L0 288 0 480l512 0z" />
    </Icon>
);

export default DiagramSuccessor;