
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tarp-droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp-droplet?s=sharp-duotone-solid tarp-droplet}
 * @preview ![tarp-droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOGwxOTcuNSAwYzEzLjIgMzcuMyA0OC43IDY0IDkwLjUgNjRzNzcuNC0yNi43IDkwLjUtNjRMNTc2IDEyOGwwIDIyNC0xNjAgMCAwIDE2MEwwIDUxMiAwIDEyOHptNjQgOTZhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAxNjBjMzUuMyAwIDY0LTI2LjkgNjQtNjBTMjg4LTggMjg4LThzLTY0IDc0LjktNjQgMTA4czI4LjcgNjAgNjQgNjB6TTQxNiA1MTJMNTc2IDM1MmwtMTYwIDAgMCAxNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const TarpDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128l197.5 0c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64L576 128l0 224-160 0 0 160L0 512 0 128zm64 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M288 160c35.3 0 64-26.9 64-60S288-8 288-8s-64 74.9-64 108s28.7 60 64 60zM416 512L576 352l-160 0 0 160z" />
    </Icon>
);

export default TarpDroplet;