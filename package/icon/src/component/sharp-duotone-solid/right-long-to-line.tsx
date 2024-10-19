
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-long-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long-to-line?s=sharp-duotone-solid right-long-to-line}
 * @preview ![right-long-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01NzYgNjRsMCAzMiAwIDMyMCAwIDMyIDY0IDAgMC0zMiAwLTMyMCAwLTMyLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMjU2TDM1MiA0MTZsLTMyIDAgMC05NkwwIDMyMCAwIDE5MmwzMjAgMCAwLTk2IDMyIDBMNTEyIDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const RightLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M576 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
            <path d="M512 256L352 416l-32 0 0-96L0 320 0 192l320 0 0-96 32 0L512 256z" />
    </Icon>
);

export default RightLongToLine;