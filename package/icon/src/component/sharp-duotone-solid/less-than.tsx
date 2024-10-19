
import { Icon, generic } from "../../index";

/**
 * A component that renders the `less-than` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=sharp-duotone-solid less-than}
 * @preview ![less-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgNjQuNWwtNSAyLjJMMTkgMjI2LjggMCAyMzUuMmwwIDQxLjYgMTkgOC40IDM2MCAxNjAgNSAyLjIgMC03MEwxMTAuOCAyNTYgMzg0IDEzNC42bDAtNzB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M384 64.5l-5 2.2L19 226.8 0 235.2l0 41.6 19 8.4 360 160 5 2.2 0-70L110.8 256 384 134.6l0-70z" />
    </Icon>
);

export default LessThan;