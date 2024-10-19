
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `twitch` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/twitch?s=brands twitch}
 * @preview ![twitch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTEuMTcsMTAzLjQ3SDM1Mi41NHYxMDkuN2gzOC42M1pNMjg1LDEwM0gyNDYuMzdWMjEyLjc1SDI4NVpNMTIwLjgzLDAsMjQuMzEsOTEuNDJWNDIwLjU4SDE0MC4xNFY1MTJsOTYuNTMtOTEuNDJoNzcuMjVMNDg3LjY5LDI1NlYwWk00NDkuMDcsMjM3Ljc1bC03Ny4yMiw3My4xMkgyOTQuNjFsLTY3LjYsNjR2LTY0SDE0MC4xNFYzNi41OEg0NDkuMDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Twitch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z" />
        </Icon>
    </>
}