
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left?s=sharp-duotone-solid arrow-up-left}
 * @preview ![arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxNjBsNDUuMyAwTDM0Mi42IDM2MS40IDM2NS4zIDM4NCAzMjAgNDI5LjNsLTIyLjYtMjIuNkw5NiAyMDUuMyA5NiAxNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiA5NmwzMiAwIDIyNCAwIDMyIDAgMCA2NC0zMiAwTDk2IDE2MGwwIDE5MiAwIDMyLTY0IDAgMC0zMiAwLTIyNCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 160l45.3 0L342.6 361.4 365.3 384 320 429.3l-22.6-22.6L96 205.3 96 160z" />
            <path d="M32 96l32 0 224 0 32 0 0 64-32 0L96 160l0 192 0 32-64 0 0-32 0-224 0-32z" />
    </Icon>
);

export default ArrowUpLeft;