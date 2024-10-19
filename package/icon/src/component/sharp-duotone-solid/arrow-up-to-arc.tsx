
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=sharp-duotone-solid arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1Nmw2NCAwQzY0IDE1MCAxNTAgNjQgMjU2IDY0czE5MiA4NiAxOTIgMTkybDY0IDBDNTEyIDExNC42IDM5Ny40IDAgMjU2IDBTMCAxMTQuNiAwIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQxMy4zIDMwNGwtMjIuNi0yMi42LTExMi0xMTJMMjU2IDE0Ni43bC0yMi42IDIyLjYtMTEyIDExMkw5OC43IDMwNCAxNDQgMzQ5LjNsMjIuNi0yMi42TDIyNCAyNjkuMyAyMjQgNDgwbDAgMzIgNjQgMCAwLTMyIDAtMjEwLjcgNTcuNCA1Ny40TDM2OCAzNDkuMyA0MTMuMyAzMDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l64 0C64 150 150 64 256 64s192 86 192 192l64 0C512 114.6 397.4 0 256 0S0 114.6 0 256z" />
            <path d="M413.3 304l-22.6-22.6-112-112L256 146.7l-22.6 22.6-112 112L98.7 304 144 349.3l22.6-22.6L224 269.3 224 480l0 32 64 0 0-32 0-210.7 57.4 57.4L368 349.3 413.3 304z" />
    </Icon>
);

export default ArrowUpToArc;