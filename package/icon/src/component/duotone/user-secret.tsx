
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-secret` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-secret?s=duotone user-secret}
 * @preview ![user-secret](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NiAzMjBMMjA4IDM3NkwxNzYuMDEyIDQ3OS45NTNMMTg0IDUxMkgyNjRMMjcxLjk4OCA0NzkuOTUzTDI0MCAzNzZMMjcyIDMyMEgxNzZaTTM1MC43NzcgMTYzLjg2N0MzNDEuMjI3IDE2NS45NzUgMzMxLjA5NCAxNjcuOTIgMzIwIDE2OS41MjdWMTg2LjA0M0MzMjAgMjA3IDMwMi43OTEgMjI0IDI4MS41ODQgMjI0SDI2OS4yNUMyNTIuNzkxIDIyNCAyMzguOTYxIDIxMy42MDUgMjMzLjYxNSAxOTkuMDA4QzIzMi4xMDUgMTk0Ljg4NyAyMjguMzg5IDE5MiAyMjQgMTkyUzIxNS44OTUgMTk0Ljg4NyAyMTQuMzg1IDE5OS4wMDhDMjA5LjAzOSAyMTMuNjA1IDE5NS4yMDkgMjI0IDE3OC43NSAyMjRIMTY2LjQxNkMxNDUuMjA5IDIyNCAxMjggMjA3IDEyOCAxODYuMDQzVjE2OS41MjdDMTE2LjkwNiAxNjcuOTIgMTA2Ljc3MyAxNjUuOTc1IDk3LjIyMyAxNjMuODY3Qzk2LjgzNiAxNjcuOTIyIDk2IDE3MS44NDQgOTYgMTc2Qzk2IDI0Ni42OTEgMTUzLjMwNyAzMDQgMjI0IDMwNFMzNTIgMjQ2LjY5MSAzNTIgMTc2QzM1MiAxNzEuODQ0IDM1MS4xNjQgMTY3LjkyMiAzNTAuNzc3IDE2My44NjdaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTEwNS40OTIgMjI0SDQ4LjAxNkMzNi42OTcgMjI0IDI4Ljk1NyAyMzUuNDMgMzMuMTYgMjQ1Ljk0MUw3MC4zMDkgMzM4LjgxMkMyNy44NjcgMzcwLjM1OSAwIDQyMC4zNzEgMCA0NzcuMzMyQzAgNDk2LjQ3NyAxNS41MjMgNTEyIDM0LjY2NCA1MTJIMTg0TDExNy45MDYgMjQ3LjYyM0MxMTIuOTM5IDI0MC4yNzkgMTA4Ljg2NyAyMzIuMzIyIDEwNS40OTIgMjI0Wk0zNzcuNjkxIDMzOC44MTJMNDE0Ljg0IDI0NS45NDFDNDE5LjA0MyAyMzUuNDMgNDExLjMwMyAyMjQgMzk5Ljk4NCAyMjRIMzQyLjUwOEMzMzkuMTMzIDIzMi4zMjIgMzM1LjA2MSAyNDAuMjc5IDMzMC4wOTQgMjQ3LjYyM0wyNjQgNTEySDQxMy4zMzZDNDMyLjQ3NyA1MTIgNDQ4IDQ5Ni40NzcgNDQ4IDQ3Ny4zMzJDNDQ4IDQyMC4zNjcgNDIwLjEzMyAzNzAuMzU1IDM3Ny42OTEgMzM4LjgxMlpNMjgxLjU4NCAyMjRDMzAyLjc5MSAyMjQgMzIwIDIwNyAzMjAgMTg2LjA0M1YxNjkuNTI3QzM3Ny4zMzIgMTYxLjIyNSA0MTYgMTQ1Ljc1NiA0MTYgMTI4QzQxNiAxMTEuOTE4IDM4NC4yNSA5Ny43MTkgMzM1LjY4NiA4OS4wMDhDMzIzLjgwNSA0NS4xNDggMzA0Ljk0NSAwIDI3Ny40MzggMEMyNjcuMDYyIDAgMjU3LjgxMyA0LjUgMjUwLjA2MiAxMC41QzIzNC44MTIgMjIuMzc1IDIxMy4zMTIgMjIuMzc1IDE5OC4wNjIgMTAuNUMxOTAuMzEyIDQuNSAxODEuMDYyIDAgMTcwLjY4OCAwQzE0My4xNzggMCAxMjQuNDMyIDQ1LjE1NiAxMTIuNDk2IDg4Ljk3N0M2My44MjYgOTcuNjggMzIgMTExLjg5OCAzMiAxMjhDMzIgMTQ1Ljc1NiA3MC42NjggMTYxLjIyNSAxMjggMTY5LjUyN1YxODYuMDQzQzEyOCAyMDcgMTQ1LjIwOSAyMjQgMTY2LjQxNiAyMjRIMTc4Ljc1QzE5NS4yMDkgMjI0IDIwOS4wMzkgMjEzLjYwNSAyMTQuMzg1IDE5OS4wMDhDMjE1Ljg5NSAxOTQuODg3IDIxOS42MTEgMTkyIDIyNCAxOTJTMjMyLjEwNSAxOTQuODg3IDIzMy42MTUgMTk5LjAwOEMyMzguOTYxIDIxMy42MDUgMjUyLjc5MSAyMjQgMjY5LjI1IDIyNEgyODEuNTg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserSecret(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M176 320L208 376L176.012 479.953L184 512H264L271.988 479.953L240 376L272 320H176ZM350.777 163.867C341.227 165.975 331.094 167.92 320 169.527V186.043C320 207 302.791 224 281.584 224H269.25C252.791 224 238.961 213.605 233.615 199.008C232.105 194.887 228.389 192 224 192S215.895 194.887 214.385 199.008C209.039 213.605 195.209 224 178.75 224H166.416C145.209 224 128 207 128 186.043V169.527C116.906 167.92 106.773 165.975 97.223 163.867C96.836 167.922 96 171.844 96 176C96 246.691 153.307 304 224 304S352 246.691 352 176C352 171.844 351.164 167.922 350.777 163.867Z" />
            <path d="M105.492 224H48.016C36.697 224 28.957 235.43 33.16 245.941L70.309 338.812C27.867 370.359 0 420.371 0 477.332C0 496.477 15.523 512 34.664 512H184L117.906 247.623C112.939 240.279 108.867 232.322 105.492 224ZM377.691 338.812L414.84 245.941C419.043 235.43 411.303 224 399.984 224H342.508C339.133 232.322 335.061 240.279 330.094 247.623L264 512H413.336C432.477 512 448 496.477 448 477.332C448 420.367 420.133 370.355 377.691 338.812ZM281.584 224C302.791 224 320 207 320 186.043V169.527C377.332 161.225 416 145.756 416 128C416 111.918 384.25 97.719 335.686 89.008C323.805 45.148 304.945 0 277.438 0C267.062 0 257.813 4.5 250.062 10.5C234.812 22.375 213.312 22.375 198.062 10.5C190.312 4.5 181.062 0 170.688 0C143.178 0 124.432 45.156 112.496 88.977C63.826 97.68 32 111.898 32 128C32 145.756 70.668 161.225 128 169.527V186.043C128 207 145.209 224 166.416 224H178.75C195.209 224 209.039 213.605 214.385 199.008C215.895 194.887 219.611 192 224 192S232.105 194.887 233.615 199.008C238.961 213.605 252.791 224 269.25 224H281.584Z" />
        </Icon>
    </>
}