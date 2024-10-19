
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lightbulb-slash` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-slash?s=regular lightbulb-slash}
 * @preview ![lightbulb-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzAuODEyIDQ2OS4xMDlMNDM0LjY1IDMxNS4zNjNDNDQwLjk2IDMwNi4wOSA0NDcuMTg3IDI5Ny43NTggNDUyLjQzNyAyOTEuNzczQzQ3OS41NjIgMjYwLjgzNiA0OTUuOTk5IDIyMC4zNjcgNDk1Ljk5OSAxNzUuOTkyQzQ5NS45OTkgNzguNzk3IDQxNy4yMTIgMC4wMDQgMzE5Ljk5OSAwQzI0Ni45MzMgMC4yMjcgMTg4Ljg4NCA0Mi45OTYgMTYxLjUxNSAxMDEuMjg1TDM4LjgxMiA1LjExM0MyOC4zNDMgLTMuMDU5IDEzLjMxMiAtMS4yNDYgNS4xMDkgOS4xOTFDLTMuMDYzIDE5LjYyOSAtMS4yMzUgMzQuNzIzIDkuMTg3IDQyLjg5NUw2MDEuMTg3IDUwNi44OTFDNjA1LjU5MyA1MTAuMzI4IDYxMC43OTYgNTEyIDYxNS45ODQgNTEyQzYyMy4xMDkgNTEyIDYzMC4xNTYgNTA4Ljg0NCA2MzQuODkgNTAyLjgxMkM2NDMuMDYyIDQ5Mi4zNzUgNjQxLjIzNCA0NzcuMjgxIDYzMC44MTIgNDY5LjEwOVpNMzk2LjgxNCAyODUuNzA3TDIwMC4xODcgMTMxLjU5NEMyMTYuOTc2IDg1LjkzOCAyNTkuMjAzIDQ4LjE4OCAzMTkuOTk0IDQ4QzM5MC41NzkgNDguMDA0IDQ0Ny45OTkgMTA1LjQyMiA0NDcuOTk5IDE3NS45OTJDNDQ3Ljk5OSAyMDYuOTY1IDQzNi43NTcgMjM2Ljg0OCA0MTYuMzU1IDI2MC4xMTdDNDEwLjIxIDI2Ny4xMjUgNDAzLjUxNSAyNzUuOTg0IDM5Ni44MTQgMjg1LjcwN1pNMzA1LjkxNSAzMzYuMDA0SDI3Mi42OTNDMjY0LjY1NiAzMTkuMDMxIDI1NC44NTcgMzAyLjY5OSAyNDUuMDAzIDI4OC4yNjZMMTQ4LjA3OCAyMTIuMjk3QzE1NC40IDI0Mi4yNzMgMTY4LjA3NCAyNjkuNTQ3IDE4Ny41NjIgMjkxLjc3M0MyMDQuMDkzIDMxMC42MTcgMjI5LjkwNiAzNTAuMDA0IDIzOS43ODEgMzgzLjIyM0MyMzkuODEyIDM4My40NzMgMjM5Ljg0MyAzODMuNzM4IDIzOS44NzQgMzg0LjAwNEgzNjcuMTU4TDMwNS45MTUgMzM2LjAwNFpNMjQwLjA2MiA0NTQuMzI4QzI0MC4wNjIgNDYwLjYyNSAyNDEuOTM3IDQ2Ni43ODEgMjQ1LjQwNiA0NzIuMDMxTDI2Mi40OTkgNDk3LjcxOUMyNjcuNzQ5IDUwNS41OTQgMjc5LjY4NyA1MTIgMjg5LjE1NiA1MTJIMzUwLjg3NEMzNjAuMzEyIDUxMiAzNzIuMjQ5IDUwNS41OTQgMzc3LjQ5OSA0OTcuNzE5TDM5NC41OTMgNDcyLjAzMUMzOTcuNTMxIDQ2Ny41OTQgMzk5LjkzNyA0NTkuNjU2IDM5OS45MzcgNDU0LjMyOEwzOTkuOTk5IDQxNS45ODRIMjM5Ljk5OUwyNDAuMDYyIDQ1NC4zMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LightbulbSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M630.812 469.109L434.65 315.363C440.96 306.09 447.187 297.758 452.437 291.773C479.562 260.836 495.999 220.367 495.999 175.992C495.999 78.797 417.212 0.004 319.999 0C246.933 0.227 188.884 42.996 161.515 101.285L38.812 5.113C28.343 -3.059 13.312 -1.246 5.109 9.191C-3.063 19.629 -1.235 34.723 9.187 42.895L601.187 506.891C605.593 510.328 610.796 512 615.984 512C623.109 512 630.156 508.844 634.89 502.812C643.062 492.375 641.234 477.281 630.812 469.109ZM396.814 285.707L200.187 131.594C216.976 85.938 259.203 48.188 319.994 48C390.579 48.004 447.999 105.422 447.999 175.992C447.999 206.965 436.757 236.848 416.355 260.117C410.21 267.125 403.515 275.984 396.814 285.707ZM305.915 336.004H272.693C264.656 319.031 254.857 302.699 245.003 288.266L148.078 212.297C154.4 242.273 168.074 269.547 187.562 291.773C204.093 310.617 229.906 350.004 239.781 383.223C239.812 383.473 239.843 383.738 239.874 384.004H367.158L305.915 336.004ZM240.062 454.328C240.062 460.625 241.937 466.781 245.406 472.031L262.499 497.719C267.749 505.594 279.687 512 289.156 512H350.874C360.312 512 372.249 505.594 377.499 497.719L394.593 472.031C397.531 467.594 399.937 459.656 399.937 454.328L399.999 415.984H239.999L240.062 454.328Z" />
        </Icon>
    </>
}