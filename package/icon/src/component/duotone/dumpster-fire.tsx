
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dumpster-fire` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster-fire?s=duotone dumpster-fire}
 * @preview ![dumpster-fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU1MS4yMSAxNjMuMzM4QzUzNi4zMzMgMTc2LjU4NCA1MjIuODI5IDE5MC40NTUgNTEwLjk1MyAyMDQuNDUxQzQ5MS40NDkgMTc4LjcwOSA0NjcuMzIgMTUyLjQ2NyA0MzkuOTM5IDEyOC4wOThDMzY5LjggMTkwLjgzIDMxOS45MTUgMjcyLjMwNyAzMTkuOTE1IDMyMS42NjhDMzE5LjkxNSA0MDkuMTQ1IDM5MS41NTQgNDgwIDQ3OS45NDcgNDgwUzYzOS45NzggNDA5LjE0NSA2MzkuOTc4IDMyMS42NjhDNjQwLjEwMyAyODUuMDU1IDYwMi45NyAyMDkuNDQ5IDU1MS4yMSAxNjMuMzM4Wk01MzIuNTgxIDM5Mi42NDhDNTE3LjgzIDQwMy4yNzEgNDk5LjcwMSA0MDkuNjQ1IDQ4MC4wNzIgNDA5LjY0NUM0MzEuMDYyIDQwOS42NDUgMzkxLjE3OSAzNzYuMTU0IDM5MS4xNzkgMzIxLjY2OEMzOTEuMTc5IDI5NC41NTEgNDA3LjY4MyAyNzAuNjg0IDQ0MC41NjQgMjI5LjgxOEM0NDUuMzE0IDIzNS4zMTggNTA3LjcwMyAzMTcuNzk1IDUwNy43MDMgMzE3Ljc5NUw1NDcuNDYgMjcwLjgwOUM1NTAuMzM1IDI3NS42ODIgNTUyLjgzNSAyODAuMzA1IDU1NS4yMSAyODQuODA1QzU3My44MzkgMzIxLjU0MyA1NjUuOTYyIDM2OC40MDYgNTMyLjU4MSAzOTIuNjQ4Wk00MTguODEgMTA0LjIzTDQxOC45MzUgMTAzLjk4TDQwNC41NTcgMzJIMzA0LjAzN1YxNTkuOTY0SDM2NC43OTlDMzgxLjA1MiAxNDAuNzIgMzk5LjA1NiAxMjEuODUgNDE4LjgxIDEwNC4yM1pNMjcyLjAzMSAzMi4xMjVIMTcxLjUxMUwxNDUuODgxIDE2MC4wODlIMjcyLjAzMVYzMi4xMjVaTTQ2MS4zMTggMTA0LjIzQzQ3OS41NzEgMTIwLjQ3NSA0OTYuODI1IDEzNy44NDUgNTEyLjQ1MyAxNTUuNzE1QzUxOC4yMDQgMTUwLjA5MiA1MjMuODMgMTQ0LjU5NCA1MjkuODMxIDEzOS4zNDVMNTUxLjA4NSAxMjAuMzVMNTcyLjMzOSAxMzkuMzQ1QzU3My40NjUgMTQwLjM0NSA1NzQuNDY1IDE0MS40NjkgNTc1LjQ2NSAxNDIuNDY5QzU3NS4zNCAxNDEuNzE5IDU3NS43MTUgMTQwLjk3IDU3NS40NjUgMTQwLjIyTDU1MS40NiA0NC4yNDdDNTQ5LjgzNSAzNy4xMjQgNTQzLjMzNCAzMi4xMjUgNTM2LjA4MiAzMi4xMjVINDM3LjE4OEw0NDkuNDQgOTMuNjA4TDQ2MS4zMTggMTA0LjIzWk0xNS45ODEgMTYwLjA4OUgxMTMuMjVMMTM4Ljg4IDMyLjEyNUgzOS45ODZDMzIuNzM0IDMyLjEyNSAyNi4yMzMgMzcuMTI0IDI0LjQ4MyA0NC4yNDdMMC40NzggMTQwLjIyQy0yLjAyMyAxNTAuMzQyIDUuNjA0IDE2MC4wODkgMTUuOTgxIDE2MC4wODlaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMyLjAwNiAxOTIuMDhMMzYuMDA4IDIyNC4wN0gxNi4wMDRDNy4yNTIgMjI0LjA3IDAgMjMxLjMxOCAwIDI0MC4wNjZWMjcyLjA1N0MwIDI4MC44MDUgNy4yNTIgMjg4LjA1MyAxNi4wMDQgMjg4LjA1M0g0NC4wMDhMNjQuMDEyIDQ0OC4wMDhWNDY0LjAwNEM2NC4wMTIgNDcyLjc1MiA3MS4yNjQgNDgwIDgwLjAxNiA0ODBIMTEyLjAyMUMxMjAuNzczIDQ4MCAxMjguMDI1IDQ3Mi43NTIgMTI4LjAyNSA0NjQuMDA0VjQ0OC4wMDhIMzM2LjgxNkMzMDYuNjg2IDQxNC4yNjggMjg4LjA1NyAzNzAuMTU0IDI4OC4wNTcgMzIxLjY2OEMyODguMDU3IDI4NS44MDUgMzA3LjkzNiAyMzguODE2IDM0MC42OTEgMTkyLjA4SDMyLjAwNlpNNTU1LjIzMiAyODQuODA1QzU1Mi44NTcgMjgwLjMwNSA1NTAuMzU3IDI3NS42ODIgNTQ3LjQ4MiAyNzAuODA5TDUwNy43MjUgMzE3Ljc5NUM1MDcuNzI1IDMxNy43OTUgNDQ1LjMzNiAyMzUuMzE4IDQ0MC41ODYgMjI5LjgxOEM0MDcuNzA1IDI3MC42ODQgMzkxLjIwMSAyOTQuNTUxIDM5MS4yMDEgMzIxLjY2OEMzOTEuMjAxIDM3Ni4xNTQgNDMxLjA4NCA0MDkuNjQ1IDQ4MC4wOTQgNDA5LjY0NUM0OTkuNzIzIDQwOS42NDUgNTE3Ljg1MiA0MDMuMjcxIDUzMi42MDQgMzkyLjY0OEM1NjUuOTg0IDM2OC40MDYgNTczLjg2MSAzMjEuNTQzIDU1NS4yMzIgMjg0LjgwNVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function DumpsterFire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M551.21 163.338C536.333 176.584 522.829 190.455 510.953 204.451C491.449 178.709 467.32 152.467 439.939 128.098C369.8 190.83 319.915 272.307 319.915 321.668C319.915 409.145 391.554 480 479.947 480S639.978 409.145 639.978 321.668C640.103 285.055 602.97 209.449 551.21 163.338ZM532.581 392.648C517.83 403.271 499.701 409.645 480.072 409.645C431.062 409.645 391.179 376.154 391.179 321.668C391.179 294.551 407.683 270.684 440.564 229.818C445.314 235.318 507.703 317.795 507.703 317.795L547.46 270.809C550.335 275.682 552.835 280.305 555.21 284.805C573.839 321.543 565.962 368.406 532.581 392.648ZM418.81 104.23L418.935 103.98L404.557 32H304.037V159.964H364.799C381.052 140.72 399.056 121.85 418.81 104.23ZM272.031 32.125H171.511L145.881 160.089H272.031V32.125ZM461.318 104.23C479.571 120.475 496.825 137.845 512.453 155.715C518.204 150.092 523.83 144.594 529.831 139.345L551.085 120.35L572.339 139.345C573.465 140.345 574.465 141.469 575.465 142.469C575.34 141.719 575.715 140.97 575.465 140.22L551.46 44.247C549.835 37.124 543.334 32.125 536.082 32.125H437.188L449.44 93.608L461.318 104.23ZM15.981 160.089H113.25L138.88 32.125H39.986C32.734 32.125 26.233 37.124 24.483 44.247L0.478 140.22C-2.023 150.342 5.604 160.089 15.981 160.089Z" />
            <path d="M32.006 192.08L36.008 224.07H16.004C7.252 224.07 0 231.318 0 240.066V272.057C0 280.805 7.252 288.053 16.004 288.053H44.008L64.012 448.008V464.004C64.012 472.752 71.264 480 80.016 480H112.021C120.773 480 128.025 472.752 128.025 464.004V448.008H336.816C306.686 414.268 288.057 370.154 288.057 321.668C288.057 285.805 307.936 238.816 340.691 192.08H32.006ZM555.232 284.805C552.857 280.305 550.357 275.682 547.482 270.809L507.725 317.795C507.725 317.795 445.336 235.318 440.586 229.818C407.705 270.684 391.201 294.551 391.201 321.668C391.201 376.154 431.084 409.645 480.094 409.645C499.723 409.645 517.852 403.271 532.604 392.648C565.984 368.406 573.861 321.543 555.232 284.805Z" />
        </Icon>
    </>
}