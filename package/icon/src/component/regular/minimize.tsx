
import { Icon } from "../../index";

/**
 * A component that renders the `minimize` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=regular minimize}
 * @preview ![minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTIuMDA0IDIyNEg0NDguMDAyQzQ2MC45MzkgMjI0IDQ3Mi42MjcgMjE2LjIwMyA0NzcuNTY0IDIwNC4yNUM0ODIuNTMzIDE5Mi4yODEgNDc5Ljc4MyAxNzguNTMxIDQ3MC42MjcgMTY5LjM3NUw0MjMuNTk0IDEyMi4zNDRMNTA0Ljk2OSA0MC45NjlDNTE0LjM0NCAzMS41OTQgNTE0LjM0NCAxNi40MDYgNTA0Ljk2OSA3LjAzMVM0ODAuNDA2IC0yLjM0NCA0NzEuMDMxIDcuMDMxTDM4OS42NTYgODguNDA2TDM0Mi42MjcgNDEuMzc5QzMzNi41IDM1LjI2MiAzMjguMzI4IDMyLjAyNyAzMTkuOTk4IDMyLjAyN0MzMTUuODgxIDMyLjAyNyAzMTEuNzIzIDMyLjgxNiAzMDcuNzU0IDM0LjQ0MUMyOTUuNzg1IDM5LjM5NSAyODguMDA0IDUxLjA2NiAyODguMDA0IDY0VjIwMEMyODguMDA0IDIxMy4yNTQgMjk4Ljc0OCAyMjQgMzEyLjAwNCAyMjRaTTIwMC4wMDQgMjg4SDY0LjAwNEM1MS4wNjYgMjg4IDM5LjM3OSAyOTUuNzk3IDM0LjQ0MSAzMDcuNzVDMjkuNDczIDMxOS43MTkgMzIuMjIzIDMzMy40NjkgNDEuMzc5IDM0Mi42MjVMODguNDA4IDM4OS42NTZMNy4wMzEgNDcxLjAzMUMtMi4zNDQgNDgwLjQwNiAtMi4zNDQgNDk1LjU5NCA3LjAzMSA1MDQuOTY5QzExLjcxOSA1MDkuNjU2IDE3Ljg0NCA1MTIgMjQgNTEyUzM2LjI4MSA1MDkuNjU2IDQwLjk2OSA1MDQuOTY5TDEyMi4zNDYgNDIzLjU5NEwxNjkuMzc5IDQ3MC42MjVDMTc1LjUwNCA0NzYuNzUgMTgzLjY5MSA0ODAgMTkyLjAwNCA0ODBDMTk2LjEyOSA0ODAgMjAwLjI4NSA0NzkuMjAzIDIwNC4yNTQgNDc3LjU2MkMyMTYuMjIzIDQ3Mi42MDkgMjI0LjAwNCA0NjAuOTM4IDIyNC4wMDQgNDQ4VjMxMkMyMjQuMDA0IDI5OC43NDYgMjEzLjI1OCAyODggMjAwLjAwNCAyODhaTTIwNC4yNTQgMzQuNDQxQzIwMC4yOTEgMzIuNzk3IDE5Ni4xMzEgMzEuOTk2IDE5Mi4wMDggMzEuOTk2QzE4My42ODIgMzEuOTk2IDE3NS41MDIgMzUuMjU0IDE2OS4zNzkgNDEuMzc5TDEyMi4zNDggODguNDFMNDAuOTY5IDcuMDMxQzMxLjU5NCAtMi4zNDQgMTYuNDA2IC0yLjM0NCA3LjAzMSA3LjAzMVMtMi4zNDQgMzEuNTk0IDcuMDMxIDQwLjk2OUw4OC40MDggMTIyLjM0NEw0MS4zNzkgMTY5LjM3NUMzNS4yNTQgMTc1LjUgMzIuMDA0IDE4My42ODggMzIuMDA0IDE5MkMzMi4wMDQgMTk2LjEyNSAzMi44MDEgMjAwLjI4MSAzNC40NDEgMjA0LjI1QzM5LjM5NSAyMTYuMjE5IDUxLjA2NiAyMjQgNjQuMDA0IDIyNEgyMDAuMDA0QzIxMy4yNTggMjI0IDIyNC4wMDQgMjEzLjI1NCAyMjQuMDA0IDIwMFY2NEMyMjQuMDA0IDUxLjA2NiAyMTYuMjA3IDM5LjM3OSAyMDQuMjU0IDM0LjQ0MVpNNDIzLjU5NiAzODkuNjU2TDQ3MC42MjcgMzQyLjYyNUM0NzkuNzY4IDMzMy40NjkgNDgyLjQ3MSAzMTkuNzUgNDc3LjU2NCAzMDcuNzVDNDcyLjYxMSAyOTUuNzgxIDQ2MC45MzkgMjg4IDQ0OC4wMDIgMjg4SDMxMi4wMDRDMjk4Ljc0OCAyODggMjg4LjAwNCAyOTguNzQ2IDI4OC4wMDQgMzEyVjQ0OEMyODguMDA0IDQ2MC45MzggMjk1LjgwMSA0NzIuNjI1IDMwNy43NTQgNDc3LjU2MkMzMTEuNzE3IDQ3OS4yMDcgMzE1Ljg3NyA0ODAuMDA4IDMxOS45OTggNDgwLjAwOEMzMjguMzI0IDQ4MC4wMDggMzM2LjUwNCA0NzYuNzUgMzQyLjYyNyA0NzAuNjI1TDM4OS42NTggNDIzLjU5NEw0NzEuMDMxIDUwNC45NjlDNDc1LjcxOSA1MDkuNjU2IDQ4MS44NDQgNTEyIDQ4OCA1MTJTNTAwLjI4MSA1MDkuNjU2IDUwNC45NjkgNTA0Ljk2OUM1MTQuMzQ0IDQ5NS41OTQgNTE0LjM0NCA0ODAuNDA2IDUwNC45NjkgNDcxLjAzMUw0MjMuNTk2IDM4OS42NTZaIi8+PC9zdmc+|width=32|height=32)
 */
const Minimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M312.004 224H448.002C460.939 224 472.627 216.203 477.564 204.25C482.533 192.281 479.783 178.531 470.627 169.375L423.594 122.344L504.969 40.969C514.344 31.594 514.344 16.406 504.969 7.031S480.406 -2.344 471.031 7.031L389.656 88.406L342.627 41.379C336.5 35.262 328.328 32.027 319.998 32.027C315.881 32.027 311.723 32.816 307.754 34.441C295.785 39.395 288.004 51.066 288.004 64V200C288.004 213.254 298.748 224 312.004 224ZM200.004 288H64.004C51.066 288 39.379 295.797 34.441 307.75C29.473 319.719 32.223 333.469 41.379 342.625L88.408 389.656L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.844 512 24 512S36.281 509.656 40.969 504.969L122.346 423.594L169.379 470.625C175.504 476.75 183.691 480 192.004 480C196.129 480 200.285 479.203 204.254 477.562C216.223 472.609 224.004 460.938 224.004 448V312C224.004 298.746 213.258 288 200.004 288ZM204.254 34.441C200.291 32.797 196.131 31.996 192.008 31.996C183.682 31.996 175.502 35.254 169.379 41.379L122.348 88.41L40.969 7.031C31.594 -2.344 16.406 -2.344 7.031 7.031S-2.344 31.594 7.031 40.969L88.408 122.344L41.379 169.375C35.254 175.5 32.004 183.688 32.004 192C32.004 196.125 32.801 200.281 34.441 204.25C39.395 216.219 51.066 224 64.004 224H200.004C213.258 224 224.004 213.254 224.004 200V64C224.004 51.066 216.207 39.379 204.254 34.441ZM423.596 389.656L470.627 342.625C479.768 333.469 482.471 319.75 477.564 307.75C472.611 295.781 460.939 288 448.002 288H312.004C298.748 288 288.004 298.746 288.004 312V448C288.004 460.938 295.801 472.625 307.754 477.562C311.717 479.207 315.877 480.008 319.998 480.008C328.324 480.008 336.504 476.75 342.627 470.625L389.658 423.594L471.031 504.969C475.719 509.656 481.844 512 488 512S500.281 509.656 504.969 504.969C514.344 495.594 514.344 480.406 504.969 471.031L423.596 389.656Z" />
    </Icon>
);

export default Minimize;