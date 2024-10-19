
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-large` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-large?s=duotone user-large}
 * @preview ![user-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAyODguMDAxQzMzNS41MzMgMjg4LjAwMSA0MDAgMjIzLjUyOCA0MDAgMTQ0LjAwMVMzMzUuNTMzIDAuMDAxIDI1NiAwLjAwMUMxNzYuNDc3IDAuMDAxIDExMiA2NC40NzMgMTEyIDE0NC4wMDFTMTc2LjQ3NyAyODguMDAxIDI1NiAyODguMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTEuOTk4IDMyMC4wMDFIMTYwLjAwMkM3MS42MzkgMzIwLjAwMSAwIDM5MS42MzMgMCA0ODAuMDAxQzAgNDk3LjY3MiAxNC4zMyA1MTIuMDAxIDMxLjk5OCA1MTIuMDAxSDQ4MC4wMDJDNDk3LjY3IDUxMi4wMDEgNTEyIDQ5Ny42NzIgNTEyIDQ4MC4wMDFDNTEyIDM5MS42MzMgNDQwLjM2NyAzMjAuMDAxIDM1MS45OTggMzIwLjAwMVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function UserLarge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 288.001C335.533 288.001 400 223.528 400 144.001S335.533 0.001 256 0.001C176.477 0.001 112 64.473 112 144.001S176.477 288.001 256 288.001Z" />
            <path d="M351.998 320.001H160.002C71.639 320.001 0 391.633 0 480.001C0 497.672 14.33 512.001 31.998 512.001H480.002C497.67 512.001 512 497.672 512 480.001C512 391.633 440.367 320.001 351.998 320.001Z" />
        </Icon>
    </>
}