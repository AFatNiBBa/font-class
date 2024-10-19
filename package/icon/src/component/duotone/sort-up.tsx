
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=duotone sort-up}
 * @preview ![sort-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGMwIDguMyAzLjMgMTYuNSA5LjQgMjIuNmwxMjggMTI4YzEyLjUgMTIuNSAzMi44IDEyLjUgNDUuMyAwbDEyOC0xMjhjOS4yLTkuMiAxMS45LTIyLjkgNi45LTM0LjlzLTE2LjYtMTkuOC0yOS42LTE5LjhMMzIgMjg4Yy0xMi45IDAtMjQuNiA3LjgtMjkuNiAxOS44Qy44IDMxMS43IDAgMzE1LjkgMCAzMjB6bTEwOS4zIDMybDEwMS41IDBMMTYwIDQwMi43IDEwOS4zIDM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE4Mi42IDQxLjRjLTEyLjUtMTIuNS0zMi44LTEyLjUtNDUuMyAwbC0xMjggMTI4Yy05LjIgOS4yLTExLjkgMjIuOS02LjkgMzQuOXMxNi42IDE5LjggMjkuNiAxOS44bDI1NiAwYzEyLjkgMCAyNC42LTcuOCAyOS42LTE5LjhzMi4yLTI1LjctNi45LTM0LjlsLTEyOC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const SortUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 320c0 8.3 3.3 16.5 9.4 22.6l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 288c-12.9 0-24.6 7.8-29.6 19.8C.8 311.7 0 315.9 0 320zm109.3 32l101.5 0L160 402.7 109.3 352z" />
            <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
    </Icon>
);

export default SortUp;