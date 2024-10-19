
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tablet-rugged` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-rugged?s=duotone tablet-rugged}
 * @preview ![tablet-rugged](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzOS4yNSAxNjQuMzc2QzQ0NC42MjUgMTYxLjc1MSA0NDggMTU2LjI1MSA0NDggMTUwLjEyNlY3My44NzZDNDQ4IDY3Ljc1MSA0NDQuNjI1IDYyLjI1MSA0MzkuMjUgNTkuNjI2TDQxNiA0OC4wMDFDNDE2IDIxLjUwMSAzOTQuNSAwLjAwMSAzNjggMC4wMDFIODBDNTMuNSAwLjAwMSAzMiAyMS41MDEgMzIgNDguMDAxTDguNzUgNTkuNjI2QzMuMzc1IDYyLjI1MSAwIDY3Ljc1MSAwIDczLjg3NlYxNTAuMTI2QzAgMTU2LjI1MSAzLjM3NSAxNjEuNzUxIDguNzUgMTY0LjM3NkwzMiAxNzYuMDAxVjE5Mi4wMDFMOC43NSAyMDMuNjI2QzMuMzc1IDIwNi4yNTEgMCAyMTEuNzUxIDAgMjE3Ljg3NlYyOTQuMTI2QzAgMzAwLjI1MSAzLjM3NSAzMDUuNzUxIDguNzUgMzA4LjM3NkwzMiAzMjAuMDAxVjMzNi4wMDFMOC43NSAzNDcuNjI2QzMuMzc1IDM1MC4yNTEgMCAzNTUuNzUxIDAgMzYxLjg3NlY0MzguMTI2QzAgNDQ0LjI1MSAzLjM3NSA0NDkuNzUxIDguNzUgNDUyLjM3NkwzMiA0NjQuMDAxQzMyIDQ5MC41MDEgNTMuNSA1MTIuMDAxIDgwIDUxMi4wMDFIMzY4QzM5NC41IDUxMi4wMDEgNDE2IDQ5MC41MDEgNDE2IDQ2NC4wMDFMNDM5LjI1IDQ1Mi4zNzZDNDQ0LjYyNSA0NDkuNzUxIDQ0OCA0NDQuMjUxIDQ0OCA0MzguMTI2VjM2MS44NzZDNDQ4IDM1NS43NTEgNDQ0LjYyNSAzNTAuMjUxIDQzOS4yNSAzNDcuNjI2TDQxNiAzMzYuMDAxVjMyMC4wMDFMNDM5LjI1IDMwOC4zNzZDNDQ0LjYyNSAzMDUuNzUxIDQ0OCAzMDAuMjUxIDQ0OCAyOTQuMTI2VjIxNy44NzZDNDQ4IDIxMS43NTEgNDQ0LjYyNSAyMDYuMjUxIDQzOS4yNSAyMDMuNjI2TDQxNiAxOTIuMDAxVjE3Ni4wMDFMNDM5LjI1IDE2NC4zNzZaTTM1MiA0MzIuMDAxQzM1MiA0NDAuNzUxIDM0NC43NSA0NDguMDAxIDMzNiA0NDguMDAxSDExMkMxMDMuMjUgNDQ4LjAwMSA5NiA0NDAuNzUxIDk2IDQzMi4wMDFWODAuMDAxQzk2IDcxLjI1MSAxMDMuMjUgNjQuMDAxIDExMiA2NC4wMDFIMzM2QzM0NC43NSA2NC4wMDEgMzUyIDcxLjI1MSAzNTIgODAuMDAxVjQzMi4wMDFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM1MiA0MzIuMDAxQzM1MiA0NDAuNzUxIDM0NC43NSA0NDguMDAxIDMzNiA0NDguMDAxSDExMkMxMDMuMjUgNDQ4LjAwMSA5NiA0NDAuNzUxIDk2IDQzMi4wMDFWODAuMDAxQzk2IDcxLjI1MSAxMDMuMjUgNjQuMDAxIDExMiA2NC4wMDFIMzM2QzM0NC43NSA2NC4wMDEgMzUyIDcxLjI1MSAzNTIgODAuMDAxVjQzMi4wMDFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TabletRugged(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M439.25 164.376C444.625 161.751 448 156.251 448 150.126V73.876C448 67.751 444.625 62.251 439.25 59.626L416 48.001C416 21.501 394.5 0.001 368 0.001H80C53.5 0.001 32 21.501 32 48.001L8.75 59.626C3.375 62.251 0 67.751 0 73.876V150.126C0 156.251 3.375 161.751 8.75 164.376L32 176.001V192.001L8.75 203.626C3.375 206.251 0 211.751 0 217.876V294.126C0 300.251 3.375 305.751 8.75 308.376L32 320.001V336.001L8.75 347.626C3.375 350.251 0 355.751 0 361.876V438.126C0 444.251 3.375 449.751 8.75 452.376L32 464.001C32 490.501 53.5 512.001 80 512.001H368C394.5 512.001 416 490.501 416 464.001L439.25 452.376C444.625 449.751 448 444.251 448 438.126V361.876C448 355.751 444.625 350.251 439.25 347.626L416 336.001V320.001L439.25 308.376C444.625 305.751 448 300.251 448 294.126V217.876C448 211.751 444.625 206.251 439.25 203.626L416 192.001V176.001L439.25 164.376ZM352 432.001C352 440.751 344.75 448.001 336 448.001H112C103.25 448.001 96 440.751 96 432.001V80.001C96 71.251 103.25 64.001 112 64.001H336C344.75 64.001 352 71.251 352 80.001V432.001Z" />
            <path d="M352 432.001C352 440.751 344.75 448.001 336 448.001H112C103.25 448.001 96 440.751 96 432.001V80.001C96 71.251 103.25 64.001 112 64.001H336C344.75 64.001 352 71.251 352 80.001V432.001Z" />
        </Icon>
    </>
}