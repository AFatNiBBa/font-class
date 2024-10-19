
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-box?s=sharp-duotone-solid hand-holding-box}
 * @preview ![hand-holding-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NEwwIDUxMmwzMiAwIDE5MiAwIDE2MCAwIDEyLjQgMCAxMC4yLTcgMTI4LTg4IDMzLTIyLjctNDUuMy02NS45LTMzIDIyLjctOTQuNSA2NUwyNTYgNDE2bDAtMzIgMzIgMCA2NCAwIDMyIDAgMC02NC0zMiAwLTY0IDAtNjQgMC02NCAwLTExLjIgMC04LjggN0w2OC44IDM4NCAwIDM4NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAwbDAgMTI4IDY0LTMyIDY0IDMyTDM1MiAwIDQ4MCAwbDAgMjU2TDk2IDI1NiA5NiAwIDIyNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandHoldingBox: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384L0 512l32 0 192 0 160 0 12.4 0 10.2-7 128-88 33-22.7-45.3-65.9-33 22.7-94.5 65L256 416l0-32 32 0 64 0 32 0 0-64-32 0-64 0-64 0-64 0-11.2 0-8.8 7L68.8 384 0 384z" />
            <path d="M224 0l0 128 64-32 64 32L352 0 480 0l0 256L96 256 96 0 224 0z" />
    </Icon>
);

export default HandHoldingBox;