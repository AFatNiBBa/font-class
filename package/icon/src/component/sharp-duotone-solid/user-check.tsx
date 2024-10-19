
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-check?s=sharp-duotone-solid user-check}
 * @preview ![user-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmw0NDggMEwzODQgMzA0IDY0IDMwNCAwIDUxMnpNOTYgMTI4YTEyOCAxMjggMCAxIDAgMjU2IDBBMTI4IDEyOCAwIDEgMCA5NiAxMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02MzMuOSAxNjBsLTE3IDE3TDQ4OSAzMDVsLTE3IDE3LTE3LTE3LTY0LTY0LTE3LTE3TDQwOCAxOTAuMWwxNyAxNyA0NyA0N0w1ODMgMTQzbDE3LTE3TDYzMy45IDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l448 0L384 304 64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
            <path d="M633.9 160l-17 17L489 305l-17 17-17-17-64-64-17-17L408 190.1l17 17 47 47L583 143l17-17L633.9 160z" />
    </Icon>
);

export default UserCheck;