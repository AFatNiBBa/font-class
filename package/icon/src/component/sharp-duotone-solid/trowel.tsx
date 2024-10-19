
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trowel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel?s=sharp-duotone-solid trowel}
 * @preview ![trowel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmwyODAtNzIgNDAtNDAtODEuNC04MS40IDExMi0xMTItNDUuMy00NS4zLTExMiAxMTJMMTEyIDE5MiA3MiAyMzIgMCA1MTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNzYgMjMybC05Ni05Nkw0MTYgMGw5NiA5NkwzNzYgMjMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Trowel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512l280-72 40-40-81.4-81.4 112-112-45.3-45.3-112 112L112 192 72 232 0 512z" />
            <path d="M376 232l-96-96L416 0l96 96L376 232z" />
    </Icon>
);

export default Trowel;