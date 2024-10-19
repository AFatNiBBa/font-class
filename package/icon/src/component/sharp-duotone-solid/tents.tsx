
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tents` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tents?s=sharp-duotone-solid tents}
 * @preview ![tents](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjguOCAxMjQuOGwxMi45IDguNiAxOTIgMTI4IDExLjkgNy45IDIgMTQuMiA5LjggNjguNUw2NDAgMzUyIDYwOCAxMjggNDE2IDAgMjI4LjggMTI0Ljh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAyODhMMCA1MTJIMjI0VjM1Mmw5NiAxNjBINDQ4TDQxNiAyODggMjI0IDE2MCAzMiAyODh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Tents: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M228.8 124.8l12.9 8.6 192 128 11.9 7.9 2 14.2 9.8 68.5L640 352 608 128 416 0 228.8 124.8z" />
            <path d="M32 288L0 512H224V352l96 160H448L416 288 224 160 32 288z" />
    </Icon>
);

export default Tents;