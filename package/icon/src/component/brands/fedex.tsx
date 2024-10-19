
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `fedex` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fedex?s=brands fedex}
 * @preview ![fedex](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01ODYgMjg0LjVsNTMuMy01OS45aC02Mi40bC0yMS43IDI0LjgtMjIuNS0yNC44SDQxNHYtMTZoNTYuMXYtNDguMUgzMTguOVYyMzZoLS41Yy05LjYtMTEtMjEuNS0xNC44LTM1LjQtMTQuOC0yOC40IDAtNDkuOCAxOS40LTU3LjMgNDQuOS0xOC01OS40LTk3LjQtNTcuNi0xMjEuOS0xNHYtMjQuMkg0OXYtMjYuMmg2MHYtNDEuMUgwVjM0NWg0OXYtNzcuNWg0OC45Yy0xLjUgNS43LTIuMyAxMS44LTIuMyAxOC4yIDAgNzMuMSAxMDIuNiA5MS40IDEzMC4yIDIzLjdoLTQyYy0xNC43IDIwLjktNDUuOCA4LjktNDUuOC0xNC42aDg1LjVjMy43IDMwLjUgMjcuNCA1Ni45IDYwLjEgNTYuOSAxNC4xIDAgMjctNi45IDM0LjktMTguNmguNVYzNDVoMjEyLjJsMjIuMS0yNSAyMi4zIDI1SDY0MGwtNTQtNjAuNXptLTQ0Ni43LTE2LjZjNi4xLTI2LjMgNDEuNy0yNS42IDQ2LjUgMGgtNDYuNXptMTUzLjQgNDguOWMtMzQuNiAwLTM0LTYyLjggMC02Mi44IDMyLjYgMCAzNC41IDYyLjggMCA2Mi44em0xNjcuOCAxOS4xaC05NC40VjE2OS40aDk1djMwLjJINDA1djMzLjloNTUuNXYyOC4xaC01Ni4xdjQ0LjdoNTYuMXYyOS42em0tNDUuOS0zOS44di0yNC40aDU2LjF2LTQ0bDUwLjcgNTctNTAuNyA1N3YtNDUuNmgtNTYuMXptMTM4LjYgMTAuM2wtMjYuMSAyOS41SDQ4OWw0NS42LTUxLjItNDUuNi01MS4yaDM5LjdsMjYuNiAyOS4zIDI1LjYtMjkuM2gzOC41bC00NS40IDUxIDQ2IDUxLjRoLTQwLjVsLTI2LjMtMjkuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Fedex(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M586 284.5l53.3-59.9h-62.4l-21.7 24.8-22.5-24.8H414v-16h56.1v-48.1H318.9V236h-.5c-9.6-11-21.5-14.8-35.4-14.8-28.4 0-49.8 19.4-57.3 44.9-18-59.4-97.4-57.6-121.9-14v-24.2H49v-26.2h60v-41.1H0V345h49v-77.5h48.9c-1.5 5.7-2.3 11.8-2.3 18.2 0 73.1 102.6 91.4 130.2 23.7h-42c-14.7 20.9-45.8 8.9-45.8-14.6h85.5c3.7 30.5 27.4 56.9 60.1 56.9 14.1 0 27-6.9 34.9-18.6h.5V345h212.2l22.1-25 22.3 25H640l-54-60.5zm-446.7-16.6c6.1-26.3 41.7-25.6 46.5 0h-46.5zm153.4 48.9c-34.6 0-34-62.8 0-62.8 32.6 0 34.5 62.8 0 62.8zm167.8 19.1h-94.4V169.4h95v30.2H405v33.9h55.5v28.1h-56.1v44.7h56.1v29.6zm-45.9-39.8v-24.4h56.1v-44l50.7 57-50.7 57v-45.6h-56.1zm138.6 10.3l-26.1 29.5H489l45.6-51.2-45.6-51.2h39.7l26.6 29.3 25.6-29.3h38.5l-45.4 51 46 51.4h-40.5l-26.3-29.5z" />
        </Icon>
    </>
}