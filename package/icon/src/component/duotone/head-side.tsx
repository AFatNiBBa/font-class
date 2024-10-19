
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side?s=duotone head-side}
 * @preview ![head-side](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNC4yQzAgMTAwLjYgMTAwLjIgMCAyMjQgMGwyNCAwYzk1LjIgMCAxODEuMiA2OS4zIDE5Ny4zIDE2MC4yYzIuMyAxMyA2LjggMjUuNyAxNS4xIDM2bDQyIDUyLjZjNi4yIDcuOCA5LjYgMTcuNCA5LjYgMjcuNGMwIDI0LjItMTkuNiA0My44LTQzLjggNDMuOEw0NDggMzIwbDAgNjRjMCAzNS4zLTI4LjcgNjQtNjQgNjRsLTY0IDAgMCAzMmMwIDE3LjctMTQuMyAzMi0zMiAzMkw5NiA1MTJjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtNzIuN2MwLTE2LjctNi45LTMyLjUtMTcuMS00NS44QzE2LjYgMzIyLjQgMCAyNzQuMSAwIDIyNC4yek0zMjAgMTkyYTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMjAgMTkyYTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HeadSide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224.2C0 100.6 100.2 0 224 0l24 0c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8L448 320l0 64c0 35.3-28.7 64-64 64l-64 0 0 32c0 17.7-14.3 32-32 32L96 512c-17.7 0-32-14.3-32-32l0-72.7c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM320 192a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M320 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default HeadSide;