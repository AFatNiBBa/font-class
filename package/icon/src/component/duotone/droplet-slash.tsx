
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `droplet-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=duotone droplet-slash}
 * @preview ![droplet-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE0NCAzMzMuODc4QzE0NCA0MzIuMzc2IDIyMi43NSA1MTIgMzIwIDUxMkMzNzIuODExIDUxMiA0MjAuMDM5IDQ4OC40MDMgNDUyLjI5MSA0NTEuMTY5TDE3NC43NzMgMjMzLjY1OUMxNTYuNTkgMjYzLjkzNSAxNDQgMjk0LjY0NiAxNDQgMzMzLjg3OFpNMzQ5LjI1IDIyLjEzMkMzNDEuMjUgLTYuNzQyIDI5OS43NSAtNy45OTIgMjkwLjc1IDIyLjEzMkMyNzQuMzE0IDc3LjU5MSAyNTEuMzE0IDExOC42OTUgMjI4LjM4MyAxNTMuNjkxTDQ5My43NTQgMzYxLjY4MkM0OTUuMTg0IDM1Mi42MjIgNDk2IDM0My4zNTIgNDk2IDMzMy44NzhDNDk2IDIyMi4xMjkgMzk2LjI1IDE4MC42MyAzNDkuMjUgMjIuMTMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MzAuODExIDQ2OS4xMDNMMzguODE0IDUuMTFDMzQuNDA3IDEuNjcyIDI5LjE4OSAwLjAwMSAyNC4wMzIgMC4wMDFDMTYuOTA3IDAuMDAxIDkuODQ1IDMuMTU3IDUuMTI2IDkuMTg4Qy0zLjA2MSAxOS42MjUgLTEuMjQ5IDM0LjcxOSA5LjE4OSA0Mi44OTFMNjAxLjE4NiA1MDYuODgzQzYxMS42ODYgNTE1LjA4NiA2MjYuNzQ5IDUxMy4yMTEgNjM0Ljg3NCA1MDIuODA1QzY0My4wNjEgNDkyLjM2OCA2NDEuMjQ5IDQ3Ny4yNzUgNjMwLjgxMSA0NjkuMTAzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DropletSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M144 333.878C144 432.376 222.75 512 320 512C372.811 512 420.039 488.403 452.291 451.169L174.773 233.659C156.59 263.935 144 294.646 144 333.878ZM349.25 22.132C341.25 -6.742 299.75 -7.992 290.75 22.132C274.314 77.591 251.314 118.695 228.383 153.691L493.754 361.682C495.184 352.622 496 343.352 496 333.878C496 222.129 396.25 180.63 349.25 22.132Z" />
            <path d="M630.811 469.103L38.814 5.11C34.407 1.672 29.189 0.001 24.032 0.001C16.907 0.001 9.845 3.157 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.368 641.249 477.275 630.811 469.103Z" />
        </Icon>
    </>
}