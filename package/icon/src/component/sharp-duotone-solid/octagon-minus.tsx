
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-minus?s=sharp-duotone-solid octagon-minus}
 * @preview ![octagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwxNjAgMCAzNTIgMCA1MTIgMTYwbDAgMTkyTDM1MiA1MTJsLTE5MiAwTDAgMzUyIDAgMTYwem0xNjAgNzJsMCA0OCAyNCAwIDE0NCAwIDI0IDAgMC00OC0yNCAwLTE0NCAwLTI0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMjMybDI0IDAgMTQ0IDAgMjQgMCAwIDQ4LTI0IDAtMTQ0IDAtMjQgMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const OctagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160zm160 72l0 48 24 0 144 0 24 0 0-48-24 0-144 0-24 0z" />
            <path d="M160 232l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default OctagonMinus;