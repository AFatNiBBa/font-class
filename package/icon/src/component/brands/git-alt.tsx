
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `git-alt` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/git-alt?s=brands git-alt}
 * @preview ![git-alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzkuNTUgMjM2LjA1TDI0NCA0MC40NWEyOC44NyAyOC44NyAwIDAgMC00MC44MSAwbC00MC42NiA0MC42MyA1MS41MiA1MS41MmMyNy4wNi05LjE0IDUyLjY4IDE2Ljc3IDQzLjM5IDQzLjY4bDQ5LjY2IDQ5LjY2YzM0LjIzLTExLjggNjEuMTggMzEgMzUuNDcgNTYuNjktMjYuNDkgMjYuNDktNzAuMjEtMi44Ny01Ni0zNy4zNEwyNDAuMjIgMTk5djEyMS44NWMyNS4zIDEyLjU0IDIyLjI2IDQxLjg1IDkuMDggNTVhMzQuMzQgMzQuMzQgMCAwIDEtNDguNTUgMGMtMTcuNTctMTcuNi0xMS4wNy00Ni45MSAxMS4yNS01NnYtMTIzYy0yMC44LTguNTEtMjQuNi0zMC43NC0xOC42NC00NUwxNDIuNTcgMTAxIDguNDUgMjM1LjE0YTI4Ljg2IDI4Ljg2IDAgMCAwIDAgNDAuODFsMTk1LjYxIDE5NS42YTI4Ljg2IDI4Ljg2IDAgMCAwIDQwLjggMGwxOTQuNjktMTk0LjY5YTI4Ljg2IDI4Ljg2IDAgMCAwIDAtNDAuODF6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function GitAlt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z" />
        </Icon>
    </>
}