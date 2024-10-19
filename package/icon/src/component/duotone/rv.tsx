
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rv` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rv?s=duotone rv}
 * @preview ![rv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE0NCAzODRDMTA4LjY1NCAzODQgODAgNDEyLjY1NCA4MCA0NDhTMTA4LjY1NCA1MTIgMTQ0IDUxMkMxNzkuMzQ4IDUxMiAyMDggNDgzLjM0NiAyMDggNDQ4UzE3OS4zNDggMzg0IDE0NCAzODRaTTQ5NiAzODRDNDYwLjY1NCAzODQgNDMyIDQxMi42NTQgNDMyIDQ0OFM0NjAuNjU0IDUxMiA0OTYgNTEyQzUzMS4zNDggNTEyIDU2MCA0ODMuMzQ2IDU2MCA0NDhTNTMxLjM0OCAzODQgNDk2IDM4NFpNNjIxLjEyOSAyNjkuMjU0TDU2Mi44OTEgMjExLjAwMkM1NTAuODkzIDE5OSA1MzQuNTIxIDE5Mi4yNSA1MTcuNTIzIDE5Mi4yNUw0MTYgMTkyTDQxNS45MzIgMzk2LjE1NEM0MzIuOTQ5IDM2OS43MjcgNDYyLjIwOSAzNTIgNDk2IDM1MkM1MzcuNzQ0IDM1MiA1NzIuOTA0IDM3OC44MDUgNTg2LjEyNSA0MTYuMDE0SDYwOC4wMDZDNjI1LjYyOSA0MTYuMDE0IDY0MCA0MDEuNjM5IDY0MCAzODQuMDE0VjMxNC41MDRDNjM5Ljg3NSAyOTcuNTA0IDYzMy4xMjcgMjgxLjI1NCA2MjEuMTI5IDI2OS4yNTRaTTQ4MCAyODguMDA0VjI0MC4wMDJINTE3LjRDNTIxLjY0OCAyNDAuMDAyIDUyNS42NDggMjQxLjc1MiA1MjguNjQ2IDI0NC43NTJMNTcyLjAxNCAyODguMDA0SDQ4MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTExLjkgMzIuMDAySDM4My45MjZWMTZDMzgzLjkyNiA3LjI1IDM3Ni42NzggMCAzNjcuOTI4IDBIMjM5Ljk1M0MyMzEuMjA1IDAgMjIzLjk1NyA3LjI1IDIyMy45NTcgMTZWMzIuMDAySDYzLjk4OEMyOC43NDQgMzIuMDAyIDAgNjAuNzUyIDAgOTYuMDA0VjI5My41MUMwIDMxMC41MSA2Ljc1IDMyNi43NjIgMTguNzQ2IDMzOC43NjJMNjguODczIDM4OC44OThDODYuNDUxIDM2Ni41OTIgMTEzLjM5NSAzNTIgMTQ0IDM1MkMxODUuNjk3IDM1MiAyMjAuODMgMzc4Ljc0NCAyMzQuMDg2IDQxNS44ODlIMzgzLjkyNlYxNjAuMDA2SDU3NS44ODlDNTkzLjc2IDE2MC4wMDYgNjA4LjAwNiAxNDUuMjU0IDYwNy44ODEgMTI3LjI1NEM2MDcuNTA2IDc0LjYyNyA1NjQuNjQxIDMyLjAwMiA1MTEuOSAzMi4wMDJaTTI1NS45NTEgMjA4LjAwOEMyNTUuOTUxIDIxNi43NTggMjQ4LjcwMSAyMjQuMDA4IDIzOS45NTMgMjI0LjAwOEgxMTEuOTc5QzEwMy4yMyAyMjQuMDA4IDk1Ljk4MiAyMTYuNzU4IDk1Ljk4MiAyMDguMDA4VjE0NC4wMDRDOTUuOTgyIDEzNS4yNTQgMTAzLjIzIDEyOC4wMDQgMTExLjk3OSAxMjguMDA0SDIzOS45NTNDMjQ4LjcwMSAxMjguMDA0IDI1NS45NTEgMTM1LjI1NCAyNTUuOTUxIDE0NC4wMDRWMjA4LjAwOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Rv(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M144 384C108.654 384 80 412.654 80 448S108.654 512 144 512C179.348 512 208 483.346 208 448S179.348 384 144 384ZM496 384C460.654 384 432 412.654 432 448S460.654 512 496 512C531.348 512 560 483.346 560 448S531.348 384 496 384ZM621.129 269.254L562.891 211.002C550.893 199 534.521 192.25 517.523 192.25L416 192L415.932 396.154C432.949 369.727 462.209 352 496 352C537.744 352 572.904 378.805 586.125 416.014H608.006C625.629 416.014 640 401.639 640 384.014V314.504C639.875 297.504 633.127 281.254 621.129 269.254ZM480 288.004V240.002H517.4C521.648 240.002 525.648 241.752 528.646 244.752L572.014 288.004H480Z" />
            <path d="M511.9 32.002H383.926V16C383.926 7.25 376.678 0 367.928 0H239.953C231.205 0 223.957 7.25 223.957 16V32.002H63.988C28.744 32.002 0 60.752 0 96.004V293.51C0 310.51 6.75 326.762 18.746 338.762L68.873 388.898C86.451 366.592 113.395 352 144 352C185.697 352 220.83 378.744 234.086 415.889H383.926V160.006H575.889C593.76 160.006 608.006 145.254 607.881 127.254C607.506 74.627 564.641 32.002 511.9 32.002ZM255.951 208.008C255.951 216.758 248.701 224.008 239.953 224.008H111.979C103.23 224.008 95.982 216.758 95.982 208.008V144.004C95.982 135.254 103.23 128.004 111.979 128.004H239.953C248.701 128.004 255.951 135.254 255.951 144.004V208.008Z" />
        </Icon>
    </>
}