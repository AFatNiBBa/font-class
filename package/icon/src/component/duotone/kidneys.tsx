
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `kidneys` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/kidneys?s=duotone kidneys}
 * @preview ![kidneys](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3My44OTIgMjE3LjczMkwyMDguOTcxIDE4My41NkMxOTYuNjE5IDE5OS44NDEgMTkyLjUyMyAyMTUuNjk3IDE5MiAyMjguODg4TDI1MS41NiAyNjAuMjM2QzI1NC4xOTYgMjYxLjYyMyAyNTUuODQ5IDI2NC4zNjEgMjU1Ljg0NyAyNjcuMzQyTDI1NS43NDUgNDk1Ljk5MUMyNTUuNzQxIDUwNC44MzEgMjYyLjkwNiA1MTEuOTk5IDI3MS43NDYgNTExLjk5OUgyODcuNzQ2QzI5Ni41OCA1MTEuOTk5IDMwMy43NDIgNTA0LjgzOSAzMDMuNzQ2IDQ5Ni4wMDdMMzAzLjg0OCAyNjcuMzczQzMwMy44NTcgMjQ2LjU0NSAyOTIuMzIyIDIyNy40MzEgMjczLjg5MiAyMTcuNzMyWk00MzAuNzQ3IDE4My41NkwzNjUuODIgMjE3LjczMkMzNDcuMzkgMjI3LjQzMSAzMzUuODU0IDI0Ni41NDUgMzM1Ljg2NCAyNjcuMzczTDMzNS45NjYgNDk2LjAwN0MzMzUuOTY5IDUwNC44MzkgMzQzLjEzMiA1MTEuOTk5IDM1MS45NjYgNTExLjk5OUgzNjcuOTY2QzM3Ni44MDYgNTExLjk5OSAzODMuOTcgNTA0LjgzMSAzODMuOTY2IDQ5NS45OTFMMzgzLjg2NSAyNjcuMzQyQzM4My44NjMgMjY0LjM2MSAzODUuNTE1IDI2MS42MjMgMzg4LjE1MiAyNjAuMjM2TDQ0Ny42ODYgMjI4LjkwNEM0NDcuMjE5IDIxNS43MzYgNDQzLjE1MyAxOTkuODczIDQzMC43NDcgMTgzLjU2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik05NS45OTcgMjQuMzY0QzM2LjEyMSA3Ny44NjQgMi4zNzEgMTQ5Ljk5IDAuMTIxIDIyMy45OUMtMS4xMjkgMjY1Ljk5IDcuNjIxIDI5NC44NjUgMTIuOTk2IDMxMy45OUMyNC45OTYgMzU2LjM2NSA2My40OTcgMzgzLjk5MSAxMDUuMzczIDM4My45OTFDMTY5LjYyNCAzODMuOTkxIDIxNSAzMjIuNDkgMTk3Ljg3NCAyNjEuODY1QzE5Ni43NDkgMjU4LjExNSAxNzQuNzQ5IDIxMS40OSAyMjMuODc1IDE2Ny42MTVDMjYzLjUgMTMyLjIzOSAyNjYuODc2IDcxLjYxNCAyMzEuNjI1IDMyLjExNEMxOTYuMjQ5IC03LjUxMSAxMzUuNDk4IC0xMC44ODYgOTUuOTk3IDI0LjM2NFpNNTQzLjg4MSAyNC4yMzlDNTA0LjM4IC0xMC44ODYgNDQzLjUwNCAtNy41MTEgNDA4LjI1MyAzMi4yMzlDMzczLjAwMyA3MS43MzkgMzc2LjYyOCAxMzIuNDg5IDQxNi4yNTMgMTY3Ljc0QzQ2NS43NTQgMjExLjg2NSA0NDIuNzU0IDI1OC44NjUgNDQyLjAwNCAyNjEuMzY1QzQyNC41MDMgMzIxLjk5IDQ2OS42MjkgMzgzLjk5MSA1MzQuMjU1IDM4My45OTFDNTc2LjAwNiAzODMuOTkxIDYxNC4zODIgMzU2LjYxNSA2MjYuNTA3IDMxNC40OUM2MzIuMTMyIDI5NS4yNCA2NDEuMTMyIDI2Ni40OSA2MzkuODgyIDIyMy45OUM2MzcuNzU3IDE0OS45OSA2MDQuMTMyIDc3Ljg2NCA1NDMuODgxIDI0LjIzOVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Kidneys(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M273.892 217.732L208.971 183.56C196.619 199.841 192.523 215.697 192 228.888L251.56 260.236C254.196 261.623 255.849 264.361 255.847 267.342L255.745 495.991C255.741 504.831 262.906 511.999 271.746 511.999H287.746C296.58 511.999 303.742 504.839 303.746 496.007L303.848 267.373C303.857 246.545 292.322 227.431 273.892 217.732ZM430.747 183.56L365.82 217.732C347.39 227.431 335.854 246.545 335.864 267.373L335.966 496.007C335.969 504.839 343.132 511.999 351.966 511.999H367.966C376.806 511.999 383.97 504.831 383.966 495.991L383.865 267.342C383.863 264.361 385.515 261.623 388.152 260.236L447.686 228.904C447.219 215.736 443.153 199.873 430.747 183.56Z" />
            <path d="M95.997 24.364C36.121 77.864 2.371 149.99 0.121 223.99C-1.129 265.99 7.621 294.865 12.996 313.99C24.996 356.365 63.497 383.991 105.373 383.991C169.624 383.991 215 322.49 197.874 261.865C196.749 258.115 174.749 211.49 223.875 167.615C263.5 132.239 266.876 71.614 231.625 32.114C196.249 -7.511 135.498 -10.886 95.997 24.364ZM543.881 24.239C504.38 -10.886 443.504 -7.511 408.253 32.239C373.003 71.739 376.628 132.489 416.253 167.74C465.754 211.865 442.754 258.865 442.004 261.365C424.503 321.99 469.629 383.991 534.255 383.991C576.006 383.991 614.382 356.615 626.507 314.49C632.132 295.24 641.132 266.49 639.882 223.99C637.757 149.99 604.132 77.864 543.881 24.239Z" />
        </Icon>
    </>
}