
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-z-a` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-z-a?s=duotone arrow-up-z-a}
 * @preview ![arrow-up-z-a](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA5NkgzNzAuNzVMMjk3LjM3NSAxNjkuMzc1QzI4OC4yMTkgMTc4LjUzMSAyODUuNDg1IDE5Mi4yODEgMjkwLjQzOCAyMDQuMjVTMzA3LjA2MyAyMjQgMzIwIDIyNEg0NDhDNDY1LjY3MiAyMjQgNDgwIDIwOS42ODggNDgwIDE5MlM0NjUuNjcyIDE2MCA0NDggMTYwSDM5Ny4yNUw0NzAuNjI1IDg2LjYyNUM0NzkuNzgyIDc3LjQ2OSA0ODIuNTE2IDYzLjcxOSA0NzcuNTYzIDUxLjc1UzQ2MC45MzggMzIgNDQ4IDMySDMyMEMzMDIuMzI5IDMyIDI4OCA0Ni4zMTIgMjg4IDY0UzMwMi4zMjkgOTYgMzIwIDk2Wk00OTIuNjE0IDQzMy4zMTJMNDEyLjYyMSAyNzIuMzU5QzQwMS43OCAyNTAuNTQ3IDM2Ni4yMjEgMjUwLjU0NyAzNTUuMzc5IDI3Mi4zNTlMMjc1LjM4NyA0MzMuMzEyQzI2Ny40ODEgNDQ5LjIxOSAyNzMuODg3IDQ2OC41NTEgMjg5LjY5OCA0NzYuNTA0QzMwNS41NzEgNDg0LjQyNiAzMjQuNzQxIDQ3Ny45OCAzMzIuNjMxIDQ2Mi4xMDVMMzM5Ljc4NiA0NDcuNzExSDQyOC4yMTVMNDM1LjM3IDQ2Mi4xMDVDNDQxLjU0MyA0NzQuNTMxIDQ1OS4zNDQgNDg1Ljk3NyA0NzguMzAzIDQ3Ni41MDRDNDk0LjExNCA0NjguNTUxIDUwMC41MiA0NDkuMjE5IDQ5Mi42MTQgNDMzLjMxMlpNMzY3Ljc4NCAzOTEuMzc1TDM4NCAzNTguNzQ2TDQwMC4yMTcgMzkxLjM3NUgzNjcuNzg0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMzkuNTkxIDEzOC4wMzlDMjUxLjUyNyAxNTEuMDg2IDI1MC42NTIgMTcxLjM1MiAyMzcuNjIzIDE4My4zMDVDMjMxLjQ4MiAxODguOTM0IDIyMy43MzIgMTkxLjcxOSAyMTYuMDEzIDE5MS43MTlDMjA3LjM0MSAxOTEuNzE5IDE5OC43MTYgMTg4LjIxNSAxOTIuNDA0IDE4MS4zMzJMMTYwIDE0NS45MzhWNDQ3Ljk2OUMxNjAgNDY1LjY3MiAxNDUuNjcxIDQ4MCAxMjggNDgwUzk2IDQ2NS42NzIgOTYgNDQ3Ljk2OVYxNDUuOTM4TDYzLjU5NSAxODEuMzMyQzUxLjY0MiAxOTQuMzQ0IDMxLjM5MiAxOTUuMjUgMTguMzc3IDE4My4zMDVDNS4zNDcgMTcxLjM1MiA0LjQ3MiAxNTEuMDg2IDE2LjQwOCAxMzguMDM5TDEwNC40MDYgNDEuOTQ1QzExNi41MzEgMjguNjg0IDEzOS40NjggMjguNjg0IDE1MS41OTMgNDEuOTQ1TDIzOS41OTEgMTM4LjAzOVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowUpZA(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M320 96H370.75L297.375 169.375C288.219 178.531 285.485 192.281 290.438 204.25S307.063 224 320 224H448C465.672 224 480 209.688 480 192S465.672 160 448 160H397.25L470.625 86.625C479.782 77.469 482.516 63.719 477.563 51.75S460.938 32 448 32H320C302.329 32 288 46.312 288 64S302.329 96 320 96ZM492.614 433.312L412.621 272.359C401.78 250.547 366.221 250.547 355.379 272.359L275.387 433.312C267.481 449.219 273.887 468.551 289.698 476.504C305.571 484.426 324.741 477.98 332.631 462.105L339.786 447.711H428.215L435.37 462.105C441.543 474.531 459.344 485.977 478.303 476.504C494.114 468.551 500.52 449.219 492.614 433.312ZM367.784 391.375L384 358.746L400.217 391.375H367.784Z" />
            <path d="M239.591 138.039C251.527 151.086 250.652 171.352 237.623 183.305C231.482 188.934 223.732 191.719 216.013 191.719C207.341 191.719 198.716 188.215 192.404 181.332L160 145.938V447.969C160 465.672 145.671 480 128 480S96 465.672 96 447.969V145.938L63.595 181.332C51.642 194.344 31.392 195.25 18.377 183.305C5.347 171.352 4.472 151.086 16.408 138.039L104.406 41.945C116.531 28.684 139.468 28.684 151.593 41.945L239.591 138.039Z" />
        </Icon>
    </>
}