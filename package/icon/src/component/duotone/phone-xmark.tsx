
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=duotone phone-xmark}
 * @preview ![phone-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NGMwIDI0Ny40IDIwMC42IDQ0OCA0NDggNDQ4YzE4IDAgMzMuOC0xMi4xIDM4LjYtMjkuNWwyNC04OGM1LjMtMTkuNC00LjYtMzkuNy0yMy4yLTQ3LjRsLTk2LTQwYy0xNi4zLTYuOC0zNS4yLTIuMS00Ni4zIDExLjZMMzM2LjcgMzY4QzI2Ni4zIDMzNC43IDIwOS4zIDI3Ny43IDE3NiAyMDcuM0wyMjUuMyAxNjdjMTMuNy0xMS4yIDE4LjQtMzAgMTEuNi00Ni4zbC00MC05NmMtNy43LTE4LjYtMjgtMjguNS00Ny40LTIzLjJsLTg4IDI0QzQ0LjEgMzAuMiAzMiA0NiAzMiA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQwMSAxNWMtOS40LTkuNC0yNC42LTkuNC0zMy45IDBzLTkuNCAyNC42IDAgMzMuOWw0NyA0Ny00NyA0N2MtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlzMjQuNiA5LjQgMzMuOSAwbDQ3LTQ3IDQ3IDQ3YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwczkuNC0yNC42IDAtMzMuOWwtNDctNDcgNDctNDdjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlzLTI0LjYtOS40LTMzLjkgMGwtNDcgNDdMNDAxIDE1eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PhoneXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L336.7 368C266.3 334.7 209.3 277.7 176 207.3L225.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96c-7.7-18.6-28-28.5-47.4-23.2l-88 24C44.1 30.2 32 46 32 64z" />
            <path d="M401 15c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47L401 15z" />
    </Icon>
);

export default PhoneXmark;