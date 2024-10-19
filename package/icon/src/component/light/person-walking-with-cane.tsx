
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-walking-with-cane` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking-with-cane?s=light person-walking-with-cane}
 * @preview ![person-walking-with-cane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzEuNTY3IDE4MC45MDZDMjExLjAzNiAxNTcuNDUzIDE4MS4zOCAxNDQgMTUwLjIwOCAxNDRDMTEwLjk3MyAxNDQgNzQuNzU1IDE2NS4zMTIgNTUuNjkyIDE5OS42MDlMMi4wMiAyOTYuMjM0Qy0yLjI3NyAzMDMuOTUzIDAuNTA1IDMxMy43MDMgOC4yMzkgMzE3Ljk4NEMxMC42OTIgMzE5LjM1OSAxMy4zNjQgMzIwIDE1Ljk4OSAzMjBDMjEuNjE0IDMyMCAyNy4wNjcgMzE3LjAzMSAyOS45ODkgMzExLjc2Nkw4My42NjEgMjE1LjE1NkM4Ny4wNTIgMjA5LjA1MyA5MS4yMzEgMjAzLjU1NyA5Ni4wMDUgMTk4LjcxN1YyNTZDOTYuMDA1IDI4MS4wMzEgMTA3Ljk1OCAzMDQuOTY5IDEyOC4wMDUgMzIwTDIyNC4wMDUgMzkyVjQ5NkMyMjQuMDA1IDUwNC44NDQgMjMxLjE2MSA1MTIgMjQwLjAwNSA1MTJTMjU2LjAwNSA1MDQuODQ0IDI1Ni4wMDUgNDk2VjM4NEMyNTYuMDA1IDM3OC45NjkgMjUzLjYzIDM3NC4yMTkgMjQ5LjU5OCAzNzEuMjAzTDE0Ny4yMDggMjk0LjQwNkMxMzUuMTc3IDI4NS4zNzUgMTI4LjAwNSAyNzEuMDMxIDEyOC4wMDUgMjU2VjE3OS41ODRDMTM1LjEzNCAxNzcuMzk2IDE0Mi41MzggMTc2IDE1MC4yMDggMTc2QzE3Mi4xNDUgMTc2IDE5My4wMzYgMTg1LjQ2OSAyMDcuNDg5IDIwMS45ODRMMjkxLjk1OCAyOTguNTMxQzI5Ny43ODYgMzA1LjE4NyAzMDcuODggMzA1Ljg1OSAzMTQuNTM2IDMwMC4wNDdDMzIxLjE5MiAyOTQuMjE5IDMyMS44NjQgMjg0LjEwOSAzMTYuMDUyIDI3Ny40NjlMMjMxLjU2NyAxODAuOTA2Wk0xNTIuMDA1IDExMkMxODIuODggMTEyIDIwOC4wMDUgODYuODc1IDIwOC4wMDUgNTZTMTgyLjg4IDAgMTUyLjAwNSAwUzk2LjAwNSAyNS4xMjUgOTYuMDA1IDU2UzEyMS4xMyAxMTIgMTUyLjAwNSAxMTJaTTE1Mi4wMDUgMzJDMTY1LjIzOSAzMiAxNzYuMDA1IDQyLjc2NiAxNzYuMDA1IDU2UzE2NS4yMzkgODAgMTUyLjAwNSA4MFMxMjguMDA1IDY5LjIzNCAxMjguMDA1IDU2UzEzOC43NyAzMiAxNTIuMDA1IDMyWk0xMTUuODggMzUyLjQ4NEMxMDcuMjM5IDM1MC4yNSA5OC42MTQgMzU1LjU0NyA5Ni40ODkgMzY0LjEyNUw2NC40ODkgNDkyLjEyNUM2Mi4zMzMgNTAwLjY4NyA2Ny41NTIgNTA5LjM3NSA3Ni4xMyA1MTEuNTE2Qzc3LjQyNyA1MTEuODQ0IDc4LjczOSA1MTIgODAuMDIgNTEyQzg3LjE5MiA1MTIgOTMuNzA4IDUwNy4xNTYgOTUuNTIgNDk5Ljg3NUwxMjcuNTIgMzcxLjg3NUMxMjkuNjc3IDM2My4zMTIgMTI0LjQ1OCAzNTQuNjI1IDExNS44OCAzNTIuNDg0Wk00NDUuNzIzIDQ4Ny43NjZMMzQ5LjcyMyAzMjcuNzY2QzM0NS4xNzcgMzIwLjE4OCAzMzUuMzggMzE3LjczNCAzMjcuNzcgMzIyLjI4MUMzMjAuMTkyIDMyNi44MjggMzE3LjczOSAzMzYuNjU2IDMyMi4yODYgMzQ0LjIzNEw0MTguMjg2IDUwNC4yMzRDNDIxLjI4NiA1MDkuMjM0IDQyNi41ODMgNTEyIDQzMi4wMiA1MTJDNDM0LjgxNyA1MTIgNDM3LjY2MSA1MTEuMjY2IDQ0MC4yMzkgNTA5LjcxOUM0NDcuODE3IDUwNS4xNzIgNDUwLjI3IDQ5NS4zNDQgNDQ1LjcyMyA0ODcuNzY2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PersonWalkingWithCane(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M231.567 180.906C211.036 157.453 181.38 144 150.208 144C110.973 144 74.755 165.312 55.692 199.609L2.02 296.234C-2.277 303.953 0.505 313.703 8.239 317.984C10.692 319.359 13.364 320 15.989 320C21.614 320 27.067 317.031 29.989 311.766L83.661 215.156C87.052 209.053 91.231 203.557 96.005 198.717V256C96.005 281.031 107.958 304.969 128.005 320L224.005 392V496C224.005 504.844 231.161 512 240.005 512S256.005 504.844 256.005 496V384C256.005 378.969 253.63 374.219 249.598 371.203L147.208 294.406C135.177 285.375 128.005 271.031 128.005 256V179.584C135.134 177.396 142.538 176 150.208 176C172.145 176 193.036 185.469 207.489 201.984L291.958 298.531C297.786 305.187 307.88 305.859 314.536 300.047C321.192 294.219 321.864 284.109 316.052 277.469L231.567 180.906ZM152.005 112C182.88 112 208.005 86.875 208.005 56S182.88 0 152.005 0S96.005 25.125 96.005 56S121.13 112 152.005 112ZM152.005 32C165.239 32 176.005 42.766 176.005 56S165.239 80 152.005 80S128.005 69.234 128.005 56S138.77 32 152.005 32ZM115.88 352.484C107.239 350.25 98.614 355.547 96.489 364.125L64.489 492.125C62.333 500.687 67.552 509.375 76.13 511.516C77.427 511.844 78.739 512 80.02 512C87.192 512 93.708 507.156 95.52 499.875L127.52 371.875C129.677 363.312 124.458 354.625 115.88 352.484ZM445.723 487.766L349.723 327.766C345.177 320.188 335.38 317.734 327.77 322.281C320.192 326.828 317.739 336.656 322.286 344.234L418.286 504.234C421.286 509.234 426.583 512 432.02 512C434.817 512 437.661 511.266 440.239 509.719C447.817 505.172 450.27 495.344 445.723 487.766Z" />
        </Icon>
    </>
}