
import { Icon, generic } from "../../index";

/**
 * A component that renders the `z` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=sharp-duotone-solid z}
 * @preview ![z](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgMzJsMCA0My42LTcuNCA4LjlMMTAwLjMgNDE2IDM1MiA0MTZsMzIgMCAwIDY0LTMyIDBMMzIgNDgwIDAgNDgwbDAtNDMuNiA3LjQtOC45TDI4My43IDk2IDMyIDk2IDAgOTYgMCAzMmwzMiAwIDMyMCAwIDMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Z: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M384 32l0 43.6-7.4 8.9L100.3 416 352 416l32 0 0 64-32 0L32 480 0 480l0-43.6 7.4-8.9L283.7 96 32 96 0 96 0 32l32 0 320 0 32 0z" />
    </Icon>
);

export default Z;