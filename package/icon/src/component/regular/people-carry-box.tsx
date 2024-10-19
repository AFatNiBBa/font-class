
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `people-carry-box` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/people-carry-box?s=regular people-carry-box}
 * @preview ![people-carry-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjguMDIgOTUuOTk3QzE1NC41MTggOTUuOTk3IDE3Ni4wMTUgNzQuNDk4IDE3Ni4wMTUgNDcuOTk4UzE1NC41MTggMCAxMjguMDIgMFM4MC4wMjUgMjEuNDk5IDgwLjAyNSA0Ny45OThTMTAxLjUyMyA5NS45OTcgMTI4LjAyIDk1Ljk5N1pNNTExLjk4MiA5NS45OTdDNTM4LjQ3OSA5NS45OTcgNTU5Ljk3NyA3NC40OTggNTU5Ljk3NyA0Ny45OThTNTM4LjQ3OSAwIDUxMS45ODIgMEM0ODUuNDg0IDAgNDYzLjk4NiAyMS40OTkgNDYzLjk4NiA0Ny45OThTNDg1LjQ4NCA5NS45OTcgNTExLjk4MiA5NS45OTdaTTU5OS45NzMgMjUwLjYxN0w1ODAuOTc1IDE3Mi4yNDRDNTc2LjcyNSAxNTQuODcgNTY0LjIyNiAxNDAuMjQ1IDU0Ny40NzggMTMyLjg3MUM1MzAuNjA1IDEyNS40OTYgNTExLjczMiAxMjYuMzcxIDQ5Ni4xMDggMTM1LjI0NkM0NzAuNDg2IDE0OS42MiA0NTUuNzM3IDE4Mi43NDQgNDQ5LjIzOCAyMDEuMzY4TDQzNy4xMTQgMjM2LjExN0M0MzYuNDg5IDIzNy43NDIgNDM1LjM2NCAyMzkuMjQyIDQzMy43MzkgMjQwLjM2N0w0MTUuOTkxIDI1MC40OTJWMTI3Ljk5NkM0MTUuOTkxIDExOS4yNDYgNDA4Ljc0MiAxMTEuOTk2IDM5OS45OTMgMTExLjk5NkgyNDAuMDA5QzIzMS4yNiAxMTEuOTk2IDIyNC4wMTEgMTE5LjI0NiAyMjQuMDExIDEyNy45OTZWMjUwLjQ5MkwyMDYuMjYyIDI0MC4zNjdDMjA0LjYzNyAyMzkuMjQyIDIwMy4zODggMjM3Ljc0MiAyMDIuNzYzIDIzNi4xMTdMMTkwLjYzOSAyMDEuMzY4QzE4NC4xNCAxODIuNzQ0IDE2OS4zOTEgMTQ5LjYyIDE0My43NjkgMTM1LjI0NkMxMjguMTQ1IDEyNi4zNzEgMTA5LjI3MiAxMjUuNDk2IDkyLjM5OSAxMzIuODcxQzc1Ljc3NSAxNDAuMjQ1IDYzLjI3NyAxNTQuODcgNTguOTAyIDE3Mi4yNDRMNDAuMDI5IDI1MC43NDJDMzQuOTA1IDI3MS43NDEgNDIuMDI5IDI5My44NjUgNTguMjc3IDMwOC4yNEwxMjcuMDIgMzY4LjIzOEMxMzMuMjcgMzczLjczOCAxMzcuMjY5IDM4MS4zNjMgMTM3Ljg5NCAzODkuNzM3TDE0NS44OTMgNDg5Ljg1OUMxNDYuNzY4IDQ5OC45ODQgMTU0Ljc2OCA1MTMuMjMzIDE3MS43NjYgNTExLjg1OEMxODQuODkgNTEwLjczMyAxOTQuNzY0IDQ5OS4yMzQgMTkzLjc2NCA0ODYuMTA5TDE4NS4wMTQgMzc2Ljg2M0MxODMuNzY1IDM2MS43MzggMTc2Ljc2NSAzNDcuNzM5IDE2NS4yNjYgMzM3LjczOUwxMTMuMTQ3IDI5Mi4yNDFMMTM3Ljg5NCAyMDAuMTE4QzE0MC42NDQgMjA1LjM2OCAxNTcuNTE3IDI1MS44NjcgMTU3LjUxNyAyNTEuODY3QzE2MS4zOTIgMjYzLjExNiAxNjguNzY2IDI3Mi42MTYgMTgwLjUxNSAyODAuNzQxTDIxNy4zODYgMzAwLjI0QzIyMi4wMTEgMzAyLjYxNSAyMjcuMTM1IDMwMy44NjUgMjMyLjI2IDMwMy44NjVINDA3Ljc0MkM0MTIuOTkyIDMwMy44NjUgNDE4LjExNiAzMDIuNjE1IDQyMi43NDEgMzAwLjI0TDQ1OS42MTIgMjgwLjc0MUM0NzEuMzYxIDI3Mi42MTYgNDc4LjczNSAyNjMuMTE2IDQ4Mi42MDkgMjUxLjg2N0M0ODIuNjA5IDI1MS44NjcgNDk5LjQ4MyAyMDUuMjQzIDUwMi4yMzIgMjAwLjExOEw1MjYuOTggMjkyLjI0MUw0NzQuNzM1IDMzNy43MzlDNDYzLjM2MSAzNDcuNzM5IDQ1Ni4yMzcgMzYxLjczOCA0NTUuMTEyIDM3Ni44NjNMNDQ2LjIzOCA0ODUuOTg1QzQ0NS4yMzggNDk5LjIzNCA0NTUuMTEyIDUxMC43MzMgNDY4LjIzNiA1MTEuNzMzQzQ4NS4yMzQgNTEzLjEwOCA0OTMuMzU4IDQ5OS4xMDkgNDk0LjEwOCA0ODkuNzM0TDUwMi4xMDggMzg5LjYxMkM1MDIuNzMzIDM4MS4yMzggNTA2LjczMiAzNzMuNDg4IDUxMi45ODEgMzY4LjExM0w1ODEuNzI0IDMwOC4yNEM1OTcuOTczIDI5My44NjUgNjA0Ljk3MiAyNzEuNzQxIDU5OS45NzMgMjUwLjYxN1pNMzY3Ljk5NiAyNTUuOTkySDI3Mi4wMDZWMTU5Ljk5NUgzNjcuOTk2VjI1NS45OTJaTTYzOC4yMTkgNDc4Ljg1OUw1ODQuNDc0IDM0OC4xMTRMNTQ2LjIyOCAzODEuNDg4TDU5My43MjMgNDk3LjEwOUM1OTguNzIzIDUwOS4yMzMgNjEyLjU5NiA1MTUuMjMzIDYyNC45NyA1MTAuMjMzQzYzNy4zNDQgNTA1LjIzNCA2NDMuMjE4IDQ5MS4yMzQgNjM4LjIxOSA0NzguODU5Wk0xLjc4MyA0NzguODU5Qy0zLjIxNyA0OTEuMjM0IDIuNjU4IDUwNS4yMzQgMTQuOTA3IDUxMC4yMzNDMjcuMjggNTE1LjIzMyA0MS4yNzkgNTA5LjIzMyA0Ni4yNzggNDk3LjEwOUw5My42NDkgMzgxLjQ4OEw1NS40MDMgMzQ4LjExNEwxLjc4MyA0NzguODU5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PeopleCarryBox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M128.02 95.997C154.518 95.997 176.015 74.498 176.015 47.998S154.518 0 128.02 0S80.025 21.499 80.025 47.998S101.523 95.997 128.02 95.997ZM511.982 95.997C538.479 95.997 559.977 74.498 559.977 47.998S538.479 0 511.982 0C485.484 0 463.986 21.499 463.986 47.998S485.484 95.997 511.982 95.997ZM599.973 250.617L580.975 172.244C576.725 154.87 564.226 140.245 547.478 132.871C530.605 125.496 511.732 126.371 496.108 135.246C470.486 149.62 455.737 182.744 449.238 201.368L437.114 236.117C436.489 237.742 435.364 239.242 433.739 240.367L415.991 250.492V127.996C415.991 119.246 408.742 111.996 399.993 111.996H240.009C231.26 111.996 224.011 119.246 224.011 127.996V250.492L206.262 240.367C204.637 239.242 203.388 237.742 202.763 236.117L190.639 201.368C184.14 182.744 169.391 149.62 143.769 135.246C128.145 126.371 109.272 125.496 92.399 132.871C75.775 140.245 63.277 154.87 58.902 172.244L40.029 250.742C34.905 271.741 42.029 293.865 58.277 308.24L127.02 368.238C133.27 373.738 137.269 381.363 137.894 389.737L145.893 489.859C146.768 498.984 154.768 513.233 171.766 511.858C184.89 510.733 194.764 499.234 193.764 486.109L185.014 376.863C183.765 361.738 176.765 347.739 165.266 337.739L113.147 292.241L137.894 200.118C140.644 205.368 157.517 251.867 157.517 251.867C161.392 263.116 168.766 272.616 180.515 280.741L217.386 300.24C222.011 302.615 227.135 303.865 232.26 303.865H407.742C412.992 303.865 418.116 302.615 422.741 300.24L459.612 280.741C471.361 272.616 478.735 263.116 482.609 251.867C482.609 251.867 499.483 205.243 502.232 200.118L526.98 292.241L474.735 337.739C463.361 347.739 456.237 361.738 455.112 376.863L446.238 485.985C445.238 499.234 455.112 510.733 468.236 511.733C485.234 513.108 493.358 499.109 494.108 489.734L502.108 389.612C502.733 381.238 506.732 373.488 512.981 368.113L581.724 308.24C597.973 293.865 604.972 271.741 599.973 250.617ZM367.996 255.992H272.006V159.995H367.996V255.992ZM638.219 478.859L584.474 348.114L546.228 381.488L593.723 497.109C598.723 509.233 612.596 515.233 624.97 510.233C637.344 505.234 643.218 491.234 638.219 478.859ZM1.783 478.859C-3.217 491.234 2.658 505.234 14.907 510.233C27.28 515.233 41.279 509.233 46.278 497.109L93.649 381.488L55.403 348.114L1.783 478.859Z" />
        </Icon>
    </>
}