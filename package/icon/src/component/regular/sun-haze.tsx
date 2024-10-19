
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sun-haze` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sun-haze?s=regular sun-haze}
 * @preview ![sun-haze](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04OCAzMTkuMjMxSDQwOEM0MjEuMiAzMTkuMjMxIDQzMiAzMDguNDMxIDQzMiAyOTUuMjMyVjI5NS4yMzJDNDMyIDI4Mi4wMzMgNDIxLjIgMjcxLjIzMyA0MDggMjcxLjIzM0g4OEM3NC44IDI3MS4yMzMgNjQgMjgyLjAzMyA2NCAyOTUuMjMyVjI5NS4yMzJDNjQgMzA4LjQzMSA3NC44IDMxOS4yMzEgODggMzE5LjIzMVpNNjE2IDI3MS4yMzNINTA0QzQ5MC44IDI3MS4yMzMgNDgwIDI4Mi4wMzMgNDgwIDI5NS4yMzJWMjk1LjIzMkM0ODAgMzA4LjQzMSA0OTAuOCAzMTkuMjMxIDUwNCAzMTkuMjMxSDYxNkM2MjkuMiAzMTkuMjMxIDY0MCAzMDguNDMxIDY0MCAyOTUuMjMyVjI5NS4yMzJDNjQwIDI4Mi4wMzMgNjI5LjIgMjcxLjIzMyA2MTYgMjcxLjIzM1pNMjAwIDQ0Ny4yMjNIODhDNzQuOCA0NDcuMjIzIDY0IDQ1OC4wMjIgNjQgNDcxLjIyMVY0NzEuMjIxQzY0IDQ4NC40MiA3NC44IDQ5NS4yMiA4OCA0OTUuMjJIMjAwQzIxMy4yIDQ5NS4yMiAyMjQgNDg0LjQyIDIyNCA0NzEuMjIxVjQ3MS4yMjFDMjI0IDQ1OC4wMjIgMjEzLjIgNDQ3LjIyMyAyMDAgNDQ3LjIyM1pNNjE2IDQ0Ny4yMjNIMjk2QzI4Mi44IDQ0Ny4yMjMgMjcyIDQ1OC4wMjIgMjcyIDQ3MS4yMjFWNDcxLjIyMUMyNzIgNDg0LjQyIDI4Mi44IDQ5NS4yMiAyOTYgNDk1LjIySDYxNkM2MjkuMiA0OTUuMjIgNjQwIDQ4NC40MiA2NDAgNDcxLjIyMVY0NzEuMjIxQzY0MCA0NTguMDIyIDYyOS4yIDQ0Ny4yMjMgNjE2IDQ0Ny4yMjNaTTU3NiAzODMuMjI3VjM4My4yMjdDNTc2IDM3MC4wMjcgNTY1LjIgMzU5LjIyOCA1NTIgMzU5LjIyOEgyNEMxMC44IDM1OS4yMjggMCAzNzAuMDI3IDAgMzgzLjIyN1YzODMuMjI3QzAgMzk2LjQyNiAxMC44IDQwNy4yMjUgMjQgNDA3LjIyNUg1NTJDNTY1LjIgNDA3LjIyNSA1NzYgMzk2LjQyNiA1NzYgMzgzLjIyN1pNMTk0Ljc1IDE4Ni43MzlMMTc3LjEyNSA5NS40OTRMMjY4LjEyNSAxMTMuMTE4TDMyMCAzNi4yNDhMMzcxLjg3NSAxMTMuMTE4TDQ2Mi44NzUgOTUuNDk0TDQ0NS4yNSAxODYuNjE0TDQ5OS4yNSAyMjMuMjM2SDU3Mi43NUM1NjkuNzUgMjE1Ljk4NyA1NjQuODc1IDIwOS42MTIgNTU4LjI1IDIwNS4xMTJMNDk4LjUgMTY0LjYxNUw1MTIuMjUgOTMuNjE5QzUxNC43NSA4MC40OTUgNTEwLjYyNSA2Ni44NzEgNTAxLjEyNSA1Ny4yNDZDNDkxLjUgNDcuNzQ3IDQ3Ny44NzUgNDMuNDk3IDQ2NC44NzUgNDYuMTIyTDM5NCA1OS44NzFMMzUzLjYyNSAwQzMzOC41IC0yMi4zNzQgMzAxLjc1IC0yMi4zNzQgMjg2LjYyNSAwTDI0Ni4yNSA1OS44NzFMMTc1LjM3NSA0Ni4xMjJDMTYyLjEyNSA0My40OTcgMTQ4LjYyNSA0Ny43NDcgMTM5LjEyNSA1Ny4yNDZDMTI5LjYyNSA2Ni44NzEgMTI1LjM3NSA4MC4zNyAxMjggOTMuNDk0TDE0MS43NSAxNjQuNDlMODEuODc1IDIwNC45ODhDNzUuMjUgMjA5LjQ4NyA3MC41IDIxNS45ODcgNjcuNSAyMjMuMTExSDE0MC44NzVMMTk0Ljc1IDE4Ni43MzlaTTIxNy42MjUgMjIzLjIzNkgyNjYuNjI1QzI3My41IDIwMC4yMzggMjk0Ljc1IDE4My4yMzkgMzIwIDE4My4yMzlTMzY2LjUgMjAwLjIzOCAzNzMuMzc1IDIyMy4yMzZINDIyLjM3NUM0MTQuNjI1IDE3My40ODkgMzcxLjg3NSAxMzUuMjQyIDMyMCAxMzUuMjQyUzIyNS4zNzUgMTczLjQ4OSAyMTcuNjI1IDIyMy4yMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SunHaze(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M88 319.231H408C421.2 319.231 432 308.431 432 295.232V295.232C432 282.033 421.2 271.233 408 271.233H88C74.8 271.233 64 282.033 64 295.232V295.232C64 308.431 74.8 319.231 88 319.231ZM616 271.233H504C490.8 271.233 480 282.033 480 295.232V295.232C480 308.431 490.8 319.231 504 319.231H616C629.2 319.231 640 308.431 640 295.232V295.232C640 282.033 629.2 271.233 616 271.233ZM200 447.223H88C74.8 447.223 64 458.022 64 471.221V471.221C64 484.42 74.8 495.22 88 495.22H200C213.2 495.22 224 484.42 224 471.221V471.221C224 458.022 213.2 447.223 200 447.223ZM616 447.223H296C282.8 447.223 272 458.022 272 471.221V471.221C272 484.42 282.8 495.22 296 495.22H616C629.2 495.22 640 484.42 640 471.221V471.221C640 458.022 629.2 447.223 616 447.223ZM576 383.227V383.227C576 370.027 565.2 359.228 552 359.228H24C10.8 359.228 0 370.027 0 383.227V383.227C0 396.426 10.8 407.225 24 407.225H552C565.2 407.225 576 396.426 576 383.227ZM194.75 186.739L177.125 95.494L268.125 113.118L320 36.248L371.875 113.118L462.875 95.494L445.25 186.614L499.25 223.236H572.75C569.75 215.987 564.875 209.612 558.25 205.112L498.5 164.615L512.25 93.619C514.75 80.495 510.625 66.871 501.125 57.246C491.5 47.747 477.875 43.497 464.875 46.122L394 59.871L353.625 0C338.5 -22.374 301.75 -22.374 286.625 0L246.25 59.871L175.375 46.122C162.125 43.497 148.625 47.747 139.125 57.246C129.625 66.871 125.375 80.37 128 93.494L141.75 164.49L81.875 204.988C75.25 209.487 70.5 215.987 67.5 223.111H140.875L194.75 186.739ZM217.625 223.236H266.625C273.5 200.238 294.75 183.239 320 183.239S366.5 200.238 373.375 223.236H422.375C414.625 173.489 371.875 135.242 320 135.242S225.375 173.489 217.625 223.236Z" />
        </Icon>
    </>
}