
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ornament` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=duotone ornament}
 * @preview ![ornament](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM3Mi41OTggMjU2SDExLjQwMkM0LjI2NiAyNzYuMDU3IDAgMjk3LjQ3OSAwIDMyMEMwIDM0Mi40NzcgNC4wNjIgMzYzLjk1NSAxMS4xNiAzODRIMzcyLjg0QzM3OS45MzggMzYzLjk1NSAzODQgMzQyLjQ3NyAzODQgMzIwQzM4NCAyOTcuNDc5IDM3OS43MzQgMjc2LjA1NyAzNzIuNTk4IDI1NlpNMTkxLjkzOCA5NkMxNzQuNDQzIDk2IDE1OS45NDkgODEuNSAxNTkuOTQ5IDY0UzE3NC40NDMgMzIgMTkxLjkzOCAzMlMyMjMuOTI4IDQ2LjUgMjIzLjkyOCA2NFMyMDkuNDMyIDk2IDE5MS45MzggOTZIMjQ3LjA0NUMyNTIuNTQzIDg2LjYyNSAyNTUuOTE4IDc1Ljc1IDI1NS45MTggNjRDMjU1LjkxOCAyOC43NSAyMjcuMTc2IDAgMTkxLjkzOCAwUzEyNy45NTkgMjguNzUgMTI3Ljk1OSA2NEMxMjcuOTU5IDc1Ljc1IDEzMS4zMzIgODYuNjI1IDEzNi44MyA5NkgxOTEuOTM4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODcuODQgMTUzLjg5NlYxMTJDMjg3Ljg0IDEwMy4xNjQgMjgwLjY3OCA5NiAyNzEuODQgOTZIMTExLjg0QzEwMy4wMDQgOTYgOTUuODQgMTAzLjE2NCA5NS44NCAxMTJWMTUzLjg5NkM1Ni42ODYgMTc2LjU3NiAyNi42MTUgMjEyLjc5OSAxMS4yNDIgMjU2SDM3Mi40MzdDMzU3LjA2NCAyMTIuNzk5IDMyNi45OTQgMTc2LjU3NiAyODcuODQgMTUzLjg5NlpNMTEgMzg0QzM3LjM4NSA0NTguNTIzIDEwOC4yNzcgNTEyIDE5MS44NCA1MTJTMzQ2LjI5NSA0NTguNTIzIDM3Mi42OCAzODRIMTFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Ornament(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M372.598 256H11.402C4.266 276.057 0 297.479 0 320C0 342.477 4.062 363.955 11.16 384H372.84C379.938 363.955 384 342.477 384 320C384 297.479 379.734 276.057 372.598 256ZM191.938 96C174.443 96 159.949 81.5 159.949 64S174.443 32 191.938 32S223.928 46.5 223.928 64S209.432 96 191.938 96H247.045C252.543 86.625 255.918 75.75 255.918 64C255.918 28.75 227.176 0 191.938 0S127.959 28.75 127.959 64C127.959 75.75 131.332 86.625 136.83 96H191.938Z" />
            <path d="M287.84 153.896V112C287.84 103.164 280.678 96 271.84 96H111.84C103.004 96 95.84 103.164 95.84 112V153.896C56.686 176.576 26.615 212.799 11.242 256H372.437C357.064 212.799 326.994 176.576 287.84 153.896ZM11 384C37.385 458.523 108.277 512 191.84 512S346.295 458.523 372.68 384H11Z" />
        </Icon>
    </>
}