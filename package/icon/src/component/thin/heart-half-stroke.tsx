
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=thin heart-half-stroke}
 * @preview ![heart-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjIuOTcxIDYyLjg1OUM0MzguNzc2IDQxLjkyMiA0MDguODY5IDMyIDM3OC43MjMgMzJDMzQxLjIzNSAzMiAzMDMuMzc1IDQ3LjM0NCAyNzUuNjk0IDc1LjkyMkwyNTYuMDA2IDk2LjI1TDIzNi4zMTkgNzUuOTIyQzIwOC42MzEgNDcuMzQgMTcwLjc4MSAzMiAxMzMuMjg5IDMyQzEwMy4xNDkgMzIgNzMuMjMxIDQxLjkyMiA0OS4wNDEgNjIuODU5Qy0xMy4xMDMgMTE2LjY1MiAtMTYuMTk3IDIxMi41MTYgMzkuODIyIDI3MC40ODRMMjMyLjk3NSA0NzAuMTk1QzIzOS4yOTUgNDc2LjczIDI0Ny42MjcgNDgwIDI1NS45NTkgNDgwQzI2NC4yOTUgNDgwIDI3Mi42MjcgNDc2LjczIDI3OC45NDcgNDcwLjE5NUw0NzIuMDk2IDI3MC40ODRDNTI4LjIxMSAyMTIuNTE2IDUyNS4xMTcgMTE2LjY0OCA0NjIuOTcxIDYyLjg1OVpNMjQ4IDQ2MS41MTZDMjQ2Ljc3NiA0NjAuNzgzIDI0NS41MDIgNDYwLjEzMyAyNDQuNDc1IDQ1OS4wN0w1MS4zMjYgMjU5LjM2N0MyNy4zOTcgMjM0LjYwMiAxNC41NjkgMjAwLjI5NyAxNi4xMjcgMTY1LjIzOEMxNy43MDUgMTI5Ljg3NSAzMy4xMTEgOTcuODEyIDU5LjUxNCA3NC45NjFDNzkuODg3IDU3LjMyIDEwNS40MDMgNDggMTMzLjI4OSA0OEMxNjcuNDIyIDQ4IDIwMC43ODMgNjIuMjM0IDIyNC44MjYgODcuMDU1QzI0My4zNSAxMDYuMTc2IDI0Mi4wNyAxMDQuODU3IDI0OCAxMTAuOTc5VjQ2MS41MTZaTTQ2MC41OTYgMjU5LjM1OUwyNjcuNDQ3IDQ1OS4wN0MyNjYuNDQyIDQ2MC4xMTEgMjY1LjE5NCA0NjAuNzQgMjY0IDQ2MS40NjNWMTEwLjk5QzI2OS44MDcgMTA0Ljk5NiAyNjkuMzYgMTA1LjQ1OSAyODcuMTg0IDg3LjA1NUMzMTEuMjI3IDYyLjIzNCAzNDQuNTk0IDQ4IDM3OC43MjcgNDhDNDA2LjYxMSA0OCA0MzIuMTIzIDU3LjMyIDQ1Mi40OTggNzQuOTU3QzQ3OC45MDggOTcuODEyIDQ5NC4zMTUgMTI5Ljg4MyA0OTUuODczIDE2NS4yNDZDNDk3LjQyIDIwMC4yOTcgNDg0LjU2NSAyMzQuNjAyIDQ2MC41OTYgMjU5LjM1OVoiLz48L3N2Zz4=|width=32|height=32)
 */
const HeartHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M462.971 62.859C438.776 41.922 408.869 32 378.723 32C341.235 32 303.375 47.344 275.694 75.922L256.006 96.25L236.319 75.922C208.631 47.34 170.781 32 133.289 32C103.149 32 73.231 41.922 49.041 62.859C-13.103 116.652 -16.197 212.516 39.822 270.484L232.975 470.195C239.295 476.73 247.627 480 255.959 480C264.295 480 272.627 476.73 278.947 470.195L472.096 270.484C528.211 212.516 525.117 116.648 462.971 62.859ZM248 461.516C246.776 460.783 245.502 460.133 244.475 459.07L51.326 259.367C27.397 234.602 14.569 200.297 16.127 165.238C17.705 129.875 33.111 97.812 59.514 74.961C79.887 57.32 105.403 48 133.289 48C167.422 48 200.783 62.234 224.826 87.055C243.35 106.176 242.07 104.857 248 110.979V461.516ZM460.596 259.359L267.447 459.07C266.442 460.111 265.194 460.74 264 461.463V110.99C269.807 104.996 269.36 105.459 287.184 87.055C311.227 62.234 344.594 48 378.727 48C406.611 48 432.123 57.32 452.498 74.957C478.908 97.812 494.315 129.883 495.873 165.246C497.42 200.297 484.565 234.602 460.596 259.359Z" />
    </Icon>
);

export default HeartHalfStroke;