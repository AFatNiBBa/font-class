
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `piggy-bank` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/piggy-bank?s=duotone piggy-bank}
 * @preview ![piggy-bank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2MCAyMjRINTMwLjQ5QzUyMS43MTkgMjA0LjE1OCA1MDkgMTg2LjMwOSA0OTMuMTA5IDE3MS41MzlMNTEyIDk2SDQ4MEM0NTAuNiA5NiA0MjQuNjA5IDEwOS41IDQwNyAxMzAuMzJDMzk5LjQzIDEyOS4yMjEgMzkxLjg4MSAxMjggMzg0IDEyOEgyNTZDMTYxLjE4IDEyOCA5NiAyMDYuODgxIDk2IDI4OEM5NS45NjEgMzM4LjM3MSAxMTkuNjggMzg1LjgwOSAxNjAgNDE2VjQ4MEMxNjAgNDk3LjY3NCAxNzQuMzI2IDUxMiAxOTIgNTEySDIyNEMyNDEuNjc0IDUxMiAyNTYgNDk3LjY3NCAyNTYgNDgwVjQ0OEgzODRWNDgwQzM4NCA0OTcuNjc0IDM5OC4zMjYgNTEyIDQxNiA1MTJINDQ4QzQ2NS42NzQgNTEyIDQ4MCA0OTcuNjc0IDQ4MCA0ODBWNDE1LjI3OUM0OTEuODIyIDQwNi4zNDggNTAyLjM0OCAzOTUuODIyIDUxMS4yNzkgMzg0SDU2MEM1NjguODM2IDM4NCA1NzYgMzc2LjgzNiA1NzYgMzY4VjI0MEM1NzYgMjMxLjE2NCA1NjguODM2IDIyNCA1NjAgMjI0Wk00MzIgMjg4QzQyMy4xNjQgMjg4IDQxNiAyODAuODM2IDQxNiAyNzJTNDIzLjE2NCAyNTYgNDMyIDI1NlM0NDggMjYzLjE2NCA0NDggMjcyUzQ0MC44MzYgMjg4IDQzMiAyODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUxLjI2IDI1NS41MkMzOC4yNzIgMjUyLjg4MSAyOS44ODEgMjQwLjIxMSAzMi41MiAyMjcuMjIxQzM0Ljc0IDIxNS44MiA0NS40IDIwOCA1NyAyMDhINThDNjEuMzE1IDIwOCA2NCAyMDUuMzE0IDY0IDIwMi4wMDFWMTgyLjAwMUM2NCAxNzguNjg2IDYxLjMxNSAxNzYgNTggMTc2QzI5LjUgMTc2IDQuMSAxOTYuNCAwLjQ3MSAyMjQuNjE5QzAuMTU0IDIyNy4wMTggLTAuMDA0IDIyOS40MzIgMCAyMzEuODVDLTAuMDM5IDI2Mi44MTggMjUuMDMxIDI4Ny45NTUgNTYgMjg4SDk2Qzk2LjAxIDI3Ny4yNDYgOTcuMTQxIDI2Ni41MjEgOTkuMzY5IDI1Nkg1NkM1NC40MDggMjU2IDUyLjgyIDI1NS44NCA1MS4yNiAyNTUuNTJaTTQzMiAyNTZDNDIzLjE2NCAyNTYgNDE2IDI2My4xNjQgNDE2IDI3MlM0MjMuMTY0IDI4OCA0MzIgMjg4UzQ0OCAyODAuODM2IDQ0OCAyNzJTNDQwLjgzNiAyNTYgNDMyIDI1NlpNMzM5LjI1IDUuNzgxQzMyOC43NTIgMS45NjUgMzE3LjY3IDAuMDA4IDMwNi41IDBDMjUzLjQ4MSAtMC4wMTQgMjEwLjQ5IDQyLjk1NyAyMTAuNDc3IDk1Ljk3N0MyMTAuNDczIDEwOC41MDggMjEyLjkyNCAxMjAuOTIgMjE3LjY5IDEzMi41MUMyMzAuMjM2IDEyOS40OTIgMjQzLjA5NiAxMjcuOTc5IDI1NiAxMjhIMzg0QzM4OC4yNSAxMjguMDMzIDM5Mi40OTYgMTI4LjMyOCAzOTYuNzExIDEyOC44ODFDNDE0LjgzNiA3OS4wMiAzODkuMTExIDIzLjkwNiAzMzkuMjUgNS43ODFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PiggyBank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M560 224H530.49C521.719 204.158 509 186.309 493.109 171.539L512 96H480C450.6 96 424.609 109.5 407 130.32C399.43 129.221 391.881 128 384 128H256C161.18 128 96 206.881 96 288C95.961 338.371 119.68 385.809 160 416V480C160 497.674 174.326 512 192 512H224C241.674 512 256 497.674 256 480V448H384V480C384 497.674 398.326 512 416 512H448C465.674 512 480 497.674 480 480V415.279C491.822 406.348 502.348 395.822 511.279 384H560C568.836 384 576 376.836 576 368V240C576 231.164 568.836 224 560 224ZM432 288C423.164 288 416 280.836 416 272S423.164 256 432 256S448 263.164 448 272S440.836 288 432 288Z" />
            <path d="M51.26 255.52C38.272 252.881 29.881 240.211 32.52 227.221C34.74 215.82 45.4 208 57 208H58C61.315 208 64 205.314 64 202.001V182.001C64 178.686 61.315 176 58 176C29.5 176 4.1 196.4 0.471 224.619C0.154 227.018 -0.004 229.432 0 231.85C-0.039 262.818 25.031 287.955 56 288H96C96.01 277.246 97.141 266.521 99.369 256H56C54.408 256 52.82 255.84 51.26 255.52ZM432 256C423.164 256 416 263.164 416 272S423.164 288 432 288S448 280.836 448 272S440.836 256 432 256ZM339.25 5.781C328.752 1.965 317.67 0.008 306.5 0C253.481 -0.014 210.49 42.957 210.477 95.977C210.473 108.508 212.924 120.92 217.69 132.51C230.236 129.492 243.096 127.979 256 128H384C388.25 128.033 392.496 128.328 396.711 128.881C414.836 79.02 389.111 23.906 339.25 5.781Z" />
        </Icon>
    </>
}