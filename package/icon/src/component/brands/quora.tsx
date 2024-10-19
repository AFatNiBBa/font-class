
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `quora` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/quora?s=brands quora}
 * @preview ![quora](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDAuNSAzODYuN2gtMjkuM2MtMS41IDEzLjUtMTAuNSAzMC44LTMzIDMwLjgtMjAuNSAwLTM1LjMtMTQuMi00OS41LTM1LjggNDQuMi0zNC4yIDc0LjctODcuNSA3NC43LTE1M0M0MDMuNSAxMTEuMiAzMDYuOCAzMiAyMDUgMzIgMTA1LjMgMzIgNy4zIDExMS43IDcuMyAyMjguN2MwIDEzNC4xIDEzMS4zIDIyMS42IDI0OSAxODlDMjc2IDQ1MS4zIDMwMiA0ODAgMzUxLjUgNDgwYzgxLjggMCA5MC44LTc1LjMgODktOTMuM3pNMjk3IDMyOS4yQzI3Ny41IDMwMCAyNTMuMyAyNzcgMjA1LjUgMjc3Yy0zMC41IDAtNTQuMyAxMC02OSAyMi44bDEyLjIgMjQuM2M2LjItMyAxMy00IDE5LjgtNCAzNS41IDAgNTMuNyAzMC44IDY5LjIgNjEuMy0xMCAzLTIwLjcgNC4yLTMyLjcgNC4yLTc1IDAtMTA3LjUtNTMtMTA3LjUtMTU2LjdDOTcuNSAxMjQuNSAxMzAgNzEgMjA1IDcxYzc2LjIgMCAxMDguNyA1My41IDEwOC43IDE1Ny43LjEgNDEuOC01LjQgNzUuNi0xNi43IDEwMC41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Quora(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7.1 41.8-5.4 75.6-16.7 100.5z" />
        </Icon>
    </>
}