
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `light-ceiling` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=duotone light-ceiling}
 * @preview ![light-ceiling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiA0NDhDMTkyIDQ4My4zNzUgMjIwLjYyNSA1MTIgMjU2IDUxMlMzMjAgNDgzLjM3NSAzMjAgNDQ4SDE5MlpNMjg3Ljk1OSAxNjIuMjAzVjBIMjIzLjk1OVYxNjIuMjAzQzIzNC41IDE2MC45MDIgMjQ1LjE0MSAxNjAgMjU1Ljk1OSAxNjBTMjc3LjQxOCAxNjAuOTAyIDI4Ny45NTkgMTYyLjIwM1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTEyIDM4MC43OTdWMzg0QzUxMiA0MDMuMTk5IDQ5OS4xMzMgNDE2IDQ3OS44MyA0MTZIMzIuMTdDMTIuODY3IDQxNiAwIDQwMy4xOTkgMCAzODRWMzgwLjc5N0MxNi4wMSAyNTMuMzk4IDEyOCAxNjAgMjU2IDE2MFM0OTUuOTkgMjUzLjM5OCA1MTIgMzgwLjc5N1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function LightCeiling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M192 448C192 483.375 220.625 512 256 512S320 483.375 320 448H192ZM287.959 162.203V0H223.959V162.203C234.5 160.902 245.141 160 255.959 160S277.418 160.902 287.959 162.203Z" />
            <path d="M512 380.797V384C512 403.199 499.133 416 479.83 416H32.17C12.867 416 0 403.199 0 384V380.797C16.01 253.398 128 160 256 160S495.99 253.398 512 380.797Z" />
        </Icon>
    </>
}