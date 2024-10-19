
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sterling-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sterling-sign?s=duotone sterling-sign}
 * @preview ![sterling-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCAyMjRIMTI4VjI4OEgyMjRDMjQxLjY4OCAyODggMjU2IDI3My42NzIgMjU2IDI1NlMyNDEuNjg4IDIyNCAyMjQgMjI0Wk0wIDI1NkMwIDI3My42NzIgMTQuMzEyIDI4OCAzMiAyODhINDhWMjI0SDMyQzE0LjMxMiAyMjQgMCAyMzguMzI4IDAgMjU2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNzkuOTkxIDQ4MEgzOS45OTJDMjQuNTU1IDQ4MCAxMC40OTMgNDcxLjEyNSAzLjg2OCA0NTcuMTU2Qy0yLjc1NyA0NDMuMjE5IC0wLjc1NyA0MjYuNzE5IDguOTkzIDQxNC43NUMzNC4xNDkgMzgzLjg0NCA0Ny45OTIgMzQ0LjkzOCA0Ny45OTIgMzA1LjE1NlYxNjEuNDM4QzQ3Ljk5MiA5MC4wNjIgMTA2LjA1NCAzMiAxNzcuNDI5IDMyQzE5MS4zOTggMzIgMjA1LjIxIDM0LjI1IDIxOC40OTEgMzguNjg4TDI5Mi42NzggNjMuNUMzMTMuNjE2IDcwLjUxNiAzMjQuOTI4IDkzLjE3MiAzMTcuOTI4IDExNC4xMjVDMzEwLjkyOCAxMzUuMDQ3IDI4OC4zOTcgMTQ2LjM3NSAyNjcuMzAzIDEzOS4zNzVMMTkzLjExNiAxMTQuNTYyQzE4OC4wNTQgMTEyLjg1OSAxODIuNzczIDExMiAxNzcuNDI5IDExMkMxNTAuMTc5IDExMiAxMjcuOTkyIDEzNC4xNzIgMTI3Ljk5MiAxNjEuNDM4VjMwNS4xNTZDMTI3Ljk5MiAzMzcuNzgxIDEyMS42MTcgMzcwLjAxNiAxMDkuNTIzIDQwMEgyNzkuOTkxQzMwMi4wODQgNDAwIDMxOS45OSA0MTcuOTA2IDMxOS45OSA0NDBTMzAyLjA4NCA0ODAgMjc5Ljk5MSA0ODBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SterlingSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path class={generic.secondary} d="M224 224H128V288H224C241.688 288 256 273.672 256 256S241.688 224 224 224ZM0 256C0 273.672 14.312 288 32 288H48V224H32C14.312 224 0 238.328 0 256Z" />
            <path d="M279.991 480H39.992C24.555 480 10.493 471.125 3.868 457.156C-2.757 443.219 -0.757 426.719 8.993 414.75C34.149 383.844 47.992 344.938 47.992 305.156V161.438C47.992 90.062 106.054 32 177.429 32C191.398 32 205.21 34.25 218.491 38.688L292.678 63.5C313.616 70.516 324.928 93.172 317.928 114.125C310.928 135.047 288.397 146.375 267.303 139.375L193.116 114.562C188.054 112.859 182.773 112 177.429 112C150.179 112 127.992 134.172 127.992 161.438V305.156C127.992 337.781 121.617 370.016 109.523 400H279.991C302.084 400 319.99 417.906 319.99 440S302.084 480 279.991 480Z" />
        </Icon>
    </>
}