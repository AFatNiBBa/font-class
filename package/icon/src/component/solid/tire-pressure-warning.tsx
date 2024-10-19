
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tire-pressure-warning` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tire-pressure-warning?s=solid tire-pressure-warning}
 * @preview ![tire-pressure-warning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzQuNSAxNDEuNUM0NTguMzc1IDExMy4yNSA0NDggODAuNjI1IDQ0OCA0Ni4xMjVWMTcuMTI1QzQ0OCA3LjYyNSA0NDAuODc1IDAgNDMyIDBINDAwQzM5MS4xMjUgMCAzODQgNy4xMjUgMzg0IDE2VjY0QzM4NCA5NiAzOTkuMjUgMTM4Ljg3NSA0MTkgMTczLjI1QzQzOCAyMDYuNSA0NDggMjQ0Ljg3NSA0NDggMjg0LjEyNUM0NDggMzI1LjI1IDQzNS4yNSAzNjYuNjI1IDQxMi4yNSA0MDIuMjVDNDA2LjUgNDExIDM5Ni4yNSA0MTYgMzg1Ljc1IDQxNkgxMjYuMjVDMTE1Ljc1IDQxNiAxMDUuNSA0MTEgOTkuNzUgNDAyLjI1Qzc2Ljc1IDM2Ni42MjUgNjQgMzI1LjI1IDY0IDI4NC4xMjVDNjQgMjQ0Ljg3NSA3NCAyMDYuNSA5My4xMjUgMTczLjI1QzExMi43NSAxMzguODc1IDEyOCA5NiAxMjggNjRWMTZDMTI4IDcuMTI1IDEyMC44NzUgMCAxMTIgMEg4MEM3MS4xMjUgMCA2NCA3LjYyNSA2NCAxNy4xMjVWNDYuMTI1QzY0IDgwLjYyNSA1My42MjUgMTEzLjI1IDM3LjUgMTQxLjVDMTMuNzUgMTgzIDAgMjMxLjc1IDAgMjg0LjEyNUMwIDM2MC44NzUgMzIuNSA0MzAuMjUgODAgNDgwVjQ5NkM4MCA1MDQuODc1IDg3LjEyNSA1MTIgOTYgNTEySDEyOEMxMzYuODc1IDUxMiAxNDQgNTA0Ljg3NSAxNDQgNDk2VjQ4MEgxNzZWNDk2QzE3NiA1MDQuODc1IDE4My4xMjUgNTEyIDE5MiA1MTJIMjI0QzIzMi44NzUgNTEyIDI0MCA1MDQuODc1IDI0MCA0OTZWNDgwSDI3MlY0OTZDMjcyIDUwNC44NzUgMjc5LjEyNSA1MTIgMjg4IDUxMkgzMjBDMzI4Ljg3NSA1MTIgMzM2IDUwNC44NzUgMzM2IDQ5NlY0ODBIMzY4VjQ5NkMzNjggNTA0Ljg3NSAzNzUuMTI1IDUxMiAzODQgNTEySDQxNkM0MjQuODc1IDUxMiA0MzIgNTA0Ljg3NSA0MzIgNDk2VjQ4MEM0NzkuNSA0MzAuMjUgNTEyIDM2MC44NzUgNTEyIDI4NC4xMjVDNTEyIDIzMS43NSA0OTguMjUgMTgzIDQ3NC41IDE0MS41Wk0yNTYuMDAyIDM1MkMyNzMuNjI3IDM1MiAyODguMDAyIDMzNy43NSAyODguMDAyIDMyMEMyODguMDAyIDMwMi4zNzUgMjczLjYyNyAyODggMjU2LjAwMiAyODhTMjI0LjAwMiAzMDIuMzc1IDIyNC4wMDIgMzIwQzIyNC4wMDIgMzM3Ljc1IDIzOC4zNzcgMzUyIDI1Ni4wMDIgMzUyWk0yNTYgMjU2QzI2OS4yNSAyNTYgMjgwIDI0NS4yNSAyODAgMjMyVjk2QzI4MCA4Mi43NSAyNjkuMjUgNzIgMjU2IDcyUzIzMiA4Mi43NSAyMzIgOTZWMjMyQzIzMiAyNDUuMjUgMjQyLjc1IDI1NiAyNTYgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TirePressureWarning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M474.5 141.5C458.375 113.25 448 80.625 448 46.125V17.125C448 7.625 440.875 0 432 0H400C391.125 0 384 7.125 384 16V64C384 96 399.25 138.875 419 173.25C438 206.5 448 244.875 448 284.125C448 325.25 435.25 366.625 412.25 402.25C406.5 411 396.25 416 385.75 416H126.25C115.75 416 105.5 411 99.75 402.25C76.75 366.625 64 325.25 64 284.125C64 244.875 74 206.5 93.125 173.25C112.75 138.875 128 96 128 64V16C128 7.125 120.875 0 112 0H80C71.125 0 64 7.625 64 17.125V46.125C64 80.625 53.625 113.25 37.5 141.5C13.75 183 0 231.75 0 284.125C0 360.875 32.5 430.25 80 480V496C80 504.875 87.125 512 96 512H128C136.875 512 144 504.875 144 496V480H176V496C176 504.875 183.125 512 192 512H224C232.875 512 240 504.875 240 496V480H272V496C272 504.875 279.125 512 288 512H320C328.875 512 336 504.875 336 496V480H368V496C368 504.875 375.125 512 384 512H416C424.875 512 432 504.875 432 496V480C479.5 430.25 512 360.875 512 284.125C512 231.75 498.25 183 474.5 141.5ZM256.002 352C273.627 352 288.002 337.75 288.002 320C288.002 302.375 273.627 288 256.002 288S224.002 302.375 224.002 320C224.002 337.75 238.377 352 256.002 352ZM256 256C269.25 256 280 245.25 280 232V96C280 82.75 269.25 72 256 72S232 82.75 232 96V232C232 245.25 242.75 256 256 256Z" />
        </Icon>
    </>
}