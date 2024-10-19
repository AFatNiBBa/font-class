
import { Icon } from "../../index";

/**
 * A component that renders the `scribble` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scribble?s=thin scribble}
 * @preview ![scribble](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTEuMjQ2IDQ3Ni4yODNDNTEzLjEyMSA0ODAuMjgzIDUxMS4zNzEgNDg1LjA0OSA1MDcuMzcxIDQ4Ni45MDhMNDcyLjM4OSA1MDMuMTg3QzQ2MC4wNzYgNTA5LjM0NCA0NDcuODExIDUxMiA0MzYuMTM5IDUxMkM0MDguNDk4IDUxMiAzODQuMTM5IDQ5Ny4xMDkgMzY5LjkzNiA0NzguNTE4QzM0NS42MjMgNDQ2LjY5MSAzNDcuNjM5IDQwNi4zMDUgMzc1LjA2MSAzNzUuNjA0TDQ4MS45NTEgMjUwLjY1OEM1MDAuNjIzIDIzMC44MzIgNTAwLjU3NiAyMDAuMjQgNDgyLjA5MiAxODAuNzU4QzQ3Mi41NjEgMTcwLjcyNyA0NTkuNzAxIDE2NS4xMTcgNDQ1Ljg1OCAxNjQuOTYxQzQzMS40MDUgMTY1LjUwOCA0MTkuMDE0IDE3MC4xMTcgNDA5LjI4IDE3OS45M0wxNDguODEzIDQ1Ni42OTFDMTM1LjkwNiA0NjkuNjQzIDExOS4wMzEgNDc2LjY3NCAxMDAuODYgNDc2LjMxNEM4Mi43ODEgNDc2LjA4IDY1Ljk4NSA0NjguNzIxIDUzLjU2MyA0NTUuNTk4QzI5LjAzMSA0MjkuNjc4IDI5LjM0NCAzODkuMzUyIDU0LjI1IDM2My44MDdMMjg0LjA5MiAxMjguMTg0QzMwNy44NDIgMTAxLjc3OSAzMDYuNzQ4IDYxLjA2MiAyODEuMzg5IDM1LjczNkMyNjguMjY0IDIyLjYyNyAyNTAuNjcgMTUuMjM4IDIzMi4yNDggMTYuMDJDMjEzLjY3IDE2LjQyNiAxOTYuNTMgMjQuMTg5IDE4My45ODUgMzcuODc3TDEzLjYxIDIwNS40MTJDMTAuNDUzIDIwOC41MDYgNS4zOTEgMjA4LjQ3NSAyLjI5NyAyMDUuMzE4Uy0wLjc2NSAxOTcuMSAyLjM5MSAxOTQuMDA2TDE3Mi40ODUgMjYuNzY4QzE4Ny43MTkgMTAuMTI5IDIwOC45MiAwLjUyIDIzMS44ODkgMC4wMkMyNTUuMTA4IC0wLjQ4IDI3Ni40NTEgOC4xNzYgMjkyLjcwMSAyNC40MjRDMzI0LjA3NiA1NS43NjYgMzI1LjQyIDEwNi4xMzcgMjk1Ljc4IDEzOS4xMDRMNjUuNzE5IDM3NC45NjNDNDYuODEzIDM5NC4zNTIgNDYuNTc4IDQyNC45NDMgNjUuMTg4IDQ0NC41OThDNzQuNjEgNDU0LjU1MSA4Ny4zNiA0NjAuMTI5IDEwMS4wNjMgNDYwLjMxNkMxMTQuMjM1IDQ2MC4xMTMgMTI3LjY1NiA0NTUuMjcgMTM3LjMyOCA0NDUuNTUxTDM5Ny43OCAxNjguODA1QzQxMC43OCAxNTUuNzQ0IDQyOC4zNDIgMTQ4LjUyNSA0NDYuMDQ1IDE0OC45NjNDNDY0LjI0OCAxNDkuMTY2IDQ4MS4xNyAxNTYuNTU3IDQ5My42ODYgMTY5Ljc1OEM1MTguMDEyIDE5NS4zODEgNTE4LjA5IDIzNS42MjkgNDkzLjg1OCAyNjEuMzQ2TDM4Ny4xMDggMzg2LjEzM0MzNjAuMjAxIDQxNi4yNCAzNjcuMTg2IDQ0OC41NTEgMzgyLjY1NSA0NjguNzk5QzM5OC45ODMgNDkwLjE3NCA0MzEuOTA1IDUwNS41OTQgNDY1LjQzNiA0ODguNzgzTDUwMC42MjMgNDcyLjQwOEM1MDQuNjIzIDQ3MC41MzMgNTA5LjM3MSA0NzIuMjY4IDUxMS4yNDYgNDc2LjI4M1oiLz48L3N2Zz4=|width=32|height=32)
 */
const Scribble: typeof Icon = x => (
    <Icon {...x}>
        <path d="M511.246 476.283C513.121 480.283 511.371 485.049 507.371 486.908L472.389 503.187C460.076 509.344 447.811 512 436.139 512C408.498 512 384.139 497.109 369.936 478.518C345.623 446.691 347.639 406.305 375.061 375.604L481.951 250.658C500.623 230.832 500.576 200.24 482.092 180.758C472.561 170.727 459.701 165.117 445.858 164.961C431.405 165.508 419.014 170.117 409.28 179.93L148.813 456.691C135.906 469.643 119.031 476.674 100.86 476.314C82.781 476.08 65.985 468.721 53.563 455.598C29.031 429.678 29.344 389.352 54.25 363.807L284.092 128.184C307.842 101.779 306.748 61.062 281.389 35.736C268.264 22.627 250.67 15.238 232.248 16.02C213.67 16.426 196.53 24.189 183.985 37.877L13.61 205.412C10.453 208.506 5.391 208.475 2.297 205.318S-0.765 197.1 2.391 194.006L172.485 26.768C187.719 10.129 208.92 0.52 231.889 0.02C255.108 -0.48 276.451 8.176 292.701 24.424C324.076 55.766 325.42 106.137 295.78 139.104L65.719 374.963C46.813 394.352 46.578 424.943 65.188 444.598C74.61 454.551 87.36 460.129 101.063 460.316C114.235 460.113 127.656 455.27 137.328 445.551L397.78 168.805C410.78 155.744 428.342 148.525 446.045 148.963C464.248 149.166 481.17 156.557 493.686 169.758C518.012 195.381 518.09 235.629 493.858 261.346L387.108 386.133C360.201 416.24 367.186 448.551 382.655 468.799C398.983 490.174 431.905 505.594 465.436 488.783L500.623 472.408C504.623 470.533 509.371 472.268 511.246 476.283Z" />
    </Icon>
);

export default Scribble;