
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-dollar` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dollar?s=light circle-dollar}
 * @preview ![circle-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NjRDMTQxLjMwOSA0NjQgNDggMzcwLjY5MSA0OCAyNTZTMTQxLjMwOSA0OCAyNTYgNDhTNDY0IDE0MS4zMDkgNDY0IDI1NlMzNzAuNjkxIDQ2NCAyNTYgNDY0Wk0yNjAuMzU5IDI0MC41NzhMMjUyLjAxNiAyMzguMTcyQzIxNC42ODggMjI3LjIwMyAyMDUuMzQ0IDIxOS4wNzggMjA4LjU3OCAyMDAuMzkxQzIxMi42NDEgMTc3LjAxNiAyNDQuMTU2IDE3My4zOTEgMjY5Ljg0NCAxNzcuNDM3QzI3Ny4zOTEgMTc4LjYwOSAyODYuODQ0IDE4MS4yMDMgMjk4Ljc2NiAxODUuMzI4QzMwNy4xMDkgMTg4LjE4NyAzMTYuMjE5IDE4My43NjYgMzE5LjEyNSAxNzUuNDM3QzMyMi4wMTYgMTY3LjA5NCAzMTcuNTc4IDE1Ny45NjkgMzA5LjIzNCAxNTUuMDc4QzI5NS4zMTMgMTUwLjI2NiAyODQuMzc1IDE0Ny4zMjggMjc0Ljc5NyAxNDUuODEyQzI3My44MzQgMTQ1LjY2IDI3Mi45NTUgMTQ1LjY4MiAyNzIgMTQ1LjU0OVYxMTJDMjcyIDEwMy4xNTYgMjY0Ljg0NCA5NiAyNTYgOTZTMjQwIDEwMy4xNTYgMjQwIDExMlYxNDQuNzA1QzIwNS45NTMgMTQ4LjIyMyAxODEuOTggMTY2LjQxIDE3Ny4wNDcgMTk0LjkzOEMxNjguMDc4IDI0Ni44NDQgMjE2LjgxMiAyNjEuMTcyIDI0MyAyNjguODc1TDI1MS41NjIgMjcxLjM0NEMyOTQuMjk3IDI4My41NjIgMzA3LjAzMSAyOTAuNzE5IDMwMy40MjIgMzExLjYwOUMyOTkuMzU5IDMzNS4wMTYgMjY3Ljc4MSAzMzguNTc4IDI0Mi4wNjIgMzM0LjU0N0MyMzAuMjk3IDMzMi43ODEgMjE2LjI4MSAzMjcuNzM0IDIwMy45MDYgMzIzLjI2NkwxOTcuMzQ0IDMyMC45MjJDMTg5IDMxNy45MzggMTc5Ljg3NSAzMjIuMzQ0IDE3Ni45MjIgMzMwLjY1NkMxNzMuOTY5IDMzOC45ODQgMTc4LjMyOCAzNDguMTI1IDE4Ni42NTYgMzUxLjA3OEwxOTMuMDYyIDM1My4zNzVDMjA2LjgxMiAzNTguMzI4IDIyMi40MDYgMzYzLjk1MyAyMzcuMjAzIDM2Ni4xODdDMjM4LjE3NCAzNjYuMzQgMjM5LjAzOSAzNjYuMjgxIDI0MCAzNjYuNDE0VjQwMEMyNDAgNDA4Ljg0NCAyNDcuMTU2IDQxNiAyNTYgNDE2UzI3MiA0MDguODQ0IDI3MiA0MDBWMzY3LjI1OEMzMDYuMDI3IDM2My43MjcgMzMwLjAyIDM0NS41OTIgMzM0Ljk1MyAzMTcuMDYyQzM0NC4wMzEgMjY0LjUgMjk1LjY3MiAyNTAuNjcyIDI2MC4zNTkgMjQwLjU3OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM260.359 240.578L252.016 238.172C214.688 227.203 205.344 219.078 208.578 200.391C212.641 177.016 244.156 173.391 269.844 177.437C277.391 178.609 286.844 181.203 298.766 185.328C307.109 188.187 316.219 183.766 319.125 175.437C322.016 167.094 317.578 157.969 309.234 155.078C295.313 150.266 284.375 147.328 274.797 145.812C273.834 145.66 272.955 145.682 272 145.549V112C272 103.156 264.844 96 256 96S240 103.156 240 112V144.705C205.953 148.223 181.98 166.41 177.047 194.938C168.078 246.844 216.812 261.172 243 268.875L251.562 271.344C294.297 283.562 307.031 290.719 303.422 311.609C299.359 335.016 267.781 338.578 242.062 334.547C230.297 332.781 216.281 327.734 203.906 323.266L197.344 320.922C189 317.938 179.875 322.344 176.922 330.656C173.969 338.984 178.328 348.125 186.656 351.078L193.062 353.375C206.812 358.328 222.406 363.953 237.203 366.187C238.174 366.34 239.039 366.281 240 366.414V400C240 408.844 247.156 416 256 416S272 408.844 272 400V367.258C306.027 363.727 330.02 345.592 334.953 317.062C344.031 264.5 295.672 250.672 260.359 240.578Z" />
        </Icon>
    </>
}