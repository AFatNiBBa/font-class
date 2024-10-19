
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=sharp-duotone-solid pen}
 * @preview ![pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggOTZMNDE2IDIyNGw5Ni05NkwzODQgMCAyODggOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAzNTJMMCA1MTJsMTYwLTMyTDQxNiAyMjQgMjg4IDk2IDMyIDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 96L416 224l96-96L384 0 288 96z" />
            <path d="M32 352L0 512l160-32L416 224 288 96 32 352z" />
    </Icon>
);

export default Pen;