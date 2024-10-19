
import { Icon } from "../../index";

/**
 * A component that renders the `dollar-sign` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dollar-sign?s=regular dollar-sign}
 * @preview ![dollar-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDIuMDk5IDM1Ny44MjhDMjkyLjc2MyA0MDUuNzMgMjQ4LjMxNSA0MzQuODY3IDE4NC4xNjEgNDM5LjE3MlY0ODhDMTg0LjE2MSA1MDEuMjUgMTczLjQxMSA1MTIgMTYwLjE2MSA1MTJTMTM2LjE2MSA1MDEuMjUgMTM2LjE2MSA0ODhWNDM3Ljc3QzEzMi43NDUgNDM3LjQwNCAxMjkuNjQ5IDQzNy41MzEgMTI2LjE2MSA0MzcuMDQ3Qzk5LjEzIDQzMy40MzggNzAuMjI0IDQyNC4xNzIgNDQuNzI0IDQxNkwzMi44NDkgNDEyLjIxOUMyMC4yMjQgNDA4LjIzNCAxMy4xOTIgMzk0Ljc2NiAxNy4xNjEgMzgyLjEwOUMyMS4xNjEgMzY5LjQ4NCAzNC40NzQgMzYyLjM5MSA0Ny4yODYgMzY2LjQzN0w1OS4zNDkgMzcwLjI4MUM4Mi45NzQgMzc3Ljg0NCAxMDkuNzI0IDM4Ni40MjIgMTMyLjY2MSAzODkuNUMxODguMDk5IDM5Ny4xODcgMjQ3LjQxMSAzODcuNTYyIDI1NC45NzQgMzQ4LjY0MUMyNjEuOTQyIDMxMi45NTMgMjM1Ljg4IDMwMCAxNTQuMDk5IDI3OS4xODhMMTM4LjA2NyAyNzUuMDc4QzkwLjMxNyAyNjIuNjI1IDEuNDQyIDIzOS40MjIgMTguMDM2IDE1NC4xNzJDMjcuMzcgMTA2LjIzIDcxLjkxNyA3Ny4xNTIgMTM2LjE2MSA3Mi44NzlWMjRDMTM2LjE2MSAxMC43NSAxNDYuOTExIDAgMTYwLjE2MSAwUzE4NC4xNjEgMTAuNzUgMTg0LjE2MSAyNFY3NC4xMjdDMTg3LjQ4NSA3NC40ODQgMTkwLjU4MSA3NC40ODIgMTkzLjk3NCA3NC45NTNDMjExLjQxMSA3Ny4zNzUgMjMxLjQ3NCA4Mi4xNzIgMjU3LjEzIDkwLjA2M0MyNjkuNzg2IDkzLjk1MyAyNzYuOTExIDEwNy4zOTEgMjczLjAwNSAxMjAuMDQ3QzI2OS4xMyAxMzIuNzE5IDI1NS43NTUgMTM5Ljg0NCAyNDMuMDA1IDEzNS45MzhDMjE5Ljg4IDEyOC44MjggMjAyLjE5MiAxMjQuNTQ3IDE4Ny4zNDkgMTIyLjQ4NEMxMzIuMDY3IDExNC44MjggNzIuNzI0IDEyNC40MzggNjUuMTYxIDE2My4zNTlDNTkuMDM2IDE5NC43ODEgNzguOTExIDIxMC4wMzEgMTUwLjE5MiAyMjguNjQxTDE2NS45NDIgMjMyLjY3MkMyMzAuNDc0IDI0OS4wOTQgMzE4Ljg4IDI3MS41NzggMzAyLjA5OSAzNTcuODI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DollarSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M302.099 357.828C292.763 405.73 248.315 434.867 184.161 439.172V488C184.161 501.25 173.411 512 160.161 512S136.161 501.25 136.161 488V437.77C132.745 437.404 129.649 437.531 126.161 437.047C99.13 433.438 70.224 424.172 44.724 416L32.849 412.219C20.224 408.234 13.192 394.766 17.161 382.109C21.161 369.484 34.474 362.391 47.286 366.437L59.349 370.281C82.974 377.844 109.724 386.422 132.661 389.5C188.099 397.187 247.411 387.562 254.974 348.641C261.942 312.953 235.88 300 154.099 279.188L138.067 275.078C90.317 262.625 1.442 239.422 18.036 154.172C27.37 106.23 71.917 77.152 136.161 72.879V24C136.161 10.75 146.911 0 160.161 0S184.161 10.75 184.161 24V74.127C187.485 74.484 190.581 74.482 193.974 74.953C211.411 77.375 231.474 82.172 257.13 90.063C269.786 93.953 276.911 107.391 273.005 120.047C269.13 132.719 255.755 139.844 243.005 135.938C219.88 128.828 202.192 124.547 187.349 122.484C132.067 114.828 72.724 124.438 65.161 163.359C59.036 194.781 78.911 210.031 150.192 228.641L165.942 232.672C230.474 249.094 318.88 271.578 302.099 357.828Z" />
    </Icon>
);

export default DollarSign;