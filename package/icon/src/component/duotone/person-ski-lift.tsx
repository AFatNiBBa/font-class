
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-ski-lift` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-ski-lift?s=duotone person-ski-lift}
 * @preview ![person-ski-lift](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTExMiAxMjcuOTE4QzEzOC41MSAxMjcuOTE4IDE2MCAxMDYuNDQxIDE2MCA3OS45NDlTMTM4LjUxIDMxLjk4IDExMiAzMS45OFM2NCA1My40NTcgNjQgNzkuOTQ5Uzg1LjQ5MSAxMjcuOTE4IDExMiAxMjcuOTE4Wk0yNTYgMEgyMjRWMTgzLjg4M0wyNTYgMTc1Ljg4N1YwWk0xOTEuNTUxIDM4MS4xNTZIMTkxLjZDMjA0LjE5MiAzNzYuOTYxIDIxMC45OTggMzYzLjM1OSAyMDYuODAxIDM1MC43NzVTMTg4Ljk5MyAzMzEuMzkxIDE3Ni40MDEgMzM1LjU4NkwxNTggMzQxLjc4MUMxMzguODY5IDM0OC4xMzUgMTE3Ljk5OCAzMzkuMjcgMTA5LjMwMSAzMjEuMDk0TDQ1LjcgMTg4LjE4QzM5Ljk4NSAxNzYuMjE3IDI1LjY0NyAxNzEuMTQ4IDEzLjY3NiAxNzYuODYxUy0zLjM2NyAxOTYuOTAyIDIuMzUgMjA4Ljg2N0w2NiAzNDEuNzgxQzgwLjcwNyAzNzIuMzA3IDExMS42IDM5MS43MjMgMTQ1LjUgMzkxLjc1QzE1OC4wNTEgMzkxLjc1IDE2Mi40NSAzOTAuODUgMTkxLjU1MSAzODEuMTU2Wk00ODggMjg3LjgxNkM0NzQuNzYyIDI4Ny44NTQgNDY0LjAzOSAyOTguNTcgNDY0IDMxMS44MDFDNDYzLjk1MiAzMjUuNzQ0IDQ1NS4yNyAzMzguMTk5IDQ0Mi4yIDM0My4wOEwxMTEuNjUxIDQ2NS4yMDNDOTkuMDQ3IDQ2OS4zMDMgOTIuMTU3IDQ4Mi44MzggOTYuMjYgNDk1LjQzNFMxMTMuOTA3IDUxNC45MTYgMTI2LjUxIDUxMC44MTRDMTI3LjA5OCA1MTAuNjIzIDEyNy42NzggNTEwLjQxIDEyOC4yNSA1MTAuMTc0TDQ1OC43NSAzODguMTUyQzQ5MC42NjYgMzc2LjI1MiA1MTEuODczIDM0NS44NDQgNTEyIDMxMS44MDFDNTEyIDI5OC41NTUgNTAxLjI1NCAyODcuODE2IDQ4OCAyODcuODE2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMDcuNjA1IDIyMi44ODFDMjk5Ljg1MyAyMTYuNzU4IDI4OS42ODUgMjE0LjYxMyAyODAuMTIyIDIxNy4wODRMMjExLjg2NCAyMzQuMDc0TDE4Ny43OCAxODAuNDA4QzE3Ni45MDcgMTU2LjIzNCAxNDguNDk1IDE0NS40NTEgMTI0LjMyMSAxNTYuMzI0QzEwMC4xNDYgMTY3LjE5NyA4OS4zNjIgMTk1LjYwNyAxMDAuMjM1IDIxOS43ODNMMTI4LjA2OSAyODcuODRDMTM1Ljk2NCAzMDYuOTI4IDE1MC43NTUgMzE1LjQyMiAxNjcuODQzIDMxMS4xMjVMMjU1Ljk4NyAyODkuMDM5VjQxMi4xNkwzMTkuOTQ2IDM4OC40NzVWMjQ4LjA2NEMzMTkuOTc2IDIzOC4yMDcgMzE1LjQxMyAyMjguODk2IDMwNy42MDUgMjIyLjg4MVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function PersonSkiLift(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M112 127.918C138.51 127.918 160 106.441 160 79.949S138.51 31.98 112 31.98S64 53.457 64 79.949S85.491 127.918 112 127.918ZM256 0H224V183.883L256 175.887V0ZM191.551 381.156H191.6C204.192 376.961 210.998 363.359 206.801 350.775S188.993 331.391 176.401 335.586L158 341.781C138.869 348.135 117.998 339.27 109.301 321.094L45.7 188.18C39.985 176.217 25.647 171.148 13.676 176.861S-3.367 196.902 2.35 208.867L66 341.781C80.707 372.307 111.6 391.723 145.5 391.75C158.051 391.75 162.45 390.85 191.551 381.156ZM488 287.816C474.762 287.854 464.039 298.57 464 311.801C463.952 325.744 455.27 338.199 442.2 343.08L111.651 465.203C99.047 469.303 92.157 482.838 96.26 495.434S113.907 514.916 126.51 510.814C127.098 510.623 127.678 510.41 128.25 510.174L458.75 388.152C490.666 376.252 511.873 345.844 512 311.801C512 298.555 501.254 287.816 488 287.816Z" />
            <path d="M307.605 222.881C299.853 216.758 289.685 214.613 280.122 217.084L211.864 234.074L187.78 180.408C176.907 156.234 148.495 145.451 124.321 156.324C100.146 167.197 89.362 195.607 100.235 219.783L128.069 287.84C135.964 306.928 150.755 315.422 167.843 311.125L255.987 289.039V412.16L319.946 388.475V248.064C319.976 238.207 315.413 228.896 307.605 222.881Z" />
        </Icon>
    </>
}