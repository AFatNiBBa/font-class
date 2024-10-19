
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=solid droplet-degree}
 * @preview ![droplet-degree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzMuNDM3IDUxLjM2MUM5MC45MzcgMTg5LjI4MSAwIDIyNi45MDYgMCAzMjQuMTQxQzAgNDEwLjIxOSA3MS41NjIgNDgwIDE1OS45OTkgNDgwUzMxOS45OTkgNDEwLjIxOSAzMTkuOTk5IDMyNC4xNDFDMzE5Ljk5OSAyMjYuMzU5IDIyOS4yNyAxOTAuMDQ3IDE4Ni41NjIgNTEuMzYxQzE3OS4zNzQgMjYuMDk2IDE0MS41NjIgMjUuMDAyIDEzMy40MzcgNTEuMzYxWk0zNjggMzJDMzIzLjkzOCAzMiAyODguMDAxIDY3LjkzOCAyODguMDAxIDExMlMzMjMuOTM4IDE5MiAzNjggMTkyUzQ0OCAxNTYuMDYyIDQ0OCAxMTJTNDEyLjA2MyAzMiAzNjggMzJaTTM2OCAxNDRDMzUwLjI1IDE0NCAzMzYgMTI5Ljc1IDMzNiAxMTJTMzUwLjI1IDgwIDM2OCA4MEMzODUuNzUgODAgNDAwIDk0LjI1IDQwMCAxMTJTMzg1Ljc1IDE0NCAzNjggMTQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DropletDegree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M133.437 51.361C90.937 189.281 0 226.906 0 324.141C0 410.219 71.562 480 159.999 480S319.999 410.219 319.999 324.141C319.999 226.359 229.27 190.047 186.562 51.361C179.374 26.096 141.562 25.002 133.437 51.361ZM368 32C323.938 32 288.001 67.938 288.001 112S323.938 192 368 192S448 156.062 448 112S412.063 32 368 32ZM368 144C350.25 144 336 129.75 336 112S350.25 80 368 80C385.75 80 400 94.25 400 112S385.75 144 368 144Z" />
        </Icon>
    </>
}