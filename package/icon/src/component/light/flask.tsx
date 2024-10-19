
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `flask` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flask?s=light flask}
 * @preview ![flask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzcuMjMyIDQwMy41TDMxOS45OTIgMjE1Vjc5Ljk5NkMzMTkuOTkyIDcxLjE2MiAzMTIuODMgNjQgMzAzLjk5NiA2NFMyODggNzEuMTYyIDI4OCA3OS45OTZWMTQ0SDI4Ny45OTJWMjE1LjAwMkMyODcuOTkyIDIyMC45NzUgMjg5LjY2NCAyMjYuODI4IDI5Mi44MTggMjMxLjlMMzQ3LjYxMyAzMjBIMTAwLjM4N0wxNTUuMTggMjMxLjkwMkMxNTguMzM2IDIyNi44MjggMTYwLjAwOCAyMjAuOTc1IDE2MC4wMDggMjE1VjE0NEgxNjBWNzkuOTk2QzE2MCA3MS4xNjIgMTUyLjgzOCA2NCAxNDQuMDA0IDY0UzEyOC4wMDggNzEuMTYyIDEyOC4wMDggNzkuOTk2VjIxNUwxMC43NjcgNDAzLjVDLTE4LjQ3OSA0NTAuNjI1IDE1LjI2NyA1MTIgNzAuODg5IDUxMkgzNzcuMTExQzQzMi43MzIgNTEyIDQ2Ni40NzggNDUwLjUgNDM3LjIzMiA0MDMuNVpNNDEwLjkzMiA0NjBDNDA3LjU5MiA0NjYuMDE0IDM5Ny42MDkgNDgwIDM3Ny4xMTEgNDgwSDcwLjg4OUM1MC4zODMgNDgwIDQwLjQwNiA0NjYuMDQ3IDM3LjA2OCA0NjAuMDQ3QzMwLjA0MyA0NDcuNDIgMzAuMzc3IDQzMi41OSAzNy45NDEgNDIwLjRMODAuNDg0IDM1MkgzNjcuNTE1TDQxMC4wNjIgNDIwLjQwNkM0MTcuNjI3IDQzMi41NjIgNDE3Ljk1MyA0NDcuMzYzIDQxMC45MzIgNDYwWk0xMTIgMzJIMzM2QzM0NC44NDQgMzIgMzUyIDI0Ljg0NCAzNTIgMTZTMzQ0Ljg0NCAwIDMzNiAwSDExMkMxMDMuMTU2IDAgOTYgNy4xNTYgOTYgMTZTMTAzLjE1NiAzMiAxMTIgMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Flask(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M437.232 403.5L319.992 215V79.996C319.992 71.162 312.83 64 303.996 64S288 71.162 288 79.996V144H287.992V215.002C287.992 220.975 289.664 226.828 292.818 231.9L347.613 320H100.387L155.18 231.902C158.336 226.828 160.008 220.975 160.008 215V144H160V79.996C160 71.162 152.838 64 144.004 64S128.008 71.162 128.008 79.996V215L10.767 403.5C-18.479 450.625 15.267 512 70.889 512H377.111C432.732 512 466.478 450.5 437.232 403.5ZM410.932 460C407.592 466.014 397.609 480 377.111 480H70.889C50.383 480 40.406 466.047 37.068 460.047C30.043 447.42 30.377 432.59 37.941 420.4L80.484 352H367.515L410.062 420.406C417.627 432.562 417.953 447.363 410.932 460ZM112 32H336C344.844 32 352 24.844 352 16S344.844 0 336 0H112C103.156 0 96 7.156 96 16S103.156 32 112 32Z" />
        </Icon>
    </>
}