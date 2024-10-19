
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `house-tree` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-tree?s=light house-tree}
 * @preview ![house-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzQuNzE1IDI1NS45NzFIMTQ5LjM5M0MxMzcuNjMzIDI1NS45NzEgMTI4IDI2NS40NzEgMTI4IDI3Ny4zNDhWMzYyLjYwOUMxMjggMzc0LjQ4NiAxMzcuNjMzIDM4My45ODYgMTQ5LjM5MyAzODMuOTg2SDIzNC43MTVDMjQ2LjQ3NSAzODMuOTg2IDI1Ni4xMDcgMzc0LjM2MSAyNTYuMTA3IDM2Mi42MDlWMjc3LjM0OEMyNTYuMTA3IDI2NS41OTYgMjQ2LjYgMjU1Ljk3MSAyMzQuNzE1IDI1NS45NzFaTTIyNC4wOCAzNTEuOTgySDE2MC4wMjdWMjg3Ljk3NUgyMjQuMDhWMzUxLjk4MlpNMjE1LjQ3NyAxMDUuMDc4QzIwOC44MiA5OS4wMjUgMjAwLjQwOCA5NiAxOTEuOTk2IDk2UzE3NS4xNyA5OS4wMjUgMTY4LjUxNCAxMDUuMDc4TDE3LjEzOSAyNDIuNjkxQzYuMjIzIDI1Mi42MTMgMCAyNjYuNjgyIDAgMjgxLjQzNFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMxOS45OTRDMzU1LjM0IDUxMiAzODMuOTkyIDQ4My40NDEgMzgzLjk5NCA0NDguMDk4QzM4My45OTggMzk0LjMyMiAzODQgMzIwLjkwOCAzODQgMjgxLjEwN0MzODQgMjY2LjQ1NSAzNzcuODE4IDI1Mi42NTYgMzY2Ljk3NyAyNDIuODAxTDIxNS40NzcgMTA1LjA3OFpNMzUxLjk5NCA0NDhDMzUxLjk5MiA0NjUuNiAzMzcuNTkyIDQ4MCAzMTkuOTk0IDQ4MEg2NEM0Ni4zMjYgNDgwIDMyIDQ2NS42NzIgMzIgNDQ4VjI4MS40MzhDMzIgMjc1LjY5OSAzNC40MiAyNzAuMjI3IDM4LjY2NiAyNjYuMzY1TDE5MS45OTYgMTI3Ljk5OEwzNDUuMzU3IDI2Ni4zOTVDMzQ5LjU4OCAyNzAuMjQgMzUyIDI3NS42OTMgMzUyIDI4MS40MUwzNTEuOTk0IDQ0OFpNNjI4LjIxMyA0MzIuNTg2TDU2Ni45MDggMzYxLjc3N0M1ODMuOTA2IDM2MS4zNCA1OTguNzc5IDM1MS42NDEgNjA1Ljg3MSAzMzYuMjc3QzYxMy4wNTkgMzIwLjc1OCA2MTAuNjg0IDMwMi45ODQgNTk5LjU5MiAyODkuODc1TDUzMy4xIDIxMS42MTlINTQwLjQ0MUM1NTYuNDcxIDIxMS42MTkgNTcwLjgxMiAyMDIuNTc2IDU3Ni45NjkgMTg4LjU5QzU4Mi43NSAxNzUuNDQ5IDU4MC4yNSAxNjAuNTg2IDU3MC4zNDQgMTQ5Ljc2TDQ0My44OTEgMTIuMzY3QzQyOC45MjQgLTQuMTIzIDM5OS4wODIgLTQuMDkyIDM4NC4xNzggMTIuMjczTDMwOC4yMTkgOTQuOTA4QzMwMi4yNSAxMDEuNDE4IDMwMi42NTYgMTExLjU1NSAzMDkuMTU2IDExNy41NjJDMzE1LjY4NiAxMjMuNTM5IDMyNS44MTEgMTIzLjEzMyAzMzEuNzc3IDExNi42MjNMNDA3LjgwMSAzMy44OTVDNDEwLjY3NiAzMC43MzQgNDE3LjIzNiAzMC43MDMgNDIwLjI5OSAzMy45ODhMNTQ2Ljc4NSAxNzEuNDEyQzU0OC4wOTggMTcyLjg1MiA1NDguMzQ4IDE3NC4xNjYgNTQ3LjY5MSAxNzUuNjY4QzU0Ni44NDggMTc3LjU3NiA1NDQuNTM1IDE3OS41NzggNTQwLjQ0MSAxNzkuNTc4SDQ5OC40NzlDNDkyLjIyOSAxNzkuNTc4IDQ4Ni41NzIgMTgzLjIwOSA0ODMuOTQ3IDE4OC44NzFDNDgxLjMyNCAxOTQuNTM1IDQ4Mi4yNjIgMjAxLjIzIDQ4Ni4yOTEgMjA1Ljk4Nkw1NzUuMTg4IDMxMC42MTlDNTc5LjQzOCAzMTUuNjU2IDU3Ny43ODEgMzIwLjc4OSA1NzYuODc1IDMyMi43OTFDNTc2LjA5NCAzMjQuNDE4IDU3My4wMzEgMzI5Ljc3IDU2NS42MjcgMzI5Ljc3SDUzMS44ODFDNTI1LjYzMSAzMjkuNzcgNTE5LjkxMiAzMzMuNDMgNTE3LjMyIDMzOS4xMjVDNTE0LjcyNyAzNDQuODUgNTE1LjY5NSAzNTEuNTQ3IDUxOS43ODcgMzU2LjI3MUw2MDQuMDI3IDQ1My41ODJDNjEwLjMwOSA0NjAuODExIDYwNy40MzQgNDY4LjY5NSA2MDYuNDAyIDQ3MC45NDdDNjA1LjE4NCA0NzMuNjcgNjAxLjQwNCA0NzkuOTU5IDU5Mi44MTEgNDc5Ljk1OUg0MzEuOTg2QzQyMy4xNDMgNDc5Ljk1OSA0MTUuOTg2IDQ4Ny4xMjUgNDE1Ljk4NiA0OTUuOTc5QzQxNS45ODYgNTA0LjgzNCA0MjMuMTQzIDUxMiA0MzEuOTg2IDUxMkg1OTIuODExQzYxMS4zNzEgNTEyIDYyNy43NDQgNTAxLjM2MSA2MzUuNTI1IDQ4NC4yNDZDNjQzLjQ5MiA0NjYuNzU0IDY0MC42OCA0NDYuOTggNjI4LjIxMyA0MzIuNTg2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HouseTree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M234.715 255.971H149.393C137.633 255.971 128 265.471 128 277.348V362.609C128 374.486 137.633 383.986 149.393 383.986H234.715C246.475 383.986 256.107 374.361 256.107 362.609V277.348C256.107 265.596 246.6 255.971 234.715 255.971ZM224.08 351.982H160.027V287.975H224.08V351.982ZM215.477 105.078C208.82 99.025 200.408 96 191.996 96S175.17 99.025 168.514 105.078L17.139 242.691C6.223 252.613 0 266.682 0 281.434V448C0 483.346 28.654 512 64 512H319.994C355.34 512 383.992 483.441 383.994 448.098C383.998 394.322 384 320.908 384 281.107C384 266.455 377.818 252.656 366.977 242.801L215.477 105.078ZM351.994 448C351.992 465.6 337.592 480 319.994 480H64C46.326 480 32 465.672 32 448V281.438C32 275.699 34.42 270.227 38.666 266.365L191.996 127.998L345.357 266.395C349.588 270.24 352 275.693 352 281.41L351.994 448ZM628.213 432.586L566.908 361.777C583.906 361.34 598.779 351.641 605.871 336.277C613.059 320.758 610.684 302.984 599.592 289.875L533.1 211.619H540.441C556.471 211.619 570.812 202.576 576.969 188.59C582.75 175.449 580.25 160.586 570.344 149.76L443.891 12.367C428.924 -4.123 399.082 -4.092 384.178 12.273L308.219 94.908C302.25 101.418 302.656 111.555 309.156 117.562C315.686 123.539 325.811 123.133 331.777 116.623L407.801 33.895C410.676 30.734 417.236 30.703 420.299 33.988L546.785 171.412C548.098 172.852 548.348 174.166 547.691 175.668C546.848 177.576 544.535 179.578 540.441 179.578H498.479C492.229 179.578 486.572 183.209 483.947 188.871C481.324 194.535 482.262 201.23 486.291 205.986L575.188 310.619C579.438 315.656 577.781 320.789 576.875 322.791C576.094 324.418 573.031 329.77 565.627 329.77H531.881C525.631 329.77 519.912 333.43 517.32 339.125C514.727 344.85 515.695 351.547 519.787 356.271L604.027 453.582C610.309 460.811 607.434 468.695 606.402 470.947C605.184 473.67 601.404 479.959 592.811 479.959H431.986C423.143 479.959 415.986 487.125 415.986 495.979C415.986 504.834 423.143 512 431.986 512H592.811C611.371 512 627.744 501.361 635.525 484.246C643.492 466.754 640.68 446.98 628.213 432.586Z" />
        </Icon>
    </>
}