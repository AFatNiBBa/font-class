
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `slash` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=regular slash}
 * @preview ![slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOC44MTQgNS4xMDlDMzQuNDA3IDEuNjcyIDI5LjE4OSAwIDI0LjAzMiAwQzE2LjkwNyAwIDkuODQ1IDMuMTU2IDUuMTI2IDkuMTg3Qy0zLjA2MSAxOS42MjUgLTEuMjQ5IDM0LjcxOCA5LjE4OSA0Mi44OUw2MDEuMTg2IDUwNi44ODNDNjExLjY4NiA1MTUuMDg2IDYyNi43NDkgNTEzLjIxMSA2MzQuODc0IDUwMi44MDVDNjQzLjA2MSA0OTIuMzY3IDY0MS4yNDkgNDc3LjI3NCA2MzAuODExIDQ2OS4xMDJMMzguODE0IDUuMTA5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Slash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102L38.814 5.109Z" />
        </Icon>
    </>
}