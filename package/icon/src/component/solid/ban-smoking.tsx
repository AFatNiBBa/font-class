
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ban-smoking` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ban-smoking?s=solid ban-smoking}
 * @preview ![ban-smoking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAzMDRDOTYgMzEyLjc1IDEwMy4yNSAzMjAgMTEyIDMyMEgyMjkuNUwxMzMuNSAyMjRIMTEyQzEwMy4yNSAyMjQgOTYgMjMxLjI1IDk2IDI0MFYzMDRaTTI1NiAwQzExNC42MjUgMCAwIDExNC42MjUgMCAyNTZTMTE0LjYyNSA1MTIgMjU2IDUxMlM1MTIgMzk3LjM3NSA1MTIgMjU2UzM5Ny4zNzUgMCAyNTYgMFpNMjU2IDQ0OEMxNTAuMTI1IDQ0OCA2NCAzNjEuODc1IDY0IDI1NkM2NCAyMTQuNjI1IDc3LjI1IDE3Ni4yNSA5OS43NSAxNDQuODc1TDM2Ny4xMjUgNDEyLjI1QzMzNS43NSA0MzQuNzUgMjk3LjM3NSA0NDggMjU2IDQ0OFpNMzAxLjI1IDI1NkgzODRWMjg4SDMzMy4yNUwzMDEuMjUgMjU2Wk00MTIuMjUgMzY3LjEyNUwzNjUuMjUgMzIwSDQwMEM0MDguNzUgMzIwIDQxNiAzMTIuNzUgNDE2IDMwNFYyNDBDNDE2IDIzMS4yNSA0MDguNzUgMjI0IDQwMCAyMjRIMjY5LjI1TDE0NC44NzUgOTkuNzVDMTc2LjI1IDc3LjI1IDIxNC42MjUgNjQgMjU2IDY0QzM2MS44NzUgNjQgNDQ4IDE1MC4xMjUgNDQ4IDI1NkM0NDggMjk3LjM3NSA0MzQuNzUgMzM1Ljc1IDQxMi4yNSAzNjcuMTI1Wk0zMjAuNjI1IDEyOEMzMDUgMTI4IDI5MiAxMTYuNzUgMjg5LjI1IDEwMi4xMjVDMjg4LjUgOTguNSAyODUuMjUgOTYgMjgxLjUgOTZIMjY1LjI1QzI2MC4yNSA5NiAyNTYuNjI1IDEwMC41IDI1Ny4yNSAxMDUuMzc1QzI2MS44NzUgMTM2LjI1IDI4OC41IDE2MCAzMjAuNjI1IDE2MEMzMzYuMjUgMTYwIDM0OS4yNSAxNzEuMjUgMzUyIDE4NS44NzVDMzUyLjc1IDE4OS41IDM1NiAxOTIgMzU5Ljc1IDE5MkgzNzUuODc1QzM4MC44NzUgMTkyIDM4NC42MjUgMTg3LjUgMzgzLjg3NSAxODIuNjI1QzM3OS4yNSAxNTEuNzUgMzUyLjc1IDEyOCAzMjAuNjI1IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BanSmoking(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M96 304C96 312.75 103.25 320 112 320H229.5L133.5 224H112C103.25 224 96 231.25 96 240V304ZM256 0C114.625 0 0 114.625 0 256S114.625 512 256 512S512 397.375 512 256S397.375 0 256 0ZM256 448C150.125 448 64 361.875 64 256C64 214.625 77.25 176.25 99.75 144.875L367.125 412.25C335.75 434.75 297.375 448 256 448ZM301.25 256H384V288H333.25L301.25 256ZM412.25 367.125L365.25 320H400C408.75 320 416 312.75 416 304V240C416 231.25 408.75 224 400 224H269.25L144.875 99.75C176.25 77.25 214.625 64 256 64C361.875 64 448 150.125 448 256C448 297.375 434.75 335.75 412.25 367.125ZM320.625 128C305 128 292 116.75 289.25 102.125C288.5 98.5 285.25 96 281.5 96H265.25C260.25 96 256.625 100.5 257.25 105.375C261.875 136.25 288.5 160 320.625 160C336.25 160 349.25 171.25 352 185.875C352.75 189.5 356 192 359.75 192H375.875C380.875 192 384.625 187.5 383.875 182.625C379.25 151.75 352.75 128 320.625 128Z" />
        </Icon>
    </>
}