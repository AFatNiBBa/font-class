
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=sharp-duotone-solid down-from-line}
 * @preview ![down-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTZsMzIgMCAzMjAgMCAzMiAwIDAtNjQtMzIgMEwzMiAzMiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDQ4MEwzMiAzMjBsMC0zMiA5NiAwIDAtMTYwIDEyOCAwIDAgMTYwIDk2IDAgMCAzMkwxOTIgNDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l32 0 320 0 32 0 0-64-32 0L32 32 0 32z" />
            <path d="M192 480L32 320l0-32 96 0 0-160 128 0 0 160 96 0 0 32L192 480z" />
    </Icon>
);

export default DownFromLine;