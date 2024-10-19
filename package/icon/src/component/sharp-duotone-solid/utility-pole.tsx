
import { Icon, generic } from "../../index";

/**
 * A component that renders the `utility-pole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utility-pole?s=sharp-duotone-solid utility-pole}
 * @preview ![utility-pole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ4IDAgMCAyNCAwIDhMMCA2NGwwLThMMCAzMnptODAgMGw0OCAwIDAgMjQgMCA4TDgwIDY0bDAtOCAwLTI0em0zLjIgOTZsNTcuNyAwTDIyNCAxODMuNGwwIDM4LjVMODMuMiAxMjh6TTI4OCAxODMuNEwzNzEuMiAxMjhsNTcuNyAwTDI4OCAyMjEuOWwwLTM4LjV6TTM4NCAzMmw0OCAwIDAgMjQgMCA4LTQ4IDAgMC04IDAtMjR6bTgwIDBsNDggMCAwIDI0IDAgOC00OCAwIDAtOCAwLTI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDBWNjRINTEydjY0SDI4OFY1MTJIMjI0VjEyOEgwVjY0SDIyNFYwaDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UtilityPole: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l48 0 0 24 0 8L0 64l0-8L0 32zm80 0l48 0 0 24 0 8L80 64l0-8 0-24zm3.2 96l57.7 0L224 183.4l0 38.5L83.2 128zM288 183.4L371.2 128l57.7 0L288 221.9l0-38.5zM384 32l48 0 0 24 0 8-48 0 0-8 0-24zm80 0l48 0 0 24 0 8-48 0 0-8 0-24z" />
            <path d="M288 0V64H512v64H288V512H224V128H0V64H224V0h64z" />
    </Icon>
);

export default UtilityPole;