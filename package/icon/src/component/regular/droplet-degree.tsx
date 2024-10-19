
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=regular droplet-degree}
 * @preview ![droplet-degree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjguMDAyIDMyQzMyMy45MzkgMzIgMjg4LjAwMiA2Ny45MzggMjg4LjAwMiAxMTJTMzIzLjkzOSAxOTIgMzY4LjAwMiAxOTJTNDQ4IDE1Ni4wNjIgNDQ4IDExMlM0MTIuMDY0IDMyIDM2OC4wMDIgMzJaTTM2OC4wMDIgMTQ0QzM1MC4zNTcgMTQ0IDMzNi4wMDIgMTI5LjY0NSAzMzYuMDAyIDExMlMzNTAuMzU3IDgwIDM2OC4wMDIgODBTNDAwIDk0LjM1NSA0MDAgMTEyUzM4NS42NDYgMTQ0IDM2OC4wMDIgMTQ0Wk0xNTkuOTkgMzJDMTQ4Ljc0IDMyIDEzNy40NTcgMzguMzIgMTMzLjQzOCA1MS4zNjFDOTAuOTM4IDE4OS4yODEgMCAyMjYuOTA2IDAgMzI0LjE0MUMwIDQxMC4yMTkgNzEuNTYyIDQ4MCAxNjAgNDgwUzMyMCA0MTAuMjE5IDMyMCAzMjQuMTQxQzMyMCAyMjYuMzU5IDIyOS4yNzEgMTkwLjA0NyAxODYuNTYyIDUxLjM2MUMxODIuOTMyIDM4LjU5NiAxNzEuNDc5IDMyIDE1OS45OSAzMlpNMjcyIDMyNC4xNDFDMjcyIDM4My42MTMgMjIxLjc1OCA0MzIgMTYwIDQzMlM0OCAzODMuNjEzIDQ4IDMyNC4xNDFDNDggMjkwLjE5NyA2My43NjIgMjY2Ljg3NSA5My45NjcgMjI1LjIxMUMxMTQuODE4IDE5Ni40NTEgMTM5LjQ2MyAxNjIuNDU3IDE1OS45ODQgMTE2Ljc5OUMxODAuNTkyIDE2Mi43MyAyMDUuMzExIDE5Ni43MTcgMjI2LjIxOSAyMjUuNDU5QzI1Ni4zMDEgMjY2LjgyIDI3MiAyODkuOTk0IDI3MiAzMjQuMTQxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DropletDegree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M368.002 32C323.939 32 288.002 67.938 288.002 112S323.939 192 368.002 192S448 156.062 448 112S412.064 32 368.002 32ZM368.002 144C350.357 144 336.002 129.645 336.002 112S350.357 80 368.002 80S400 94.355 400 112S385.646 144 368.002 144ZM159.99 32C148.74 32 137.457 38.32 133.438 51.361C90.938 189.281 0 226.906 0 324.141C0 410.219 71.562 480 160 480S320 410.219 320 324.141C320 226.359 229.271 190.047 186.562 51.361C182.932 38.596 171.479 32 159.99 32ZM272 324.141C272 383.613 221.758 432 160 432S48 383.613 48 324.141C48 290.197 63.762 266.875 93.967 225.211C114.818 196.451 139.463 162.457 159.984 116.799C180.592 162.73 205.311 196.717 226.219 225.459C256.301 266.82 272 289.994 272 324.141Z" />
        </Icon>
    </>
}