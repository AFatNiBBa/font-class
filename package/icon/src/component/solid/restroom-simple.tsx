
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `restroom-simple` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/restroom-simple?s=solid restroom-simple}
 * @preview ![restroom-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjQgMEgyNDhDMjM5LjI1IDAgMjMyIDcuMjUgMjMyIDE2VjQ5NkMyMzIgNTA0Ljc1IDIzOS4yNSA1MTIgMjQ4IDUxMkgyNjRDMjcyLjc1IDUxMiAyODAgNTA0Ljc1IDI4MCA0OTZWMTZDMjgwIDcuMjUgMjcyLjc1IDAgMjY0IDBaTTQ0OCAxMjhDNDgzLjM3NSAxMjggNTEyIDk5LjM3NSA1MTIgNjRTNDgzLjM3NSAwIDQ0OCAwUzM4NCAyOC42MjUgMzg0IDY0UzQxMi42MjUgMTI4IDQ0OCAxMjhaTTU3NS4zNzUgMzYzLjYwNEw1MjcuMTUgMTk0LjgxM0M1MjEuMjYyIDE3NC4yMDcgNTAyLjQyNyAxNjAgNDgwLjk5NiAxNjBINDE1LjAwNEMzOTMuNTczIDE2MCAzNzQuNzM4IDE3NC4yMDcgMzY4Ljg1IDE5NC44MTNMMzIwLjYyNSAzNjMuNjA0QzMxNy43MDUgMzczLjgyNSAzMjUuMzc5IDM4NCAzMzYuMDEgMzg0SDM4NFY0ODBDMzg0IDQ5Ny42NzMgMzk4LjMyNyA1MTIgNDE2IDUxMkg0ODBDNDk3LjY3MyA1MTIgNTEyIDQ5Ny42NzMgNTEyIDQ4MFYzODRINTU5Ljk5QzU3MC42MiAzODQgNTc4LjI5NSAzNzMuODI1IDU3NS4zNzUgMzYzLjYwNFpNOTYgMTI4QzEzMS4zNzUgMTI4IDE2MCA5OS4zNzUgMTYwIDY0UzEzMS4zNzUgMCA5NiAwUzMyIDI4LjYyNSAzMiA2NFM2MC42MjUgMTI4IDk2IDEyOFpNMTI4IDE2MEg2NEMyOC42NTQgMTYwIDAgMTg4LjY1MiAwIDIyNFYzMjBDMCAzMzcuNjcyIDE0LjMyNiAzNTIgMzIgMzUyVjQ4MEMzMiA0OTcuNjcyIDQ2LjMyNiA1MTIgNjQgNTEySDEyOEMxNDUuNjc0IDUxMiAxNjAgNDk3LjY3MiAxNjAgNDgwVjM1MkMxNzcuNjc0IDM1MiAxOTIgMzM3LjY3MiAxOTIgMzIwVjIyNEMxOTIgMTg4LjY1MiAxNjMuMzQ2IDE2MCAxMjggMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RestroomSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M264 0H248C239.25 0 232 7.25 232 16V496C232 504.75 239.25 512 248 512H264C272.75 512 280 504.75 280 496V16C280 7.25 272.75 0 264 0ZM448 128C483.375 128 512 99.375 512 64S483.375 0 448 0S384 28.625 384 64S412.625 128 448 128ZM575.375 363.604L527.15 194.813C521.262 174.207 502.427 160 480.996 160H415.004C393.573 160 374.738 174.207 368.85 194.813L320.625 363.604C317.705 373.825 325.379 384 336.01 384H384V480C384 497.673 398.327 512 416 512H480C497.673 512 512 497.673 512 480V384H559.99C570.62 384 578.295 373.825 575.375 363.604ZM96 128C131.375 128 160 99.375 160 64S131.375 0 96 0S32 28.625 32 64S60.625 128 96 128ZM128 160H64C28.654 160 0 188.652 0 224V320C0 337.672 14.326 352 32 352V480C32 497.672 46.326 512 64 512H128C145.674 512 160 497.672 160 480V352C177.674 352 192 337.672 192 320V224C192 188.652 163.346 160 128 160Z" />
        </Icon>
    </>
}