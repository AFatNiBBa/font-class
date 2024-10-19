
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-plus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-plus?s=thin alarm-plus}
 * @preview ![alarm-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiAxMDFDMTYgNTQuMTI1IDU0LjEyNSAxNiAxMDEgMTZDMTE5LjA5NCAxNiAxNDUuNSAyNi40MDYgMTU4LjY4OCAzOC43MzRDMTYwLjI0MyA0MC4xNyAxNjIuMjE0IDQwLjg4MyAxNjQuMTc1IDQwLjg4M0MxNjguNjQgNDAuODgzIDE3Mi4xNjEgMzcuMjU4IDE3Mi4xNjEgMzIuODk3QzE3Mi4xNjEgMTkuNDE4IDEyNi4wMTQgMCAxMDEgMEM0NS4zMTIgMCAwIDQ1LjMxMiAwIDEwMS4wMzFDMC4wNjggMTE4Ljg3IDExLjI1OSAxNTguNjUyIDIyLjgyMiAxNTguNjUyQzI3LjM5OCAxNTguNjUyIDMwLjg0NCAxNTQuOTYgMzAuODQ0IDE1MC42NUMzMC44NDQgMTQ1LjU4NyAxNi4xMjUgMTI3LjY2NiAxNiAxMDFaTTQxMSAwQzM4My4xMzMgMCAzMzkuODQyIDIxLjA1MSAzMzkuODQyIDMyLjg2NUMzMzkuODQyIDM3LjMzIDM0My41MDcgNDAuODY2IDM0Ny44OCA0MC44NjZDMzQ5LjgxNyA0MC44NjYgMzUxLjc1NiA0MC4xNjIgMzUzLjI4MSAzOC43MTlDMzY2LjUzMSAyNi40MDYgMzkyLjk2OSAxNiA0MTEgMTZDNDU3Ljg3NSAxNiA0OTYgNTQuMTI1IDQ5NiAxMDAuOTY5QzQ5NS44NzYgMTI3LjUwMyA0ODEuMTgxIDE0NS42NTQgNDgxLjE4MSAxNTAuNjE3QzQ4MS4xODEgMTU1LjE2NiA0ODQuOTQxIDE1OC42NSA0ODkuMTcgMTU4LjY1QzUwMC44NTkgMTU4LjY1IDUxMS45MzMgMTE4LjY1OSA1MTIgMTAxQzUxMiA0NS4zMTIgNDY2LjY4OCAwIDQxMSAwWk0yNTYgNjRDMTMyLjI4OSA2NCAzMiAxNjQuMjg3IDMyIDI4OEMzMiAzNDYuOTc1IDU0Ljk2OSA0MDAuNDYzIDkyLjIyMyA0NDAuNDY1TDM0LjM0NCA0OTguMzQ0QzMyLjc4MSA0OTkuOTA2IDMyIDUwMS45NTMgMzIgNTA0QzMyIDUwOC41NjEgMzUuNzI4IDUxMi4wMDEgNDAgNTEyLjAwMUM0Mi4wNDYgNTEyLjAwMSA0NC4wOTMgNTExLjIyIDQ1LjY1NiA1MDkuNjU2TDEwMy41MzUgNDUxLjc3N0MxNDMuNTM5IDQ4OS4wMzMgMTk3LjAyMyA1MTIgMjU2IDUxMlMzNjguNDYxIDQ4OS4wMzMgNDA4LjQ2NSA0NTEuNzc3TDQ2Ni4zNDQgNTA5LjY1NkM0NjcuOTA3IDUxMS4yMiA0NjkuOTU0IDUxMi4wMDEgNDcyIDUxMi4wMDFDNDc2LjI3NiA1MTIuMDAxIDQ4MCA1MDguNTUxIDQ4MCA1MDRDNDgwIDUwMS45NTMgNDc5LjIxOSA0OTkuOTA2IDQ3Ny42NTYgNDk4LjM0NEw0MTkuNzc3IDQ0MC40NjVDNDU3LjAzMSA0MDAuNDYzIDQ4MCAzNDYuOTc1IDQ4MCAyODhDNDgwIDE2NC4yODcgMzc5LjcxMSA2NCAyNTYgNjRaTTI1NiA0OTZDMTQxLjMwOSA0OTYgNDggNDAyLjY5MSA0OCAyODhTMTQxLjMwOSA4MCAyNTYgODBTNDY0IDE3My4zMDkgNDY0IDI4OFMzNzAuNjkxIDQ5NiAyNTYgNDk2Wk0zNTIgMjgwSDI2NFYxOTJDMjY0IDE4Ny41NzggMjYwLjQwNiAxODQgMjU2IDE4NFMyNDggMTg3LjU3OCAyNDggMTkyVjI4MEgxNjBDMTU1LjU5NCAyODAgMTUyIDI4My41NzggMTUyIDI4OFMxNTUuNTk0IDI5NiAxNjAgMjk2SDI0OFYzODRDMjQ4IDM4OC40MjIgMjUxLjU5NCAzOTIgMjU2IDM5MlMyNjQgMzg4LjQyMiAyNjQgMzg0VjI5NkgzNTJDMzU2LjQwNiAyOTYgMzYwIDI5Mi40MjIgMzYwIDI4OFMzNTYuNDA2IDI4MCAzNTIgMjgwWiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
const AlarmPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 101C16 54.125 54.125 16 101 16C119.094 16 145.5 26.406 158.688 38.734C160.243 40.17 162.214 40.883 164.175 40.883C168.64 40.883 172.161 37.258 172.161 32.897C172.161 19.418 126.014 0 101 0C45.312 0 0 45.312 0 101.031C0.068 118.87 11.259 158.652 22.822 158.652C27.398 158.652 30.844 154.96 30.844 150.65C30.844 145.587 16.125 127.666 16 101ZM411 0C383.133 0 339.842 21.051 339.842 32.865C339.842 37.33 343.507 40.866 347.88 40.866C349.817 40.866 351.756 40.162 353.281 38.719C366.531 26.406 392.969 16 411 16C457.875 16 496 54.125 496 100.969C495.876 127.503 481.181 145.654 481.181 150.617C481.181 155.166 484.941 158.65 489.17 158.65C500.859 158.65 511.933 118.659 512 101C512 45.312 466.688 0 411 0ZM256 64C132.289 64 32 164.287 32 288C32 346.975 54.969 400.463 92.223 440.465L34.344 498.344C32.781 499.906 32 501.953 32 504C32 508.561 35.728 512.001 40 512.001C42.046 512.001 44.093 511.22 45.656 509.656L103.535 451.777C143.539 489.033 197.023 512 256 512S368.461 489.033 408.465 451.777L466.344 509.656C467.907 511.22 469.954 512.001 472 512.001C476.276 512.001 480 508.551 480 504C480 501.953 479.219 499.906 477.656 498.344L419.777 440.465C457.031 400.463 480 346.975 480 288C480 164.287 379.711 64 256 64ZM256 496C141.309 496 48 402.691 48 288S141.309 80 256 80S464 173.309 464 288S370.691 496 256 496ZM352 280H264V192C264 187.578 260.406 184 256 184S248 187.578 248 192V280H160C155.594 280 152 283.578 152 288S155.594 296 160 296H248V384C248 388.422 251.594 392 256 392S264 388.422 264 384V296H352C356.406 296 360 292.422 360 288S356.406 280 352 280Z " />
    </Icon>
);

export default AlarmPlus;