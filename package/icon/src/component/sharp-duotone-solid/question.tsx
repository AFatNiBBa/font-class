
import { Icon, generic } from "../../index";

/**
 * A component that renders the `question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=sharp-duotone-solid question}
 * @preview ![question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjAgNDQwYTQwIDQwIDAgMSAwIDgwIDAgNDAgNDAgMCAxIDAgLTgwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNDQgOTZjLTM1LjMgMC02NCAyOC43LTY0IDY0bDAgMTYtNjQgMCAwLTE2QzE2IDg5LjMgNzMuMyAzMiAxNDQgMzJsMzIgMGM3MC43IDAgMTI4IDU3LjMgMTI4IDEyOGwwIDkuM2MwIDM5LjMtMTggNzYuNC00OC45IDEwMC42TDE5MiAzMTkuNmwwIDMyLjQtNjQgMCAwLTQ4IDAtMTUuNiAxMi4yLTkuNiA3NS4zLTU5LjJDMjMxIDIwNy41IDI0MCAxODkgMjQwIDE2OS4zbDAtOS4zYzAtMzUuMy0yOC43LTY0LTY0LTY0bC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M120 440a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
            <path d="M144 96c-35.3 0-64 28.7-64 64l0 16-64 0 0-16C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128l0 9.3c0 39.3-18 76.4-48.9 100.6L192 319.6l0 32.4-64 0 0-48 0-15.6 12.2-9.6 75.3-59.2C231 207.5 240 189 240 169.3l0-9.3c0-35.3-28.7-64-64-64l-32 0z" />
    </Icon>
);

export default Question;