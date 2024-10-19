
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mars-stroke-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke-right?s=duotone mars-stroke-right}
 * @preview ![mars-stroke-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3MiAyNTZDMjcyIDI5MS4zNDYgMjQzLjM0NiAzMjAgMjA4IDMyMFMxNDQgMjkxLjM0NiAxNDQgMjU2UzE3Mi42NTQgMTkyIDIwOCAxOTJTMjcyIDIyMC42NTQgMjcyIDI1NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjE5LjMxMyAyNDQuNjg2TDUzNi45NzEgMTY3LjA3NkM1MjEuODUgMTUxLjk1NyA0OTYuMDAxIDE2Mi42NjYgNDk2LjAwMSAxODQuMDQ3VjIyMy45OThMNDYzLjk5OSAyMjRWMTc2QzQ2NC4wMDEgMTY3LjE2MiA0NTYuODM2IDE2MCA0NDguMDAxIDE2MEg0MTZDNDA3LjE2MSAxNjAgNDAwIDE2Ny4xNiA0MDAgMTc2VjIyNEgzODAuOTU0QzM2NS44ODcgMTQyLjA5OCAyOTQuMjU4IDgwIDIwOCA4MEMxMTAuNzk3IDgwIDMyIDE1OC43OTcgMzIgMjU2QzMyIDM1My4yMDEgMTEwLjc5NyA0MzIgMjA4IDQzMkMyOTQuMjU4IDQzMiAzNjUuODg5IDM2OS45IDM4MC45NTQgMjg3Ljk5OEg0MDBWMzM2QzQwMCAzNDQuODM2IDQwNy4xNjMgMzUyIDQxNiAzNTJINDQ4LjAwMUM0NTYuODM2IDM1MiA0NjMuOTk5IDM0NC44MzYgNDYzLjk5OSAzMzZWMjg3Ljk5OEw0OTYuMDAxIDI4OFYzMjcuOTUxQzQ5Ni4wMDEgMzQ5LjMzNCA1MjEuODUyIDM2MC4wNDEgNTM2Ljk3MSAzNDQuOTIyTDYxOS4zMTMgMjY3LjMxMkM2MjUuNTYzIDI2MS4wNjQgNjI1LjU2MSAyNTAuOTM0IDYxOS4zMTMgMjQ0LjY4NlpNMjA4LjAwMiAzNTJDMTU1LjA2NSAzNTIgMTEyLjAwMiAzMDguOTM0IDExMi4wMDIgMjU2QzExMiAyMDMuMDY0IDE1NS4wNjUgMTYwIDIwOC4wMDIgMTYwQzI2MC45MzYgMTYwIDMwNCAyMDMuMDYyIDMwNCAyNTZDMzA0IDMwOC45MzQgMjYwLjkzNiAzNTIgMjA4LjAwMiAzNTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MarsStrokeRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M272 256C272 291.346 243.346 320 208 320S144 291.346 144 256S172.654 192 208 192S272 220.654 272 256Z" />
            <path d="M619.313 244.686L536.971 167.076C521.85 151.957 496.001 162.666 496.001 184.047V223.998L463.999 224V176C464.001 167.162 456.836 160 448.001 160H416C407.161 160 400 167.16 400 176V224H380.954C365.887 142.098 294.258 80 208 80C110.797 80 32 158.797 32 256C32 353.201 110.797 432 208 432C294.258 432 365.889 369.9 380.954 287.998H400V336C400 344.836 407.163 352 416 352H448.001C456.836 352 463.999 344.836 463.999 336V287.998L496.001 288V327.951C496.001 349.334 521.852 360.041 536.971 344.922L619.313 267.312C625.563 261.064 625.561 250.934 619.313 244.686ZM208.002 352C155.065 352 112.002 308.934 112.002 256C112 203.064 155.065 160 208.002 160C260.936 160 304 203.062 304 256C304 308.934 260.936 352 208.002 352Z" />
        </Icon>
    </>
}