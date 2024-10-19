
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=duotone down-left}
 * @preview ![down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDIuNiAyMDkuNEwyNzYuNyA3NS4zQzI4My45IDY4LjEgMjkzLjggNjQgMzA0IDY0czIwLjEgNC4xIDI3LjMgMTEuM2w0MS40IDQxLjRjNy4yIDcuMiAxMS4zIDE3LjEgMTEuMyAyNy4zcy00LjEgMjAuMS0xMS4zIDI3LjNMMjM4LjYgMzA1LjRjLTMyLTMyLTY0LTY0LTk2LTk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDggNDMySDI4OGMxMi45IDAgMjQuNi03LjggMjkuNi0xOS44czIuMi0yNS43LTYuOS0zNC45bC0yNDAtMjQwYy05LjItOS4yLTIyLjktMTEuOS0zNC45LTYuOXMtMTkuOCAxNi42LTE5LjggMjkuNlY0MDBjMCAxNy43IDE0LjMgMzIgMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M142.6 209.4L276.7 75.3C283.9 68.1 293.8 64 304 64s20.1 4.1 27.3 11.3l41.4 41.4c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L238.6 305.4c-32-32-64-64-96-96z" />
            <path d="M48 432H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-240-240c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6V400c0 17.7 14.3 32 32 32z" />
    </Icon>
);

export default DownLeft;