
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sort` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort?s=thin sort}
 * @preview ![sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNy42NTggMjI0SDI5Mi4zNDJDMzE2Ljk0NSAyMjQgMzI5LjIyOSAxOTQuMjI1IDMxMS44ODEgMTc2Ljg3N0wxNzkuNTUzIDQwLjEwN0MxNzQuMTQ2IDM0LjcwMSAxNjcuMDggMzIgMTYwLjAyNyAzMkMxNTIuOTczIDMyIDE0NS45MzQgMzQuNzAxIDE0MC41ODIgNDAuMTA3TDguMTE5IDE3Ni44NzdDLTkuMjI5IDE5NC4yMjUgMy4wNTUgMjI0IDI3LjY1OCAyMjRaTTE5LjYxMSAxODguMDA4TDE1MS45NTMgNTEuMzYzQzE1NC4xIDQ5LjE5MyAxNTYuOTY5IDQ4IDE2MC4wMjcgNDhDMTYzLjExNyA0OCAxNjYuMDMzIDQ5LjIxNSAxNjguMDU1IDUxLjIzMkwzMDAuNTY2IDE4OC4xODlDMzA1LjQ5OCAxOTMuMTIxIDMwMy45NTEgMTk4LjY3MiAzMDMuMDU3IDIwMC44M0MzMDIuMTY0IDIwMi45ODYgMjk5LjMzMiAyMDggMjkyLjM0MiAyMDhIMjcuNjU4QzIwLjY2OCAyMDggMTcuODM2IDIwMi45ODYgMTYuOTQzIDIwMC44M0MxNi4wNDkgMTk4LjY3MiAxNC41MDIgMTkzLjEyMSAxOS42MTEgMTg4LjAwOFpNMjkyLjM0MiAyODhIMjcuNjU4QzMuMDU1IDI4OCAtOS4yMjkgMzE3Ljc3MyA4LjExOSAzMzUuMTIxTDE0MC41ODIgNDcxLjg5MUMxNDUuOTM0IDQ3Ny4yOTcgMTUyLjk3MyA0ODAgMTYwLjAyNyA0ODBDMTY3LjA4IDQ4MCAxNzQuMTQ2IDQ3Ny4yOTcgMTc5LjU1MyA0NzEuODkxTDMxMS44ODEgMzM1LjEyMUMzMjkuMjI5IDMxNy43NzMgMzE2Ljk0NSAyODggMjkyLjM0MiAyODhaTTMwMC4zODMgMzIzLjk5NkwxNjguMjM4IDQ2MC41NzhDMTY2LjAzMSA0NjIuNzg1IDE2My4xMTUgNDY0IDE2MC4wMjcgNDY0QzE1Ni45NjkgNDY0IDE1NC4xMDIgNDYyLjgwNSAxNTIuMDc2IDQ2MC43NkwxOS40MzQgMzIzLjgwN0MxNC41MDIgMzE4Ljg3NyAxNi4wNDkgMzEzLjMyNiAxNi45NDMgMzExLjE3QzE3LjgzNiAzMDkuMDE0IDIwLjY2OCAzMDQgMjcuNjU4IDMwNEgyOTIuMzQyQzI5OS4zMzIgMzA0IDMwMi4xNjQgMzA5LjAxNCAzMDMuMDU3IDMxMS4xN0MzMDMuOTUxIDMxMy4zMjYgMzA1LjQ5OCAzMTguODc3IDMwMC4zODMgMzIzLjk5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sort(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M27.658 224H292.342C316.945 224 329.229 194.225 311.881 176.877L179.553 40.107C174.146 34.701 167.08 32 160.027 32C152.973 32 145.934 34.701 140.582 40.107L8.119 176.877C-9.229 194.225 3.055 224 27.658 224ZM19.611 188.008L151.953 51.363C154.1 49.193 156.969 48 160.027 48C163.117 48 166.033 49.215 168.055 51.232L300.566 188.189C305.498 193.121 303.951 198.672 303.057 200.83C302.164 202.986 299.332 208 292.342 208H27.658C20.668 208 17.836 202.986 16.943 200.83C16.049 198.672 14.502 193.121 19.611 188.008ZM292.342 288H27.658C3.055 288 -9.229 317.773 8.119 335.121L140.582 471.891C145.934 477.297 152.973 480 160.027 480C167.08 480 174.146 477.297 179.553 471.891L311.881 335.121C329.229 317.773 316.945 288 292.342 288ZM300.383 323.996L168.238 460.578C166.031 462.785 163.115 464 160.027 464C156.969 464 154.102 462.805 152.076 460.76L19.434 323.807C14.502 318.877 16.049 313.326 16.943 311.17C17.836 309.014 20.668 304 27.658 304H292.342C299.332 304 302.164 309.014 303.057 311.17C303.951 313.326 305.498 318.877 300.383 323.996Z" />
        </Icon>
    </>
}