
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `atom` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/atom?s=duotone atom}
 * @preview ![atom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3MC4xNzEgMTI4QzQ1OS4yOTQgMTA4LjUgNDI5LjY2MyA3Ny4yNSAzNTMuODk2IDg2LjEyNUMzMzIuMzkyIDM0Ljg3NSAyOTkuNjM0IDAgMjU2IDBTMTc5LjYwOCAzNC44NzUgMTU4LjEwNCA4Ni4xMjVDODIuMzM3IDc3LjM3NSA1Mi43MDYgMTA4LjUgNDEuODI5IDEyOEMyNS40NSAxNTcuMzc1IDI2LjgyNSAyMDEuMTI1IDY2Ljk1OSAyNTZDMjYuODI1IDMxMC44NzUgMjUuNDUgMzU0LjYyNSA0MS44MjkgMzg0QzcwLjk2IDQzNi4zNzUgMTQzLjQ3NiA0MjcuNjI1IDE1OC4xMDQgNDI1Ljg3NUMxNzkuNjA4IDQ3Ny4xMjUgMjEyLjM2NiA1MTIgMjU2IDUxMlMzMzIuMzkyIDQ3Ny4xMjUgMzUzLjg5NiA0MjUuODc1QzM2OC41MjQgNDI3LjYyNSA0NDEuMDQgNDM2LjM3NSA0NzAuMTcxIDM4NEM0ODYuNTUgMzU0LjYyNSA0ODUuMTc1IDMxMC44NzUgNDQ1LjA0MSAyNTZDNDg1LjE3NSAyMDEuMTI1IDQ4Ni41NSAxNTcuMzc1IDQ3MC4xNzEgMTI4Wk05NS4zNCAzNTJDOTEuMzM5IDM0NC43NSA5NS4yMTUgMzI3LjI1IDExMC4zNDMgMzAzLjc1QzExNy4yMiAzMTAuMjUgMTI0LjQ3MiAzMTYuNjI1IDEzMi4yMjMgMzIyLjg3NUMxMzMuODQ5IDMzNi42MjUgMTM2LjIyNCAzNTAgMTM4Ljk3NSAzNjNDMTE0LjM0NCAzNjMuODc1IDk5LjA5MSAzNTguNjI1IDk1LjM0IDM1MlpNMTMyLjIyMyAxODkuMTI1QzEyNC40NzIgMTk1LjM3NSAxMTcuMjIgMjAxLjc1IDExMC4zNDMgMjA4LjI1Qzk1LjIxNSAxODQuNzUgOTEuMzM5IDE2Ny4yNSA5NS4zNCAxNjBDOTguNzE2IDE1My44NzUgMTExLjcxOSAxNDguNSAxMzMuMjIzIDE0OC41QzEzNC45NzQgMTQ4LjUgMTM3LjA5OSAxNDguODc1IDEzOC45NzUgMTQ4Ljg3NUMxMzYuMDk5IDE2Mi4yNSAxMzMuODQ5IDE3NS42MjUgMTMyLjIyMyAxODkuMTI1Wk0yNTYgNjRDMjY1LjUwMiA2NCAyNzguMjU1IDc3LjUgMjg5Ljg4MiAxMDEuMjVDMjc4LjYzIDEwNSAyNjcuMzc3IDEwOS4yNSAyNTYgMTE0LjEyNUMyNDQuNjIzIDEwOS4yNSAyMzMuMzcgMTA1IDIyMi4xMTggMTAxLjI1QzIzMy43NDUgNzcuNSAyNDYuNDk4IDY0IDI1NiA2NFpNMjU2IDQ0OEMyNDYuNDk4IDQ0OCAyMzMuNzQ1IDQzNC41IDIyMi4xMTggNDEwLjc1QzIzMy4zNyA0MDcgMjQ0LjYyMyA0MDIuNzUgMjU2IDM5Ny44NzVDMjY3LjM3NyA0MDIuNzUgMjc4LjYzIDQwNyAyODkuODgyIDQxMC43NUMyNzguMjU1IDQzNC41IDI2NS41MDIgNDQ4IDI1NiA0NDhaTTI1NiAzMzZDMjExLjg2NSAzMzYgMTc1Ljk4MyAzMDAuMTI1IDE3NS45ODMgMjU2UzIxMS44NjUgMTc2IDI1NiAxNzZTMzM2LjAxNyAyMTEuODc1IDMzNi4wMTcgMjU2UzMwMC4xMzUgMzM2IDI1NiAzMzZaTTQxNi42NiAzNTJDNDEzLjAzNCAzNTguNjI1IDM5Ny42NTYgMzYzLjg3NSAzNzMuMDI1IDM2M0MzNzUuNzc2IDM1MCAzNzguMTUxIDMzNi42MjUgMzc5Ljc3NyAzMjIuODc1QzM4Ny41MjggMzE2LjYyNSAzOTQuNzggMzEwLjI1IDQwMS42NTcgMzAzLjc1QzQxNi43ODUgMzI3LjI1IDQyMC42NjEgMzQ0Ljc1IDQxNi42NiAzNTJaTTQwMS42NTcgMjA4LjI1QzM5NC43OCAyMDEuNzUgMzg3LjUyOCAxOTUuMzc1IDM3OS43NzcgMTg5LjEyNUMzNzguMTUxIDE3NS42MjUgMzc1LjkwMSAxNjIuMjUgMzczLjAyNSAxNDguODc1QzM3NC45MDEgMTQ4Ljg3NSAzNzcuMDI2IDE0OC41IDM3OC43NzcgMTQ4LjVDNDAwLjI4MSAxNDguNSA0MTMuMjg0IDE1My44NzUgNDE2LjY2IDE2MEM0MjAuNjYxIDE2Ny4yNSA0MTYuNzg1IDE4NC43NSA0MDEuNjU3IDIwOC4yNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjU2LjAwNyAyMjRDMjM4LjM3OCAyMjQgMjI0IDIzOC4zNzUgMjI0IDI1NlMyMzguMzc4IDI4OCAyNTYuMDA3IDI4OEMyNzMuNjM2IDI4OCAyODguMDE0IDI3My42MjUgMjg4LjAxNCAyNTZTMjczLjYzNiAyMjQgMjU2LjAwNyAyMjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Atom(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M470.171 128C459.294 108.5 429.663 77.25 353.896 86.125C332.392 34.875 299.634 0 256 0S179.608 34.875 158.104 86.125C82.337 77.375 52.706 108.5 41.829 128C25.45 157.375 26.825 201.125 66.959 256C26.825 310.875 25.45 354.625 41.829 384C70.96 436.375 143.476 427.625 158.104 425.875C179.608 477.125 212.366 512 256 512S332.392 477.125 353.896 425.875C368.524 427.625 441.04 436.375 470.171 384C486.55 354.625 485.175 310.875 445.041 256C485.175 201.125 486.55 157.375 470.171 128ZM95.34 352C91.339 344.75 95.215 327.25 110.343 303.75C117.22 310.25 124.472 316.625 132.223 322.875C133.849 336.625 136.224 350 138.975 363C114.344 363.875 99.091 358.625 95.34 352ZM132.223 189.125C124.472 195.375 117.22 201.75 110.343 208.25C95.215 184.75 91.339 167.25 95.34 160C98.716 153.875 111.719 148.5 133.223 148.5C134.974 148.5 137.099 148.875 138.975 148.875C136.099 162.25 133.849 175.625 132.223 189.125ZM256 64C265.502 64 278.255 77.5 289.882 101.25C278.63 105 267.377 109.25 256 114.125C244.623 109.25 233.37 105 222.118 101.25C233.745 77.5 246.498 64 256 64ZM256 448C246.498 448 233.745 434.5 222.118 410.75C233.37 407 244.623 402.75 256 397.875C267.377 402.75 278.63 407 289.882 410.75C278.255 434.5 265.502 448 256 448ZM256 336C211.865 336 175.983 300.125 175.983 256S211.865 176 256 176S336.017 211.875 336.017 256S300.135 336 256 336ZM416.66 352C413.034 358.625 397.656 363.875 373.025 363C375.776 350 378.151 336.625 379.777 322.875C387.528 316.625 394.78 310.25 401.657 303.75C416.785 327.25 420.661 344.75 416.66 352ZM401.657 208.25C394.78 201.75 387.528 195.375 379.777 189.125C378.151 175.625 375.901 162.25 373.025 148.875C374.901 148.875 377.026 148.5 378.777 148.5C400.281 148.5 413.284 153.875 416.66 160C420.661 167.25 416.785 184.75 401.657 208.25Z" />
            <path d="M256.007 224C238.378 224 224 238.375 224 256S238.378 288 256.007 288C273.636 288 288.014 273.625 288.014 256S273.636 224 256.007 224Z" />
        </Icon>
    </>
}