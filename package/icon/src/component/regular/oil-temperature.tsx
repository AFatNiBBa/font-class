
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `oil-temperature` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/oil-temperature?s=regular oil-temperature}
 * @preview ![oil-temperature](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTYuMjAxIDQ2NC4yMDlDNTM1LjMxIDQ2MC40NzcgNTE0LjM1NyA0NDguNjg2IDQ5Ny4yMDEgNDMwLjk4NEM0ODguMTcgNDIxLjY3MiA0NzEuODI2IDQyMS42NzIgNDYyLjc5NSA0MzAuOTg0QzQ0Mi41NjIgNDUxLjg1NCA0MTMuODQ0IDQ2My44MzIgMzg0IDQ2My44MzJTMzI1LjQzNyA0NTEuODU0IDMwNS4yMDMgNDMwLjk4NEMyOTYuMTcyIDQyMS42NzIgMjc5LjgyOCA0MjEuNjcyIDI3MC43OTcgNDMwLjk4NEMyNTAuNTYyIDQ1MS44NTQgMjIxLjg0NCA0NjMuODMyIDE5MiA0NjMuODMyQzE1OS42NCA0NjMuODMyIDEyMy45NTUgNDUwLjMxNiAxMDUuMjA1IDQzMC45ODRDOTYuMTc0IDQyMS42NzIgNzkuODMgNDIxLjY3MiA3MC43OTkgNDMwLjk4NEM1MS42NTggNDUwLjc0IDM5LjE0MiA0NjAuNzYgMTkuNzk5IDQ2NC4yMDlDNi43NTIgNDY2LjUyOSAtMS45NTEgNDc5LjA0MSAwLjM3NyA0OTIuMTMzQzIuNjg5IDUwNS4yMDkgMTUuMDMzIDUxMy45NTkgMjguMjA1IDUxMS42MjFDNTQuMzkyIDUwNi45NDkgNzIuOTM5IDQ5NC44NjEgODkuMjA1IDQ4MC4xODZDMTE3LjIwNSA0OTkuOTI2IDE1NS4yMDMgNTExLjk5OCAxOTIgNTExLjk5OEMyMjYuODkgNTExLjk5OCAyNjAuODEyIDUwMC40NTkgMjg4IDQ3OS44MDlDMzQyLjMxMiA1MjEuMDYxIDQyNS40MjIgNTIxLjEyMyA0NzkuNzk1IDQ3OS45NjdDNTAwLjQwNCA0OTYuMzM0IDUyMy45NTEgNTA3LjM3MyA1NDcuNzk1IDUxMS42MjFDNTQ5LjIxNyA1MTEuODczIDU1MC42MzggNTExLjk5OCA1NTIuMDI5IDUxMS45OThDNTYzLjQzNSA1MTEuOTk4IDU3My41NiA1MDMuNzk5IDU3NS42MjMgNDkyLjEzM0M1NzcuOTUxIDQ3OS4wNDEgNTY5LjI0OCA0NjYuNTI5IDU1Ni4yMDEgNDY0LjIwOVpNMjg4IDM4NEMzMzIuMTgzIDM4NCAzNjggMzQ4LjE4MiAzNjggMzA0QzM2OCAyNjguMjM2IDM0NC4zNzcgMjM4LjMxMiAzMTIgMjI4LjA3VjE1MkgzNjBDMzczLjI1IDE1MiAzODQgMTQxLjI1IDM4NCAxMjhTMzczLjI1IDEwNCAzNjAgMTA0SDMxMlY0OEgzNjBDMzczLjI1IDQ4IDM4NCAzNy4yNSAzODQgMjRTMzczLjI1IDAgMzYwIDBIMjg4QzI3NC43NSAwIDI2NCAxMC43NSAyNjQgMjRWMjI4LjA3QzIzMS42MjMgMjM4LjMxMiAyMDggMjY4LjIzNiAyMDggMzA0QzIwOCAzNDguMTgyIDI0My44MTYgMzg0IDI4OCAzODRaTTI4OCAyNzJDMzA1LjY0NCAyNzIgMzIwIDI4Ni4zNTUgMzIwIDMwNFMzMDUuNjQ0IDMzNiAyODggMzM2UzI1NiAzMjEuNjQ1IDI1NiAzMDRTMjcwLjM1NSAyNzIgMjg4IDI3MlpNMjguMjA1IDM2Ny42MjFDNTQuMzkyIDM2Mi45NDkgNzIuOTM5IDM1MC44NjEgODkuMjA1IDMzNi4xODZDMTE3LjIwNSAzNTUuOTI2IDE1NS4yMDMgMzY3Ljk5OCAxOTIgMzY3Ljk5OEMxOTMuMzQ2IDM2Ny45OTggMTk0LjY1MiAzNjcuNzA1IDE5NS45OTYgMzY3LjY3QzE4Ni4wNjIgMzUzLjM0NiAxNzkuODAzIDMzNi41MTQgMTc3LjQ1MSAzMTguNDAyQzE0OS40MiAzMTUuMTM5IDEyMS4xOCAzMDMuNDU1IDEwNS4yMDUgMjg2Ljk4NEM5Ni4xNzQgMjc3LjY3MiA3OS44MyAyNzcuNjcyIDcwLjc5OSAyODYuOTg0QzUxLjY1OCAzMDYuNzQgMzkuMTQyIDMxNi43NiAxOS43OTkgMzIwLjIwOUM2Ljc1MiAzMjIuNTI5IC0xLjk1MSAzMzUuMDQxIDAuMzc3IDM0OC4xMzNDMi42ODkgMzYxLjIwOSAxNS4wMzMgMzY5Ljk1OSAyOC4yMDUgMzY3LjYyMVpNNDc5Ljc5NSAzMzUuOTY3QzUwMC40MDQgMzUyLjMzNCA1MjMuOTUxIDM2My4zNzMgNTQ3Ljc5NSAzNjcuNjIxQzU0OS4yMTcgMzY3Ljg3MyA1NTAuNjM4IDM2Ny45OTggNTUyLjAyOSAzNjcuOTk4QzU2My40MzUgMzY3Ljk5OCA1NzMuNTYgMzU5Ljc5OSA1NzUuNjIzIDM0OC4xMzNDNTc3Ljk1MSAzMzUuMDQxIDU2OS4yNDggMzIyLjUyOSA1NTYuMjAxIDMyMC4yMDlDNTM1LjMxIDMxNi40NzcgNTE0LjM1NyAzMDQuNjg2IDQ5Ny4yMDEgMjg2Ljk4NEM0ODguMTcgMjc3LjY3MiA0NzEuODI2IDI3Ny42NzIgNDYyLjc5NSAyODYuOTg0QzQ0NS44OTggMzA0LjQxMiA0MjIuOTk2IDMxNS4xNTQgMzk4LjU1MSAzMTguMzgzQzM5Ni4yNjcgMzM2LjAxIDM5MC4zOTIgMzUyLjQ5OCAzODAuOSAzNjYuNTY0QzQxNi4yNTIgMzY3LjIwNyA0NTEuODIgMzU3LjE0MSA0NzkuNzk1IDMzNS45NjdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function OilTemperature(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M556.201 464.209C535.31 460.477 514.357 448.686 497.201 430.984C488.17 421.672 471.826 421.672 462.795 430.984C442.562 451.854 413.844 463.832 384 463.832S325.437 451.854 305.203 430.984C296.172 421.672 279.828 421.672 270.797 430.984C250.562 451.854 221.844 463.832 192 463.832C159.64 463.832 123.955 450.316 105.205 430.984C96.174 421.672 79.83 421.672 70.799 430.984C51.658 450.74 39.142 460.76 19.799 464.209C6.752 466.529 -1.951 479.041 0.377 492.133C2.689 505.209 15.033 513.959 28.205 511.621C54.392 506.949 72.939 494.861 89.205 480.186C117.205 499.926 155.203 511.998 192 511.998C226.89 511.998 260.812 500.459 288 479.809C342.312 521.061 425.422 521.123 479.795 479.967C500.404 496.334 523.951 507.373 547.795 511.621C549.217 511.873 550.638 511.998 552.029 511.998C563.435 511.998 573.56 503.799 575.623 492.133C577.951 479.041 569.248 466.529 556.201 464.209ZM288 384C332.183 384 368 348.182 368 304C368 268.236 344.377 238.312 312 228.07V152H360C373.25 152 384 141.25 384 128S373.25 104 360 104H312V48H360C373.25 48 384 37.25 384 24S373.25 0 360 0H288C274.75 0 264 10.75 264 24V228.07C231.623 238.312 208 268.236 208 304C208 348.182 243.816 384 288 384ZM288 272C305.644 272 320 286.355 320 304S305.644 336 288 336S256 321.645 256 304S270.355 272 288 272ZM28.205 367.621C54.392 362.949 72.939 350.861 89.205 336.186C117.205 355.926 155.203 367.998 192 367.998C193.346 367.998 194.652 367.705 195.996 367.67C186.062 353.346 179.803 336.514 177.451 318.402C149.42 315.139 121.18 303.455 105.205 286.984C96.174 277.672 79.83 277.672 70.799 286.984C51.658 306.74 39.142 316.76 19.799 320.209C6.752 322.529 -1.951 335.041 0.377 348.133C2.689 361.209 15.033 369.959 28.205 367.621ZM479.795 335.967C500.404 352.334 523.951 363.373 547.795 367.621C549.217 367.873 550.638 367.998 552.029 367.998C563.435 367.998 573.56 359.799 575.623 348.133C577.951 335.041 569.248 322.529 556.201 320.209C535.31 316.477 514.357 304.686 497.201 286.984C488.17 277.672 471.826 277.672 462.795 286.984C445.898 304.412 422.996 315.154 398.551 318.383C396.267 336.01 390.392 352.498 380.9 366.564C416.252 367.207 451.82 357.141 479.795 335.967Z" />
        </Icon>
    </>
}