
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish?s=sharp-duotone-solid fish}
 * @preview ![fish](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGw0OCA5NkwwIDM1MmwzMiAzMiAxMTAuOC01NS40QzE4Mi4yIDM3Ny4xIDI0Ni42IDQzMiAzMzYgNDMyYzE2MCAwIDI0MC0xNzYgMjQwLTE3NnMtODAtMTc2LTI0MC0xNzZjLTg5LjQgMC0xNTMuOCA1NC45LTE5My4yIDEwMy40TDMyIDEyOCAwIDE2MHptNDQ4IDk2YTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTYgMjI0YTMyIDMyIDAgMSAwIDAgNjQgMzIgMzIgMCAxIDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Fish: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l48 96L0 352l32 32 110.8-55.4C182.2 377.1 246.6 432 336 432c160 0 240-176 240-176s-80-176-240-176c-89.4 0-153.8 54.9-193.2 103.4L32 128 0 160zm448 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M416 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Fish;