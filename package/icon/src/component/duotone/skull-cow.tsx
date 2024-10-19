
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `skull-cow` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/skull-cow?s=duotone skull-cow}
 * @preview ![skull-cow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2IDEyOC4xMTNDNzguNjI1IDEyOC4xMTMgNjYuODc1IDEyMy4zNjMgNjAuMTI1IDExMy40ODZDNDMuMzc1IDg5LjM1OSA1Ni41IDM4Ljk3OSA2MyAyMS42MDJDNjUuNjI1IDE0LjYgNjMgNi43MjUgNTYuNzUgMi41OThDNTAuMzc1IC0xLjUyNyA0Mi4xMjUgLTAuNjUyIDM2Ljc1IDQuNTk4QzEzIDI3Ljg1MiAwIDYwLjIzIDAgOTUuODU5QzAgMTY2LjQ5MiA1Ny4zNzUgMjI0IDEyOCAyMjRIMTYwVjE2MEMxNjAgMTQ4LjI3NyAxNjMuMzczIDEzNy40NDMgMTY4Ljg2MyAxMjhIMTI4TDk2IDEyOC4xMTNaTTYwMy4yNSA0LjcyMVY0LjU5NkM1OTcuODc1IC0wLjY1MiA1ODkuNSAtMS41MjUgNTgzLjI1IDIuNTk4QzU3Ni44NzUgNi43MjEgNTc0LjI1IDE0LjcxNyA1NzcgMjEuNzEzQzU4MyAzNy44MzIgNTk2LjYyNSA4OS40MzQgNTc5Ljg3NSAxMTMuNTQ5QzU3My4xMjUgMTIzLjQyIDU2MS4zNzUgMTI4LjE2NiA1NDQgMTI4LjE2Nkw1MTIgMTI4SDQ3MS4xMzdDNDc2LjYyNyAxMzcuNDQzIDQ4MCAxNDguMjc3IDQ4MCAxNjBWMjI0SDUxMkM1ODIuNjI1IDIyNCA2NDAgMTY2LjUyNSA2NDAgOTUuOTMyQzY0MCA2MC4zMjIgNjI3IDI3Ljk2MSA2MDMuMjUgNC43MjFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQxNiA5NkgyMjRDMTg4LjYyNSA5NiAxNjAgMTI0LjYyNSAxNjAgMTYwVjI4OEMxNjAgMzIzLjM3NSAxODguNjI1IDM1MiAyMjQgMzUyTDI1MC44NzUgNDg2LjI1QzI1My43NSA1MDEuMjUgMjY3IDUxMiAyODIuMjUgNTEySDM1Ny43NUMzNzMgNTEyIDM4Ni4xMjUgNTAxLjI1IDM4OS4xMjUgNDg2LjI1TDQxNiAzNTJDNDUxLjM3NSAzNTIgNDgwIDMyMy4zNzUgNDgwIDI4OFYxNjBDNDgwIDEyNC42MjUgNDUxLjM3NSA5NiA0MTYgOTZaTTI1NiAyODhDMjM4LjM3NSAyODggMjI0IDI3My42MjUgMjI0IDI1NlMyMzguMzc1IDIyNCAyNTYgMjI0UzI4OCAyMzguMzc1IDI4OCAyNTZTMjczLjYyNSAyODggMjU2IDI4OFpNMzg0IDI4OEMzNjYuMzc1IDI4OCAzNTIgMjczLjYyNSAzNTIgMjU2UzM2Ni4zNzUgMjI0IDM4NCAyMjRTNDE2IDIzOC4zNzUgNDE2IDI1NlM0MDEuNjI1IDI4OCAzODQgMjg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SkullCow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M96 128.113C78.625 128.113 66.875 123.363 60.125 113.486C43.375 89.359 56.5 38.979 63 21.602C65.625 14.6 63 6.725 56.75 2.598C50.375 -1.527 42.125 -0.652 36.75 4.598C13 27.852 0 60.23 0 95.859C0 166.492 57.375 224 128 224H160V160C160 148.277 163.373 137.443 168.863 128H128L96 128.113ZM603.25 4.721V4.596C597.875 -0.652 589.5 -1.525 583.25 2.598C576.875 6.721 574.25 14.717 577 21.713C583 37.832 596.625 89.434 579.875 113.549C573.125 123.42 561.375 128.166 544 128.166L512 128H471.137C476.627 137.443 480 148.277 480 160V224H512C582.625 224 640 166.525 640 95.932C640 60.322 627 27.961 603.25 4.721Z" />
            <path d="M416 96H224C188.625 96 160 124.625 160 160V288C160 323.375 188.625 352 224 352L250.875 486.25C253.75 501.25 267 512 282.25 512H357.75C373 512 386.125 501.25 389.125 486.25L416 352C451.375 352 480 323.375 480 288V160C480 124.625 451.375 96 416 96ZM256 288C238.375 288 224 273.625 224 256S238.375 224 256 224S288 238.375 288 256S273.625 288 256 288ZM384 288C366.375 288 352 273.625 352 256S366.375 224 384 224S416 238.375 416 256S401.625 288 384 288Z" />
        </Icon>
    </>
}