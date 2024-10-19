
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `font-case` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/font-case?s=solid font-case}
 * @preview ![font-case](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTkuOTk5IDE2MEM1ODcuNzU3IDE2MCA1NzcuMTk1IDE2NS44MDcgNTY5Ljg1OSAxNzQuNDY3QzU1Mi40IDE2NS41MjcgNTMyLjkyNSAxNjAgNTExLjk5OSAxNjBDNDQxLjQyMSAxNjAgMzgzLjk5OSAyMTcuNDA2IDM4My45OTkgMjg4VjM1MkMzODMuOTk5IDQyMi41OTQgNDQxLjQyMSA0ODAgNTExLjk5OSA0ODBDNTMyLjkyNSA0ODAgNTUyLjQgNDc0LjQ3MyA1NjkuODU5IDQ2NS41MzNDNTc3LjE5NSA0NzQuMTkzIDU4Ny43NTcgNDgwIDU5OS45OTkgNDgwQzYyMi4wOTMgNDgwIDYzOS45OTkgNDYyLjA5NCA2MzkuOTk5IDQ0MFYyMDBDNjM5Ljk5OSAxNzcuOTA2IDYyMi4wOTMgMTYwIDU5OS45OTkgMTYwWk01NTkuOTk5IDM1MkM1NTkuOTk5IDM3OC40NjkgNTM4LjQ2OCA0MDAgNTExLjk5OSA0MDBTNDYzLjk5OSAzNzguNDY5IDQ2My45OTkgMzUyVjI4OEM0NjMuOTk5IDI2MS41MzEgNDg1LjUzMSAyNDAgNTExLjk5OSAyNDBTNTU5Ljk5OSAyNjEuNTMxIDU1OS45OTkgMjg4VjM1MlpNMjEzLjUxMyA1OC4xMjNDMjA3LjcxNiA0Mi40MzggMTkyLjc0OSAzMiAxNzUuOTk5IDMyUzE0NC4yODMgNDIuNDM4IDEzOC40ODYgNTguMTIzTDIuNDkyIDQyNi4xMDlDLTUuMTY1IDQ0Ni44MjYgNS40MTMgNDY5Ljg1NyAyNi4xNDYgNDc3LjUxNEM0Ni44MTggNDg1LjE3IDY5Ljg2MyA0NzQuNTQ1IDc3LjUxOSA0NTMuODU3TDEwMy4zMzkgMzgzLjk4NkgyNDguNjZMMjc0LjQ4IDQ1My44NTdDMjgwLjQ0OSA0NjkuOTgyIDI5NS43MyA0NzkuOTgyIDMxMS45OTQgNDc5Ljk4MkMzMTYuNjAzIDQ3OS45ODIgMzIxLjI5IDQ3OS4yMDEgMzI1Ljg1MyA0NzcuNTE0QzM0Ni41ODUgNDY5Ljg1NyAzNTcuMTYzIDQ0Ni44MjYgMzQ5LjUwNyA0MjYuMTA5TDIxMy41MTMgNTguMTIzWk0xMzIuOTA0IDMwMy45ODhMMTc1Ljk5OSAxODcuMzY5TDIxOS4wOTUgMzAzLjk4OEgxMzIuOTA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FontCase(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M599.999 160C587.757 160 577.195 165.807 569.859 174.467C552.4 165.527 532.925 160 511.999 160C441.421 160 383.999 217.406 383.999 288V352C383.999 422.594 441.421 480 511.999 480C532.925 480 552.4 474.473 569.859 465.533C577.195 474.193 587.757 480 599.999 480C622.093 480 639.999 462.094 639.999 440V200C639.999 177.906 622.093 160 599.999 160ZM559.999 352C559.999 378.469 538.468 400 511.999 400S463.999 378.469 463.999 352V288C463.999 261.531 485.531 240 511.999 240S559.999 261.531 559.999 288V352ZM213.513 58.123C207.716 42.438 192.749 32 175.999 32S144.283 42.438 138.486 58.123L2.492 426.109C-5.165 446.826 5.413 469.857 26.146 477.514C46.818 485.17 69.863 474.545 77.519 453.857L103.339 383.986H248.66L274.48 453.857C280.449 469.982 295.73 479.982 311.994 479.982C316.603 479.982 321.29 479.201 325.853 477.514C346.585 469.857 357.163 446.826 349.507 426.109L213.513 58.123ZM132.904 303.988L175.999 187.369L219.095 303.988H132.904Z" />
        </Icon>
    </>
}