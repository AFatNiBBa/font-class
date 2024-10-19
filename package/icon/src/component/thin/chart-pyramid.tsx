
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-pyramid` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=thin chart-pyramid}
 * @preview ![chart-pyramid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDYuMjczIDQxN0wyOTIuOTUxIDUzQzI4NC43ODMgMzkgMjcwLjM5NiAzMiAyNTUuOTk0IDMyUzIyNy4xNzUgMzkgMjE4Ljk1MyA1M0w1Ljc0MiA0MTdDLTEwLjU5MiA0NDQuODkxIDkuODUxIDQ4MCA0Mi43NCA0ODBINDY5LjI3NUM1MDIuMDUyIDQ4MCA1MjIuNjA1IDQ0NSA1MDYuMjczIDQxN1pNNDQwLjI1OSAzMzZINzEuNzI4TDE1Ni4wNzYgMTkySDM1NS44NjdMNDQwLjI1OSAzMzZaTTIzMi43NSA2MS4xMDJDMjM3LjU2OCA1Mi44OTggMjQ2LjI1NyA0OCAyNTUuOTk0IDQ4QzI2NS43MTEgNDggMjc0LjM1OSA1Mi44ODMgMjc5LjE0NiA2MS4wOUwzNDYuNDkgMTc2SDE2NS40NDlMMjMyLjc1IDYxLjEwMlpNNDkyLjUyMyA0NTAuNjc0QzQ4Ny43MyA0NTkuMDE4IDQ3OS4wMzkgNDY0IDQ2OS4yNzUgNDY0SDQyLjc0QzMyLjk1NSA0NjQgMjQuMjU2IDQ1OS4wMTQgMTkuNDY2IDQ1MC42NjJDMTQuNzg1IDQ0Mi40OTIgMTQuODE0IDQzMy4xNyAxOS41NDcgNDI1LjA4Nkw2Mi4zNTcgMzUySDQ0OS42MzRMNDkyLjQ1MyA0MjUuMDYxQzQ5Ny4xODUgNDMzLjE3NiA0OTcuMjEzIDQ0Mi41MTIgNDkyLjUyMyA0NTAuNjc0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChartPyramid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M506.273 417L292.951 53C284.783 39 270.396 32 255.994 32S227.175 39 218.953 53L5.742 417C-10.592 444.891 9.851 480 42.74 480H469.275C502.052 480 522.605 445 506.273 417ZM440.259 336H71.728L156.076 192H355.867L440.259 336ZM232.75 61.102C237.568 52.898 246.257 48 255.994 48C265.711 48 274.359 52.883 279.146 61.09L346.49 176H165.449L232.75 61.102ZM492.523 450.674C487.73 459.018 479.039 464 469.275 464H42.74C32.955 464 24.256 459.014 19.466 450.662C14.785 442.492 14.814 433.17 19.547 425.086L62.357 352H449.634L492.453 425.061C497.185 433.176 497.213 442.512 492.523 450.674Z" />
        </Icon>
    </>
}