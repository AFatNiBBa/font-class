
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hurricane` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=thin hurricane}
 * @preview ![hurricane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjI0QzIwNi4yNSAyMjQgMTkyIDIzOC4yNSAxOTIgMjU2UzIwNi4yNSAyODggMjI0IDI4OFMyNTYgMjczLjc1IDI1NiAyNTZTMjQxLjc1IDIyNCAyMjQgMjI0Wk0yMjQgMjcyQzIxNS4wMjcgMjcyIDIwOCAyNjQuOTczIDIwOCAyNTZTMjE1LjAyNyAyNDAgMjI0IDI0MFMyNDAgMjQ3LjAyNyAyNDAgMjU2UzIzMi45NzMgMjcyIDIyNCAyNzJaTTIyNCAxNjBDMTcwLjc1IDE2MCAxMjggMjAyLjc1IDEyOCAyNTZTMTcwLjc1IDM1MiAyMjQgMzUyUzMyMCAzMDkuMjUgMzIwIDI1NlMyNzcuMjUgMTYwIDIyNCAxNjBaTTIyNCAzMzZDMTc5Ljg4NyAzMzYgMTQ0IDMwMC4xMTMgMTQ0IDI1NlMxNzkuODg3IDE3NiAyMjQgMTc2UzMwNCAyMTEuODg3IDMwNCAyNTZTMjY4LjExMyAzMzYgMjI0IDMzNlpNMjE5LjU2MiA5My4yODFMMjM5Ljc1IDMxLjA2MkMyNDIuMzEyIDIzLjM3NSAyNDAuNzUgMTUgMjM1LjU5NCA4LjcxOUMyMzAuNDM4IDIuNDA2IDIyMi41IC0wLjg0NCAyMTQuNTYyIDAuMTg3QzExMC40NjkgMTIuNjU2IDMyIDEwMi42MjUgMzIgMjA5LjVDMzIgMzIxLjMxMiAxMTkuMTU2IDQxMi45NjkgMjI4LjQzOCA0MTguNzE5TDIwOC4yNSA0ODAuOTM3QzIwNS42ODggNDg4LjYyNSAyMDcuMjUgNDk3IDIxMi40MDYgNTAzLjI4MUMyMTYuOTM4IDUwOC44NDQgMjIzLjU5NCA1MTIgMjMwLjYyNSA1MTJDMjMxLjU2MiA1MTIgMjMyLjUgNTExLjkzNyAyMzMuNDM3IDUxMS44MTJDMzM3LjUzMSA0OTkuMzQ0IDQxNiA0MDkuMzc1IDQxNiAzMDIuNUM0MTYgMTkwLjY4NyAzMjguODQ0IDk5LjAzMSAyMTkuNTYyIDkzLjI4MVpNMjMxLjU2MiA0OTUuOTM3QzIyNy43NSA0OTYuMTU2IDIyNS41OTQgNDk0LjE1NiAyMjQuNzgxIDQ5My4xNTZDMjI0IDQ5Mi4xODcgMjIyLjI1IDQ4OS41MzEgMjIzLjQ2OSA0ODUuOTA2TDI1MC4zNDQgNDAzSDIzOS4zNDRDMTMzLjg0NCA0MDMgNDggMzE2LjE4NyA0OCAyMDkuNUM0OCAxMTAuNzE5IDEyMC40MDYgMjcuNTYyIDIxNi40MzggMTYuMDYyQzIxNi43ODEgMTYuMDMxIDIxNy4wOTQgMTYgMjE3LjQwNiAxNkMyMjAuNTMxIDE2IDIyMi40NjkgMTcuOTM3IDIyMy4yMTkgMTguODQ0QzIyNCAxOS44MTIgMjI1Ljc1IDIyLjQ2OSAyMjQuNTMxIDI2LjA5NEwxOTcuNjU2IDEwOUgyMDguNjU2QzMxNC4xNTYgMTA5IDQwMCAxOTUuODEyIDQwMCAzMDIuNUM0MDAgNDAxLjI4MSAzMjcuNTk0IDQ4NC40MzcgMjMxLjU2MiA0OTUuOTM3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Hurricane(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 224C206.25 224 192 238.25 192 256S206.25 288 224 288S256 273.75 256 256S241.75 224 224 224ZM224 272C215.027 272 208 264.973 208 256S215.027 240 224 240S240 247.027 240 256S232.973 272 224 272ZM224 160C170.75 160 128 202.75 128 256S170.75 352 224 352S320 309.25 320 256S277.25 160 224 160ZM224 336C179.887 336 144 300.113 144 256S179.887 176 224 176S304 211.887 304 256S268.113 336 224 336ZM219.562 93.281L239.75 31.062C242.312 23.375 240.75 15 235.594 8.719C230.438 2.406 222.5 -0.844 214.562 0.187C110.469 12.656 32 102.625 32 209.5C32 321.312 119.156 412.969 228.438 418.719L208.25 480.937C205.688 488.625 207.25 497 212.406 503.281C216.938 508.844 223.594 512 230.625 512C231.562 512 232.5 511.937 233.437 511.812C337.531 499.344 416 409.375 416 302.5C416 190.687 328.844 99.031 219.562 93.281ZM231.562 495.937C227.75 496.156 225.594 494.156 224.781 493.156C224 492.187 222.25 489.531 223.469 485.906L250.344 403H239.344C133.844 403 48 316.187 48 209.5C48 110.719 120.406 27.562 216.438 16.062C216.781 16.031 217.094 16 217.406 16C220.531 16 222.469 17.937 223.219 18.844C224 19.812 225.75 22.469 224.531 26.094L197.656 109H208.656C314.156 109 400 195.812 400 302.5C400 401.281 327.594 484.437 231.562 495.937Z" />
        </Icon>
    </>
}