
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `futbol-ball` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/futbol-ball?s=regular futbol-ball}
 * @preview ![futbol-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzggMjI4LjYyNUwyMDcuODc1IDMyMEgzMDQuMzc1TDMzNCAyMjguNjI1TDI1NiAxNzIuMTI1TDE3OCAyMjguNjI1Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTQxNi42NDYgMzYwLjgzNkwzMzEuMjM2IDM1OS41NTVMMzA2LjA4MiA0NDEuMTQ1QzI5MC4wODYgNDQ1LjQ3NyAyNzMuMzUgNDQ4IDI1NiA0NDhTMjIxLjkxNCA0NDUuNDc3IDIwNS45MTggNDQxLjE0NUwxODAuNzY0IDM1OS41NTVMOTUuMzU0IDM2MC44MzZDNzcuMjM4IDMzMy4xNzIgNjYuMjE1IDMwMC41NzggNjQuNDgyIDI2NS41MzlMMTM0LjI2NiAyMTYuNDQ1TDEwNi42NTIgMTM1LjYwOUwxMDYuNjQ1IDEzNS42MTdDMTI3LjgwNSAxMDkuNDE0IDE1NS43MjkgODkuMDA0IDE4Ny43MDcgNzYuNzczQzE4Ny43MDMgNzYuNzc3IDE4Ny43MDMgNzYuNzgxIDE4Ny42OTkgNzYuNzgxTDI1NiAxMjhMMzI0LjMwMSA3Ni43ODFDMzI0LjI5NyA3Ni43ODEgMzI0LjI5MSA3Ni43NzMgMzI0LjI4NyA3Ni43NzNDMzU2LjI3IDg5LjAwNCAzODQuMTkzIDEwOS40MTQgNDA1LjM1NSAxMzUuNjE3QzQwNS4zNTQgMTM1LjYxNyA0MDUuMzUgMTM1LjYxMyA0MDUuMzQ4IDEzNS42MDlMMzc3LjczNCAyMTYuNDQ1TDQ0Ny41MTggMjY1LjUzOUM0NDUuNzg1IDMwMC41NzggNDM0Ljc2MiAzMzMuMTcyIDQxNi42NDYgMzYwLjgzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FutbolBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M178 228.625L207.875 320H304.375L334 228.625L256 172.125L178 228.625ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM416.646 360.836L331.236 359.555L306.082 441.145C290.086 445.477 273.35 448 256 448S221.914 445.477 205.918 441.145L180.764 359.555L95.354 360.836C77.238 333.172 66.215 300.578 64.482 265.539L134.266 216.445L106.652 135.609L106.645 135.617C127.805 109.414 155.729 89.004 187.707 76.773C187.703 76.777 187.703 76.781 187.699 76.781L256 128L324.301 76.781C324.297 76.781 324.291 76.773 324.287 76.773C356.27 89.004 384.193 109.414 405.355 135.617C405.354 135.617 405.35 135.613 405.348 135.609L377.734 216.445L447.518 265.539C445.785 300.578 434.762 333.172 416.646 360.836Z" />
        </Icon>
    </>
}