
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sliders-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-simple?s=sharp-duotone-solid sliders-simple}
 * @preview ![sliders-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOGwwIDY0IDMyIDAgMjg4IDAgMC02NEwzMiAxMjggMCAxMjh6TTE5MiAzMjBsMCA2NCAyODggMCAzMiAwIDAtNjQtMzIgMC0yODggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDM4NGw2NCAwIDAtNjQtNjQgMCAwIDY0ek0wIDQ0OGwwLTY0IDAtNjQgMC02NCA2NCAwIDY0IDAgNjQgMCAwIDY0IDAgNjQgMCA2NC02NCAwLTY0IDBMMCA0NDh6TTM4NCAxOTJsNjQgMCAwLTY0LTY0IDAgMCA2NHptLTY0IDY0bDAtNjQgMC02NCAwLTY0IDY0IDAgNjQgMCA2NCAwIDAgNjQgMCA2NCAwIDY0LTY0IDAtNjQgMC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SlidersSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128l0 64 32 0 288 0 0-64L32 128 0 128zM192 320l0 64 288 0 32 0 0-64-32 0-288 0z" />
            <path d="M64 384l64 0 0-64-64 0 0 64zM0 448l0-64 0-64 0-64 64 0 64 0 64 0 0 64 0 64 0 64-64 0-64 0L0 448zM384 192l64 0 0-64-64 0 0 64zm-64 64l0-64 0-64 0-64 64 0 64 0 64 0 0 64 0 64 0 64-64 0-64 0-64 0z" />
    </Icon>
);

export default SlidersSimple;