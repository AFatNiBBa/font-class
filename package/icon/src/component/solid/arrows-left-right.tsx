
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=solid arrows-left-right}
 * @preview ![arrows-left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuNjI1IDI3OC42MjVMNDA2LjYyNSAzNzQuNjI1QzQwMC4zNzUgMzgwLjg3NSAzOTIuMTg3IDM4NCAzODQgMzg0UzM2Ny42MjUgMzgwLjg3NSAzNjEuMzc1IDM3NC42MjVDMzQ4Ljg3NSAzNjIuMTI1IDM0OC44NzUgMzQxLjg3NSAzNjEuMzc1IDMyOS4zNzVMNDAyLjc1IDI4OEgxMDkuMjVMMTUwLjYyNSAzMjkuMzc1QzE2My4xMjUgMzQxLjg3NSAxNjMuMTI1IDM2Mi4xMjUgMTUwLjYyNSAzNzQuNjI1QzE0NC4zNzUgMzgwLjg3NSAxMzYuMTg3IDM4NCAxMjggMzg0UzExMS42MjUgMzgwLjg3NSAxMDUuMzc1IDM3NC42MjVMOS4zNzUgMjc4LjYyNUMtMy4xMjUgMjY2LjEyNSAtMy4xMjUgMjQ1Ljg3NSA5LjM3NSAyMzMuMzc1TDEwNS4zNzUgMTM3LjM3NUMxMTcuODc1IDEyNC44NzUgMTM4LjEyNSAxMjQuODc1IDE1MC42MjUgMTM3LjM3NVMxNjMuMTI1IDE3MC4xMjUgMTUwLjYyNSAxODIuNjI1TDEwOS4yNSAyMjRINDAyLjc1TDM2MS4zNzUgMTgyLjYyNUMzNDguODc1IDE3MC4xMjUgMzQ4Ljg3NSAxNDkuODc1IDM2MS4zNzUgMTM3LjM3NVMzOTQuMTI1IDEyNC44NzUgNDA2LjYyNSAxMzcuMzc1TDUwMi42MjUgMjMzLjM3NUM1MTUuMTI1IDI0NS44NzUgNTE1LjEyNSAyNjYuMTI1IDUwMi42MjUgMjc4LjYyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowsLeftRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.625 278.625L406.625 374.625C400.375 380.875 392.187 384 384 384S367.625 380.875 361.375 374.625C348.875 362.125 348.875 341.875 361.375 329.375L402.75 288H109.25L150.625 329.375C163.125 341.875 163.125 362.125 150.625 374.625C144.375 380.875 136.187 384 128 384S111.625 380.875 105.375 374.625L9.375 278.625C-3.125 266.125 -3.125 245.875 9.375 233.375L105.375 137.375C117.875 124.875 138.125 124.875 150.625 137.375S163.125 170.125 150.625 182.625L109.25 224H402.75L361.375 182.625C348.875 170.125 348.875 149.875 361.375 137.375S394.125 124.875 406.625 137.375L502.625 233.375C515.125 245.875 515.125 266.125 502.625 278.625Z" />
        </Icon>
    </>
}