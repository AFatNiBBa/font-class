
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=duotone up-to-line}
 * @preview ![up-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgNDYuMyAxNC4zIDMyIDMyIDMybDMyMCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDMyIDk2QzE0LjMgOTYgMCA4MS43IDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMTkuMyAxMzkuM0wzNDIuMSAyNjIuMWM2LjQgNi40IDkuOSAxNSA5LjkgMjRjMCAxOC43LTE1LjIgMzMuOS0zMy45IDMzLjlMMjU2IDMyMGwwIDEyOGMwIDE3LjctMTQuMyAzMi0zMiAzMmwtNjQgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC0xMjgtNjIuMSAwQzQ3LjIgMzIwIDMyIDMwNC44IDMyIDI4Ni4xYzAtOSAzLjYtMTcuNiA5LjktMjRMMTY0LjcgMTM5LjNjNy4yLTcuMiAxNy4xLTExLjMgMjcuMy0xMS4zczIwLjEgNC4xIDI3LjMgMTEuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 46.3 14.3 32 32 32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64z" />
            <path d="M219.3 139.3L342.1 262.1c6.4 6.4 9.9 15 9.9 24c0 18.7-15.2 33.9-33.9 33.9L256 320l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128-62.1 0C47.2 320 32 304.8 32 286.1c0-9 3.6-17.6 9.9-24L164.7 139.3c7.2-7.2 17.1-11.3 27.3-11.3s20.1 4.1 27.3 11.3z" />
    </Icon>
);

export default UpToLine;