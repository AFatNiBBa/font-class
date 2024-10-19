
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=sharp-duotone-solid square-bolt}
 * @preview ![square-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTExMiAyNDhMMjg4IDExMiAyNDggMjQwbDg4IDAgMCAyNEwxNjAgNDAwbDQwLTEyOC04OCAwIDAtMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMzYgMjY0TDE2MCA0MDBsNDAtMTI4SDExMlYyNDhMMjg4IDExMiAyNDggMjQwaDg4djI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareBolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 248L288 112 248 240l88 0 0 24L160 400l40-128-88 0 0-24z" />
            <path d="M336 264L160 400l40-128H112V248L288 112 248 240h88v24z" />
    </Icon>
);

export default SquareBolt;