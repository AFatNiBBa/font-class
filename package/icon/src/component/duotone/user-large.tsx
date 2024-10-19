
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-large` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=duotone user-large}
 * @preview ![user-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgMTQ0YTE0NCAxNDQgMCAxIDAgMjg4IDAgMTQ0IDE0NCAwIDEgMCAtMjg4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDQ4MS4zQzAgMzkyLjIgNzIuMiAzMjAgMTYxLjMgMzIwSDM1MC43QzQzOS44IDMyMCA1MTIgMzkyLjIgNTEyIDQ4MS4zYzAgMTctMTMuOCAzMC43LTMwLjcgMzAuN0gzMC43QzEzLjggNTEyIDAgNDk4LjIgMCA0ODEuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const UserLarge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 144a144 144 0 1 0 288 0 144 144 0 1 0 -288 0z" />
            <path d="M0 481.3C0 392.2 72.2 320 161.3 320H350.7C439.8 320 512 392.2 512 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3z" />
    </Icon>
);

export default UserLarge;