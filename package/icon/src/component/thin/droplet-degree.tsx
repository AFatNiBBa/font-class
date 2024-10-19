
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `droplet-degree` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=thin droplet-degree}
 * @preview ![droplet-degree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTEuOTkgMzJDMTgwLjc0MiAzMiAxNjkuNDU3IDM4LjMyIDE2NS40MzggNTEuMzYxQzEyMi45MzggMTg5LjI4MSAzMiAyMjYuOTA2IDMyIDMyNC4xNDFDMzIgNDEwLjIxOSAxMDMuNTYyIDQ4MCAxOTIgNDgwUzM1MiA0MTAuMjE5IDM1MiAzMjQuMTQxQzM1MiAyMjYuMzU5IDI2MS4yNzEgMTkwLjA0NyAyMTguNTYyIDUxLjM2MUMyMTQuOTMyIDM4LjU5NiAyMDMuNDc5IDMyIDE5MS45OSAzMlpNMzM2IDMyNC4xNDFDMzM2IDQwMS4yNiAyNzEuNDAyIDQ2NCAxOTIgNDY0UzQ4IDQwMS4yNiA0OCAzMjQuMTQxQzQ4IDI3OC4yMzYgNzAuOTc1IDI0Ni41NDkgMTAwLjA2MSAyMDYuNDI4QzEyOC4wNTMgMTY3LjgxNiAxNTkuNzgxIDEyNC4wNTUgMTgwLjcyOSA1Ni4wNzRDMTgyLjk3NSA0OC43ODcgMTg5LjM1NCA0OCAxOTEuOTkgNDhDMTkzLjQ5IDQ4IDIwMS4wNzggNDguMzczIDIwMy4yNzEgNTYuMDdDMjI0LjMzOCAxMjQuNDc3IDI1Ni4wODYgMTY4LjEyNyAyODQuMDk4IDIwNi42MzdDMzEzLjA5NiAyNDYuNTA2IDMzNiAyNzcuOTk4IDMzNiAzMjQuMTQxWk0zNTIgMzJDMzE2Ljc1IDMyIDI4OCA2MC43NSAyODggOTZTMzE2Ljc1IDE2MCAzNTIgMTYwUzQxNiAxMzEuMjUgNDE2IDk2UzM4Ny4yNSAzMiAzNTIgMzJaTTM1MiAxNDRDMzI1LjUzMyAxNDQgMzA0IDEyMi40NjcgMzA0IDk2UzMyNS41MzMgNDggMzUyIDQ4UzQwMCA2OS41MzMgNDAwIDk2UzM3OC40NjcgMTQ0IDM1MiAxNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DropletDegree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M191.99 32C180.742 32 169.457 38.32 165.438 51.361C122.938 189.281 32 226.906 32 324.141C32 410.219 103.562 480 192 480S352 410.219 352 324.141C352 226.359 261.271 190.047 218.562 51.361C214.932 38.596 203.479 32 191.99 32ZM336 324.141C336 401.26 271.402 464 192 464S48 401.26 48 324.141C48 278.236 70.975 246.549 100.061 206.428C128.053 167.816 159.781 124.055 180.729 56.074C182.975 48.787 189.354 48 191.99 48C193.49 48 201.078 48.373 203.271 56.07C224.338 124.477 256.086 168.127 284.098 206.637C313.096 246.506 336 277.998 336 324.141ZM352 32C316.75 32 288 60.75 288 96S316.75 160 352 160S416 131.25 416 96S387.25 32 352 32ZM352 144C325.533 144 304 122.467 304 96S325.533 48 352 48S400 69.533 400 96S378.467 144 352 144Z" />
        </Icon>
    </>
}