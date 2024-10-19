
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shelves` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves?s=sharp-duotone-solid shelves}
 * @preview ![shelves](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAzMiAwIDE2MGwwIDMyIDAgMzJMMCA0MTZsMCAzMiAwIDMyIDAgMzIgNjQgMCAwLTMyIDUxMiAwIDAgMzIgNjQgMCAwLTMyIDAtMzIgMC0zMiAwLTE5MiAwLTMyIDAtMzIgMC0xMjggMC0zMkw1NzYgMGwwIDMyIDAgMTI4TDY0IDE2MCA2NCAzMiA2NCAwIDAgMHpNNjQgMjI0bDUxMiAwIDAgMTkyTDY0IDQxNmwwLTE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4MCAwTDM1MiAwbDAgMTI4IDEyOCAwTDQ4MCAwek05NiAyNTZsMCAxMjggMTI4IDAgMC0xMjhMOTYgMjU2em0xNjAgMGwwIDEyOCAxMjggMCAwLTEyOC0xMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Shelves: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 160l0 32 0 32L0 416l0 32 0 32 0 32 64 0 0-32 512 0 0 32 64 0 0-32 0-32 0-32 0-192 0-32 0-32 0-128 0-32L576 0l0 32 0 128L64 160 64 32 64 0 0 0zM64 224l512 0 0 192L64 416l0-192z" />
            <path d="M480 0L352 0l0 128 128 0L480 0zM96 256l0 128 128 0 0-128L96 256zm160 0l0 128 128 0 0-128-128 0z" />
    </Icon>
);

export default Shelves;