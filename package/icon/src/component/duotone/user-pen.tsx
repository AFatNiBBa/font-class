
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-pen?s=duotone user-pen}
 * @preview ![user-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4Mi4zQzAgMzgzLjggNzkuOCAzMDQgMTc4LjMgMzA0bDkxLjQgMGM0OC4xIDAgOTEuOCAxOS4xIDEyMy45IDUwLjFsLTQwLjMgNDAuM2MtOC4yIDguMi0xNCAxOC41LTE2LjggMjkuN2wtMTUgNjAuMWMtMi4zIDkuNC0xLjggMTkgMS40IDI3LjhMMjkuNyA1MTJDMTMuMyA1MTIgMCA0OTguNyAwIDQ4Mi4zek0zNTIgMTI4QTEyOCAxMjggMCAxIDEgOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01NTcuMiAyMzUuN2wtMjkuNCAyOS40IDcxIDcxIDI5LjQtMjkuNGMxNS42LTE1LjYgMTUuNi00MC45IDAtNTYuNmwtMTQuNC0xNC40Yy0xNS42LTE1LjYtNDAuOS0xNS42LTU2LjYgMHptLTUyIDUyTDM3NS45IDQxN2MtNC4xIDQuMS03IDkuMi04LjQgMTQuOWwtMTUgNjAuMWMtMS40IDUuNSAuMiAxMS4yIDQuMiAxNS4yczkuNyA1LjYgMTUuMiA0LjJsNjAuMS0xNWM1LjYtMS40IDEwLjgtNC4zIDE0LjktOC40TDU3Ni4xIDM1OC43bC03MS03MXoiLz48L3N2Zz4=|width=32|height=32)
 */
const UserPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c48.1 0 91.8 19.1 123.9 50.1l-40.3 40.3c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8L29.7 512C13.3 512 0 498.7 0 482.3zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
            <path d="M557.2 235.7l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0zm-52 52L375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71z" />
    </Icon>
);

export default UserPen;