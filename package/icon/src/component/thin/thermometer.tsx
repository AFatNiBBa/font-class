
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=thin thermometer}
 * @preview ![thermometer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzYuNzM4IDIwLjM1QzQ2MC4wMjUgNi42OTcgNDM5LjI0NiAwIDQxOC4xMjEgMEMzOTEuODQ2IDAgMzY1LjAzNyAxMC4zNjUgMzQ0Ljg3NSAzMC42MDJMMTE0LjYwOSAyNjIuNDQ5QzEwMi43MDMgMjc0LjQzNiA5Ni4wMjEgMjkwLjY0NSA5Ni4wMTggMzA3LjUzN0w5Ni4wMDIgNDA0LjY4NkwyLjM0NCA0OTguMzQ0Qy0wLjc4MSA1MDEuNDY5IC0wLjc4MSA1MDYuNTMxIDIuMzQ0IDUwOS42NTZDMy45MDYgNTExLjIxOSA1LjkzNyA1MTIgOCA1MTJTMTIuMDk0IDUxMS4yMTkgMTMuNjU2IDUwOS42NTZMMTA3LjMxNiA0MTUuOTk2TDIwMy4zMzQgNDE1Ljk1N0MyMjAuMjU4IDQxNS45NDkgMjM2LjQ5MiA0MDkuMjM4IDI0OC40OCAzOTcuMjkzTDQ4My45ODYgMTYyLjYzNUM1MTguODU5IDEyNy43NSA1MjYuMjMyIDYxLjEwOSA0NzYuNzM4IDIwLjM1Wk00NzIuNjkzIDE1MS4zMDFMMjM3LjE4NyAzODUuOTU5QzIyOC4xMzUgMzk0Ljk4IDIxNi4xMDkgMzk5Ljk1MSAyMDMuMzI4IDM5OS45NTdMMTEyLjAwMiAzOTkuOTk0TDExMi4wMTggMzA3LjU0MUMxMTIuMDIxIDI5NC43ODMgMTE2Ljk3MyAyODIuNzczIDEyNS45NjEgMjczLjcyNUwxNjIuMDYyIDIzNy4zNzVMMjE4LjM0NCAyOTMuNjU2QzIxOS45MDYgMjk1LjIxOSAyMjEuOTM3IDI5NiAyMjQgMjk2UzIyOC4wOTQgMjk1LjIxOSAyMjkuNjU2IDI5My42NTZDMjMyLjc4MSAyOTAuNTMxIDIzMi43ODEgMjg1LjQ2OSAyMjkuNjU2IDI4Mi4zNDRMMTczLjMzNiAyMjYuMDIzTDIyNS44NDQgMTczLjE1NkwyODIuMzQ0IDIyOS42NTZDMjgzLjkwNiAyMzEuMjE5IDI4NS45MzcgMjMyIDI4OCAyMzJTMjkyLjA5NCAyMzEuMjE5IDI5My42NTYgMjI5LjY1NkMyOTYuNzgxIDIyNi41MzEgMjk2Ljc4MSAyMjEuNDY5IDI5My42NTYgMjE4LjM0NEwyMzcuMTE3IDE2MS44MDVMMjg5LjYyNSAxMDguOTM4TDM0Ni4zNDQgMTY1LjY1NkMzNDcuOTA2IDE2Ny4yMTkgMzQ5LjkzNyAxNjggMzUyIDE2OFMzNTYuMDk0IDE2Ny4yMTkgMzU3LjY1NiAxNjUuNjU2QzM2MC43ODEgMTYyLjUzMSAzNjAuNzgxIDE1Ny40NjkgMzU3LjY1NiAxNTQuMzQ0TDMwMC44OTggOTcuNTg2TDM1Ni4yMTEgNDEuODk1QzM3Mi42MDQgMjUuNDM5IDM5NS4xNyAxNiA0MTguMTIzIDE2QzQzNi4xOCAxNiA0NTMuNCAyMS45NDUgNDY2LjU2NiAzMi43MDFDNDg5LjQ0NyA1MS41NDMgNDk1LjE1IDc0LjEyNSA0OTUuOTA2IDg5Ljc1MkM0OTcuMDE0IDExMi42NDUgNDg4LjMyNiAxMzUuNjYyIDQ3Mi42OTMgMTUxLjMwMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Thermometer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M476.738 20.35C460.025 6.697 439.246 0 418.121 0C391.846 0 365.037 10.365 344.875 30.602L114.609 262.449C102.703 274.436 96.021 290.645 96.018 307.537L96.002 404.686L2.344 498.344C-0.781 501.469 -0.781 506.531 2.344 509.656C3.906 511.219 5.937 512 8 512S12.094 511.219 13.656 509.656L107.316 415.996L203.334 415.957C220.258 415.949 236.492 409.238 248.48 397.293L483.986 162.635C518.859 127.75 526.232 61.109 476.738 20.35ZM472.693 151.301L237.187 385.959C228.135 394.98 216.109 399.951 203.328 399.957L112.002 399.994L112.018 307.541C112.021 294.783 116.973 282.773 125.961 273.725L162.062 237.375L218.344 293.656C219.906 295.219 221.937 296 224 296S228.094 295.219 229.656 293.656C232.781 290.531 232.781 285.469 229.656 282.344L173.336 226.023L225.844 173.156L282.344 229.656C283.906 231.219 285.937 232 288 232S292.094 231.219 293.656 229.656C296.781 226.531 296.781 221.469 293.656 218.344L237.117 161.805L289.625 108.938L346.344 165.656C347.906 167.219 349.937 168 352 168S356.094 167.219 357.656 165.656C360.781 162.531 360.781 157.469 357.656 154.344L300.898 97.586L356.211 41.895C372.604 25.439 395.17 16 418.123 16C436.18 16 453.4 21.945 466.566 32.701C489.447 51.543 495.15 74.125 495.906 89.752C497.014 112.645 488.326 135.662 472.693 151.301Z" />
        </Icon>
    </>
}