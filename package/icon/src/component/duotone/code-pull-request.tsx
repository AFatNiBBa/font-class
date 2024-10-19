
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=duotone code-pull-request}
 * @preview ![code-pull-request](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4IDE2OS4yNDZWMzQyLjc1NEM1Ny44MTIgMzM4LjQ2MSA2OC42MDUgMzM2IDgwIDMzNlMxMDIuMTg5IDMzOC40NjEgMTEyIDM0Mi43NTRWMTY5LjI0NkMxMDIuMTg5IDE3My41MzkgOTEuMzk1IDE3NiA4MCAxNzZTNTcuODEyIDE3My41MzkgNDggMTY5LjI0NlpNMzY4IDY0SDMyMFYxNkMzMjAgOS43ODEgMzE2LjQwNiA0LjE1NiAzMTAuNzgxIDEuNUMzMDUuMTg4IC0xLjA5NCAyOTguNTMxIC0wLjI4MSAyOTMuNzUgMy43MTlMMTk3Ljc1IDgzLjcxOUMxOTQuMDk0IDg2Ljc1IDE5MiA5MS4yNSAxOTIgOTZTMTk0LjA5NCAxMDUuMjUgMTk3Ljc1IDEwOC4yODFMMjkzLjc1IDE4OC4yODFDMjk2LjY4OCAxOTAuNzUgMzAwLjMxMiAxOTIgMzA0IDE5MkMzMDYuMzEyIDE5MiAzMDguNjI1IDE5MS41IDMxMC43ODEgMTkwLjVDMzE2LjQwNiAxODcuODQ0IDMyMCAxODIuMjE5IDMyMCAxNzZWMTI4SDM2OEMzODUuNjU2IDEyOCA0MDAgMTQyLjM0NCA0MDAgMTYwVjM0Mi43NTRDNDA5LjgxMiAzMzguNDYxIDQyMC42MDUgMzM2IDQzMiAzMzZTNDU0LjE4OSAzMzguNDYxIDQ2NCAzNDIuNzU0VjE2MEM0NjQgMTA3LjA2MiA0MjAuOTM4IDY0IDM2OCA2NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNODAgMTZDMzUuODE4IDE2IDAgNTEuODE2IDAgOTZTMzUuODE4IDE3NiA4MCAxNzZDMTI0LjE4NCAxNzYgMTYwIDE0MC4xODQgMTYwIDk2UzEyNC4xODQgMTYgODAgMTZaTTgwIDEyMEM2Ni43NjggMTIwIDU2IDEwOS4yMzQgNTYgOTZTNjYuNzY4IDcyIDgwIDcyQzkzLjIzNCA3MiAxMDQgODIuNzY2IDEwNCA5NlM5My4yMzQgMTIwIDgwIDEyMFpNODAgMzM2QzM1LjgxOCAzMzYgMCAzNzEuODE2IDAgNDE2UzM1LjgxOCA0OTYgODAgNDk2QzEyNC4xODQgNDk2IDE2MCA0NjAuMTg0IDE2MCA0MTZTMTI0LjE4NCAzMzYgODAgMzM2Wk04MCA0NDBDNjYuNzY4IDQ0MCA1NiA0MjkuMjM0IDU2IDQxNlM2Ni43NjggMzkyIDgwIDM5MkM5My4yMzQgMzkyIDEwNCA0MDIuNzY2IDEwNCA0MTZTOTMuMjM0IDQ0MCA4MCA0NDBaTTQzMiAzMzZDMzg3LjgxOCAzMzYgMzUyIDM3MS44MTYgMzUyIDQxNlMzODcuODE4IDQ5NiA0MzIgNDk2QzQ3Ni4xODQgNDk2IDUxMiA0NjAuMTg0IDUxMiA0MTZTNDc2LjE4NCAzMzYgNDMyIDMzNlpNNDMyIDQ0MEM0MTguNzY4IDQ0MCA0MDggNDI5LjIzNCA0MDggNDE2UzQxOC43NjggMzkyIDQzMiAzOTJDNDQ1LjIzNCAzOTIgNDU2IDQwMi43NjYgNDU2IDQxNlM0NDUuMjM0IDQ0MCA0MzIgNDQwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CodePullRequest(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M48 169.246V342.754C57.812 338.461 68.605 336 80 336S102.189 338.461 112 342.754V169.246C102.189 173.539 91.395 176 80 176S57.812 173.539 48 169.246ZM368 64H320V16C320 9.781 316.406 4.156 310.781 1.5C305.188 -1.094 298.531 -0.281 293.75 3.719L197.75 83.719C194.094 86.75 192 91.25 192 96S194.094 105.25 197.75 108.281L293.75 188.281C296.688 190.75 300.312 192 304 192C306.312 192 308.625 191.5 310.781 190.5C316.406 187.844 320 182.219 320 176V128H368C385.656 128 400 142.344 400 160V342.754C409.812 338.461 420.605 336 432 336S454.189 338.461 464 342.754V160C464 107.062 420.938 64 368 64Z" />
            <path d="M80 16C35.818 16 0 51.816 0 96S35.818 176 80 176C124.184 176 160 140.184 160 96S124.184 16 80 16ZM80 120C66.768 120 56 109.234 56 96S66.768 72 80 72C93.234 72 104 82.766 104 96S93.234 120 80 120ZM80 336C35.818 336 0 371.816 0 416S35.818 496 80 496C124.184 496 160 460.184 160 416S124.184 336 80 336ZM80 440C66.768 440 56 429.234 56 416S66.768 392 80 392C93.234 392 104 402.766 104 416S93.234 440 80 440ZM432 336C387.818 336 352 371.816 352 416S387.818 496 432 496C476.184 496 512 460.184 512 416S476.184 336 432 336ZM432 440C418.768 440 408 429.234 408 416S418.768 392 432 392C445.234 392 456 402.766 456 416S445.234 440 432 440Z" />
        </Icon>
    </>
}