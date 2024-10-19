
import { Icon } from "../../index";

/**
 * A component that renders the `hand-point-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-left?s=thin hand-point-left}
 * @preview ![hand-point-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDkuOTc3IDI1Mi40MjJDMzE1LjU1MSAyNTQuNjkxIDMyMS42MTkgMjU2IDMyOCAyNTZDMzU0LjQ2OSAyNTYgMzc2IDIzNC40NjkgMzc2IDIwOFYxNjBDMzc2IDE1NS41OTQgMzcyLjQyMiAxNTIgMzY4IDE1MlMzNjAgMTU1LjU5NCAzNjAgMTYwVjIwOEMzNjAgMjI1LjY1NiAzNDUuNjQxIDI0MCAzMjggMjQwUzI5NiAyMjUuNjU2IDI5NiAyMDhWMTIwQzI5NiA5Ny45MzggMzEzLjkzOCA4MCAzMzYgODBINDE0LjkyMkM0MjkgODAgNDQxLjk2OSA4Ny42NTYgNDQ4Ljc2NiAxMDBMNDgzLjg1OSAxNjMuNjI1QzQ5MS43OTcgMTc4IDQ5NiAxOTQuMzEyIDQ5NiAyMTAuNzVWMzM4LjY4OEM0OTYgMzg5Ljg3NSA0NTQuMzU5IDQzMS43NSA0MDMuMTU2IDQzMkgzNzZDMzcxLjU3OCA0MzIgMzY4IDQzNS41OTQgMzY4IDQ0MFMzNzEuNTc4IDQ0OCAzNzYgNDQ4SDQwMy4yMDNDNDYzLjIxOSA0NDcuNjg4IDUxMiAzOTguNjU2IDUxMiAzMzguNjg4VjIxMC43NUM1MTIgMTkxLjYyNSA1MDcuMTA5IDE3Mi42MjUgNDk3Ljg1OSAxNTUuODc1TDQ2Mi43NjYgOTIuMjVDNDUzLjE1NiA3NC44NDQgNDM0LjgyOCA2NCA0MTQuOTIyIDY0SDMzNkMzMDcuODYzIDY0IDI4NC43MyA4NC45MzIgMjgwLjgwOSAxMTJINDhDMjEuNTMxIDExMiAwIDEzMy41MzEgMCAxNjBTMjEuNTMxIDIwOCA0OCAyMDhIMTQ4LjQ4NEMxNDAuODA5IDIxNi41MTIgMTM2IDIyNy42NjIgMTM2IDI0MEMxMzYgMjYyLjg1NCAxNTIuMDgyIDI4MS45NTMgMTczLjUwNCAyODYuNzY0QzE2NS4xODIgMjk1LjM5OCAxNjAgMzA3LjA4NiAxNjAgMzIwQzE2MCAzNDIuOSAxNzYuMTQzIDM2Mi4wNDEgMTk3LjYyOSAzNjYuODAzQzE4OS4zMjggMzc1LjQzNiAxODQuMTU2IDM4Ny4xMDUgMTg0LjE1NiA0MDBDMTg0LjE1NiA0MjYuNDY5IDIwNS42ODggNDQ4IDIzMi4xNTYgNDQ4SDMwMy45NTNDMzMwLjQyMiA0NDggMzUxLjk1MyA0MjYuNDY5IDM1MS45NTMgNDAwQzM1MS45NTMgMzc3LjEwNSAzMzUuODE0IDM1Ny45NjkgMzE0LjMzNiAzNTMuMjAxQzMyMi42NDEgMzQ0LjU2OCAzMjcuODEyIDMzMi44OTYgMzI3LjgxMiAzMjBDMzI3LjgxMiAyOTkuMzUyIDMxNC42MzkgMjgxLjg2NSAyOTYuMzExIDI3NS4xMDRDMzAyLjgzNiAyNjkuMDU5IDMwNy41OTIgMjYxLjI1NCAzMDkuOTc3IDI1Mi40MjJaTTIzMi4xNTYgMzY4SDMwMy45NTNDMzIxLjU5NCAzNjggMzM1Ljk1MyAzODIuMzQ0IDMzNS45NTMgNDAwUzMyMS41OTQgNDMyIDMwMy45NTMgNDMySDIzMi4xNTZDMjE0LjUxNiA0MzIgMjAwLjE1NiA0MTcuNjU2IDIwMC4xNTYgNDAwUzIxNC41MTYgMzY4IDIzMi4xNTYgMzY4Wk0yMDggMjg4SDI3OS44MTJDMjk3LjQ1MyAyODggMzExLjgxMiAzMDIuMzQ0IDMxMS44MTIgMzIwUzI5Ny40NTMgMzUyIDI3OS44MTIgMzUySDIwOEMxOTAuMzU5IDM1MiAxNzYgMzM3LjY1NiAxNzYgMzIwUzE5MC4zNTkgMjg4IDIwOCAyODhaTTI4MCAxMjhWMTk0Ljk1M0MyNzQuODUgMTkzLjEgMjY5LjQzOCAxOTIgMjYzLjgxMiAxOTJINDhDMzAuMzU5IDE5MiAxNiAxNzcuNjU2IDE2IDE2MFMzMC4zNTkgMTI4IDQ4IDEyOEgyODBaTTI2My44MTIgMjcySDE4NEMxNjYuMzU5IDI3MiAxNTIgMjU3LjY1NiAxNTIgMjQwUzE2Ni4zNTkgMjA4IDE4NCAyMDhIMjYzLjgxMkMyNjkuODQyIDIwOCAyNzUuNDY5IDIwOS45NjUgMjgwLjUxNiAyMTMuMDk4QzI4MS43NzMgMjI0Ljc5NSAyODcuMDkyIDIzNS4yMjcgMjk1LjIzIDI0Mi44NzlDMjkzLjcwMSAyNTkuMTE5IDI4MC40MzQgMjcyIDI2My44MTIgMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandPointLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M309.977 252.422C315.551 254.691 321.619 256 328 256C354.469 256 376 234.469 376 208V160C376 155.594 372.422 152 368 152S360 155.594 360 160V208C360 225.656 345.641 240 328 240S296 225.656 296 208V120C296 97.938 313.938 80 336 80H414.922C429 80 441.969 87.656 448.766 100L483.859 163.625C491.797 178 496 194.312 496 210.75V338.688C496 389.875 454.359 431.75 403.156 432H376C371.578 432 368 435.594 368 440S371.578 448 376 448H403.203C463.219 447.688 512 398.656 512 338.688V210.75C512 191.625 507.109 172.625 497.859 155.875L462.766 92.25C453.156 74.844 434.828 64 414.922 64H336C307.863 64 284.73 84.932 280.809 112H48C21.531 112 0 133.531 0 160S21.531 208 48 208H148.484C140.809 216.512 136 227.662 136 240C136 262.854 152.082 281.953 173.504 286.764C165.182 295.398 160 307.086 160 320C160 342.9 176.143 362.041 197.629 366.803C189.328 375.436 184.156 387.105 184.156 400C184.156 426.469 205.688 448 232.156 448H303.953C330.422 448 351.953 426.469 351.953 400C351.953 377.105 335.814 357.969 314.336 353.201C322.641 344.568 327.812 332.896 327.812 320C327.812 299.352 314.639 281.865 296.311 275.104C302.836 269.059 307.592 261.254 309.977 252.422ZM232.156 368H303.953C321.594 368 335.953 382.344 335.953 400S321.594 432 303.953 432H232.156C214.516 432 200.156 417.656 200.156 400S214.516 368 232.156 368ZM208 288H279.812C297.453 288 311.812 302.344 311.812 320S297.453 352 279.812 352H208C190.359 352 176 337.656 176 320S190.359 288 208 288ZM280 128V194.953C274.85 193.1 269.438 192 263.812 192H48C30.359 192 16 177.656 16 160S30.359 128 48 128H280ZM263.812 272H184C166.359 272 152 257.656 152 240S166.359 208 184 208H263.812C269.842 208 275.469 209.965 280.516 213.098C281.773 224.795 287.092 235.227 295.23 242.879C293.701 259.119 280.434 272 263.812 272Z" />
    </Icon>
);

export default HandPointLeft;