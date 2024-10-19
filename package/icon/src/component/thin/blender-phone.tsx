
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `blender-phone` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/blender-phone?s=thin blender-phone}
 * @preview ![blender-phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAuMDAyIDM4NEgyMjQuMDA4QzE4OC42NjMgMzg0IDE2MC4wMSA0MTIuNjU0IDE2MC4wMSA0NDhWNDgwQzE2MC4wMSA0OTcuNjc0IDE3NC4zMzcgNTEyIDE5Mi4wMDkgNTEySDUxMi4wMDFDNTI5LjY3NCA1MTIgNTQ0IDQ5Ny42NzQgNTQ0IDQ4MFY0NDhDNTQ0IDQxMi42NTQgNTE1LjM0OCAzODQgNDgwLjAwMiAzODRaTTUyOCA0ODBDNTI4IDQ4OC44MjIgNTIwLjgyMyA0OTYgNTEyLjAwMSA0OTZIMTkyLjAwOUMxODMuMTg3IDQ5NiAxNzYuMDA5IDQ4OC44MjIgMTc2LjAwOSA0ODBWNDQ4QzE3Ni4wMDkgNDIxLjUzMyAxOTcuNTQyIDQwMCAyMjQuMDA4IDQwMEg0ODAuMDAyQzUwNi40NjggNDAwIDUyOCA0MjEuNTMzIDUyOCA0NDhWNDgwWk0yMjQuNzQyIDM1OS45NjlDMjI5LjE0OSAzNTkuNTYyIDIzMi4zODMgMzU1LjY1NiAyMzEuOTc3IDM1MS4yNjZMMjAwLjc5IDE2SDU1Ny43MDNMNTQxLjMzIDgwSDM5Mi4wMDRDMzg3LjU4MiA4MCAzODQuMDA0IDgzLjU3OCAzODQuMDA0IDg4UzM4Ny41ODIgOTYgMzkyLjAwNCA5Nkg1MzcuMjM2TDUxNi43NyAxNzZIMzkyLjAwNEMzODcuNTgyIDE3NiAzODQuMDA0IDE3OS41NzggMzg0LjAwNCAxODRTMzg3LjU4MiAxOTIgMzkyLjAwNCAxOTJINTEyLjY3Nkw0OTIuMjEgMjcySDM5Mi4wMDRDMzg3LjU4MiAyNzIgMzg0LjAwNCAyNzUuNTc4IDM4NC4wMDQgMjgwUzM4Ny41ODIgMjg4IDM5Mi4wMDQgMjg4SDQ4OC4xMTdMNDcyLjI1MiAzNTAuMDE2QzQ3MS4xNTggMzU0LjI5NyA0NzMuNzM2IDM1OC42NTYgNDc4LjAxNyAzNTkuNzVDNDgyLjYyMSAzNjAuOTI4IDQ4Ni43NDMgMzU3LjkzMSA0ODcuNzUxIDM1My45ODRMNTc1Ljc0OSA5Ljk4NEM1NzcuMDM0IDQuOTQyIDU3My4yMjEgMCA1NjcuOTk5IDBIMTkyLjAwOUMxODUuOTI0IDAgMTgzLjc2IDUuNjQ1IDE4NC4wNCA4LjczNEwyMTYuMDQgMzUyLjczNEMyMTYuNDQ2IDM1Ny4xNDEgMjIwLjQ5MyAzNjAuMzI4IDIyNC43NDIgMzU5Ljk2OVpNMTY3LjQ0NyAzMjYuMDMxTDE0Mi43OTEgMjY1LjQwNkMxMzguODA3IDI1NS42NDEgMTI4LjY5OCAyNDkuNjcyIDExOC4wNzMgMjUwLjY0MUw4MS4yMzEgMjU0LjIzNEM2Ny44MjUgMjEzLjkwNiA2Ny44MjUgMTcwLjIxOSA4MS4yMzEgMTI5LjkwNkwxMTguMDU4IDEzMy40ODRDMTI4LjU0MiAxMzQuNjg4IDEzOC44MjMgMTI4LjQ4NCAxNDIuNzkxIDExOC43MzRMMTY3LjQgNTguMjM0QzE3MS45NDcgNDcuNTMxIDE2Ny45NDcgMzUuMjM0IDE1Ny44ODUgMjlMMTIwLjI2MSA1Ljg3NUMxMDMuNDY0IC00LjM5MSA4MS41MjcgLTAuODU5IDY4LjEyMSAxNC4yMDNDLTIzLjQ1NCAxMTYuNzAzIC0yMi42MTEgMjcwLjY1NiA3MC4xMDYgMzcyLjMxM0M3Ny4xODQgMzgwIDg3Ljk5NiAzODQuMDYyIDk4Ljg4NiAzODQuMDYyQzEwNi4zMjQgMzg0LjA2MiAxMTMuNzkyIDM4Mi4xNzIgMTIwLjE1MSAzNzguMjY2TDE1Ny45MTYgMzU1LjEyNUMxNjcuODA2IDM0OSAxNzEuODIyIDMzNi43NSAxNjcuNDQ3IDMyNi4wMzFaTTE0OS41MjYgMzQxLjVMMTExLjc5MiAzNjQuNjI1QzEwMi43NjEgMzcwLjE3MiA4OC41MjcgMzY4LjY4NyA4MS45MDIgMzYxLjVDLTUuMjUyIDI2NS45NTMgLTYuMDQ5IDEyMS4yMzQgODAuMDc0IDI0Ljg0NEM4OC42ODUgMTUuMTU3IDEwMi4xNTUgMTMuNTg3IDExMS45MTcgMTkuNTE2TDE0OS40NzkgNDIuNjA5QzE1Mi43NzYgNDQuNjU2IDE1NC4xMTkgNDguNTk0IDE1Mi42MzUgNTIuMDk0TDEyNy45NzkgMTEyLjY4OEMxMjYuNjUxIDExNS45MjIgMTIzLjA0MiAxMTcuOTUzIDExOS42MzYgMTE3LjU2Mkw3MC4zODcgMTEyLjc4MUM2My44NjYgMTMwLjQ0MSAzOS45MTQgMTg4LjgzNSA3MC4zODcgMjcxLjM1OUwxMTkuNjUxIDI2Ni41NjNDMTIzLjMzOSAyNjYuMzc1IDEyNi42NjcgMjY4LjIxOSAxMjcuOTc5IDI3MS40NTNMMTUyLjYzNSAzMzIuMDYzQzE1NC4wNDEgMzM1LjU0NyAxNTIuNzI5IDMzOS41MTYgMTQ5LjUyNiAzNDEuNVpNMzUyLjAwNSA0MTZDMzM0LjMzMyA0MTYgMzIwLjAwNiA0MzAuMzI2IDMyMC4wMDYgNDQ4UzMzNC4zMzMgNDgwIDM1Mi4wMDUgNDgwQzM2OS42NzggNDgwIDM4NC4wMDQgNDY1LjY3NCAzODQuMDA0IDQ0OFMzNjkuNjc4IDQxNiAzNTIuMDA1IDQxNlpNMzUyLjAwNSA0NjRDMzQzLjE4MyA0NjQgMzM2LjAwNSA0NTYuODIyIDMzNi4wMDUgNDQ4UzM0My4xODMgNDMyIDM1Mi4wMDUgNDMyQzM2MC44MjcgNDMyIDM2OC4wMDQgNDM5LjE3OCAzNjguMDA0IDQ0OFMzNjAuODI3IDQ2NCAzNTIuMDA1IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BlenderPhone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480.002 384H224.008C188.663 384 160.01 412.654 160.01 448V480C160.01 497.674 174.337 512 192.009 512H512.001C529.674 512 544 497.674 544 480V448C544 412.654 515.348 384 480.002 384ZM528 480C528 488.822 520.823 496 512.001 496H192.009C183.187 496 176.009 488.822 176.009 480V448C176.009 421.533 197.542 400 224.008 400H480.002C506.468 400 528 421.533 528 448V480ZM224.742 359.969C229.149 359.562 232.383 355.656 231.977 351.266L200.79 16H557.703L541.33 80H392.004C387.582 80 384.004 83.578 384.004 88S387.582 96 392.004 96H537.236L516.77 176H392.004C387.582 176 384.004 179.578 384.004 184S387.582 192 392.004 192H512.676L492.21 272H392.004C387.582 272 384.004 275.578 384.004 280S387.582 288 392.004 288H488.117L472.252 350.016C471.158 354.297 473.736 358.656 478.017 359.75C482.621 360.928 486.743 357.931 487.751 353.984L575.749 9.984C577.034 4.942 573.221 0 567.999 0H192.009C185.924 0 183.76 5.645 184.04 8.734L216.04 352.734C216.446 357.141 220.493 360.328 224.742 359.969ZM167.447 326.031L142.791 265.406C138.807 255.641 128.698 249.672 118.073 250.641L81.231 254.234C67.825 213.906 67.825 170.219 81.231 129.906L118.058 133.484C128.542 134.688 138.823 128.484 142.791 118.734L167.4 58.234C171.947 47.531 167.947 35.234 157.885 29L120.261 5.875C103.464 -4.391 81.527 -0.859 68.121 14.203C-23.454 116.703 -22.611 270.656 70.106 372.313C77.184 380 87.996 384.062 98.886 384.062C106.324 384.062 113.792 382.172 120.151 378.266L157.916 355.125C167.806 349 171.822 336.75 167.447 326.031ZM149.526 341.5L111.792 364.625C102.761 370.172 88.527 368.687 81.902 361.5C-5.252 265.953 -6.049 121.234 80.074 24.844C88.685 15.157 102.155 13.587 111.917 19.516L149.479 42.609C152.776 44.656 154.119 48.594 152.635 52.094L127.979 112.688C126.651 115.922 123.042 117.953 119.636 117.562L70.387 112.781C63.866 130.441 39.914 188.835 70.387 271.359L119.651 266.563C123.339 266.375 126.667 268.219 127.979 271.453L152.635 332.063C154.041 335.547 152.729 339.516 149.526 341.5ZM352.005 416C334.333 416 320.006 430.326 320.006 448S334.333 480 352.005 480C369.678 480 384.004 465.674 384.004 448S369.678 416 352.005 416ZM352.005 464C343.183 464 336.005 456.822 336.005 448S343.183 432 352.005 432C360.827 432 368.004 439.178 368.004 448S360.827 464 352.005 464Z" />
        </Icon>
    </>
}