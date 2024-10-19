
import { Icon } from "../../index";

/**
 * A component that renders the `crown` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/crown?s=regular crown}
 * @preview ![crown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzYgOTZDNTEzLjkwOCA5NiA0OTYgMTEzLjkwOCA0OTYgMTM2QzQ5NiAxNDQuOTk4IDQ5OS41MjEgMTUyLjg4OSA1MDQuNTM3IDE1OS41N0w0MTQuOTEgMjMxLjI3MUM0MDguOTU1IDIzNi4wMzUgNDAxLjkyMiAyMzguMjkxIDM5NC45NzUgMjM4LjI5MUMzODMuMzY3IDIzOC4yOTEgMzcxLjk5OCAyMzEuOTk0IDM2Ni4yOTcgMjIwLjU5NkwzMDguNjk5IDEwNS4zOThDMzIwLjAzNyA5OC4zNCAzMjggODYuMzQyIDMyOCA3MkMzMjggNDkuOTA4IDMxMC4wOTIgMzIgMjg4IDMyUzI0OCA0OS45MDggMjQ4IDcyQzI0OCA4Ni4zNDIgMjU1Ljk2MyA5OC4zNCAyNjcuMzAxIDEwNS4zOThMMjA5LjcwMyAyMjAuNTk2QzIwNC4wMDIgMjMxLjk5NiAxOTIuNjM3IDIzOC4yOTEgMTgxLjAyNSAyMzguMjkxQzE3NC4wOCAyMzguMjkxIDE2Ny4wNDUgMjM2LjAzNSAxNjEuMDkgMjMxLjI3MUw3MS40NjMgMTU5LjU3Qzc2LjQ3OSAxNTIuODg5IDgwIDE0NC45OTggODAgMTM2QzgwIDExMy45MDggNjIuMDkyIDk2IDQwIDk2UzAgMTEzLjkwOCAwIDEzNlMxNy45MDggMTc2IDQwIDE3NkM0MC4yNDggMTc2IDQwLjQ1MyAxNzUuODYzIDQwLjcwMSAxNzUuODU5TDkxLjIyMyA0NTMuNzI1QzkzLjk4OCA0NjguOTM5IDEwNy4yNDIgNDgwIDEyMi43MDcgNDgwSDQ1My4yOTNDNDY4Ljc1OCA0ODAgNDgyLjAxMiA0NjguOTM5IDQ4NC43NzcgNDUzLjcyNUw1MzUuMjk5IDE3NS44NTlDNTM1LjU0NyAxNzUuODYzIDUzNS43NTIgMTc2IDUzNiAxNzZDNTU4LjA5MiAxNzYgNTc2IDE1OC4wOTIgNTc2IDEzNlM1NTguMDkyIDk2IDUzNiA5NlpNNDM5Ljk0MSA0MzJIMTM2LjA2MUwxMDIuMTcgMjQ1LjYwNUwxMzEuMTA1IDI2OC43NTRDMTQ1LjI0MiAyODAuMDYzIDE2Mi45NzEgMjg2LjI5MSAxODEuMDI1IDI4Ni4yOTFDMjExLjU1NSAyODYuMjkxIDIzOC45OTIgMjY5LjM0NCAyNTIuNjM3IDI0Mi4wNjNMMjg4IDE3MS4zMzJMMzIzLjM2NSAyNDIuMDY0QzMzNy4wMDggMjY5LjM0NCAzNjQuNDQ1IDI4Ni4yOTEgMzk0Ljk3NSAyODYuMjkxQzQxMy4wMzEgMjg2LjI5MSA0MzAuNzYgMjgwLjA2MyA0NDQuODk2IDI2OC43NTRMNDczLjgzMiAyNDUuNjA1TDQzOS45NDEgNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Crown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M536 96C513.908 96 496 113.908 496 136C496 144.998 499.521 152.889 504.537 159.57L414.91 231.271C408.955 236.035 401.922 238.291 394.975 238.291C383.367 238.291 371.998 231.994 366.297 220.596L308.699 105.398C320.037 98.34 328 86.342 328 72C328 49.908 310.092 32 288 32S248 49.908 248 72C248 86.342 255.963 98.34 267.301 105.398L209.703 220.596C204.002 231.996 192.637 238.291 181.025 238.291C174.08 238.291 167.045 236.035 161.09 231.271L71.463 159.57C76.479 152.889 80 144.998 80 136C80 113.908 62.092 96 40 96S0 113.908 0 136S17.908 176 40 176C40.248 176 40.453 175.863 40.701 175.859L91.223 453.725C93.988 468.939 107.242 480 122.707 480H453.293C468.758 480 482.012 468.939 484.777 453.725L535.299 175.859C535.547 175.863 535.752 176 536 176C558.092 176 576 158.092 576 136S558.092 96 536 96ZM439.941 432H136.061L102.17 245.605L131.105 268.754C145.242 280.063 162.971 286.291 181.025 286.291C211.555 286.291 238.992 269.344 252.637 242.063L288 171.332L323.365 242.064C337.008 269.344 364.445 286.291 394.975 286.291C413.031 286.291 430.76 280.063 444.896 268.754L473.832 245.605L439.941 432Z" />
    </Icon>
);

export default Crown;