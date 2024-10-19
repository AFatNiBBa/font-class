
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `temperature-arrow-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-arrow-up?s=light temperature-arrow-up}
 * @preview ![temperature-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjMuOTg3IDc5Ljk1NUMyMjMuOTg3IDM1Ljg1NSAxODguMTE4IDAgMTQ0IDBTNjQuMDE0IDM1Ljg1NSA2NC4wMTQgNzkuOTU1VjMyMS42OTdDMjAuODk1IDM2NS42NzQgMjEuMzk1IDQzNi4xMzUgNjUuMTM5IDQ3OS40ODZDMTA4Ljc1NiA1MjIuODM4IDE3OS4yNDUgNTIyLjgzOCAyMjIuODYyIDQ3OS40ODZDMjY2LjYwNiA0MzYuMTM1IDI2Ny4xMDYgMzY1LjY3NCAyMjMuOTg3IDMyMS42OTdWNzkuOTU1Wk0yMTkuODY0IDQyNS4xNDFDMjA4Ljk5MSA0NTcuNzQ4IDE3OC4zNyA0NzkuNzM2IDE0NCA0NzkuNzM2Uzc5LjAxIDQ1Ny43NDggNjguMTM3IDQyNS4xNDFTNjguNTEyIDM1Ni42NzggOTYuMDA4IDMzNi4wNjRWNzkuOTU1Qzk2LjAwOCA1My40NzEgMTE3LjUwNCAzMS45ODIgMTQ0IDMxLjk4MlMxOTEuOTkzIDUzLjQ3MSAxOTEuOTkzIDc5Ljk1NVYzMzYuMDY0QzIxOS40ODkgMzU2LjY3OCAyMzAuNzM3IDM5Mi41MzMgMjE5Ljg2NCA0MjUuMTQxWk0xNTkuOTk4IDM1NC42OFY3OS45NTVDMTU5Ljk5OCA3MS4wODYgMTUyLjg3MyA2My45NjUgMTQ0IDYzLjk2NVMxMjguMDAyIDcxLjA4NiAxMjguMDAyIDc5Ljk1NVYzNTQuNjhDMTA2LjAwNiAzNjIuNTUxIDkyLjc1OCAzODUuMDM3IDk2Ljc1OCA0MDguMDI1QzEwMC42MzMgNDMxLjEzNyAxMjAuNjI5IDQ0Ny44NzkgMTQ0IDQ0Ny44NzlTMTg3LjM2OCA0MzEuMTM3IDE5MS4yNDMgNDA4LjAyNUMxOTUuMjQzIDM4NS4wMzcgMTgxLjk5NSAzNjIuNTUxIDE1OS45OTggMzU0LjY4Wk01MDcuMzEzIDEzMi42ODhMNDExLjMxMyAzNi42ODhDNDA1LjA2MyAzMC40MzggMzk0LjkzOCAzMC40MzggMzg4LjY4OCAzNi42ODhMMjkyLjY4OCAxMzIuNjg4QzI4Ni40MzggMTM4LjkzOCAyODYuNDM4IDE0OS4wNjMgMjkyLjY4OCAxNTUuMzEyUzMwOS4wNjMgMTYxLjU2MiAzMTUuMzEzIDE1NS4zMTJMMzg0IDg2LjYyNVY0NjRDMzg0IDQ3Mi44NDQgMzkxLjE1NyA0ODAgNDAwIDQ4MFM0MTYgNDcyLjg0NCA0MTYgNDY0Vjg2LjYyNUw0ODQuNjg4IDE1NS4zMTJDNDg3LjgxMyAxNTguNDM4IDQ5MS45MDcgMTYwIDQ5NiAxNjBTNTA0LjE4OCAxNTguNDM4IDUwNy4zMTMgMTU1LjMxMkM1MTMuNTYzIDE0OS4wNjIgNTEzLjU2MyAxMzguOTM4IDUwNy4zMTMgMTMyLjY4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TemperatureArrowUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M223.987 79.955C223.987 35.855 188.118 0 144 0S64.014 35.855 64.014 79.955V321.697C20.895 365.674 21.395 436.135 65.139 479.486C108.756 522.838 179.245 522.838 222.862 479.486C266.606 436.135 267.106 365.674 223.987 321.697V79.955ZM219.864 425.141C208.991 457.748 178.37 479.736 144 479.736S79.01 457.748 68.137 425.141S68.512 356.678 96.008 336.064V79.955C96.008 53.471 117.504 31.982 144 31.982S191.993 53.471 191.993 79.955V336.064C219.489 356.678 230.737 392.533 219.864 425.141ZM159.998 354.68V79.955C159.998 71.086 152.873 63.965 144 63.965S128.002 71.086 128.002 79.955V354.68C106.006 362.551 92.758 385.037 96.758 408.025C100.633 431.137 120.629 447.879 144 447.879S187.368 431.137 191.243 408.025C195.243 385.037 181.995 362.551 159.998 354.68ZM507.313 132.688L411.313 36.688C405.063 30.438 394.938 30.438 388.688 36.688L292.688 132.688C286.438 138.938 286.438 149.063 292.688 155.312S309.063 161.562 315.313 155.312L384 86.625V464C384 472.844 391.157 480 400 480S416 472.844 416 464V86.625L484.688 155.312C487.813 158.438 491.907 160 496 160S504.188 158.438 507.313 155.312C513.563 149.062 513.563 138.938 507.313 132.688Z" />
        </Icon>
    </>
}