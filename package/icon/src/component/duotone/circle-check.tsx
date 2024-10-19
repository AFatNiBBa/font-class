
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=duotone circle-check}
 * @preview ![circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEzNiAwYzAtNi4xIDIuMy0xMi4zIDctMTdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsNDcgNDdjMzctMzcgNzQtNzQgMTExLTExMWM0LjctNC43IDEwLjgtNyAxNy03czEyLjMgMi4zIDE3IDdjMi4zIDIuMyA0LjEgNSA1LjMgNy45Yy42IDEuNSAxIDIuOSAxLjMgNC40Yy4yIDEuMSAuMyAyLjIgLjMgMi4yYy4xIDEuMiAuMSAxLjIgLjEgMi41Yy0uMSAxLjUtLjEgMS45LS4xIDIuM2MtLjEgLjctLjIgMS41LS4zIDIuMmMtLjMgMS41LS43IDMtMS4zIDQuNGMtMS4yIDIuOS0yLjkgNS42LTUuMyA3LjljLTQyLjcgNDIuNy04NS4zIDg1LjMtMTI4IDEyOGMtNC43IDQuNy0xMC44IDctMTcgN3MtMTIuMy0yLjMtMTctN2MtMjEuMy0yMS4zLTQyLjctNDIuNy02NC02NGMtNC43LTQuNy03LTEwLjgtNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM2OSAxNzVjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjQxIDMzN2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTY0LTY0Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOXMyNC42LTkuNCAzMy45IDBsNDcgNDdMMzM1IDE3NWM5LjQtOS40IDI0LjYtOS40IDMzLjkgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm136 0c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l47 47c37-37 74-74 111-111c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c2.3 2.3 4.1 5 5.3 7.9c.6 1.5 1 2.9 1.3 4.4c.2 1.1 .3 2.2 .3 2.2c.1 1.2 .1 1.2 .1 2.5c-.1 1.5-.1 1.9-.1 2.3c-.1 .7-.2 1.5-.3 2.2c-.3 1.5-.7 3-1.3 4.4c-1.2 2.9-2.9 5.6-5.3 7.9c-42.7 42.7-85.3 85.3-128 128c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7c-21.3-21.3-42.7-42.7-64-64c-4.7-4.7-7-10.8-7-17z" />
            <path d="M369 175c9.4 9.4 9.4 24.6 0 33.9L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default CircleCheck;