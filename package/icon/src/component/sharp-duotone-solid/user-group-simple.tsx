
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-group-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-simple?s=sharp-duotone-solid user-group-simple}
 * @preview ![user-group-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMjg4bDY0IDE5MiAxOTIgMCA2NC0xOTItMzIwIDB6bTU2LTE1MmExMDQgMTA0IDAgMSAwIDIwOCAwIDEwNCAxMDQgMCAxIDAgLTIwOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDI0MGExMDQgMTA0IDAgMSAwIDAtMjA4IDEwNCAxMDQgMCAxIDAgMCAyMDh6TTMyMCA0ODBMMjU2IDI4OCA2NCAyODggMCA0ODBsMzIwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const UserGroupSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 288l64 192 192 0 64-192-320 0zm56-152a104 104 0 1 0 208 0 104 104 0 1 0 -208 0z" />
            <path d="M160 240a104 104 0 1 0 0-208 104 104 0 1 0 0 208zM320 480L256 288 64 288 0 480l320 0z" />
    </Icon>
);

export default UserGroupSimple;