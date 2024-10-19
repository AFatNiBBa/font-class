
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=sharp-duotone-solid arrow-down}
 * @preview ![arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzJsMCAzMiAwIDI5MC43IDMyIDMyIDMyLTMyTDIyNCA2NGwwLTMyLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgNDc3LjNsMjIuNi0yMi42IDE0NC0xNDRMMzgxLjMgMjg4IDMzNiAyNDIuN2wtMjIuNiAyMi42TDE5MiAzODYuNyA3MC42IDI2NS40IDQ4IDI0Mi43IDIuNyAyODhsMjIuNiAyMi42IDE0NCAxNDRMMTkyIDQ3Ny4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 32l0 32 0 290.7 32 32 32-32L224 64l0-32-64 0z" />
            <path d="M192 477.3l22.6-22.6 144-144L381.3 288 336 242.7l-22.6 22.6L192 386.7 70.6 265.4 48 242.7 2.7 288l22.6 22.6 144 144L192 477.3z" />
    </Icon>
);

export default ArrowDown;