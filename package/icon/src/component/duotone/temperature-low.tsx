
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `temperature-low` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-low?s=duotone temperature-low}
 * @preview ![temperature-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMTIuMDAxQzI1NiA1MC4xMjYgMjA1Ljg3NSAwLjAwMSAxNDQgMC4wMDFTMzIgNTAuMTI2IDMyIDExMi4wMDFWMjc4LjUwMUMxMi4yNSAzMDMuMjUxIDAgMzM0LjAwMSAwIDM2OC4wMDFDMCA0NDcuNTAxIDY0LjUgNTEyLjAwMSAxNDQgNTEyLjAwMVMyODggNDQ3LjUwMSAyODggMzY4LjAwMUMyODggMzM0LjAwMSAyNzUuNzUgMzAzLjEyNiAyNTYgMjc4LjUwMVYxMTIuMDAxWk0xNDQgNDQ4LjAwMUM5OS44NzUgNDQ4LjAwMSA2NCA0MTIuMTI2IDY0IDM2OC4wMDFDNjQgMzQyLjUwMSA3Ni4yNSAzMTkuMTI2IDk2IDMwNC4yNTFWMTEyLjAwMUM5NiA4NS41MDEgMTE3LjUgNjQuMDAxIDE0NCA2NC4wMDFTMTkyIDg1LjUwMSAxOTIgMTEyLjAwMVYzMDQuMjUxQzIxMS43NSAzMTkuMDAxIDIyNCAzNDIuNTAxIDIyNCAzNjguMDAxQzIyNCA0MTIuMTI2IDE4OC4xMjUgNDQ4LjAwMSAxNDQgNDQ4LjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTYwIDMyMi44NzVWMzA0QzE2MCAyOTUuMjUgMTUyLjc1IDI4OCAxNDQgMjg4UzEyOCAyOTUuMjUgMTI4IDMwNFYzMjIuODc1QzEwOS4zNzUgMzI5LjUgOTYgMzQ3LjEyNSA5NiAzNjhDOTYgMzk0LjUgMTE3LjUgNDE2IDE0NCA0MTZTMTkyIDM5NC41IDE5MiAzNjhDMTkyIDM0Ny4xMjUgMTc4LjYyNSAzMjkuNSAxNjAgMzIyLjg3NVpNNDE2IDBDMzYzLjEyNSAwIDMyMCA0My4xMjUgMzIwIDk2UzM2My4xMjUgMTkyIDQxNiAxOTJTNTEyIDE0OC44NzUgNTEyIDk2UzQ2OC44NzUgMCA0MTYgMFpNNDE2IDEyOEMzOTguMjUgMTI4IDM4NCAxMTMuNzUgMzg0IDk2UzM5OC4yNSA2NCA0MTYgNjRTNDQ4IDc4LjI1IDQ0OCA5NlM0MzMuNzUgMTI4IDQxNiAxMjhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TemperatureLow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 112.001C256 50.126 205.875 0.001 144 0.001S32 50.126 32 112.001V278.501C12.25 303.251 0 334.001 0 368.001C0 447.501 64.5 512.001 144 512.001S288 447.501 288 368.001C288 334.001 275.75 303.126 256 278.501V112.001ZM144 448.001C99.875 448.001 64 412.126 64 368.001C64 342.501 76.25 319.126 96 304.251V112.001C96 85.501 117.5 64.001 144 64.001S192 85.501 192 112.001V304.251C211.75 319.001 224 342.501 224 368.001C224 412.126 188.125 448.001 144 448.001Z" />
            <path d="M160 322.875V304C160 295.25 152.75 288 144 288S128 295.25 128 304V322.875C109.375 329.5 96 347.125 96 368C96 394.5 117.5 416 144 416S192 394.5 192 368C192 347.125 178.625 329.5 160 322.875ZM416 0C363.125 0 320 43.125 320 96S363.125 192 416 192S512 148.875 512 96S468.875 0 416 0ZM416 128C398.25 128 384 113.75 384 96S398.25 64 416 64S448 78.25 448 96S433.75 128 416 128Z" />
        </Icon>
    </>
}