
import { Icon, generic } from "../../index";

/**
 * A component that renders the `potato` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/potato?s=sharp-duotone-solid potato}
 * @preview ![potato](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM2NC45QzAgNDQ2LjIgNjUuOCA1MTIgMTQ3LjEgNTEyYzM5IDAgNzYuNC0xNS41IDEwNC00My4xTDI3MiA0NDhsMTEyLTQ4IDgwLTE0NCA0LjktNC45YzI3LjYtMjcuNiA0My4xLTY1IDQzLjEtMTA0QzUxMiA2NS44IDQ0Ni4yIDAgMzY0LjkgMGMtMzkgMC03Ni40IDE1LjUtMTA0IDQzLjFMMjI0IDgwbC04MCA0OEw5NiAyMDggNDMuMSAyNjAuOUMxNS41IDI4OC41IDAgMzI1LjkgMCAzNjQuOXpNMTM2IDM5Mmw0OCAwIDAgNDgtNDggMCAwLTQ4em0zMi0xOTJsNDggMCAwIDQ4LTQ4IDAgMC00OHptMTkyLTMybDQ4IDAgMCA0OC00OCAwIDAtNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNjAgMTY4bDQ4IDAgMCA0OC00OCAwIDAtNDh6TTE2OCAyMDBsNDggMCAwIDQ4LTQ4IDAgMC00OHptMTYgMTkybDAgNDgtNDggMCAwLTQ4IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Potato: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 364.9C0 446.2 65.8 512 147.1 512c39 0 76.4-15.5 104-43.1L272 448l112-48 80-144 4.9-4.9c27.6-27.6 43.1-65 43.1-104C512 65.8 446.2 0 364.9 0c-39 0-76.4 15.5-104 43.1L224 80l-80 48L96 208 43.1 260.9C15.5 288.5 0 325.9 0 364.9zM136 392l48 0 0 48-48 0 0-48zm32-192l48 0 0 48-48 0 0-48zm192-32l48 0 0 48-48 0 0-48z" />
            <path d="M360 168l48 0 0 48-48 0 0-48zM168 200l48 0 0 48-48 0 0-48zm16 192l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Potato;