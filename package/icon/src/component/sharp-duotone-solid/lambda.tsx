
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lambda` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=sharp-duotone-solid lambda}
 * @preview ![lambda](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMkwwIDMyIDAgOTZsMzIgMCAxMDguMiAwIDE2LjQgMzIuOUwyLjIgNDgwbDY5LjkgMEwxOTMuOCAyMDMuMyAzMjMuNCA0NjIuM2w4LjggMTcuNyAxOS44IDAgNjQgMCAzMiAwIDAtNjQtMzIgMC00NC4yIDBMMTg4LjYgNDkuNyAxNzkuOCAzMiAxNjAgMzIgMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 32L0 32 0 96l32 0 108.2 0 16.4 32.9L2.2 480l69.9 0L193.8 203.3 323.4 462.3l8.8 17.7 19.8 0 64 0 32 0 0-64-32 0-44.2 0L188.6 49.7 179.8 32 160 32 32 32z" />
    </Icon>
);

export default Lambda;