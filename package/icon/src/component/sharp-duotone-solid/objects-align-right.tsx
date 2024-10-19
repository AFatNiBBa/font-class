
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-right?s=sharp-duotone-solid objects-align-right}
 * @preview ![objects-align-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgMjI0bDM4NCAwIDAtMTYwTDAgNjR6TTEyOCAyODhsMCAxNjAgMjU2IDAgMC0xNjAtMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMGwwIDUxMi00OCAwTDQ2NCAwbDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ObjectsAlignRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 224l384 0 0-160L0 64zM128 288l0 160 256 0 0-160-256 0z" />
            <path d="M512 0l0 512-48 0L464 0l48 0z" />
    </Icon>
);

export default ObjectsAlignRight;