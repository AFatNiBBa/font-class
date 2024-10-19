
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-from-line?s=sharp-duotone-solid left-from-line}
 * @preview ![left-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgNjRsMCAzMiAwIDMyMCAwIDMyIDY0IDAgMC0zMiAwLTMyMCAwLTMyLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDI1NkwxNjAgNDE2bDMyIDAgMC05NiAxNjAgMCAwLTEyOC0xNjAgMCAwLTk2LTMyIDBMMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const LeftFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
            <path d="M0 256L160 416l32 0 0-96 160 0 0-128-160 0 0-96-32 0L0 256z" />
    </Icon>
);

export default LeftFromLine;