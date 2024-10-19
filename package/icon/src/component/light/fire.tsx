
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fire` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fire?s=light fire}
 * @preview ![fire](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjcuMTI1IDIxOC44NDRDMzI0LjQ2OSAyMTQuNSAzMTkuOTA2IDIxMS42ODggMzE0Ljg0NCAyMTEuMjVDMzA5LjcxOSAyMTAuOTY5IDMwNC43OTcgMjEyLjgxMiAzMDEuNDM3IDIxNi42MjVMMjYyLjg1OSAyNjAuNjI1QzIzOS43NSAyMzEuMTU2IDE5Mi42NTYgMTcxLjEyNSAxODcuNzAzIDE2NS40NjlDMTg0LjYwOSAxNjEuOTM4IDE3OS41IDE1OS4xNTYgMTc1LjQ2OSAxNjBDMTcwLjc5NyAxNjAuMDYyIDE2Ni4zNzUgMTYyLjE1NiAxNjMuMzc1IDE2NS43NUMxMjIuNjcyIDIxNC41IDk2IDI0OS41MzEgOTYgMjkwLjQwNkM5NiAyOTkuMjUgMTAzLjE1NiAzMDYuNDA2IDExMiAzMDYuNDA2UzEyOCAyOTkuMjUgMTI4IDI5MC40MDZDMTI4IDI2NS42ODggMTQyLjc2NiAyNDEuNjI1IDE3NS41IDIwMS4zNDRDMTkzLjA2MiAyMjMuNDY5IDIyNS45NTMgMjY1LjM3NSAyNDkuNTc4IDI5NS41NjJDMjUyLjUxNiAyOTkuMzEyIDI1Ni45NjkgMzAxLjU2MiAyNjEuNzE5IDMwMS42ODdDMjY2LjkyMiAzMDEuODc1IDI3MS4wNjIgMjk5Ljg0NCAyNzQuMjAzIDI5Ni4yNUwzMTAuNTMxIDI1NC43ODFDMzI5Ljc5NyAyOTQuNTk0IDMxOS4wNzggMzQxLjg0NCAyODQuOTIyIDM2NS43ODFDMjc3LjY4NyAzNzAuODQ0IDI3NS45MzcgMzgwLjgxMiAyODEgMzg4LjA2MkMyODQuMTI1IDM5Mi41IDI4OS4wNzggMzk0Ljg3NSAyOTQuMTI1IDM5NC44NzVDMjk3LjI5NyAzOTQuODc1IDMwMC41IDM5My45MzcgMzAzLjI5NyAzOTEuOTY5QzM1MS4zNzUgMzU4LjI4MSAzNjYuMDc4IDI5MS43NSAzMzcuNDY5IDIzNy4xMjVDMzM0LjM1OSAyMzEuMjUgMzMwLjkwNiAyMjUuMDYyIDMyNy4xMjUgMjE4Ljg0NFpNMzI3LjMyOCA1Mi4zNDRDMzIxLjE3MiA0Ni41OTQgMzExLjYwOSA0Ni41OTQgMzA1LjQ1MyA1Mi4zNDRDMjkxLjQyMiA2NS41IDI3Ny44NzUgNzkuNTk0IDI2NS4wMTYgOTQuNDA2QzI0MS4xNTYgNjMuNDA2IDIxMy4wNzggMzIuNTYyIDE4Mi45MzcgNC4zMTJDMTc2Ljc4MSAtMS40MzggMTY3LjIxOSAtMS40MzggMTYxLjA2MiA0LjMxMkM2Ny43MzQgOTEuNzE5IDAgMjA3LjY1NiAwIDI4MC4wMzFDMCA0MDcuOTM4IDEwMC40ODQgNTEyIDIyNCA1MTJTNDQ4IDQwNy45MzggNDQ4IDI4MC4wMzFDNDQ4IDIyNS44MTIgMzk4LjQzOCAxMTguOTY5IDMyNy4zMjggNTIuMzQ0Wk0yMjQgNDgwQzExOC4xMjUgNDgwIDMyIDM5MC4yODEgMzIgMjgwLjAzMUMzMiAyMTkuNDM4IDkxLjQ1MyAxMTcuNDM4IDE3Mi4wMTYgMzguMTU2QzIwMS43NSA2Ny4xNTYgMjI4Ljk2OSA5OC41MzEgMjUxLjI5NyAxMjkuNTMxQzI1NC4yMTkgMTMzLjU5NCAyNTguODQ0IDEzNi4wMzEgMjYzLjgyOCAxMzYuMTg4QzI2OS43NSAxMzYuNDA2IDI3My41OTQgMTM0LjEyNSAyNzYuNzE5IDEzMC4yNUMyODkuMTcyIDExNC44NDQgMzAyLjQyMiAxMDAuMTU2IDMxNi4yNjYgODYuMzc1QzM3My4yMTkgMTQ1LjUgNDE2IDIzNi4xNTYgNDE2IDI4MC4wMzFDNDE2IDM5MC4yODEgMzI5Ljg3NSA0ODAgMjI0IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Fire(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M327.125 218.844C324.469 214.5 319.906 211.688 314.844 211.25C309.719 210.969 304.797 212.812 301.437 216.625L262.859 260.625C239.75 231.156 192.656 171.125 187.703 165.469C184.609 161.938 179.5 159.156 175.469 160C170.797 160.062 166.375 162.156 163.375 165.75C122.672 214.5 96 249.531 96 290.406C96 299.25 103.156 306.406 112 306.406S128 299.25 128 290.406C128 265.688 142.766 241.625 175.5 201.344C193.062 223.469 225.953 265.375 249.578 295.562C252.516 299.312 256.969 301.562 261.719 301.687C266.922 301.875 271.062 299.844 274.203 296.25L310.531 254.781C329.797 294.594 319.078 341.844 284.922 365.781C277.687 370.844 275.937 380.812 281 388.062C284.125 392.5 289.078 394.875 294.125 394.875C297.297 394.875 300.5 393.937 303.297 391.969C351.375 358.281 366.078 291.75 337.469 237.125C334.359 231.25 330.906 225.062 327.125 218.844ZM327.328 52.344C321.172 46.594 311.609 46.594 305.453 52.344C291.422 65.5 277.875 79.594 265.016 94.406C241.156 63.406 213.078 32.562 182.937 4.312C176.781 -1.438 167.219 -1.438 161.062 4.312C67.734 91.719 0 207.656 0 280.031C0 407.938 100.484 512 224 512S448 407.938 448 280.031C448 225.812 398.438 118.969 327.328 52.344ZM224 480C118.125 480 32 390.281 32 280.031C32 219.438 91.453 117.438 172.016 38.156C201.75 67.156 228.969 98.531 251.297 129.531C254.219 133.594 258.844 136.031 263.828 136.188C269.75 136.406 273.594 134.125 276.719 130.25C289.172 114.844 302.422 100.156 316.266 86.375C373.219 145.5 416 236.156 416 280.031C416 390.281 329.875 480 224 480Z" />
        </Icon>
    </>
}