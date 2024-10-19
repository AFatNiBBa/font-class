
import { Icon } from "../../index";

/**
 * A component that renders the `car-tilt` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-tilt?s=light car-tilt}
 * @preview ![car-tilt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDIuMzU0IDE3Mi42MDlDMTkwLjI3NyAxNjcuMTQ1IDE3Ni4wNTcgMTcyLjUwNCAxNzAuNTkgMTg0LjU3OEMxNjUuMTI1IDE5Ni42NTYgMTcwLjQ4NCAyMTAuODc5IDE4Mi41NjEgMjE2LjM0NFMyMDguODYxIDIxNi40NDkgMjE0LjMyNCAyMDQuMzcxQzIxOS43ODkgMTkyLjI5NyAyMTQuNDMgMTc4LjA3NCAyMDIuMzU0IDE3Mi42MDlaTTQ5MS4zMTggMzI5LjcyOUM0OTYuNzgzIDMxNy42NTIgNDkxLjQyNCAzMDMuNDMgNDc5LjM0OCAyOTcuOTY1UzQ1My4wNDkgMjk3Ljg1OSA0NDcuNTg0IDMwOS45MzZDNDQyLjExNyAzMjIuMDEyIDQ0Ny40NzkgMzM2LjIzNCA0NTkuNTUzIDM0MS42OTlDNDcxLjYyOSAzNDcuMTY2IDQ4NS44NTIgMzQxLjgwNSA0OTEuMzE4IDMyOS43MjlaTTYyNCA0ODBINDc2TDQ4OS4zODUgNDUwLjQyNkM1MTEuMjI5IDQ0OC4xMTEgNTMxLjQwOCA0MzUuMTk1IDU0MS4xMTkgNDEzLjc0TDU2Ny41MSAzNTUuNDI4QzU4My4zMzggMzIwLjQ1NyA1NzYuMjI3IDI4MS4xNjQgNTUyLjkwNCAyNTMuNzQ0TDU2NS4xOTcgMTcwLjU5MkM1NzAuMzg3IDEzNS40MzIgNTUxLjM4NSAxMDAuNjQ2IDUxOS4wMzUgODYuMDJMMzQ0LjYwNyA3LjA3NkMzMTIuMTk3IC03LjYxMyAyNzMuNTY2IDEuMTA1IDI1MC41NjIgMjguMjM0TDE5OS4wNyA4OC45NjlDMTk1LjU1MSA4OC41NzggMTkyLjAzMSA4Ny44NTUgMTg4LjUyMyA4Ny44NTVDMTUxLjk3MyA4Ny44NTUgMTE3LjA0NyAxMDguODM4IDEwMC45OTYgMTQ0LjMwMUw3NC42MDUgMjAyLjYxM0M2NC44NjEgMjI0LjE0MyA2OC4yNDggMjQ4LjA3OCA4MS4wMzEgMjY2LjAzM0w1Ny41NzYgMzE3Ljg1NUM1My45MzIgMzI1LjkwNiA1Ny41MDYgMzM1LjM4OSA2NS41NTcgMzM5LjAzMUM2Ny42OTcgMzQwIDY5LjkzOSAzNDAuNDU5IDcyLjE0NiAzNDAuNDU5Qzc4LjIzOCAzNDAuNDU5IDg0LjA1NyAzMzYuOTYzIDg2LjczNCAzMzEuMDUzTDEwNi41MjcgMjg3LjMxOEw0NTYuNDEyIDQ0NS42Nkw0NDAuODcxIDQ4MEgxNkM3LjE2NCA0ODAgMCA0ODcuMTYyIDAgNDk2QzAgNTA0LjgzNiA3LjE2NCA1MTIgMTYgNTEySDYyNEM2MzIuODM4IDUxMiA2NDAgNTA0LjgzNiA2NDAgNDk2QzY0MCA0ODcuMTYyIDYzMi44MzggNDgwIDYyNCA0ODBaTTI3NC45NzMgNDguOTI0QzI4OC43NTYgMzIuNjA5IDMxMS45NzkgMjcuNDIyIDMzMS40MTggMzYuMjAzTDUwNS44NDYgMTE1LjE0OEM1MjUuMjU2IDEyMy45NjEgNTM2LjY2NCAxNDQuODA3IDUzMy41MzcgMTY1LjkwMkw1MjMuOTU1IDIzMC44ODNDNTIyLjQ1NyAyMzAuMTA5IDUyMS4xOCAyMjkuMDc2IDUxOS42MjUgMjI4LjM3M0wyMzIuODQyIDk4LjU4NkwyNzQuOTczIDQ4LjkyNFpNMTE5LjcyMyAyNTguMTYyQzExMS45MzYgMjU0LjYzNyAxMDUuOTg2IDI0OC4yOTEgMTAyLjk3MyAyNDAuMjkxQzk5Ljk1NSAyMzIuMjkzIDEwMC4yMzYgMjIzLjU5OCAxMDMuNzYyIDIxNS44MTFMMTMwLjE1MiAxNTcuNDk2QzE0MC41IDEzNC42MzMgMTYzLjQxNCAxMTkuODU3IDE4OC41MjMgMTE5Ljg1N0MxOTcuNjE1IDExOS44NTcgMjA2LjQ3NyAxMjEuNzgxIDIxNC44NTcgMTI1LjU3NEw1MDYuNDMyIDI1Ny41MjlDNTIyLjAwOCAyNjQuNTc4IDUzMy45MDQgMjc3LjI3MSA1MzkuOTM2IDI5My4yN0M1NDUuOTYzIDMwOS4yNjggNTQ1LjQwMiAzMjYuNjU2IDUzOC4zNTQgMzQyLjIzTDUxMS45NjEgNDAwLjU0NUM1MDYuNzg3IDQxMS45OCA0OTUuMzI2IDQxOS4zNjcgNDgyLjc2NiA0MTkuMzY3QzQ3OC4yMzIgNDE5LjM2NyA0NzMuODA1IDQxOC40MDQgNDY5LjYwNyA0MTYuNTA2TDExOS43MjMgMjU4LjE2MloiLz48L3N2Zz4=|width=32|height=32)
 */
