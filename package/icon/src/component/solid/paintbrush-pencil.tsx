
import { Icon } from "../../index";

/**
 * A component that renders the `paintbrush-pencil` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush-pencil?s=solid paintbrush-pencil}
 * @preview ![paintbrush-pencil](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDMuNTY0IDI5MC4xODlDMTk3LjI0OCAyODguOTY3IDE5MC44NTcgMjg4LjAwOCAxODQuMjc3IDI4OEMxODQuMjQ2IDI4OCAxODQuMjQ2IDI4OCAxODQuMjQ2IDI4OEMxMjYuNzUgMjg4IDgwLjU3NSAzMzQuNTEgODAuNTc1IDM5MS44NjJDODAuNTc1IDM5OS4wNjEgODEuMTUxIDQwMC44MTUgODEuMTUxIDQwNS4wNkM4MS4xNTEgNDI5LjAwOCA2Mi4zMDUgNDQ4IDMyIDQ0OEMxNC4zMjYgNDQ4IDAgNDYyLjMyNiAwIDQ4MEMwIDQ5Ny42NzIgMTQuMzI2IDUxMiAzMiA1MTJDMzIgNTEyIDYwLjEyNSA1MTIgODUuNzE1IDUxMkMyMjEuNzczIDUxMiAyODcuNDgxIDQ2Ny44NzkgMjg3LjQ4MSAzOTIuMzY5QzI4Ny40ODEgMzg1LjYxMiAyODYuODQgMzc4Ljg1IDI4NS41NjQgMzcyLjE4OUwyMDMuNTY0IDI5MC4xODlaTTkyLjA5IDE3My4yNzFMOTIuMDg0IDE3My4yNzlMMTYxLjA3MiAyNDIuMjcxQzE2OC43MDkgMjQxLjEwNCAxNzYuMzc1IDI0MCAxODQuMjUgMjQwQzE4NS44MTIgMjQwIDE4Ny4zNDQgMjQwLjAzMSAxODguODQ0IDI0MC4wOTRMMjg3LjA2OCAxNDEuODY5TDIwNS4yNyA2MC4wOEwyMDUuMjc3IDYwLjA3MkwxNTkuMjc3IDE0LjA3NEMxNDkuODg4IDQuNjkxIDEzNy41OTEgMCAxMjUuMjk1IDBTMTAwLjcwMSA0LjY5MSA5MS4zMTEgMTQuMDc0TDQ2LjA2MiA1OS4zMjJDMzYuNjg4IDY4LjY5NyAzMiA4MC45OSAzMiA5My4yODNTMzYuNjg4IDExNy44NjggNDYuMDYyIDEyNy4yNDJMOTIuMDkgMTczLjI3MVpNNTc2IDU2QzU3NiAyNi4xNTcgNTUxLjk3MSAwIDUyMCAwQzUwNS42NzIgMCA0OTEuMzQ0IDUuNDY5IDQ4MC40MDYgMTYuNDA2TDIyNy43MTkgMjY5LjA5NEwzMDYuOTA2IDM0OC4yODFMNTU5LjU5NCA5NS41OTRDNTcwLjUzMSA4NC42NTYgNTc2IDcwLjMyOCA1NzYgNTZaTTUxNy43NCAzNzIuNTJMNDM0LjEzNyAyODguOTI2TDMzNS40MDYgMzg3LjY1NkMzMzUuNDQxIDM4OC44MTEgMzM1LjQ1OCAzODkuOTYzIDMzNS40NTggMzkxLjExNEMzMzUuNDU4IDM5OS4wNjMgMzM0LjY1OSA0MDYuOTMgMzMzLjUwOCA0MTQuNzE3TDQwNC40NjkgNDg1LjY4MkM0MDkuMTE5IDQ5MC4zMzIgNDE1LjA5MiA0OTMuNDM2IDQyMS41NyA0OTQuNTdMNTE5LjA5NiA1MTEuNjcyQzUyMC4zNTkgNTExLjg5MyA1MjEuNjA4IDUxMiA1MjIuODM0IDUxMkM1MzQuNDUgNTEyIDU0NCA1MDIuNDUxIDU0NCA0OTAuODM2QzU0NCA0ODkuNjE0IDU0My44OTQgNDg4LjM2OSA1NDMuNjc0IDQ4Ny4xMDlMNTI2LjYzNSAzODkuNjM5QzUyNS41MDIgMzgzLjE1MiA1MjIuMzk1IDM3Ny4xNzYgNTE3Ljc0IDM3Mi41MlogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
const PaintbrushPencil: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M203.564 290.189C197.248 288.967 190.857 288.008 184.277 288C184.246 288 184.246 288 184.246 288C126.75 288 80.575 334.51 80.575 391.862C80.575 399.061 81.151 400.815 81.151 405.06C81.151 429.008 62.305 448 32 448C14.326 448 0 462.326 0 480C0 497.672 14.326 512 32 512C32 512 60.125 512 85.715 512C221.773 512 287.481 467.879 287.481 392.369C287.481 385.612 286.84 378.85 285.564 372.189L203.564 290.189ZM92.09 173.271L92.084 173.279L161.072 242.271C168.709 241.104 176.375 240 184.25 240C185.812 240 187.344 240.031 188.844 240.094L287.068 141.869L205.27 60.08L205.277 60.072L159.277 14.074C149.888 4.691 137.591 0 125.295 0S100.701 4.691 91.311 14.074L46.062 59.322C36.688 68.697 32 80.99 32 93.283S36.688 117.868 46.062 127.242L92.09 173.271ZM576 56C576 26.157 551.971 0 520 0C505.672 0 491.344 5.469 480.406 16.406L227.719 269.094L306.906 348.281L559.594 95.594C570.531 84.656 576 70.328 576 56ZM517.74 372.52L434.137 288.926L335.406 387.656C335.441 388.811 335.458 389.963 335.458 391.114C335.458 399.063 334.659 406.93 333.508 414.717L404.469 485.682C409.119 490.332 415.092 493.436 421.57 494.57L519.096 511.672C520.359 511.893 521.608 512 522.834 512C534.45 512 544 502.451 544 490.836C544 489.614 543.894 488.369 543.674 487.109L526.635 389.639C525.502 383.152 522.395 377.176 517.74 372.52Z " />
    </Icon>
);

export default PaintbrushPencil;