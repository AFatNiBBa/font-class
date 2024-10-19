
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-caret-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-left?s=sharp-duotone-solid square-caret-left}
 * @preview ![square-caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ0OCAwIDAgNDQ4TDAgNDgwIDAgMzJ6TTEyOCAyNTZMMjU2IDM4NGwzMiAwIDAtMjU2LTMyIDBMMTI4IDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAzODRsLTMyIDBMMTI4IDI1NiAyNTYgMTI4bDMyIDAgMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareCaretLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM128 256L256 384l32 0 0-256-32 0L128 256z" />
            <path d="M288 384l-32 0L128 256 256 128l32 0 0 256z" />
    </Icon>
);

export default SquareCaretLeft;