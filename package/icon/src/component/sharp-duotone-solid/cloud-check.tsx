
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-check?s=sharp-duotone-solid cloud-check}
 * @preview ![cloud-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNkwwIDQ4MGwxNDQgMCAzNjggMCAxMjggMCAwLTEyOGMwLTU5LjYtNDAuOC0xMDkuOC05Ni0xMjRsMC0zNmMwLTUzLTQzLTk2LTk2LTk2Yy0xOS43IDAtMzguMSA2LTUzLjMgMTYuMkMzNjcgNjQuMiAzMTUuMyAzMiAyNTYgMzJDMTY3LjYgMzIgOTYgMTAzLjYgOTYgMTkybDAgOC4yQzQwLjEgMjIwIDAgMjczLjMgMCAzMzZ6bTE5MC4xLTQ4TDIyNCAyNTQuMWMuMyAuMyAuNiAuNiAxIDFjNS4zIDUuMyAxMC43IDEwLjcgMTYgMTZjMTUuNyAxNS43IDMxLjQgMzEuNCA0NyA0N2MzNy0zNyA3NC03NCAxMTEtMTExYzUuMy01LjMgMTAuNy0xMC43IDE2LTE2Yy4zLS4zIC42LS42IDEtMUw0NDkuOSAyMjRsLTEgMWMtNS4zIDUuMy0xMC43IDEwLjctMTYgMTZMMzA1IDM2OWwtMTcgMTctMTctMTctNjQtNjRjLTUuMy01LjMtMTAuNy0xMC43LTE2LTE2Yy0uMy0uMy0uNi0uNi0xLTF6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDkgMjI1TDMwNSAzNjlsLTE3IDE3LTE3LTE3LTgwLTgwTDIyNSAyNTVsNjMgNjNMNDE1IDE5MSA0NDkgMjI1eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CloudCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 368 0 128 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192l0 8.2C40.1 220 0 273.3 0 336zm190.1-48L224 254.1c.3 .3 .6 .6 1 1c5.3 5.3 10.7 10.7 16 16c15.7 15.7 31.4 31.4 47 47c37-37 74-74 111-111c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L449.9 224l-1 1c-5.3 5.3-10.7 10.7-16 16L305 369l-17 17-17-17-64-64c-5.3-5.3-10.7-10.7-16-16c-.3-.3-.6-.6-1-1z" />
            <path d="M449 225L305 369l-17 17-17-17-80-80L225 255l63 63L415 191 449 225z" />
    </Icon>
);

export default CloudCheck;