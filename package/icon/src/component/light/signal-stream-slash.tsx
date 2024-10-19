
import { Icon } from "../../index";

/**
 * A component that renders the `signal-stream-slash` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-stream-slash?s=light signal-stream-slash}
 * @preview ![signal-stream-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzMuOTI1IDQ4My40MzhMMjUuOTIxIDMuNDJDMTguOTg0IC0yLjAzMyA4LjkyMSAtMC44MyAzLjQzNyA2LjA2MUMtMi4wMzIgMTIuOTk4IC0wLjg0NSAyMy4wNjEgNi4wNzcgMjguNTQ1TDYxNC4wODEgNTA4LjU2MkM2MTcuMDE5IDUxMC44NzUgNjIwLjUxOSA1MTIgNjIzLjk4NyA1MTJDNjI4LjcyMiA1MTIgNjMzLjQwOSA1MDkuOTA2IDYzNi41NjYgNTA1LjkyMkM2NDIuMDM0IDQ5OC45ODQgNjQwLjg0NyA0ODguOTIyIDYzMy45MjUgNDgzLjQzOFpNNTc2LjAwMSAyNTYuMDA2QzU3Ni4wMDEgMjkxLjkzOSA1NjcuNjkxIDMyNi41MjEgNTUyLjQxMSAzNTcuOTFMNTc4LjE2OSAzNzguMjQ2QzU5Ny41OTcgMzQwLjkyMiA2MDguMDAxIDI5OS4yNjggNjA4LjAwMSAyNTYuMDA2QzYwOC4wMDEgMTg1LjMyIDU4MC41MTcgMTE4Ljc5MSA1MzAuNjEgNjguNzNDNTI0LjM2IDYyLjQxOCA1MTQuMjM1IDYyLjQ0OSA1MDcuOTg1IDY4LjY2OEM1MDEuNzM1IDc0LjkxOCA1MDEuNzA0IDg1LjA0MSA1MDcuOTU0IDkxLjI5MUM1NTEuODI5IDEzNS4zNTQgNTc2LjAwMSAxOTMuODIgNTc2LjAwMSAyNTYuMDA2Wk00ODAuMDAxIDI1Ni4wMDZDNDgwLjAwMSAyNjkuNzIzIDQ3Ny41MDEgMjgyLjk5MiA0NzMuODY0IDI5NS44OTZMNTAwLjg0NSAzMTcuMTk3QzUwNy45MTUgMjk3Ljc2IDUxMi4wMDEgMjc3LjE4OSA1MTIuMDAxIDI1Ni4wMDZDNTEyLjAwMSAyMTAuMDY4IDQ5NC42NDIgMTY2LjM4MyA0NjMuMTI2IDEzMy4wMUM0NTcuMDY0IDEyNi42MzUgNDQ2Ljk3IDEyNi4yOTEgNDQwLjUxNyAxMzIuMzg1QzQzNC4wOTUgMTM4LjQ0NyA0MzMuNzk4IDE0OC41NyA0MzkuODc2IDE1NS4wMDhDNDY1Ljc1MSAxODIuMzgzIDQ4MC4wMDEgMjE4LjI1NiA0ODAuMDAxIDI1Ni4wMDZaTTE2MC4wMDEgMjU2LjAwNkMxNjAuMDAxIDI0Mi4yNzUgMTYyLjUwMyAyMjguOTk0IDE2Ni4xNDggMjE2LjA4TDEzOS4xNjkgMTk0Ljc3OUMxMzIuMDkxIDIxNC4yMjcgMTI4LjAwMSAyMzQuODA5IDEyOC4wMDEgMjU2LjAwNkMxMjguMDAxIDMwMS45NDEgMTQ1LjM2IDM0NS42MjcgMTc2Ljg3NiAzNzkuMDAyQzE4MC4wMTcgMzgyLjMxNCAxODQuMjUxIDM4NC4wMDIgMTg4LjUwMSAzODQuMDAyQzE5Mi40MzkgMzg0LjAwMiAxOTYuMzkyIDM4Mi41NjQgMTk5LjQ4NSAzNzkuNjI3QzIwNS45MDcgMzczLjU2NCAyMDYuMjA0IDM2My40MzkgMjAwLjEyNiAzNTcuMDAyQzE3NC4yNTEgMzI5LjYyOSAxNjAuMDAxIDI5My43NTQgMTYwLjAwMSAyNTYuMDA2Wk02NC4wMDEgMjU2LjAwNkM2NC4wMDEgMjIwLjA2MSA3Mi4zMTYgMTg1LjQ2NyA4Ny42MDUgMTU0LjA3TDYxLjg0NyAxMzMuNzM0QzQyLjQwNyAxNzEuMDY2IDMyLjAwMSAyMTIuNzMyIDMyLjAwMSAyNTYuMDA2QzMyLjAwMSAzMjYuNjkxIDU5LjQ4NSAzOTMuMjIxIDEwOS4zOTIgNDQzLjI4MUMxMTIuNTE3IDQ0Ni40MzggMTE2LjYxIDQ0OCAxMjAuNzIgNDQ4QzEyNC43OTggNDQ4IDEyOC44OTIgNDQ2LjQzOCAxMzIuMDE3IDQ0My4zNDRDMTM4LjI2NyA0MzcuMDk0IDEzOC4yOTggNDI2Ljk2OSAxMzIuMDQ4IDQyMC43MTlDODguMTczIDM3Ni42NTggNjQuMDAxIDMxOC4xOTEgNjQuMDAxIDI1Ni4wMDZaIi8+PC9zdmc+|width=32|height=32)
 */
const SignalStreamSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M633.925 483.438L25.921 3.42C18.984 -2.033 8.921 -0.83 3.437 6.061C-2.032 12.998 -0.845 23.061 6.077 28.545L614.081 508.562C617.019 510.875 620.519 512 623.987 512C628.722 512 633.409 509.906 636.566 505.922C642.034 498.984 640.847 488.922 633.925 483.438ZM576.001 256.006C576.001 291.939 567.691 326.521 552.411 357.91L578.169 378.246C597.597 340.922 608.001 299.268 608.001 256.006C608.001 185.32 580.517 118.791 530.61 68.73C524.36 62.418 514.235 62.449 507.985 68.668C501.735 74.918 501.704 85.041 507.954 91.291C551.829 135.354 576.001 193.82 576.001 256.006ZM480.001 256.006C480.001 269.723 477.501 282.992 473.864 295.896L500.845 317.197C507.915 297.76 512.001 277.189 512.001 256.006C512.001 210.068 494.642 166.383 463.126 133.01C457.064 126.635 446.97 126.291 440.517 132.385C434.095 138.447 433.798 148.57 439.876 155.008C465.751 182.383 480.001 218.256 480.001 256.006ZM160.001 256.006C160.001 242.275 162.503 228.994 166.148 216.08L139.169 194.779C132.091 214.227 128.001 234.809 128.001 256.006C128.001 301.941 145.36 345.627 176.876 379.002C180.017 382.314 184.251 384.002 188.501 384.002C192.439 384.002 196.392 382.564 199.485 379.627C205.907 373.564 206.204 363.439 200.126 357.002C174.251 329.629 160.001 293.754 160.001 256.006ZM64.001 256.006C64.001 220.061 72.316 185.467 87.605 154.07L61.847 133.734C42.407 171.066 32.001 212.732 32.001 256.006C32.001 326.691 59.485 393.221 109.392 443.281C112.517 446.438 116.61 448 120.72 448C124.798 448 128.892 446.438 132.017 443.344C138.267 437.094 138.298 426.969 132.048 420.719C88.173 376.658 64.001 318.191 64.001 256.006Z" />
    </Icon>
);

export default SignalStreamSlash;