
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trash-list` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=thin trash-list}
 * @preview ![trash-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzUuMDI3IDEyOEMzNzAuNzg3IDEyOCAzNjcuMjgxIDEzMS4zMDUgMzY3LjAyOSAxMzUuNTM3TDM0Ny43MTkgNDYwLjM3NUMzNDYuNDY5IDQ4MC4wMTYgMzI5LjQ2OSA0OTYgMzA5Ljc4MSA0OTZIMTA2LjIxOUM4Ni41MzEgNDk2IDY5LjUzMSA0ODAuMDE2IDY4LjMxMiA0NjAuNDA2TDQ4Ljk3MyAxMzUuNTM3QzQ4LjcyMSAxMzEuMzAzIDQ1LjIxNSAxMjggNDAuOTc1IDEyOEMzNi4zNjEgMTI4IDMyLjcwMSAxMzEuODg1IDMyLjk3NSAxMzYuNDlMNTIuMzQ0IDQ2MS4zNzVDNTQuMDk0IDQ4OS4yOTcgNzguMjUgNTEyIDEwNi4yMTkgNTEySDMwOS43ODFDMzM3Ljc1IDUxMiAzNjEuOTA2IDQ4OS4yOTcgMzYzLjY4NyA0NjEuMzQ0TDM4My4wMjUgMTM2LjQ4OEMzODMuMzAxIDEzMS44ODUgMzc5LjY0MSAxMjggMzc1LjAyNyAxMjhaTTQwOCA2NEgzMDcuMzgzTDI4Ni40MzggMjIuMTI1QzI3OS42MjUgOC40NjkgMjY1LjkzOCAwIDI1MC42NTYgMEgxNjUuMzQ0QzE1MC4wNjIgMCAxMzYuMzc1IDguNDY5IDEyOS41NjIgMjIuMTA5TDEwOC42MTcgNjRIOEMzLjU5NCA2NCAwIDY3LjU3OCAwIDcyUzMuNTk0IDgwIDggODBINDA4QzQxMi40MDYgODAgNDE2IDc2LjQyMiA0MTYgNzJTNDEyLjQwNiA2NCA0MDggNjRaTTEyNi41MDggNjRMMTQzLjg3NSAyOS4yNUMxNDcuOTY5IDIxLjA3OCAxNTYuMTg4IDE2IDE2NS4zNDQgMTZIMjUwLjY1NkMyNTkuODEyIDE2IDI2OC4wMzEgMjEuMDc4IDI3Mi4xMjUgMjkuMjY2TDI4OS40OTIgNjRIMTI2LjUwOFpNNTM2IDQwOEg0NTZDNDUxLjU5NCA0MDggNDQ4IDQxMS41OTQgNDQ4IDQxNlM0NTEuNTk0IDQyNCA0NTYgNDI0SDUzNkM1NDAuNDA2IDQyNCA1NDQgNDIwLjQwNiA1NDQgNDE2UzU0MC40MDYgNDA4IDUzNiA0MDhaTTYzMiAxNTJINDU2QzQ1MS41OTQgMTUyIDQ0OCAxNTUuNTk0IDQ0OCAxNjBTNDUxLjU5NCAxNjggNDU2IDE2OEg2MzJDNjM2LjQwNiAxNjggNjQwIDE2NC40MDYgNjQwIDE2MFM2MzYuNDA2IDE1MiA2MzIgMTUyWk02MDAgMjgwSDQ1NkM0NTEuNTk0IDI4MCA0NDggMjgzLjU5NCA0NDggMjg4UzQ1MS41OTQgMjk2IDQ1NiAyOTZINjAwQzYwNC40MDYgMjk2IDYwOCAyOTIuNDA2IDYwOCAyODhTNjA0LjQwNiAyODAgNjAwIDI4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TrashList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M375.027 128C370.787 128 367.281 131.305 367.029 135.537L347.719 460.375C346.469 480.016 329.469 496 309.781 496H106.219C86.531 496 69.531 480.016 68.312 460.406L48.973 135.537C48.721 131.303 45.215 128 40.975 128C36.361 128 32.701 131.885 32.975 136.49L52.344 461.375C54.094 489.297 78.25 512 106.219 512H309.781C337.75 512 361.906 489.297 363.687 461.344L383.025 136.488C383.301 131.885 379.641 128 375.027 128ZM408 64H307.383L286.438 22.125C279.625 8.469 265.938 0 250.656 0H165.344C150.062 0 136.375 8.469 129.562 22.109L108.617 64H8C3.594 64 0 67.578 0 72S3.594 80 8 80H408C412.406 80 416 76.422 416 72S412.406 64 408 64ZM126.508 64L143.875 29.25C147.969 21.078 156.188 16 165.344 16H250.656C259.812 16 268.031 21.078 272.125 29.266L289.492 64H126.508ZM536 408H456C451.594 408 448 411.594 448 416S451.594 424 456 424H536C540.406 424 544 420.406 544 416S540.406 408 536 408ZM632 152H456C451.594 152 448 155.594 448 160S451.594 168 456 168H632C636.406 168 640 164.406 640 160S636.406 152 632 152ZM600 280H456C451.594 280 448 283.594 448 288S451.594 296 456 296H600C604.406 296 608 292.406 608 288S604.406 280 600 280Z" />
        </Icon>
    </>
}