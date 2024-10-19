
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-two` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two?s=duotone clock-two}
 * @preview ![clock-two](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTIzMiAxMjBjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDkxLjJMMzM4LjcgMTcyYzExLTcuNCAyNS45LTQuNCAzMy4zIDYuN2MyLjcgNC4xIDQgOC43IDQgMTMuM2MwIDcuOC0zLjggMTUuNC0xMC43IDIwbC05NiA2NGMtNy40IDQuOS0xNi44IDUuNC0yNC42IDEuMlMyMzIgMjY0LjkgMjMyIDI1NmwwLTEzNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA5NmMxMy4zIDAgMjQgMTAuNyAyNCAyNGwwIDkxLjJMMzM4LjcgMTcyYzExLTcuNCAyNS45LTQuNCAzMy4zIDYuN3M0LjQgMjUuOS02LjcgMzMuM2wtOTYgNjRjLTcuNCA0LjktMTYuOCA1LjQtMjQuNiAxLjJTMjMyIDI2NC45IDIzMiAyNTZsMC0xMzZjMC0xMy4zIDEwLjctMjQgMjQtMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockTwo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 91.2L338.7 172c11-7.4 25.9-4.4 33.3 6.7c2.7 4.1 4 8.7 4 13.3c0 7.8-3.8 15.4-10.7 20l-96 64c-7.4 4.9-16.8 5.4-24.6 1.2S232 264.9 232 256l0-136z" />
            <path d="M256 96c13.3 0 24 10.7 24 24l0 91.2L338.7 172c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3l-96 64c-7.4 4.9-16.8 5.4-24.6 1.2S232 264.9 232 256l0-136c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ClockTwo;