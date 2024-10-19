
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-pie-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie-simple?s=duotone chart-pie-simple}
 * @preview ![chart-pie-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3Ny4zNDMgMzA1Ljg4M0M0NjAuNDY5IDQyNC44NzMgMzU2LjYwMyA1MTUuOTkgMjMxLjg2NCA1MTEuODY1QzEwNy44NzUgNTA3Ljc0MSA0LjI1OSA0MDQuMTI1IDAuMTM1IDI4MC4xMzZDLTMuOTkgMTU1LjM5NyA4Ny4xMjcgNTEuNTMxIDIwNi4xMTYgMzQuNjU3QzIxNS42MTYgMzMuNDA4IDIyMy45OSA0MS4xNTcgMjIzLjk5IDUwLjc4MVYyODguMDFINDYxLjIxOUM0NzAuODQzIDI4OC4wMSA0NzguNTkyIDI5Ni4zODQgNDc3LjM0MyAzMDUuODgzWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MTEuOTc5IDIyMy4yNjZDNTEyLjYwNCAyMzIuMjY1IDUwNC44NTQgMjQwLjAxNCA0OTUuNzMgMjQwLjAxNEgyNzJWMTYuMjg0QzI3MiA3LjE2IDI3OS42MjQgLTAuNTkgMjg4Ljc0OSAwLjAzNUM0MDguMjM4IDguMjg1IDUwMy43MyAxMDMuNzc2IDUxMS45NzkgMjIzLjI2NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ChartPieSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M477.343 305.883C460.469 424.873 356.603 515.99 231.864 511.865C107.875 507.741 4.259 404.125 0.135 280.136C-3.99 155.397 87.127 51.531 206.116 34.657C215.616 33.408 223.99 41.157 223.99 50.781V288.01H461.219C470.843 288.01 478.592 296.384 477.343 305.883Z" />
            <path d="M511.979 223.266C512.604 232.265 504.854 240.014 495.73 240.014H272V16.284C272 7.16 279.624 -0.59 288.749 0.035C408.238 8.285 503.73 103.776 511.979 223.266Z" />
        </Icon>
    </>
}