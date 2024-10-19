
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=thin square-pen}
 * @preview ![square-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjkuMzY1IDEzOC41NDVDMzIyLjM0IDEzMS41MTggMzEzLjEyMyAxMjggMzAzLjkwOCAxMjhDMjk0LjY5NyAxMjggMjg1LjQ4OCAxMzEuNTEyIDI3OC40NTkgMTM4LjU0M0wxMTcuNjc2IDI5OS4zNDJDMTEzLjM3NyAzMDMuNjQxIDExMC40MSAzMDkuMDI5IDEwOS4wOCAzMTQuOTYzQzEwNC44NjkgMzMzLjc0MiA5Ni4xNjYgMzc0LjU4NiA5Ni4xNjYgMzc0LjU4NkM5NS4wODIgMzgwLjAxNCA5OS40MDYgMzgzLjk5NiAxMDMuOTQzIDM4My45OTZDMTA0LjQ0MSAzODMuOTk2IDEwNC45NDEgMzgzLjk0OSAxMDUuNDM3IDM4My44NUMxMDUuNDM3IDM4My44NSAxNDYuMjc3IDM3NS4xNDMgMTY1LjA1MyAzNzAuOTNDMTcwLjk4NiAzNjkuNiAxNzYuMzczIDM2Ni42MzMgMTgwLjY3MiAzNjIuMzM0TDM0MS40NTUgMjAxLjU1M0MzNTUuNTE0IDE4Ny40OTYgMzU1LjUxNiAxNjQuNzAzIDM0MS40NTkgMTUwLjY0M0wzMjkuMzY1IDEzOC41NDVaTTE2OS4zNTkgMzUxLjAyQzE2Ny4yMTEgMzUzLjE2OCAxNjQuNTEyIDM1NC42NTQgMTYxLjU1MSAzNTUuMzE2QzE0OS4zODcgMzU4LjA0NyAxMjcuOTM5IDM2Mi42NjYgMTE0LjQ1OSAzNjUuNTU5QzExNy4zNTkgMzUyLjAxNiAxMjEuOTY5IDMzMC42MDkgMTI0LjY5MyAzMTguNDYxQzEyNS4zNTcgMzE1LjUwMiAxMjYuODQyIDMxMi44MDMgMTI4Ljk5IDMxMC42NTRMMjU0LjE2IDE4NS40NzNMMjk0LjUzMyAyMjUuODQ2TDE2OS4zNTkgMzUxLjAyWk0zMzAuMTQxIDE5MC4yMzhMMzA1Ljg0NiAyMTQuNTMzTDI2NS40NzMgMTc0LjE2TDI4OS43NzUgMTQ5Ljg1NUMyOTMuNTQ5IDE0Ni4wNzggMjk4LjU2OCAxNDQgMzAzLjkwOCAxNDRDMzA5LjI1MiAxNDQgMzE0LjI3MyAxNDYuMDggMzE4LjA1MSAxNDkuODU3TDMzMC4xNDUgMTYxLjk1NUMzMzcuOTQxIDE2OS43NTQgMzM3LjkzOSAxODIuNDQxIDMzMC4xNDEgMTkwLjIzOFpNMzg0IDMySDY0QzI4LjY1MiAzMiAwIDYwLjY1NCAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjUyIDQ4MCA2NCA0ODBIMzg0QzQxOS4zNDQgNDgwIDQ0OCA0NTEuMzQ2IDQ0OCA0MTZWOTZDNDQ4IDYwLjY1NCA0MTkuMzQ0IDMyIDM4NCAzMlpNNDMyIDQxNkM0MzIgNDQyLjQ2NyA0MTAuNDY5IDQ2NCAzODQgNDY0SDY0QzM3LjUzMSA0NjQgMTYgNDQyLjQ2NyAxNiA0MTZWOTZDMTYgNjkuNTMzIDM3LjUzMSA0OCA2NCA0OEgzODRDNDEwLjQ2OSA0OCA0MzIgNjkuNTMzIDQzMiA5NlY0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquarePen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M329.365 138.545C322.34 131.518 313.123 128 303.908 128C294.697 128 285.488 131.512 278.459 138.543L117.676 299.342C113.377 303.641 110.41 309.029 109.08 314.963C104.869 333.742 96.166 374.586 96.166 374.586C95.082 380.014 99.406 383.996 103.943 383.996C104.441 383.996 104.941 383.949 105.437 383.85C105.437 383.85 146.277 375.143 165.053 370.93C170.986 369.6 176.373 366.633 180.672 362.334L341.455 201.553C355.514 187.496 355.516 164.703 341.459 150.643L329.365 138.545ZM169.359 351.02C167.211 353.168 164.512 354.654 161.551 355.316C149.387 358.047 127.939 362.666 114.459 365.559C117.359 352.016 121.969 330.609 124.693 318.461C125.357 315.502 126.842 312.803 128.99 310.654L254.16 185.473L294.533 225.846L169.359 351.02ZM330.141 190.238L305.846 214.533L265.473 174.16L289.775 149.855C293.549 146.078 298.568 144 303.908 144C309.252 144 314.273 146.08 318.051 149.857L330.145 161.955C337.941 169.754 337.939 182.441 330.141 190.238ZM384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H384C419.344 480 448 451.346 448 416V96C448 60.654 419.344 32 384 32ZM432 416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416Z" />
        </Icon>
    </>
}