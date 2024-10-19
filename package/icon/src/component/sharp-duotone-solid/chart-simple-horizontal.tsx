
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-simple-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-simple-horizontal?s=sharp-duotone-solid chart-simple-horizontal}
 * @preview ![chart-simple-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDMyMGw0NDggMCAwLTEyOEwwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAzMmwwIDEyOEwwIDE2MCAwIDMybDM4NCAwek0yNTYgMzUybDAgMTI4TDAgNDgwIDAgMzUybDI1NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChartSimpleHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 320l448 0 0-128L0 192z" />
            <path d="M384 32l0 128L0 160 0 32l384 0zM256 352l0 128L0 480 0 352l256 0z" />
    </Icon>
);

export default ChartSimpleHorizontal;