
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-check?s=sharp-duotone-solid square-check}
 * @preview ![square-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTk0LjEgMjU2TDEyOCAyMjIuMWwxIDEgMTYgMTYgNDcgNDdMMzAzIDE3NWwxNi0xNiAxLTFMMzUzLjkgMTkyYy0uMyAuMy0uNiAuNi0xIDFsLTE2IDE2TDIwOSAzMzdsLTE3IDE3LTE3LTE3LTY0LTY0Yy01LjMtNS4zLTEwLjctMTAuNy0xNi0xNmwtMS0xeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUzIDE5M0wyMDkgMzM3bC0xNyAxNy0xNy0xN0w5NSAyNTcgMTI5IDIyM2w2MyA2M0wzMTkgMTU5IDM1MyAxOTN6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM94.1 256L128 222.1l1 1 16 16 47 47L303 175l16-16 1-1L353.9 192c-.3 .3-.6 .6-1 1l-16 16L209 337l-17 17-17-17-64-64c-5.3-5.3-10.7-10.7-16-16l-1-1z" />
            <path d="M353 193L209 337l-17 17-17-17L95 257 129 223l63 63L319 159 353 193z" />
    </Icon>
);

export default SquareCheck;