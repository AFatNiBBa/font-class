
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart?s=duotone heart}
 * @preview ![heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00Ny42IDMwMC40TDIyOC4zIDQ2OS4xYzcuNSA3IDE3LjQgMTAuOSAyNy43IDEwLjlzMjAuMi0zLjkgMjcuNy0xMC45TDQ2NC40IDMwMC40YzMwLjQtMjguMyA0Ny42LTY4IDQ3LjYtMTA5LjV2LTUuOGMwLTY5LjktNTAuNS0xMjkuNS0xMTkuNC0xNDFDMzQ3IDM2LjUgMzAwLjYgNTEuNCAyNjggODRMMjU2IDk2IDI0NCA4NGMtMzIuNi0zMi42LTc5LTQ3LjUtMTI0LjYtMzkuOUM1MC41IDU1LjYgMCAxMTUuMiAwIDE4NS4xdjUuOGMwIDQxLjUgMTcuMiA4MS4yIDQ3LjYgMTA5LjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Heart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
    </Icon>
);

export default Heart;