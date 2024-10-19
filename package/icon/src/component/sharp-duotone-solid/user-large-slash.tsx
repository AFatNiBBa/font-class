
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-large-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large-slash?s=sharp-duotone-solid user-large-slash}
 * @preview ![user-large-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA1MTJsNTEyIDAtNDggMEwyODQuMyAzMjAgMTQ0IDMyMCA2NCA1MTJ6TTE3OC43IDExNkwzODIuMiAyNzMuOUM0MzAuNiAyNTAuNyA0NjQgMjAxLjMgNDY0IDE0NEM0NjQgNjQuNSAzOTkuNSAwIDMyMCAwQzI1MC4xIDAgMTkxLjggNDkuOSAxNzguNyAxMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOS40IC4xbDE5IDE0LjdMNjIwLjkgNDU5LjNsMTkgMTQuNy0yOS40IDM3LjktMTktMTQuN0wxOSA1Mi43IDAgMzggMjkuNCAuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserLargeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 512l512 0-48 0L284.3 320 144 320 64 512zM178.7 116L382.2 273.9C430.6 250.7 464 201.3 464 144C464 64.5 399.5 0 320 0C250.1 0 191.8 49.9 178.7 116z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default UserLargeSlash;