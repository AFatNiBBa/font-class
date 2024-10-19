
import { Icon, generic } from "../../index";

/**
 * A component that renders the `desktop-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/desktop-arrow-down?s=duotone desktop-arrow-down}
 * @preview ![desktop-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgMzUyYzAgMzUuMyAyOC43IDY0IDY0IDY0bDE3NiAwIDk2IDAgMTc2IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yODhjMC0zNS4zLTI4LjctNjQtNjQtNjRMMzEyIDBsMCA2NCAyMDAgMCAwIDIyNEw2NCAyODggNjQgNjRsMjAwIDAgMC02NEw2NCAwQzI4LjcgMCAwIDI4LjcgMCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI2NCA2NEw2NCA2NGwwIDIyNCA0NDggMCAwLTIyNEwzMTIgNjRsMCAxMTAuMSAzOS0zOWM5LjQtOS40IDI0LjYtOS40IDMzLjkgMHM5LjQgMjQuNiAwIDMzLjlsLTgwIDgwYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtODAtODBjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45czI0LjYtOS40IDMzLjkgMGwzOSAzOUwyNjQgNjR6bTgyLjcgMzg0TDMzNiA0MTZsLTk2IDAtMTAuNyAzMkwxNjAgNDQ4Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDI1NiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC02OS4zIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const DesktopArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 352c0 35.3 28.7 64 64 64l176 0 96 0 176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L312 0l0 64 200 0 0 224L64 288 64 64l200 0 0-64L64 0C28.7 0 0 28.7 0 64z" />
            <path d="M264 64L64 64l0 224 448 0 0-224L312 64l0 110.1 39-39c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0l-80-80c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l39 39L264 64zm82.7 384L336 416l-96 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0z" />
    </Icon>
);

export default DesktopArrowDown;