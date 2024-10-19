
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crop-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crop-simple?s=sharp-duotone-solid crop-simple}
 * @preview ![crop-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwbDAgMzIgMCAzMiAwIDY0IDAgMjg4IDAgMzIgMzIgMCAyODggMCAwLTY0LTI1NiAwIDAtMjU2IDAtNjQgMC0zMiAwLTMyTDY0IDB6TTQ0OCAzODRsMCA2NCAzMiAwIDMyIDAgMC02NC0zMiAwLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiA2NEwwIDY0bDAgNjQgMzIgMCAzMiAwIDAtNjRMMzIgNjR6TTM4NCA0ODBsMCAzMiA2NCAwIDAtMzIgMC0zODQgMC0zMi0zMiAwTDEyOCA2NGwwIDY0IDI1NiAwIDAgMzUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CropSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l0 32 0 32 0 64 0 288 0 32 32 0 288 0 0-64-256 0 0-256 0-64 0-32 0-32L64 0zM448 384l0 64 32 0 32 0 0-64-32 0-32 0z" />
            <path d="M32 64L0 64l0 64 32 0 32 0 0-64L32 64zM384 480l0 32 64 0 0-32 0-384 0-32-32 0L128 64l0 64 256 0 0 352z" />
    </Icon>
);

export default CropSimple;