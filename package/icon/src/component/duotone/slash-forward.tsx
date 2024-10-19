
import { Icon, generic } from "../../index";

/**
 * A component that renders the `slash-forward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-forward?s=duotone slash-forward}
 * @preview ![slash-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMDMuOSA0LjJjMTUuMyA4LjggMjAuNyAyOC4zIDExLjkgNDMuN2wtMjU2IDQ0OGMtOC44IDE1LjMtMjguMyAyMC43LTQzLjcgMTEuOVMtNC42IDQ3OS41IDQuMiA0NjQuMWwyNTYtNDQ4QzI2OSAuOCAyODguNS00LjYgMzAzLjkgNC4yeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const SlashForward: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M303.9 4.2c15.3 8.8 20.7 28.3 11.9 43.7l-256 448c-8.8 15.3-28.3 20.7-43.7 11.9S-4.6 479.5 4.2 464.1l256-448C269 .8 288.5-4.6 303.9 4.2z" />
    </Icon>
);

export default SlashForward;