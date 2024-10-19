
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `car-bump` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-bump?s=duotone car-bump}
 * @preview ![car-bump](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NS41OTEgNDkyLjc1QzU3OC4wNzIgNTAyLjYyNSA1NjguODcyIDUxMiA1NTYuNzU1IDUxMkgzNzEuMTkzQzM1OS4yMjQgNTEyIDM1MC4wMjkgNTAyLjYyNSAzNTIuMzY1IDQ5Mi43NUMzNjMuMDIxIDQ0OSA0MDguODY1IDQxNiA0NjQuMDUyIDQxNkM1MTkuMDkxIDQxNiA1NjUuMDc5IDQ0OSA1NzUuNTkxIDQ5Mi43NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTM5Ljg3OSA0MTcuMTA3TDQxOC4wNjcgMzAxLjg3OUw0MzUuMzUyIDM0My42MDdDNDQxLjcxMSAzNTguOTY5IDQ1OS4zMjggMzY2LjI2NiA0NzQuNjkyIDM1OS45MDJMNTAyLjUwOCAzNDguMzc5QzUxNy44NzUgMzQyLjAxNiA1MjUuMTcyIDMyNC40IDUxOC44MDUgMzA5LjAzOUw0NDkuNjY4IDE0Mi4xMjdDNDM5Ljg0NCAxMTguNCA0MTYuNTk4IDEwNC40NjkgMzkyLjM3MSAxMDUuMTI5TDMyOC4yMTEgMzEuMTVDMzAyLjczNSAxLjc3NyAyNjEuMzI0IC04IDIyNS4zOTkgNi44ODFMNjcuNTIgNzIuMjc1QzMxLjU5NCA4Ny4xNTYgOS4yMjcgMTIzLjM1MiAxMS45ODEgMTYyLjEzOUwxOC45MjIgMjU5LjgxNEMxLjMyOCAyNzYuNDc5IC01LjI1OCAzMDIuNzY4IDQuNTcxIDMyNi40OTJMNzMuNzA3IDQ5My40MDRDODAuMDcxIDUwOC43NjggOTcuNjg4IDUxNi4wNjIgMTEzLjA0NyA1MDkuNjk5TDE0MC44NjcgNDk4LjE3OEMxNTYuMjMxIDQ5MS44MTQgMTYzLjUyOCA0NzQuMTk5IDE1Ny4xNjQgNDU4LjgzNkwxMzkuODc5IDQxNy4xMDdaTTM2Ni4yMTEgMTc2LjY5NUMzODEuNTc4IDE3MC4zMzIgMzk5LjE4OCAxNzcuNjI3IDQwNS41NTUgMTkyLjk5QzQxMS45MTggMjA4LjM1NCA0MDQuNjIxIDIyNS45NjkgMzg5LjI1OCAyMzIuMzMyQzM3My44OTkgMjM4LjY5NSAzNTYuMjgxIDIzMS4zOTggMzQ5LjkxOCAyMTYuMDM3QzM0My41NTUgMjAwLjY3MiAzNTAuODUyIDE4My4wNTkgMzY2LjIxMSAxNzYuNjk1Wk05MC41NjcgMTI3LjkxNEwyNDguNDQ2IDYyLjUxOEMyNjAuNDM4IDU3LjU1MSAyNzQuMjExIDYwLjc5OSAyODIuNzE5IDcwLjYwN0wzMzAuODgzIDEyNi4xNDVMNzcuMjY2IDIzMS4xOTlMNzIuMDU1IDE1Ny44NjdDNzEuMTI5IDE0NC45MiA3OC41NzEgMTMyLjg4MSA5MC41NjcgMTI3LjkxNFpNMTExLjA3MSAzNDcuNTYxQzk1LjcxMSAzNTMuOTI0IDc4LjA5NCAzNDYuNjI3IDcxLjczMSAzMzEuMjY2QzY1LjM2NyAzMTUuOSA3Mi42NjQgMjk4LjI4NyA4OC4wMjQgMjkxLjkyNEMxMDMuMzkxIDI4NS41NjEgMTIxLjAwNCAyOTIuODU1IDEyNy4zNjcgMzA4LjIxOVMxMjYuNDM4IDM0MS4xOTcgMTExLjA3MSAzNDcuNTYxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CarBump(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M575.591 492.75C578.072 502.625 568.872 512 556.755 512H371.193C359.224 512 350.029 502.625 352.365 492.75C363.021 449 408.865 416 464.052 416C519.091 416 565.079 449 575.591 492.75Z" />
            <path d="M139.879 417.107L418.067 301.879L435.352 343.607C441.711 358.969 459.328 366.266 474.692 359.902L502.508 348.379C517.875 342.016 525.172 324.4 518.805 309.039L449.668 142.127C439.844 118.4 416.598 104.469 392.371 105.129L328.211 31.15C302.735 1.777 261.324 -8 225.399 6.881L67.52 72.275C31.594 87.156 9.227 123.352 11.981 162.139L18.922 259.814C1.328 276.479 -5.258 302.768 4.571 326.492L73.707 493.404C80.071 508.768 97.688 516.062 113.047 509.699L140.867 498.178C156.231 491.814 163.528 474.199 157.164 458.836L139.879 417.107ZM366.211 176.695C381.578 170.332 399.188 177.627 405.555 192.99C411.918 208.354 404.621 225.969 389.258 232.332C373.899 238.695 356.281 231.398 349.918 216.037C343.555 200.672 350.852 183.059 366.211 176.695ZM90.567 127.914L248.446 62.518C260.438 57.551 274.211 60.799 282.719 70.607L330.883 126.145L77.266 231.199L72.055 157.867C71.129 144.92 78.571 132.881 90.567 127.914ZM111.071 347.561C95.711 353.924 78.094 346.627 71.731 331.266C65.367 315.9 72.664 298.287 88.024 291.924C103.391 285.561 121.004 292.855 127.367 308.219S126.438 341.197 111.071 347.561Z" />
        </Icon>
    </>
}