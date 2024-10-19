
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `train-tram` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/train-tram?s=duotone train-tram}
 * @preview ![train-tram](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1Ljk5NiA2MS42NTRDMjIuMjQ2IDY3LjkwMiAzMi4zNzUgNjcuOTAyIDM4LjYyNSA2MS42NTRMNDAuNTY4IDU5LjcxMUM0OC4wNjYgNTIuMjEzIDU4LjIzNiA0OCA2OC44NDIgNDhIMTc2Vjk2SDIwOFY0OEgzMTUuMTQ4QzMyNS43NiA0OCAzMzUuOTM2IDUyLjIxNSAzNDMuNDM5IDU5LjcxOUwzNDUuMzc1IDYxLjY1NEMzNTEuNjI1IDY3LjkwMiAzNjEuNzU0IDY3LjkwMiAzNjguMDA0IDYxLjY1NEwzNzkuMzEyIDUwLjM0NEMzODUuNTYyIDQ0LjA5NiAzODUuNTYyIDMzLjk2NSAzNzkuMzEyIDI3LjcxN0wzNzcuMzc3IDI1Ljc4MUMzNjAuODY5IDkuMjczIDMzOC40OCAwIDMxNS4xMzUgMEg2OC44NDJDNDUuNTEyIDAgMjMuMTM3IDkuMjY4IDYuNjM5IDI1Ljc2Nkw0LjY4OCAyNy43MTdDLTEuNTYzIDMzLjk2NSAtMS41NjMgNDQuMDk2IDQuNjg4IDUwLjM0NEwxNS45OTYgNjEuNjU0Wk03MC42NjYgNDI4LjU4NkwyLjM1OSA0OTguMzQyQy0yLjY4IDUwMy4zODMgMC44ODkgNTEyIDguMDE2IDUxMkg0OS45NDlDNTQuMTkzIDUxMiA1OC4yNjQgNTEwLjMxNCA2MS4yNjQgNTA3LjMxMkwxMjAuNTc4IDQ0OEwxMjAuOTk0IDQ0Ny4yOTNDMTAyLjE1NiA0NDUuOTEgODQuOTE4IDQzOS4yNzUgNzAuNjY0IDQyOC41ODRMNzAuNjY2IDQyOC41ODZaTTI4OCAyMjRWMTkyQzI4OCAxNzQuNCAyNzMuNiAxNjAgMjU2IDE2MEgxMjhDMTEwLjQgMTYwIDk2IDE3NC40IDk2IDE5MlYyMjRDOTYgMjQxLjYgMTEwLjQgMjU2IDEyOCAyNTZIMjU2QzI3My42IDI1NiAyODggMjQxLjYgMjg4IDIyNFpNMzgxLjY0MSA0OTguMzQyTDMxMy4zMzQgNDI4LjU4NkwzMTMuMzM2IDQyOC41ODRDMjk5LjA4MiA0MzkuMjc1IDI4MS44NDQgNDQ1LjkxIDI2My4wMDYgNDQ3LjI5M0wyNjMuNDIyIDQ0OEwzMjIuNzM2IDUwNy4zMTJDMzI1LjczNiA1MTAuMzE0IDMyOS44MDcgNTEyIDMzNC4wNTEgNTEySDM3NS45ODRDMzgzLjExMSA1MTIgMzg2LjY4IDUwMy4zODMgMzgxLjY0MSA0OTguMzQyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgOTZIMTI4Qzc0Ljk4IDk2IDMyIDEzOC45OCAzMiAxOTJWMzUyQzMyIDQwNS4wMiA3NC45OCA0NDggMTI4IDQ0OEgyNTZDMzA5LjAyIDQ0OCAzNTIgNDA1LjAyIDM1MiAzNTJWMTkyQzM1MiAxMzguOTggMzA5LjAyIDk2IDI1NiA5NlpNMTI4IDM3NkMxMTQuNzQ2IDM3NiAxMDQgMzY1LjI1NCAxMDQgMzUyQzEwNCAzMzguNzQ0IDExNC43NDYgMzI4IDEyOCAzMjhTMTUyIDMzOC43NDQgMTUyIDM1MkMxNTIgMzY1LjI1NCAxNDEuMjU0IDM3NiAxMjggMzc2Wk0yNTYgMzc2QzI0Mi43NDYgMzc2IDIzMiAzNjUuMjU0IDIzMiAzNTJDMjMyIDMzOC43NDQgMjQyLjc0NiAzMjggMjU2IDMyOFMyODAgMzM4Ljc0NCAyODAgMzUyQzI4MCAzNjUuMjU0IDI2OS4yNTQgMzc2IDI1NiAzNzZaTTI4OCAyMjRDMjg4IDI0MS42IDI3My42IDI1NiAyNTYgMjU2SDEyOEMxMTAuNCAyNTYgOTYgMjQxLjYgOTYgMjI0VjE5MkM5NiAxNzQuNCAxMTAuNCAxNjAgMTI4IDE2MEgyNTZDMjczLjYgMTYwIDI4OCAxNzQuNCAyODggMTkyVjIyNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function TrainTram(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M15.996 61.654C22.246 67.902 32.375 67.902 38.625 61.654L40.568 59.711C48.066 52.213 58.236 48 68.842 48H176V96H208V48H315.148C325.76 48 335.936 52.215 343.439 59.719L345.375 61.654C351.625 67.902 361.754 67.902 368.004 61.654L379.312 50.344C385.562 44.096 385.562 33.965 379.312 27.717L377.377 25.781C360.869 9.273 338.48 0 315.135 0H68.842C45.512 0 23.137 9.268 6.639 25.766L4.688 27.717C-1.563 33.965 -1.563 44.096 4.688 50.344L15.996 61.654ZM70.666 428.586L2.359 498.342C-2.68 503.383 0.889 512 8.016 512H49.949C54.193 512 58.264 510.314 61.264 507.312L120.578 448L120.994 447.293C102.156 445.91 84.918 439.275 70.664 428.584L70.666 428.586ZM288 224V192C288 174.4 273.6 160 256 160H128C110.4 160 96 174.4 96 192V224C96 241.6 110.4 256 128 256H256C273.6 256 288 241.6 288 224ZM381.641 498.342L313.334 428.586L313.336 428.584C299.082 439.275 281.844 445.91 263.006 447.293L263.422 448L322.736 507.312C325.736 510.314 329.807 512 334.051 512H375.984C383.111 512 386.68 503.383 381.641 498.342Z" />
            <path d="M256 96H128C74.98 96 32 138.98 32 192V352C32 405.02 74.98 448 128 448H256C309.02 448 352 405.02 352 352V192C352 138.98 309.02 96 256 96ZM128 376C114.746 376 104 365.254 104 352C104 338.744 114.746 328 128 328S152 338.744 152 352C152 365.254 141.254 376 128 376ZM256 376C242.746 376 232 365.254 232 352C232 338.744 242.746 328 256 328S280 338.744 280 352C280 365.254 269.254 376 256 376ZM288 224C288 241.6 273.6 256 256 256H128C110.4 256 96 241.6 96 224V192C96 174.4 110.4 160 128 160H256C273.6 160 288 174.4 288 192V224Z" />
        </Icon>
    </>
}