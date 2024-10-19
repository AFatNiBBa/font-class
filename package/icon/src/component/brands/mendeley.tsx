
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mendeley` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mendeley?s=brands mendeley}
 * @preview ![mendeley](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjQuNiAzMjUuMmMtMTIuMy0xMi40LTI5LjctMTkuMi00OC40LTE3LjItNDMuMy0xLTQ5LjctMzQuOS0zNy41LTk4LjggMjIuOC01Ny41LTE0LjktMTMxLjUtODcuNC0xMzAuOC03Ny40LjctODEuNyA4Mi0xMzAuOSA4Mi00OC4xIDAtNTQtODEuMy0xMzAuOS04Mi03Mi45LS44LTExMC4xIDczLjMtODcuNCAxMzAuOCAxMi4yIDYzLjkgNS44IDk3LjgtMzcuNSA5OC44LTIxLjItMi4zLTM3IDYuNS01MyAyMi41LTE5LjkgMTkuNy0xOS4zIDk0LjggNDIuNiAxMDIuNiA0Ny4xIDUuOSA4MS42LTQyLjkgNjEuMi04Ny44LTQ3LjMtMTAzLjcgMTg1LjktMTA2LjEgMTQ2LjUtOC4yLS4xLjEtLjIuMi0uMy40LTI2LjggNDIuOCA2LjggOTcuNCA1OC44IDk1LjIgNTIuMSAyLjEgODUuNC01Mi42IDU4LjgtOTUuMi0uMS0uMi0uMi0uMy0uMy0uNC0zOS40LTk3LjkgMTkzLjgtOTUuNSAxNDYuNSA4LjItNC42IDEwLTYuNyAyMS4zLTUuNyAzMyA0LjkgNTMuNCA2OC43IDc0LjEgMTA0LjkgMzUuMiAxNy44LTE0LjggMjMuMS02NS42IDAtODguM3ptLTMwMy45LTE5LjFoLS42Yy00My40IDAtNjIuOC0zNy41LTYyLjgtNjIuOCAwLTM0LjcgMjguMi02Mi44IDYyLjgtNjIuOGguNmMzNC43IDAgNjIuOCAyOC4xIDYyLjggNjIuOCAwIDI1LTE5LjIgNjIuOC02Mi44IDYyLjh6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Mendeley(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M624.6 325.2c-12.3-12.4-29.7-19.2-48.4-17.2-43.3-1-49.7-34.9-37.5-98.8 22.8-57.5-14.9-131.5-87.4-130.8-77.4.7-81.7 82-130.9 82-48.1 0-54-81.3-130.9-82-72.9-.8-110.1 73.3-87.4 130.8 12.2 63.9 5.8 97.8-37.5 98.8-21.2-2.3-37 6.5-53 22.5-19.9 19.7-19.3 94.8 42.6 102.6 47.1 5.9 81.6-42.9 61.2-87.8-47.3-103.7 185.9-106.1 146.5-8.2-.1.1-.2.2-.3.4-26.8 42.8 6.8 97.4 58.8 95.2 52.1 2.1 85.4-52.6 58.8-95.2-.1-.2-.2-.3-.3-.4-39.4-97.9 193.8-95.5 146.5 8.2-4.6 10-6.7 21.3-5.7 33 4.9 53.4 68.7 74.1 104.9 35.2 17.8-14.8 23.1-65.6 0-88.3zm-303.9-19.1h-.6c-43.4 0-62.8-37.5-62.8-62.8 0-34.7 28.2-62.8 62.8-62.8h.6c34.7 0 62.8 28.1 62.8 62.8 0 25-19.2 62.8-62.8 62.8z" />
        </Icon>
    </>
}