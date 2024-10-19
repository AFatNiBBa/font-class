
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rockrms` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rockrms?s=brands rockrms}
 * @preview ![rockrms](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggOEMxMTEgOCAwIDExOSAwIDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM4NSA4IDI0OCA4em0xNTcuNCA0MTkuNWgtOTBsLTExMi0xMzEuM2MtMTcuOS0yMC40LTMuOS01Ni4xIDI2LjYtNTYuMWg3NS4zbC04NC42LTk5LjMtODQuMyA5OC45aC05MEwxOTMuNSA2Ny4yYzE0LjQtMTguNCA0MS4zLTE3LjMgNTQuNSAwbDE1Ny43IDE4NS4xYzE5IDIyLjggMiA1Ny4yLTI3LjYgNTYuMS0uNiAwLTc0LjIuMi03NC4yLjJsMTAxLjUgMTE4Ljl6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Rockrms(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm157.4 419.5h-90l-112-131.3c-17.9-20.4-3.9-56.1 26.6-56.1h75.3l-84.6-99.3-84.3 98.9h-90L193.5 67.2c14.4-18.4 41.3-17.3 54.5 0l157.7 185.1c19 22.8 2 57.2-27.6 56.1-.6 0-74.2.2-74.2.2l101.5 118.9z" />
        </Icon>
    </>
}