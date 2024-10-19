
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `house-crack` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-crack?s=thin house-crack}
 * @preview ![house-crack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzUuOTk3IDI1NS45ODlDNTc1Ljk5NyAyNTMuNzg3IDU3NS4wOTIgMjUxLjU5NCA1NzMuMzEyIDI1MC4wMTZMNTEyLjAwMSAxOTUuNzExVjQ4QzUxMi4wMDEgMzkuMTYzIDUwNC44MzggMzIgNDk2LjAwMSAzMkg0MDAuMDAxQzM5MS4xNjQgMzIgMzg0LjAwMSAzOS4xNjQgMzg0LjAwMSA0OFY4Mi4zMzZMMjkzLjMxMSAyLjAxNUMyOTEuNzk1IDAuNjczIDI4OS44OTYgMC4wMDEgMjg3Ljk5OCAwLjAwMUMyODYuMSAwLjAwMSAyODQuMjAyIDAuNjczIDI4Mi42ODYgMi4wMTZMMi42ODUgMjUwLjAxNkMwLjkwNSAyNTEuNTk0IDAgMjUzLjc4NyAwIDI1NS45ODlDMCAyNjAuMzExIDMuNDc5IDI2My45ODcgNy45NjkgMjYzLjk4N0M5Ljg2NSAyNjMuOTg3IDExLjc3MyAyNjMuMzE5IDEzLjMxIDI2MS45ODRMNjMuOTk4IDIxNy44MTJWNDQ4QzYzLjk5OCA0ODMuMzQ2IDkyLjY1MSA1MTIgMTI3Ljk5NyA1MTJINDQ3Ljk5OUM0ODMuMzQ1IDUxMiA1MTEuOTk5IDQ4My4zNDYgNTExLjk5OSA0NDhWMjE3LjgxMkw1NjIuNjg3IDI2MS45ODRDNTY0LjIxOCAyNjMuMzI4IDU2Ni4wOTMgMjY0IDU2Ny45OTkgMjY0QzU3Mi40NTggMjY0IDU3NS45OTcgMjYwLjM2MSA1NzUuOTk3IDI1NS45ODlaTTMwNC4wOTggMzcxLjUyMUMzMDQuMDk4IDM3MC4wNCAzMDMuNjg3IDM2OC41NzYgMzAyLjg3NSAzNjcuMjgxTDI1Ni45MzggMjkzLjY1NkwzNzAuMTI2IDM4Ny40MDZMMjc1Ljc1IDQ0My41OTRDMjc1LjAwNiA0NDQuMDM4IDI3MS44NDYgNDQ2LjE0MyAyNzEuODQ2IDQ1MC40NzlDMjcxLjg0NiA0NTIuMTg1IDI3Mi4zODYgNDUzLjg2NCAyNzMuNDM4IDQ1NS4yNUwzMDMuNzkxIDQ5NkgyMzQuMDM1TDIwMi41OTQgNDM2LjVMMzAwLjE4OCAzNzguNDA2QzMwMi4yODEgMzc3LjE2NSAzMDQuMDk4IDM3NC43MTQgMzA0LjA5OCAzNzEuNTIxWk00OTUuOTk5IDQ0OEM0OTUuOTk5IDQ3NC41MSA0NzQuNTA5IDQ5NiA0NDcuOTk5IDQ5NkgzMjMuNzI3TDI5MS41NjMgNDUyLjgxMkwzODguMDYzIDM5NS4zNDRDMzkwLjM5NSAzOTMuOTMyIDM5MS45NjYgMzkxLjQyIDM5MS45NjYgMzg4LjQzOUMzOTEuOTY2IDM4Ni4wNzkgMzkwLjg5NCAzODMuODI5IDM4OS4wNjMgMzgyLjMxMkwyMjkuMDk0IDI0OS44NDRDMjI3LjYxNyAyNDguNjEzIDIyNS44MDcgMjQ3Ljk5NiAyMjMuOTkxIDI0Ny45OTZDMjE3LjgxMiAyNDcuOTk2IDIxNS45OTYgMjUzLjY2NyAyMTUuOTk2IDI1Ni4wMDFDMjE1Ljk5NiAyNTcuNDYxIDIxNi4zOTQgMjU4LjkzMyAyMTcuMjE5IDI2MC4yNUwyODQuOTY5IDM2OC44NDRMMTg3Ljg5MyA0MjYuNjQ2QzE4NS4zODMgNDI4LjE0IDE4My45NzYgNDMwLjggMTgzLjk3NiA0MzMuNTQxQzE4My45NzYgNDM0LjgwNiAxODQuMjc2IDQzNi4wODkgMTg0LjkwNiA0MzcuMjgxTDIxNS45NDQgNDk2SDEyNy45OThDMTAxLjQ4OCA0OTYgNzkuOTk4IDQ3NC41MSA3OS45OTggNDQ4VjIwMy41OTRMMjg3Ljk5OCAxOC43MDNMNDk1Ljk5OSAyMDMuNTk0VjQ0OFpNNDk2LjAwMSAxODEuNTM5TDQwMC4wMDEgOTYuNTA4VjQ4SDQ5Ni4wMDFWMTgxLjUzOVogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function HouseCrack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M575.997 255.989C575.997 253.787 575.092 251.594 573.312 250.016L512.001 195.711V48C512.001 39.163 504.838 32 496.001 32H400.001C391.164 32 384.001 39.164 384.001 48V82.336L293.311 2.015C291.795 0.673 289.896 0.001 287.998 0.001C286.1 0.001 284.202 0.673 282.686 2.016L2.685 250.016C0.905 251.594 0 253.787 0 255.989C0 260.311 3.479 263.987 7.969 263.987C9.865 263.987 11.773 263.319 13.31 261.984L63.998 217.812V448C63.998 483.346 92.651 512 127.997 512H447.999C483.345 512 511.999 483.346 511.999 448V217.812L562.687 261.984C564.218 263.328 566.093 264 567.999 264C572.458 264 575.997 260.361 575.997 255.989ZM304.098 371.521C304.098 370.04 303.687 368.576 302.875 367.281L256.938 293.656L370.126 387.406L275.75 443.594C275.006 444.038 271.846 446.143 271.846 450.479C271.846 452.185 272.386 453.864 273.438 455.25L303.791 496H234.035L202.594 436.5L300.188 378.406C302.281 377.165 304.098 374.714 304.098 371.521ZM495.999 448C495.999 474.51 474.509 496 447.999 496H323.727L291.563 452.812L388.063 395.344C390.395 393.932 391.966 391.42 391.966 388.439C391.966 386.079 390.894 383.829 389.063 382.312L229.094 249.844C227.617 248.613 225.807 247.996 223.991 247.996C217.812 247.996 215.996 253.667 215.996 256.001C215.996 257.461 216.394 258.933 217.219 260.25L284.969 368.844L187.893 426.646C185.383 428.14 183.976 430.8 183.976 433.541C183.976 434.806 184.276 436.089 184.906 437.281L215.944 496H127.998C101.488 496 79.998 474.51 79.998 448V203.594L287.998 18.703L495.999 203.594V448ZM496.001 181.539L400.001 96.508V48H496.001V181.539Z " />
        </Icon>
    </>
}