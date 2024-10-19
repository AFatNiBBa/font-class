
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=sharp-duotone-solid pen-to-square}
 * @preview ![pen-to-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDMyIDAgMTYwIDAgMzIgMCAwIDY0LTMyIDBMNjQgMTI4bDAgMzIwIDMyMCAwIDAtMTI4IDAtMzIgNjQgMCAwIDMyIDAgMTYwIDAgMzItMzIgMEwzMiA1MTIgMCA1MTJsMC0zMkwwIDk2IDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMzg0bDE2LTExMkwzNDAuNyA3NS4zbDk2IDk2TDI0MCAzNjggMTI4IDM4NHpNNDU5LjMgMTQ4LjdsLTk2LTk2TDQxNiAwbDk2IDk2LTUyLjcgNTIuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const PenToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l32 0 160 0 32 0 0 64-32 0L64 128l0 320 320 0 0-128 0-32 64 0 0 32 0 160 0 32-32 0L32 512 0 512l0-32L0 96 0 64z" />
            <path d="M128 384l16-112L340.7 75.3l96 96L240 368 128 384zM459.3 148.7l-96-96L416 0l96 96-52.7 52.7z" />
    </Icon>
);

export default PenToSquare;