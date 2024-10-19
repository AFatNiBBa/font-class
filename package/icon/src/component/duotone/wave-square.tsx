
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wave-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=duotone wave-square}
 * @preview ![wave-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggNjRjMC0xNy43IDE0LjMtMzIgMzItMzJsMTYwIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAzNTIgOTYgMCAwLTE2MGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxMjggMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMmwtOTYgMCAwIDE2MGMwIDE3LjctMTQuMyAzMi0zMiAzMmwtMTYwIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtMzUyLTk2IDAgMCAxNjBjMCAxNy43LTE0LjMgMzItMzIgMzJMMzIgMjg4Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDk2IDAgMC0xNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WaveSquare: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 64c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 352 96 0 0-160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 160c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-352-96 0 0 160c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0 0-160z" />
    </Icon>
);

export default WaveSquare;