
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-rock` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-rock?s=thin hand-rock}
 * @preview ![hand-rock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTQuMjgxIDkxLjQyMkMzODcuOTM4IDkxLjQyMiAzODEuNjI1IDkyLjYwOSAzNzUuNjI1IDk0Ljg5MUMzNjcuNjU2IDc0LjczNCAzNDguMDMxIDYwLjk1MyAzMjUuNzE5IDYwLjk1M0MzMTQuMTU2IDYwLjk1MyAzMDMuMTI1IDY0LjY1NiAyOTQuMDYzIDcxLjI5N0MyODguMjgxIDQ3Ljg3NSAyNjcuMDk0IDMwLjQ2OSAyNDEuOTA2IDMwLjQ2OUMyMzMgMzAuNDY5IDIyNC4zMTMgMzIuNzE5IDIxNi41NjMgMzYuOTUzQzIwOS40NjkgMTUuNDM4IDE4OS4xODggMCAxNjUuNzE5IDBDMTM2LjA5NCAwIDExMiAyNC4wOTQgMTEyIDUzLjcxOVYxNzUuNjI1QzExMiAxODAuMDQ3IDExNS41OTQgMTgzLjYyNSAxMjAgMTgzLjYyNVMxMjggMTgwLjA0NyAxMjggMTc1LjYyNVY1My43MTlDMTI4IDMyLjkyMiAxNDQuOTA2IDE2IDE2NS43MTkgMTZDMTg1LjM0NCAxNiAyMDEuNzgxIDMxLjQzOCAyMDMuMTU2IDUxLjE0MUMyMDMuNDE0IDU1LjM0NyAyMDYuOTcxIDU4LjU5OCAyMTEuMTUyIDU4LjU5OEMyMTguMjgzIDU4LjU5OCAyMjIuMzI1IDQ2LjQ2OSAyNDEuOTA2IDQ2LjQ2OUMyNjIuNzE5IDQ2LjQ2OSAyNzkuNjI1IDYzLjM5MSAyNzkuNjI1IDg0LjE4N1Y4OS40NTNDMjc5LjYyNSA5MS45MiAyODEuNTEyIDk3LjQzOSAyODcuNjIgOTcuNDM5QzI5MC4yNTQgOTcuNDM5IDI5Mi43NTYgOTYuMTYzIDI5NC4yODEgOTMuODc1QzMwMS4zMTIgODMuMjgxIDMxMy4wNjIgNzYuOTUzIDMyNS43MTkgNzYuOTUzQzM0My44NDQgNzYuOTUzIDM1OS40MDYgODkuODkxIDM2Mi43MTkgMTA3LjcwM0MzNjMuMjY1IDExMC41MzYgMzY1Ljg0OCAxMTQuMjI4IDM3MC42MDQgMTE0LjIyOEMzNzUuNjk2IDExNC4yMjggMzgwLjI2MiAxMDcuNDIyIDM5NC4yODEgMTA3LjQyMkM0MTUuMDk0IDEwNy40MjIgNDMyIDEyNC4zNDQgNDMyIDE0NS4xNDFWMjU5Ljc4MUM0MzIgMzI4LjM1NSAzNjAgMzY0LjM2NSAzNjAgMzczLjcxOVY1MDMuNjA5QzM2MCA1MDguMDMxIDM2My41OTQgNTExLjYwOSAzNjggNTExLjYwOVMzNzYgNTA4LjAzMSAzNzYgNTAzLjYwOVYzNzcuOTIyQzM5Ni44MTIgMzYzLjIxOSA0NDggMzIwLjc5NyA0NDggMjU5Ljc4MVYxNDUuMTQxQzQ0OCAxMTUuNTE2IDQyMy45MDYgOTEuNDIyIDM5NC4yODEgOTEuNDIyWk04NS44NzUgMzMzLjU3OEM2Mi4xNTYgMzE2LjI4MSA0OCAyODguNDUzIDQ4IDI1OS4xNTZWMTkyLjYwOUM0OCAxODAuOTUzIDUzLjIxOSAxNzAuMDk0IDYxLjc4MSAxNjMuMjE5TDkyLjQ2OSAxNDIuNjQxQzk0Ljc2MyAxNDEuMTAxIDk1Ljk5OSAxMzguNTcxIDk1Ljk5OSAxMzUuOTkyQzk1Ljk5OSAxMzEuNDggOTIuMzE3IDEyNy45ODcgODcuOTggMTI3Ljk4N0M4Ni40NDYgMTI3Ljk4NyA4NC44OTcgMTI4LjQzMSA4My41MzEgMTI5LjM1OUw1Mi4zMTIgMTUwLjMyOEMzOS40MDYgMTYwLjY1NiAzMiAxNzYuMDYyIDMyIDE5Mi42MDlWMjU5LjE1NkMzMiAyOTMuNTQ3IDQ4LjYyNSAzMjYuMjAzIDc2LjY1NiAzNDYuNjcyTDEyOCAzODEuNDY5VjUwNEMxMjggNTA4LjQyMiAxMzEuNTk0IDUxMiAxMzYgNTEyUzE0NCA1MDguNDIyIDE0NCA1MDRWMzc3LjIzNEMxNDQgMzc0LjU3OCAxNDIuNjg4IDM3Mi4xMDkgMTQwLjUgMzcwLjYwOUw4NS44NzUgMzMzLjU3OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandRock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M394.281 91.422C387.938 91.422 381.625 92.609 375.625 94.891C367.656 74.734 348.031 60.953 325.719 60.953C314.156 60.953 303.125 64.656 294.063 71.297C288.281 47.875 267.094 30.469 241.906 30.469C233 30.469 224.313 32.719 216.563 36.953C209.469 15.438 189.188 0 165.719 0C136.094 0 112 24.094 112 53.719V175.625C112 180.047 115.594 183.625 120 183.625S128 180.047 128 175.625V53.719C128 32.922 144.906 16 165.719 16C185.344 16 201.781 31.438 203.156 51.141C203.414 55.347 206.971 58.598 211.152 58.598C218.283 58.598 222.325 46.469 241.906 46.469C262.719 46.469 279.625 63.391 279.625 84.187V89.453C279.625 91.92 281.512 97.439 287.62 97.439C290.254 97.439 292.756 96.163 294.281 93.875C301.312 83.281 313.062 76.953 325.719 76.953C343.844 76.953 359.406 89.891 362.719 107.703C363.265 110.536 365.848 114.228 370.604 114.228C375.696 114.228 380.262 107.422 394.281 107.422C415.094 107.422 432 124.344 432 145.141V259.781C432 328.355 360 364.365 360 373.719V503.609C360 508.031 363.594 511.609 368 511.609S376 508.031 376 503.609V377.922C396.812 363.219 448 320.797 448 259.781V145.141C448 115.516 423.906 91.422 394.281 91.422ZM85.875 333.578C62.156 316.281 48 288.453 48 259.156V192.609C48 180.953 53.219 170.094 61.781 163.219L92.469 142.641C94.763 141.101 95.999 138.571 95.999 135.992C95.999 131.48 92.317 127.987 87.98 127.987C86.446 127.987 84.897 128.431 83.531 129.359L52.312 150.328C39.406 160.656 32 176.062 32 192.609V259.156C32 293.547 48.625 326.203 76.656 346.672L128 381.469V504C128 508.422 131.594 512 136 512S144 508.422 144 504V377.234C144 374.578 142.688 372.109 140.5 370.609L85.875 333.578Z" />
        </Icon>
    </>
}