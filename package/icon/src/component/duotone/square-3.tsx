
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-3` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-3?s=duotone square-3}
 * @preview ![square-3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0NiAzMiAzODQgMzJaTTIzNiAzODRIMTkxLjM1OUMxNjMuMTI1IDM4NCAxMzguMTU2IDM2NiAxMjkuMjM0IDMzOS4yMTlDMTI1LjA0NyAzMjYuNjI1IDEzMS44NDQgMzEzLjAzMSAxNDQuNDIyIDMwOC44NDRDMTU3IDMwNC43ODEgMTcwLjU5NCAzMTEuNDY5IDE3NC43NjYgMzI0LjAzMUMxNzcuMTU2IDMzMS4xODggMTgzLjgxMiAzMzYgMTkxLjM1OSAzMzZIMjM2QzI1NS44NDQgMzM2IDI3MiAzMTkuODQ0IDI3MiAzMDBTMjU1Ljg0NCAyNjQgMjM2IDI2NEgxODRDMTc0LjEwOSAyNjQgMTY1LjIxOSAyNTcuOTM4IDE2MS42MjUgMjQ4LjY4OEMxNTguMDQ3IDIzOS40NjkgMTYwLjQ4NCAyMjkgMTY3Ljc4MSAyMjIuMzEyTDIxOC4yOTcgMTc2SDE1MkMxMzguNzUgMTc2IDEyOCAxNjUuMjUgMTI4IDE1MlMxMzguNzUgMTI4IDE1MiAxMjhIMjgwQzI4OS44OTEgMTI4IDI5OC43ODEgMTM0LjA2MiAzMDIuMzc1IDE0My4zMTJDMzA1Ljk1MyAxNTIuNTMxIDMwMy41MTYgMTYzIDI5Ni4yMTkgMTY5LjY4OEwyNDUuMTU2IDIxNi41QzI4Ny4xODggMjIxLjA2MiAzMjAgMjU2Ljc4MSAzMjAgMzAwQzMyMCAzNDYuMzEyIDI4Mi4zMTIgMzg0IDIzNiAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMyMC4wMDIgMzAwQzMyMC4wMDIgMzQ2LjMxMiAyODIuMzE0IDM4NCAyMzYuMDAyIDM4NEgxOTEuMzYxQzE2My4xMjcgMzg0IDEzOC4xNTggMzY2IDEyOS4yMzYgMzM5LjIxOUMxMjUuMDQ4IDMyNi42MjUgMTMxLjg0NSAzMTMuMDMxIDE0NC40MjQgMzA4Ljg0NEMxNTcuMDAyIDMwNC43ODEgMTcwLjU5NSAzMTEuNDY5IDE3NC43NjcgMzI0LjAzMUMxNzcuMTU4IDMzMS4xODggMTgzLjgxNCAzMzYgMTkxLjM2MSAzMzZIMjM2LjAwMkMyNTUuODQ1IDMzNiAyNzIuMDAyIDMxOS44NDQgMjcyLjAwMiAzMDBTMjU1Ljg0NSAyNjQgMjM2LjAwMiAyNjRIMTg0LjAwMkMxNzQuMTExIDI2NCAxNjUuMjIgMjU3LjkzOCAxNjEuNjI3IDI0OC42ODhDMTU4LjA0OCAyMzkuNDY5IDE2MC40ODYgMjI5IDE2Ny43ODMgMjIyLjMxMkwyMTguMjk4IDE3NkgxNTIuMDAyQzEzOC43NTIgMTc2IDEyOC4wMDIgMTY1LjI1IDEyOC4wMDIgMTUyUzEzOC43NTIgMTI4IDE1Mi4wMDIgMTI4SDI4MC4wMDJDMjg5Ljg5MiAxMjggMjk4Ljc4MyAxMzQuMDYyIDMwMi4zNzcgMTQzLjMxMkMzMDUuOTU1IDE1Mi41MzEgMzAzLjUxNyAxNjMgMjk2LjIyIDE2OS42ODhMMjQ1LjE1OCAyMTYuNUMyODcuMTg5IDIyMS4wNjIgMzIwLjAwMiAyNTYuNzgxIDMyMC4wMDIgMzAwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Square_3(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM236 384H191.359C163.125 384 138.156 366 129.234 339.219C125.047 326.625 131.844 313.031 144.422 308.844C157 304.781 170.594 311.469 174.766 324.031C177.156 331.188 183.812 336 191.359 336H236C255.844 336 272 319.844 272 300S255.844 264 236 264H184C174.109 264 165.219 257.938 161.625 248.688C158.047 239.469 160.484 229 167.781 222.312L218.297 176H152C138.75 176 128 165.25 128 152S138.75 128 152 128H280C289.891 128 298.781 134.062 302.375 143.312C305.953 152.531 303.516 163 296.219 169.688L245.156 216.5C287.188 221.062 320 256.781 320 300C320 346.312 282.312 384 236 384Z" />
            <path d="M320.002 300C320.002 346.312 282.314 384 236.002 384H191.361C163.127 384 138.158 366 129.236 339.219C125.048 326.625 131.845 313.031 144.424 308.844C157.002 304.781 170.595 311.469 174.767 324.031C177.158 331.188 183.814 336 191.361 336H236.002C255.845 336 272.002 319.844 272.002 300S255.845 264 236.002 264H184.002C174.111 264 165.22 257.938 161.627 248.688C158.048 239.469 160.486 229 167.783 222.312L218.298 176H152.002C138.752 176 128.002 165.25 128.002 152S138.752 128 152.002 128H280.002C289.892 128 298.783 134.062 302.377 143.312C305.955 152.531 303.517 163 296.22 169.688L245.158 216.5C287.189 221.062 320.002 256.781 320.002 300Z" />
        </Icon>
    </>
}