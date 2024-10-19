
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-sort-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort-down?s=light circle-sort-down}
 * @preview ![circle-sort-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDcuMjUgMjg4SDE2NC44NzVDMTQ4LjUgMjg4IDE0MC4yNSAzMDcuODc1IDE1MS44NzUgMzE5LjM3NUwyNDMgNDEwLjYyNUMyNDYuNSA0MTQgMjUxLjEyNSA0MTYgMjU2IDQxNlMyNjUuNjI1IDQxNC4xMjUgMjY5IDQxMC42MjVMMzYwLjI1IDMxOS4zNzVDMzcxLjg3NSAzMDcuODc1IDM2My42MjUgMjg4IDM0Ny4yNSAyODhaTTI1NiAzNzguMzc1TDE5Ny43NSAzMjBIMzE0LjM3NUwyNTYgMzc4LjM3NVpNMjY3LjI1IDEwMC43NUMyNjEgOTQuNSAyNTAuODc1IDk0LjUgMjQ0LjYyNSAxMDAuNzVMMTQ4LjYyNSAxOTYuNzVDMTQyLjYyNSAyMDMgMTQyLjc1IDIxMi44NzUgMTQ4Ljg3NSAyMTlDMTU1LjEyNSAyMjUuMTI1IDE2NSAyMjUuMjUgMTcxLjI1IDIxOS4yNUwyNTYgMTM0LjYyNUwzNDAuNzUgMjE5LjI1QzM0NyAyMjUuMjUgMzU2Ljg3NSAyMjUuMTI1IDM2MyAyMTlTMzY5LjI1IDIwMyAzNjMuMjUgMTk2Ljc1TDI2Ny4yNSAxMDAuNzVaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTMgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDcgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ2NEMxNDEuMzA5IDQ2NCA0OCAzNzAuNjkxIDQ4IDI1NlMxNDEuMzA5IDQ4IDI1NiA0OFM0NjQgMTQxLjMwOSA0NjQgMjU2UzM3MC42OTEgNDY0IDI1NiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleSortDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M347.25 288H164.875C148.5 288 140.25 307.875 151.875 319.375L243 410.625C246.5 414 251.125 416 256 416S265.625 414.125 269 410.625L360.25 319.375C371.875 307.875 363.625 288 347.25 288ZM256 378.375L197.75 320H314.375L256 378.375ZM267.25 100.75C261 94.5 250.875 94.5 244.625 100.75L148.625 196.75C142.625 203 142.75 212.875 148.875 219C155.125 225.125 165 225.25 171.25 219.25L256 134.625L340.75 219.25C347 225.25 356.875 225.125 363 219S369.25 203 363.25 196.75L267.25 100.75ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}