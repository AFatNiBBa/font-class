
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-tree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-tree?s=sharp-duotone-solid house-tree}
 * @preview ![house-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNzcgMTI1LjFMNDA0LjUgMjMxLjQgNDE2IDI0MWwwIDE1IDAgMjU2IDIyNCAwIDAtNDhMNTQ0IDM1Mmw2NCAwIDAtNDhMNTEyIDE5Mmw2NCAwIDAtNDhMNDE2IDAgMjc3IDEyNS4xeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA1MTJMMCAyNTYgMTkyIDk2IDM4NCAyNTZsMCAyNTZMMCA1MTJ6TTI0MCAzNjhsMC05Ni05NiAwIDAgOTYgOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M277 125.1L404.5 231.4 416 241l0 15 0 256 224 0 0-48L544 352l64 0 0-48L512 192l64 0 0-48L416 0 277 125.1z" />
            <path d="M0 512L0 256 192 96 384 256l0 256L0 512zM240 368l0-96-96 0 0 96 96 0z" />
    </Icon>
);

export default HouseTree;