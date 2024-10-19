
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `croissant` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/croissant?s=solid croissant}
 * @preview ![croissant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDkuMTE3IDM4OC4wMDVMMTA5Ljk3OCA0NjUuNzU2QzEzMC40ODEgNDg0Ljg4MSAxNTQuNDg0IDQ5OS44ODIgMTgwLjYxMyA1MDkuODgyQzE5MS4zNjQgNTE0LjAwNyAyMDMuNDkxIDUxMi4wMDcgMjEyLjI0MiA1MDQuNzU3QzIyMS4xMTkgNDk3LjUwNyAyMjUuNDk0IDQ4Ni4wMDYgMjIzLjYxOSA0NzQuNzU2TDIwOS4xMTcgMzg4LjAwNVpNNTA5LjkxIDE4MC42MjdDNDk5LjkwOSAxNTQuNTAyIDQ4NC45MDcgMTMwLjUwMiA0NjUuNzc5IDExMC4wMDFMMzg4LjAxOCAyMDkuMTI4TDQ3NC43OCAyMjMuNjI4QzQ3Ni41MyAyMjMuODc4IDQ3OC4yODEgMjI0LjAwMyA0ODAuMDMxIDIyNC4wMDNDNDkwLjUzMiAyMjQuMDAzIDUwMC40MDkgMjE4Ljg3OCA1MDYuNDEgMjEwLjEyOEM1MTIuMjg1IDIwMS41MDMgNTEzLjY2MSAxOTAuNTAzIDUwOS45MSAxODAuNjI3Wk0yMzQuODcxIDIyLjYyNUMyMjkuODcgNi4zNzUgMjEyLjk5MyAtMy4xMjUgMTk2LjQ5IDFDMTAwLjIyNiAyNSAyNC45NjYgMTAwLjI1MSAwLjk2MiAxOTYuNTAzQy0zLjE2MyAyMTMuMDAzIDYuMzM4IDIyOS44NzggMjIuNTkgMjM0Ljg3OEwyMzAuNjIgMjk4Ljg3OUMyNDEuODcyIDMwMi4zNzkgMjU0LjI0OCAyOTkuMjU0IDI2Mi42MjUgMjkwLjg3OUwyOTAuODc5IDI2Mi42MjhDMjk5LjI1NSAyNTQuMjUzIDMwMi4zOCAyNDEuODc4IDI5OC44OCAyMzAuNjI4TDIzNC44NzEgMjIuNjI1Wk00NDcuNzc2IDY1LjYyNkM0NDYuNjUxIDU3LjEyNiA0NDIuMjc1IDQ5LjM3NiA0MzUuMzk5IDQ0LjI1MUMzOTcuNzY5IDE1LjYyNSAzNTEuNzYyIDAuMTI1IDMwNC41MDYgMEMyODkuODc5IDAgMjc1LjM3NiAxLjUgMjYxLjI0OSA0LjVDMjYyLjYyNSA3LjM3NSAyNjQuNSAxMCAyNjUuNSAxMy4xMjVMMzI5LjUwOSAyMjEuMTI4QzMyOS41MDkgMjIxLjM3OCAzMjkuNTA5IDIyMS42MjggMzI5LjYzNCAyMjEuNzUzQzMzNS42MzUgMjE5Ljg3OCAzNDEuMjYxIDIxNi43NTMgMzQ1LjEzNiAyMTEuNzUzTDQ0MS4xNSA4OS41MDFDNDQ2LjUyNiA4Mi43NTEgNDQ4LjkwMSA3NC4xMjYgNDQ3Ljc3NiA2NS42MjZaTTIyMS43NDQgMzI5LjYyOUMyMjEuNjE5IDMyOS41MDQgMjIxLjM2OSAzMjkuNjI5IDIyMS4xMTkgMzI5LjUwNEwxMy4wODkgMjY1LjUwNEMxMC4yMTMgMjY0LjUwNCA3LjMzOCAyNjMuMjUzIDQuNTg4IDI2MS44NzhDLTcuOTE0IDMyMi43NTQgNi41ODggMzg2LjAwNSA0NC4yMTggNDM1LjM4MUM0OS4zNDQgNDQyLjI1NiA1Ny4wOTUgNDQ2LjYzMSA2NS41OTYgNDQ3Ljc1NkM2Ni45NzIgNDQ3Ljg4MSA2OC4zNDcgNDQ4LjAwNiA2OS41OTcgNDQ4LjAwNkM3Ni44NDggNDQ4LjAwNiA4My43MjQgNDQ1LjYzMSA4OS4zNSA0NDEuMTMxTDIxMS43NDIgMzQ1LjEzQzIxNi44NjggMzQxLjEzIDIxOS44NjkgMzM1LjYyOSAyMjEuNzQ0IDMyOS42MjlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Croissant(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M209.117 388.005L109.978 465.756C130.481 484.881 154.484 499.882 180.613 509.882C191.364 514.007 203.491 512.007 212.242 504.757C221.119 497.507 225.494 486.006 223.619 474.756L209.117 388.005ZM509.91 180.627C499.909 154.502 484.907 130.502 465.779 110.001L388.018 209.128L474.78 223.628C476.53 223.878 478.281 224.003 480.031 224.003C490.532 224.003 500.409 218.878 506.41 210.128C512.285 201.503 513.661 190.503 509.91 180.627ZM234.871 22.625C229.87 6.375 212.993 -3.125 196.49 1C100.226 25 24.966 100.251 0.962 196.503C-3.163 213.003 6.338 229.878 22.59 234.878L230.62 298.879C241.872 302.379 254.248 299.254 262.625 290.879L290.879 262.628C299.255 254.253 302.38 241.878 298.88 230.628L234.871 22.625ZM447.776 65.626C446.651 57.126 442.275 49.376 435.399 44.251C397.769 15.625 351.762 0.125 304.506 0C289.879 0 275.376 1.5 261.249 4.5C262.625 7.375 264.5 10 265.5 13.125L329.509 221.128C329.509 221.378 329.509 221.628 329.634 221.753C335.635 219.878 341.261 216.753 345.136 211.753L441.15 89.501C446.526 82.751 448.901 74.126 447.776 65.626ZM221.744 329.629C221.619 329.504 221.369 329.629 221.119 329.504L13.089 265.504C10.213 264.504 7.338 263.253 4.588 261.878C-7.914 322.754 6.588 386.005 44.218 435.381C49.344 442.256 57.095 446.631 65.596 447.756C66.972 447.881 68.347 448.006 69.597 448.006C76.848 448.006 83.724 445.631 89.35 441.131L211.742 345.13C216.868 341.13 219.869 335.629 221.744 329.629Z" />
        </Icon>
    </>
}