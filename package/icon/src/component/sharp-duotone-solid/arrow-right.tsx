
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right?s=sharp-duotone-solid arrow-right}
 * @preview ![arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDY0IDMyIDAgMjkwLjcgMCAzMi0zMmMtMTAuNy0xMC43LTIxLjMtMjEuMy0zMi0zMkwzMiAyMjQgMCAyMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDUuMyAyNTZsLTIyLjYgMjIuNi0xNDQgMTQ0TDI1NiA0NDUuMyAyMTAuNyA0MDBsMjIuNi0yMi42TDM1NC43IDI1NiAyMzMuNCAxMzQuNiAyMTAuNyAxMTIgMjU2IDY2LjhsMjIuNiAyMi42IDE0NCAxNDRMNDQ1LjMgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 290.7 0 32-32c-10.7-10.7-21.3-21.3-32-32L32 224 0 224z" />
            <path d="M445.3 256l-22.6 22.6-144 144L256 445.3 210.7 400l22.6-22.6L354.7 256 233.4 134.6 210.7 112 256 66.8l22.6 22.6 144 144L445.3 256z" />
    </Icon>
);

export default ArrowRight;