
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `code-merge` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=duotone code-merge}
 * @preview ![code-merge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAyNzJDMjg4IDI4My4zOTUgMjkwLjQ2MSAyOTQuMTg4IDI5NC43NTQgMzA0SDIyNEMxODEuNDg4IDMwNCAxNDIuNDUxIDI4OC44NDQgMTEyIDI2My42NTZWMzU4Ljc1NEMxMDIuMTg5IDM1NC40NjEgOTEuMzk1IDM1MiA4MCAzNTJTNTcuODEyIDM1NC40NjEgNDggMzU4Ljc1NFYxNTMuMjQ2QzU3LjgxMiAxNTcuNTM5IDY4LjYwNSAxNjAgODAgMTYwQzkyLjQ4IDE2MCAxMDQuMTQzIDE1Ni44OTUgMTE0LjY3IDE1MS43OTdDMTI1LjYzMSAyMDIuMTMzIDE3MC40MyAyNDAgMjI0IDI0MEgyOTQuNzU0QzI5MC40NjEgMjQ5LjgxMiAyODggMjYwLjYwNSAyODggMjcyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik04MCAzNTJDMzUuODE4IDM1MiAwIDM4Ny44MTYgMCA0MzJTMzUuODE4IDUxMiA4MCA1MTJDMTI0LjE4NCA1MTIgMTYwIDQ3Ni4xODQgMTYwIDQzMlMxMjQuMTg0IDM1MiA4MCAzNTJaTTgwIDQ1NkM2Ni43NjggNDU2IDU2IDQ0NS4yMzQgNTYgNDMyUzY2Ljc2OCA0MDggODAgNDA4QzkzLjIzNCA0MDggMTA0IDQxOC43NjYgMTA0IDQzMlM5My4yMzQgNDU2IDgwIDQ1NlpNODAgMEMzNS44MTggMCAwIDM1LjgxNiAwIDgwUzM1LjgxOCAxNjAgODAgMTYwQzEyNC4xODQgMTYwIDE2MCAxMjQuMTg0IDE2MCA4MFMxMjQuMTg0IDAgODAgMFpNODAgMTA0QzY2Ljc2OCAxMDQgNTYgOTMuMjM0IDU2IDgwUzY2Ljc2OCA1NiA4MCA1NkM5My4yMzQgNTYgMTA0IDY2Ljc2NiAxMDQgODBTOTMuMjM0IDEwNCA4MCAxMDRaTTM2OCAxOTJDMzIzLjgxOCAxOTIgMjg4IDIyNy44MTYgMjg4IDI3MlMzMjMuODE4IDM1MiAzNjggMzUyQzQxMi4xODQgMzUyIDQ0OCAzMTYuMTg0IDQ0OCAyNzJTNDEyLjE4NCAxOTIgMzY4IDE5MlpNMzY4IDI5NkMzNTQuNzY4IDI5NiAzNDQgMjg1LjIzNCAzNDQgMjcyUzM1NC43NjggMjQ4IDM2OCAyNDhDMzgxLjIzNCAyNDggMzkyIDI1OC43NjYgMzkyIDI3MlMzODEuMjM0IDI5NiAzNjggMjk2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CodeMerge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M288 272C288 283.395 290.461 294.188 294.754 304H224C181.488 304 142.451 288.844 112 263.656V358.754C102.189 354.461 91.395 352 80 352S57.812 354.461 48 358.754V153.246C57.812 157.539 68.605 160 80 160C92.48 160 104.143 156.895 114.67 151.797C125.631 202.133 170.43 240 224 240H294.754C290.461 249.812 288 260.605 288 272Z" />
            <path d="M80 352C35.818 352 0 387.816 0 432S35.818 512 80 512C124.184 512 160 476.184 160 432S124.184 352 80 352ZM80 456C66.768 456 56 445.234 56 432S66.768 408 80 408C93.234 408 104 418.766 104 432S93.234 456 80 456ZM80 0C35.818 0 0 35.816 0 80S35.818 160 80 160C124.184 160 160 124.184 160 80S124.184 0 80 0ZM80 104C66.768 104 56 93.234 56 80S66.768 56 80 56C93.234 56 104 66.766 104 80S93.234 104 80 104ZM368 192C323.818 192 288 227.816 288 272S323.818 352 368 352C412.184 352 448 316.184 448 272S412.184 192 368 192ZM368 296C354.768 296 344 285.234 344 272S354.768 248 368 248C381.234 248 392 258.766 392 272S381.234 296 368 296Z" />
        </Icon>
    </>
}