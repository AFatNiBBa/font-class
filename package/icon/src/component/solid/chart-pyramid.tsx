
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-pyramid` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=solid chart-pyramid}
 * @preview ![chart-pyramid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzQuNDExIDE5MkgxMzcuNTM0TDYyLjU1OSAzMjBINDQ5LjQyNkwzNzQuNDExIDE5MlpNMjkyLjk1IDUzQzI3Ni42MTggMjUgMjM1LjM5NyAyNSAyMTguOTU0IDUzTDE1Ni4yNzggMTYwSDM1NS42NTdMMjkyLjk1IDUzWk01MDYuMjc0IDQxN0w0NjguMTggMzUySDQzLjgxNUw1Ljc0MSA0MTdDLTEwLjU5MSA0NDQuODkxIDkuODUyIDQ4MCA0Mi43NDEgNDgwSDQ2OS4yNzZDNTAyLjA1MSA0ODAgNTIyLjYwNiA0NDUgNTA2LjI3NCA0MTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChartPyramid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M374.411 192H137.534L62.559 320H449.426L374.411 192ZM292.95 53C276.618 25 235.397 25 218.954 53L156.278 160H355.657L292.95 53ZM506.274 417L468.18 352H43.815L5.741 417C-10.591 444.891 9.852 480 42.741 480H469.276C502.051 480 522.606 445 506.274 417Z" />
        </Icon>
    </>
}