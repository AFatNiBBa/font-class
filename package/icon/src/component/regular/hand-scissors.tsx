
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-scissors` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-scissors?s=regular hand-scissors}
 * @preview ![hand-scissors](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjkuOTgyIDQ4MEgzNjcuOTk4QzQ0Ny40MDIgNDgwIDUxMiA0MTcuMDU3IDUxMiAzMzkuNjg4VjIzMS44MTJDNTEyIDIwOC4zNTkgNTA1Ljg5NCAxODUuMDc4IDQ5NC4zNDQgMTY0LjQ4Mkw0NjIuOTk2IDEwOC42MzNDNDQ3LjUyOSA4MS4xMDIgNDE3Ljk3NyA2NCAzODUuODc0IDY0SDMzOC45MDRDMzEyLjI3MyA2NCAyODcuMzQ5IDc1LjYzMSAyNzAuNTA3IDk1LjkzNEwyNTUuMDUyIDExNC42NDFMMTI3LjMzIDY4LjQzOEMxMTkuMDIgNjUuNDYxIDExMC41IDY0LjA1IDEwMi4xMSA2NC4wNUM3Mi4wODkgNjQuMDUgNDMuNzM2IDgyLjExMyAzMi42OTYgMTExLjEzOUMxNS4wNTggMTU2Ljc3OCA0Ni4xOTEgMTk0LjAwMSA3Ni43NTUgMjA0Ljg4N0w3OC45MDEgMjA1LjY1TDY4Ljc4NiAyMDYuMzUyQzMwLjIxMyAyMDkuMDA4IDAgMjQwLjkzNCAwIDI3OS4wMzFDMCAzMTguNzM0IDMzLjI2OSAzNTEuMzk2IDczLjkyNCAzNTEuMzk2Qzc1LjY2OSAzNTEuMzk2IDc3LjQyNiAzNTEuMzM2IDc5LjE5MiAzNTEuMjEzTDE2Ny45OCAzNDUuMDc4VjM1My4yMTlDMTY3Ljk4IDM3NS4zMzIgMTc4LjUzMSAzOTYuMzI2IDE5Ni4wMjggNDA5Ljk1OUMxOTcuNDE4IDQ0OC44MTIgMjMwLjA1OSA0ODAgMjY5Ljk4MiA0ODBaTTI2OS45ODIgNDMyQzI1NS42MzggNDMyIDI0My45ODEgNDIwLjk2OSAyNDMuOTgxIDQwNy4zNzVWMzkzLjg0NEMyNDQuMDA4IDM5My40NTQgMjQ0LjAyMiAzOTMuMDYzIDI0NC4wMjIgMzkyLjY3QzI0NC4wMjIgMzg1Ljc3NSAyMzkuOTIgMzc4LjQ2OSAyMzMuMzU2IDM3Ni4yODFDMjIyLjk2NSAzNzIuNzgxIDIxNS45ODEgMzYzLjUgMjE1Ljk4MSAzNTMuMjE5VjMzOS42ODdDMjE1Ljk4MSAzMjIuNzAzIDIyOS42ODUgMzIzLjI4NyAyMjkuNjg1IDMwOS43OTlDMjI5LjY4NSAzMDAuNzE3IDIyMi4yOTMgMjkzLjgzNyAyMTMuNzIgMjkzLjgzN0MyMTMuMzU2IDI5My44MzcgMjEyLjk4OSAyOTMuODUgMjEyLjYyMiAyOTMuODc1TDc1Ljg1NCAzMDMuMzEyQzc1LjIwNSAzMDMuMzU4IDc0LjU1OSAzMDMuMzggNzMuOTE4IDMwMy4zOEM1OS41OTggMzAzLjM4IDQ3Ljk4OSAyOTIuMzM5IDQ3Ljk4OSAyNzguODg5QzQ3Ljk4OSAyNjUuNjE0IDU4LjY4OSAyNTUuMTUxIDcyLjA4OSAyNTQuMjVMMjM1LjI5NCAyNDIuOTY5QzIzNy45NjcgMjQyLjc4MSAyNTAuMjEzIDI0MC4wNjEgMjUwLjIxMyAyMjYuNzg0QzI1MC4yMTMgMjIwLjEwOSAyNDUuOTI5IDIxNC4yIDIzOS41NTkgMjExLjkzN0w5Mi44MzkgMTU5LjY1NkM4NS4zOTIgMTU2Ljk5OSA3NS45NzQgMTQ5LjM3MiA3NS45NzQgMTM2LjY2MkM3NS45NzQgMTI1LjUyMyA4NS4yMjIgMTEyLjAwMyAxMDEuOTM5IDExMi4wMDNDMTA0Ljk4MyAxMTIuMDAzIDEwOC4wODEgMTEyLjUxNSAxMTEuMTA1IDExMy41OTRMMzQ2LjA5MiAxOTguNjI1QzM0Ny44OTMgMTk5LjI4MyAzNDkuNzM2IDE5OS41OTUgMzUxLjU0OCAxOTkuNTk1QzM2MC41MDggMTk5LjU5NSAzNjcuNTUzIDE5Mi4yMTkgMzY3LjU1MyAxODMuNkMzNjcuNTUzIDE3Ny4wODYgMzYzLjQ4NSAxNzAuOTEgMzU2Ljk2NyAxNjguNTYyTDI5Mi4xNTQgMTQ1LjA5NEwzMDcuNDk4IDEyNi41MzFDMzE1LjE1NCAxMTcuMzEyIDMyNi42MDcgMTEyIDMzOC45MDQgMTEySDM4NS44NzRDNDAwLjYzOSAxMTIgNDE0LjE1NSAxMTkuNzE5IDQyMS4xNCAxMzIuMTU2TDQ1Mi40ODQgMTg4QzQ2MC4wMTUgMjAxLjQwNiA0NjMuOTk5IDIxNi41NjIgNDYzLjk5OSAyMzEuODEyVjMzOS42ODhDNDYzLjk5OSAzOTAuNTk0IDQyMC45MzYgNDMyIDM2Ny45OTggNDMySDI2OS45ODJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HandScissors(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M269.982 480H367.998C447.402 480 512 417.057 512 339.688V231.812C512 208.359 505.894 185.078 494.344 164.482L462.996 108.633C447.529 81.102 417.977 64 385.874 64H338.904C312.273 64 287.349 75.631 270.507 95.934L255.052 114.641L127.33 68.438C119.02 65.461 110.5 64.05 102.11 64.05C72.089 64.05 43.736 82.113 32.696 111.139C15.058 156.778 46.191 194.001 76.755 204.887L78.901 205.65L68.786 206.352C30.213 209.008 0 240.934 0 279.031C0 318.734 33.269 351.396 73.924 351.396C75.669 351.396 77.426 351.336 79.192 351.213L167.98 345.078V353.219C167.98 375.332 178.531 396.326 196.028 409.959C197.418 448.812 230.059 480 269.982 480ZM269.982 432C255.638 432 243.981 420.969 243.981 407.375V393.844C244.008 393.454 244.022 393.063 244.022 392.67C244.022 385.775 239.92 378.469 233.356 376.281C222.965 372.781 215.981 363.5 215.981 353.219V339.687C215.981 322.703 229.685 323.287 229.685 309.799C229.685 300.717 222.293 293.837 213.72 293.837C213.356 293.837 212.989 293.85 212.622 293.875L75.854 303.312C75.205 303.358 74.559 303.38 73.918 303.38C59.598 303.38 47.989 292.339 47.989 278.889C47.989 265.614 58.689 255.151 72.089 254.25L235.294 242.969C237.967 242.781 250.213 240.061 250.213 226.784C250.213 220.109 245.929 214.2 239.559 211.937L92.839 159.656C85.392 156.999 75.974 149.372 75.974 136.662C75.974 125.523 85.222 112.003 101.939 112.003C104.983 112.003 108.081 112.515 111.105 113.594L346.092 198.625C347.893 199.283 349.736 199.595 351.548 199.595C360.508 199.595 367.553 192.219 367.553 183.6C367.553 177.086 363.485 170.91 356.967 168.562L292.154 145.094L307.498 126.531C315.154 117.312 326.607 112 338.904 112H385.874C400.639 112 414.155 119.719 421.14 132.156L452.484 188C460.015 201.406 463.999 216.562 463.999 231.812V339.688C463.999 390.594 420.936 432 367.998 432H269.982Z" />
        </Icon>
    </>
}