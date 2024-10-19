
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge?s=duotone bridge}
 * @preview ![bridge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgNDYuMyAxNC4zIDMyIDMyIDMybDUxMiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC00MCAwIDAgNjQtNDggMCAwLTY0LTgwIDAgMCA2NC00OCAwIDAtNjQtODAgMCAwIDY0LTQ4IDAgMC02NC04MCAwIDAgNjQtNDggMCAwLTY0TDMyIDk2QzE0LjMgOTYgMCA4MS43IDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDE2MEg1NzZWMjg4Yy01MyAwLTk2IDQzLTk2IDk2djY0YzAgMTcuNy0xNC4zIDMyLTMyIDMySDQxNmMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMzg0YzAtNTMtNDMtOTYtOTYtOTZzLTk2IDQzLTk2IDk2djY0YzAgMTcuNy0xNC4zIDMyLTMyIDMySDEyOGMtMTcuNyAwLTMyLTE0LjMtMzItMzJWMzg0YzAtNTMtNDMtOTYtOTYtOTZWMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bridge: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-40 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64-80 0 0 64-48 0 0-64L32 96C14.3 96 0 81.7 0 64z" />
            <path d="M0 160H576V288c-53 0-96 43-96 96v64c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V384c0-53-43-96-96-96s-96 43-96 96v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384c0-53-43-96-96-96V160z" />
    </Icon>
);

export default Bridge;