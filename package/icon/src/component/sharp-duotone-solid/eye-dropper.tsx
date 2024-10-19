
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye-dropper` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper?s=sharp-duotone-solid eye-dropper}
 * @preview ![eye-dropper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ3Mmw0MCA0MCA1LTQgMjIuNy0xOC4xTDgwIDQ4MGw4OCAwTDMzMy40IDMxNC42bC00NS4zLTQ1LjNMMTQxLjUgNDE2IDk2IDQxNmwwLTQ1LjVMMjQyLjYgMjIzLjlsLTQ1LjMtNDUuM0wzMiAzNDRsMCA4OC05LjkgMTIuM0w0IDQ2N2wtNCA1eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjQwLjEgMTMwLjhMMzQxLjYgMjkuMmMzOS0zOSAxMDIuMi0zOSAxNDEuMSAwczM5IDEwMi4yIDAgMTQxLjFMMzgxLjIgMjcxLjlsOS40IDkuNEw0MTMuMyAzMDQgMzY4IDM0OS4zbC0yMi42LTIyLjYtMTYwLTE2MEwxNjIuNyAxNDQgMjA4IDk4LjdsMjIuNiAyMi42IDkuNCA5LjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const EyeDropper: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 472l40 40 5-4 22.7-18.1L80 480l88 0L333.4 314.6l-45.3-45.3L141.5 416 96 416l0-45.5L242.6 223.9l-45.3-45.3L32 344l0 88-9.9 12.3L4 467l-4 5z" />
            <path d="M240.1 130.8L341.6 29.2c39-39 102.2-39 141.1 0s39 102.2 0 141.1L381.2 271.9l9.4 9.4L413.3 304 368 349.3l-22.6-22.6-160-160L162.7 144 208 98.7l22.6 22.6 9.4 9.4z" />
    </Icon>
);

export default EyeDropper;