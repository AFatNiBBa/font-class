
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `exclamation` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=solid exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCAzNzZDMzMuMDcyIDM3NiA4IDQwMS4wNzIgOCA0MzJTMzMuMDcyIDQ4OCA2NCA0ODhTMTIwIDQ2Mi45MjggMTIwIDQzMlM5NC45MjggMzc2IDY0IDM3NlpNNjIuNDc1IDMzNS45NjlDODQuNTkyIDMzNi44MzQgMTAzLjIwNyAzMTkuMTM3IDEwNC4wNDcgMjk2LjQzOUwxMTEuOTY5IDgzLjEzN0MxMTIuMDA4IDgxLjkzNCAxMTIuMDEyIDgwLjYwNSAxMTEuOTY5IDc5LjM4NUMxMTAuOTU5IDUyLjE5OSA4OC42NjYgMzEgNjIuMTc0IDMyLjAzN0MzNS42ODQgMzMuMDcyIDE1LjAyNyA1NS45NTEgMTYuMDM1IDgzLjEzN0wyMy45NTUgMjk2LjQzOUMyNC43OTkgMzE3LjY2NCA0MS40MzYgMzM1LjE0NiA2Mi40NzUgMzM1Ljk2OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Exclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 128 512" {...props}>
            <path d="M64 376C33.072 376 8 401.072 8 432S33.072 488 64 488S120 462.928 120 432S94.928 376 64 376ZM62.475 335.969C84.592 336.834 103.207 319.137 104.047 296.439L111.969 83.137C112.008 81.934 112.012 80.605 111.969 79.385C110.959 52.199 88.666 31 62.174 32.037C35.684 33.072 15.027 55.951 16.035 83.137L23.955 296.439C24.799 317.664 41.436 335.146 62.475 335.969Z" />
        </Icon>
    </>
}