
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trees` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trees?s=duotone trees}
 * @preview ![trees](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI5OC4zNzMgMjg4SDMyOS4wMDJDMzM4LjAwMiAyODggMzQ2LjAwNCAyODMgMzQ5Ljg3OSAyNzVDMzUzLjYyOSAyNjYuODc1IDM1Mi4zNzkgMjU3LjYyNSAzNDYuNTA0IDI1MC44NzVMMjY4LjM2OSAxNjBIMjk3LjI0NkMzMDYuMzczIDE2MCAzMTQuNjI1IDE1NC42MjUgMzE4LjEyNSAxNDYuMzc1QzMyMS43NSAxMzguMjUgMzIwIDEyOC43NSAzMTMuODc1IDEyMi4yNUwyMDMuNjA5IDQuODc1QzE5Ny42MDkgLTEuNjI1IDE4Ni4zNTcgLTEuNjI1IDE4MC4zNTcgNC44NzVMNjkuOTY3IDEyMi4yNUM2My45NjcgMTI4Ljc1IDYyLjIxNyAxMzguMjUgNjUuODQyIDE0Ni4zNzVDNjkuMzQyIDE1NC42MjUgNzcuNTk0IDE2MCA4Ni43MTkgMTYwSDExNS41OThMMzcuNDYzIDI1MC44NzVDMzEuNTg4IDI1Ny43NSAzMC4zMzggMjY2Ljg3NSAzNC4wODggMjc1QzM3Ljk2MyAyODMgNDUuODQgMjg4IDU0Ljk2NSAyODhIODUuNTk0TDUuNzA5IDM3OC41Qy0wLjI5MSAzODUuMjUgLTEuNjY4IDM5NC42MjUgMi4wODQgNDAyLjc1QzUuODM0IDQxMC43NSAxNC4wODQgNDE2IDIzLjA4NiA0MTZIMTYwVjIyNEMxNjAgMjA2LjMyNyAxNzQuMzI3IDE5MiAxOTIgMTkySDE5MkMyMDkuNjczIDE5MiAyMjQgMjA2LjMyNyAyMjQgMjI0VjQxNkgzNjAuODgxQzM2OS44ODEgNDE2IDM3OC4xMzMgNDEwLjc1IDM4MS44ODMgNDAyLjc1QzM4NS42MzMgMzk0LjYyNSAzODQuMzgzIDM4NS4yNSAzNzguMzgzIDM3OC41TDI5OC4zNzMgMjg4Wk02MzQuMjkxIDM3OC41TDU1NC40MDYgMjg4SDU4NS4wMzVDNTk0LjAzNSAyODggNjAyLjAzNyAyODMgNjA1LjkxMiAyNzVDNjA5LjY2MiAyNjYuODc1IDYwOC40MTIgMjU3LjYyNSA2MDIuNTM3IDI1MC44NzVMNTI0LjQwMiAxNjBINTUzLjI4MUM1NjIuNDA2IDE2MCA1NzAuNjU4IDE1NC42MjUgNTc0LjE1OCAxNDYuMzc1QzU3Ny43ODMgMTM4LjI1IDU3Ni4wMzMgMTI4Ljc1IDU2OS45MDggMTIyLjI1TDQ1OS42NDMgNC44NzVDNDUzLjY0MyAtMS42MjUgNDQyLjM5MSAtMS42MjUgNDM2LjM5MSA0Ljg3NUwzNDEuMjUyIDEwNi4xMjVDMzUyLjM3OSAxMjEuNSAzNTUuMjU0IDE0MS4zNzUgMzQ3LjYyOSAxNTlDMzQzLjYyOSAxNjguMzc1IDMzNy4yNTIgMTc2LjEyNSAzMjkuMzc3IDE4MS43NUwzNzAuODgxIDIzMEMzODQuODgzIDI0Ni4yNSAzODguMDEgMjY5LjI1IDM3OC44ODMgMjg4LjYyNUMzNzQuNjMzIDI5Ny41IDM2OC4zODEgMzA0Ljc1IDM2MC43NTYgMzEwLjEyNUw0MDIuMzg3IDM1Ny4yNUM0MTAuOTg2IDM2Ny4wOTYgNDE1LjcyMyAzNzEuNDkgNDE2IDM4My45MDhWMzUyQzQxNiAzMzQuMzI3IDQzMC4zMjcgMzIwIDQ0OCAzMjBINDQ4QzQ2NS42NzMgMzIwIDQ4MCAzMzQuMzI3IDQ4MCAzNTJWNDE2SDYxNi45MTRDNjI1LjkxNiA0MTYgNjM0LjE2NiA0MTAuNzUgNjM3LjkxNiA0MDIuNzVDNjQxLjY2OCAzOTQuNjI1IDY0MC4yOTEgMzg1LjI1IDYzNC4yOTEgMzc4LjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE5MiAxOTJIMTkyQzE3NC4zMjcgMTkyIDE2MCAyMDYuMzI3IDE2MCAyMjRWNDgwQzE2MCA0OTcuNjczIDE3NC4zMjcgNTEyIDE5MiA1MTJIMTkyQzIwOS42NzMgNTEyIDIyNCA0OTcuNjczIDIyNCA0ODBWMjI0QzIyNCAyMDYuMzI3IDIwOS42NzMgMTkyIDE5MiAxOTJaTTQ0OCAzMjBINDQ4QzQzMC4zMjcgMzIwIDQxNiAzMzQuMzI3IDQxNiAzNTJWNDgwQzQxNiA0OTcuNjczIDQzMC4zMjcgNTEyIDQ0OCA1MTJINDQ4QzQ2NS42NzMgNTEyIDQ4MCA0OTcuNjczIDQ4MCA0ODBWMzUyQzQ4MCAzMzQuMzI3IDQ2NS42NzMgMzIwIDQ0OCAzMjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Trees(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M298.373 288H329.002C338.002 288 346.004 283 349.879 275C353.629 266.875 352.379 257.625 346.504 250.875L268.369 160H297.246C306.373 160 314.625 154.625 318.125 146.375C321.75 138.25 320 128.75 313.875 122.25L203.609 4.875C197.609 -1.625 186.357 -1.625 180.357 4.875L69.967 122.25C63.967 128.75 62.217 138.25 65.842 146.375C69.342 154.625 77.594 160 86.719 160H115.598L37.463 250.875C31.588 257.75 30.338 266.875 34.088 275C37.963 283 45.84 288 54.965 288H85.594L5.709 378.5C-0.291 385.25 -1.668 394.625 2.084 402.75C5.834 410.75 14.084 416 23.086 416H160V224C160 206.327 174.327 192 192 192H192C209.673 192 224 206.327 224 224V416H360.881C369.881 416 378.133 410.75 381.883 402.75C385.633 394.625 384.383 385.25 378.383 378.5L298.373 288ZM634.291 378.5L554.406 288H585.035C594.035 288 602.037 283 605.912 275C609.662 266.875 608.412 257.625 602.537 250.875L524.402 160H553.281C562.406 160 570.658 154.625 574.158 146.375C577.783 138.25 576.033 128.75 569.908 122.25L459.643 4.875C453.643 -1.625 442.391 -1.625 436.391 4.875L341.252 106.125C352.379 121.5 355.254 141.375 347.629 159C343.629 168.375 337.252 176.125 329.377 181.75L370.881 230C384.883 246.25 388.01 269.25 378.883 288.625C374.633 297.5 368.381 304.75 360.756 310.125L402.387 357.25C410.986 367.096 415.723 371.49 416 383.908V352C416 334.327 430.327 320 448 320H448C465.673 320 480 334.327 480 352V416H616.914C625.916 416 634.166 410.75 637.916 402.75C641.668 394.625 640.291 385.25 634.291 378.5Z" />
            <path d="M192 192H192C174.327 192 160 206.327 160 224V480C160 497.673 174.327 512 192 512H192C209.673 512 224 497.673 224 480V224C224 206.327 209.673 192 192 192ZM448 320H448C430.327 320 416 334.327 416 352V480C416 497.673 430.327 512 448 512H448C465.673 512 480 497.673 480 480V352C480 334.327 465.673 320 448 320Z" />
        </Icon>
    </>
}