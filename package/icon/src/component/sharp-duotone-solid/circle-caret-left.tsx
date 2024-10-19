
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=sharp-duotone-solid circle-caret-left}
 * @preview ![circle-caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE0NCAwTDI3MiAxMjhsMzIgMCAwIDI1Ni0zMiAwTDE0NCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMDQgMzg0bC0zMiAwTDE0NCAyNTYgMjcyIDEyOGwzMiAwIDAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleCaretLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144 0L272 128l32 0 0 256-32 0L144 256z" />
            <path d="M304 384l-32 0L144 256 272 128l32 0 0 256z" />
    </Icon>
);

export default CircleCaretLeft;