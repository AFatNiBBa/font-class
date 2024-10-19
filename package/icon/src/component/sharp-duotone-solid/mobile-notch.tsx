
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=sharp-duotone-solid mobile-notch}
 * @preview ![mobile-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAwTDgwIDAgMzA0IDBsNjQgMCAwIDY0IDAgMzg0IDAgNjQtNjQgMEw4MCA1MTJsLTY0IDAgMC02NEwxNiA2NCAxNiAwek04MCA2NGwwIDM4NCAyMjQgMCAwLTM4NC00OCAwIDAgMzJMMTI4IDk2bDAtMzJMODAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik04MCA2NFY0NDhIMzA0VjY0SDI1NlY5NkgxMjhWNjRIODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 0L80 0 304 0l64 0 0 64 0 384 0 64-64 0L80 512l-64 0 0-64L16 64 16 0zM80 64l0 384 224 0 0-384-48 0 0 32L128 96l0-32L80 64z" />
            <path d="M80 64V448H304V64H256V96H128V64H80z" />
    </Icon>
);

export default MobileNotch;