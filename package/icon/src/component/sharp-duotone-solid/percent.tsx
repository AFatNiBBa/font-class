
import { Icon, generic } from "../../index";

/**
 * A component that renders the `percent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=sharp-duotone-solid percent}
 * @preview ![percent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yLjcgNDAwTDQ4IDQ0NS4zbDIyLjYtMjIuNiAyODgtMjg4TDM4MS4zIDExMiAzMzYgNjYuNyAzMTMuNCA4OS40bC0yODggMjg4TDIuNyA0MDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjAgNzJMOCA3MiA4IDE4NGwxMTIgMCAwLTExMnpNMzc2IDMyOGwtMTEyIDAgMCAxMTIgMTEyIDAgMC0xMTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M2.7 400L48 445.3l22.6-22.6 288-288L381.3 112 336 66.7 313.4 89.4l-288 288L2.7 400z" />
            <path d="M120 72L8 72 8 184l112 0 0-112zM376 328l-112 0 0 112 112 0 0-112z" />
    </Icon>
);

export default Percent;