
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `poo` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/poo?s=light poo}
 * @preview ![poo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMjk2QzMzMy4yNTggMjk2IDM0NCAyODUuMjU0IDM0NCAyNzJTMzMzLjI1OCAyNDggMzIwIDI0OEMzMDYuNzQ2IDI0OCAyOTYgMjU4Ljc0NiAyOTYgMjcyUzMwNi43NDYgMjk2IDMyMCAyOTZaTTE5MiAyOTZDMjA1LjI1OCAyOTYgMjE2IDI4NS4yNTQgMjE2IDI3MlMyMDUuMjU4IDI0OCAxOTIgMjQ4QzE3OC43NDYgMjQ4IDE2OCAyNTguNzQ2IDE2OCAyNzJTMTc4Ljc0NiAyOTYgMTkyIDI5NlpNNDcyLjczMiAzNDguMjg3QzQ3OS40NTkgMzM1LjYzNyA0ODMuMDY2IDMyMS40MjYgNDgzLjA2NiAzMDYuNjMzQzQ4My4wNjYgMjY3LjEyMSA0NTcuMzY3IDIzMy40OTggNDIxLjgwNyAyMjEuNjAyQzQyNC4wNDcgMjE0LjEwNSA0MjUuMjAxIDIwNi4yMzQgNDI1LjIwMSAxOTguMTM1QzQyNS4yMDEgMTYxLjEyMSA0MDAuNjc0IDEyOS43MjkgMzY3LjAxNiAxMTkuMzYzQzM2Ny4yMjcgMTE2LjY4IDM2Ny4zMzQgMTE0LjAwMiAzNjcuMzM0IDExMS4zMzRDMzY3LjMzNCA0OS45NDMgMzE3LjM5MSAwIDI1NiAwQzI1NS42NTQgMCAyNTQuMDY2IDAuMDIgMjUzLjcyMSAwLjAzMUMyNDIuNzY2IDAuMzg3IDIzMi43NTQgNi4zMjYgMjI3LjE5MSAxNS43N0MyMjEuNjI3IDI1LjIxNSAyMjEuMjgzIDM2Ljg1IDIyNi4yODEgNDYuNjA0QzIyOS43MjMgNTMuMzIyIDIzMS40NjcgNjAuNDk4IDIzMS40NjcgNjcuOTM0QzIzMS40NjcgOTQuMjg5IDIxMC4wMjUgMTE1LjczMiAxODMuNjY4IDExNS43MzJIMTY5LjIwMUMxMjMuNzY2IDExNS43MzIgODYuODAxIDE1Mi42OTcgODYuODAxIDE5OC4xMzVDODYuODAxIDIwNi4yMzQgODcuOTU1IDIxNC4xMDcgOTAuMTkzIDIyMS42MDJDNTQuNjMzIDIzMy40OTggMjguOTM0IDI2Ny4xMjEgMjguOTM0IDMwNi42MzNDMjguOTM0IDMyMS40MjIgMzIuNTM5IDMzNS42MjcgMzkuMjYyIDM0OC4yNzVDMTUuMzAzIDM2NC40MiAwIDM5MS42OTcgMCA0MjIuMzY3QzAgNDcxLjc5MSA0MC4yMTEgNTEyIDg5LjYzNSA1MTJINDIyLjM2N0M0NzEuNzkxIDUxMiA1MTIgNDcxLjc5MSA1MTIgNDIyLjM2N0M1MTIgMzkxLjcwNyA0OTYuNzExIDM2NC40MzkgNDcyLjczMiAzNDguMjg3Wk00MjIuMzY3IDQ4MEg4OS42MzVDNTcuODU3IDQ4MCAzMiA0NTQuMTQ1IDMyIDQyMi4zNjdDMzIgMzk0LjAwMiA1Mi40MTggMzcwLjE1OCA4MC41MzMgMzY1LjY2NkM4Ny4wMjcgMzY0LjYwNyA4OS4wNzIgMzU2LjMwNyA4My44NzMgMzUyLjM1MkM2OS4yOTEgMzQxLjI1NCA2MC45MzQgMzI0LjYgNjAuOTM0IDMwNi42MzNDNjAuOTM0IDI3NC44NTUgODYuNzkxIDI0OSAxMTguNTY2IDI0OUgxMzEuMzQyQzEzOC4yNjggMjQ5IDE0MS40MDggMjQwLjM5NSAxMzYuMjQyIDIzNS45MDRDMTI0Ljk5OCAyMjYuMTA0IDExOC44MDEgMjEyLjY4OCAxMTguODAxIDE5OC4xMzVDMTE4LjgwMSAxNzAuMzM4IDE0MS40MDQgMTQ3LjczMiAxNjkuMjAxIDE0Ny43MzJIMTgzLjY2OEMyMjcuNjY2IDE0Ny43MzIgMjYzLjQ2NyAxMTEuOTMyIDI2My40NjcgNjcuOTM0QzI2My40NjcgNTUuNDM2IDI2MC40OTIgNDMuMTk5IDI1NC43NjIgMzIuMDE0QzI5Ni43NyAzMC42NTIgMzM1LjMzNCA2NS42MjkgMzM1LjMzNCAxMTEuMzM0QzMzNS4zMzQgMTE5Ljk1MSAzMzMuNzAxIDEyOC44MzQgMzMwLjQ3OSAxMzcuNzE1QzMyOC42MDkgMTQyLjg1NSAzMzAuODQgMTQ3LjczMiAzNDIuODAxIDE0Ny43MzJDMzcwLjU5NiAxNDcuNzMyIDM5My4yMDEgMTcwLjMzOCAzOTMuMjAxIDE5OC4xMzVDMzkzLjIwMSAyMTIuNjg3IDM4Ny4wMDIgMjI2LjEwNCAzNzUuNzYgMjM1LjkwNEMzNzAuNjA1IDI0MC4zODMgMzczLjcxNyAyNDkgMzgwLjY1OCAyNDlIMzkzLjQzNEM0MjUuMjExIDI0OSA0NTEuMDY2IDI3NC44NTUgNDUxLjA2NiAzMDYuNjMzQzQ1MS4wNjYgMzI0LjYgNDQyLjcxMSAzNDEuMjU0IDQyOC4xMjcgMzUyLjM1MkM0MjIuOTM0IDM1Ni4zMDMgNDI0Ljk2MyAzNjQuNjA1IDQzMS40NjcgMzY1LjY2NkM0NTkuNTg0IDM3MC4xNTggNDgwIDM5NC4wMDIgNDgwIDQyMi4zNjdDNDgwIDQ1NC4xNDUgNDU0LjE0NSA0ODAgNDIyLjM2NyA0ODBaTTM1MiAzNTJIMTYwQzE1NC45NjkgMzUyIDE1MC4yMTkgMzU0LjM3NSAxNDcuMjE5IDM1OC4zNzVDMTQ0LjE4NyAzNjIuNDA2IDE0My4yMTkgMzY3LjYyNSAxNDQuNjI1IDM3Mi40MzhDMTU3LjE1NiA0MTUuNjg4IDIxMy43NSA0NDggMjU2IDQ0OFMzNTQuODQ0IDQxNS42ODggMzY3LjM3NSAzNzIuNDM4QzM2OC43ODEgMzY3LjYyNSAzNjcuODEzIDM2Mi40MDYgMzY0Ljc4MSAzNTguMzc1QzM2MS43ODEgMzU0LjM3NSAzNTcuMDMxIDM1MiAzNTIgMzUyWk0yNTYgNDE2QzIzMi4yNSA0MTYgMjA0LjA5NCA0MDEuODEyIDE4Ny43NSAzODRIMzI0LjI1QzMwNy45MDYgNDAxLjgxMiAyNzkuNzUgNDE2IDI1NiA0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Poo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M320 296C333.258 296 344 285.254 344 272S333.258 248 320 248C306.746 248 296 258.746 296 272S306.746 296 320 296ZM192 296C205.258 296 216 285.254 216 272S205.258 248 192 248C178.746 248 168 258.746 168 272S178.746 296 192 296ZM472.732 348.287C479.459 335.637 483.066 321.426 483.066 306.633C483.066 267.121 457.367 233.498 421.807 221.602C424.047 214.105 425.201 206.234 425.201 198.135C425.201 161.121 400.674 129.729 367.016 119.363C367.227 116.68 367.334 114.002 367.334 111.334C367.334 49.943 317.391 0 256 0C255.654 0 254.066 0.02 253.721 0.031C242.766 0.387 232.754 6.326 227.191 15.77C221.627 25.215 221.283 36.85 226.281 46.604C229.723 53.322 231.467 60.498 231.467 67.934C231.467 94.289 210.025 115.732 183.668 115.732H169.201C123.766 115.732 86.801 152.697 86.801 198.135C86.801 206.234 87.955 214.107 90.193 221.602C54.633 233.498 28.934 267.121 28.934 306.633C28.934 321.422 32.539 335.627 39.262 348.275C15.303 364.42 0 391.697 0 422.367C0 471.791 40.211 512 89.635 512H422.367C471.791 512 512 471.791 512 422.367C512 391.707 496.711 364.439 472.732 348.287ZM422.367 480H89.635C57.857 480 32 454.145 32 422.367C32 394.002 52.418 370.158 80.533 365.666C87.027 364.607 89.072 356.307 83.873 352.352C69.291 341.254 60.934 324.6 60.934 306.633C60.934 274.855 86.791 249 118.566 249H131.342C138.268 249 141.408 240.395 136.242 235.904C124.998 226.104 118.801 212.688 118.801 198.135C118.801 170.338 141.404 147.732 169.201 147.732H183.668C227.666 147.732 263.467 111.932 263.467 67.934C263.467 55.436 260.492 43.199 254.762 32.014C296.77 30.652 335.334 65.629 335.334 111.334C335.334 119.951 333.701 128.834 330.479 137.715C328.609 142.855 330.84 147.732 342.801 147.732C370.596 147.732 393.201 170.338 393.201 198.135C393.201 212.687 387.002 226.104 375.76 235.904C370.605 240.383 373.717 249 380.658 249H393.434C425.211 249 451.066 274.855 451.066 306.633C451.066 324.6 442.711 341.254 428.127 352.352C422.934 356.303 424.963 364.605 431.467 365.666C459.584 370.158 480 394.002 480 422.367C480 454.145 454.145 480 422.367 480ZM352 352H160C154.969 352 150.219 354.375 147.219 358.375C144.187 362.406 143.219 367.625 144.625 372.438C157.156 415.688 213.75 448 256 448S354.844 415.688 367.375 372.438C368.781 367.625 367.813 362.406 364.781 358.375C361.781 354.375 357.031 352 352 352ZM256 416C232.25 416 204.094 401.812 187.75 384H324.25C307.906 401.812 279.75 416 256 416Z" />
        </Icon>
    </>
}