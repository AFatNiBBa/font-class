
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `jack-o-lantern` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/jack-o-lantern?s=solid jack-o-lantern}
 * @preview ![jack-o-lantern](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIuMDA3IDEwNi42MVYzNS43MzJDMzUyLjAwNyAyOS43MzIgMzQ4LjYzMiAyNC4yMzEgMzQzLjEzMSAyMS40ODFMMzAzLjUwMiAxLjczMUMzMDAuNTQgMC4yMDUgMjk3Ljg1NSAwIDI5Ni4zNzQgMEMyOTAuMDkyIDAgMjg0LjAzMSAzLjc3OCAyODEuNDk5IDEwLjEwNkwyNDUuNDk1IDEwMC4yMzRDMjU4LjYyMiA5Ny42MDkgMjcyLjYyMyA5NS45ODQgMjg4IDk1Ljk4NEMzMTIuMjUzIDk1Ljk4NCAzMzMuMjU1IDk5Ljk4NCAzNTIuMDA3IDEwNi42MVpNNDI1LjUzMiAxMjguNDQ3QzQxNS41MTkgMTI4LjQ0NyA0MDUuNDc5IDEyOS43MTggMzk1Ljc2MiAxMzIuMjM2QzQxNC41ODUgMTQ5LjEzNyA0MTQuMzgyIDE1MS44ODUgNDIxLjEzOSAxNjQuMTEyQzM4OS4zODYgMTQwLjQ4NiAzNDUuNTA2IDEyNy45ODUgMjg4IDEyNy45ODVTMTg2LjYxNCAxNDAuNDg2IDE1NC44NjEgMTY0LjExMkMxNjEuNjgxIDE1MS43NzEgMTYxLjQ0NSAxNDkuMTEgMTgwLjIzOCAxMzIuMjM2QzE3MC41MjEgMTI5LjcxOCAxNjAuNDgxIDEyOC40NDcgMTUwLjQ2OCAxMjguNDQ3QzUxLjAwNyAxMjguNDQ3IDAgMjU0LjQ3OCAwIDMxOS45OTNDMCAzODQuNDQgNTEuMjU1IDUxMS45MjYgMTUxLjQ2MyA1MTEuOTI2QzE3Ni40MzMgNTExLjkyNiAyMDEuNDI0IDUwMy45ODcgMjIwLjg2OCA0ODguMTI0QzIzOC42MiA1MDMuNSAyNjAuNzQ3IDUxMiAyODggNTEyUzMzNy4zOCA1MDMuNSAzNTUuMjU3IDQ4OC4xMjRDMzc0LjY0IDUwMy45ODcgMzk5LjU5OSA1MTEuOTI2IDQyNC41NTMgNTExLjkyNkM1MjQuNjU1IDUxMS45MjYgNTc2IDM4NS45MyA1NzYgMzE5Ljk5M0M1NzYgMjU1LjgxNyA1MjUuMDk5IDEyOC40NDcgNDI1LjUzMiAxMjguNDQ3Wk0zMjAuMSAyODEuMzQ4QzMyMC4xIDI4MC4xMDQgMzIwLjM4NSAyNzguOTA4IDMyMC44NzkgMjc3Ljk5MUwzNjIuMDA4IDIxMS4zNjRDMzYzLjE4OCAyMDkuMDY3IDM2NS4zMjMgMjA3Ljk0MSAzNjcuNTg3IDIwNy45NDFDMzY5Ljg4MiAyMDcuOTQxIDM3Mi4zMSAyMDkuMDk4IDM3NC4wMDkgMjExLjM2NEw0MTUuMTM5IDI3Ny45OTFDNDE1LjU5NCAyNzguOTAyIDQxNS44NjMgMjgwLjA4NyA0MTUuODYzIDI4MS4zMjFDNDE1Ljg2MyAyODQuNDk0IDQxNC4wODggMjg3Ljk5MSA0MDkuMTM4IDI4Ny45OTFIMzI2Ljg3OUMzMjEuOTQ0IDI4Ny45OTEgMzIwLjEgMjg0LjUxMyAzMjAuMSAyODEuMzQ4Wk0xNjAuMDgzIDI4MS4zNDhDMTYwLjA4MyAyODAuMTA0IDE2MC4zNjcgMjc4LjkwOCAxNjAuODYxIDI3Ny45OTFMMjAxLjk5MSAyMTEuMzY0QzIwMy4xNyAyMDkuMDY3IDIwNS4zMDUgMjA3Ljk0MSAyMDcuNTY5IDIwNy45NDFDMjA5Ljg2NSAyMDcuOTQxIDIxMi4yOTMgMjA5LjA5OCAyMTMuOTkyIDIxMS4zNjRMMjU1LjEyMSAyNzcuOTkxQzI1NS41NzcgMjc4LjkwMiAyNTUuODQ2IDI4MC4wODcgMjU1Ljg0NiAyODEuMzIxQzI1NS44NDYgMjg0LjQ5NCAyNTQuMDcgMjg3Ljk5MSAyNDkuMTIxIDI4Ny45OTFIMTY2Ljg2MkMxNjEuOTI2IDI4Ny45OTEgMTYwLjA4MyAyODQuNTEzIDE2MC4wODMgMjgxLjM0OFpNNDU0LjY5MSAzMjQuNzEzQzQ2My4xNjggMzI0LjcxMyA0NzAuNjk1IDMzMS42NTcgNDcwLjY5NSAzNDAuMzMzQzQ3MC42OTUgMzQ2LjcyNCA0NjEuNzUzIDM2Ny41OTYgNDUxLjE0MyAzODIuNDk1QzQ0MS43NjcgMzk1LjQ5NiA0MjkuNzY1IDQwNi4zNzEgNDE1Ljg4OSA0MTUuNDk2QzQxNS42MzkgNDA2Ljg3MSA0MDguNjM4IDM5OS45OTYgNDAwLjAxMiAzOTkuOTk2SDM4NC4wMUMzNzUuMTM0IDM5OS45OTYgMzY4LjAwOSA0MDcuMTIxIDM2OC4wMDkgNDE1Ljk5NlY0MzcuNDk3QzM0NC41MDYgNDQ0LjM3MiAzMTcuODc4IDQ0Ny45OTggMjg4IDQ0Ny45OThTMjMxLjQ5NCA0NDQuMzcyIDIwNy45OTEgNDM3LjQ5N1Y0MTUuOTk2QzIwNy45OTEgNDA3LjEyMSAyMDAuODY2IDM5OS45OTYgMTkxLjk5IDM5OS45OTZIMTc1Ljk4OEMxNjcuMjM3IDM5OS45OTYgMTYwLjIzNiA0MDYuOTk2IDE2MC4xMTEgNDE1LjYyMUMxNDYuMzYgNDA2LjQ5NiAxMzQuNDgzIDM5NS44NzEgMTI1LjM1NyAzODMuMTJDMTE0LjUxNSAzNjcuODUzIDEwNS4zMTEgMzQ2LjkyMiAxMDUuMzExIDM0MC4zNjNDMTA1LjMxMSAzMzEuNjcyIDExMi44OTUgMzI0LjcxMyAxMjEuMzU4IDMyNC43MTNDMTMzLjY4NSAzMjQuNzEzIDE2Mi44NDEgMzU0LjA5MyAyMzkuOTk1IDM2NS44NjlWMzgzLjk5NUMyMzkuOTk1IDM5Mi44NyAyNDcuMTIxIDM5OS45OTYgMjU1Ljk5NyAzOTkuOTk2SDI3MS45OThDMjgwLjg3NCAzOTkuOTk2IDI4OCAzOTIuODcgMjg4IDM4My45OTVWMzY5Ljc0NUMzODguOTg4IDM2OS43NDUgNDQzLjY3NiAzMjQuNzEzIDQ1NC42OTEgMzI0LjcxM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function JackOLantern(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M352.007 106.61V35.732C352.007 29.732 348.632 24.231 343.131 21.481L303.502 1.731C300.54 0.205 297.855 0 296.374 0C290.092 0 284.031 3.778 281.499 10.106L245.495 100.234C258.622 97.609 272.623 95.984 288 95.984C312.253 95.984 333.255 99.984 352.007 106.61ZM425.532 128.447C415.519 128.447 405.479 129.718 395.762 132.236C414.585 149.137 414.382 151.885 421.139 164.112C389.386 140.486 345.506 127.985 288 127.985S186.614 140.486 154.861 164.112C161.681 151.771 161.445 149.11 180.238 132.236C170.521 129.718 160.481 128.447 150.468 128.447C51.007 128.447 0 254.478 0 319.993C0 384.44 51.255 511.926 151.463 511.926C176.433 511.926 201.424 503.987 220.868 488.124C238.62 503.5 260.747 512 288 512S337.38 503.5 355.257 488.124C374.64 503.987 399.599 511.926 424.553 511.926C524.655 511.926 576 385.93 576 319.993C576 255.817 525.099 128.447 425.532 128.447ZM320.1 281.348C320.1 280.104 320.385 278.908 320.879 277.991L362.008 211.364C363.188 209.067 365.323 207.941 367.587 207.941C369.882 207.941 372.31 209.098 374.009 211.364L415.139 277.991C415.594 278.902 415.863 280.087 415.863 281.321C415.863 284.494 414.088 287.991 409.138 287.991H326.879C321.944 287.991 320.1 284.513 320.1 281.348ZM160.083 281.348C160.083 280.104 160.367 278.908 160.861 277.991L201.991 211.364C203.17 209.067 205.305 207.941 207.569 207.941C209.865 207.941 212.293 209.098 213.992 211.364L255.121 277.991C255.577 278.902 255.846 280.087 255.846 281.321C255.846 284.494 254.07 287.991 249.121 287.991H166.862C161.926 287.991 160.083 284.513 160.083 281.348ZM454.691 324.713C463.168 324.713 470.695 331.657 470.695 340.333C470.695 346.724 461.753 367.596 451.143 382.495C441.767 395.496 429.765 406.371 415.889 415.496C415.639 406.871 408.638 399.996 400.012 399.996H384.01C375.134 399.996 368.009 407.121 368.009 415.996V437.497C344.506 444.372 317.878 447.998 288 447.998S231.494 444.372 207.991 437.497V415.996C207.991 407.121 200.866 399.996 191.99 399.996H175.988C167.237 399.996 160.236 406.996 160.111 415.621C146.36 406.496 134.483 395.871 125.357 383.12C114.515 367.853 105.311 346.922 105.311 340.363C105.311 331.672 112.895 324.713 121.358 324.713C133.685 324.713 162.841 354.093 239.995 365.869V383.995C239.995 392.87 247.121 399.996 255.997 399.996H271.998C280.874 399.996 288 392.87 288 383.995V369.745C388.988 369.745 443.676 324.713 454.691 324.713Z" />
        </Icon>
    </>
}