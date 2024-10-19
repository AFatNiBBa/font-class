
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-left-long` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left-long?s=duotone arrow-left-long}
 * @preview ![arrow-left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc3IDI1NkwxMDkgMjI0SDQ3OS43NUM0OTcuNDM4IDIyNCA1MTEuNzUgMjM4LjMxMiA1MTEuNzUgMjU2UzQ5Ny40MzggMjg4IDQ3OS43NSAyODhIMTA5TDc3IDI1NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTgyLjYyNSA0MDYuNjI1QzE3MC4xMjUgNDE5LjEyNSAxNDkuODc1IDQxOS4xMjUgMTM3LjM3NSA0MDYuNjI1TDkuMzc1IDI3OC42MjVDLTMuMTI1IDI2Ni4xMjUgLTMuMTI1IDI0NS44NzUgOS4zNzUgMjMzLjM3NUwxMzcuMzc1IDEwNS4zNzVDMTQ5Ljg3NSA5Mi44NzUgMTcwLjEyNSA5Mi44NzUgMTgyLjYyNSAxMDUuMzc1UzE5NS4xMjUgMTM4LjEyNSAxODIuNjI1IDE1MC42MjVMNzcuMjUgMjU2TDE4Mi42MjUgMzYxLjM3NUMxODguODc1IDM2Ny42MjUgMTkyIDM3NS44MTIgMTkyIDM4NFMxODguODc1IDQwMC4zNzUgMTgyLjYyNSA0MDYuNjI1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowLeftLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M77 256L109 224H479.75C497.438 224 511.75 238.312 511.75 256S497.438 288 479.75 288H109L77 256Z" />
            <path d="M182.625 406.625C170.125 419.125 149.875 419.125 137.375 406.625L9.375 278.625C-3.125 266.125 -3.125 245.875 9.375 233.375L137.375 105.375C149.875 92.875 170.125 92.875 182.625 105.375S195.125 138.125 182.625 150.625L77.25 256L182.625 361.375C188.875 367.625 192 375.812 192 384S188.875 400.375 182.625 406.625Z" />
        </Icon>
    </>
}