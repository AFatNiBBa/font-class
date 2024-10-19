
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tilde` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=duotone tilde}
 * @preview ![tilde](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05OS45IDE5MkM4MC4xIDE5MiA2NCAyMDguMSA2NCAyMjcuOUw2NCAzMjBjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC05Mi4xQzAgMTcyLjcgNDQuNyAxMjggOTkuOSAxMjhjMjYuNSAwIDUxLjkgMTAuNSA3MC42IDI5LjNMMzIyLjcgMzA5LjVjNi43IDYuNyAxNS45IDEwLjUgMjUuNCAxMC41YzE5LjggMCAzNS45LTE2LjEgMzUuOS0zNS45bDAtOTIuMWMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMybDAgOTIuMWMwIDU1LjItNDQuNyA5OS45LTk5LjkgOTkuOWMtMjYuNSAwLTUxLjktMTAuNS03MC42LTI5LjNMMTI1LjMgMjAyLjVjLTYuNy02LjctMTUuOS0xMC41LTI1LjQtMTAuNXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M99.9 192C80.1 192 64 208.1 64 227.9L64 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-92.1C0 172.7 44.7 128 99.9 128c26.5 0 51.9 10.5 70.6 29.3L322.7 309.5c6.7 6.7 15.9 10.5 25.4 10.5c19.8 0 35.9-16.1 35.9-35.9l0-92.1c0-17.7 14.3-32 32-32s32 14.3 32 32l0 92.1c0 55.2-44.7 99.9-99.9 99.9c-26.5 0-51.9-10.5-70.6-29.3L125.3 202.5c-6.7-6.7-15.9-10.5-25.4-10.5z" />
    </Icon>
);

export default Tilde;