
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-circle-arrow-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-circle-arrow-right?s=regular book-circle-arrow-right}
 * @preview ![book-circle-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDguNjAyIDQ2NEg4MEM2Mi4zNTkgNDY0IDQ4IDQ0OS42NTYgNDggNDMyUzYyLjM1OSA0MDAgODAgNDAwSDMyMy4wNDdDMzIxLjEzMyAzODkuNjA5IDMyMCAzNzguOTQzIDMyMCAzNjhDMzIwIDM2Mi42IDMyMC4zMjggMzU3LjI3NyAzMjAuODA1IDM1Mkg4MEM2OC42MjUgMzUyIDU3Ljc5NyAzNTQuMzc1IDQ4IDM1OC42ODhWODBDNDggNjIuMzQ0IDYyLjM1OSA0OCA4MCA0OEg0MDBWMjIwLjZDNDE0LjYzMyAyMTEuMDQ3IDQzMC43ODEgMjAzLjY3NCA0NDggMTk4Ljc5N1YyNEM0NDggMTAuNzUgNDM3LjI1IDAgNDI0IDBIODBDMzUuODkxIDAgMCAzNS44NzUgMCA4MFY0MzJDMCA0NzYuMTI1IDM1Ljg5MSA1MTIgODAgNTEySDM5NUMzNzYuNjQ1IDQ5OS4xIDM2MC44NzkgNDgyLjgxNCAzNDguNjAyIDQ2NFpNNDk2IDIyNEM0MTYuNDYxIDIyNCAzNTIgMjg4LjQ2MyAzNTIgMzY4UzQxNi40NjEgNTEyIDQ5NiA1MTJTNjQwIDQ0Ny41MzcgNjQwIDM2OFM1NzUuNTM5IDIyNCA0OTYgMjI0Wk01NzEuMzEyIDM3OS4zMTJMNTE1LjMxMiA0MzUuMzEyQzUxMi4xODggNDM4LjQzOCA1MDguMDk0IDQ0MCA1MDQgNDQwUzQ5NS44MTIgNDM4LjQzOCA0OTIuNjg4IDQzNS4zMTJDNDg2LjQzOCA0MjkuMDYyIDQ4Ni40MzggNDE4LjkzNyA0OTIuNjg4IDQxMi42ODhMNTIxLjM3NSAzODRINDMyQzQyMy4xNjQgMzg0IDQxNiAzNzYuODM2IDQxNiAzNjhTNDIzLjE2NCAzNTIgNDMyIDM1Mkg1MjEuMzc1TDQ5Mi42ODggMzIzLjMxMkM0ODYuNDM4IDMxNy4wNjIgNDg2LjQzOCAzMDYuOTM3IDQ5Mi42ODggMzAwLjY4OFM1MDkuMDYzIDI5NC40MzggNTE1LjMxMiAzMDAuNjg4TDU3MS4zMTIgMzU2LjY4OEM1NzcuNTYyIDM2Mi45MzggNTc3LjU2MiAzNzMuMDYyIDU3MS4zMTIgMzc5LjMxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BookCircleArrowRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M348.602 464H80C62.359 464 48 449.656 48 432S62.359 400 80 400H323.047C321.133 389.609 320 378.943 320 368C320 362.6 320.328 357.277 320.805 352H80C68.625 352 57.797 354.375 48 358.688V80C48 62.344 62.359 48 80 48H400V220.6C414.633 211.047 430.781 203.674 448 198.797V24C448 10.75 437.25 0 424 0H80C35.891 0 0 35.875 0 80V432C0 476.125 35.891 512 80 512H395C376.645 499.1 360.879 482.814 348.602 464ZM496 224C416.461 224 352 288.463 352 368S416.461 512 496 512S640 447.537 640 368S575.539 224 496 224ZM571.312 379.312L515.312 435.312C512.188 438.438 508.094 440 504 440S495.812 438.438 492.688 435.312C486.438 429.062 486.438 418.937 492.688 412.688L521.375 384H432C423.164 384 416 376.836 416 368S423.164 352 432 352H521.375L492.688 323.312C486.438 317.062 486.438 306.937 492.688 300.688S509.063 294.438 515.312 300.688L571.312 356.688C577.562 362.938 577.562 373.062 571.312 379.312Z" />
        </Icon>
    </>
}