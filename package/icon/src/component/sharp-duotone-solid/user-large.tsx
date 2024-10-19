
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-large` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=sharp-duotone-solid user-large}
 * @preview ![user-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMTQ0YTE0NCAxNDQgMCAxIDAgMjg4IDAgMTQ0IDE0NCAwIDEgMCAtMjg4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik04MCAzMjBINDMybDgwIDE5MkgwTDgwIDMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 144a144 144 0 1 0 288 0 144 144 0 1 0 -288 0z" />
            <path d="M80 320H432l80 192H0L80 320z" />
    </Icon>
);

export default UserLarge;