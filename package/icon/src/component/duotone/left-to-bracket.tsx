
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-to-bracket` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-bracket?s=duotone left-to-bracket}
 * @preview ![left-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDM4NGMwIDUzIDQzIDk2IDk2IDk2bDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTY0IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtMjU2YzAtMTcuNyAxNC4zLTMyIDMyLTMybDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMOTYgMzJDNDMgMzIgMCA3NSAwIDEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3MS4zIDI4My4zTDI5NC4xIDQwNi4xYzYuNCA2LjQgMTUgOS45IDI0IDkuOWMxOC43IDAgMzMuOS0xNS4yIDMzLjktMzMuOWwwLTYyLjEgMTI4IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC02NGMwLTE3LjctMTQuMy0zMi0zMi0zMmwtMTI4IDAgMC02Mi4xYzAtMTguNy0xNS4yLTMzLjktMzMuOS0zMy45Yy05IDAtMTcuNiAzLjYtMjQgOS45TDE3MS4zIDIyOC43Yy03LjIgNy4yLTExLjMgMTcuMS0xMS4zIDI3LjNzNC4xIDIwLjEgMTEuMyAyNy4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LeftToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128z" />
            <path d="M171.3 283.3L294.1 406.1c6.4 6.4 15 9.9 24 9.9c18.7 0 33.9-15.2 33.9-33.9l0-62.1 128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0 0-62.1c0-18.7-15.2-33.9-33.9-33.9c-9 0-17.6 3.6-24 9.9L171.3 228.7c-7.2 7.2-11.3 17.1-11.3 27.3s4.1 20.1 11.3 27.3z" />
    </Icon>
);

export default LeftToBracket;