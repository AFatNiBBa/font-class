
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-falling` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-falling?s=duotone person-falling}
 * @preview ![person-falling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA4MGE0OCA0OCAwIDEgMCA5NiAwQTQ4IDQ4IDAgMSAwIDY0IDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgOS44YzAgMzktMjMuNyA3NC01OS45IDg4LjRDMTM1LjYgMTU0LjUgOTYgMjEzIDk2IDI3OC4yTDk2IDM1MmMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtNzMuOGMwLTEwIDEuNi0xOS44IDQuNS0yOUwzMjUuMSA0OTcuNGM5LjYgMTQuOCAyOS40IDE5LjEgNDQuMyA5LjVzMTkuMS0yOS40IDkuNS00NC4zTDI4Ni42IDMyMGwxLjQgMCA4MCAwIDM4LjQgNTEuMmMxMC42IDE0LjEgMzAuNyAxNyA0NC44IDYuNHMxNy0zMC43IDYuNC00NC44bC00My4yLTU3LjZDNDA1LjMgMjYzLjEgMzkxLjEgMjU2IDM3NiAyNTZsLTcxLjUgMC01Ni44LTgwLjItLjItLjNjNDQuNy0yOSA3Mi41LTc5IDcyLjUtMTMzLjZsMC05Ljh6Ii8+PC9zdmc+|width=32|height=32)
 */
const PersonFalling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 80a48 48 0 1 0 96 0A48 48 0 1 0 64 80z" />
            <path d="M320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 9.8c0 39-23.7 74-59.9 88.4C135.6 154.5 96 213 96 278.2L96 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-73.8c0-10 1.6-19.8 4.5-29L325.1 497.4c9.6 14.8 29.4 19.1 44.3 9.5s19.1-29.4 9.5-44.3L286.6 320l1.4 0 80 0 38.4 51.2c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8l-43.2-57.6C405.3 263.1 391.1 256 376 256l-71.5 0-56.8-80.2-.2-.3c44.7-29 72.5-79 72.5-133.6l0-9.8z" />
    </Icon>
);

export default PersonFalling;