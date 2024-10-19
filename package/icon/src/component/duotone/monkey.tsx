
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `monkey` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/monkey?s=duotone monkey}
 * @preview ![monkey](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA2NEg0NDhDNDIxLjQ5IDY0IDQwMCA4NS40OSA0MDAgMTEyQzQwMCAxMzIuODY5IDQxMy40IDE1MC40NTEgNDMyIDE1Ny4wNjJWMTc2QzQzMiAyMDIuNTEgNDUzLjQ5IDIyNCA0ODAgMjI0UzUyOCAyMDIuNTEgNTI4IDE3NlYxNTcuMDYyQzU0Ni42IDE1MC40NTEgNTYwIDEzMi44NjkgNTYwIDExMkM1NjAgODUuNDkgNTM4LjUxIDY0IDUxMiA2NFpNNDQwIDEyMEM0MzEuMTI1IDEyMCA0MjQgMTEyLjg3NSA0MjQgMTA0UzQzMS4xMjUgODggNDQwIDg4UzQ1NiA5NS4xMjUgNDU2IDEwNFM0NDguODc1IDEyMCA0NDAgMTIwWk01MjAgMTIwQzUxMS4xMjUgMTIwIDUwNCAxMTIuODc1IDUwNCAxMDRTNTExLjEyNSA4OCA1MjAgODhTNTM2IDk1LjEyNSA1MzYgMTA0UzUyOC44NzUgMTIwIDUyMCAxMjBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTU0OS41IDI2Ny4yNUM1MjkuMzc1IDI4MC4yNSA1MDUuNjI1IDI4OCA0ODAgMjg4QzQyMy4zNzUgMjg4IDM3NS43NSAyNTAuNzUgMzU4Ljg3NSAxOTkuNjI1QzI2Mi44NzUgMjI0Ljg3NSAxOTIgMzEyIDE5MiA0MTZWNDQ4QzE3NC4zNzUgNDQ4IDE2MCA0MzMuNjI1IDE2MCA0MTZWMTgwLjY5N0MxNjAgMTM4Ljg1NSAxMjkuOTY3IDEwMC42NTggODguMzQgOTYuNDI2QzQwLjQ4NiA5MS41NjEgMCAxMjkuMTI1IDAgMTc2VjIyNEMwIDI0MS42MjUgMTQuMzc1IDI1NiAzMiAyNTZTNjQgMjQxLjYyNSA2NCAyMjRWMTc2QzY0IDE2Ny4xMjUgNzEuMTI1IDE2MCA4MCAxNjBTOTYgMTY3LjEyNSA5NiAxNzZWNDE2Qzk2IDQ2OS4wMiAxMzguOTggNTEyIDE5MiA1MTJINDMyQzQ0MC44NzUgNTEyIDQ0OCA1MDQuODc1IDQ0OCA0OTZDNDQ4IDQ2OS42IDQyNi40IDQ0OCA0MDAgNDQ4SDM1Mkw1MDcuNjI1IDM0NC4yNUw1NDIuMzc1IDQ0OC4yNUw1NDQgNDU4LjM3NVY0ODBDNTQ0IDQ5Ny42NzQgNTU4LjMyNiA1MTIgNTc2IDUxMlM2MDggNDk3LjY3NCA2MDggNDgwVjQ1OC4zNzVDNjA4IDQ0OCA2MDYuMzc1IDQzNy43NSA2MDMgNDI4TDU0OS41IDI2Ny4yNVpNNTkyIDY0SDU3MC4xMjVDNTU2Ljg3NSAyNi43NSA1MjEuNzUgMCA0ODAgMFM0MDMuMTI1IDI2Ljc1IDM4OS44NzUgNjRIMzY4QzM0MS41IDY0IDMyMCA4NS41IDMyMCAxMTJTMzQxLjUgMTYwIDM2OCAxNjBIMzg0QzM4NCAyMTMgNDI3IDI1NiA0ODAgMjU2UzU3NiAyMTMgNTc2IDE2MEg1OTJDNjE4LjUgMTYwIDY0MCAxMzguNSA2NDAgMTEyUzYxOC41IDY0IDU5MiA2NFpNNTI4IDE1Ny4wNjJWMTc2QzUyOCAyMDIuNTEgNTA2LjUxIDIyNCA0ODAgMjI0UzQzMiAyMDIuNTEgNDMyIDE3NlYxNTcuMDYyQzQxMy40IDE1MC40NTEgNDAwIDEzMi44NjkgNDAwIDExMkM0MDAgODUuNDkgNDIxLjQ5IDY0IDQ0OCA2NEg1MTJDNTM4LjUxIDY0IDU2MCA4NS40OSA1NjAgMTEyQzU2MCAxMzIuODY5IDU0Ni42IDE1MC40NTEgNTI4IDE1Ny4wNjJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Monkey(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M512 64H448C421.49 64 400 85.49 400 112C400 132.869 413.4 150.451 432 157.062V176C432 202.51 453.49 224 480 224S528 202.51 528 176V157.062C546.6 150.451 560 132.869 560 112C560 85.49 538.51 64 512 64ZM440 120C431.125 120 424 112.875 424 104S431.125 88 440 88S456 95.125 456 104S448.875 120 440 120ZM520 120C511.125 120 504 112.875 504 104S511.125 88 520 88S536 95.125 536 104S528.875 120 520 120Z" />
            <path d="M549.5 267.25C529.375 280.25 505.625 288 480 288C423.375 288 375.75 250.75 358.875 199.625C262.875 224.875 192 312 192 416V448C174.375 448 160 433.625 160 416V180.697C160 138.855 129.967 100.658 88.34 96.426C40.486 91.561 0 129.125 0 176V224C0 241.625 14.375 256 32 256S64 241.625 64 224V176C64 167.125 71.125 160 80 160S96 167.125 96 176V416C96 469.02 138.98 512 192 512H432C440.875 512 448 504.875 448 496C448 469.6 426.4 448 400 448H352L507.625 344.25L542.375 448.25L544 458.375V480C544 497.674 558.326 512 576 512S608 497.674 608 480V458.375C608 448 606.375 437.75 603 428L549.5 267.25ZM592 64H570.125C556.875 26.75 521.75 0 480 0S403.125 26.75 389.875 64H368C341.5 64 320 85.5 320 112S341.5 160 368 160H384C384 213 427 256 480 256S576 213 576 160H592C618.5 160 640 138.5 640 112S618.5 64 592 64ZM528 157.062V176C528 202.51 506.51 224 480 224S432 202.51 432 176V157.062C413.4 150.451 400 132.869 400 112C400 85.49 421.49 64 448 64H512C538.51 64 560 85.49 560 112C560 132.869 546.6 150.451 528 157.062Z" />
        </Icon>
    </>
}