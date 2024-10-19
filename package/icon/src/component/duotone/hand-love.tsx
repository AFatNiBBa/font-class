
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-love` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-love?s=duotone hand-love}
 * @preview ![hand-love](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMSAyODQuNGMtMTUuMiAxNi0xNC42IDQxLjMgMS40IDU2LjZMMTI0LjggNDQ4YzQzLjEgNDEuMSAxMDAuNCA2NCAxNjAgNjRsMTkuMiAwYzk3LjIgMCAxNzYtNzguOCAxNzYtMTc2bDAtMjQwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgMTI4IDAgNjRjMCAzNS4zLTI4LjcgNjQtNjQgNjRjLTE5LjEgMC0zNi4zLTguNC00OC0yMS43Yy0xMS43IDEzLjMtMjguOSAyMS43LTQ4IDIxLjdjLTM1LjMgMC02NC0yOC43LTY0LTY0bDAtOTYgMC0xNjBjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCAzMDRjMCAxLjUgMCAzLjEgLjEgNC42TDY3LjYgMjgzYy0xNi0xNS4yLTQxLjMtMTQuNi01Ni42IDEuNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxNjBjLTE3LjcgMC0zMiAxNC4zLTMyIDMybDAgOTZjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTk2YzAtMTcuNy0xNC4zLTMyLTMyLTMyem05NiAzMmMtMTcuNyAwLTMyIDE0LjMtMzIgMzJsMCA2NGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtNjRjMC0xNy43LTE0LjMtMzItMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HandLove: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M11 284.4c-15.2 16-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-240c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128 0 64c0 35.3-28.7 64-64 64c-19.1 0-36.3-8.4-48-21.7c-11.7 13.3-28.9 21.7-48 21.7c-35.3 0-64-28.7-64-64l0-96 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 304c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4z" />
            <path d="M256 160c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32zm96 32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default HandLove;