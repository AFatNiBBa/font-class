
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-heart` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-heart?s=duotone hand-heart}
 * @preview ![hand-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCA5NkM0MzAuMzI4IDk2IDQxNiAxMTAuMzI4IDQxNiAxMjhWMjQwQzQxNiAyNDguODM2IDQwOC44MzYgMjU2IDQwMCAyNTZTMzg0IDI0OC44MzYgMzg0IDI0MFY2NEMzODQgNDYuMzI4IDM2OS42NzIgMzIgMzUyIDMyUzMyMCA0Ni4zMjggMzIwIDY0VjI0MEMzMjAgMjQ4LjgzNiAzMTIuODM2IDI1NiAzMDQgMjU2UzI4OCAyNDguODM2IDI4OCAyNDBWMzJDMjg4IDE0LjMyOCAyNzMuNjcyIDAgMjU2IDBTMjI0IDE0LjMyOCAyMjQgMzJWMjQwQzIyNCAyNDguODM2IDIxNi44MzYgMjU2IDIwOCAyNTZTMTkyIDI0OC44MzYgMTkyIDI0MFY2NEMxOTIgNDYuMzI4IDE3Ny42NzIgMzIgMTYwIDMyUzEyOCA0Ni4zMjggMTI4IDY0VjM0My40MzhMNjguMjgxIDI4My43MTlDNjAuNDY5IDI3NS45MDYgNTAuMjM0IDI3MiA0MCAyNzJDMTguNjg0IDI3MiAwIDI4OS4xNjMgMCAzMTJDMCAzMjIuMjM0IDMuOTA2IDMzMi40NjkgMTEuNzE5IDM0MC4yODFMMTI0Ljg1OSA0NTMuNDIyQzE2Mi42MjUgNDkxLjIwMyAyMTIuODU5IDUxMiAyNjYuMjgxIDUxMkgzMDRDNDAxLjA0NyA1MTIgNDgwIDQzMy4wNDcgNDgwIDMzNlYxMjhDNDgwIDExMC4zMjggNDY1LjY3MiA5NiA0NDggOTZaTTM4My45OTkgMzU5Ljc2NEMzODMuOTk5IDM3MC4wMzYgMzc5Ljg0NCAzODAuMzA4IDM3MS41MzMgMzg4LjE0OEwzMTEuMDY2IDQ0NS4yM0MzMDkuMTEzIDQ0Ny4wNzYgMzA2LjU1IDQ0Ny45OTkgMzAzLjk4NiA0NDcuOTk5UzI5OC44NTkgNDQ3LjA3NiAyOTYuOTA2IDQ0NS4yM0wyMzYuNDM4IDM4OC4xNDhDMjI4LjE0NiAzODAuMzEyIDIyNCAzNzAuMDQ3IDIyNCAzNTkuNzhDMjI0IDM0Ni44MzYgMjM0LjYwNSAzMjAgMjY1Ljc0MyAzMjBDMjc3LjM5NCAzMjAgMjg5LjEzNCAzMjQuNCAyOTcuODQ0IDMzMi42MzlMMzA0LjAwMiAzMzguNDM4TDMxMC4xNjIgMzMyLjYzOUMzMTguODkxIDMyNC40IDMzMC42MjggMzIwIDM0Mi4yNzMgMzIwQzM3My42MTcgMzIwIDM4My45OTkgMzQ2LjgyNCAzODMuOTk5IDM1OS43NjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM4My45OTkgMzU5Ljc2NEMzODMuOTk5IDM3MC4wMzYgMzc5Ljg0NSAzODAuMzA4IDM3MS41MzMgMzg4LjE0OEwzMTEuMDY3IDQ0NS4yM0MzMDkuMTEzIDQ0Ny4wNzYgMzA2LjU1IDQ0Ny45OTkgMzAzLjk4NyA0NDcuOTk5UzI5OC44NiA0NDcuMDc2IDI5Ni45MDYgNDQ1LjIzTDIzNi40MzggMzg4LjE0OEMyMjguMTQ3IDM4MC4zMTIgMjI0IDM3MC4wNDcgMjI0IDM1OS43OEMyMjQgMzQ2LjgzNiAyMzQuNjA2IDMyMCAyNjUuNzQzIDMyMEMyNzcuMzk0IDMyMCAyODkuMTM0IDMyNC40IDI5Ny44NDQgMzMyLjYzOUwzMDQuMDAyIDMzOC40MzhMMzEwLjE2MiAzMzIuNjM5QzMxOC44OTEgMzI0LjQgMzMwLjYyOSAzMjAgMzQyLjI3NCAzMjBDMzczLjYxOCAzMjAgMzgzLjk5OSAzNDYuODI0IDM4My45OTkgMzU5Ljc2NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HandHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M448 96C430.328 96 416 110.328 416 128V240C416 248.836 408.836 256 400 256S384 248.836 384 240V64C384 46.328 369.672 32 352 32S320 46.328 320 64V240C320 248.836 312.836 256 304 256S288 248.836 288 240V32C288 14.328 273.672 0 256 0S224 14.328 224 32V240C224 248.836 216.836 256 208 256S192 248.836 192 240V64C192 46.328 177.672 32 160 32S128 46.328 128 64V343.438L68.281 283.719C60.469 275.906 50.234 272 40 272C18.684 272 0 289.163 0 312C0 322.234 3.906 332.469 11.719 340.281L124.859 453.422C162.625 491.203 212.859 512 266.281 512H304C401.047 512 480 433.047 480 336V128C480 110.328 465.672 96 448 96ZM383.999 359.764C383.999 370.036 379.844 380.308 371.533 388.148L311.066 445.23C309.113 447.076 306.55 447.999 303.986 447.999S298.859 447.076 296.906 445.23L236.438 388.148C228.146 380.312 224 370.047 224 359.78C224 346.836 234.605 320 265.743 320C277.394 320 289.134 324.4 297.844 332.639L304.002 338.438L310.162 332.639C318.891 324.4 330.628 320 342.273 320C373.617 320 383.999 346.824 383.999 359.764Z" />
            <path d="M383.999 359.764C383.999 370.036 379.845 380.308 371.533 388.148L311.067 445.23C309.113 447.076 306.55 447.999 303.987 447.999S298.86 447.076 296.906 445.23L236.438 388.148C228.147 380.312 224 370.047 224 359.78C224 346.836 234.606 320 265.743 320C277.394 320 289.134 324.4 297.844 332.639L304.002 338.438L310.162 332.639C318.891 324.4 330.629 320 342.274 320C373.618 320 383.999 346.824 383.999 359.764Z" />
        </Icon>
    </>
}