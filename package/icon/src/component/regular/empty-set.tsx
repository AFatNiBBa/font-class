
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `empty-set` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/empty-set?s=regular empty-set}
 * @preview ![empty-set](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQuOTY5IDcuMDMxQzQ5NS41OTQgLTIuMzQ0IDQ4MC40MDYgLTIuMzQ0IDQ3MS4wMzEgNy4wMzFMMzk2LjQ0MSA4MS42MjFDMzU4LjAxNiA1MC42MzMgMzA5LjIwNyAzMiAyNTYgMzJDMTMyLjI4OSAzMiAzMiAxMzIuMjg5IDMyIDI1NkMzMiAzMDkuMjA3IDUwLjYzMyAzNTguMDE2IDgxLjYyMSAzOTYuNDQxTDcuMDMxIDQ3MS4wMzFDLTIuMzQ0IDQ4MC40MDYgLTIuMzQ0IDQ5NS41OTQgNy4wMzEgNTA0Ljk2OUMxMS43MTkgNTA5LjY1NiAxNy44NDQgNTEyIDI0IDUxMlMzNi4yODEgNTA5LjY1NiA0MC45NjkgNTA0Ljk2OUwxMTUuNTU5IDQzMC4zNzlDMTUzLjk4NCA0NjEuMzY3IDIwMi43OTMgNDgwIDI1NiA0ODBDMzc5LjcxMSA0ODAgNDgwIDM3OS43MTEgNDgwIDI1NkM0ODAgMjAyLjc5MyA0NjEuMzY3IDE1My45ODQgNDMwLjM3OSAxMTUuNTU5TDUwNC45NjkgNDAuOTY5QzUxNC4zNDQgMzEuNTk0IDUxNC4zNDQgMTYuNDA2IDUwNC45NjkgNy4wMzFaTTgwIDI1NkM4MCAxNTguOTUzIDE1OC45NTMgODAgMjU2IDgwQzI5NS44ODEgODAgMzMyLjU4NiA5My40ODggMzYyLjEzMSAxMTUuOTMyTDExNS45MzIgMzYyLjEzMUM5My40ODggMzMyLjU4NiA4MCAyOTUuODgxIDgwIDI1NlpNNDMyIDI1NkM0MzIgMzUzLjA0NyAzNTMuMDQ3IDQzMiAyNTYgNDMyQzIxNi4xMTkgNDMyIDE3OS40MTQgNDE4LjUxMiAxNDkuODY5IDM5Ni4wNjhMMzk2LjA2OCAxNDkuODY5QzQxOC41MTIgMTc5LjQxNCA0MzIgMjE2LjExOSA0MzIgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function EmptySet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504.969 7.031C495.594 -2.344 480.406 -2.344 471.031 7.031L396.441 81.621C358.016 50.633 309.207 32 256 32C132.289 32 32 132.289 32 256C32 309.207 50.633 358.016 81.621 396.441L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.844 512 24 512S36.281 509.656 40.969 504.969L115.559 430.379C153.984 461.367 202.793 480 256 480C379.711 480 480 379.711 480 256C480 202.793 461.367 153.984 430.379 115.559L504.969 40.969C514.344 31.594 514.344 16.406 504.969 7.031ZM80 256C80 158.953 158.953 80 256 80C295.881 80 332.586 93.488 362.131 115.932L115.932 362.131C93.488 332.586 80 295.881 80 256ZM432 256C432 353.047 353.047 432 256 432C216.119 432 179.414 418.512 149.869 396.068L396.068 149.869C418.512 179.414 432 216.119 432 256Z" />
        </Icon>
    </>
}