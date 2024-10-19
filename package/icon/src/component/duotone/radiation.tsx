
import { Icon, generic } from "../../index";

/**
 * A component that renders the `radiation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radiation?s=duotone radiation}
 * @preview ![radiation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDggMjU2YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAgLTk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMjU2YzAtMjkuNiAxNi4xLTU1LjUgNDAtNjkuM0wxNDQgNjJjLTguOC0xNS4zLTI4LjYtMjAuNy00Mi43LTEwQzQ3LjggOTIuNyAxMC43IDE1NCAyIDIyNC4xQy0uMiAyNDEuNiAxNC4zIDI1NiAzMiAyNTZsMTQ0IDB6bTQwIDY5LjNMMTQ0IDQ1MC4xYy04LjggMTUuMy0zLjcgMzUuMSAxMi42IDQxLjljMzAuNiAxMi45IDY0LjIgMjAgOTkuNCAyMHM2OC45LTcuMSA5OS40LTIwYzE2LjMtNi45IDIxLjQtMjYuNiAxMi42LTQxLjlMMjk2IDMyNS4zYy0xMS44IDYuOC0yNS40IDEwLjctNDAgMTAuN3MtMjguMi0zLjktNDAtMTAuN3pNMzM2IDI1NmwxNDQgMGMxNy43IDAgMzIuMi0xNC40IDMwLTMxLjlDNTAxLjMgMTU0IDQ2NC4yIDkyLjcgNDEwLjcgNTJjLTE0LjEtMTAuNy0zMy44LTUuMy00Mi43IDEwTDI5NiAxODYuN2MyMy45IDEzLjggNDAgMzkuNyA0MCA2OS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Radiation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M208 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M176 256c0-29.6 16.1-55.5 40-69.3L144 62c-8.8-15.3-28.6-20.7-42.7-10C47.8 92.7 10.7 154 2 224.1C-.2 241.6 14.3 256 32 256l144 0zm40 69.3L144 450.1c-8.8 15.3-3.7 35.1 12.6 41.9c30.6 12.9 64.2 20 99.4 20s68.9-7.1 99.4-20c16.3-6.9 21.4-26.6 12.6-41.9L296 325.3c-11.8 6.8-25.4 10.7-40 10.7s-28.2-3.9-40-10.7zM336 256l144 0c17.7 0 32.2-14.4 30-31.9C501.3 154 464.2 92.7 410.7 52c-14.1-10.7-33.8-5.3-42.7 10L296 186.7c23.9 13.8 40 39.7 40 69.3z" />
    </Icon>
);

export default Radiation;