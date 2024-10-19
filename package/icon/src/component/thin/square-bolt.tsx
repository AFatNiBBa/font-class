
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-bolt` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=thin square-bolt}
 * @preview ![square-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNMzA0IDI0OEgxNjMuODc1TDI4Mi44NzUgMTMzLjc2NkMyODYuMDYzIDEzMC43MTkgMjg2LjE4OCAxMjUuNjQxIDI4My4xMjUgMTIyLjQ1M0MyODAuMDMxIDExOS4yOTcgMjc0Ljk2OSAxMTkuMTcyIDI3MS44MTMgMTIyLjIzNEwxMzguNDY5IDI1MC4yMzRDMTM2LjA5NCAyNTIuNDg0IDEzNS4zNDQgMjU1Ljk1MyAxMzYuNTYyIDI1OC45ODRTMTQwLjc1IDI2NCAxNDQgMjY0SDI4NC4xMjVMMTY1LjEyNSAzNzguMjM0QzE2MS45MzcgMzgxLjI4MSAxNjEuODEyIDM4Ni4zNTkgMTY0Ljg3NSAzODkuNTQ3QzE2Ni40NjkgMzkxLjE3MiAxNjguNTYyIDM5MiAxNzAuNjU2IDM5MkMxNzIuNjU2IDM5MiAxNzQuNjU2IDM5MS4yNjYgMTc2LjE4OCAzODkuNzY2TDMwOS41MzEgMjYxLjc2NkMzMTEuOTA2IDI1OS41MTYgMzEyLjY1NiAyNTYuMDQ3IDMxMS40MzggMjUzLjAxNlMzMDcuMjUgMjQ4IDMwNCAyNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareBolt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM304 248H163.875L282.875 133.766C286.063 130.719 286.188 125.641 283.125 122.453C280.031 119.297 274.969 119.172 271.813 122.234L138.469 250.234C136.094 252.484 135.344 255.953 136.562 258.984S140.75 264 144 264H284.125L165.125 378.234C161.937 381.281 161.812 386.359 164.875 389.547C166.469 391.172 168.562 392 170.656 392C172.656 392 174.656 391.266 176.188 389.766L309.531 261.766C311.906 259.516 312.656 256.047 311.438 253.016S307.25 248 304 248Z" />
        </Icon>
    </>
}