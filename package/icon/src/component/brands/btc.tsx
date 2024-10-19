
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `btc` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/btc?s=brands btc}
 * @preview ![btc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTAuMjA0IDI0Mi42MzhjMjcuNzMtMTQuMTggNDUuMzc3LTM5LjM5IDQxLjI4LTgxLjMtNS4zNTgtNTcuMzUxLTUyLjQ1OC03Ni41NzMtMTE0Ljg1LTgxLjkyOVYwaC00OC41Mjh2NzcuMjAzYy0xMi42MDUgMC0yNS41MjUuMzE1LTM4LjQ0NC42M1YwaC00OC41Mjh2NzkuNDA5Yy0xNy44NDIuNTM5LTM4LjYyMi4yNzYtOTcuMzcgMHY1MS42NzhjMzguMzE0LS42NzggNTguNDE3LTMuMTQgNjMuMDIzIDIxLjQyN3YyMTcuNDI5Yy0yLjkyNSAxOS40OTItMTguNTI0IDE2LjY4NS01My4yNTUgMTYuMDcxTDMuNzY1IDQ0My42OGM4OC40ODEgMCA5Ny4zNy4zMTUgOTcuMzcuMzE1VjUxMmg0OC41Mjh2LTY3LjA2YzEzLjIzNC4zMTUgMjYuMTU0LjMxNSAzOC40NDQuMzE1VjUxMmg0OC41Mjh2LTY4LjAwNWM4MS4yOTktNC40MTIgMTM1LjY0Ny0yNC44OTQgMTQyLjg5NS0xMDEuNDY3IDUuNjcxLTYxLjQ0Ni0yMy4zMi04OC44NjItNjkuMzI2LTk5Ljg5ek0xNTAuNjA4IDEzNC41NTNjMjcuNDE1IDAgMTEzLjEyNi04LjUwNyAxMTMuMTI2IDQ4LjUyOCAwIDU0LjUxNS04NS43MSA0OC4yMTItMTEzLjEyNiA0OC4yMTJ2LTk2Ljc0em0wIDI1MS43NzZWMjc5LjgyMWMzMi43NzIgMCAxMzMuMTI3LTkuMTM4IDEzMy4xMjcgNTMuMjU1LS4wMDEgNjAuMTg2LTEwMC4zNTUgNTMuMjUzLTEzMy4xMjcgNTMuMjUzeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Btc(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M310.204 242.638c27.73-14.18 45.377-39.39 41.28-81.3-5.358-57.351-52.458-76.573-114.85-81.929V0h-48.528v77.203c-12.605 0-25.525.315-38.444.63V0h-48.528v79.409c-17.842.539-38.622.276-97.37 0v51.678c38.314-.678 58.417-3.14 63.023 21.427v217.429c-2.925 19.492-18.524 16.685-53.255 16.071L3.765 443.68c88.481 0 97.37.315 97.37.315V512h48.528v-67.06c13.234.315 26.154.315 38.444.315V512h48.528v-68.005c81.299-4.412 135.647-24.894 142.895-101.467 5.671-61.446-23.32-88.862-69.326-99.89zM150.608 134.553c27.415 0 113.126-8.507 113.126 48.528 0 54.515-85.71 48.212-113.126 48.212v-96.74zm0 251.776V279.821c32.772 0 133.127-9.138 133.127 53.255-.001 60.186-100.355 53.253-133.127 53.253z" />
        </Icon>
    </>
}