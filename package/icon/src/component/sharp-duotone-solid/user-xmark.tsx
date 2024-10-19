
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-xmark?s=sharp-duotone-solid user-xmark}
 * @preview ![user-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmw0NDggMEwzODQgMzA0IDY0IDMwNCAwIDUxMnpNOTYgMTI4YTEyOCAxMjggMCAxIDAgMjU2IDBBMTI4IDEyOCAwIDEgMCA5NiAxMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02MTcgMTc3bDE3LTE3TDYwMCAxMjYuMWwtMTcgMTctNDcgNDctNDctNDctMTctMTdMNDM4LjEgMTYwbDE3IDE3IDQ3IDQ3LTQ3IDQ3LTE3IDE3TDQ3MiAzMjEuOWwxNy0xNyA0Ny00NyA0NyA0NyAxNyAxN0w2MzMuOSAyODhsLTE3LTE3LTQ3LTQ3IDQ3LTQ3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 512l448 0L384 304 64 304 0 512zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
            <path d="M617 177l17-17L600 126.1l-17 17-47 47-47-47-17-17L438.1 160l17 17 47 47-47 47-17 17L472 321.9l17-17 47-47 47 47 17 17L633.9 288l-17-17-47-47 47-47z" />
    </Icon>
);

export default UserXmark;