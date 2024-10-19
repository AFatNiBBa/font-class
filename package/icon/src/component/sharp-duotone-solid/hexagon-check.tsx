
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-check?s=sharp-duotone-solid hexagon-check}
 * @preview ![hexagon-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwxMjggMzJsMjU2IDBMNTEyIDI1NiAzODQgNDgwbC0yNTYgMEwwIDI1NnptMTI2LjEgMGwxIDFjNS4zIDUuMyAxMC43IDEwLjcgMTYgMTZjMjEuMyAyMS4zIDQyLjcgNDIuNyA2NCA2NGwxNyAxNyAxNy0xN0wzNjkgMjA5bDE2LTE2Yy4zLS4zIC42LS42IDEtMUwzNTIgMTU4LjFjLS4zIC4zLS42IC42LTEgMWMtNS4zIDUuMy0xMC43IDEwLjctMTYgMTZsLTExMSAxMTEtNDctNDctMTYtMTYtMS0xTDEyNi4xIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NSAxOTNMMjQxIDMzN2wtMTcgMTctMTctMTctODAtODBMMTYxIDIyM2w2MyA2M0wzNTEgMTU5IDM4NSAxOTN6Ii8+PC9zdmc+|width=32|height=32)
 */
const HexagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zm126.1 0l1 1c5.3 5.3 10.7 10.7 16 16c21.3 21.3 42.7 42.7 64 64l17 17 17-17L369 209l16-16c.3-.3 .6-.6 1-1L352 158.1c-.3 .3-.6 .6-1 1c-5.3 5.3-10.7 10.7-16 16l-111 111-47-47-16-16-1-1L126.1 256z" />
            <path d="M385 193L241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193z" />
    </Icon>
);

export default HexagonCheck;