
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `share-nodes` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share-nodes?s=light share-nodes}
 * @preview ![share-nodes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMzIwQzM0Mi40NzcgMzIwIDMyMC4wMDggMzMyLjE3NiAzMDUuMzU5IDM1MC43ODlMMTU2Ljk4NCAyNzYuNjAyQzE1OC43NTQgMjY5Ljk5IDE2MCAyNjMuMTcgMTYwIDI1NlMxNTguNzU0IDI0Mi4wMSAxNTYuOTg0IDIzNS4zOThMMzA1LjM1OSAxNjEuMjExQzMyMC4wMDggMTc5LjgyNCAzNDIuNDc3IDE5MiAzNjggMTkyQzQxMi4xODQgMTkyIDQ0OCAxNTYuMTg0IDQ0OCAxMTJTNDEyLjE4NCAzMiAzNjggMzJTMjg4IDY3LjgxNiAyODggMTEyQzI4OCAxMTkuMTcgMjg5LjI0NiAxMjUuOTkgMjkxLjAxNiAxMzIuNjAyTDE0Mi42NDEgMjA2Ljc4OUMxMjcuOTkyIDE4OC4xNzYgMTA1LjUyMyAxNzYgODAgMTc2QzM1LjgxNiAxNzYgMCAyMTEuODE2IDAgMjU2UzM1LjgxNiAzMzYgODAgMzM2QzEwNS41MjMgMzM2IDEyNy45OTIgMzIzLjgyNCAxNDIuNjQxIDMwNS4yMTFMMjkxLjAxNiAzNzkuMzk4QzI4OS4yNDYgMzg2LjAxIDI4OCAzOTIuODMgMjg4IDQwMEMyODggNDQ0LjE4NCAzMjMuODE2IDQ4MCAzNjggNDgwUzQ0OCA0NDQuMTg0IDQ0OCA0MDBTNDEyLjE4NCAzMjAgMzY4IDMyMFpNMzY4IDY0QzM5NC40NjcgNjQgNDE2IDg1LjUzMyA0MTYgMTEyUzM5NC40NjcgMTYwIDM2OCAxNjBTMzIwIDEzOC40NjcgMzIwIDExMlMzNDEuNTMzIDY0IDM2OCA2NFpNODAgMzA0QzUzLjUzMyAzMDQgMzIgMjgyLjQ2NyAzMiAyNTZTNTMuNTMzIDIwOCA4MCAyMDhTMTI4IDIyOS41MzMgMTI4IDI1NlMxMDYuNDY3IDMwNCA4MCAzMDRaTTM2OCA0NDhDMzQxLjUzMyA0NDggMzIwIDQyNi40NjcgMzIwIDQwMFMzNDEuNTMzIDM1MiAzNjggMzUyUzQxNiAzNzMuNTMzIDQxNiA0MDBTMzk0LjQ2NyA0NDggMzY4IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ShareNodes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M368 320C342.477 320 320.008 332.176 305.359 350.789L156.984 276.602C158.754 269.99 160 263.17 160 256S158.754 242.01 156.984 235.398L305.359 161.211C320.008 179.824 342.477 192 368 192C412.184 192 448 156.184 448 112S412.184 32 368 32S288 67.816 288 112C288 119.17 289.246 125.99 291.016 132.602L142.641 206.789C127.992 188.176 105.523 176 80 176C35.816 176 0 211.816 0 256S35.816 336 80 336C105.523 336 127.992 323.824 142.641 305.211L291.016 379.398C289.246 386.01 288 392.83 288 400C288 444.184 323.816 480 368 480S448 444.184 448 400S412.184 320 368 320ZM368 64C394.467 64 416 85.533 416 112S394.467 160 368 160S320 138.467 320 112S341.533 64 368 64ZM80 304C53.533 304 32 282.467 32 256S53.533 208 80 208S128 229.533 128 256S106.467 304 80 304ZM368 448C341.533 448 320 426.467 320 400S341.533 352 368 352S416 373.533 416 400S394.467 448 368 448Z" />
        </Icon>
    </>
}