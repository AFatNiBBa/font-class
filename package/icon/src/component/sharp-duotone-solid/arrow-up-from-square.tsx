
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-square?s=sharp-duotone-solid arrow-up-from-square}
 * @preview ![arrow-up-from-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgNjQgMCAwIDY0TDY0IDk2bDAgMzUyIDM4NCAwIDAtMzUyLTMyIDAgMC02NCA2NCAwIDMyIDAgMCAzMiAwIDQxNiAwIDMyLTMyIDBMMzIgNTEyIDAgNTEybDAtMzJMMCA2NCAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDIuN2wyMi42IDIyLjYgOTYgOTZMMzk3LjMgMTQ0IDM1MiAxODkuM2wtMjIuNi0yMi42TDI4OCAxMjUuMyAyODggMzIwbDAgMzItNjQgMCAwLTMyIDAtMTk0LjctNDEuNCA0MS40TDE2MCAxODkuMyAxMTQuNyAxNDRsMjIuNi0yMi42IDk2LTk2TDI1NiAyLjd6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowUpFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l32 0 64 0 0 64L64 96l0 352 384 0 0-352-32 0 0-64 64 0 32 0 0 32 0 416 0 32-32 0L32 512 0 512l0-32L0 64 0 32z" />
            <path d="M256 2.7l22.6 22.6 96 96L397.3 144 352 189.3l-22.6-22.6L288 125.3 288 320l0 32-64 0 0-32 0-194.7-41.4 41.4L160 189.3 114.7 144l22.6-22.6 96-96L256 2.7z" />
    </Icon>
);

export default ArrowUpFromSquare;