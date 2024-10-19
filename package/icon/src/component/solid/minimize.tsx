
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `minimize` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=solid minimize}
 * @preview ![minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDAuMDAzIDI4OEg2NC4wMDRDNTEuMDY3IDI4OCAzOS4zNzkgMjk1Ljc5NyAzNC40NDIgMzA3Ljc1QzI5LjQ3MyAzMTkuNzE4IDMyLjIyMyAzMzMuNDY4IDQxLjM3OSAzNDIuNjI0TDcxLjQ0MiAzNzIuNjg3TDkuMzc5IDQzNC43NTJDLTMuMTE2IDQ0Ny4yNDggLTMuMTE2IDQ2Ny41MDYgOS4zNzggNDgwLjAwM0wzMS45OTcgNTAyLjYyNkM0NC40OTQgNTE1LjEyNCA2NC43NTcgNTE1LjEyNSA3Ny4yNTQgNTAyLjYyN0wxMzkuMzE2IDQ0MC41NjFMMTY5LjM3OSA0NzAuNjIzQzE3NS41MDQgNDc2Ljc0OCAxODMuNjkxIDQ3OS45OTggMTkyLjAwNCA0NzkuOTk4QzE5Ni4xMjggNDc5Ljk5OCAyMDAuMjg1IDQ3OS4yMDEgMjA0LjI1MyA0NzcuNTYxQzIxNi4yMjIgNDcyLjYwOCAyMjQuMDAzIDQ2MC45MzYgMjI0LjAwMyA0NDcuOTk4VjMxMkMyMjQuMDAzIDI5OC43NDUgMjEzLjI1OCAyODggMjAwLjAwMyAyODhaTTMxMi4wMDMgMjI0SDQ0OC4wMDJDNDYwLjk0IDIyNCA0NzIuNjI3IDIxNi4yMDQgNDc3LjU2NSAyMDQuMjUxQzQ4Mi41MzMgMTkyLjI4MiA0NzkuNzgzIDE3OC41MzIgNDcwLjYyNyAxNjkuMzc2TDQ0MC41NjUgMTM5LjMxNEw1MDIuNjI3IDc3LjI0OEM1MTUuMTIzIDY0Ljc1MSA1MTUuMTIzIDQ0LjQ5IDUwMi42MjcgMzEuOTkyTDQ4MC4wMSA5LjM3NEM0NjcuNTEzIC0zLjEyNCA0NDcuMjUgLTMuMTI1IDQzNC43NTIgOS4zNzRMMzcyLjY5IDcxLjQzOUwzNDIuNjI4IDQxLjM3N0MzMzMuNDcyIDMyLjIzNyAzMTkuNzUzIDI5LjUzNCAzMDcuNzUzIDM0LjQ0QzI5NS43ODQgMzkuMzkzIDI4OC4wMDMgNTEuMDY1IDI4OC4wMDMgNjQuMDAyVjIwMC4wMDFDMjg4LjAwMyAyMTMuMjU1IDI5OC43NDggMjI0IDMxMi4wMDMgMjI0Wk0yMDQuMjUzIDM0LjQ0QzE5Mi4yODUgMjkuNDcxIDE3OC41MzUgMzIuMjIxIDE2OS4zNzkgNDEuMzc3TDEzOS4zMTYgNzEuNDM5TDc3LjI1MSA5LjM3M0M2NC43NTUgLTMuMTI0IDQ0LjQ5MyAtMy4xMjQgMzEuOTk2IDkuMzc0TDkuMzcgMzIuMDAyQy0zLjEyNCA0NC40OTcgLTMuMTIzIDY0Ljc1NCA5LjM3MiA3Ny4yNDhMNzEuNDQyIDEzOS4zMTRMNDEuMzc5IDE2OS4zNzZDMzUuMjU0IDE3NS41MDEgMzIuMDA0IDE4My42ODggMzIuMDA0IDE5Mi4wMDFDMzIuMDA0IDE5Ni4xMjYgMzIuODAxIDIwMC4yODIgMzQuNDQyIDIwNC4yNTFDMzkuMzk1IDIxNi4yMTkgNTEuMDY3IDIyNCA2NC4wMDQgMjI0SDIwMC4wMDNDMjEzLjI1OCAyMjQgMjI0LjAwMyAyMTMuMjU1IDIyNC4wMDMgMjAwLjAwMVY2NC4wMDJDMjI0LjAwMyA1MS4wNjUgMjE2LjIwNyAzOS4zNzcgMjA0LjI1MyAzNC40NFpNNDQwLjU2NSAzNzIuNjg3TDQ3MC42MjcgMzQyLjYyNEM0NzkuNzY4IDMzMy40NjggNDgyLjQ3MSAzMTkuNzUgNDc3LjU2NSAzMDcuNzVDNDcyLjYxMiAyOTUuNzgxIDQ2MC45NCAyODggNDQ4LjAwMiAyODhIMzEyLjAwM0MyOTguNzQ4IDI4OCAyODguMDAzIDI5OC43NDUgMjg4LjAwMyAzMTJWNDQ3Ljk5OEMyODguMDAzIDQ2MC45MzYgMjk1LjggNDcyLjYyMyAzMDcuNzUzIDQ3Ny41NjFDMzE5LjcyMiA0ODIuNTI5IDMzMy40NzIgNDc5Ljc3OSAzNDIuNjI4IDQ3MC42MjNMMzcyLjY5IDQ0MC41NjFMNDM0Ljc1MiA1MDIuNjI1QzQ0Ny4yNSA1MTUuMTIzIDQ2Ny41MTIgNTE1LjEyMyA0ODAuMDEgNTAyLjYyNUw1MDIuNjI3IDQ4MC4wMDhDNTE1LjEyNCA0NjcuNTExIDUxNS4xMjQgNDQ3LjI0OCA1MDIuNjI3IDQzNC43NTFMNDQwLjU2NSAzNzIuNjg3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Minimize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M200.003 288H64.004C51.067 288 39.379 295.797 34.442 307.75C29.473 319.718 32.223 333.468 41.379 342.624L71.442 372.687L9.379 434.752C-3.116 447.248 -3.116 467.506 9.378 480.003L31.997 502.626C44.494 515.124 64.757 515.125 77.254 502.627L139.316 440.561L169.379 470.623C175.504 476.748 183.691 479.998 192.004 479.998C196.128 479.998 200.285 479.201 204.253 477.561C216.222 472.608 224.003 460.936 224.003 447.998V312C224.003 298.745 213.258 288 200.003 288ZM312.003 224H448.002C460.94 224 472.627 216.204 477.565 204.251C482.533 192.282 479.783 178.532 470.627 169.376L440.565 139.314L502.627 77.248C515.123 64.751 515.123 44.49 502.627 31.992L480.01 9.374C467.513 -3.124 447.25 -3.125 434.752 9.374L372.69 71.439L342.628 41.377C333.472 32.237 319.753 29.534 307.753 34.44C295.784 39.393 288.003 51.065 288.003 64.002V200.001C288.003 213.255 298.748 224 312.003 224ZM204.253 34.44C192.285 29.471 178.535 32.221 169.379 41.377L139.316 71.439L77.251 9.373C64.755 -3.124 44.493 -3.124 31.996 9.374L9.37 32.002C-3.124 44.497 -3.123 64.754 9.372 77.248L71.442 139.314L41.379 169.376C35.254 175.501 32.004 183.688 32.004 192.001C32.004 196.126 32.801 200.282 34.442 204.251C39.395 216.219 51.067 224 64.004 224H200.003C213.258 224 224.003 213.255 224.003 200.001V64.002C224.003 51.065 216.207 39.377 204.253 34.44ZM440.565 372.687L470.627 342.624C479.768 333.468 482.471 319.75 477.565 307.75C472.612 295.781 460.94 288 448.002 288H312.003C298.748 288 288.003 298.745 288.003 312V447.998C288.003 460.936 295.8 472.623 307.753 477.561C319.722 482.529 333.472 479.779 342.628 470.623L372.69 440.561L434.752 502.625C447.25 515.123 467.512 515.123 480.01 502.625L502.627 480.008C515.124 467.511 515.124 447.248 502.627 434.751L440.565 372.687Z" />
        </Icon>
    </>
}