
import { Icon } from "../../index";

/**
 * A component that renders the `phone-flip` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-flip?s=regular phone-flip}
 * @preview ![phone-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xLjM1OSAzODAuMTI2TDIyLjQyMSA0NzEuNDY5QzI3Ljg4OSA0OTUuMzEzIDQ4Ljg1OCA1MTIgNzMuNDE5IDUxMkMzMTUuMjU2IDUxMiA1MTIgMzE1LjI1MSA1MTIgNzMuMzkzQzUxMiA0OC44MzEgNDk1LjI5NyAyNy44NjIgNDcxLjM5MiAyMi40MDlMMzgwLjE0NSAxLjM0N0MzNTUuNjE0IC00LjMyNSAzMzAuNDI3IDguMzMxIDMyMC4yNzEgMzEuNTM0TDI3OC4wMjMgMTMwLjA5NkMyNjguOTQ1IDE1MS40NCAyNzUuMTMyIDE3Ni41MTggMjkzLjAzOCAxOTEuMTQzTDMyNi41ODQgMjE4LjYyN0MzMDAuODM0IDI2My4zNzYgMjYzLjMyIDMwMC44NzYgMjE4LjU0IDMyNi42MjZMMTkxLjEwMyAyOTMuMTI2QzE3Ni41NDEgMjc1LjA2NCAxNTEuMzA4IDI2OC44OTIgMTI5LjkwMiAyNzguMTczTDMxLjcwMiAzMjAuMjUxQzguMzkgMzMwLjMxNCAtNC4zNiAzNTUuNDcgMS4zNTkgMzgwLjEyNlpNNDguMTA4IDM2OS4zMTNDNDcuNjU0IDM2Ny4zNDUgNDguNzc5IDM2NS4xNTcgNTAuNjU0IDM2NC4zNDVMMTQ4LjkxNyAzMjIuMjUxQzE1MC42NTEgMzIxLjQzOSAxNTIuNzI5IDMyMS45NyAxNTMuODM5IDMyMy4zNzZMMTkzLjg1MyAzNzIuMjUxQzIwMC45MTUgMzgwLjg3NiAyMTMuMDA5IDM4My41MDEgMjIzLjAwOSAzNzguNTk0QzI5MC4yODggMzQ1LjU2MyAzNDUuNTM2IDI5MC4zNDUgMzc4LjU1MSAyMjMuMTExQzM4My40NTcgMjEzLjExMSAzODAuODMyIDIwMS4wMzMgMzcyLjIwNyAxOTMuOTcxTDMyMy40MjcgMTU0LjAwMkMzMjEuOTI4IDE1Mi43NjggMzIxLjQyOCAxNTAuNzA1IDMyMi4xNzggMTQ4Ljk0TDM2NC4zMTcgNTAuNjEyQzM2NS4wMDQgNDkuMDUgMzY2LjYyOSA0OC4wMDMgMzY4LjM2NCA0OC4wMDNDMzY4LjY3NiA0OC4wMDMgMzY5LjAwNCA0OC4wMzQgMzY5LjMxNyA0OC4xMTJMNDYwLjY1OCA2OS4xOUM0NjIuNzA1IDY5LjY1OSA0NjQuMDAxIDcxLjMgNDY0LjAwMSA3My4zOTNDNDY0LjAwMSAyODguNzgzIDI4OC43ODggNDY0IDczLjQxOSA0NjRDNzEuMzEgNDY0IDY5LjY2OSA0NjIuNzE5IDY5LjIwMSA0NjAuNzE5TDQ4LjEyMyAzNjkuMzEzSDQ4LjEwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
const PhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M1.359 380.126L22.421 471.469C27.889 495.313 48.858 512 73.419 512C315.256 512 512 315.251 512 73.393C512 48.831 495.297 27.862 471.392 22.409L380.145 1.347C355.614 -4.325 330.427 8.331 320.271 31.534L278.023 130.096C268.945 151.44 275.132 176.518 293.038 191.143L326.584 218.627C300.834 263.376 263.32 300.876 218.54 326.626L191.103 293.126C176.541 275.064 151.308 268.892 129.902 278.173L31.702 320.251C8.39 330.314 -4.36 355.47 1.359 380.126ZM48.108 369.313C47.654 367.345 48.779 365.157 50.654 364.345L148.917 322.251C150.651 321.439 152.729 321.97 153.839 323.376L193.853 372.251C200.915 380.876 213.009 383.501 223.009 378.594C290.288 345.563 345.536 290.345 378.551 223.111C383.457 213.111 380.832 201.033 372.207 193.971L323.427 154.002C321.928 152.768 321.428 150.705 322.178 148.94L364.317 50.612C365.004 49.05 366.629 48.003 368.364 48.003C368.676 48.003 369.004 48.034 369.317 48.112L460.658 69.19C462.705 69.659 464.001 71.3 464.001 73.393C464.001 288.783 288.788 464 73.419 464C71.31 464 69.669 462.719 69.201 460.719L48.123 369.313H48.108Z" />
    </Icon>
);

export default PhoneFlip;