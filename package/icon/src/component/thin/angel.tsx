
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angel` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angel?s=thin angel}
 * @preview ![angel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODEuMDkzIDkwLjI5N0MxODQuNSA4Ny40ODQgMTg0Ljk4NCA4Mi40MzcgMTgyLjE1NiA3OS4wNDdDMTc4LjA3OCA3NC4wOTQgMTc2IDY5LjAzMSAxNzYgNjRDMTc2IDQxLjI5NyAyMjEuOTk5IDE2IDI4OCAxNkMzNTMuOTk5IDE2IDQwMCA0MS4yOTcgNDAwIDY0QzQwMCA2OS4wMzEgMzk3LjkyMSA3NC4wOTQgMzkzLjg0MyA3OS4wNDdDMzkxLjAxNSA4Mi40MzcgMzkxLjUgODcuNDg0IDM5NC45MDYgOTAuMjk3QzM5Ni4zOSA5MS41MzEgMzk4LjIwMyA5Mi4xNDEgNDAwIDkyLjE0MUM0MDIuMjk2IDkyLjE0MSA0MDQuNTc4IDkxLjE1NiA0MDYuMTU2IDg5LjIzNEM0MTIuNjg3IDgxLjM1OSA0MTYgNzIuODU5IDQxNiA2NEM0MTYgMjguMTA5IDM1OS43ODEgMCAyODggMFMxNjAgMjguMTA5IDE2MCA2NEMxNjAgNzIuODU5IDE2My4zMTIgODEuMzU5IDE2OS44NDMgODkuMjM0QzE3Mi42MjUgOTIuNjQxIDE3Ny43MDMgOTMuMDc4IDE4MS4wOTMgOTAuMjk3Wk01NzEuNzQyIDQ1My4xMjVMNTMzLjYxNyAzNzQuNUM1MjYuOTkyIDM2MSA1MjYuOTkyIDM0NC44NzUgNTMzLjYxNyAzMzEuMzc1QzUzOC4zNjcgMzIxLjYyNSA1NDIuMjQyIDMxNC43NSA1NDUuNDkyIDMwOS4yNUM1NTQuOTkyIDI5Mi43NSA1NTkuOTkyIDI4Mi43NSA1NTkuOTkyIDI1NkM1NTkuOTkyIDIwNC44NzUgNTEzLjExNyAxNjAgNDU5LjYxOSAxNjBDNDM0Ljc0NiAxNjAgNDEwLjYyMSAxNzAuMjUgMzkzLjI0NiAxODguMTI1TDMyMC42MjkgMjYxLjQ5NEMzMDcuOTU3IDI1Ny4yNzMgMjk2LjI4NSAyNTYgMjg3Ljk5IDI1NkMyNzkuNzA1IDI1NiAyNjguMTI3IDI1Ny4yNiAyNTUuNTQ4IDI2MS40MjJMMTgzLjAwNCAxODguMjVDMTY1LjUwNCAxNzAuMjUgMTQxLjI1NCAxNjAgMTE2LjUwNSAxNjBDNjMuMDA3IDE2MCAxNi4wMDcgMjA0Ljg3NSAxNi4wMDcgMjU2QzE2LjAwNyAyODIuNzUgMjEuMDA3IDI5Mi43NSAzMC41MDcgMzA5LjI1QzMzLjc1NyAzMTQuNzUgMzcuNjMyIDMyMS41IDQyLjM4MiAzMzEuMjVDNDkuMDA3IDM0NC43NSA0OS4wMDcgMzYwLjg3NSA0Mi4zODIgMzc0LjM3NUw0LjI1NyA0NTMuMTI1Qy0yLjExNiA0NjYgLTEuMjQxIDQ4MC44NzUgNi4yNTcgNDkzQzEzLjc1NyA1MDQuODc1IDI2LjUwNyA1MTIgNDAuNTA3IDUxMkg1MzUuNjE3QzU0OS40OTIgNTEyIDU2Mi4yNDIgNTA0Ljg3NSA1NjkuNzQyIDQ5M0M1NzcuMjQgNDgwLjg3NSA1NzguMTE1IDQ2NS44NzUgNTcxLjc0MiA0NTMuMTI1Wk00MC41MDcgNDk2QzMyLjA5NyA0OTYgMjQuMzUxIDQ5MS42ODQgMTkuODY1IDQ4NC41ODJDMTUuMjI4IDQ3Ny4wODggMTQuNzU1IDQ2Ny45ODIgMTguNjU4IDQ2MC4wOTZMNTYuNzQ2IDM4MS40MjRDNjUuNTM5IDM2My41MDggNjUuNTM5IDM0Mi4xMTcgNTYuNzY1IDMyNC4yNDJDNTEuNzcxIDMxMy45OSA0Ny42OTkgMzA2Ljg5MyA0NC4zNzMgMzAxLjI2NkMzNS41NzggMjg1Ljk4OCAzMi4wMDcgMjc4Ljg3NyAzMi4wMDcgMjU2QzMyLjAwNyAyMTMuMzgzIDcxLjQ5MiAxNzYgMTE2LjUwNSAxNzZDMTM3LjAxNSAxNzYgMTU3LjA3MiAxODQuNTI5IDE3MS42NCAxOTkuNTE0TDIzOS43MzggMjY4LjIwM0MyMjAuOTc0IDI3OC4xMTcgMjA1LjIyNCAyOTMuNTM1IDE5NS4zNzEgMzEzLjI0MkwxMDMuOTk2IDQ5Nkg0MC41MDdaTTEyMS44ODQgNDk2TDIwOS42ODEgMzIwLjM5OEMyMjkuNzIgMjgwLjMyNCAyNzAuMDI3IDI3MiAyODcuOTkgMjcyQzMwNS45MDIgMjcyIDM0Ni4yNjEgMjgwLjMyNCAzNjYuMjk4IDMyMC4zOThMNDU0LjA5NSA0OTZIMTIxLjg4NFpNNTU2LjIxNCA0ODQuNDU1QzU1MS42NDggNDkxLjY4NCA1NDMuOTQ5IDQ5NiA1MzUuNjE3IDQ5Nkg0NzEuOTg0TDM4MC42MDkgMzEzLjI0MkMzNzAuNzg1IDI5My41OTQgMzU1LjA5NyAyNzguMjA5IDMzNi40MSAyNjguMjkxTDQwNC43MTggMTk5LjI3N0M0MTkuMDk3IDE4NC40ODQgNDM5LjEwOSAxNzYgNDU5LjYxOSAxNzZDNTA0LjU2NiAxNzYgNTQzLjk5MiAyMTMuMzgzIDU0My45OTIgMjU2QzU0My45OTIgMjc4Ljg3NyA1NDAuNDIxIDI4NS45ODggNTMxLjcxNiAzMDEuMTA5QzUyOC4zIDMwNi44OTEgNTI0LjIyNiAzMTQuMTE3IDUxOS4yNTQgMzI0LjMyNkM1MTAuNDYxIDM0Mi4yNCA1MTAuNDYxIDM2My42MzMgNTE5LjIyIDM4MS40OEw1NTcuNDMxIDQ2MC4yNzlDNTYxLjI3NSA0NjcuOTY5IDU2MC43OTEgNDc3LjA1NSA1NTYuMjE0IDQ4NC40NTVaTTIwOC4wMDIgMTQ0QzIwOC4wMDIgMTg4LjI1IDI0My43NTIgMjI0IDI4OCAyMjRTMzY3Ljk5OCAxODguMjUgMzY3Ljk5OCAxNDRTMzMyLjI0OCA2NCAyODggNjRTMjA4LjAwMiA5OS43NSAyMDguMDAyIDE0NFpNMzUxLjk5OCAxNDRDMzUxLjk5OCAxNzkuMjg5IDMyMy4yODcgMjA4IDI4OCAyMDhTMjI0LjAwMiAxNzkuMjg5IDIyNC4wMDIgMTQ0QzIyNC4wMDIgMTA4LjcwOSAyNTIuNzEzIDgwIDI4OCA4MFMzNTEuOTk4IDEwOC43MDkgMzUxLjk5OCAxNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Angel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M181.093 90.297C184.5 87.484 184.984 82.437 182.156 79.047C178.078 74.094 176 69.031 176 64C176 41.297 221.999 16 288 16C353.999 16 400 41.297 400 64C400 69.031 397.921 74.094 393.843 79.047C391.015 82.437 391.5 87.484 394.906 90.297C396.39 91.531 398.203 92.141 400 92.141C402.296 92.141 404.578 91.156 406.156 89.234C412.687 81.359 416 72.859 416 64C416 28.109 359.781 0 288 0S160 28.109 160 64C160 72.859 163.312 81.359 169.843 89.234C172.625 92.641 177.703 93.078 181.093 90.297ZM571.742 453.125L533.617 374.5C526.992 361 526.992 344.875 533.617 331.375C538.367 321.625 542.242 314.75 545.492 309.25C554.992 292.75 559.992 282.75 559.992 256C559.992 204.875 513.117 160 459.619 160C434.746 160 410.621 170.25 393.246 188.125L320.629 261.494C307.957 257.273 296.285 256 287.99 256C279.705 256 268.127 257.26 255.548 261.422L183.004 188.25C165.504 170.25 141.254 160 116.505 160C63.007 160 16.007 204.875 16.007 256C16.007 282.75 21.007 292.75 30.507 309.25C33.757 314.75 37.632 321.5 42.382 331.25C49.007 344.75 49.007 360.875 42.382 374.375L4.257 453.125C-2.116 466 -1.241 480.875 6.257 493C13.757 504.875 26.507 512 40.507 512H535.617C549.492 512 562.242 504.875 569.742 493C577.24 480.875 578.115 465.875 571.742 453.125ZM40.507 496C32.097 496 24.351 491.684 19.865 484.582C15.228 477.088 14.755 467.982 18.658 460.096L56.746 381.424C65.539 363.508 65.539 342.117 56.765 324.242C51.771 313.99 47.699 306.893 44.373 301.266C35.578 285.988 32.007 278.877 32.007 256C32.007 213.383 71.492 176 116.505 176C137.015 176 157.072 184.529 171.64 199.514L239.738 268.203C220.974 278.117 205.224 293.535 195.371 313.242L103.996 496H40.507ZM121.884 496L209.681 320.398C229.72 280.324 270.027 272 287.99 272C305.902 272 346.261 280.324 366.298 320.398L454.095 496H121.884ZM556.214 484.455C551.648 491.684 543.949 496 535.617 496H471.984L380.609 313.242C370.785 293.594 355.097 278.209 336.41 268.291L404.718 199.277C419.097 184.484 439.109 176 459.619 176C504.566 176 543.992 213.383 543.992 256C543.992 278.877 540.421 285.988 531.716 301.109C528.3 306.891 524.226 314.117 519.254 324.326C510.461 342.24 510.461 363.633 519.22 381.48L557.431 460.279C561.275 467.969 560.791 477.055 556.214 484.455ZM208.002 144C208.002 188.25 243.752 224 288 224S367.998 188.25 367.998 144S332.248 64 288 64S208.002 99.75 208.002 144ZM351.998 144C351.998 179.289 323.287 208 288 208S224.002 179.289 224.002 144C224.002 108.709 252.713 80 288 80S351.998 108.709 351.998 144Z" />
        </Icon>
    </>
}