
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-carry-box` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-carry-box?s=regular person-carry-box}
 * @preview ![person-carry-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCA5NS45OTlDMTA2LjUgOTUuOTk5IDEyOCA3NC41IDEyOCA0OFMxMDYuNSAwLjAwMSA4MCAwLjAwMVMzMiAyMS41MDEgMzIgNDhTNTMuNSA5NS45OTkgODAgOTUuOTk5Wk0zNjggOTUuOTk5SDIwOEMxOTkuMjUgOTUuOTk5IDE5MiAxMDMuMjQ5IDE5MiAxMTEuOTk5VjIzOS45OTdIMTU4LjM3NUwxMjYuMjUgMTYyLjQ5OEMxMTcuNjI1IDE0MS42MjQgOTcuMjUgMTI3Ljk5OSA3NC42MjUgMTI3Ljk5OUg1NkMyNS4xMjUgMTI3Ljk5OSAwIDE1My4xMjMgMCAxODMuOTk4VjI4Ni4yNDZDMCAyOTMuOTk2IDMgMzE1Ljc0NSAyMS4yNSAzMzAuMjQ1TDk3Ljc1IDM5MC43NDRDMTAzLjM3NSAzOTUuMjQ0IDEwNy4zNzUgNDAxLjQ5NCAxMDkgNDA4LjYxOUwxMjguNjI1IDQ5My4zNjdDMTMxLjI1IDUwNC44NjcgMTQzIDUxNC42MTcgMTU3LjM3NSA1MTEuMzY3QzE3MC4yNSA1MDguMzY3IDE3OC4zNzUgNDk1LjQ5MiAxNzUuMzc1IDQ4Mi42MTdMMTUzLjk5OSAzODkuNjE5QzE1MS4xMjUgMzc3LjI0NCAxNDQuMTI1IDM2Ni4xMTkgMTM0LjEyNSAzNTguMjQ1TDk2IDMyOC4xMlYyMTQuNzQ3TDExOC4yNSAyNjguMjQ2QzEyMy4yNSAyODAuMjQ2IDEzNC43NSAyODcuOTk2IDE0Ny43NSAyODcuOTk2SDM2OEMzNzYuNzUgMjg3Ljk5NiAzODQgMjgwLjc0NiAzODQgMjcxLjk5NlYxMTEuOTk5QzM4NCAxMDMuMjQ5IDM3Ni43NSA5NS45OTkgMzY4IDk1Ljk5OVpNMzM2IDIzOS45OTdIMjQwVjE0My45OTlIMzM2VjIzOS45OTdaTTAgNDg3Ljk5MkMwIDUwMS4yNDIgMTAuNzUgNTExLjk5MiAyNCA1MTEuOTkyUzQ4IDUwMS4yNDIgNDggNDg3Ljk5MlYzOTIuMTE5QzM2IDM4Mi42MTkgMC41IDM1NC4yNDUgMCAzNTMuODdWNDg3Ljk5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonCarryBox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M80 95.999C106.5 95.999 128 74.5 128 48S106.5 0.001 80 0.001S32 21.501 32 48S53.5 95.999 80 95.999ZM368 95.999H208C199.25 95.999 192 103.249 192 111.999V239.997H158.375L126.25 162.498C117.625 141.624 97.25 127.999 74.625 127.999H56C25.125 127.999 0 153.123 0 183.998V286.246C0 293.996 3 315.745 21.25 330.245L97.75 390.744C103.375 395.244 107.375 401.494 109 408.619L128.625 493.367C131.25 504.867 143 514.617 157.375 511.367C170.25 508.367 178.375 495.492 175.375 482.617L153.999 389.619C151.125 377.244 144.125 366.119 134.125 358.245L96 328.12V214.747L118.25 268.246C123.25 280.246 134.75 287.996 147.75 287.996H368C376.75 287.996 384 280.746 384 271.996V111.999C384 103.249 376.75 95.999 368 95.999ZM336 239.997H240V143.999H336V239.997ZM0 487.992C0 501.242 10.75 511.992 24 511.992S48 501.242 48 487.992V392.119C36 382.619 0.5 354.245 0 353.87V487.992Z" />
        </Icon>
    </>
}