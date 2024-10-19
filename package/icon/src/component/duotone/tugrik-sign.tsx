
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tugrik-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tugrik-sign?s=duotone tugrik-sign}
 * @preview ![tugrik-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1MS4wMzUgMTg0LjI1QzM0Ni43NTQgMTY3LjA5NCAzMjkuMzE2IDE1Ni42NTYgMzEyLjI1NCAxNjAuOTY5TDIzMi4wMDQgMTgxLjAzMVYyNDYuOTY5TDMyNy43NTQgMjIzLjAzMUMzNDQuOTEgMjE4Ljc1IDM1NS4zNDcgMjAxLjM3NSAzNTEuMDM1IDE4NC4yNVpNMzIuOTcyIDM1OS43NUMzNi41OTcgMzc0LjMxMiA0OS42MjkgMzg0IDYzLjk3MiAzODRDNjYuNTM1IDM4NCA2OS4xNiAzODMuNjg4IDcxLjc1NCAzODMuMDMxTDE1Mi4wMDQgMzYyLjk2OVYyOTcuMDMxTDU2LjI1NCAzMjAuOTY5QzM5LjA5NyAzMjUuMjUgMjguNjYgMzQyLjYyNSAzMi45NzIgMzU5Ljc1Wk0zMi45NzIgMjYzLjc1QzM2LjU5NyAyNzguMzEyIDQ5LjYyOSAyODggNjMuOTcyIDI4OEM2Ni41MzUgMjg4IDY5LjE2IDI4Ny42ODggNzEuNzU0IDI4Ny4wMzFMMTUyLjAwNCAyNjYuOTY5VjIwMS4wMzFMNTYuMjU0IDIyNC45NjlDMzkuMDk3IDIyOS4yNSAyOC42NiAyNDYuNjI1IDMyLjk3MiAyNjMuNzVaTTMxMi4yNTQgMjU2Ljk2OUwyMzIuMDA0IDI3Ny4wMzFWMzQyLjk2OUwzMjcuNzU0IDMxOS4wMzFDMzQ0LjkxIDMxNC43NSAzNTUuMzQ3IDI5Ny4zNzUgMzUxLjAzNSAyODAuMjVDMzQ2Ljc1NCAyNjMuMDk0IDMyOS4zMTYgMjUyLjYyNSAzMTIuMjU0IDI1Ni45NjlaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM4NCA3MkMzODQgOTQuMDk0IDM2Ni4wOTQgMTEyIDM0NCAxMTJIMjMyVjQ0MEMyMzIgNDYyLjA5NCAyMTQuMDk0IDQ4MCAxOTIgNDgwUzE1MiA0NjIuMDk0IDE1MiA0NDBWMTEySDQwQzE3LjkwNiAxMTIgMCA5NC4wOTQgMCA3MlMxNy45MDYgMzIgNDAgMzJIMzQ0QzM2Ni4wOTQgMzIgMzg0IDQ5LjkwNiAzODQgNzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TugrikSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M351.035 184.25C346.754 167.094 329.316 156.656 312.254 160.969L232.004 181.031V246.969L327.754 223.031C344.91 218.75 355.347 201.375 351.035 184.25ZM32.972 359.75C36.597 374.312 49.629 384 63.972 384C66.535 384 69.16 383.688 71.754 383.031L152.004 362.969V297.031L56.254 320.969C39.097 325.25 28.66 342.625 32.972 359.75ZM32.972 263.75C36.597 278.312 49.629 288 63.972 288C66.535 288 69.16 287.688 71.754 287.031L152.004 266.969V201.031L56.254 224.969C39.097 229.25 28.66 246.625 32.972 263.75ZM312.254 256.969L232.004 277.031V342.969L327.754 319.031C344.91 314.75 355.347 297.375 351.035 280.25C346.754 263.094 329.316 252.625 312.254 256.969Z" />
            <path d="M384 72C384 94.094 366.094 112 344 112H232V440C232 462.094 214.094 480 192 480S152 462.094 152 440V112H40C17.906 112 0 94.094 0 72S17.906 32 40 32H344C366.094 32 384 49.906 384 72Z" />
        </Icon>
    </>
}