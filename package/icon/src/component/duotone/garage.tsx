
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garage` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/garage?s=duotone garage}
 * @preview ![garage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYxMC41IDExN0wzMzguMzc1IDMuNjI1QzMzMi41IDEuNSAzMjYuMjUgMC4yNSAzMjAgMEMzMTMuNjI1IDAuMjUgMzA3LjM3NSAxLjM3NSAzMDEuNSAzLjYyNUwyOS41IDExN0MxMS42MjUgMTI0LjUgMCAxNDEuODc1IDAgMTYxLjI1VjQ5NkMwIDUwNC44NzUgNy4xMjUgNTEyIDE2IDUxMkg4MEM4OC44NzUgNTEyIDk2IDUwNC44NzUgOTYgNDk2VjIyNEM5NiAyMDYuMzc1IDExMC42MjUgMTkyIDEyOC42MjUgMTkySDUxMS4zNzVDNTI5LjM3NSAxOTIgNTQ0IDIwNi4zNzUgNTQ0IDIyNFY0OTZDNTQ0IDUwNC44NzUgNTUxLjEyNSA1MTIgNTYwIDUxMkg2MjRDNjMyLjg3NSA1MTIgNjQwIDUwNC44NzUgNjQwIDQ5NlYxNjEuMjVDNjQwIDE0MS44NzUgNjI4LjM3NSAxMjQuNSA2MTAuNSAxMTdaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEyOCA1MTJINTEyVjM1MkgxMjguMTI1TDEyOCA1MTJaTTI3MiA0MTZIMzY4QzM3Ni44NzUgNDE2IDM4NCA0MjMuMTI1IDM4NCA0MzJTMzc2Ljg3NSA0NDggMzY4IDQ0OEgyNzJDMjYzLjEyNSA0NDggMjU2IDQ0MC44NzUgMjU2IDQzMlMyNjMuMTI1IDQxNiAyNzIgNDE2Wk0xMjggMzIwSDUxMS41TDUxMiAyMjRIMTI4VjMyMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Garage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M610.5 117L338.375 3.625C332.5 1.5 326.25 0.25 320 0C313.625 0.25 307.375 1.375 301.5 3.625L29.5 117C11.625 124.5 0 141.875 0 161.25V496C0 504.875 7.125 512 16 512H80C88.875 512 96 504.875 96 496V224C96 206.375 110.625 192 128.625 192H511.375C529.375 192 544 206.375 544 224V496C544 504.875 551.125 512 560 512H624C632.875 512 640 504.875 640 496V161.25C640 141.875 628.375 124.5 610.5 117Z" />
            <path d="M128 512H512V352H128.125L128 512ZM272 416H368C376.875 416 384 423.125 384 432S376.875 448 368 448H272C263.125 448 256 440.875 256 432S263.125 416 272 416ZM128 320H511.5L512 224H128V320Z" />
    </Icon>
);

export default Garage;