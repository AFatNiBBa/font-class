
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `radio` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=duotone radio}
 * @preview ![radio](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0Ny45OTcgMTI4SDY0QzI4LjY1NCAxMjggMCAxNTYuNjU1IDAgMTkyVjQ0Ny45OTlDMCA0ODMuMzQ1IDI4LjY1NCA1MTEuOTk5IDY0IDUxMS45OTlINDQ3Ljk5N0M0ODMuMzQ1IDUxMS45OTkgNTExLjk5NyA0ODMuMzQ1IDUxMS45OTcgNDQ3Ljk5OVYxOTJDNTExLjk5NyAxNTYuNjU1IDQ4My4zNDUgMTI4IDQ0Ny45OTcgMTI4Wk04MCAyNDhDODAgMjQzLjU5NCA4My41OTMgMjQwIDg3Ljk5OSAyNDBIMTk5Ljk5OUMyMDQuNDA1IDI0MCAyMDcuOTk5IDI0My41OTQgMjA3Ljk5OSAyNDhWMjY0QzIwNy45OTkgMjY4LjQwNiAyMDQuNDA1IDI3MiAxOTkuOTk5IDI3Mkg4Ny45OTlDODMuNTkzIDI3MiA4MCAyNjguNDA2IDgwIDI2NFYyNDhaTTIwNy45OTkgMzkyQzIwNy45OTkgMzk2LjQwNiAyMDQuNDA1IDQwMCAxOTkuOTk5IDQwMEg4Ny45OTlDODMuNTkzIDQwMCA4MCAzOTYuNDA2IDgwIDM5MlYzNzZDODAgMzcxLjU5MyA4My41OTMgMzY4IDg3Ljk5OSAzNjhIMTk5Ljk5OUMyMDQuNDA1IDM2OCAyMDcuOTk5IDM3MS41OTMgMjA3Ljk5OSAzNzZWMzkyWk0yMjMuOTk5IDMyOEMyMjMuOTk5IDMzMi40MDYgMjIwLjQwNSAzMzYgMjE1Ljk5OSAzMzZINzJDNjcuNTkzIDMzNiA2NCAzMzIuNDA2IDY0IDMyOFYzMTJDNjQgMzA3LjU5NCA2Ny41OTMgMzA0IDcyIDMwNEgyMTUuOTk5QzIyMC40MDUgMzA0IDIyMy45OTkgMzA3LjU5NCAyMjMuOTk5IDMxMlYzMjhaTTM2Ny45OTggNDAwQzMyMy44NDIgNDAwIDI4Ny45OTggMzY0LjE1NiAyODcuOTk4IDMyMFMzMjMuODQyIDI0MCAzNjcuOTk4IDI0MFM0NDcuOTk3IDI3NS44NDQgNDQ3Ljk5NyAzMjBTNDEyLjE1NCA0MDAgMzY3Ljk5OCA0MDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUxMS4wMjcgMTcuMjUxQzUwNy4zMDggNC41NDggNDk0LjAyNyAtMi43NDkgNDgxLjI0NSAwLjk3TDUxLjc0OCAxMjYuODZDNDMuNjk1IDEyOS4yMTcgMzYuNTE5IDEzMy4xNzQgMzAgMTM3Ljk2MUMzOS44NjkgMTMxLjczOSA1MS40NjkgMTI4IDYzLjk5OCAxMjhIMjE4LjUwN0w0OTQuNzQ1IDQ3LjAzMkM1MDcuNDY0IDQzLjI5OCA1MTQuNzQ1IDI5Ljk2OSA1MTEuMDI3IDE3LjI1MVpNMzY3Ljk5NiAyNDBDMzIzLjg0IDI0MCAyODcuOTk3IDI3NS44NDQgMjg3Ljk5NyAzMjBTMzIzLjg0IDQwMCAzNjcuOTk2IDQwMFM0NDcuOTk2IDM2NC4xNTYgNDQ3Ljk5NiAzMjBTNDEyLjE1MiAyNDAgMzY3Ljk5NiAyNDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Radio(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M447.997 128H64C28.654 128 0 156.655 0 192V447.999C0 483.345 28.654 511.999 64 511.999H447.997C483.345 511.999 511.997 483.345 511.997 447.999V192C511.997 156.655 483.345 128 447.997 128ZM80 248C80 243.594 83.593 240 87.999 240H199.999C204.405 240 207.999 243.594 207.999 248V264C207.999 268.406 204.405 272 199.999 272H87.999C83.593 272 80 268.406 80 264V248ZM207.999 392C207.999 396.406 204.405 400 199.999 400H87.999C83.593 400 80 396.406 80 392V376C80 371.593 83.593 368 87.999 368H199.999C204.405 368 207.999 371.593 207.999 376V392ZM223.999 328C223.999 332.406 220.405 336 215.999 336H72C67.593 336 64 332.406 64 328V312C64 307.594 67.593 304 72 304H215.999C220.405 304 223.999 307.594 223.999 312V328ZM367.998 400C323.842 400 287.998 364.156 287.998 320S323.842 240 367.998 240S447.997 275.844 447.997 320S412.154 400 367.998 400Z" />
            <path d="M511.027 17.251C507.308 4.548 494.027 -2.749 481.245 0.97L51.748 126.86C43.695 129.217 36.519 133.174 30 137.961C39.869 131.739 51.469 128 63.998 128H218.507L494.745 47.032C507.464 43.298 514.745 29.969 511.027 17.251ZM367.996 240C323.84 240 287.997 275.844 287.997 320S323.84 400 367.996 400S447.996 364.156 447.996 320S412.152 240 367.996 240Z" />
        </Icon>
    </>
}