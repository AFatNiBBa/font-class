
import { Icon } from "../../index";

/**
 * A component that renders the `truck-container` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-container?s=regular truck-container}
 * @preview ![truck-container](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjMuNTk2IDE5Ny42NTZMNTcwLjMzNCAxNDQuMzk1QzU1OS44MzggMTMzLjg5NiA1NDUuNiAxMjggNTMwLjc1NiAxMjhINDY0QzQ0Ni4zMjYgMTI4IDQzMiAxNDIuMzI2IDQzMiAxNjBWMzM2SDI1NlYzMzYuMzYxQzI0Mi41OTggMzI2LjIzMiAyMjYuMDk2IDMyMCAyMDggMzIwQzE4MS43MDkgMzIwIDE1OC41ODQgMzMyLjg1NCAxNDQgMzUyLjQzOEMxMjkuNDE2IDMzMi44NTQgMTA2LjI5MyAzMjAgODAgMzIwQzM1LjgxOCAzMjAgMCAzNTUuODE2IDAgNDAwQzAgNDQ0LjE4MiAzNS44MTggNDgwIDgwIDQ4MFY0NzkuMzg3QzEwNi4yMjcgNDc5LjMzNCAxMjkuNDQ1IDQ2Ny4xMDUgMTQ0IDQ0Ny41NjNDMTYyLjQxIDQ3Mi4yODUgMTk0LjQzMiA0ODYuMjc5IDIyOS4yNSA0NzcuMjMyQzI1NC40MTggNDcwLjY5MyAyNzUuMzk1IDQ1MS4wNjggMjgzLjYyNyA0MjYuNDA0QzI4OC41NjggNDExLjYgMjg5LjA3NCAzOTcuMjIzIDI4Ni4zODcgMzg0SDQ0OS42MTNDNDQ2LjkyMiAzOTcuMjQ4IDQ0Ny40MzQgNDExLjY1NCA0NTIuNDAyIDQyNi40ODZDNDYwLjgwOSA0NTEuNTc0IDQ4Mi40IDQ3MS40MSA1MDguMTIzIDQ3Ny42MDRDNTYwLjkxOCA0OTAuMzE2IDYwOCA0NTAuNjU0IDYwOCA0MDBDNjA4IDM5NC41MiA2MDcuNDM4IDM4OS4xNzIgNjA2LjM4NyAzODRINjA4QzYyNS42NzQgMzg0IDY0MCAzNjkuNjcyIDY0MCAzNTJWMjM3LjI2NEM2NDAgMjIyLjQwOCA2MzQuMSAyMDguMTYyIDYyMy41OTYgMTk3LjY1NlpNODAgNDMyQzYyLjM1NSA0MzIgNDggNDE3LjY0NSA0OCA0MDBTNjIuMzU1IDM2OCA4MCAzNjhTMTEyIDM4Mi4zNTUgMTEyIDQwMFM5Ny42NDUgNDMyIDgwIDQzMlpNMjA4IDQzMkMxOTAuMzU1IDQzMiAxNzYgNDE3LjY0NSAxNzYgNDAwUzE5MC4zNTUgMzY4IDIwOCAzNjhTMjQwIDM4Mi4zNTUgMjQwIDQwMFMyMjUuNjQ1IDQzMiAyMDggNDMyWk00ODAgMTc2SDUzMC43NUM1MzIuODU5IDE3NiA1MzQuOTA2IDE3Ni44NTkgNTM2LjQwNiAxNzguMzQ0TDU4Mi4wNjIgMjI0SDQ4MFYxNzZaTTUyOCA0MzJDNTEwLjM1NSA0MzIgNDk2IDQxNy42NDUgNDk2IDQwMFM1MTAuMzU1IDM2OCA1MjggMzY4UzU2MCAzODIuMzU1IDU2MCA0MDBTNTQ1LjY0NSA0MzIgNTI4IDQzMlpNNTkyIDMzNkg1NzZWMzM2LjM2MUM1NjIuNTk4IDMyNi4yMzIgNTQ2LjA5NiAzMjAgNTI4IDMyMEM1MDkuOTA2IDMyMCA0OTMuNDAyIDMyNi4yMzIgNDgwIDMzNi4zNjFWMjcySDU5MlYzMzZaTTI0IDMwNEMzNy4yNSAzMDQgNDggMjkzLjI1IDQ4IDI4MFY4OEM0OCA4My41OTQgNTEuNTk0IDgwIDU2IDgwSDM0NEMzNDguNDA2IDgwIDM1MiA4My41OTQgMzUyIDg4VjI4MEMzNTIgMjkzLjI1IDM2Mi43NSAzMDQgMzc2IDMwNFM0MDAgMjkzLjI1IDQwMCAyODBWODhDNDAwIDU3LjEyNSAzNzQuODc1IDMyIDM0NCAzMkg1NkMyNS4xMjUgMzIgMCA1Ny4xMjUgMCA4OFYyODBDMCAyOTMuMjUgMTAuNzUgMzA0IDI0IDMwNFpNMTc2IDEyOFYyNTZDMTc2IDI2OS4yNSAxODYuNzUgMjgwIDIwMCAyODBTMjI0IDI2OS4yNSAyMjQgMjU2VjEyOEMyMjQgMTE0Ljc1IDIxMy4yNSAxMDQgMjAwIDEwNFMxNzYgMTE0Ljc1IDE3NiAxMjhaTTI2NCAxMjhWMjU2QzI2NCAyNjkuMjUgMjc0Ljc1IDI4MCAyODggMjgwUzMxMiAyNjkuMjUgMzEyIDI1NlYxMjhDMzEyIDExNC43NSAzMDEuMjUgMTA0IDI4OCAxMDRTMjY0IDExNC43NSAyNjQgMTI4Wk04OCAxMjhWMjU2Qzg4IDI2OS4yNSA5OC43NSAyODAgMTEyIDI4MFMxMzYgMjY5LjI1IDEzNiAyNTZWMTI4QzEzNiAxMTQuNzUgMTI1LjI1IDEwNCAxMTIgMTA0Uzg4IDExNC43NSA4OCAxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
const TruckContainer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M623.596 197.656L570.334 144.395C559.838 133.896 545.6 128 530.756 128H464C446.326 128 432 142.326 432 160V336H256V336.361C242.598 326.232 226.096 320 208 320C181.709 320 158.584 332.854 144 352.438C129.416 332.854 106.293 320 80 320C35.818 320 0 355.816 0 400C0 444.182 35.818 480 80 480V479.387C106.227 479.334 129.445 467.105 144 447.563C162.41 472.285 194.432 486.279 229.25 477.232C254.418 470.693 275.395 451.068 283.627 426.404C288.568 411.6 289.074 397.223 286.387 384H449.613C446.922 397.248 447.434 411.654 452.402 426.486C460.809 451.574 482.4 471.41 508.123 477.604C560.918 490.316 608 450.654 608 400C608 394.52 607.438 389.172 606.387 384H608C625.674 384 640 369.672 640 352V237.264C640 222.408 634.1 208.162 623.596 197.656ZM80 432C62.355 432 48 417.645 48 400S62.355 368 80 368S112 382.355 112 400S97.645 432 80 432ZM208 432C190.355 432 176 417.645 176 400S190.355 368 208 368S240 382.355 240 400S225.645 432 208 432ZM480 176H530.75C532.859 176 534.906 176.859 536.406 178.344L582.062 224H480V176ZM528 432C510.355 432 496 417.645 496 400S510.355 368 528 368S560 382.355 560 400S545.645 432 528 432ZM592 336H576V336.361C562.598 326.232 546.096 320 528 320C509.906 320 493.402 326.232 480 336.361V272H592V336ZM24 304C37.25 304 48 293.25 48 280V88C48 83.594 51.594 80 56 80H344C348.406 80 352 83.594 352 88V280C352 293.25 362.75 304 376 304S400 293.25 400 280V88C400 57.125 374.875 32 344 32H56C25.125 32 0 57.125 0 88V280C0 293.25 10.75 304 24 304ZM176 128V256C176 269.25 186.75 280 200 280S224 269.25 224 256V128C224 114.75 213.25 104 200 104S176 114.75 176 128ZM264 128V256C264 269.25 274.75 280 288 280S312 269.25 312 256V128C312 114.75 301.25 104 288 104S264 114.75 264 128ZM88 128V256C88 269.25 98.75 280 112 280S136 269.25 136 256V128C136 114.75 125.25 104 112 104S88 114.75 88 128Z" />
    </Icon>
);

export default TruckContainer;