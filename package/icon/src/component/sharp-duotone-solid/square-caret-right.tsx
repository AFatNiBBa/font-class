
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-caret-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-right?s=sharp-duotone-solid square-caret-right}
 * @preview ![square-caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6bTE2MCA5NmwzMiAwTDMyMCAyNTYgMTkyIDM4NGwtMzIgMCAwLTI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCAxMjhsMzIgMEwzMjAgMjU2IDE5MiAzODRsLTMyIDAgMC0yNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareCaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm160 96l32 0L320 256 192 384l-32 0 0-256z" />
            <path d="M160 128l32 0L320 256 192 384l-32 0 0-256z" />
    </Icon>
);

export default SquareCaretRight;