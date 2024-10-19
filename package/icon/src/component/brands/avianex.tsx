
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `avianex` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/avianex?s=brands avianex}
 * @preview ![avianex](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTMuMSAzMmgtMzEyYy0zOC45IDAtNzYuMiAzMS4yLTgzLjMgNjkuN0wxLjIgNDEwLjNDLTUuOSA0NDguOCAxOS45IDQ4MCA1OC45IDQ4MGgzMTJjMzguOSAwIDc2LjItMzEuMiA4My4zLTY5LjdsNTYuNy0zMDguNWM3LTM4LjYtMTguOC02OS44LTU3LjgtNjkuOHptLTU4LjIgMzQ3LjNsLTMyIDEzLjUtMTE1LjQtMTEwYy0xNC43IDEwLTI5LjIgMTkuNS00MS43IDI3LjFsMjIuMSA2NC4yLTE3LjkgMTIuNy00MC42LTYxLTUyLjQtNDguMSAxNS43LTE1LjQgNTggMzEuMWM5LjMtMTAuNSAyMC44LTIyLjYgMzIuOC0zNC45TDIwMyAyMjguOWwtNjguOC05OS44IDE4LjgtMjguOSA4LjktNC44TDI2NSAyMDcuOGw0LjkgNC41YzE5LjQtMTguOCAzMy44LTMyLjQgMzMuOC0zMi40IDcuNy02LjUgMjEuNS0yLjkgMzAuNyA3LjkgOSAxMC41IDEwLjYgMjQuNyAyLjcgMzEuMy0xLjggMS4zLTE1LjUgMTEuNC0zNS4zIDI1LjZsNC41IDcuMyA5NC45IDExOS40LTYuMyA3Ljl6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Avianex(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M453.1 32h-312c-38.9 0-76.2 31.2-83.3 69.7L1.2 410.3C-5.9 448.8 19.9 480 58.9 480h312c38.9 0 76.2-31.2 83.3-69.7l56.7-308.5c7-38.6-18.8-69.8-57.8-69.8zm-58.2 347.3l-32 13.5-115.4-110c-14.7 10-29.2 19.5-41.7 27.1l22.1 64.2-17.9 12.7-40.6-61-52.4-48.1 15.7-15.4 58 31.1c9.3-10.5 20.8-22.6 32.8-34.9L203 228.9l-68.8-99.8 18.8-28.9 8.9-4.8L265 207.8l4.9 4.5c19.4-18.8 33.8-32.4 33.8-32.4 7.7-6.5 21.5-2.9 30.7 7.9 9 10.5 10.6 24.7 2.7 31.3-1.8 1.3-15.5 11.4-35.3 25.6l4.5 7.3 94.9 119.4-6.3 7.9z" />
        </Icon>
    </>
}