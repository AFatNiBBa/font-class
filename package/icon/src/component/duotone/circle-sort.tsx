
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-sort` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort?s=duotone circle-sort}
 * @preview ![circle-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDIgMTYgMTYgMTIzLjQyIDE2IDI1NlMxMjMuNDIgNDk2IDI1NiA0OTZDMzg4LjU4MiA0OTYgNDk2IDM4OC41OCA0OTYgMjU2UzM4OC41ODIgMTYgMjU2IDE2Wk0zNjAuNjI1IDMxOS4zNzVMMjY5LjEyNSA0MTAuNjI1QzI2NS42MjUgNDE0IDI2MC44NzUgNDE2IDI1NiA0MTZTMjQ2LjUgNDE0IDI0MyA0MTAuNjI1TDE1MS4zNzUgMzE5LjM3NUMxMzkuODc1IDMwNy44NzUgMTQ4IDI4OCAxNjQuNSAyODhIMzQ3LjVDMzY0IDI4OCAzNzIuMTI1IDMwNy44NzUgMzYwLjYyNSAzMTkuMzc1Wk0zNDcuNSAyMjRIMTY0LjVDMTQ4IDIyNCAxMzkuODc1IDIwNC4xMjUgMTUxLjM3NSAxOTIuNjI1TDI0MyAxMDEuMzc1QzI0Ni41IDk4IDI1MS4xMjUgOTYgMjU2IDk2UzI2NS42MjUgOTggMjY5LjEyNSAxMDEuMzc1TDM2MC42MjUgMTkyLjYyNUMzNzIuMTI1IDIwNC4xMjUgMzY0IDIyNCAzNDcuNSAyMjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE2NC41MDUgMjI0SDM0Ny41MDVDMzY0LjAwNSAyMjQgMzcyLjEzIDIwNC4xMjUgMzYwLjYzIDE5Mi42MjVMMjY5LjEzIDEwMS4zNzVDMjY1LjYzIDk4IDI2MC44OCA5NiAyNTYuMDA1IDk2UzI0Ni41MDUgOTggMjQzLjAwNSAxMDEuMzc1TDE1MS4zOCAxOTIuNjI1QzEzOS44OCAyMDQuMTI1IDE0OC4wMDUgMjI0IDE2NC41MDUgMjI0Wk0zNDcuNTA1IDI4OEgxNjQuNTA1QzE0OC4wMDUgMjg4IDEzOS44OCAzMDcuODc1IDE1MS4zOCAzMTkuMzc1TDI0My4wMDUgNDEwLjYyNUMyNDYuNTA1IDQxNCAyNTEuMTMgNDE2IDI1Ni4wMDUgNDE2UzI2NS42MyA0MTQgMjY5LjEzIDQxMC42MjVMMzYwLjYzIDMxOS4zNzVDMzcyLjEzIDMwNy44NzUgMzY0LjAwNSAyODggMzQ3LjUwNSAyODhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleSort: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM360.625 319.375L269.125 410.625C265.625 414 260.875 416 256 416S246.5 414 243 410.625L151.375 319.375C139.875 307.875 148 288 164.5 288H347.5C364 288 372.125 307.875 360.625 319.375ZM347.5 224H164.5C148 224 139.875 204.125 151.375 192.625L243 101.375C246.5 98 251.125 96 256 96S265.625 98 269.125 101.375L360.625 192.625C372.125 204.125 364 224 347.5 224Z" />
            <path d="M164.505 224H347.505C364.005 224 372.13 204.125 360.63 192.625L269.13 101.375C265.63 98 260.88 96 256.005 96S246.505 98 243.005 101.375L151.38 192.625C139.88 204.125 148.005 224 164.505 224ZM347.505 288H164.505C148.005 288 139.88 307.875 151.38 319.375L243.005 410.625C246.505 414 251.13 416 256.005 416S265.63 414 269.13 410.625L360.63 319.375C372.13 307.875 364.005 288 347.505 288Z" />
    </Icon>
);

export default CircleSort;