
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scarf` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scarf?s=light scarf}
 * @preview ![scarf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDIuMzAyIDM3NS4yODFMMTc1LjQxNyA0MDQuNTY4TDEwNy43OTEgMzM3Ljc3OUwxMzUuMzU5IDMwOC40MzlDMTQxLjQ1MyAzMDEuOTU1IDE0MS4yOTQgMjkxLjgwMyAxMzUuMDAxIDI4NS41MTJDMTI4LjUyNyAyNzkuMDM3IDExOC4wMTUgMjc5LjA4NiAxMTEuNjAxIDI4NS42MTlMNC43MDcgMzk0LjQ4MkMtMS41NjkgNDAwLjY1OCAtMS41NjkgNDEwLjcwNyA0LjcwNyA0MTYuODgzTDQuNzM2IDQxNi45MUMxMC45NjIgNDIzLjAzNyAyMS4wMjMgNDIzLjAzNyAyNy4yNSA0MTYuOTFMODQuOTk4IDM2MC4wODJMMTA3LjU0MSAzODIuMzg3TDQ5Ljk2OCA0MzkuMjQ2QzQzLjcyNCA0NDUuNDE0IDQzLjcyIDQ1NS40MjIgNDkuOTU4IDQ2MS41OTZMNTAuMDUgNDYxLjY4NkM1Ni4yODEgNDY3Ljg1IDY2LjM4IDQ2Ny44NTQgNzIuNjE3IDQ2MS42OTVMMTMwLjIwOCA0MDQuODE2TDE1Mi43NSA0MjcuMTE5TDk1LjA3IDQ4NS4xMjdDODguOTM1IDQ5MS4yOTcgODguOTYgNTAxLjIwNSA5NS4xMyA1MDcuMzQyQzEwMS40MDYgNTEzLjU4NiAxMTEuNjMgNTEzLjU0NyAxMTcuODU3IDUwNy4yNTRMMjI0LjUxOSAzOTYuMTM3QzIzMC4yNjMgMzkwLjE1MiAyMzAuMTY2IDM4MC42NzYgMjI0LjMgMzc0LjgxMUMyMTguMTY5IDM2OC42OCAyMDguMTY2IDM2OC44OTMgMjAyLjMwMiAzNzUuMjgxWk01MDcuMzA0IDM5NC40TDIxNC42NzMgOTkuOTk4QzIyNi4wNyA5Ny4zOTUgMjQwLjQ3MiA5NS41MzcgMjU2LjUwMSA5NS40MTJDMjcyLjUzMyA5NS40MTIgMjg2LjkzNSA5Ny4zOTUgMjk4LjMzMiA5OS45OThMMjkwLjY0NCAxMDcuNjA0QzI4NC4zNjEgMTEzLjgyIDI4NC4zMzMgMTIzLjk2MSAyOTAuNTgzIDEzMC4yMTFDMjk2Ljc4NSAxMzYuNDE0IDMwNi44MzMgMTM2LjQ0MSAzMTMuMDcgMTMwLjI3MUwzMjEuMTI1IDEyMi4zMDNDMzI5LjM5IDExNC4yNDggMzMyLjM5NCAxMDIuMzUyIDMyOS4zOSA5MS4xOTlDMzI2LjEzMiA4MC4wNDcgMzE3LjExNyA3MS42MjEgMzA1Ljg0NSA2OS4wMkMyODcuODEgNjQuODA3IDI3MS41MzEgNjMuNjkxIDI1Ni42MjYgNjMuODE0QzI0MS43MjQgNjMuODE0IDIyNS40NDMgNjQuODA3IDIwNy40MSA2OS4wMkMxOTYuMTM4IDcxLjYyMSAxODcuMTIxIDgwLjA0NyAxODMuODY1IDkxLjE5OVMxODMuNzQgMTE0LjI0OCAxOTIuMTMgMTIyLjMwM0w0MDQuMzg2IDMzNy42MzNMMzM2LjYzNCA0MDQuNTQ3TDE0NS40MTcgMjA0Ljk1M0MxMTMuNDgyIDE3MC4xMzMgMTM1LjAyMyAxMzIuMDkyIDEzNy42NTQgMTI3Ljc1NEwxODEuMzYxIDU1LjM4OUMxOTIuMzggMzcuMDQ5IDIzMy43MDggMzEuNzIxIDI1NS44NzYgMzEuNzIxSDI1Ny4xMjhDMjc5LjI5NCAzMS43MjEgMzIwLjYyMyAzNy4wNDkgMzMxLjc2OSA1NS4yNjZMMzc1LjQ3NiAxMjcuNjMxQzM3Ny43MTggMTMxLjUxNiAzOTUuMjQyIDE2Mi40NTEgMzc1Ljk5NiAxOTMuOTc5QzM3MS44NjEgMjAwLjc0OCAzNzIuNjYgMjA5LjQwOCAzNzguNTU0IDIxNC43MTdIMzc4LjU1NkMzODUuNzQgMjIxLjE4OCAzOTcuMzA2IDIyMC4wMDIgNDAyLjUzNSAyMTEuODY3QzQzMy45NzIgMTYyLjk2MyA0MDQuMjcxIDExMy43NzcgNDAyLjkwMiAxMTEuNTIxTDM1OS4xOTUgMzkuMDMzQzM1NC45MzcgMzEuOTY5IDM0OS4zMDIgMjUuODk2IDM0Mi40MTQgMjEuMTg5QzMyMC43NDggNi44MTQgMjg4LjgxMiAwIDI1Ny4xMjggMEgyNTUuODc2QzIyNC4xOTEgMCAxOTIuMTMgNi44MTQgMTcwLjU4OSAyMS4zMTJDMTYzLjU3OCAyNi4wMjEgMTU4LjA2NiAzMS45NjkgMTUzLjY4MyAzOS4xNTZMMTA5Ljk3NiAxMTEuNjQ1QzEwOC40NzQgMTE0LjEyMyA3Mi45MDYgMTczLjIzIDEyMS40OTggMjI2LjM4OUwzOTMuOTc2IDUwNy4yNDRDNDAwLjE4OSA1MTMuNTMzIDQxMC4zOTYgNTEzLjU5MiA0MTYuNjgxIDUwNy4zNzNMNDE2LjcyNCA1MDcuMzNDNDIyLjkyNSA1MDEuMTkzIDQyMi45NjIgNDkxLjI1NiA0MTYuODA0IDQ4NS4wNzRMMzU5LjA1IDQyNy4wOThMMzgxLjU5MyA0MDQuNzk1TDQzOS4yNzkgNDYxLjY2NEM0NDUuNTI5IDQ2Ny44MjQgNDU1LjY0NCA0NjcuODAxIDQ2MS44NjUgNDYxLjYxMUw0NjEuOTA0IDQ2MS41NzJDNDY4LjExMyA0NTUuMzk2IDQ2OC4wOTUgNDQ1LjQxIDQ2MS44NjMgNDM5LjI1Nkw0MDQuMjYxIDM4Mi4zNjVMNDI2LjkyOSAzNjAuMDYxTDQ4NC42MTMgNDE2LjkzQzQ5MC44MTQgNDIzLjA0MyA1MDAuODMzIDQyMy4wNzQgNTA3LjA3NiA0MTdMNTA3LjIzIDQxNi44NUM1MTMuNTYgNDEwLjY4OSA1MTMuNTkzIDQwMC42MDIgNTA3LjMwNCAzOTQuNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Scarf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M202.302 375.281L175.417 404.568L107.791 337.779L135.359 308.439C141.453 301.955 141.294 291.803 135.001 285.512C128.527 279.037 118.015 279.086 111.601 285.619L4.707 394.482C-1.569 400.658 -1.569 410.707 4.707 416.883L4.736 416.91C10.962 423.037 21.023 423.037 27.25 416.91L84.998 360.082L107.541 382.387L49.968 439.246C43.724 445.414 43.72 455.422 49.958 461.596L50.05 461.686C56.281 467.85 66.38 467.854 72.617 461.695L130.208 404.816L152.75 427.119L95.07 485.127C88.935 491.297 88.96 501.205 95.13 507.342C101.406 513.586 111.63 513.547 117.857 507.254L224.519 396.137C230.263 390.152 230.166 380.676 224.3 374.811C218.169 368.68 208.166 368.893 202.302 375.281ZM507.304 394.4L214.673 99.998C226.07 97.395 240.472 95.537 256.501 95.412C272.533 95.412 286.935 97.395 298.332 99.998L290.644 107.604C284.361 113.82 284.333 123.961 290.583 130.211C296.785 136.414 306.833 136.441 313.07 130.271L321.125 122.303C329.39 114.248 332.394 102.352 329.39 91.199C326.132 80.047 317.117 71.621 305.845 69.02C287.81 64.807 271.531 63.691 256.626 63.814C241.724 63.814 225.443 64.807 207.41 69.02C196.138 71.621 187.121 80.047 183.865 91.199S183.74 114.248 192.13 122.303L404.386 337.633L336.634 404.547L145.417 204.953C113.482 170.133 135.023 132.092 137.654 127.754L181.361 55.389C192.38 37.049 233.708 31.721 255.876 31.721H257.128C279.294 31.721 320.623 37.049 331.769 55.266L375.476 127.631C377.718 131.516 395.242 162.451 375.996 193.979C371.861 200.748 372.66 209.408 378.554 214.717H378.556C385.74 221.188 397.306 220.002 402.535 211.867C433.972 162.963 404.271 113.777 402.902 111.521L359.195 39.033C354.937 31.969 349.302 25.896 342.414 21.189C320.748 6.814 288.812 0 257.128 0H255.876C224.191 0 192.13 6.814 170.589 21.312C163.578 26.021 158.066 31.969 153.683 39.156L109.976 111.645C108.474 114.123 72.906 173.23 121.498 226.389L393.976 507.244C400.189 513.533 410.396 513.592 416.681 507.373L416.724 507.33C422.925 501.193 422.962 491.256 416.804 485.074L359.05 427.098L381.593 404.795L439.279 461.664C445.529 467.824 455.644 467.801 461.865 461.611L461.904 461.572C468.113 455.396 468.095 445.41 461.863 439.256L404.261 382.365L426.929 360.061L484.613 416.93C490.814 423.043 500.833 423.074 507.076 417L507.23 416.85C513.56 410.689 513.593 400.602 507.304 394.4Z" />
        </Icon>
    </>
}