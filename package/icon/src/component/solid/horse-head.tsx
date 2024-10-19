
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `horse-head` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horse-head?s=solid horse-head}
 * @preview ![horse-head](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDkuNzg0IDMzMi40NzhMNDM5LjkwNSAxNjguMjA5QzQyNS4wMjkgMTI2Ljk1NCAzODkuNTI2IDk3LjIgMzQ2Ljg5OCA4OC45NDlDMzY0LjkgNzguMzIzIDM5My4yNzYgNTMuMDcgMzgxLjE1MSA2LjY4OUMzNzkuNzc2IDEuNjg4IDM3NC4wMjUgLTEuMzEyIDM2OS4xNSAwLjU2M0wxNjYuODg2IDc2LjE5N0MzNS44NzcgMTIzLjMyOCAwIDIzOC44NDIgMCAzOTguNzM2VjQ3OS45OTZDMCA0OTcuNzQ4IDE0LjI1MSA1MTIgMzIuMDAyIDUxMkgyNjguMjY4QzI5Mi4wMiA1MTIgMzA3LjUyMSA0ODYuOTk3IDI5Ni43NyA0NjUuNzQ0TDI1Ni4wMTcgMzgzLjk4NVYzODMuMjM0QzIxMC4zODkgMzc5LjczNCAxNzEuMzg3IDM1Mi42MDYgMTUxLjc2IDMxMy43MjZDMTUwLjEzNSAzMTAuNjAxIDE1MC43NiAzMDYuNzI1IDE1My4yNiAzMDQuMzVMMTY1LjM4NiAyOTIuMjIzQzE2OS4yNjEgMjg4LjM0OCAxNzYuMDEyIDI4OS41OTggMTc4LjI2MiAyOTQuNzI0QzE5My4xMzggMzI4LjM1MyAyMjYuNTE1IDM1Mi4xMDYgMjY1Ljc2OCAzNTIuMTA2QzI4Mi44OTQgMzUyLjEwNiAyOTguNzcgMzQ2Ljk4IDMxMi41MjEgMzM4Ljg1NEwzNTguNTI0IDQwMi43MzdDMzY0LjUyNSA0MTEuMjM4IDM3NC4yNzUgNDE2LjExMyAzODQuNTI2IDQxNi4xMTNINDM0Ljc3OUM0NDMuMjggNDE2LjExMyA0NTEuNDA1IDQxMi43MzggNDU3LjQwNiA0MDYuNzM3TDUwMi43ODQgMzY2Ljg1OEM1MTEuNjU5IDM1Ny43MzEgNTE0LjQxIDM0NC4yMyA1MDkuNzg0IDMzMi40NzhaTTMyOC4wMjIgMjIzLjk2NUMzMTQuNzcxIDIyMy45NjUgMzA0LjAyMSAyMTMuMjE0IDMwNC4wMjEgMTk5Ljk2MlMzMTQuNzcxIDE3NS45NTkgMzI4LjAyMiAxNzUuOTU5QzM0MS4yNzMgMTc1Ljk1OSAzNTIuMDI0IDE4Ni43MTEgMzUyLjAyNCAxOTkuOTYyUzM0MS4yNzMgMjIzLjk2NSAzMjguMDIyIDIyMy45NjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HorseHead(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M509.784 332.478L439.905 168.209C425.029 126.954 389.526 97.2 346.898 88.949C364.9 78.323 393.276 53.07 381.151 6.689C379.776 1.688 374.025 -1.312 369.15 0.563L166.886 76.197C35.877 123.328 0 238.842 0 398.736V479.996C0 497.748 14.251 512 32.002 512H268.268C292.02 512 307.521 486.997 296.77 465.744L256.017 383.985V383.234C210.389 379.734 171.387 352.606 151.76 313.726C150.135 310.601 150.76 306.725 153.26 304.35L165.386 292.223C169.261 288.348 176.012 289.598 178.262 294.724C193.138 328.353 226.515 352.106 265.768 352.106C282.894 352.106 298.77 346.98 312.521 338.854L358.524 402.737C364.525 411.238 374.275 416.113 384.526 416.113H434.779C443.28 416.113 451.405 412.738 457.406 406.737L502.784 366.858C511.659 357.731 514.41 344.23 509.784 332.478ZM328.022 223.965C314.771 223.965 304.021 213.214 304.021 199.962S314.771 175.959 328.022 175.959C341.273 175.959 352.024 186.711 352.024 199.962S341.273 223.965 328.022 223.965Z" />
        </Icon>
    </>
}