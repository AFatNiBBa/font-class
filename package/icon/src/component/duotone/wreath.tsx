
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wreath` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wreath?s=duotone wreath}
 * @preview ![wreath](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAyMjMuOTYxQzQ0OCAyMDcuMDg2IDQzOS4yNSAxOTIuMzM5IDQyNi4xMjUgMTgzLjcxOEM0MzUgMTcwLjg0MyA0MzcuMzc1IDE1My44NDcgNDMwLjg3NSAxMzguMjI2QzQyNC4yNSAxMjIuMzUxIDQxMC4yNSAxMTIuMTA1IDM5NC41IDEwOS4zNTVDMzk3Ljc1IDkzLjk4MyAzOTQuMjUgNzcuNDgzIDM4Mi4zNzUgNjUuNjEyUzM1My44NzUgNTAuMjQxIDMzOC42MjUgNTMuNDkxQzMzNS44NzUgMzcuNzQxIDMyNS42MjUgMjMuNjIgMzA5Ljc1IDE3LjExOUMyOTQuMjUgMTAuNjIzIDI3Ny4yNSAxMy4xMjMgMjY0LjI1IDIxLjg3QzI1NS42MjUgOC43NDggMjQwLjg3NSAtMC4wMDIgMjI0IC0wLjAwMlMxOTIuMzc1IDguNzQ4IDE4My43NSAyMS44N0MxNzAuNzUgMTIuOTk4IDE1My43NSAxMC42MjMgMTM4LjI1IDE3LjExOUMxMjIuNSAyMy43NDUgMTEyLjEyNSAzNy43NDEgMTA5LjUgNTMuNDkxQzk0LjEyNSA1MC4yNDEgNzcuNjI1IDUzLjc0MSA2NS43NSA2NS42MTJDNTMuNzUgNzcuNDgzIDUwLjI1IDkzLjk4MyA1My42MjUgMTA5LjM1NUMzNy43NSAxMTIuMTA1IDIzLjc1IDEyMi4zNTEgMTcuMjUgMTM4LjIyNkMxMC43NSAxNTMuNzIyIDEzLjI1IDE3MC43MTggMjIgMTgzLjcxOEM4Ljc1IDE5Mi4zMzkgMCAyMDcuMDg2IDAgMjIzLjk2MUMwIDIyMy45NzQgMC4wMDQgMjIzLjk4NCAwLjAwNCAyMjMuOTk4UzAgMjI0LjAyMSAwIDIyNC4wMzVDMCAyNDAuOTEgOC43NSAyNTUuNjU2IDIxLjg3NSAyNjQuMjc3QzEzIDI3Ny4xNTMgMTAuNjI1IDI5NC4xNDkgMTcuMTI1IDMwOS43N0MyMy43NSAzMjUuNjQ1IDM3Ljc1IDMzNS44OTEgNTMuNSAzMzguNjQxQzUwLjI1IDM1NC4wMTMgNTMuNzUgMzcwLjUxMyA2NS42MjUgMzgyLjM4NEM3Ny41IDM5NC4yNTcgOTQuMTI1IDM5Ny43NTcgMTA5LjM3NSAzOTQuNTA3QzExMS40NzUgNDA2LjUyOSAxMTcuOTk4IDQxNy41MzYgMTI4IDQyNC45OTVWMzk5LjkyOUMxMjggMzg5LjA1NCAxMzguNzUgMzgxLjE3OSAxNDkuMTI1IDM4NC42NzlMMjI0IDQxNS45MjVMMjk4Ljg3NSAzODQuNjc5QzMwOS4yNSAzODEuMzA0IDMyMCAzODkuMDU0IDMyMCAzOTkuOTI5VjQyNC45MTVDMzI5Ljk1MSA0MTcuNDM3IDMzNi41IDQwNi41MDkgMzM4LjUgMzk0LjUwN0MzNTMuODc1IDM5Ny43NTcgMzcwLjM3NSAzOTQuMjU3IDM4Mi4yNSAzODIuMzg0QzM5NC4yNSAzNzAuNTEzIDM5Ny43NSAzNTQuMDEzIDM5NC4zNzUgMzM4LjY0MUM0MTAuMjUgMzM1Ljg5MSA0MjQuMjUgMzI1LjY0NSA0MzAuNzUgMzA5Ljc3QzQzNy4yNSAyOTQuMjc0IDQzNC43NSAyNzcuMjc4IDQyNiAyNjQuMjc3QzQzOS4yNSAyNTUuNjU2IDQ0OCAyNDAuOTEgNDQ4IDIyNC4wMzVDNDQ4IDIyNC4wMjEgNDQ3Ljk5NiAyMjQuMDEyIDQ0Ny45OTYgMjIzLjk5OFM0NDggMjIzLjk3NCA0NDggMjIzLjk2MVpNMzEyIDIyNC4wMzVDMzEyIDIzMy41MzUgMzA0LjI1IDI0MS42NiAzMDEuNSAyNTAuMjgxQzI5OC43NSAyNTkuMTUyIDMwMC4zNzUgMjcwLjQwMyAyOTUuMjUgMjc3Ljc3OEMyOTAgMjg1LjI3OCAyNzkuMTI1IDI4Ny4xNTMgMjcxLjg3NSAyOTIuNjQ5QzI2NC43NSAyOTguMDI0IDI1OS43NSAzMDguMjcgMjUxLjI1IDMxMS4xNDVDMjQzIDMxMy44OTUgMjMzLjEyNSAzMDguNzcgMjI0IDMwOC43N1MyMDUgMzEzLjg5NSAxOTYuNzUgMzExLjE0NUMxODguMjUgMzA4LjI3IDE4My4yNSAyOTguMDI0IDE3Ni4xMjUgMjkyLjY0OUMxNjguODc1IDI4Ny4yNzggMTU4IDI4NS4yNzggMTUyLjc1IDI3Ny43NzhDMTQ3LjYyNSAyNzAuNDAzIDE0OS4yNSAyNTkuMTUyIDE0Ni41IDI1MC4yODFDMTQzLjc1IDI0MS42NiAxMzYgMjMzLjUzNSAxMzYgMjI0LjAzNUMxMzYgMjI0LjAyMSAxMzYuMDA2IDIyNC4wMTIgMTM2LjAwNiAyMjMuOTk4UzEzNiAyMjMuOTc0IDEzNiAyMjMuOTYxQzEzNiAyMTQuNDYxIDE0My43NSAyMDYuMzM2IDE0Ni41IDE5Ny43MTVDMTQ5LjI1IDE4OC44NDMgMTQ3LjYyNSAxNzcuNTkzIDE1Mi43NSAxNzAuMjE4QzE1OCAxNjIuNzE4IDE2OC44NzUgMTYwLjg0MyAxNzYuMTI1IDE1NS4zNDdDMTgzLjI1IDE0OS45NzIgMTg4LjI1IDEzOS43MjYgMTk2Ljc1IDEzNi44NTFDMjA1IDEzNC4xMDEgMjE0Ljg3NSAxMzkuMjI2IDIyNCAxMzkuMjI2UzI0MyAxMzQuMTAxIDI1MS4yNSAxMzYuODUxQzI1OS43NSAxMzkuNzI2IDI2NC43NSAxNDkuOTcyIDI3MS44NzUgMTU1LjM0N0MyNzkuMTI1IDE2MC43MTggMjkwIDE2Mi43MTggMjk1LjI1IDE3MC4yMThDMzAwLjM3NSAxNzcuNTkzIDI5OC43NSAxODguODQzIDMwMS41IDE5Ny43MTVDMzA0LjI1IDIwNi4zMzYgMzEyIDIxNC40NjEgMzEyIDIyMy45NjFDMzEyIDIyMy45NzQgMzExLjk5NCAyMjMuOTg0IDMxMS45OTQgMjIzLjk5OFMzMTIgMjI0LjAyMSAzMTIgMjI0LjAzNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjk4Ljg3NSAzODQuNjc5TDIyNCA0MTUuOTI2TDE0OS4xMjUgMzg0LjY3OUMxMzguNzUgMzgxLjE3OSAxMjggMzg5LjA1NCAxMjggMzk5LjkyOVY0OTUuOTE1QzEyOCA1MDYuNzg2IDEzOC43NSA1MTQuNTMyIDE0OS4xMjUgNTExLjE1N0wyMjQgNDc5LjkxNEwyOTguODc1IDUxMS4xNTdDMzA5LjI1IDUxNC42NTcgMzIwIDUwNi43ODYgMzIwIDQ5NS45MTVWMzk5LjkyOUMzMjAgMzg5LjA1NCAzMDkuMjUgMzgxLjMwNCAyOTguODc1IDM4NC42NzlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Wreath(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M448 223.961C448 207.086 439.25 192.339 426.125 183.718C435 170.843 437.375 153.847 430.875 138.226C424.25 122.351 410.25 112.105 394.5 109.355C397.75 93.983 394.25 77.483 382.375 65.612S353.875 50.241 338.625 53.491C335.875 37.741 325.625 23.62 309.75 17.119C294.25 10.623 277.25 13.123 264.25 21.87C255.625 8.748 240.875 -0.002 224 -0.002S192.375 8.748 183.75 21.87C170.75 12.998 153.75 10.623 138.25 17.119C122.5 23.745 112.125 37.741 109.5 53.491C94.125 50.241 77.625 53.741 65.75 65.612C53.75 77.483 50.25 93.983 53.625 109.355C37.75 112.105 23.75 122.351 17.25 138.226C10.75 153.722 13.25 170.718 22 183.718C8.75 192.339 0 207.086 0 223.961C0 223.974 0.004 223.984 0.004 223.998S0 224.021 0 224.035C0 240.91 8.75 255.656 21.875 264.277C13 277.153 10.625 294.149 17.125 309.77C23.75 325.645 37.75 335.891 53.5 338.641C50.25 354.013 53.75 370.513 65.625 382.384C77.5 394.257 94.125 397.757 109.375 394.507C111.475 406.529 117.998 417.536 128 424.995V399.929C128 389.054 138.75 381.179 149.125 384.679L224 415.925L298.875 384.679C309.25 381.304 320 389.054 320 399.929V424.915C329.951 417.437 336.5 406.509 338.5 394.507C353.875 397.757 370.375 394.257 382.25 382.384C394.25 370.513 397.75 354.013 394.375 338.641C410.25 335.891 424.25 325.645 430.75 309.77C437.25 294.274 434.75 277.278 426 264.277C439.25 255.656 448 240.91 448 224.035C448 224.021 447.996 224.012 447.996 223.998S448 223.974 448 223.961ZM312 224.035C312 233.535 304.25 241.66 301.5 250.281C298.75 259.152 300.375 270.403 295.25 277.778C290 285.278 279.125 287.153 271.875 292.649C264.75 298.024 259.75 308.27 251.25 311.145C243 313.895 233.125 308.77 224 308.77S205 313.895 196.75 311.145C188.25 308.27 183.25 298.024 176.125 292.649C168.875 287.278 158 285.278 152.75 277.778C147.625 270.403 149.25 259.152 146.5 250.281C143.75 241.66 136 233.535 136 224.035C136 224.021 136.006 224.012 136.006 223.998S136 223.974 136 223.961C136 214.461 143.75 206.336 146.5 197.715C149.25 188.843 147.625 177.593 152.75 170.218C158 162.718 168.875 160.843 176.125 155.347C183.25 149.972 188.25 139.726 196.75 136.851C205 134.101 214.875 139.226 224 139.226S243 134.101 251.25 136.851C259.75 139.726 264.75 149.972 271.875 155.347C279.125 160.718 290 162.718 295.25 170.218C300.375 177.593 298.75 188.843 301.5 197.715C304.25 206.336 312 214.461 312 223.961C312 223.974 311.994 223.984 311.994 223.998S312 224.021 312 224.035Z" />
            <path d="M298.875 384.679L224 415.926L149.125 384.679C138.75 381.179 128 389.054 128 399.929V495.915C128 506.786 138.75 514.532 149.125 511.157L224 479.914L298.875 511.157C309.25 514.657 320 506.786 320 495.915V399.929C320 389.054 309.25 381.304 298.875 384.679Z" />
        </Icon>
    </>
}