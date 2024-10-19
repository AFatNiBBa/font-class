
import { Icon, generic } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=duotone refrigerator}
 * @preview ![refrigerator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwwIDMyIDI4OCAwIDAtMzJMMCAxNjB6bTMyMCAwbDAgMzIgNjQgMCAwLTMyLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAwQzQzIDAgMCA0MyAwIDk2bDAgNjQgMjg4IDAgMC00OGMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2bDAgNDggNjQgMCAwLTY0YzAtNTMtNDMtOTYtOTYtOTZMOTYgMHpNMzg0IDE5MmwtNjQgMCAwIDE3NmMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTE3NkwwIDE5MiAwIDQ0OGMwIDM1LjMgMjguNyA2NCA2NCA2NGwyNTYgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Refrigerator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 32 288 0 0-32L0 160zm320 0l0 32 64 0 0-32-64 0z" />
            <path d="M96 0C43 0 0 43 0 96l0 64 288 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 64 0 0-64c0-53-43-96-96-96L96 0zM384 192l-64 0 0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176L0 192 0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256z" />
    </Icon>
);

export default Refrigerator;