
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=sharp-duotone-solid arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1OC43bDAgMzIgNjQgMCAwLTMyYzAtMTA2IDg2LTE5MiAxOTItMTkyczE5MiA4NiAxOTIgMTkybDAgMzIgNjQgMCAwLTMyYzAtMTQxLjQtMTE0LjYtMjU2LTI1Ni0yNTZTMCAxMTcuNCAwIDI1OC43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTguNyAzNTQuN2wyMi42IDIyLjYgMTEyIDExMkwyNTYgNTEybDIyLjYtMjIuNiAxMTItMTEyIDIyLjYtMjIuNkwzNjggMzA5LjVsLTIyLjYgMjIuNkwyODggMzg5LjVsMC0xOTQuNyAwLTMyLTY0IDAgMCAzMiAwIDE5NC43LTU3LjQtNTcuNEwxNDQgMzA5LjUgOTguNyAzNTQuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 258.7l0 32 64 0 0-32c0-106 86-192 192-192s192 86 192 192l0 32 64 0 0-32c0-141.4-114.6-256-256-256S0 117.4 0 258.7z" />
            <path d="M98.7 354.7l22.6 22.6 112 112L256 512l22.6-22.6 112-112 22.6-22.6L368 309.5l-22.6 22.6L288 389.5l0-194.7 0-32-64 0 0 32 0 194.7-57.4-57.4L144 309.5 98.7 354.7z" />
    </Icon>
);

export default ArrowDownFromArc;