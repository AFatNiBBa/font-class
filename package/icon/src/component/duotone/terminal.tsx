
import { Icon, generic } from "../../index";

/**
 * A component that renders the `terminal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=duotone terminal}
 * @preview ![terminal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgNDQ4YzAtMTcuNyAxNC4zLTMyIDMyLTMybDI4OCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0yODggMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05LjQgNDEuNEMtMy4xIDUzLjktMy4xIDc0LjEgOS40IDg2LjZMMTc4LjcgMjU2IDkuNCA0MjUuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNzMzIuOCAxMi41IDQ1LjMgMGwxOTItMTkyYzEyLjUtMTIuNSAxMi41LTMyLjggMC00NS4zbC0xOTItMTkyYy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Terminal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 448c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32z" />
            <path d="M9.4 41.4C-3.1 53.9-3.1 74.1 9.4 86.6L178.7 256 9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0z" />
    </Icon>
);

export default Terminal;