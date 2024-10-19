
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=light arrow-up-right}
 * @preview ![arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTExLjkwNlYzMzUuMjVDMzUyIDM0NC4wOTQgMzQ0Ljg0NCAzNTEuMjUgMzM2IDM1MS4yNVMzMjAgMzQ0LjA5NCAzMjAgMzM1LjI1VjE1MC42MjVMNTkuMzEyIDQxMS4zMTJDNTYuMTg4IDQxNC40MzggNTIuMDk0IDQxNiA0OCA0MTZTMzkuODEyIDQxNC40MzggMzYuNjg4IDQxMS4zMTJDMzAuNDM4IDQwNS4wNjIgMzAuNDM4IDM5NC45MzcgMzYuNjg4IDM4OC42ODhMMjk3LjU2OCAxMjcuODA1TDExMS45NTMgMTI3LjI1QzEwMy4xMDkgMTI3LjIxOSA5NS45NjkgMTIwLjAzMSA5NiAxMTEuMjE5Qzk2LjAzMSAxMDIuMzc1IDEwMy4xODggOTUuMjUgMTEyIDk1LjI1SDExMi4wNDdMMzM2LjA0NyA5NS45MDZDMzQ0Ljg1OSA5NS45MzggMzUyIDEwMy4wOTQgMzUyIDExMS45MDZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 111.906V335.25C352 344.094 344.844 351.25 336 351.25S320 344.094 320 335.25V150.625L59.312 411.312C56.188 414.438 52.094 416 48 416S39.812 414.438 36.688 411.312C30.438 405.062 30.438 394.937 36.688 388.688L297.568 127.805L111.953 127.25C103.109 127.219 95.969 120.031 96 111.219C96.031 102.375 103.188 95.25 112 95.25H112.047L336.047 95.906C344.859 95.938 352 103.094 352 111.906Z" />
        </Icon>
    </>
}