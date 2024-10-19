
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=sharp-duotone-solid shuffle}
 * @preview ![shuffle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDY0IDMyIDAgOTYgMCAxNiAwIDkuNi0xMi44TDIyNCAzMDkuM2MtMTMuMy0xNy44LTI2LjctMzUuNi00MC01My4zbC03MiA5Ni04MCAwTDAgMzUyek0yMjQgMjAyLjdMMjY0IDI1Nmw3Mi05NiA0OCAwIDAgNjQgMzIgMCA5Ni05Nkw0MTYgMzJsLTMyIDAgMCA2NC02NCAwLTE2IDAtOS42IDEyLjhMMjI0IDIwMi43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDQxNmwtMTYgMC05LjYtMTIuOEwxMTIgMTYwbC04MCAwTDAgMTYwIDAgOTZsMzIgMCA5NiAwIDE2IDAgOS42IDEyLjhMMzM2IDM1Mmw0OCAwIDAtNjQgMzIgMCA5NiA5Ni05NiA5Ni0zMiAwIDAtNjQtNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Shuffle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352l0 64 32 0 96 0 16 0 9.6-12.8L224 309.3c-13.3-17.8-26.7-35.6-40-53.3l-72 96-80 0L0 352zM224 202.7L264 256l72-96 48 0 0 64 32 0 96-96L416 32l-32 0 0 64-64 0-16 0-9.6 12.8L224 202.7z" />
            <path d="M320 416l-16 0-9.6-12.8L112 160l-80 0L0 160 0 96l32 0 96 0 16 0 9.6 12.8L336 352l48 0 0-64 32 0 96 96-96 96-32 0 0-64-64 0z" />
    </Icon>
);

export default Shuffle;