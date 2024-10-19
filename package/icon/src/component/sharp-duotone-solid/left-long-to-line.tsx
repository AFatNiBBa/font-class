
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-long-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long-to-line?s=sharp-duotone-solid left-long-to-line}
 * @preview ![left-long-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDY0IDAgMCAzMiAwIDMyMCAwIDMyTDAgNDQ4bDAtMzJMMCA5NiAwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDI1NkwyODggOTZsMzIgMCAwIDk2IDMyMCAwIDAgMTI4LTMyMCAwIDAgOTYtMzIgMEwxMjggMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LeftLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l64 0 0 32 0 320 0 32L0 448l0-32L0 96 0 64z" />
            <path d="M128 256L288 96l32 0 0 96 320 0 0 128-320 0 0 96-32 0L128 256z" />
    </Icon>
);

export default LeftLongToLine;