const CarTilt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M202.354 172.609C190.277 167.145 176.057 172.504 170.59 184.578C165.125 196.656 170.484 210.879 182.561 216.344S208.861 216.449 214.324 204.371C219.789 192.297 214.43 178.074 202.354 172.609ZM491.318 329.729C496.783 317.652 491.424 303.43 479.348 297.965S453.049 297.859 447.584 309.936C442.117 322.012 447.479 336.234 459.553 341.699C471.629 347.166 485.852 341.805 491.318 329.729ZM624 480H476L489.385 450.426C511.229 448.111 531.408 435.195 541.119 413.74L567.51 355.428C583.338 320.457 576.227 281.164 552.904 253.744L565.197 170.592C570.387 135.432 551.385 100.646 519.035 86.02L344.607 7.076C312.197 -7.613 273.566 1.105 250.562 28.234L199.07 88.969C195.551 88.578 192.031 87.855 188.523 87.855C151.973 87.855 117.047 108.838 100.996 144.301L74.605 202.613C64.861 224.143 68.248 248.078 81.031 266.033L57.576 317.855C53.932 325.906 57.506 335.389 65.557 339.031C67.697 340 69.939 340.459 72.146 340.459C78.238 340.459 84.057 336.963 86.734 331.053L106.527 287.318L456.412 445.66L440.871 480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H624C632.838 512 640 504.836 640 496C640 487.162 632.838 480 624 480ZM274.973 48.924C288.756 32.609 311.979 27.422 331.418 36.203L505.846 115.148C525.256 123.961 536.664 144.807 533.537 165.902L523.955 230.883C522.457 230.109 521.18 229.076 519.625 228.373L232.842 98.586L274.973 48.924ZM119.723 258.162C111.936 254.637 105.986 248.291 102.973 240.291C99.955 232.293 100.236 223.598 103.762 215.811L130.152 157.496C140.5 134.633 163.414 119.857 188.523 119.857C197.615 119.857 206.477 121.781 214.857 125.574L506.432 257.529C522.008 264.578 533.904 277.271 539.936 293.27C545.963 309.268 545.402 326.656 538.354 342.23L511.961 400.545C506.787 411.98 495.326 419.367 482.766 419.367C478.232 419.367 473.805 418.404 469.607 416.506L119.723 258.162Z" />
    </Icon>
);

export default CarTilt;