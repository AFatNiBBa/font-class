
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hammer` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hammer?s=duotone hammer}
 * @preview ![hammer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1My4wNyAyMjcuNDA2TDEyMi45MDYgNDkwLjkwNkMxMDguODQ0IDUwNC45NjkgOTAuNDM3IDUxMiA3MiA1MTJTMzUuMTU2IDUwNC45NjkgMjEuMDk0IDQ5MC45MDZDLTcuMDMxIDQ2Mi43ODEgLTcuMDMxIDQxNy4yMTkgMjEuMDk0IDM4OS4wOTRMMjg0LjY2IDE1OC44NjdDMjg3LjI1OCAxNjIuNzczIDI5MC4yMzQgMTY2LjQzIDI5My41NzQgMTY5Ljc3TDM0Mi43MzQgMjE4LjkxNEMzNDUuOTMgMjIyLjEwOSAzNDkuNDE0IDIyNC45MTQgMzUzLjA3IDIyNy40MDZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTU2OC41MDMgMTk2LjI4M0w1NDUuODc4IDE3My42NThDNTQxLjM0NSAxNjkuMTI1IDUzNS4zMiAxNjYuNjI5IDUyOC45MSAxNjYuNjI5UzUxNi40NzQgMTY5LjEyNSA1MTEuOTM5IDE3My42NThMNTA2LjI4NSAxNzkuMzE0TDQ4Ni4xNjQgMTU5LjE5M0M0OTAuNzU5IDEzNS43MjkgNDgzLjUxMSAxMTEuMjkxIDQ2Ni42OTMgOTQuNDU5TDQyMS40NDEgNDkuMjA1QzM4OS43MDMgMTcuNDc1IDM0Ny41MDggMCAzMDIuNjMzIDBDMjU3Ljc1NiAwIDIxNS41NyAxNy40NzUgMTgzLjg0NiA0OS4yMDdMMTc2IDU3LjA1NUwyNzIuMDA0IDEwNS4wNTdWMTE4Ljg2M0MyNzIuMDA0IDEzNy44MTEgMjc5LjY5MSAxNTYuMzY1IDI5My4wOTYgMTY5Ljc3TDM0Mi4yNTQgMjE4LjkxMkMzNTUuNjkzIDIzMi4zNjMgMzczLjY0NCAyMzkuNzczIDM5Mi43OTUgMjM5Ljc3M0MzOTcuNTUyIDIzOS43NzMgNDAyLjMwNiAyMzkuMzA5IDQwNi45NzggMjM4LjM4N0w0MjcuMDk1IDI1OC41MDRMNDIxLjQ0MSAyNjQuMTU4QzQxMi4wODQgMjczLjUxNiA0MTIuMDg0IDI4OC43NCA0MjEuNDM5IDI5OC4wOThMNDQ0LjA2NCAzMjAuNzIzQzQ0OC41OTkgMzI1LjI1NiA0NTQuNjI3IDMyNy43NTQgNDYxLjAzNSAzMjcuNzU0UzQ3My40NyAzMjUuMjU2IDQ3OC4wMDQgMzIwLjcyM0w1NjguNTM1IDIzMC4yMjVDNTc3Ljg2NyAyMjAuODQ0IDU3Ny44NDUgMjA1LjYyNyA1NjguNTAzIDE5Ni4yODNaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Hammer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M353.07 227.406L122.906 490.906C108.844 504.969 90.437 512 72 512S35.156 504.969 21.094 490.906C-7.031 462.781 -7.031 417.219 21.094 389.094L284.66 158.867C287.258 162.773 290.234 166.43 293.574 169.77L342.734 218.914C345.93 222.109 349.414 224.914 353.07 227.406Z" />
            <path d="M568.503 196.283L545.878 173.658C541.345 169.125 535.32 166.629 528.91 166.629S516.474 169.125 511.939 173.658L506.285 179.314L486.164 159.193C490.759 135.729 483.511 111.291 466.693 94.459L421.441 49.205C389.703 17.475 347.508 0 302.633 0C257.756 0 215.57 17.475 183.846 49.207L176 57.055L272.004 105.057V118.863C272.004 137.811 279.691 156.365 293.096 169.77L342.254 218.912C355.693 232.363 373.644 239.773 392.795 239.773C397.552 239.773 402.306 239.309 406.978 238.387L427.095 258.504L421.441 264.158C412.084 273.516 412.084 288.74 421.439 298.098L444.064 320.723C448.599 325.256 454.627 327.754 461.035 327.754S473.47 325.256 478.004 320.723L568.535 230.225C577.867 220.844 577.845 205.627 568.503 196.283Z" />
        </Icon>
    </>
}