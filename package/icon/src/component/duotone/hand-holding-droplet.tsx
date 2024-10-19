
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-holding-droplet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-droplet?s=duotone hand-holding-droplet}
 * @preview ![hand-holding-droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2OC4xOTcgMzM2LjMxMkM1NTUuMDcyIDMxOC41IDUzMC4wNTkgMzE0LjY1NiA1MTIuMjY0IDMyNy44NDRMMzkyLjU5MiA0MTYuMDE2SDI3MS45OEMyNjMuMjMyIDQxNi4wMTYgMjU1Ljk4MiA0MDguNzY2IDI1NS45ODIgNDAwLjAyM0MyNTUuOTgyIDM5MS4yNzMgMjYzLjIzMiAzODQuMDIzIDI3MS45OCAzODQuMDIzSDM1MC4yMjdDMzY2LjIyNSAzODQuMDIzIDM4MC45NzUgMzczLjE0OCAzODMuNTk4IDM1Ny40MDZDMzg2Ljg0OCAzMzcuNDA2IDM3MS40NzUgMzIwLjAzMSAzNTEuOTc3IDMyMC4wMzFIMTkxLjk4NkMxNjQuOTg4IDMyMC4wMzEgMTM4Ljg2NSAzMjkuMjgxIDExNy44NjcgMzQ2LjI4MUw3MS4zNjkgMzg0LjAyM0gxNS45OThDNy4yNSAzODQuMDIzIDAgMzkxLjI3MyAwIDQwMC4wMjNWNDk2QzAgNTA0Ljc1IDcuMjUgNTEyIDE1Ljk5OCA1MTJIMzYyLjk3N0MzODUuMDA2IDUxMiA0MDYuODk2IDUwNC44MTIgNDI0LjY3NiA0OTEuNzI3TDU1OS43MjggMzkyLjIxMUM1NzcuNTEgMzc5LjExNyA1ODEuMzA1IDM1NC4wOTQgNTY4LjE5NyAzMzYuMzEyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODggMjU2QzM0MSAyNTYgMzg0IDIxMy44NzUgMzg0IDE2MkMzODQgMTIyIDMyNi44NzUgNDEuMjUgMzAwLjc1IDYuMzc1QzI5NC4zNzUgLTIuMTI1IDI4MS42MjUgLTIuMTI1IDI3NS4yNSA2LjM3NUMyNDkuMTI1IDQxLjI1IDE5MiAxMjIgMTkyIDE2MkMxOTIgMjEzLjg3NSAyMzUgMjU2IDI4OCAyNTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandHoldingDroplet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M568.197 336.312C555.072 318.5 530.059 314.656 512.264 327.844L392.592 416.016H271.98C263.232 416.016 255.982 408.766 255.982 400.023C255.982 391.273 263.232 384.023 271.98 384.023H350.227C366.225 384.023 380.975 373.148 383.598 357.406C386.848 337.406 371.475 320.031 351.977 320.031H191.986C164.988 320.031 138.865 329.281 117.867 346.281L71.369 384.023H15.998C7.25 384.023 0 391.273 0 400.023V496C0 504.75 7.25 512 15.998 512H362.977C385.006 512 406.896 504.812 424.676 491.727L559.728 392.211C577.51 379.117 581.305 354.094 568.197 336.312Z" />
            <path d="M288 256C341 256 384 213.875 384 162C384 122 326.875 41.25 300.75 6.375C294.375 -2.125 281.625 -2.125 275.25 6.375C249.125 41.25 192 122 192 162C192 213.875 235 256 288 256Z" />
        </Icon>
    </>
}