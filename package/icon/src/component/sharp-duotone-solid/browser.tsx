
import { Icon, generic } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-duotone-solid browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNEwwIDQ4MGw1MTIgMCAwLTI1NkwwIDIyNHpNNjQgOTZsMCA2NCA2NCAwIDAtNjRMNjQgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDMybDUxMiAwIDAgMTkyTDAgMjI0IDAgMzJ6TTY0IDk2bDAgNjQgNjQgMCAwLTY0TDY0IDk2em0zODQgOGwtMjg4IDAgMCA0OCAyODggMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224L0 480l512 0 0-256L0 224zM64 96l0 64 64 0 0-64L64 96z" />
            <path d="M0 32l512 0 0 192L0 224 0 32zM64 96l0 64 64 0 0-64L64 96zm384 8l-288 0 0 48 288 0 0-48z" />
    </Icon>
);

export default Browser;