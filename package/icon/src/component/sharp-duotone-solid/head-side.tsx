
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side?s=sharp-duotone-solid head-side}
 * @preview ![head-side](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNC4zQzAgMTAwLjQgMTAwLjQgMCAyMjQuMyAwTDI1NiAwQzM1OC4xIDAgNDQxLjYgNzkuNyA0NDcuNyAxODAuM0w1MDUgMjUybDcgOC44IDAgMTEuMiAwIDE2IDAgMzItMzIgMC0zMiAwIDAgOTYgMCAzMi0zMiAwLTk2IDAgMCAzMiAwIDMyLTMyIDBMOTYgNTEybC0zMiAwIDAtMzIgMC05OC44QzIzIDMzOS4zIDAgMjgzIDAgMjI0LjN6TTMyMCAxOTJhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAxNjBhMzIgMzIgMCAxIDAgMCA2NCAzMiAzMiAwIDEgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HeadSide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224.3C0 100.4 100.4 0 224.3 0L256 0C358.1 0 441.6 79.7 447.7 180.3L505 252l7 8.8 0 11.2 0 16 0 32-32 0-32 0 0 96 0 32-32 0-96 0 0 32 0 32-32 0L96 512l-32 0 0-32 0-98.8C23 339.3 0 283 0 224.3zM320 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M352 160a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default HeadSide;