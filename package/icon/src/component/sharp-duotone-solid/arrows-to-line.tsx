
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-line?s=sharp-duotone-solid arrows-to-line}
 * @preview ![arrows-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwzMiAwIDM4NCAwIDMyIDAgMCA2NC0zMiAwTDMyIDI4OCAwIDI4OGwwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDBsMCAzMiAwIDMyIDY0IDAgMCAzMi05NiA5NkwxMjggOTZsMC0zMiA2NCAwIDAtMzIgMC0zMiA2NCAwem0wIDQ0OGwwIDMyIDAgMzItNjQgMCAwLTMyIDAtMzItNjQgMCAwLTMyIDk2LTk2IDk2IDk2IDAgMzItNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowsToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l32 0 384 0 32 0 0 64-32 0L32 288 0 288l0-64z" />
            <path d="M256 0l0 32 0 32 64 0 0 32-96 96L128 96l0-32 64 0 0-32 0-32 64 0zm0 448l0 32 0 32-64 0 0-32 0-32-64 0 0-32 96-96 96 96 0 32-64 0z" />
    </Icon>
);

export default ArrowsToLine;