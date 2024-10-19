
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tty` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tty?s=thin tty}
 * @preview ![tty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMjU2SDY0QzQ2LjMyNiAyNTYgMzIgMjcwLjMyNiAzMiAyODhWNDgwQzMyIDQ5Ny42NzIgNDYuMzI2IDUxMiA2NCA1MTJINDQ4QzQ2NS42NzQgNTEyIDQ4MCA0OTcuNjcyIDQ4MCA0ODBWMjg4QzQ4MCAyNzAuMzI2IDQ2NS42NzQgMjU2IDQ0OCAyNTZaTTIxNiAyNzJIMjk2VjMzNkgyMTZWMjcyWk0yMTYgMzUySDI5NlY0MTZIMjE2VjM1MlpNMTI4IDI3MkgyMDBWMzM2SDEyOFYyNzJaTTEyOCAzNTJIMjAwVjQxNkgxMjhWMzUyWk0xMTIgNDk2SDY0QzU1LjE3OCA0OTYgNDggNDg4LjgyMiA0OCA0ODBWNDMySDExMlY0OTZaTTExMiA0MTZINDhWMzUySDExMlY0MTZaTTExMiAzMzZINDhWMjg4QzQ4IDI3OS4xNzggNTUuMTc4IDI3MiA2NCAyNzJIMTEyVjMzNlpNMzg0IDQ5NkgxMjhWNDMySDM4NFY0OTZaTTM4NCA0MTZIMzEyVjM1MkgzODRWNDE2Wk0zODQgMzM2SDMxMlYyNzJIMzg0VjMzNlpNNDY0IDQ4MEM0NjQgNDg4LjgyMiA0NTYuODIyIDQ5NiA0NDggNDk2SDQwMFY0MzJINDY0VjQ4MFpNNDY0IDQxNkg0MDBWMzUySDQ2NFY0MTZaTTQ2NCAzMzZINDAwVjI3Mkg0NDhDNDU2LjgyMiAyNzIgNDY0IDI3OS4xNzggNDY0IDI4OFYzMzZaTTUwNC45MiAxMDIuOTQ1QzM2Ny42NTggLTM0LjMxOCAxNDQuMzM0IC0zNC4zMDkgNy4wOSAxMDIuOTM4QzIuNDE2IDEwNy42MTEgMCAxMTMuNzQ2IDAgMTE5LjkzOUMwIDEyNC4zMjYgMS4yMDkgMTI4Ljc0IDMuNjg4IDEzMi42OTFMNDUuODczIDIwMC4xNzZDNTEuOTc3IDIwOS45NTEgNjQuMzQ2IDIxNC4wNzQgNzUuMTc4IDIwOS43NzNMMTU5LjUwMiAxNzYuMDQ5QzE2OC42NyAxNzIuNDE4IDE3NC42MDcgMTYzLjQ5NCAxNzQuNjA3IDE1My44NEMxNzQuNjA3IDE1My4wMDIgMTc0LjU2MiAxNTIuMTYyIDE3NC40NzMgMTUxLjMxOEwxNjkuMTU4IDk4LjA3NEMyMjUuMzM2IDc4Ljg5NSAyODYuNTg4IDc4Ljg4NyAzNDIuNzQgOTguMDU3TDMzNy40NDMgMTUxLjMzNEMzMzcuMzYxIDE1Mi4xNDEgMzM3LjMyMiAxNTIuOTQ3IDMzNy4zMjIgMTUzLjc0NkMzMzcuMzIyIDE2My40NjEgMzQzLjIyMyAxNzIuMzU1IDM1Mi4zODEgMTc2LjA0OUw0MzYuNzY2IDIwOS43OTlDNDQ3LjY0NiAyMTQuMDQ5IDQ2MCAyMDkuOTk0IDQ2Ni4xMzcgMjAwLjE1TDUwOC4zMDMgMTMyLjY4NEM1MTAuNzg3IDEyOC43MzQgNTEyIDEyNC4zMTQgNTEyIDExOS45MjhDNTEyIDExMy43MzggNTA5LjU4NiAxMDcuNjExIDUwNC45MiAxMDIuOTQ1Wk00OTQuNzM0IDEyNC4yMDNMNDUyLjU1OSAxOTEuNjg2QzQ1MC40OTQgMTk0Ljk5NiA0NDYuMzAxIDE5Ni4zNDYgNDQyLjcwNyAxOTQuOTQzTDM1OC4zNjMgMTYxLjIwOUMzNTUuMzc5IDE2MC4wMDYgMzUzLjM2MyAxNTcuMDU3IDM1My4zNjMgMTUzLjA0M0MzNTMuMzYzIDE1My4wMDIgMzUzLjM2NSAxNTIuOTU5IDM1My4zNjUgMTUyLjkxOEMzNTkuNTcgOTAuNTEgMzU4LjI5MyAxMDMuMzU1IDM1OS45MTYgODcuMDE0QzI4NC4xNjQgNjEuMTQ2IDIyNy45MDQgNjEuMTA1IDE1MS45NzcgODcuMDMzQzE1My42MDcgMTAzLjM3OSAxNTIuMjk5IDkwLjIwNSAxNTguNjA3IDE1My44MzhDMTU4LjYwNyAxNTcuMDQxIDE1Ni42IDE1OS45OSAxNTMuNTYxIDE2MS4xOTNMNjkuMjczIDE5NC45MDJDNjUuNjk3IDE5Ni4zMjIgNjEuNDcxIDE5NC45NDcgNTkuNDM5IDE5MS42OTVMMTcuMjQyIDEyNC4xOTFDMTQuMjg3IDExOS40NzUgMTcuMjc1IDExNS4zODEgMTguNDA0IDExNC4yNTJDODEuNzYgNTAuODkzIDE2Ni4xNDEgMTYgMjU1Ljk5OCAxNkMzNDUuODU5IDE2IDQzMC4yNDQgNTAuODk2IDQ5My42MDUgMTE0LjI2QzQ5Ni4yMzggMTE2Ljg4OSA0OTYuODI4IDEyMC44NzUgNDk0LjczNCAxMjQuMjAzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 256H64C46.326 256 32 270.326 32 288V480C32 497.672 46.326 512 64 512H448C465.674 512 480 497.672 480 480V288C480 270.326 465.674 256 448 256ZM216 272H296V336H216V272ZM216 352H296V416H216V352ZM128 272H200V336H128V272ZM128 352H200V416H128V352ZM112 496H64C55.178 496 48 488.822 48 480V432H112V496ZM112 416H48V352H112V416ZM112 336H48V288C48 279.178 55.178 272 64 272H112V336ZM384 496H128V432H384V496ZM384 416H312V352H384V416ZM384 336H312V272H384V336ZM464 480C464 488.822 456.822 496 448 496H400V432H464V480ZM464 416H400V352H464V416ZM464 336H400V272H448C456.822 272 464 279.178 464 288V336ZM504.92 102.945C367.658 -34.318 144.334 -34.309 7.09 102.938C2.416 107.611 0 113.746 0 119.939C0 124.326 1.209 128.74 3.688 132.691L45.873 200.176C51.977 209.951 64.346 214.074 75.178 209.773L159.502 176.049C168.67 172.418 174.607 163.494 174.607 153.84C174.607 153.002 174.562 152.162 174.473 151.318L169.158 98.074C225.336 78.895 286.588 78.887 342.74 98.057L337.443 151.334C337.361 152.141 337.322 152.947 337.322 153.746C337.322 163.461 343.223 172.355 352.381 176.049L436.766 209.799C447.646 214.049 460 209.994 466.137 200.15L508.303 132.684C510.787 128.734 512 124.314 512 119.928C512 113.738 509.586 107.611 504.92 102.945ZM494.734 124.203L452.559 191.686C450.494 194.996 446.301 196.346 442.707 194.943L358.363 161.209C355.379 160.006 353.363 157.057 353.363 153.043C353.363 153.002 353.365 152.959 353.365 152.918C359.57 90.51 358.293 103.355 359.916 87.014C284.164 61.146 227.904 61.105 151.977 87.033C153.607 103.379 152.299 90.205 158.607 153.838C158.607 157.041 156.6 159.99 153.561 161.193L69.273 194.902C65.697 196.322 61.471 194.947 59.439 191.695L17.242 124.191C14.287 119.475 17.275 115.381 18.404 114.252C81.76 50.893 166.141 16 255.998 16C345.859 16 430.244 50.896 493.605 114.26C496.238 116.889 496.828 120.875 494.734 124.203Z" />
        </Icon>
    </>
}