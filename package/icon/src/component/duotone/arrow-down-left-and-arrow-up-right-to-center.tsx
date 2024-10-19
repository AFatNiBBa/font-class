
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-left-and-arrow-up-right-to-center` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left-and-arrow-up-right-to-center?s=duotone arrow-down-left-and-arrow-up-right-to-center}
 * @preview ![arrow-down-left-and-arrow-up-right-to-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0LjYyNSA1MDIuNjI1TDE3NiAzODEuMjVWNDMyQzE3NiA0NDkuNjg4IDE5MC4zMTMgNDY0IDIwOCA0NjRTMjQwIDQ0OS42ODggMjQwIDQzMlYzMDRDMjQwIDI5OS44MzYgMjM5LjE1MiAyOTUuNjg4IDIzNy41MzUgMjkxLjc3N0MyMzQuMjk1IDI4My45NDUgMjI4LjA1NyAyNzcuNzAzIDIyMC4yMjMgMjc0LjQ2NUMyMTYuMzEzIDI3Mi44NDggMjEyLjE2NCAyNzIgMjA4IDI3Mkg4MEM2Mi4zMTMgMjcyIDQ4IDI4Ni4zMTIgNDggMzA0UzYyLjMxMyAzMzYgODAgMzM2SDEzMC43NUw5LjM3NSA0NTcuMzc1Qy0zLjEyNSA0NjkuODc1IC0zLjEyNSA0OTAuMTI1IDkuMzc1IDUwMi42MjVTNDIuMTI1IDUxNS4xMjUgNTQuNjI1IDUwMi42MjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI3NC40NjMgMjIwLjIxOUMyNzcuNzA1IDIyOC4wNTkgMjgzLjk0MSAyMzQuMjk3IDI5MS43ODMgMjM3LjUzOUMyOTUuNjg5IDIzOS4xNTIgMjk5LjgzOCAyNDAgMzA0IDI0MEg0MzJDNDQ5LjY4OCAyNDAgNDY0IDIyNS42ODggNDY0IDIwOFM0NDkuNjg4IDE3NiA0MzIgMTc2SDM4MS4yNUw1MDIuNjI1IDU0LjYyNUM1MTUuMTI1IDQyLjEyNSA1MTUuMTI1IDIxLjg3NSA1MDIuNjI1IDkuMzc1QzQ5MC4xMzIgLTMuMTE4IDQ2OS44ODIgLTMuMTMyIDQ1Ny4zNzUgOS4zNzVMMzM2IDEzMC43NVY4MEMzMzYgNjIuMzEzIDMyMS42ODggNDggMzA0IDQ4UzI3MiA2Mi4zMTMgMjcyIDgwVjIwOEMyNzIgMjEyLjE2NCAyNzIuODQ4IDIxNi4zMTMgMjc0LjQ2MyAyMjAuMjE5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowDownLeftAndArrowUpRightToCenter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M54.625 502.625L176 381.25V432C176 449.688 190.313 464 208 464S240 449.688 240 432V304C240 299.836 239.152 295.688 237.535 291.777C234.295 283.945 228.057 277.703 220.223 274.465C216.313 272.848 212.164 272 208 272H80C62.313 272 48 286.312 48 304S62.313 336 80 336H130.75L9.375 457.375C-3.125 469.875 -3.125 490.125 9.375 502.625S42.125 515.125 54.625 502.625Z" />
            <path d="M274.463 220.219C277.705 228.059 283.941 234.297 291.783 237.539C295.689 239.152 299.838 240 304 240H432C449.688 240 464 225.688 464 208S449.688 176 432 176H381.25L502.625 54.625C515.125 42.125 515.125 21.875 502.625 9.375C490.132 -3.118 469.882 -3.132 457.375 9.375L336 130.75V80C336 62.313 321.688 48 304 48S272 62.313 272 80V208C272 212.164 272.848 216.313 274.463 220.219Z" />
        </Icon>
    </>
}