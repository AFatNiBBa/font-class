
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid?s=sharp-duotone-solid grid}
 * @preview ![grid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDMyMGwxMjggMCAwLTEyOEwwIDE5MnpNMTYwIDMybDAgMTI4IDEyOCAwIDAtMTI4TDE2MCAzMnptMCAzMjBsMCAxMjggMTI4IDAgMC0xMjgtMTI4IDB6TTMyMCAxOTJsMCAxMjggMTI4IDAgMC0xMjgtMTI4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDMybDEyOCAwIDAgMTI4TDAgMTYwIDAgMzJ6TTAgMzUybDEyOCAwIDAgMTI4TDAgNDgwIDAgMzUyek0yODggMTkybDAgMTI4LTEyOCAwIDAtMTI4IDEyOCAwek0zMjAgMzJsMTI4IDAgMCAxMjgtMTI4IDAgMC0xMjh6TTQ0OCAzNTJsMCAxMjgtMTI4IDAgMC0xMjggMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Grid: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 320l128 0 0-128L0 192zM160 32l0 128 128 0 0-128L160 32zm0 320l0 128 128 0 0-128-128 0zM320 192l0 128 128 0 0-128-128 0z" />
            <path d="M0 32l128 0 0 128L0 160 0 32zM0 352l128 0 0 128L0 480 0 352zM288 192l0 128-128 0 0-128 128 0zM320 32l128 0 0 128-128 0 0-128zM448 352l0 128-128 0 0-128 128 0z" />
    </Icon>
);

export default Grid;