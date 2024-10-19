
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screwdriver-wrench` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver-wrench?s=duotone screwdriver-wrench}
 * @preview ![screwdriver-wrench](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwOC4xMDQgMzA3LjA0N0wxNDguODg5IDI0Ny44ODdMMCAzOTYuNzc1Qy0yNi4zNjcgNDIzLjE0MyAtMjYuMzY3IDQ2NS44NTcgMCA0OTIuMjI1QzEzLjE4NCA1MDUuNDA4IDMwLjQzOSA1MTIgNDcuNzI1IDUxMlM4Mi4yNjYgNTA1LjQwOCA5NS40NDkgNDkyLjIyNUwyMTQuNTU5IDM3My4xMTVDMjA1LjY5MSAzNTIuMzQ0IDIwMi44MTYgMzI5LjM1NCAyMDguMTA0IDMwNy4wNDdaTTQ0LjIyNSA0NzJDMzAuOTcxIDQ3MiAyMC4yMjUgNDYxLjI1NCAyMC4yMjUgNDQ4QzIwLjIyNSA0MzQuNzQ0IDMwLjk3MSA0MjQgNDQuMjI1IDQyNFM2OC4yMjUgNDM0Ljc0NCA2OC4yMjUgNDQ4QzY4LjIyNSA0NjEuMjU0IDU3LjQ3OSA0NzIgNDQuMjI1IDQ3MlpNNDg3LjkyNCAxMDkuMjZDNDg2LjI4MyAxMDIuODMgNDc5Ljc0IDk4Ljk0OSA0NzMuMzEyIDEwMC41OUM0NzEuMjE5IDEwMS4xMjUgNDY5LjMwNyAxMDIuMjEzIDQ2Ny43NzkgMTAzLjc0MkwzOTMuMzI4IDE3OC4yNDRMMzI1LjM2NSAxNjYuOTJMMzE0LjA0MSA5OC45MDZMMzg4LjQ5MiAyNC40NTdDMzkzLjE4OSAxOS43NyAzOTMuMTk5IDEyLjE2MiAzODguNTEyIDcuNDY1QzM4Ni45NDcgNS44OTYgMzg0Ljk4IDQuNzkxIDM4Mi44MjYgNC4yNzFDMzMzLjczOCAtNy45NTEgMjgxLjgzNCA2LjQ2MyAyNDYuMDc4IDQyLjI0OEMyMDYuMzkxIDgxLjkzNiAxOTUuNDY3IDEzOS40NjcgMjExLjk4NiAxODkuNjI3TDIwNy44ODUgMTkzLjcyOUwyNzguODQgMjY0LjY3NEMzMDcuMzQ0IDI1MC41MjkgMzQxLjY5NSAyNTYuMTIxIDM2NC4yNDQgMjc4LjU3MkwzNzEuNzQ0IDI4Ni4wN0M0MDEuMzg1IDI4MS4zNTIgNDI4Ljc3NyAyNjcuNCA0NDkuOTY5IDI0Ni4xMzdDNDg1Ljc4NyAyMTAuMzQ4IDUwMC4xOTcgMTU4LjM4NSA0ODcuOTI0IDEwOS4yNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzg0IDI3OC42MjZDMzYwLjg0MiAyNTUuNDY3IDMyNi40MjQgMjUxLjAzNiAyOTguNjA0IDI2NC43MDZMMTkyIDE1OC4wMDFWOTYuMDAxTDY0IDAuMDAxTDAgNjQuMDAxTDk2IDE5Mi4wMDFIMTU4TDI2NC43MDUgMjk4LjYwNEMyNTEuMDM1IDMyNi40MjQgMjU1LjQ2NyAzNjAuODQyIDI3OC42MjUgMzg0LjAwMUwzOTUuNjI1IDUwMS4xMjZDNDEwLjI1IDUxNS42MjYgNDMzLjg3NSA1MTUuNjI2IDQ0OC4zNzUgNTAxLjEyNkw1MDEuMTI1IDQ0OC4zNzZDNTE1LjYyNSA0MzMuODc2IDUxNS42MjUgNDEwLjI1MSA1MDEuMTI1IDM5NS42MjZMMzg0IDI3OC42MjZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const ScrewdriverWrench: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M208.104 307.047L148.889 247.887L0 396.775C-26.367 423.143 -26.367 465.857 0 492.225C13.184 505.408 30.439 512 47.725 512S82.266 505.408 95.449 492.225L214.559 373.115C205.691 352.344 202.816 329.354 208.104 307.047ZM44.225 472C30.971 472 20.225 461.254 20.225 448C20.225 434.744 30.971 424 44.225 424S68.225 434.744 68.225 448C68.225 461.254 57.479 472 44.225 472ZM487.924 109.26C486.283 102.83 479.74 98.949 473.312 100.59C471.219 101.125 469.307 102.213 467.779 103.742L393.328 178.244L325.365 166.92L314.041 98.906L388.492 24.457C393.189 19.77 393.199 12.162 388.512 7.465C386.947 5.896 384.98 4.791 382.826 4.271C333.738 -7.951 281.834 6.463 246.078 42.248C206.391 81.936 195.467 139.467 211.986 189.627L207.885 193.729L278.84 264.674C307.344 250.529 341.695 256.121 364.244 278.572L371.744 286.07C401.385 281.352 428.777 267.4 449.969 246.137C485.787 210.348 500.197 158.385 487.924 109.26Z" />
            <path d="M384 278.626C360.842 255.467 326.424 251.036 298.604 264.706L192 158.001V96.001L64 0.001L0 64.001L96 192.001H158L264.705 298.604C251.035 326.424 255.467 360.842 278.625 384.001L395.625 501.126C410.25 515.626 433.875 515.626 448.375 501.126L501.125 448.376C515.625 433.876 515.625 410.251 501.125 395.626L384 278.626Z" />
    </Icon>
);

export default ScrewdriverWrench;