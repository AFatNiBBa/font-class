
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `heart-crack` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart-crack?s=light heart-crack}
 * @preview ![heart-crack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjIuMjcxIDYyLjcxNUM0MDcuNzcxIDE2LjIwOSAzMjYuMjY5IDIzLjk2MSAyNzUuNzY5IDc2LjIxNUwyNTYuMDE3IDk2LjU5MkwyMzYuMjY3IDc2LjIxNUMxOTUuNTE3IDM0LjA4NiAxMTMuMjY1IDguNzA5IDQ5Ljc2MyA2Mi43MTVDLTEzLjExMiAxMTYuMjE5IC0xNi4zNjIgMjEyLjQ3NyAzOS43NjMgMjcwLjQ4MkwyMzMuMjY3IDQ3MC4yNDhDMjM5LjUxNyA0NzYuNzUgMjQ3Ljc2NyA0ODAgMjU1Ljg5MiA0ODBDMjY0LjE0MiA0ODAgMjcyLjI2OSA0NzYuNzUgMjc4LjUxOSA0NzAuMjQ4TDQ3Mi4wMjMgMjcwLjQ4MkM1MjguMzk4IDIxMi40NzcgNTI1LjE0OCAxMTYuMjE5IDQ2Mi4yNzEgNjIuNzE1Wk00NDkuMjcxIDI0OC4yM0wyNTYuMzkyIDQ0OC4xMjFMNjIuNzYzIDI0OC4yM0MyNC4zODggMjA4LjcyNyAxNi4zODggMTMzLjIyMSA3MC41MTUgODcuMDkyQzEyNS4yNjUgNDAuMjEzIDE4OS43NjcgNzQuMjE1IDIxMy4yNjcgOTguNTkyTDI3Ni4xMDkgMTYyLjczNEwxNjkuNTkzIDIwOS4zNDRDMTY0LjkzNyAyMTEuMzc1IDE2MS41MzEgMjE1LjQ4NCAxNjAuNDA2IDIyMC40MzhDMTU5LjI2NSAyMjUuMzc1IDE2MC41NDcgMjMwLjU2MiAxNjMuODU5IDIzNC40MDZMMjU5Ljg1OSAzNDYuNDA2QzI2My4wMTUgMzUwLjEwOSAyNjcuNSAzNTIgMjcyIDM1MkMyNzUuNjg3IDM1MiAyNzkuMzkgMzUwLjczNCAyODIuNDA2IDM0OC4xNDFDMjg5LjEyNSAzNDIuMzkxIDI4OS45MDYgMzMyLjI5NyAyODQuMTQgMzI1LjU5NEwyMDIuMjE4IDIzMEwzMTAuNDA2IDE4Mi42NTZDMzE1LjI1IDE4MC41MzEgMzE4LjczNCAxNzYuMTU2IDMxOS43MTggMTcwLjk2OUMzMjAuNzAzIDE2NS43NjYgMzE5LjA0NyAxNjAuNDIyIDMxNS4zMTIgMTU2LjY4N0wyNzguMzIyIDExOS42OTdMMjk4Ljc2OSA5OC41OTJDMzIxLjg5NCA3NC41OSAzODYuODk2IDQwLjU4OCA0NDEuNTIxIDg3LjA5MkM0OTUuNTIzIDEzMy4wOTYgNDg3LjY0OCAyMDguNjAyIDQ0OS4yNzEgMjQ4LjIzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HeartCrack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M462.271 62.715C407.771 16.209 326.269 23.961 275.769 76.215L256.017 96.592L236.267 76.215C195.517 34.086 113.265 8.709 49.763 62.715C-13.112 116.219 -16.362 212.477 39.763 270.482L233.267 470.248C239.517 476.75 247.767 480 255.892 480C264.142 480 272.269 476.75 278.519 470.248L472.023 270.482C528.398 212.477 525.148 116.219 462.271 62.715ZM449.271 248.23L256.392 448.121L62.763 248.23C24.388 208.727 16.388 133.221 70.515 87.092C125.265 40.213 189.767 74.215 213.267 98.592L276.109 162.734L169.593 209.344C164.937 211.375 161.531 215.484 160.406 220.438C159.265 225.375 160.547 230.562 163.859 234.406L259.859 346.406C263.015 350.109 267.5 352 272 352C275.687 352 279.39 350.734 282.406 348.141C289.125 342.391 289.906 332.297 284.14 325.594L202.218 230L310.406 182.656C315.25 180.531 318.734 176.156 319.718 170.969C320.703 165.766 319.047 160.422 315.312 156.687L278.322 119.697L298.769 98.592C321.894 74.59 386.896 40.588 441.521 87.092C495.523 133.096 487.648 208.602 449.271 248.23Z" />
        </Icon>
    </>
}