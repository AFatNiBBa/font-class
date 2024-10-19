
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=sharp-duotone-solid down-to-line}
 * @preview ![down-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwzMiAwIDMyMCAwIDMyIDAgMCA2NC0zMiAwTDMyIDQ4MCAwIDQ4MGwwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDM4NEwzNTIgMjI0bDAtMzItOTYgMCAwLTE2MEwxMjggMzJsMCAxNjAtOTYgMCAwIDMyTDE5MiAzODR6Ii8+PC9zdmc+|width=32|height=32)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416l32 0 320 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
            <path d="M192 384L352 224l0-32-96 0 0-160L128 32l0 160-96 0 0 32L192 384z" />
    </Icon>
);

export default DownToLine;