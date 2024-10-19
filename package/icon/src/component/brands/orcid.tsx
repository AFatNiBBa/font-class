
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `orcid` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/orcid?s=brands orcid}
 * @preview ![orcid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTQuNzUgMTg4LjE5aC00NS45MlYzNDJoNDcuNDdjNjcuNjIgMCA4My4xMi01MS4zNCA4My4xMi03Ni45MSAwLTQxLjY0LTI2LjU0LTc2LjktODQuNjctNzYuOXpNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptLTgwLjc5IDM2MC43NmgtMjkuODR2LTIwNy41aDI5Ljg0em0tMTQuOTItMjMxLjE0YTE5LjU3IDE5LjU3IDAgMSAxIDE5LjU3LTE5LjU3IDE5LjY0IDE5LjY0IDAgMCAxLTE5LjU3IDE5LjU3ek0zMDAgMzY5aC04MVYxNjEuMjZoODAuNmM3Ni43MyAwIDExMC40NCA1NC44MyAxMTAuNDQgMTAzLjg1QzQxMCAzMTguMzkgMzY4LjM4IDM2OSAzMDAgMzY5eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Orcid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M294.75 188.19h-45.92V342h47.47c67.62 0 83.12-51.34 83.12-76.91 0-41.64-26.54-76.9-84.67-76.9zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-80.79 360.76h-29.84v-207.5h29.84zm-14.92-231.14a19.57 19.57 0 1 1 19.57-19.57 19.64 19.64 0 0 1-19.57 19.57zM300 369h-81V161.26h80.6c76.73 0 110.44 54.83 110.44 103.85C410 318.39 368.38 369 300 369z" />
        </Icon>
    </>
}