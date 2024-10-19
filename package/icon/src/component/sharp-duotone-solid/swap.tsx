
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swap` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap?s=sharp-duotone-solid swap}
 * @preview ![swap](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggMzJsMCAzMiAwIDE5MiA2NCAwIDAtMTYwIDEyOCAwIDAgMjU2LTgwIDAgMCA0MEw1MTIgNTEyIDYyNCAzOTJsMC00MC04MCAwIDAtMjg4IDAtMzItMzIgMEwzMjAgMzJsLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMEwxNiAxMjBsMCA0MCA4MCAwIDAgMjg4IDAgMzIgMzIgMCAxOTIgMCAzMiAwIDAtMzIgMC0xOTItNjQgMCAwIDE2MC0xMjggMCAwLTI1NiA4MCAwIDAtNDBMMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Swap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 32l0 32 0 192 64 0 0-160 128 0 0 256-80 0 0 40L512 512 624 392l0-40-80 0 0-288 0-32-32 0L320 32l-32 0z" />
            <path d="M128 0L16 120l0 40 80 0 0 288 0 32 32 0 192 0 32 0 0-32 0-192-64 0 0 160-128 0 0-256 80 0 0-40L128 0z" />
    </Icon>
);

export default Swap;