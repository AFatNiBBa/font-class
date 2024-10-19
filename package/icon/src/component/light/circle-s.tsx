
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-s` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-s?s=light circle-s}
 * @preview ![circle-s](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjAuMTU2IDI0MC42MjVDMjA5LjM3NSAyMjYuOTY5IDE4Ny42ODggMjE4LjA5NCAxOTIuNzgxIDE5MC4zOTFDMTkzLjg3NSAxODQuNDM3IDE5Ny4yNSAxNzUuOTg0IDIwNy4xNTYgMTY5LjU3OEMyMjAuNTYzIDE2MC45MDYgMjQ5LjIxOSAxNTMuNjQxIDMwOS4zMTMgMTY4LjUxNkMzMTguMDMxIDE3MC42MDkgMzI2LjU2MyAxNjUuMzkxIDMyOC42ODggMTU2LjgyOEMzMzAuODEzIDE0OC4yNSAzMjUuNTYzIDEzOS41NzggMzE3IDEzNy40NTNDMjU5Ljg0NCAxMjMuMzQ0IDIxNy4wNjMgMTI1LjA2MiAxODkuNzgxIDE0Mi43MDNDMTc0LjU2MyAxNTIuNTQ3IDE2NC40MzggMTY3LjQzNyAxNjEuMjgxIDE4NC42MjVDMTUwLjMxMiAyNDQuMjM0IDIwOSAyNjAgMjUxLjg0NCAyNzEuNTE2QzMwMi42MjUgMjg1LjE3MiAzMjQuMzEyIDI5NC4wNDcgMzE5LjIxOSAzMjEuNzM0QzMxNy4yODEgMzMyLjI4MSAzMTIuMjUgMzM5LjUxNiAzMDMuNDA2IDM0NC41QzI4MC4zNDQgMzU3LjQyMiAyMzIuNTk0IDM1My4yNjYgMTgxLjY4OCAzMzMuODkxQzE3My41IDMzMC43OTcgMTY0LjE4OCAzMzQuODc1IDE2MS4wNjMgMzQzLjE1NkMxNTcuOTA2IDM1MS40MDYgMTYyLjA2MyAzNjAuNjU2IDE3MC4zMTMgMzYzLjc5N0MxODUuOTY5IDM2OS43NSAyMjcuNDM4IDM4My45NTMgMjY3LjI1IDM4My45NTNDMjg1Ljg0NCAzODMuOTUzIDMwNC4wNjMgMzgwLjg1OSAzMTkuMDk0IDM3Mi4zOTFDMzM2LjE1NiAzNjIuNzk3IDM0Ny4wNjMgMzQ3LjI4MSAzNTAuNzE5IDMyNy41MTZDMzYxLjY4OCAyNjcuOTA2IDMwMyAyNTIuMTQxIDI2MC4xNTYgMjQwLjYyNVpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDY0QzE0MS4zMDkgNDY0IDQ4IDM3MC42OTEgNDggMjU2UzE0MS4zMDkgNDggMjU2IDQ4UzQ2NCAxNDEuMzA5IDQ2NCAyNTZTMzcwLjY5MSA0NjQgMjU2IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleS(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M260.156 240.625C209.375 226.969 187.688 218.094 192.781 190.391C193.875 184.437 197.25 175.984 207.156 169.578C220.563 160.906 249.219 153.641 309.313 168.516C318.031 170.609 326.563 165.391 328.688 156.828C330.813 148.25 325.563 139.578 317 137.453C259.844 123.344 217.063 125.062 189.781 142.703C174.563 152.547 164.438 167.437 161.281 184.625C150.312 244.234 209 260 251.844 271.516C302.625 285.172 324.312 294.047 319.219 321.734C317.281 332.281 312.25 339.516 303.406 344.5C280.344 357.422 232.594 353.266 181.688 333.891C173.5 330.797 164.188 334.875 161.063 343.156C157.906 351.406 162.063 360.656 170.313 363.797C185.969 369.75 227.438 383.953 267.25 383.953C285.844 383.953 304.063 380.859 319.094 372.391C336.156 362.797 347.063 347.281 350.719 327.516C361.688 267.906 303 252.141 260.156 240.625ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}