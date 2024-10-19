
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-vertical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical?s=duotone rectangle-vertical}
 * @preview ![rectangle-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDM4NGMwIDM1LjMtMjguNyA2NC02NCA2NEg2NGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA2NEMwIDI4LjcgMjguNyAwIDY0IDBMMzIwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RectangleVertical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0z" />
    </Icon>
);

export default RectangleVertical;