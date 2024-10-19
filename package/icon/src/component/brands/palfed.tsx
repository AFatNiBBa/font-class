
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `palfed` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/palfed?s=brands palfed}
 * @preview ![palfed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQuOSAxOTMuOWMwLTQ3LjQtNTUuMi00NC4yLTk1LjQtMjkuOC0xLjMgMzkuNC0yLjUgODAuNy0zIDExOS44LjcgMi44IDIuNiA2LjIgMTUuMSA2LjIgMzYuOCAwIDgzLjQtNDIuOCA4My4zLTk2LjJ6bS0xOTQuNSA3Mi4yYy4yIDAgNi41LTIuNyAxMS4yLTIuNyAyNi42IDAgMjAuNyA0NC4xLTE0LjQgNDQuMS0yMS41IDAtMzcuMS0xOC4xLTM3LjEtNDMgMC00MiA0Mi45LTk1LjYgMTAwLjctMTI2LjUgMS0xMi40IDMtMjIgMTAuNS0yOC4yIDExLjItOSAyNi42LTMuNSAyOS41IDExLjEgNzIuMi0yMi4yIDEzNS4yIDEgMTM1LjIgNzIgMCA3Ny45LTc5LjMgMTUyLjYtMTQwLjEgMTM4LjItLjEgMzkuNC45IDc0LjQgMi43IDEwMHYuMmMuMiAzLjQuNiAxMi41LTUuMyAxOS4xLTkuNiAxMC42LTMzLjQgMTAtMzYuNC0yMi4zLTQuMS00NC40LjItMjA2LjEgMS40LTI0Mi41LTIxLjUgMTUtNTguNSA1MC4zLTU4LjUgNzUuOS4yIDIuNS40IDQgLjYgNC42ek04IDE4MS4xcy0uMSAzNy40IDM4LjQgMzcuNGgzMGwyMi40IDIxNy4yczAgNDQuMyA0NC43IDQ0LjNoMjg4LjlzNDQuNy0uNCA0NC43LTQ0LjNsMjIuNC0yMTcuMmgzMHMzOC40IDEuMiAzOC40LTM3LjRjMCAwIC4xLTM3LjQtMzguNC0zNy40aC0zMC4xYy03LjMtMjUuNi0zMC4yLTc0LjMtMTE5LjQtNzQuM2gtMjhWNTAuM3MtMi43LTE4LjQtMjEuMS0xOC40aC04NS44cy0yMS4xIDAtMjEuMSAxOC40djE5LjFoLTI4LjFzLTEwNSA0LjItMTIwLjUgNzQuM2gtMjlTOCAxNDIuNSA4IDE4MS4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Palfed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M384.9 193.9c0-47.4-55.2-44.2-95.4-29.8-1.3 39.4-2.5 80.7-3 119.8.7 2.8 2.6 6.2 15.1 6.2 36.8 0 83.4-42.8 83.3-96.2zm-194.5 72.2c.2 0 6.5-2.7 11.2-2.7 26.6 0 20.7 44.1-14.4 44.1-21.5 0-37.1-18.1-37.1-43 0-42 42.9-95.6 100.7-126.5 1-12.4 3-22 10.5-28.2 11.2-9 26.6-3.5 29.5 11.1 72.2-22.2 135.2 1 135.2 72 0 77.9-79.3 152.6-140.1 138.2-.1 39.4.9 74.4 2.7 100v.2c.2 3.4.6 12.5-5.3 19.1-9.6 10.6-33.4 10-36.4-22.3-4.1-44.4.2-206.1 1.4-242.5-21.5 15-58.5 50.3-58.5 75.9.2 2.5.4 4 .6 4.6zM8 181.1s-.1 37.4 38.4 37.4h30l22.4 217.2s0 44.3 44.7 44.3h288.9s44.7-.4 44.7-44.3l22.4-217.2h30s38.4 1.2 38.4-37.4c0 0 .1-37.4-38.4-37.4h-30.1c-7.3-25.6-30.2-74.3-119.4-74.3h-28V50.3s-2.7-18.4-21.1-18.4h-85.8s-21.1 0-21.1 18.4v19.1h-28.1s-105 4.2-120.5 74.3h-29S8 142.5 8 181.1z" />
        </Icon>
    </>
}