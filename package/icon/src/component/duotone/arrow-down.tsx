
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=duotone arrow-down}
 * @preview ![arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4NCAzNDYuODJWNzJDMTg0IDQ5LjkwNiAyMDEuOTA2IDMyIDIyNCAzMlMyNjQgNDkuOTA2IDI2NCA3MlYzNDYuODJMMjI0IDM4NC44MTJMMTg0IDM0Ni44MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjI0IDQ4MEMyMTQuMDc4IDQ4MCAyMDQuMTcyIDQ3Ni4zNDQgMTk2LjQ1MyA0NjlMMzYuNDUzIDMxN0MyMC40MzcgMzAxLjc4MSAxOS43ODEgMjc2LjQ2OSAzNSAyNjAuNDM4QzUwLjIzNCAyNDQuNSA3NS41NzggMjQzLjgxMiA5MS41NDcgMjU5TDIyNCAzODQuODEyTDM1Ni40NTMgMjU5QzM3Mi40MzcgMjQzLjgxMiAzOTcuNzgxIDI0NC40NjkgNDEzIDI2MC40MzhDNDI4LjIxOCAyNzYuNDY5IDQyNy41NjIgMzAxLjc4MSA0MTEuNTQ3IDMxN0wyNTEuNTQ3IDQ2OUMyNDMuODI4IDQ3Ni4zNDQgMjMzLjkyMiA0ODAgMjI0IDQ4MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M184 346.82V72C184 49.906 201.906 32 224 32S264 49.906 264 72V346.82L224 384.812L184 346.82Z" />
            <path d="M224 480C214.078 480 204.172 476.344 196.453 469L36.453 317C20.437 301.781 19.781 276.469 35 260.438C50.234 244.5 75.578 243.812 91.547 259L224 384.812L356.453 259C372.437 243.812 397.781 244.469 413 260.438C428.218 276.469 427.562 301.781 411.547 317L251.547 469C243.828 476.344 233.922 480 224 480Z" />
        </Icon>
    </>
}