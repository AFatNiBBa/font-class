
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-laugh-squint` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh-squint?s=thin face-laugh-squint}
 * @preview ![face-laugh-squint](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzEuODk1IDIzMC44NTlDMzczLjE3NiAyMzEuNjA5IDM3NC41OTggMjMxLjk4NCAzNzYuMDA0IDIzMS45ODRDMzc4LjcwNyAyMzEuOTg0IDM4MS4zNjMgMjMwLjYwOSAzODIuODYzIDIyOC4xMDlDMzg1LjE0NSAyMjQuMjk3IDM4My45MSAyMTkuMzkxIDM4MC4xMTMgMjE3LjEwOUwzMTEuNTUxIDE3NS45ODRMMzgwLjExMyAxMzQuODU5QzM4My45MSAxMzIuNTc4IDM4NS4xNDUgMTI3LjY3MiAzODIuODYzIDEyMy44NTlDMzgwLjU5OCAxMjAuMDc4IDM3NS42NDUgMTE4LjkyMiAzNzEuODk1IDEyMS4xMDlMMjkxLjg5NSAxNjkuMTA5QzI4OS40NzMgMTcwLjU3OCAyODguMDA0IDE3My4xNzIgMjg4LjAwNCAxNzUuOTg0UzI4OS40NzMgMTgxLjM5MSAyOTEuODk1IDE4Mi44NTlMMzcxLjg5NSAyMzAuODU5Wk0xMjkuMTQ1IDIyOC4xMDlDMTMwLjY0NSAyMzAuNjA5IDEzMy4zMDEgMjMxLjk4NCAxMzYuMDA0IDIzMS45ODRDMTM3LjQxIDIzMS45ODQgMTM4LjgzMiAyMzEuNjA5IDE0MC4xMTMgMjMwLjg1OUwyMjAuMTEzIDE4Mi44NTlDMjIyLjUzNSAxODEuMzkxIDIyNC4wMDQgMTc4Ljc5NyAyMjQuMDA0IDE3NS45ODRTMjIyLjUzNSAxNzAuNTc4IDIyMC4xMTMgMTY5LjEwOUwxNDAuMTEzIDEyMS4xMDlDMTM2LjM5NSAxMTguOTIyIDEzMS40MjYgMTIwLjA3OCAxMjkuMTQ1IDEyMy44NTlDMTI2Ljg2MyAxMjcuNjcyIDEyOC4wOTggMTMyLjU3OCAxMzEuODk1IDEzNC44NTlMMjAwLjQ1NyAxNzUuOTg0TDEzMS44OTUgMjE3LjEwOUMxMjguMDk4IDIxOS4zOTEgMTI2Ljg2MyAyMjQuMjk3IDEyOS4xNDUgMjI4LjEwOVpNMjU2IDE2QzEyMy40NTMgMTYgMTYgMTIzLjQ1MyAxNiAyNTZTMTIzLjQ1MyA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0NyA0OTYgMjU2UzM4OC41NDcgMTYgMjU2IDE2Wk0yNTYgNDgwQzEzMi40ODQgNDgwIDMyIDM3OS41MTYgMzIgMjU2UzEzMi40ODQgMzIgMjU2IDMyUzQ4MCAxMzIuNDg0IDQ4MCAyNTZTMzc5LjUxNiA0ODAgMjU2IDQ4MFpNMzkxLjkwNCAyODhIMTIwLjA5OEMxMTAuNDY5IDI4OCAxMDIuOTEgMjk2LjUgMTA0LjEyOSAzMDZDMTEzLjAyNyAzNzcgMTc0LjA5MiA0MzIgMjQ3Ljk1NSA0MzJIMjY0LjA0NUMzMzcuOTA4IDQzMiAzOTguOTczIDM3NyA0MDcuODcxIDMwNkM0MDkuMDkgMjk2LjM3NSA0MDEuNTMzIDI4OCAzOTEuOTA0IDI4OFpNMjY0LjA0NSA0MTZIMjQ3Ljk1NUMxODMuMDE0IDQxNiAxMjguMDA2IDM2Ny44NTUgMTIwLjA5OCAzMDRIMzkxLjkwNEwzOTEuOTk2IDMwNC4wMTJDMzgzLjk5NCAzNjcuODU1IDMyOC45ODggNDE2IDI2NC4wNDUgNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FaceLaughSquint(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M371.895 230.859C373.176 231.609 374.598 231.984 376.004 231.984C378.707 231.984 381.363 230.609 382.863 228.109C385.145 224.297 383.91 219.391 380.113 217.109L311.551 175.984L380.113 134.859C383.91 132.578 385.145 127.672 382.863 123.859C380.598 120.078 375.645 118.922 371.895 121.109L291.895 169.109C289.473 170.578 288.004 173.172 288.004 175.984S289.473 181.391 291.895 182.859L371.895 230.859ZM129.145 228.109C130.645 230.609 133.301 231.984 136.004 231.984C137.41 231.984 138.832 231.609 140.113 230.859L220.113 182.859C222.535 181.391 224.004 178.797 224.004 175.984S222.535 170.578 220.113 169.109L140.113 121.109C136.395 118.922 131.426 120.078 129.145 123.859C126.863 127.672 128.098 132.578 131.895 134.859L200.457 175.984L131.895 217.109C128.098 219.391 126.863 224.297 129.145 228.109ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM391.904 288H120.098C110.469 288 102.91 296.5 104.129 306C113.027 377 174.092 432 247.955 432H264.045C337.908 432 398.973 377 407.871 306C409.09 296.375 401.533 288 391.904 288ZM264.045 416H247.955C183.014 416 128.006 367.855 120.098 304H391.904L391.996 304.012C383.994 367.855 328.988 416 264.045 416Z" />
        </Icon>
    </>
}