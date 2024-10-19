
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-line?s=sharp-duotone-solid right-to-line}
 * @preview ![right-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgNjRsMCAzMiAwIDMyMCAwIDMyIDY0IDAgMC0zMiAwLTMyMCAwLTMyLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIgMjU2TDE5MiA5NmwtMzIgMCAwIDk2TDAgMTkyIDAgMzIwbDE2MCAwIDAgOTYgMzIgMEwzNTIgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
            <path d="M352 256L192 96l-32 0 0 96L0 192 0 320l160 0 0 96 32 0L352 256z" />
    </Icon>
);

export default RightToLine;