
import { Icon, generic } from "../../index";

/**
 * A component that renders the `theta` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/theta?s=duotone theta}
 * @preview ![theta](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAxNkM4NS45NjEgMTYgMCAxMjMuNDUxIDAgMjU2Uzg1Ljk2MSA0OTYgMTkyIDQ5NlMzODQgMzg4LjU0OSAzODQgMjU2UzI5OC4wMzkgMTYgMTkyIDE2Wk0xOTIgOTZDMjQzLjAyOSA5NiAyODYuOTkgMTQ3Ljk5IDI5OS44NDYgMjE2SDg0LjE1NEM5Ny4wMSAxNDcuOTkgMTQwLjk3MyA5NiAxOTIgOTZaTTE5MiA0MTZDMTQwLjk3MyA0MTYgOTcuMDEgMzY0LjAxIDg0LjE1NCAyOTZIMjk5Ljg0NkMyODYuOTkgMzY0LjAxIDI0My4wMjkgNDE2IDE5MiA0MTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Theta: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 16C85.961 16 0 123.451 0 256S85.961 496 192 496S384 388.549 384 256S298.039 16 192 16ZM192 96C243.029 96 286.99 147.99 299.846 216H84.154C97.01 147.99 140.973 96 192 96ZM192 416C140.973 416 97.01 364.01 84.154 296H299.846C286.99 364.01 243.029 416 192 416Z" />
    </Icon>
);

export default Theta;