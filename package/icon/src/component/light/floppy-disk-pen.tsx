
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `floppy-disk-pen` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk-pen?s=light floppy-disk-pen}
 * @preview ![floppy-disk-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjEuOTQxIDIzNC4xOTlMNTMzLjgwOSAyMDYuMDYyQzUyNC40MzYgMTk2LjY4OSA1MTIuMTUyIDE5Mi4wMDIgNDk5Ljg2NyAxOTIuMDAyUzQ3NS4yOTkgMTk2LjY4OSA0NjUuOTI2IDIwNi4wNjJMMjkwLjQwOCAzODEuNTg4QzI4MS40NzMgMzkwLjUyMyAyNzUuMzgzIDQwMS45MDQgMjcyLjkwNCA0MTQuMjk1TDI1Ni4yNCA0OTcuNjQxQzI1NC43MjUgNTA1LjIyNSAyNjAuNjE5IDUxMiAyNjcuOTYzIDUxMkMyNjguNzQ4IDUxMiAyNjkuNTQ5IDUxMS45MjIgMjcwLjM2MSA1MTEuNzZMMzUzLjcxMSA0OTUuMDg4QzM2Ni4xIDQ5Mi42MDkgMzc3LjQ3NyA0ODYuNTIxIDM4Ni40MSA0NzcuNTg4TDU2MS45MzkgMzAyLjA4MkM1ODAuNjg2IDI4My4zMzggNTgwLjY4OCAyNTIuOTQ1IDU2MS45NDEgMjM0LjE5OVpNMzYzLjc4MyA0NTQuOTYxQzM1OS4zMDMgNDU5LjQ0MSAzNTMuNjQ4IDQ2Mi40NjcgMzQ3LjQzNiA0NjMuNzA5TDI5My41MDIgNDc0LjQ5OEwzMDQuMjgzIDQyMC41NzJDMzA1LjUyNyA0MTQuMzU0IDMwOC41NTMgNDA4LjY5NyAzMTMuMDM3IDQwNC4yMTVMNDI3LjMwNyAyODkuOTM2TDQ3OC4wNjYgMzQwLjY5NUwzNjMuNzgzIDQ1NC45NjFaTTUzOS4zMTQgMjc5LjQ1M0w1MDAuNjkxIDMxOC4wN0w0NDkuOTMyIDI2Ny4zMTFMNDg4LjU1NSAyMjguNjg4QzQ5Mi42MzEgMjI0LjYxMSA0OTcuMzkzIDIyNC4wMDIgNDk5Ljg2NyAyMjQuMDAyUzUwNy4xMDQgMjI0LjYxMSA1MTEuMTggMjI4LjY4OEw1MzkuMzE0IDI1Ni44MjZDNTQzLjM5MyAyNjAuOTA0IDU0NCAyNjUuNjY0IDU0NCAyNjguMTQxQzU0NCAyNzAuNjE1IDU0My4zOTEgMjc1LjM3NyA1MzkuMzE0IDI3OS40NTNaTTIwOCA0NDhIODBDNTMuNTMxIDQ0OCAzMiA0MjYuNDY5IDMyIDQwMFYxMTJDMzIgOTEuMTY4IDQ1LjQxNiA3My41NzQgNjQgNjYuOTQ3VjE2MEM2NCAxNzcuNjcyIDc4LjMyNiAxOTIgOTYgMTkySDI4OEMzMDUuNjc0IDE5MiAzMjAgMTc3LjY3MiAzMjAgMTYwVjcyLjAyQzMyMi42NjQgNzMuNzc3IDMyNS4xNjYgNzUuNzkxIDMyNy40MzggNzguMDYzTDQwMS45MzggMTUyLjU2M0M0MDkuMDYyIDE1OS43MDMgNDEzLjcxOSAxNjguNzAzIDQxNS4zNDQgMTc4LjYwOUM0MTYuNzgxIDE4Ny4zMjggNDI1LjIxOSAxOTMuMjUgNDMzLjcxOSAxOTEuNzgxQzQ0Mi40MzggMTkwLjM0NCA0NDguMzQ0IDE4Mi4xMDkgNDQ2LjkwNiAxNzMuMzkxQzQ0NC4xODggMTU2Ljg1OSA0MzYuNDY5IDE0MS44MjggNDI0LjU2MyAxMjkuOTM4TDM1MC4wNjMgNTUuNDM4QzMzNC45MzggNDAuMzI4IDMxNC44NzUgMzIgMjkzLjUgMzJIODBDMzUuODc1IDMyIDAgNjcuODkxIDAgMTEyVjQwMEMwIDQ0NC4xMDkgMzUuODc1IDQ4MCA4MCA0ODBIMjA4QzIxNi44NDQgNDgwIDIyNCA0NzIuODQ0IDIyNCA0NjRTMjE2Ljg0NCA0NDggMjA4IDQ0OFpNOTYgNjRIMjg4VjE2MEg5NlY2NFpNMjI0IDM2OEMxOTcuNTMxIDM2OCAxNzYgMzQ2LjQ2OSAxNzYgMzIwUzE5Ny41MzEgMjcyIDIyNCAyNzJTMjcyIDI5My41MzEgMjcyIDMyMEMyNzIgMzI4Ljg0NCAyNzkuMTU2IDMzNiAyODggMzM2UzMwNCAzMjguODQ0IDMwNCAzMjBDMzA0IDI3NS44OTEgMjY4LjEyNSAyNDAgMjI0IDI0MFMxNDQgMjc1Ljg5MSAxNDQgMzIwUzE3OS44NzUgNDAwIDIyNCA0MDBDMjMyLjg0NCA0MDAgMjQwIDM5Mi44NDQgMjQwIDM4NFMyMzIuODQ0IDM2OCAyMjQgMzY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FloppyDiskPen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M561.941 234.199L533.809 206.062C524.436 196.689 512.152 192.002 499.867 192.002S475.299 196.689 465.926 206.062L290.408 381.588C281.473 390.523 275.383 401.904 272.904 414.295L256.24 497.641C254.725 505.225 260.619 512 267.963 512C268.748 512 269.549 511.922 270.361 511.76L353.711 495.088C366.1 492.609 377.477 486.521 386.41 477.588L561.939 302.082C580.686 283.338 580.688 252.945 561.941 234.199ZM363.783 454.961C359.303 459.441 353.648 462.467 347.436 463.709L293.502 474.498L304.283 420.572C305.527 414.354 308.553 408.697 313.037 404.215L427.307 289.936L478.066 340.695L363.783 454.961ZM539.314 279.453L500.691 318.07L449.932 267.311L488.555 228.688C492.631 224.611 497.393 224.002 499.867 224.002S507.104 224.611 511.18 228.688L539.314 256.826C543.393 260.904 544 265.664 544 268.141C544 270.615 543.391 275.377 539.314 279.453ZM208 448H80C53.531 448 32 426.469 32 400V112C32 91.168 45.416 73.574 64 66.947V160C64 177.672 78.326 192 96 192H288C305.674 192 320 177.672 320 160V72.02C322.664 73.777 325.166 75.791 327.438 78.063L401.938 152.563C409.062 159.703 413.719 168.703 415.344 178.609C416.781 187.328 425.219 193.25 433.719 191.781C442.438 190.344 448.344 182.109 446.906 173.391C444.188 156.859 436.469 141.828 424.563 129.938L350.063 55.438C334.938 40.328 314.875 32 293.5 32H80C35.875 32 0 67.891 0 112V400C0 444.109 35.875 480 80 480H208C216.844 480 224 472.844 224 464S216.844 448 208 448ZM96 64H288V160H96V64ZM224 368C197.531 368 176 346.469 176 320S197.531 272 224 272S272 293.531 272 320C272 328.844 279.156 336 288 336S304 328.844 304 320C304 275.891 268.125 240 224 240S144 275.891 144 320S179.875 400 224 400C232.844 400 240 392.844 240 384S232.844 368 224 368Z" />
        </Icon>
    </>
}