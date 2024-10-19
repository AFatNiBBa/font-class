
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gif` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gif?s=duotone gif}
 * @preview ![gif](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMybDQ0OCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMzIwYzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ4MGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA5NnpNODAgMjU2YzAgNTMgNDMgOTYgOTYgOTZjMTkuNiAwIDM3LjUtNi4xIDUyLjgtMTUuOGM3LTQuNCAxMS4yLTEyLjEgMTEuMi0yMC4zbDAtNTEuOWMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMzIgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGw4IDAgMCAxMy4xYy01LjMgMS45LTEwLjYgMi45LTE2IDIuOWMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhzMjEuNS00OCA0OC00OGM4IDAgMTUuNCAxLjkgMjIgNS4zYzExLjggNi4xIDI2LjMgMS41IDMyLjMtMTAuM3MxLjUtMjYuMy0xMC4zLTMyLjNjLTEzLjItNi44LTI4LjItMTAuNy00NC0xMC43Yy01MyAwLTk2IDQzLTk2IDk2em0xOTItNzJsMCAxNDRjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNGwwLTE0NGMwLTEzLjMtMTAuNy0yNC0yNC0yNHMtMjQgMTAuNy0yNCAyNHptODAgMGwwIDgwIDAgNjRjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNGwwLTQwIDQwIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRsLTQwIDAgMC0zMiA2NCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0bC04OCAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAyNTZjMC0yNi41IDIxLjUtNDggNDgtNDhjOCAwIDE1LjQgMS45IDIyIDUuM2MxMS44IDYuMSAyNi4zIDEuNSAzMi4zLTEwLjNzMS41LTI2LjMtMTAuMy0zMi4zYy0xMy4yLTYuOC0yOC4yLTEwLjctNDQtMTAuN2MtNTMgMC05NiA0My05NiA5NnM0MyA5NiA5NiA5NmMxOS42IDAgMzcuNS02LjEgNTIuOC0xNS44YzctNC40IDExLjItMTIuMSAxMS4yLTIwLjNsMC01MS45YzAtMTMuMy0xMC43LTI0LTI0LTI0bC0zMiAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0bDggMCAwIDEzLjFjLTUuMyAxLjktMTAuNiAyLjktMTYgMi45Yy0yNi41IDAtNDgtMjEuNS00OC00OHptMTkyLTcyYzAtMTMuMy0xMC43LTI0LTI0LTI0cy0yNCAxMC43LTI0IDI0bDAgMTQ0YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC0xNDR6bTU2LTI0Yy0xMy4zIDAtMjQgMTAuNy0yNCAyNGwwIDgwIDAgNjRjMCAxMy4zIDEwLjcgMjQgMjQgMjRzMjQtMTAuNyAyNC0yNGwwLTQwIDQwIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRsLTQwIDAgMC0zMiA2NCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0bC04OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Gif: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM80 256c0 53 43 96 96 96c19.6 0 37.5-6.1 52.8-15.8c7-4.4 11.2-12.1 11.2-20.3l0-51.9c0-13.3-10.7-24-24-24l-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 13.1c-5.3 1.9-10.6 2.9-16 2.9c-26.5 0-48-21.5-48-48s21.5-48 48-48c8 0 15.4 1.9 22 5.3c11.8 6.1 26.3 1.5 32.3-10.3s1.5-26.3-10.3-32.3c-13.2-6.8-28.2-10.7-44-10.7c-53 0-96 43-96 96zm192-72l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 0l0 80 0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-32 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0c-13.3 0-24 10.7-24 24z" />
            <path d="M128 256c0-26.5 21.5-48 48-48c8 0 15.4 1.9 22 5.3c11.8 6.1 26.3 1.5 32.3-10.3s1.5-26.3-10.3-32.3c-13.2-6.8-28.2-10.7-44-10.7c-53 0-96 43-96 96s43 96 96 96c19.6 0 37.5-6.1 52.8-15.8c7-4.4 11.2-12.1 11.2-20.3l0-51.9c0-13.3-10.7-24-24-24l-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 13.1c-5.3 1.9-10.6 2.9-16 2.9c-26.5 0-48-21.5-48-48zm192-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144zm56-24c-13.3 0-24 10.7-24 24l0 80 0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-32 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0z" />
    </Icon>
);

export default Gif;