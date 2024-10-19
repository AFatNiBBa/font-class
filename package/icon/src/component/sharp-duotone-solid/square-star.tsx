
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-star` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=sharp-duotone-solid square-star}
 * @preview ![square-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTcxLjggMjA2LjZMMTc3IDE5MS4zIDIyNCA5Nmw0NyA5NS4zIDEwNS4xIDE1LjMtNzYuMSA3NC4yIDE4IDEwNC43TDIyNCAzMzZsLTk0IDQ5LjQgMTgtMTA0LjdMNzEuOCAyMDYuNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCA5Nmw0NyA5NS4zIDEwNS4xIDE1LjMtNzYuMSA3NC4yIDE4IDEwNC43TDIyNCAzMzZsLTk0IDQ5LjQgMTgtMTA0LjdMNzEuOCAyMDYuNiAxNzcgMTkxLjMgMjI0IDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM71.8 206.6L177 191.3 224 96l47 95.3 105.1 15.3-76.1 74.2 18 104.7L224 336l-94 49.4 18-104.7L71.8 206.6z" />
            <path d="M224 96l47 95.3 105.1 15.3-76.1 74.2 18 104.7L224 336l-94 49.4 18-104.7L71.8 206.6 177 191.3 224 96z" />
    </Icon>
);

export default SquareStar;