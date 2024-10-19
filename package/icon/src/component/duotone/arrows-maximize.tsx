
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=duotone arrows-maximize}
 * @preview ![arrows-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEwOS4yNSA5NkgxNjBDMTc3LjY4OCA5NiAxOTIgODEuNjg4IDE5MiA2NFMxNzcuNjg4IDMyIDE2MCAzMkgzMkMyNy44MzggMzIgMjMuNjg5IDMyLjg0OCAxOS43ODMgMzQuNDYxQzExLjk0MSAzNy43MDMgNS43MDUgNDMuOTQxIDIuNDYzIDUxLjc4MUMwLjg0OCA1NS42ODggMCA1OS44MzYgMCA2NFYxOTJDMCAyMDkuNjg4IDE0LjMxMiAyMjQgMzIgMjI0UzY0IDIwOS42ODggNjQgMTkyVjE0MS4yNUwxNzguNzUgMjU2TDIyNCAyMTAuNzVMMTA5LjI1IDk2Wk00MTYgMjg4QzM5OC4zMTIgMjg4IDM4NCAzMDIuMzEyIDM4NCAzMjBWMzcwLjc1TDI2OS4yNSAyNTZMMjI0IDMwMS4yNUwzMzguNzUgNDE2SDI4OEMyNzAuMzEyIDQxNiAyNTYgNDMwLjMxMiAyNTYgNDQ4UzI3MC4zMTIgNDgwIDI4OCA0ODBINDE2QzQyMC4xNjQgNDgwIDQyNC4zMTIgNDc5LjE1MiA0MjguMjE5IDQ3Ny41MzlDNDM2LjA1OSA0NzQuMjk3IDQ0Mi4yOTcgNDY4LjA1OSA0NDUuNTM5IDQ2MC4yMTlDNDQ3LjE1MiA0NTYuMzEyIDQ0OCA0NTIuMTY0IDQ0OCA0NDhWMzIwQzQ0OCAzMDIuMzEyIDQzMy42ODggMjg4IDQxNiAyODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQxNiAyMjRDNDMzLjY4OCAyMjQgNDQ4IDIwOS42ODggNDQ4IDE5MlY2NEM0NDggNTkuODM2IDQ0Ny4xNTIgNTUuNjg4IDQ0NS41MzcgNTEuNzgxQzQ0Mi4yOTUgNDMuOTQxIDQzNi4wNTkgMzcuNzAzIDQyOC4yMTcgMzQuNDYxQzQyNC4zMTEgMzIuODQ4IDQyMC4xNjIgMzIgNDE2IDMySDI4OEMyNzAuMzEyIDMyIDI1NiA0Ni4zMTIgMjU2IDY0UzI3MC4zMTIgOTYgMjg4IDk2SDMzOC43NUw2NCAzNzAuNzVWMzIwQzY0IDMwMi4zMTIgNDkuNjg4IDI4OCAzMiAyODhTMCAzMDIuMzEyIDAgMzIwVjQ0OEMwIDQ1Mi4xNjQgMC44NDggNDU2LjMxMiAyLjQ2MSA0NjAuMjE5QzUuNzAzIDQ2OC4wNTkgMTEuOTQxIDQ3NC4yOTcgMTkuNzgxIDQ3Ny41MzlDMjMuNjg4IDQ3OS4xNTIgMjcuODM2IDQ4MCAzMiA0ODBIMTYwQzE3Ny42ODggNDgwIDE5MiA0NjUuNjg4IDE5MiA0NDhTMTc3LjY4OCA0MTYgMTYwIDQxNkgxMDkuMjVMMzg0IDE0MS4yNVYxOTJDMzg0IDIwOS42ODggMzk4LjMxMiAyMjQgNDE2IDIyNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowsMaximize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M109.25 96H160C177.688 96 192 81.688 192 64S177.688 32 160 32H32C27.838 32 23.689 32.848 19.783 34.461C11.941 37.703 5.705 43.941 2.463 51.781C0.848 55.688 0 59.836 0 64V192C0 209.688 14.312 224 32 224S64 209.688 64 192V141.25L178.75 256L224 210.75L109.25 96ZM416 288C398.312 288 384 302.312 384 320V370.75L269.25 256L224 301.25L338.75 416H288C270.312 416 256 430.312 256 448S270.312 480 288 480H416C420.164 480 424.312 479.152 428.219 477.539C436.059 474.297 442.297 468.059 445.539 460.219C447.152 456.312 448 452.164 448 448V320C448 302.312 433.688 288 416 288Z" />
            <path d="M416 224C433.688 224 448 209.688 448 192V64C448 59.836 447.152 55.688 445.537 51.781C442.295 43.941 436.059 37.703 428.217 34.461C424.311 32.848 420.162 32 416 32H288C270.312 32 256 46.312 256 64S270.312 96 288 96H338.75L64 370.75V320C64 302.312 49.688 288 32 288S0 302.312 0 320V448C0 452.164 0.848 456.312 2.461 460.219C5.703 468.059 11.941 474.297 19.781 477.539C23.688 479.152 27.836 480 32 480H160C177.688 480 192 465.688 192 448S177.688 416 160 416H109.25L384 141.25V192C384 209.688 398.312 224 416 224Z" />
        </Icon>
    </>
}