
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=thin arrow-turn-up}
 * @preview ![arrow-turn-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDkuODEgMTU5LjQ2OUMzNDguMjQ3IDE2MS4xMjUgMzQ2LjEyMiAxNjEuOTY5IDM0My45OTcgMTYxLjk2OUMzNDIuMDI4IDE2MS45NjkgMzQwLjAyOCAxNjEuMjUgMzM4LjQ5NyAxNTkuNzgyTDE5OS45OTggMjguNTgyVjQ0MS45NkMxOTkuOTk4IDQ4MS42NDcgMTY3LjY4NiA1MTMuOTU4IDEyNy45OTkgNTEzLjk1OEg4QzMuNTk0IDUxMy45NTggMCA1MTAuMzY1IDAgNTA1Ljk1OVMzLjU5NCA0OTcuOTU5IDggNDk3Ljk1OUgxMjcuOTk5QzE1OC44NzQgNDk3Ljk1OSAxODMuOTk5IDQ3Mi44MzUgMTgzLjk5OSA0NDEuOTZWMjguNTgyTDQ1LjUgMTU5Ljc4MkM0Mi4zMTIgMTYyLjgxMyAzNy4yNSAxNjIuNjU2IDM0LjE4NyAxNTkuNDY5QzMxLjE1NiAxNTYuMjUgMzEuMjgxIDE1MS4xODggMzQuNSAxNDguMTU3TDE4Ni40OTggNC4xNjFDMTg5LjU2MSAxLjIyNCAxOTQuNDM2IDEuMjI0IDE5Ny40OTggNC4xNjFMMzQ5LjQ5NyAxNDguMTU3QzM1Mi43MTYgMTUxLjE4OCAzNTIuODQxIDE1Ni4yNSAzNDkuODEgMTU5LjQ2OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowTurnUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M349.81 159.469C348.247 161.125 346.122 161.969 343.997 161.969C342.028 161.969 340.028 161.25 338.497 159.782L199.998 28.582V441.96C199.998 481.647 167.686 513.958 127.999 513.958H8C3.594 513.958 0 510.365 0 505.959S3.594 497.959 8 497.959H127.999C158.874 497.959 183.999 472.835 183.999 441.96V28.582L45.5 159.782C42.312 162.813 37.25 162.656 34.187 159.469C31.156 156.25 31.281 151.188 34.5 148.157L186.498 4.161C189.561 1.224 194.436 1.224 197.498 4.161L349.497 148.157C352.716 151.188 352.841 156.25 349.81 159.469Z" />
        </Icon>
    </>
}