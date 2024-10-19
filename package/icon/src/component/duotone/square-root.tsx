
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-root` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=duotone square-root}
 * @preview ![square-root](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NiA0MEM1NzYgNjIuMDkyIDU1OC4wOTIgODAgNTM2IDgwSDM1MC45MzhMMjQ2LjcxOSA0ODIuMDMxQzI0Mi41OTQgNDk3Ljk2OSAyMjkuMTI1IDUwOS43NSAyMTIuNzgxIDUxMS43MTlDMjExLjE4OCA1MTEuOTA2IDIwOS41OTQgNTEyIDIwOCA1MTJDMTkzLjQwNiA1MTIgMTc5LjgxMiA1MDQuMDMxIDE3Mi43ODEgNDkwLjk2OUw3Mi4wOTQgMzA0SDQwQzE3LjkwOCAzMDQgMCAyODYuMDkyIDAgMjY0UzE3LjkwOCAyMjQgNDAgMjI0SDk2LjAwOEMxMTAuNzIxIDIyNCAxMjQuMjQ0IDIzMi4wNzggMTMxLjIxOSAyNDUuMDMxTDE5NC44NzUgMzYzLjI1TDI4MS4yODEgMjkuOTY5QzI4NS44NTUgMTIuMzIyIDMwMS43ODEgMCAzMjAuMDEgMEg1MzZDNTU4LjA5MiAwIDU3NiAxNy45MDggNTc2IDQwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareRoot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M576 40C576 62.092 558.092 80 536 80H350.938L246.719 482.031C242.594 497.969 229.125 509.75 212.781 511.719C211.188 511.906 209.594 512 208 512C193.406 512 179.812 504.031 172.781 490.969L72.094 304H40C17.908 304 0 286.092 0 264S17.908 224 40 224H96.008C110.721 224 124.244 232.078 131.219 245.031L194.875 363.25L281.281 29.969C285.855 12.322 301.781 0 320.01 0H536C558.092 0 576 17.908 576 40Z" />
        </Icon>
    </>
}