
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open?s=sharp-duotone-solid box-open}
 * @preview ![box-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEw2NCAzMiAzMjAgNjQgMjI0IDIyNCA2NCAxNzguM0M0Mi43IDE3Mi4yIDIxLjMgMTY2LjEgMCAxNjB6TTMyMCA2NEw1NzYgMzJsNjQgMTI4Yy0yMS4zIDYuMS00Mi43IDEyLjItNjQgMTguM2MtNTMuMyAxNS4yLTEwNi43IDMwLjUtMTYwIDQ1LjdMMzIwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDY0TDIyNCAyMjQgNjQgMTc4LjMgNjQgNDE2bDI1NiA2NCAyNTYtNjQgMC0yMzcuN0w0MTYgMjI0IDMyMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoxOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L64 32 320 64 224 224 64 178.3C42.7 172.2 21.3 166.1 0 160zM320 64L576 32l64 128c-21.3 6.1-42.7 12.2-64 18.3c-53.3 15.2-106.7 30.5-160 45.7L320 64z" />
            <path d="M320 64L224 224 64 178.3 64 416l256 64 256-64 0-237.7L416 224 320 64z" />
    </Icon>
);

export default BoxOpen;