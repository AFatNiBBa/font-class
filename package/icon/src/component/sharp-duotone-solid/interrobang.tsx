
import { Icon, generic } from "../../index";

/**
 * A component that renders the `interrobang` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/interrobang?s=sharp-duotone-solid interrobang}
 * @preview ![interrobang](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAxNjBsMCAxNiA2NCAwIDAtMTZjMC0zNS4zIDI4LjctNjQgNjQtNjRsMzIgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDkuM2MwIDE5LjYtOSAzOC4yLTI0LjUgNTAuM0wxOTIgMjM4LjJsMCA4MS40TDI1NS4xIDI3MEMyODYgMjQ1LjcgMzA0IDIwOC42IDMwNCAxNjkuM2wwLTkuM2MwLTcwLjctNTcuMy0xMjgtMTI4LTEyOGwtMzIgMEM3My4zIDMyIDE2IDg5LjMgMTYgMTYweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDE3NmwwLTMyLTY0IDAgMCAzMiAwIDE0NCAwIDMyIDY0IDAgMC0zMiAwLTE0NHptOCAyMjRsLTgwIDAgMCA4MCA4MCAwIDAtODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Interrobang: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M16 160l0 16 64 0 0-16c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 9.3c0 19.6-9 38.2-24.5 50.3L192 238.2l0 81.4L255.1 270C286 245.7 304 208.6 304 169.3l0-9.3c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160z" />
            <path d="M192 176l0-32-64 0 0 32 0 144 0 32 64 0 0-32 0-144zm8 224l-80 0 0 80 80 0 0-80z" />
    </Icon>
);

export default Interrobang;