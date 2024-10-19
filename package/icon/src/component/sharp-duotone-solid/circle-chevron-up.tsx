
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=sharp-duotone-solid circle-chevron-up}
 * @preview ![circle-chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTExOC4xIDMyYzUuNy01LjcgMTEuMy0xMS4zIDE3LTE3YzM0LjctMzQuNyA2OS4zLTY5LjMgMTA0LTEwNGwxNy0xNyAxNyAxN2MzNC43IDM0LjcgNjkuMyA2OS4zIDEwNCAxMDRjNS43IDUuNyAxMS4zIDExLjMgMTcgMTdMMzYwIDMyMS45Yy01LjctNS43LTExLjMtMTEuMy0xNy0xN2MtMjktMjktNTgtNTgtODctODdjLTI5IDI5LTU4IDU4LTg3IDg3Yy01LjcgNS43LTExLjMgMTEuMy0xNyAxN2MtMTEuMy0xMS4zLTIyLjYtMjIuNi0zMy45LTMzLjl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMTUwLjFsMTcgMTdMMzc3IDI3MWwxNyAxN0wzNjAgMzIxLjlsLTE3LTE3LTg3LTg3LTg3IDg3LTE3IDE3TDExOC4xIDI4OGwxNy0xN0wyMzkgMTY3bDE3LTE3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm118.1 32c5.7-5.7 11.3-11.3 17-17c34.7-34.7 69.3-69.3 104-104l17-17 17 17c34.7 34.7 69.3 69.3 104 104c5.7 5.7 11.3 11.3 17 17L360 321.9c-5.7-5.7-11.3-11.3-17-17c-29-29-58-58-87-87c-29 29-58 58-87 87c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9z" />
            <path d="M256 150.1l17 17L377 271l17 17L360 321.9l-17-17-87-87-87 87-17 17L118.1 288l17-17L239 167l17-17z" />
    </Icon>
);

export default CircleChevronUp;