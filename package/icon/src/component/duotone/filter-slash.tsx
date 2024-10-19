
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `filter-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filter-slash?s=duotone filter-slash}
 * @preview ![filter-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NS42MjEgNDAwQzI1NS42MjEgNDA3LjgyOCAyNTkuNDM0IDQxNS4xNzIgMjY1Ljg3MSA0MTkuNjU2TDM0NS44NzEgNDc1LjY0MUMzNjEuNjUyIDQ4Ni42ODggMzgzLjYyMSA0NzUuNSAzODMuNjIxIDQ1NS45ODRWMzk3LjY1OEwyNTUuNjIxIDI5Ny4zMzZWNDAwWk01NDIuOTIgMzJIOTYuMzIyQzg5LjcyNyAzMiA4My44OTggMzMuODc5IDc5IDM2LjkwNEwzOTkuMjgzIDI4Ny45MzRMNTY4LjI0NiA4NC4xODZDNTg1LjU4NiA2My4yNzUgNTcwLjQwOCAzMiA1NDIuOTIgMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTYzMC44MTIgNDY5LjEwMkwzOC44MTQgNS4xMUMzNC40MDcgMS42NzIgMjkuMTg5IDAgMjQuMDMyIDBDMTYuOTA3IDAgOS44NDUgMy4xNTcgNS4xMjYgOS4xODhDLTMuMDYxIDE5LjYyNSAtMS4yNDkgMzQuNzE5IDkuMTg5IDQyLjg5MUw2MDEuMTg3IDUwNi44ODNDNjExLjY4NyA1MTUuMDg2IDYyNi43NDkgNTEzLjIxMSA2MzQuODc0IDUwMi44MDVDNjQzLjA2MiA0OTIuMzY4IDY0MS4yNDkgNDc3LjI3NCA2MzAuODEyIDQ2OS4xMDJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FilterSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M255.621 400C255.621 407.828 259.434 415.172 265.871 419.656L345.871 475.641C361.652 486.688 383.621 475.5 383.621 455.984V397.658L255.621 297.336V400ZM542.92 32H96.322C89.727 32 83.898 33.879 79 36.904L399.283 287.934L568.246 84.186C585.586 63.275 570.408 32 542.92 32Z" />
            <path d="M630.812 469.102L38.814 5.11C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.157 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.187 506.883C611.687 515.086 626.749 513.211 634.874 502.805C643.062 492.368 641.249 477.274 630.812 469.102Z" />
        </Icon>
    </>
}