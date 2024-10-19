
import { Icon, generic } from "../../index";

/**
 * A component that renders the `glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=sharp-duotone-solid glass}
 * @preview ![glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNSA2NCA0MCA1MTJsMzA0IDBMMzc5IDY0bDUtNjRMMzE5LjggMCA2NC4yIDAgMCAwek02OS4yIDY0bDI0NS42IDBjLTEuNyAyMS4zLTMuMyA0Mi43LTUgNjRsLTI1IDMyMEw5OS4yIDQ0OGwtMjUtMzIwLTUtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik03NC4yIDEyOGwyNSAzMjAgMTg1LjYgMCAyNS0zMjBMNzQuMiAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L5 64 40 512l304 0L379 64l5-64L319.8 0 64.2 0 0 0zM69.2 64l245.6 0c-1.7 21.3-3.3 42.7-5 64l-25 320L99.2 448l-25-320-5-64z" />
            <path d="M74.2 128l25 320 185.6 0 25-320L74.2 128z" />
    </Icon>
);

export default Glass;