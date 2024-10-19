
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sort` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=duotone sort}
 * @preview ![sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGMwIDguMyAzLjMgMTYuNSA5LjQgMjIuNmwxMjggMTI4YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDEyOC0xMjhjOS4yLTkuMiAxMS45LTIyLjkgNi45LTM0LjlzLTE2LjYtMTkuOC0yOS42LTE5LjhMMzIgMjg4Yy0xMi45IDAtMjQuNiA3LjgtMjkuNiAxOS44Qy44IDMxMS43IDAgMzE1LjkgMCAzMjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xODIuNiA0MS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMGwtMTI4IDEyOGMtOS4yIDkuMi0xMS45IDIyLjktNi45IDM0LjlzMTYuNiAxOS44IDI5LjYgMTkuOGwyNTYgMGMxMi45IDAgMjQuNi03LjggMjkuNi0xOS44czIuMi0yNS43LTYuOS0zNC45bC0xMjgtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sort: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 320c0 8.3 3.3 16.5 9.4 22.6l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 288c-12.9 0-24.6 7.8-29.6 19.8C.8 311.7 0 315.9 0 320z" />
            <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
    </Icon>
);

export default Sort;