
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=sharp-duotone-solid angle-down}
 * @preview ![angle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMzk3LjNsMjIuNi0yMi42IDE2MC0xNjBMNDI5LjMgMTkyIDM4NCAxNDYuN2wtMjIuNiAyMi42TDIyNCAzMDYuNyA4Ni42IDE2OS40IDY0IDE0Ni43IDE4LjcgMTkybDIyLjYgMjIuNiAxNjAgMTYwTDIyNCAzOTcuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const AngleDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 397.3l22.6-22.6 160-160L429.3 192 384 146.7l-22.6 22.6L224 306.7 86.6 169.4 64 146.7 18.7 192l22.6 22.6 160 160L224 397.3z" />
    </Icon>
);

export default AngleDown;