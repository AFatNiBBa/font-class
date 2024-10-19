
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-notch` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=duotone circle-notch}
 * @preview ![circle-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAyNTYuMDAzQzM4NCAzMjYuNjk2IDMyNi42OTIgMzg0LjAwMyAyNTYgMzg0LjAwM1MxMjggMzI2LjY5NiAxMjggMjU2LjAwM1MxODUuMzA4IDEyOC4wMDMgMjU2IDEyOC4wMDNTMzg0IDE4NS4zMTEgMzg0IDI1Ni4wMDNaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ5NiAyNTYuMDAzQzQ5NiAzOTAuODYzIDM4NC43NzMgNDk5LjczOCAyNDkuMDUzIDQ5NS45MDJDMTI2LjQxIDQ5Mi40NDEgMjMuMTI5IDM5Mi4wODkgMTYuMzc1IDI2OS41ODVDOS43MDMgMTQ4LjU0NiA5Mi44MyA0NS45MTMgMjA1LjE0MyAyMS42NjdDMjE0Ljg4NyAxOS41NjYgMjI0IDI3LjUzOCAyMjQgMzcuNTAzVjcwLjQxN0MyMjQgNzcuODMxIDIxOC44MDMgODMuOTQxIDIxMS42MzEgODUuODEyQzEzNi4wMTIgMTA1LjUzMSA4MCAxNzQuMjkyIDgwIDI1Ni4wMDNDODAgMzUzLjk0NSAxNjAuNDE2IDQzMy40NTYgMjU4LjY4OSA0MzEuOThDMzQ5LjM5NiA0MzAuNjIgNDI2Ljg1NSAzNTYuMjY5IDQzMS43MzggMjY1LjY4N0M0MzYuMzY5IDE3OS43NjEgMzc4Ljk0NyAxMDYuMjkyIDMwMC4zNSA4NS44MDhDMjkzLjE4NyA4My45NDEgMjg4IDc3LjgzOSAyODggNzAuNDQxVjM3LjUyN0MyODggMjcuNTU0IDI5Ny4xMzMgMTkuNTY2IDMwNi44ODMgMjEuNjc1QzQxNC45NTcgNDUuMDE5IDQ5NiAxNDAuOTQxIDQ5NiAyNTYuMDAzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleNotch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M384 256.003C384 326.696 326.692 384.003 256 384.003S128 326.696 128 256.003S185.308 128.003 256 128.003S384 185.311 384 256.003Z" />
            <path d="M496 256.003C496 390.863 384.773 499.738 249.053 495.902C126.41 492.441 23.129 392.089 16.375 269.585C9.703 148.546 92.83 45.913 205.143 21.667C214.887 19.566 224 27.538 224 37.503V70.417C224 77.831 218.803 83.941 211.631 85.812C136.012 105.531 80 174.292 80 256.003C80 353.945 160.416 433.456 258.689 431.98C349.396 430.62 426.855 356.269 431.738 265.687C436.369 179.761 378.947 106.292 300.35 85.808C293.187 83.941 288 77.839 288 70.441V37.527C288 27.554 297.133 19.566 306.883 21.675C414.957 45.019 496 140.941 496 256.003Z" />
        </Icon>
    </>
}