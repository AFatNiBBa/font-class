
import { Icon, generic } from "../../index";

/**
 * A component that renders the `anchor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor?s=sharp-duotone-solid anchor}
 * @preview ![anchor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgOTZjMCAzMy40IDE3IDYyLjggNDIuOSA4MEwyMjQgMTc2bC0zMiAwIDAgNjQgMzIgMCAzMiAwIDY0IDAgMzIgMCAzMiAwIDAtNjQtMzIgMC0xMC45IDBDMzY3IDE1OC44IDM4NCAxMjkuNCAzODQgOTZjMC01My00My05Ni05Ni05NnMtOTYgNDMtOTYgOTZ6bTEyOCAwYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgNDQ4bDAtMjA4IDY0IDAgMCAyMDggMTI4IDAgMC05Ni02NCAwIDk2LTk2IDk2IDk2LTY0IDAgMCAxMjggMCAzMi0zMiAwLTE5MiAwTDk2IDUxMmwtMzIgMCAwLTMyIDAtMTI4TDAgMzUybDk2LTk2IDk2IDk2LTY0IDAgMCA5NiAxMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Anchor: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 96c0 33.4 17 62.8 42.9 80L224 176l-32 0 0 64 32 0 32 0 64 0 32 0 32 0 0-64-32 0-10.9 0C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M256 448l0-208 64 0 0 208 128 0 0-96-64 0 96-96 96 96-64 0 0 128 0 32-32 0-192 0L96 512l-32 0 0-32 0-128L0 352l96-96 96 96-64 0 0 96 128 0z" />
    </Icon>
);

export default Anchor;