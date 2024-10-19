
import { Icon } from "../../index";

/**
 * A component that renders the `face-tired` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-tired?s=regular face-tired}
 * @preview ![face-tired](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODUuMDg2IDE1Mi4yNUMzODEuMzMyIDE0Ny43NSAzNzQuNzkzIDE0Ni43NSAzNjkuODI4IDE0OS43NUwyODkuNzg1IDE5Ny43NUMyODYuMTUyIDE5OS44NzUgMjgzLjk3MyAyMDMuNzUgMjgzLjk3MyAyMDhTMjg2LjE1MiAyMTYuMTI1IDI4OS43ODUgMjE4LjI1TDM2OS44MjggMjY2LjI1QzM3NS4xNTYgMjY5LjUgMzgxLjU3NCAyNjcuODc1IDM4NS4wODYgMjYzLjc1QzM4OC44NCAyNTkuMjUgMzg4Ljk2MSAyNTIuNzUgMzg1LjIwNyAyNDguMjVMMzUxLjU0MyAyMDhMMzg1LjIwNyAxNjcuNzVDMzg4Ljk2MSAxNjMuMjUgMzg4Ljg0IDE1Ni42MjUgMzg1LjA4NiAxNTIuMjVaTTI1NiAyNzJDMjEwLjU5IDI3MiAxNTUuMTI5IDMxMC4yNSAxNDguMjI3IDM2NS4yNUMxNDYuNjUyIDM3Ny4xMjUgMTU1LjEyOSAzODYuODc1IDE2My43MjcgMzgzLjI1QzE4Ni4zNzEgMzczLjUgMjIwLjAzNSAzNjggMjU2IDM2OFMzMjUuNjI5IDM3My41IDM0OC4yNzMgMzgzLjI1QzM1Ni43NSAzODYuODc1IDM2NS4zNDggMzc3LjI1IDM2My43NzMgMzY1LjI1QzM1Ni44NzEgMzEwLjI1IDMwMS40MSAyNzIgMjU2IDI3MlpNMjI4LjAyNyAyMDhDMjI4LjAyNyAyMDMuNzUgMjI1Ljg0OCAxOTkuODc1IDIyMi4yMTUgMTk3Ljc1TDE0Mi4xNzIgMTQ5Ljc1QzEzNy4yMDcgMTQ2Ljc1IDEzMC42NjggMTQ3Ljc1IDEyNi45MTQgMTUyLjI1UzEyMy4wMzkgMTYzLjI1IDEyNi43OTMgMTY3Ljc1TDE2MC40NTcgMjA4TDEyNi43OTMgMjQ4LjI1QzEyMy4wMzkgMjUyLjc1IDEyMy4xNiAyNTkuMjUgMTI2LjkxNCAyNjMuNzVDMTMwLjQyNiAyNjcuODc1IDEzNi44NDQgMjY5LjUgMTQyLjE3MiAyNjYuMjVMMjIyLjIxNSAyMTguMjVDMjI1Ljg0OCAyMTYuMTI1IDIyOC4wMjcgMjEyLjI1IDIyOC4wMjcgMjA4Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FaceTired: typeof Icon = x => (
    <Icon {...x}>
        <path d="M385.086 152.25C381.332 147.75 374.793 146.75 369.828 149.75L289.785 197.75C286.152 199.875 283.973 203.75 283.973 208S286.152 216.125 289.785 218.25L369.828 266.25C375.156 269.5 381.574 267.875 385.086 263.75C388.84 259.25 388.961 252.75 385.207 248.25L351.543 208L385.207 167.75C388.961 163.25 388.84 156.625 385.086 152.25ZM256 272C210.59 272 155.129 310.25 148.227 365.25C146.652 377.125 155.129 386.875 163.727 383.25C186.371 373.5 220.035 368 256 368S325.629 373.5 348.273 383.25C356.75 386.875 365.348 377.25 363.773 365.25C356.871 310.25 301.41 272 256 272ZM228.027 208C228.027 203.75 225.848 199.875 222.215 197.75L142.172 149.75C137.207 146.75 130.668 147.75 126.914 152.25S123.039 163.25 126.793 167.75L160.457 208L126.793 248.25C123.039 252.75 123.16 259.25 126.914 263.75C130.426 267.875 136.844 269.5 142.172 266.25L222.215 218.25C225.848 216.125 228.027 212.25 228.027 208ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" />
    </Icon>
);

export default FaceTired;