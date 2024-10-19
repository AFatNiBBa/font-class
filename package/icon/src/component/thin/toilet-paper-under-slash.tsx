
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `toilet-paper-under-slash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper-under-slash?s=thin toilet-paper-under-slash}
 * @preview ![toilet-paper-under-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzYuOTggNDk3LjczNEwzODguNDI1IDMwMC4xNjJDMzg4LjQyNSAzMDAuMTYgMzg4LjQyNSAzMDAuMTYyIDM4OC40MjUgMzAwLjE2TDM2NS4zMTggMjgxLjc5MUMzNjUuMzIgMjgxLjc5MyAzNjUuMzE2IDI4MS43OTMgMzY1LjMxOCAyODEuNzkzTDEyLjk4OCAxLjczQzExLjUyNSAwLjU2NiA5Ljc3MSAwIDguMDI1IDBDNS42NzMgMCAzLjMzNSAxLjAyNyAxLjczOCAzLjAxMkMtMS4wMTIgNi40OCAtMC40MzQgMTEuNTEyIDMuMDE5IDE0LjI2Mkw2MjcuMDExIDUxMC4yNjZDNjI4LjQ5NSA1MTEuNDM4IDYzMC4yNDUgNTEyIDYzMS45OTUgNTEyQzYzNC4zMzkgNTEyIDYzNi42ODMgNTEwLjk2OSA2MzguMjYxIDUwOC45ODRDNjQxLjAxMSA1MDUuNTE2IDY0MC40MzMgNTAwLjQ4NCA2MzYuOTggNDk3LjczNFpNMTc1Ljk5OSAxNkg0MTkuMzc0QzM4MC4xOTkgNDUuMzExIDM1Mi42ODkgMTExLjkyOCAzNTIuMTA3IDE4OS41MzVMMzY4LjI4NiAyMDIuMzk1QzM2OC4xNzUgMTk4LjkzNiAzNjcuOTk5IDE5NS41MSAzNjcuOTk5IDE5MkMzNjcuOTk5IDk0Ljk1MyA0MTEuMDYyIDE2IDQ2My45OTkgMTZTNTU5Ljk5OSA5NC45NTMgNTU5Ljk5OSAxOTJDNTU5Ljk5OSAyNDYuMzExIDU0Ni40OTkgMjk0LjkyOCA1MjUuMzQzIDMyNy4yMzhMNTM3LjEyIDMzNi41OThDNTQ2LjA0MiAzMjMuMjc3IDU1My44NzggMzA3Ljg2NSA1NTkuOTk5IDI5MC4zODFWMzU0Ljc4NUw1NzUuOTk5IDM2Ny41MDRWMTkyQzU3NS45OTkgODYuMTI1IDUyNS43NDkgMCA0NjMuOTk5IDBIMTc1Ljk5OUMxNjAuNjA5IDAgMTQ1LjkzNyA1LjM1OSAxMzIuNTc1IDE1LjAzMUwxNDUuNDY4IDI1LjI3OUMxNTUuMDc0IDE5LjM1IDE2NS4zMTggMTYgMTc1Ljk5OSAxNlpNNTU5Ljk5OSA0MzYuNTQzTDU3NS45OTkgNDQ5LjI2MlY0NDkuMjZMNTU5Ljk5OSA0MzYuNTQxVjQzNi41NDNaTTQ2My45OTkgMTIwQzQ0MS4yMDIgMTIwIDQyMy45OTkgMTUwLjk1MyA0MjMuOTk5IDE5MlM0NDEuMjAyIDI2NCA0NjMuOTk5IDI2NFM1MDMuOTk5IDIzMy4wNDcgNTAzLjk5OSAxOTJTNDg2Ljc5NiAxMjAgNDYzLjk5OSAxMjBaTTQ2My45OTkgMjQ4QzQ1Mi42NzEgMjQ4IDQzOS45OTkgMjI0LjA0NyA0MzkuOTk5IDE5MlM0NTIuNjcxIDEzNiA0NjMuOTk5IDEzNlM0ODcuOTk5IDE1OS45NTMgNDg3Ljk5OSAxOTJTNDc1LjMyNyAyNDggNDYzLjk5OSAyNDhaTTM0NS4xODUgMzY4SDE3NS45OTlDMTIzLjA2MiAzNjggNzkuOTk5IDI4OS4wNDcgNzkuOTk5IDE5MkM3OS45OTkgMTgwLjU4IDgwLjY0MiAxNjkuNDQxIDgxLjc4MSAxNTguNjIzTDY3LjIyNiAxNDcuMDUzQzY1LjE5MyAxNjEuNDk4IDYzLjk5OSAxNzYuNDk4IDYzLjk5OSAxOTJDNjMuOTk5IDI5Ny44NzUgMTE0LjI0OSAzODQgMTc1Ljk5OSAzODRIMzY1LjMxNEwzNDUuMTg1IDM2OFpNMjMxLjk5OSA0OTZDMjE4Ljc2NSA0OTYgMjA3Ljk5OSA0ODUuMjM0IDIwNy45OTkgNDcyVjQyNEMyMDcuOTk5IDQxOS41NzggMjA0LjQyMSA0MTYgMTk5Ljk5OSA0MTZTMTkxLjk5OSA0MTkuNTc4IDE5MS45OTkgNDI0VjQ3MkMxOTEuOTk5IDQ5NC4wNjIgMjA5LjkzNyA1MTIgMjMxLjk5OSA1MTJINTI2LjM0M0w1MDYuMjE0IDQ5NkgyMzEuOTk5Wk00NzIuNzQ3IDM2Ny4xODhMNDg3Ljg1MSAzNzkuMTkzTDQ3Mi43NDkgMzY3LjE4OEM0NzIuNzQ3IDM2Ny4xODggNDcyLjc0OSAzNjcuMTg4IDQ3Mi43NDcgMzY3LjE4OFpNMTA0LjY3NSA3NC42MDlMOTIuMzMzIDY0LjgwMUwxMDQuNjc1IDc0LjYxMVY3NC42MDlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ToiletPaperUnderSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M636.98 497.734L388.425 300.162C388.425 300.16 388.425 300.162 388.425 300.16L365.318 281.791C365.32 281.793 365.316 281.793 365.318 281.793L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.027 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734ZM175.999 16H419.374C380.199 45.311 352.689 111.928 352.107 189.535L368.286 202.395C368.175 198.936 367.999 195.51 367.999 192C367.999 94.953 411.062 16 463.999 16S559.999 94.953 559.999 192C559.999 246.311 546.499 294.928 525.343 327.238L537.12 336.598C546.042 323.277 553.878 307.865 559.999 290.381V354.785L575.999 367.504V192C575.999 86.125 525.749 0 463.999 0H175.999C160.609 0 145.937 5.359 132.575 15.031L145.468 25.279C155.074 19.35 165.318 16 175.999 16ZM559.999 436.543L575.999 449.262V449.26L559.999 436.541V436.543ZM463.999 120C441.202 120 423.999 150.953 423.999 192S441.202 264 463.999 264S503.999 233.047 503.999 192S486.796 120 463.999 120ZM463.999 248C452.671 248 439.999 224.047 439.999 192S452.671 136 463.999 136S487.999 159.953 487.999 192S475.327 248 463.999 248ZM345.185 368H175.999C123.062 368 79.999 289.047 79.999 192C79.999 180.58 80.642 169.441 81.781 158.623L67.226 147.053C65.193 161.498 63.999 176.498 63.999 192C63.999 297.875 114.249 384 175.999 384H365.314L345.185 368ZM231.999 496C218.765 496 207.999 485.234 207.999 472V424C207.999 419.578 204.421 416 199.999 416S191.999 419.578 191.999 424V472C191.999 494.062 209.937 512 231.999 512H526.343L506.214 496H231.999ZM472.747 367.188L487.851 379.193L472.749 367.188C472.747 367.188 472.749 367.188 472.747 367.188ZM104.675 74.609L92.333 64.801L104.675 74.611V74.609Z" />
        </Icon>
    </>
}