
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-slash?s=sharp-duotone-solid user-slash}
 * @preview ![user-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA1MTJsNDQ4IDAtMTYgMEwyNjQgMzA0bC0xMDQgMEw5NiA1MTJ6bTk2LTM4NS43TDM1My40IDI1MS42QzQwNy45IDIzNi45IDQ0OCAxODcuMSA0NDggMTI4QzQ0OCA1Ny4zIDM5MC43IDAgMzIwIDBDMjQ5LjkgMCAxOTIuOSA1Ni40IDE5MiAxMjYuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5LjQgLjFsMTkgMTQuN0w2MjAuOSA0NTkuM2wxOSAxNC43LTI5LjQgMzcuOS0xOS0xNC43TDE5IDUyLjcgMCAzOCAyOS40IC4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 512l448 0-16 0L264 304l-104 0L96 512zm96-385.7L353.4 251.6C407.9 236.9 448 187.1 448 128C448 57.3 390.7 0 320 0C249.9 0 192.9 56.4 192 126.3z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default UserSlash;