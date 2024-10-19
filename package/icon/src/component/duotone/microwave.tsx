
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microwave` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=duotone microwave}
 * @preview ![microwave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxNTJsMCAxNzZjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMjcyIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRsMC0xNzZjMC0xMy4zLTEwLjctMjQtMjQtMjRsLTI3MiAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJsNDQ4IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAyODhjMCAzNS4zLTI4LjcgNjQtNjQgNjRjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsLTMyMCAwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDk2em05NiA1NmwwIDE3NmMwIDEzLjMgMTAuNyAyNCAyNCAyNGwyNzIgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTE3NmMwLTEzLjMtMTAuNy0yNC0yNC0yNGwtMjcyIDBjLTEzLjMgMC0yNCAxMC43LTI0IDI0em00MDAtNDBjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDIyNGMwIDguOCA3LjIgMTYgMTYgMTZzMTYtNy4yIDE2LTE2bDAtMjI0YzAtOC44LTcuMi0xNi0xNi0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 152l0 176c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24l0-176c0-13.3-10.7-24-24-24l-272 0c-13.3 0-24 10.7-24 24z" />
            <path d="M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l-320 0c0 17.7-14.3 32-32 32s-32-14.3-32-32c-35.3 0-64-28.7-64-64L0 96zm96 56l0 176c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24l0-176c0-13.3-10.7-24-24-24l-272 0c-13.3 0-24 10.7-24 24zm400-40c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default Microwave;