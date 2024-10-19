
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=duotone mobile-screen}
 * @preview ![mobile-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiA2NEMxNiAyOC43IDQ0LjcgMCA4MCAwTDMwNCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMzg0YzAgMzUuMy0yOC43IDY0LTY0IDY0TDgwIDUxMmMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMTYgNjR6bTY0IDBsMCAzMjAgMjI0IDAgMC0zMjBMODAgNjR6bTY0IDM4NGMwIDguOCA3LjIgMTYgMTYgMTZsNjQgMGM4LjggMCAxNi03LjIgMTYtMTZzLTcuMi0xNi0xNi0xNmwtNjQgMGMtOC44IDAtMTYgNy4yLTE2IDE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNODAgNjRIMzA0VjM4NEg4MFY2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MobileScreen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zm64 0l0 320 224 0 0-320L80 64zm64 384c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16z" />
            <path d="M80 64H304V384H80V64z" />
    </Icon>
);

export default MobileScreen;