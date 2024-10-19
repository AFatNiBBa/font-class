
import { Icon, generic } from "../../index";

/**
 * A component that renders the `people-arrows` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/people-arrows?s=sharp-duotone-solid people-arrows}
 * @preview ![people-arrows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNCAzNTJsNDAgMCAwIDE2MCAxMjggMCAwLTE2MCAxNiAwLTQ4LTQ4IDY3LjItNjcuMkwyMjQgMTYwIDMyIDE2MCAyNCAzNTJ6TTY0IDY0YTY0IDY0IDAgMSAwIDEyOCAwQTY0IDY0IDAgMSAwIDY0IDY0ek00MTIuOCAyMzYuOEw0ODAgMzA0bC00OCA0OCAxNiAwIDAgMTYwIDEyOCAwIDAtMTYwIDQwIDAtOC0xOTItMTkyIDAtMy4yIDc2Ljh6TTQ0OCA2NGE2NCA2NCAwIDEgMCAxMjggMEE2NCA2NCAwIDEgMCA0NDggNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMzA0TDI3MiAxOTJsMCA4MCA5NiAwIDAtODBMNDgwIDMwNCAzNjggNDE2bDAtODAtOTYgMCAwIDgwTDE2MCAzMDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const PeopleArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M24 352l40 0 0 160 128 0 0-160 16 0-48-48 67.2-67.2L224 160 32 160 24 352zM64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64zM412.8 236.8L480 304l-48 48 16 0 0 160 128 0 0-160 40 0-8-192-192 0-3.2 76.8zM448 64a64 64 0 1 0 128 0A64 64 0 1 0 448 64z" />
            <path d="M160 304L272 192l0 80 96 0 0-80L480 304 368 416l0-80-96 0 0 80L160 304z" />
    </Icon>
);

export default PeopleArrows;