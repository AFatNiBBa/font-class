
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-square?s=sharp-duotone-solid arrow-down-to-square}
 * @preview ![arrow-down-to-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgOTYgMCAwIDY0TDY0IDk2bDAgMzUyIDM4NCAwIDAtMzUyLTY0IDAgMC02NCA5NiAwIDMyIDAgMCAzMiAwIDQxNiAwIDMyLTMyIDBMMzIgNTEyIDAgNTEybDAtMzJMMCA2NCAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDM2NS4zbDIyLjYtMjIuNiA5Ni05NkwzOTcuMyAyMjQgMzUyIDE3OC43bC0yMi42IDIyLjZMMjg4IDI0Mi43IDI4OCAzMmwwLTMyTDIyNCAwbDAgMzIgMCAyMTAuNy00MS40LTQxLjRMMTYwIDE3OC43IDExNC43IDIyNGwyMi42IDIyLjYgOTYgOTZMMjU2IDM2NS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowDownToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l32 0 96 0 0 64L64 96l0 352 384 0 0-352-64 0 0-64 96 0 32 0 0 32 0 416 0 32-32 0L32 512 0 512l0-32L0 64 0 32z" />
            <path d="M256 365.3l22.6-22.6 96-96L397.3 224 352 178.7l-22.6 22.6L288 242.7 288 32l0-32L224 0l0 32 0 210.7-41.4-41.4L160 178.7 114.7 224l22.6 22.6 96 96L256 365.3z" />
    </Icon>
);

export default ArrowDownToSquare;