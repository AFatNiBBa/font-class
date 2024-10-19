
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-half` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half?s=duotone heart-half}
 * @preview ![heart-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgOTZsMCA2Ny45IDAgMjY1LjQgMCA1MC43YzEwLjMgMCAyMC4yLTMuOSAyNy43LTEwLjlMNDY0LjQgMzAwLjRjMzAuNC0yOC4zIDQ3LjYtNjggNDcuNi0xMDkuNWwwLTUuOGMwLTY5LjktNTAuNS0xMjkuNS0xMTkuNC0xNDFjLTcuOC0xLjMtMTUuNy0xLjktMjMuNS0xLjlDMzMxLjUgNDIuMSAyOTUgNTcgMjY4IDg0TDI1NiA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA5NkwyNDQgODRzMCAwIDAgMGMtMzIuNi0zMi42LTc5LTQ3LjUtMTI0LjYtMzkuOUM1MC41IDU1LjYgMCAxMTUuMiAwIDE4NS4xbDAgNS44YzAgNDEuNSAxNy4yIDgxLjIgNDcuNiAxMDkuNUwyMjguMyA0NjkuMWM3LjUgNyAxNy40IDEwLjkgMjcuNyAxMC45bDAtNTAuNyAwLTI2NS40TDI1NiA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const HeartHalf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 96l0 67.9 0 265.4 0 50.7c10.3 0 20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5l0-5.8c0-69.9-50.5-129.5-119.4-141c-7.8-1.3-15.7-1.9-23.5-1.9C331.5 42.1 295 57 268 84L256 96z" />
            <path d="M256 96L244 84s0 0 0 0c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9l0-50.7 0-265.4L256 96z" />
    </Icon>
);

export default HeartHalf;