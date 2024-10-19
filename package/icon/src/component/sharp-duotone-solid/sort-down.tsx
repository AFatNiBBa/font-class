
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sort-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=sharp-duotone-solid sort-down}
 * @preview ![sort-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3NmwwIDQ4IDY0IDAgMTkyIDAgNjQgMCAwLTQ4LTE3LjgtMTZMMTYwIDMyIDE3LjggMTYwIDAgMTc2em0xMTMuNC0xNkwxNjAgMTE4LjEgMjA2LjYgMTYwbC05My4xIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDMzNkwxNjAgNDgwIDMyMCAzMzZWMjg4SDB2NDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const SortDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 176l0 48 64 0 192 0 64 0 0-48-17.8-16L160 32 17.8 160 0 176zm113.4-16L160 118.1 206.6 160l-93.1 0z" />
            <path d="M0 336L160 480 320 336V288H0v48z" />
    </Icon>
);

export default SortDown;