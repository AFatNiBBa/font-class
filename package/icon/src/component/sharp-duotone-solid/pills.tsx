
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pills` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pills?s=sharp-duotone-solid pills}
 * @preview ![pills](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE0NGwwIDgwIDAgMzIgMzIgMCAxNjAgMCAzMiAwIDAtMzIgMC04MGMwLTYxLjktNTAuMS0xMTItMTEyLTExMlMwIDgyLjEgMCAxNDR6TTI1NiAzMjBjMCA4OC40IDcxLjYgMTYwIDE2MCAxNjBjMzguNCAwIDczLjctMTMuNSAxMDEuMy0zNi4xTDI5Mi4xIDIxOC43QzI2OS41IDI0Ni4zIDI1NiAyODEuNiAyNTYgMzIwem01OC43LTEyMy45TDUzOS45IDQyMS4zQzU2Mi41IDM5My43IDU3NiAzNTguNCA1NzYgMzIwYzAtODguNC03MS42LTE2MC0xNjAtMTYwYy0zOC40IDAtNzMuNyAxMy41LTEwMS4zIDM2LjF6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAyNTZMMCAyNTZsMCAzMiAwIDgwYzAgNjEuOSA1MC4xIDExMiAxMTIgMTEyczExMi01MC4xIDExMi0xMTJsMC04MCAwLTMyLTMyIDBMMzIgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pills: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 80 0 32 32 0 160 0 32 0 0-32 0-80c0-61.9-50.1-112-112-112S0 82.1 0 144zM256 320c0 88.4 71.6 160 160 160c38.4 0 73.7-13.5 101.3-36.1L292.1 218.7C269.5 246.3 256 281.6 256 320zm58.7-123.9L539.9 421.3C562.5 393.7 576 358.4 576 320c0-88.4-71.6-160-160-160c-38.4 0-73.7 13.5-101.3 36.1z" />
            <path d="M32 256L0 256l0 32 0 80c0 61.9 50.1 112 112 112s112-50.1 112-112l0-80 0-32-32 0L32 256z" />
    </Icon>
);

export default Pills;