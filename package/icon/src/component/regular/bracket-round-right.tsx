
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-round-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round-right?s=regular bracket-round-right}
 * @preview ![bracket-round-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00My42NiA0MzUuNDA2QzQ3Ljc1NCA0MzIuOTM3IDE0NC4wMDEgMzczLjQ5OSAxNDQuMDAxIDI1NS45OThDMTQ0LjAwMSAxMzguODczIDQ4LjM0NyA3OS40MzUgNDMuNzIyIDc2LjYyMkMzMi4zNDggNjkuODEgMjguNTk4IDU1LjA5MSAzNS4zNzkgNDMuNzE2QzQyLjE2IDMyLjM3MiA1Ni44NDcgMjguNTkxIDY4LjI4NCAzNS4zNzJDNzMuMzE1IDM4LjM3MiAxOTIgMTEwLjY4NSAxOTIgMjU1Ljk5OFM3My4zMTUgNDczLjYyNSA2OC4yODQgNDc2LjYyNUM2NC40NDEgNDc4LjkwNiA2MC4yMjIgNDgwIDU2LjA2NiA0ODBDNDcuOTEgNDgwIDM5Ljk0MSA0NzUuODEzIDM1LjQ0MSA0NjguMzEyQzI4LjY2IDQ1Ni45NjkgMzIuMzQ4IDQ0Mi4yNSA0My42NiA0MzUuNDA2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BracketRoundRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M43.66 435.406C47.754 432.937 144.001 373.499 144.001 255.998C144.001 138.873 48.347 79.435 43.722 76.622C32.348 69.81 28.598 55.091 35.379 43.716C42.16 32.372 56.847 28.591 68.284 35.372C73.315 38.372 192 110.685 192 255.998S73.315 473.625 68.284 476.625C64.441 478.906 60.222 480 56.066 480C47.91 480 39.941 475.813 35.441 468.312C28.66 456.969 32.348 442.25 43.66 435.406Z" />
        </Icon>
    </>
}