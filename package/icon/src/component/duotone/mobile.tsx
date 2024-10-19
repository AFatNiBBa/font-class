
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=duotone mobile}
 * @preview ![mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAzODRsMCA2NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwyMjQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTY0TDE2IDM4NHptMTI4IDY0YzAtOC44IDcuMi0xNiAxNi0xNmw2NCAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC02NCAwYy04LjggMC0xNi03LjItMTYtMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNiA2NEMxNiAyOC43IDQ0LjcgMCA4MCAwSDMwNGMzNS4zIDAgNjQgMjguNyA2NCA2NFYzODRIMTZWNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 384l0 64c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-64L16 384zm128 64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16z" />
            <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V384H16V64z" />
    </Icon>
);

export default Mobile;