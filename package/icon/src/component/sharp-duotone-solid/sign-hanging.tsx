
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=sharp-duotone-solid sign-hanging}
 * @preview ![sign-hanging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgNjQgMzIgMCAzMiAwIDAgMzUyIDAgMzIgNjQgMCAwLTMyIDAtMzUyIDM1MiAwIDMyIDAgMC02NC0zMiAwTDEyOCA2NGwwLTMyIDAtMzJMNjQgMGwwIDMyIDAgMzJMMzIgNjQgMCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4MCAxNjBsLTMyMCAwIDAgMjI0IDMyMCAwIDAtMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l0 64 32 0 32 0 0 352 0 32 64 0 0-32 0-352 352 0 32 0 0-64-32 0L128 64l0-32 0-32L64 0l0 32 0 32L32 64 0 64z" />
            <path d="M480 160l-320 0 0 224 320 0 0-224z" />
    </Icon>
);

export default SignHanging;