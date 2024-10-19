
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calculator-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calculator-simple?s=duotone calculator-simple}
 * @preview ![calculator-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAyODhIMzJDMTQuMzc1IDI4OCAwIDMwMi4zNzUgMCAzMjBWNDgwQzAgNDk3LjYyNSAxNC4zNzUgNTEyIDMyIDUxMkgxOTJDMjA5LjYyNSA1MTIgMjI0IDQ5Ny42MjUgMjI0IDQ4MFYzMjBDMjI0IDMwMi4zNzUgMjA5LjYyNSAyODggMTkyIDI4OFpNMTU3LjI1IDQyMi42MjVDMTYzLjQ3MyA0MjguODQ2IDE2My40NzMgNDM5LjAyNyAxNTcuMjUgNDQ1LjI1QzE1MS4wMjkgNDUxLjQ3MSAxNDAuODQ4IDQ1MS40NzEgMTM0LjYyNSA0NDUuMjVMMTEyIDQyMi42MjVMODkuMzc1IDQ0NS4yNUM4My4xNTQgNDUxLjQ3MSA3Mi45NzMgNDUxLjQ3MSA2Ni43NSA0NDUuMjVDNjAuNTI5IDQzOS4wMjcgNjAuNTI5IDQyOC44NDYgNjYuNzUgNDIyLjYyNUw4OS4zNzUgNDAwTDY2Ljc1IDM3Ny4zNzVDNjAuNTI5IDM3MS4xNTIgNjAuNTI5IDM2MC45NzEgNjYuNzUgMzU0Ljc1QzcyLjk3MyAzNDguNTI3IDgzLjE1NCAzNDguNTI3IDg5LjM3NSAzNTQuNzVMMTEyIDM3Ny4zNzVMMTM0LjYyNSAzNTQuNzVDMTQwLjg0OCAzNDguNTI3IDE1MS4wMjkgMzQ4LjUyNyAxNTcuMjUgMzU0Ljc1QzE2My40NzMgMzYwLjk3MSAxNjMuNDczIDM3MS4xNTIgMTU3LjI1IDM3Ny4zNzVMMTM0LjYyNSA0MDBMMTU3LjI1IDQyMi42MjVaTTE5MiAwSDMyQzE0LjM3NSAwIDAgMTQuMzc1IDAgMzJWMTkyQzAgMjA5LjYyNSAxNC4zNzUgMjI0IDMyIDIyNEgxOTJDMjA5LjYyNSAyMjQgMjI0IDIwOS42MjUgMjI0IDE5MlYzMkMyMjQgMTQuMzc1IDIwOS42MjUgMCAxOTIgMFpNMTc2IDExMi4wNDVDMTc2IDEyMC44MiAxNjguODIgMTI4IDE2MC4wNDUgMTI4SDYzLjk1NUM1NS4xOCAxMjggNDggMTIwLjgyIDQ4IDExMi4wNDVWMTExLjk1NUM0OCAxMDMuMTggNTUuMTggOTYgNjMuOTU1IDk2SDE2MC4wNDVDMTY4LjgyIDk2IDE3NiAxMDMuMTggMTc2IDExMS45NTVWMTEyLjA0NVpNNDgwIDBIMzIwQzMwMi4zNzUgMCAyODggMTQuMzc1IDI4OCAzMlYxOTJDMjg4IDIwOS42MjUgMzAyLjM3NSAyMjQgMzIwIDIyNEg0ODBDNDk3LjYyNSAyMjQgNTEyIDIwOS42MjUgNTEyIDE5MlYzMkM1MTIgMTQuMzc1IDQ5Ny42MjUgMCA0ODAgMFpNNDY0IDExMi4wNDVDNDY0IDEyMC44MiA0NTYuODIgMTI4IDQ0OC4wNDUgMTI4SDQxNlYxNjAuMDQ1QzQxNiAxNjguODIgNDA4LjgyIDE3NiA0MDAuMDQ1IDE3NkgzOTkuOTU1QzM5MS4xOCAxNzYgMzg0IDE2OC44MiAzODQgMTYwLjA0NVYxMjhIMzUxLjk1NUMzNDMuMTggMTI4IDMzNiAxMjAuODIgMzM2IDExMi4wNDVWMTExLjk1NUMzMzYgMTAzLjE4IDM0My4xOCA5NiAzNTEuOTU1IDk2SDM4NFY2My45NTVDMzg0IDU1LjE4IDM5MS4xOCA0OCAzOTkuOTU1IDQ4SDQwMC4wNDVDNDA4LjgyIDQ4IDQxNiA1NS4xOCA0MTYgNjMuOTU1Vjk2SDQ0OC4wNDVDNDU2LjgyIDk2IDQ2NCAxMDMuMTggNDY0IDExMS45NTVWMTEyLjA0NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUxLjk1NSAxMjhIMzg0VjE2MC4wNDVDMzg0IDE2OC44MiAzOTEuMTggMTc2IDM5OS45NTUgMTc2SDQwMC4wNDVDNDA4LjgyIDE3NiA0MTYgMTY4LjgyIDQxNiAxNjAuMDQ1VjEyOEg0NDguMDQ1QzQ1Ni44MiAxMjggNDY0IDEyMC44MiA0NjQgMTEyLjA0NVYxMTEuOTU1QzQ2NCAxMDMuMTggNDU2LjgyIDk2IDQ0OC4wNDUgOTZINDE2VjYzLjk1NUM0MTYgNTUuMTggNDA4LjgyIDQ4IDQwMC4wNDUgNDhIMzk5Ljk1NUMzOTEuMTggNDggMzg0IDU1LjE4IDM4NCA2My45NTVWOTZIMzUxLjk1NUMzNDMuMTggOTYgMzM2IDEwMy4xOCAzMzYgMTExLjk1NVYxMTIuMDQ1QzMzNiAxMjAuODIgMzQzLjE4IDEyOCAzNTEuOTU1IDEyOFpNMTU3LjI1IDM1NC43NUMxNTEuMDI5IDM0OC41MjcgMTQwLjg0OCAzNDguNTI3IDEzNC42MjUgMzU0Ljc1TDExMiAzNzcuMzc1TDg5LjM3NSAzNTQuNzVDODMuMTU0IDM0OC41MjcgNzIuOTczIDM0OC41MjcgNjYuNzUgMzU0Ljc1QzYwLjUyOSAzNjAuOTcxIDYwLjUyOSAzNzEuMTUyIDY2Ljc1IDM3Ny4zNzVMODkuMzc1IDQwMEw2Ni43NSA0MjIuNjI1QzYwLjUyOSA0MjguODQ2IDYwLjUyOSA0MzkuMDI3IDY2Ljc1IDQ0NS4yNUM3Mi45NzMgNDUxLjQ3MSA4My4xNTQgNDUxLjQ3MSA4OS4zNzUgNDQ1LjI1TDExMiA0MjIuNjI1TDEzNC42MjUgNDQ1LjI1QzE0MC44NDggNDUxLjQ3MSAxNTEuMDI5IDQ1MS40NzEgMTU3LjI1IDQ0NS4yNUMxNjMuNDczIDQzOS4wMjcgMTYzLjQ3MyA0MjguODQ2IDE1Ny4yNSA0MjIuNjI1TDEzNC42MjUgNDAwTDE1Ny4yNSAzNzcuMzc1QzE2My40NzMgMzcxLjE1MiAxNjMuNDczIDM2MC45NzEgMTU3LjI1IDM1NC43NVpNMTYwLjA0NSA5Nkg2My45NTVDNTUuMTggOTYgNDggMTAzLjE4IDQ4IDExMS45NTVWMTEyLjA0NUM0OCAxMjAuODIgNTUuMTggMTI4IDYzLjk1NSAxMjhIMTYwLjA0NUMxNjguODIgMTI4IDE3NiAxMjAuODIgMTc2IDExMi4wNDVWMTExLjk1NUMxNzYgMTAzLjE4IDE2OC44MiA5NiAxNjAuMDQ1IDk2Wk00ODAgMjg4SDMyMEMzMDIuMzc1IDI4OCAyODggMzAyLjM3NSAyODggMzIwVjQ4MEMyODggNDk3LjYyNSAzMDIuMzc1IDUxMiAzMjAgNTEySDQ4MEM0OTcuNjI1IDUxMiA1MTIgNDk3LjYyNSA1MTIgNDgwVjMyMEM1MTIgMzAyLjM3NSA0OTcuNjI1IDI4OCA0ODAgMjg4Wk00NjQgNDMyLjA0NUM0NjQgNDQwLjgyIDQ1Ni44MiA0NDggNDQ4LjA0NSA0NDhIMzUxLjk1NUMzNDMuMTggNDQ4IDMzNiA0NDAuODIgMzM2IDQzMi4wNDVWNDMxLjk1NUMzMzYgNDIzLjE4IDM0My4xOCA0MTYgMzUxLjk1NSA0MTZINDQ4LjA0NUM0NTYuODIgNDE2IDQ2NCA0MjMuMTggNDY0IDQzMS45NTVWNDMyLjA0NVpNNDY0IDM2OC4wNDVDNDY0IDM3Ni44MiA0NTYuODIgMzg0IDQ0OC4wNDUgMzg0SDM1MS45NTVDMzQzLjE4IDM4NCAzMzYgMzc2LjgyIDMzNiAzNjguMDQ1VjM2Ny45NTVDMzM2IDM1OS4xOCAzNDMuMTggMzUyIDM1MS45NTUgMzUySDQ0OC4wNDVDNDU2LjgyIDM1MiA0NjQgMzU5LjE4IDQ2NCAzNjcuOTU1VjM2OC4wNDVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CalculatorSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M192 288H32C14.375 288 0 302.375 0 320V480C0 497.625 14.375 512 32 512H192C209.625 512 224 497.625 224 480V320C224 302.375 209.625 288 192 288ZM157.25 422.625C163.473 428.846 163.473 439.027 157.25 445.25C151.029 451.471 140.848 451.471 134.625 445.25L112 422.625L89.375 445.25C83.154 451.471 72.973 451.471 66.75 445.25C60.529 439.027 60.529 428.846 66.75 422.625L89.375 400L66.75 377.375C60.529 371.152 60.529 360.971 66.75 354.75C72.973 348.527 83.154 348.527 89.375 354.75L112 377.375L134.625 354.75C140.848 348.527 151.029 348.527 157.25 354.75C163.473 360.971 163.473 371.152 157.25 377.375L134.625 400L157.25 422.625ZM192 0H32C14.375 0 0 14.375 0 32V192C0 209.625 14.375 224 32 224H192C209.625 224 224 209.625 224 192V32C224 14.375 209.625 0 192 0ZM176 112.045C176 120.82 168.82 128 160.045 128H63.955C55.18 128 48 120.82 48 112.045V111.955C48 103.18 55.18 96 63.955 96H160.045C168.82 96 176 103.18 176 111.955V112.045ZM480 0H320C302.375 0 288 14.375 288 32V192C288 209.625 302.375 224 320 224H480C497.625 224 512 209.625 512 192V32C512 14.375 497.625 0 480 0ZM464 112.045C464 120.82 456.82 128 448.045 128H416V160.045C416 168.82 408.82 176 400.045 176H399.955C391.18 176 384 168.82 384 160.045V128H351.955C343.18 128 336 120.82 336 112.045V111.955C336 103.18 343.18 96 351.955 96H384V63.955C384 55.18 391.18 48 399.955 48H400.045C408.82 48 416 55.18 416 63.955V96H448.045C456.82 96 464 103.18 464 111.955V112.045Z" />
            <path d="M351.955 128H384V160.045C384 168.82 391.18 176 399.955 176H400.045C408.82 176 416 168.82 416 160.045V128H448.045C456.82 128 464 120.82 464 112.045V111.955C464 103.18 456.82 96 448.045 96H416V63.955C416 55.18 408.82 48 400.045 48H399.955C391.18 48 384 55.18 384 63.955V96H351.955C343.18 96 336 103.18 336 111.955V112.045C336 120.82 343.18 128 351.955 128ZM157.25 354.75C151.029 348.527 140.848 348.527 134.625 354.75L112 377.375L89.375 354.75C83.154 348.527 72.973 348.527 66.75 354.75C60.529 360.971 60.529 371.152 66.75 377.375L89.375 400L66.75 422.625C60.529 428.846 60.529 439.027 66.75 445.25C72.973 451.471 83.154 451.471 89.375 445.25L112 422.625L134.625 445.25C140.848 451.471 151.029 451.471 157.25 445.25C163.473 439.027 163.473 428.846 157.25 422.625L134.625 400L157.25 377.375C163.473 371.152 163.473 360.971 157.25 354.75ZM160.045 96H63.955C55.18 96 48 103.18 48 111.955V112.045C48 120.82 55.18 128 63.955 128H160.045C168.82 128 176 120.82 176 112.045V111.955C176 103.18 168.82 96 160.045 96ZM480 288H320C302.375 288 288 302.375 288 320V480C288 497.625 302.375 512 320 512H480C497.625 512 512 497.625 512 480V320C512 302.375 497.625 288 480 288ZM464 432.045C464 440.82 456.82 448 448.045 448H351.955C343.18 448 336 440.82 336 432.045V431.955C336 423.18 343.18 416 351.955 416H448.045C456.82 416 464 423.18 464 431.955V432.045ZM464 368.045C464 376.82 456.82 384 448.045 384H351.955C343.18 384 336 376.82 336 368.045V367.955C336 359.18 343.18 352 351.955 352H448.045C456.82 352 464 359.18 464 367.955V368.045Z" />
        </Icon>
    </>
}