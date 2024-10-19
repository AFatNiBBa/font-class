
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-z-a` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-z-a?s=duotone arrow-down-z-a}
 * @preview ![arrow-down-z-a](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA5NkgzNzAuNzVMMjk3LjM3NSAxNjkuMzc1QzI4OC4yMTkgMTc4LjUzMSAyODUuNDg1IDE5Mi4yODEgMjkwLjQzOCAyMDQuMjVTMzA3LjA2MyAyMjQgMzIwIDIyNEg0NDhDNDY1LjY3MiAyMjQgNDgwIDIwOS42ODggNDgwIDE5MlM0NjUuNjcyIDE2MCA0NDggMTYwSDM5Ny4yNUw0NzAuNjI1IDg2LjYyNUM0NzkuNzgyIDc3LjQ2OSA0ODIuNTE2IDYzLjcxOSA0NzcuNTYzIDUxLjc1UzQ2MC45MzggMzIgNDQ4IDMySDMyMEMzMDIuMzI5IDMyIDI4OCA0Ni4zMTIgMjg4IDY0UzMwMi4zMjkgOTYgMzIwIDk2Wk00OTIuNjE0IDQzMy4zMTJMNDEyLjYyMSAyNzIuMzU5QzQwMS43OCAyNTAuNTQ3IDM2Ni4yMjEgMjUwLjU0NyAzNTUuMzc5IDI3Mi4zNTlMMjc1LjM4NyA0MzMuMzEyQzI2Ny40ODEgNDQ5LjIxOSAyNzMuODg3IDQ2OC41NTEgMjg5LjY5OCA0NzYuNTA0QzMwNS41NzEgNDg0LjQyNiAzMjQuNzQxIDQ3Ny45OCAzMzIuNjMxIDQ2Mi4xMDVMMzM5Ljc4NiA0NDcuNzExSDQyOC4yMTVMNDM1LjM3IDQ2Mi4xMDVDNDQxLjU0MyA0NzQuNTMxIDQ1OS4zNDQgNDg1Ljk3NyA0NzguMzAzIDQ3Ni41MDRDNDk0LjExNCA0NjguNTUxIDUwMC41MiA0NDkuMjE5IDQ5Mi42MTQgNDMzLjMxMlpNMzY3Ljc4NCAzOTEuMzc1TDM4NCAzNTguNzQ2TDQwMC4yMTcgMzkxLjM3NUgzNjcuNzg0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xNi40MDggMzczLjk2QzQuNDcyIDM2MC45MTMgNS4zNDcgMzQwLjY0NyAxOC4zNzcgMzI4LjY5NEMyNC41MTcgMzIzLjA2NSAzMi4yNjcgMzIwLjI4IDM5Ljk4NiAzMjAuMjhDNDguNjU4IDMyMC4yOCA1Ny4yODMgMzIzLjc4NCA2My41OTUgMzMwLjY2N0w5NiAzNjYuMDYyVjY0LjAzQzk2IDQ2LjMyNyAxMTAuMzI4IDMxLjk5OSAxMjggMzEuOTk5UzE2MCA0Ni4zMjcgMTYwIDY0LjAzVjM2Ni4wNjJMMTkyLjQwNCAzMzAuNjY3QzIwNC4zNTcgMzE3LjY1NSAyMjQuNjA3IDMxNi43NDkgMjM3LjYyMyAzMjguNjk0QzI1MC42NTIgMzQwLjY0NyAyNTEuNTI3IDM2MC45MTMgMjM5LjU5MSAzNzMuOTZMMTUxLjU5MyA0NzAuMDU0QzEzOS40NjggNDgzLjMxNSAxMTYuNTMxIDQ4My4zMTUgMTA0LjQwNiA0NzAuMDU0TDE2LjQwOCAzNzMuOTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowDownZA(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M320 96H370.75L297.375 169.375C288.219 178.531 285.485 192.281 290.438 204.25S307.063 224 320 224H448C465.672 224 480 209.688 480 192S465.672 160 448 160H397.25L470.625 86.625C479.782 77.469 482.516 63.719 477.563 51.75S460.938 32 448 32H320C302.329 32 288 46.312 288 64S302.329 96 320 96ZM492.614 433.312L412.621 272.359C401.78 250.547 366.221 250.547 355.379 272.359L275.387 433.312C267.481 449.219 273.887 468.551 289.698 476.504C305.571 484.426 324.741 477.98 332.631 462.105L339.786 447.711H428.215L435.37 462.105C441.543 474.531 459.344 485.977 478.303 476.504C494.114 468.551 500.52 449.219 492.614 433.312ZM367.784 391.375L384 358.746L400.217 391.375H367.784Z" />
            <path d="M16.408 373.96C4.472 360.913 5.347 340.647 18.377 328.694C24.517 323.065 32.267 320.28 39.986 320.28C48.658 320.28 57.283 323.784 63.595 330.667L96 366.062V64.03C96 46.327 110.328 31.999 128 31.999S160 46.327 160 64.03V366.062L192.404 330.667C204.357 317.655 224.607 316.749 237.623 328.694C250.652 340.647 251.527 360.913 239.591 373.96L151.593 470.054C139.468 483.315 116.531 483.315 104.406 470.054L16.408 373.96Z" />
        </Icon>
    </>
}