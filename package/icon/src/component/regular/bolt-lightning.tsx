
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bolt-lightning` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-lightning?s=regular bolt-lightning}
 * @preview ![bolt-lightning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODEuMjIgMTcyLjgxMkMzNzcuMDYzIDE2NC45MzggMzY4LjkwNyAxNjAgMzYwLjAwMSAxNjBIMjAzLjQzOEwyNTQuMjgyIDMyLjkwNkMyNTcuMjUxIDI1LjUzMSAyNTYuMzQ1IDE3LjEyNSAyNTEuODc2IDEwLjUzMVMyMzkuOTcgMCAyMzIuMDAxIDBINTYuMDAxQzQzLjk3IDAgMzMuODEzIDguOTA2IDMyLjIyIDIwLjg0NEwwLjIyIDI2MC44NDRDLTAuNzE4IDI2Ny42ODggMS4zNzYgMjc0LjU5NCA1LjkzOCAyNzkuODEyQzEwLjUwMSAyODUgMTcuMDk1IDI4OCAyNC4wMDEgMjg4SDE3MC4zMTNMMTI4LjUzMiA0ODIuOTY5QzEyNi4xMjYgNDk0LjE4NyAxMzIuMDAxIDUwNS41MzEgMTQyLjUzMiA1MTAuMDYyQzE0NS41OTUgNTExLjM3NSAxNDguODEzIDUxMiAxNTIuMDAxIDUxMkMxNTkuNzIgNTEyIDE2Ny4yMiA1MDguMjUgMTcxLjgxMyA1MDEuNTYyTDM3OS44MTMgMTk3LjU2MkMzODQuODQ1IDE5MC4yMTkgMzg1LjM3NiAxODAuNjg4IDM4MS4yMiAxNzIuODEyWk0yMDEuMDAxIDM3My44NzVMMjIzLjQ3IDI2OS4wMzFDMjI1LjAwMSAyNjEuOTM4IDIyMy4yMiAyNTQuNTYzIDIxOC42NTcgMjQ4LjkwNkMyMTQuMDk1IDI0My4yODEgMjA3LjI1MSAyNDAgMjAwLjAwMSAyNDBINTEuNDA3TDc3LjAwMSA0OEgxOTYuNTYzTDE0NS43MiAxNzUuMDk0QzE0Mi43NTEgMTgyLjQ2OSAxNDMuNjU3IDE5MC44NzUgMTQ4LjEyNiAxOTcuNDY5UzE2MC4wMzIgMjA4IDE2OC4wMDEgMjA4SDMxNC41MDFMMjAxLjAwMSAzNzMuODc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BoltLightning(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M381.22 172.812C377.063 164.938 368.907 160 360.001 160H203.438L254.282 32.906C257.251 25.531 256.345 17.125 251.876 10.531S239.97 0 232.001 0H56.001C43.97 0 33.813 8.906 32.22 20.844L0.22 260.844C-0.718 267.688 1.376 274.594 5.938 279.812C10.501 285 17.095 288 24.001 288H170.313L128.532 482.969C126.126 494.187 132.001 505.531 142.532 510.062C145.595 511.375 148.813 512 152.001 512C159.72 512 167.22 508.25 171.813 501.562L379.813 197.562C384.845 190.219 385.376 180.688 381.22 172.812ZM201.001 373.875L223.47 269.031C225.001 261.938 223.22 254.563 218.657 248.906C214.095 243.281 207.251 240 200.001 240H51.407L77.001 48H196.563L145.72 175.094C142.751 182.469 143.657 190.875 148.126 197.469S160.032 208 168.001 208H314.501L201.001 373.875Z" />
        </Icon>
    </>
}