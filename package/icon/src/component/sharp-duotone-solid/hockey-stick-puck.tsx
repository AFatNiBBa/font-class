
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hockey-stick-puck` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-stick-puck?s=sharp-duotone-solid hockey-stick-puck}
 * @preview ![hockey-stick-puck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1Mmw2NCAwIDAgMTYwTDAgNTEyIDAgMzUyem05NiAwYzUyLjEgMCAxMDQuMiAwIDE1Ni4yIDBMNDE5LjQgMTcuN2w1Ny4yIDI4LjYtMjI0IDQ0OEwyNDMuOCA1MTIgMjI0IDUxMmwtNjQgMC0zMiAwYy0xMC43IDAtMjEuMyAwLTMyIDBsMC0zMiAwLTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDM1MmwtMzIgMCAwIDE2MCAzMiAwIDAtMTYwem01NDQgNjRsLTI1NiAwIDAgOTYgMjU2IDAgMC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const HockeyStickPuck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l64 0 0 160L0 512 0 352zm96 0c52.1 0 104.2 0 156.2 0L419.4 17.7l57.2 28.6-224 448L243.8 512 224 512l-64 0-32 0c-10.7 0-21.3 0-32 0l0-32 0-128z" />
            <path d="M96 352l-32 0 0 160 32 0 0-160zm544 64l-256 0 0 96 256 0 0-96z" />
    </Icon>
);

export default HockeyStickPuck;