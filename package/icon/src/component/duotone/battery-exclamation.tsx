
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-exclamation?s=duotone battery-exclamation}
 * @preview ![battery-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3NkwwIDMzNmMwIDQ0LjIgMzUuOCA4MCA4MCA4MGwxMTguNyAwYy00LjMtOS44LTYuNy0yMC42LTYuNy0zMnMyLjQtMjIuMiA2LjctMzJMODAgMzUyYy04LjggMC0xNi03LjItMTYtMTZsMC0xNjBjMC04LjggNy4yLTE2IDE2LTE2bDEyOCAwIDAtNjRMODAgOTZDMzUuOCA5NiAwIDEzMS44IDAgMTc2ek0zMzYgOTZsMCA2NCAxMjggMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAxNjBjMCA4LjgtNy4yIDE2LTE2IDE2bC0xMTguNyAwYzQuMyA5LjggNi43IDIwLjYgNi43IDMycy0yLjQgMjIuMi02LjcgMzJMNDY0IDQxNmM0NC4yIDAgODAtMzUuOCA4MC04MGwwLTE2YzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtNjRjMC0xNy43LTE0LjMtMzItMzItMzJsMC0xNmMwLTQ0LjItMzUuOC04MC04MC04MEwzMzYgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOTYgMTIwYzAtMTMuMy0xMC43LTI0LTI0LTI0cy0yNCAxMC43LTI0IDI0bDAgMTc2YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC0xNzZ6TTI3MiA0MTZhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BatteryExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 176L0 336c0 44.2 35.8 80 80 80l118.7 0c-4.3-9.8-6.7-20.6-6.7-32s2.4-22.2 6.7-32L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l128 0 0-64L80 96C35.8 96 0 131.8 0 176zM336 96l0 64 128 0c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16l-118.7 0c4.3 9.8 6.7 20.6 6.7 32s-2.4 22.2-6.7 32L464 416c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L336 96z" />
            <path d="M296 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176zM272 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default BatteryExclamation;