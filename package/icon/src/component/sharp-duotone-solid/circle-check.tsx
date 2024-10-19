
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=sharp-duotone-solid circle-check}
 * @preview ![circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyNi4xIDBMMTYwIDIyMi4xYy4zIC4zIC42IC42IDEgMWM1LjMgNS4zIDEwLjcgMTAuNyAxNiAxNmMxNS43IDE1LjcgMzEuNCAzMS40IDQ3IDQ3YzM3LTM3IDc0LTc0IDExMS0xMTFjNS4zLTUuMyAxMC43LTEwLjcgMTYtMTZjLjMtLjMgLjYtLjYgMS0xTDM4NS45IDE5MmMtLjMgLjMtLjYgLjYtMSAxbC0xNiAxNkwyNDEgMzM3bC0xNyAxNy0xNy0xNy02NC02NGMtNS4zLTUuMy0xMC43LTEwLjctMTYtMTZsLTEtMXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NSAxOTNMMjQxIDMzN2wtMTcgMTctMTctMTctODAtODBMMTYxIDIyM2w2MyA2M0wzNTEgMTU5IDM4NSAxOTN6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm126.1 0L160 222.1c.3 .3 .6 .6 1 1c5.3 5.3 10.7 10.7 16 16c15.7 15.7 31.4 31.4 47 47c37-37 74-74 111-111c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L385.9 192c-.3 .3-.6 .6-1 1l-16 16L241 337l-17 17-17-17-64-64c-5.3-5.3-10.7-10.7-16-16l-1-1z" />
            <path d="M385 193L241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193z" />
    </Icon>
);

export default CircleCheck;