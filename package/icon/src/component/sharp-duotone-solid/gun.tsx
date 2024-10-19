
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun?s=sharp-duotone-solid gun}
 * @preview ![gun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxMjhsMCAzMiA0MTYgMCAwLTMyTDY0IDEyOHpNMjI0IDM1MmwxMjAgMCAxNi45IDAgNS43LTE1LjlMNDAwLjkgMjQwbC01MSAwLTIyLjkgNjRMMjM2IDMwNGwtMTIgNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MjggNTZsMC0yNC00OCAwIDAgMjQgMCA4TDAgNjQgMCAyNDBsOTIgMEwzMiA0ODBsMTYwIDAgNjAtMjQwIDE5NiAwIDMyLTMyIDk2IDAgMC0xNDQtNDggMCAwLTh6bS00OCA3MmwwIDMyTDY0IDE2MGwwLTMyIDQxNiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Gun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 128l0 32 416 0 0-32L64 128zM224 352l120 0 16.9 0 5.7-15.9L400.9 240l-51 0-22.9 64L236 304l-12 48z" />
            <path d="M528 56l0-24-48 0 0 24 0 8L0 64 0 240l92 0L32 480l160 0 60-240 196 0 32-32 96 0 0-144-48 0 0-8zm-48 72l0 32L64 160l0-32 416 0z" />
    </Icon>
);

export default Gun;