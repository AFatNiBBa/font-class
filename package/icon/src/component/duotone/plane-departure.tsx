
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `plane-departure` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plane-departure?s=duotone plane-departure}
 * @preview ![plane-departure](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYwOCA0NDhIMzJDMTQuMzI3IDQ0OCAwIDQ2Mi4zMjcgMCA0ODBWNDgwQzAgNDk3LjY3MyAxNC4zMjcgNTEyIDMyIDUxMkg2MDhDNjI1LjY3MyA1MTIgNjQwIDQ5Ny42NzMgNjQwIDQ4MFY0ODBDNjQwIDQ2Mi4zMjcgNjI1LjY3MyA0NDggNjA4IDQ0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjIyLjk2NiAxMzguNzcxQzYwNi43MTYgMTY0LjE0NSA1ODIuNzE4IDE4My41MTggNTU1Ljk2OCAxOTcuMDE2TDI2NC45NzIgMzQ0LjYyNUMyNTUuODQ3IDM0OS4zNzUgMjQ1LjcyMiAzNTEuNzUgMjM1LjM0NyAzNTEuNzVMMTA0Ljg0OSAzNTJDOTUuNTk5IDM1MiA4Ni44NDkgMzQ4LjEyNSA4MC40NzQgMzQxLjI1Mkw0LjM1IDI1OC4yNkMtMy4yNzUgMjQ5LjM4NSAtMC41MjUgMjM1LjUxMiA5Ljg1IDIzMC4yNjJMNDkuOTc0IDIwOS44ODlDNTUuMDk5IDIwNy4yNjYgNjAuOTc0IDIwNy4yNjYgNjYuMDk5IDIwOS44ODlMMTM4LjQ3NCAyNDYuMjZMMjQxLjU5NyAxOTMuODkxTDg1LjQ3NCA5NS45Qzc3LjM0OSA4Ny4wMjcgNzkuOTc0IDcyLjc3OSA5MC41OTkgNjcuMjc5TDE1Ni4zNDkgMzMuOTA4QzE2Mi4wOTkgMzEuMDMzIDE2OC45NzQgMzEuNDA4IDE3NC4zNDcgMzUuMDMxTDM5My4wOTUgMTE3LjE0OEw0OTEuNTkzIDY3LjE1NEM1MTguMzQzIDUzLjUyOSA1NDcuOTY4IDQ1LjY1NiA1NzcuODQzIDQ3LjY1NkM2MTEuMzQxIDQ5Ljc4MSA2MjguODQxIDYwLjUyOSA2MzYuMDkxIDc1LjE1MkM2NDMuMzQxIDg5LjY1MiA2NDEuMzQxIDExMC4yNzUgNjIyLjk2NiAxMzguNzcxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PlaneDeparture(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M608 448H32C14.327 448 0 462.327 0 480V480C0 497.673 14.327 512 32 512H608C625.673 512 640 497.673 640 480V480C640 462.327 625.673 448 608 448Z" />
            <path d="M622.966 138.771C606.716 164.145 582.718 183.518 555.968 197.016L264.972 344.625C255.847 349.375 245.722 351.75 235.347 351.75L104.849 352C95.599 352 86.849 348.125 80.474 341.252L4.35 258.26C-3.275 249.385 -0.525 235.512 9.85 230.262L49.974 209.889C55.099 207.266 60.974 207.266 66.099 209.889L138.474 246.26L241.597 193.891L85.474 95.9C77.349 87.027 79.974 72.779 90.599 67.279L156.349 33.908C162.099 31.033 168.974 31.408 174.347 35.031L393.095 117.148L491.593 67.154C518.343 53.529 547.968 45.656 577.843 47.656C611.341 49.781 628.841 60.529 636.091 75.152C643.341 89.652 641.341 110.275 622.966 138.771Z" />
        </Icon>
    </>
}