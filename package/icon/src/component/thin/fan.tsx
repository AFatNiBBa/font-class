
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `fan` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fan?s=thin fan}
 * @preview ![fan](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDkuNjExIDEyMy45OUMzMjYuMzkyIDEyMy45OSAzMDQuNDA3IDEyNy4wMjIgMjg0LjA3OCAxMzMuMDIyTDI5NC44MjkgMjYuMDE5QzI5NS41OTQgMTguOTU2IDI5My4xMSAxMS45ODcgMjg4LjAxNiA2Ljk1NkMyODIuNzE5IDEuNzM3IDI3NS40ODUgLTAuNyAyNjcuOTUzIDAuMTc1QzE4NS44OSAxMC40NTYgMTIzLjk5OCA4MC4yMDggMTIzLjk5OCAxNjIuMzk3QzEyMy45OTggMTg1LjU1NCAxMjcuMDMgMjA3LjUyNCAxMzMuMDMgMjI3Ljg5OUwyNi4wNDQgMjE3LjE0OUMxOC43NjIgMjE2LjUyNCAxMS45ODEgMjE4Ljg5OSA2Ljk2NSAyMjMuOTkzQzEuNzQ3IDIyOS4yNzQgLTAuNzIyIDIzNi41NTYgMC4xODQgMjQ0LjAyNEMxMC40NjUgMzI2LjA4OSA4MC4yMDEgMzg3Ljk5NyAxNjIuMzg5IDM4Ny45OTdDMTg1LjU0NiAzODcuOTk3IDIwNy41MzEgMzg0Ljk2NiAyMjcuOTIyIDM3OC45NjVMMjE3LjE3MSA0ODUuOTM3QzIxNi40MDYgNDkzIDIxOC44OSA0OTkuOTM3IDIyNCA1MDVDMjI4LjU5MyA1MDkuNTMxIDIzNC42NzIgNTEyIDI0MS4wNDcgNTEyQzI0Mi4wNDcgNTEyIDI0My4wNDcgNTExLjkzOCAyNDQuMDQ3IDUxMS44MTJDMzI2LjExIDUwMS41MzEgMzg4LjAwMiA0MzEuNzc5IDM4OC4wMDIgMzQ5LjU5QzM4OC4wMDIgMzI2LjQwMiAzODQuOTcgMzA0LjQzMiAzNzguOTcgMjg0LjA1N0w0ODUuOTQxIDI5NC44MzhDNDkzLjA1IDI5NS4zMzggNTAwLjAwMyAyOTMuMDg4IDUwNS4wMzUgMjg3Ljk5NEM1MTAuMjUzIDI4Mi43MTMgNTEyLjcyMiAyNzUuNDMyIDUxMS44MTYgMjY3Ljk2M0M1MDEuNTM1IDE4NS44OTggNDMxLjc5OSAxMjMuOTkgMzQ5LjYxMSAxMjMuOTlaTTQ5My42NDQgMjc2Ljc3NUM0OTIuNzIyIDI3Ny43MTMgNDkwLjczOCAyNzkuMjEzIDQ4Ny41OTcgMjc4LjlMMzU1LjY1OCAyNjUuNjE5TDM2MC4wMTcgMjc3LjYxOUMzNjcuOTcgMjk5LjQ2MyAzNzIuMDAyIDMyMy42ODMgMzcyLjAwMiAzNDkuNTlDMzcyLjAwMiA0MjMuNzE3IDMxNi4xNDEgNDg2LjY1NiAyNDIuMDc4IDQ5NS45MzdDMjM5Ljc4MSA0OTYuMjE4IDIzNy4wNjIgNDk1LjQwNiAyMzUuMjUgNDkzLjU5M0MyMzQuMjk3IDQ5Mi42NTYgMjMyLjc1IDQ5MC42NTYgMjMzLjA3OCA0ODcuNjI0TDI0Ni4zNDQgMzU1LjY1MkwyMzQuMzc1IDM1OS45OTZDMjEyLjQ4NCAzNjcuOTY1IDE4OC4yNjUgMzcxLjk5NiAxNjIuMzg5IDM3MS45OTZDODguMjYzIDM3MS45OTYgMjUuMzQxIDMxNi4xMiAxNi4wNTkgMjQyLjA1NkMxNS43NDcgMjM5LjQ5MyAxNi41OTEgMjM3LjAyNCAxOC4zNTYgMjM1LjIxMkMxOS4yOTQgMjM0LjI3NCAyMS4xMzcgMjMyLjgwNSAyNC4zODggMjMzLjA4N0wxNTYuMzQyIDI0Ni4zMDZMMTUxLjk4MyAyMzQuMzM3QzE0NC4wMyAyMTIuNDkyIDEzOS45OTggMTg4LjI3MyAxMzkuOTk4IDE2Mi4zOTdDMTM5Ljk5OCA4OC4yNzEgMTk1Ljg1OSAyNS4zMzEgMjY5LjkyMiAxNi4wNUMyNzIuNDA2IDE1Ljc2OSAyNzQuOTY5IDE2LjU4MSAyNzYuNzY2IDE4LjM2M0MyNzcuNzE5IDE5LjMgMjc5LjI1IDIxLjMgMjc4LjkyMiAyNC4zNjNMMjY1LjY1NiAxNTYuMzM1TDI3Ny42MjUgMTUxLjk5MUMyOTkuNDM4IDE0NC4wMjIgMzIzLjY1NyAxMzkuOTkxIDM0OS42MTEgMTM5Ljk5MUM0MjMuNzM3IDEzOS45OTEgNDg2LjY1OSAxOTUuODY3IDQ5NS45NDEgMjY5LjkzMUM0OTYuMjUzIDI3Mi40NjMgNDk1LjQwOSAyNzQuOTYzIDQ5My42NDQgMjc2Ljc3NVpNMjU2IDIxNS45OTNDMjMzLjkzNyAyMTUuOTkzIDIxNS45OTkgMjMzLjkzIDIxNS45OTkgMjU1Ljk5NFMyMzMuOTM3IDI5NS45OTUgMjU2IDI5NS45OTVTMjk2LjAwMSAyNzguMDU3IDI5Ni4wMDEgMjU1Ljk5NFMyNzguMDYzIDIxNS45OTMgMjU2IDIxNS45OTNaTTI1NiAyNzkuOTk0QzI0Mi43NjUgMjc5Ljk5NCAyMzIgMjY5LjIxMyAyMzIgMjU1Ljk5NEMyMzIgMjQyLjc3NCAyNDIuNzY1IDIzMS45OTMgMjU2IDIzMS45OTNTMjgwIDI0Mi43NzQgMjgwIDI1NS45OTRDMjgwIDI2OS4yMTMgMjY5LjIzNSAyNzkuOTk0IDI1NiAyNzkuOTk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Fan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M349.611 123.99C326.392 123.99 304.407 127.022 284.078 133.022L294.829 26.019C295.594 18.956 293.11 11.987 288.016 6.956C282.719 1.737 275.485 -0.7 267.953 0.175C185.89 10.456 123.998 80.208 123.998 162.397C123.998 185.554 127.03 207.524 133.03 227.899L26.044 217.149C18.762 216.524 11.981 218.899 6.965 223.993C1.747 229.274 -0.722 236.556 0.184 244.024C10.465 326.089 80.201 387.997 162.389 387.997C185.546 387.997 207.531 384.966 227.922 378.965L217.171 485.937C216.406 493 218.89 499.937 224 505C228.593 509.531 234.672 512 241.047 512C242.047 512 243.047 511.938 244.047 511.812C326.11 501.531 388.002 431.779 388.002 349.59C388.002 326.402 384.97 304.432 378.97 284.057L485.941 294.838C493.05 295.338 500.003 293.088 505.035 287.994C510.253 282.713 512.722 275.432 511.816 267.963C501.535 185.898 431.799 123.99 349.611 123.99ZM493.644 276.775C492.722 277.713 490.738 279.213 487.597 278.9L355.658 265.619L360.017 277.619C367.97 299.463 372.002 323.683 372.002 349.59C372.002 423.717 316.141 486.656 242.078 495.937C239.781 496.218 237.062 495.406 235.25 493.593C234.297 492.656 232.75 490.656 233.078 487.624L246.344 355.652L234.375 359.996C212.484 367.965 188.265 371.996 162.389 371.996C88.263 371.996 25.341 316.12 16.059 242.056C15.747 239.493 16.591 237.024 18.356 235.212C19.294 234.274 21.137 232.805 24.388 233.087L156.342 246.306L151.983 234.337C144.03 212.492 139.998 188.273 139.998 162.397C139.998 88.271 195.859 25.331 269.922 16.05C272.406 15.769 274.969 16.581 276.766 18.363C277.719 19.3 279.25 21.3 278.922 24.363L265.656 156.335L277.625 151.991C299.438 144.022 323.657 139.991 349.611 139.991C423.737 139.991 486.659 195.867 495.941 269.931C496.253 272.463 495.409 274.963 493.644 276.775ZM256 215.993C233.937 215.993 215.999 233.93 215.999 255.994S233.937 295.995 256 295.995S296.001 278.057 296.001 255.994S278.063 215.993 256 215.993ZM256 279.994C242.765 279.994 232 269.213 232 255.994C232 242.774 242.765 231.993 256 231.993S280 242.774 280 255.994C280 269.213 269.235 279.994 256 279.994Z" />
        </Icon>
    </>
}