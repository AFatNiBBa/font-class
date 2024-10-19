
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `umbrella` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella?s=light umbrella}
 * @preview ![umbrella](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMjg4QzI3OS4xNTYgMjg4IDI3MiAyOTUuMTU2IDI3MiAzMDRWNDQ4QzI3MiA0NjUuNjU2IDI1Ny42NTYgNDgwIDI0MCA0ODBTMjA4IDQ2NS42NTYgMjA4IDQ0OFY0MzJDMjA4IDQyMy4xNTYgMjAwLjg0NCA0MTYgMTkyIDQxNlMxNzYgNDIzLjE1NiAxNzYgNDMyVjQ0OEMxNzYgNDgzLjI4MSAyMDQuNzE5IDUxMiAyNDAgNTEyUzMwNCA0ODMuMjgxIDMwNCA0NDhWMzA0QzMwNCAyOTUuMTU2IDI5Ni44NDQgMjg4IDI4OCAyODhaTTU3NS43MDEgMjgwLjg0OEM1NDUuNzY0IDEzOC4xMTUgNDI0LjgwMSA1NS42NTIgMzA0IDQ4LjkwNFYxNkMzMDQgNy4xNTYgMjk2Ljg0NCAwIDI4OCAwUzI3MiA3LjE1NiAyNzIgMTZWNDguODYzQzE3Ny40MDIgNTQuNzkxIDM2LjAwOCAxMTQuMDM1IDAuMjk1IDI4MC44NDhDLTEuMzE2IDI4OC4xNzIgMy44ODcgMjk2LjA3MiAxMC43NTQgMjk2LjA3MkMxMy4zNTIgMjk2LjA3MiAxNi4xODYgMjk0Ljk0MSAxOC45ODIgMjkyLjIyM0M0MS4zNjMgMjY4LjU1MyA2NC40MzQgMjU1LjU1MyA4Ny41MDQgMjU1LjU1M0MxMTguMDQxIDI1NS41NTMgMTQ4LjU4NiAyNzguMzExIDE3Ny41ODYgMzI5LjIyNUMxODAuMTc4IDMzMy44NjEgMTgzLjc4OSAzMzYuMDIzIDE4Ny4zNjcgMzM2LjAyM0MxOTEuMTIzIDMzNi4wMjMgMTk0Ljg0IDMzMy42NDEgMTk3LjMwNSAzMjkuMjI1QzIxNy40OTQgMjkzLjg0OCAyNDIuMTg0IDI1Ni4wMzUgMjg3Ljk5OCAyNTYuMDM1QzM0Ni41MDIgMjU2LjAzNSAzNzYuMTkxIDMyNC44NDggMzc4LjY5MSAzMjkuMjI1QzM4MS4xNTYgMzMzLjY0MSAzODQuODc1IDMzNi4wMjMgMzg4LjYyOSAzMzYuMDIzQzM5Mi4yMDcgMzM2LjAyMyAzOTUuODE4IDMzMy44NjEgMzk4LjQxIDMyOS4yMjVDNDI3LjQwOCAyNzguMzM4IDQ1OC4wNTcgMjU1Ljc3NyA0ODguNTY2IDI1NS43NzNINDg4LjU3MkM1MTEuNzI1IDI1NS43NzMgNTM0Ljc5MyAyNjguNzY0IDU1Ny4wMTQgMjkyLjIyM0M1NTkuODQ4IDI5NC45NzEgNTYyLjcwMyAyOTYuMTEzIDU2NS4zMDkgMjk2LjExM0M1NzIuMTgyIDI5Ni4xMTMgNTc3LjMxMiAyODguMTcgNTc1LjcwMSAyODAuODQ4Wk00ODguNTYyIDIyMy43NzNDNDUyLjE4NCAyMjMuNzc5IDQxOC45NjEgMjQ0LjAzMSAzODkuNDM2IDI4NC4xOTNDMzYyLjMyIDI0NS4xNDYgMzI3LjEwMiAyMjQuMDM1IDI4Ny45OTggMjI0LjAzNUMyMzguMjUgMjI0LjAzNSAyMDcuMTU0IDI1NS41OTIgMTg3LjA0NyAyODQuNzk1QzE1Ny40MTQgMjQ0LjEyMSAxMjQuMDI5IDIyMy41NTMgODcuNTA0IDIyMy41NTNDNzQuODAzIDIyMy41NTMgNjIuMjE5IDIyNi4wOSA0OS44NjkgMjMxLjA3MkMxMDAuNzE1IDExNy43NyAyMTQuNDI0IDgyLjQyNiAyODEuMTM5IDgwLjMwMUMyODIuMjQ4IDgwLjI2NiAyOTMuNzUgODAuMzAzIDI5NC45ODIgODAuMzM2QzM4MC4wODIgODIuNjgyIDQ4MC4zMyAxMzEuMDE0IDUyNi4wMjcgMjMxLjIxN0M1MTMuNzAzIDIyNi4yNjQgNTAxLjE5NyAyMjMuNzczIDQ4OC41NjIgMjIzLjc3M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Umbrella(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 288C279.156 288 272 295.156 272 304V448C272 465.656 257.656 480 240 480S208 465.656 208 448V432C208 423.156 200.844 416 192 416S176 423.156 176 432V448C176 483.281 204.719 512 240 512S304 483.281 304 448V304C304 295.156 296.844 288 288 288ZM575.701 280.848C545.764 138.115 424.801 55.652 304 48.904V16C304 7.156 296.844 0 288 0S272 7.156 272 16V48.863C177.402 54.791 36.008 114.035 0.295 280.848C-1.316 288.172 3.887 296.072 10.754 296.072C13.352 296.072 16.186 294.941 18.982 292.223C41.363 268.553 64.434 255.553 87.504 255.553C118.041 255.553 148.586 278.311 177.586 329.225C180.178 333.861 183.789 336.023 187.367 336.023C191.123 336.023 194.84 333.641 197.305 329.225C217.494 293.848 242.184 256.035 287.998 256.035C346.502 256.035 376.191 324.848 378.691 329.225C381.156 333.641 384.875 336.023 388.629 336.023C392.207 336.023 395.818 333.861 398.41 329.225C427.408 278.338 458.057 255.777 488.566 255.773H488.572C511.725 255.773 534.793 268.764 557.014 292.223C559.848 294.971 562.703 296.113 565.309 296.113C572.182 296.113 577.312 288.17 575.701 280.848ZM488.562 223.773C452.184 223.779 418.961 244.031 389.436 284.193C362.32 245.146 327.102 224.035 287.998 224.035C238.25 224.035 207.154 255.592 187.047 284.795C157.414 244.121 124.029 223.553 87.504 223.553C74.803 223.553 62.219 226.09 49.869 231.072C100.715 117.77 214.424 82.426 281.139 80.301C282.248 80.266 293.75 80.303 294.982 80.336C380.082 82.682 480.33 131.014 526.027 231.217C513.703 226.264 501.197 223.773 488.562 223.773Z" />
        </Icon>
    </>
}