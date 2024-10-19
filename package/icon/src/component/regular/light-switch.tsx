
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=regular light-switch}
 * @preview ![light-switch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMEg2NEMyOC42MjUgMCAwIDI4LjYyNSAwIDY0VjQ0OEMwIDQ4My4zNzUgMjguNjI1IDUxMiA2NCA1MTJIMzIwQzM1NS4zNzUgNTEyIDM4NCA0ODMuMzc1IDM4NCA0NDhWNjRDMzg0IDI4LjYyNSAzNTUuMzc1IDAgMzIwIDBaTTMzNiA0NDhDMzM2IDQ1Ni44NzUgMzI4Ljg3NSA0NjQgMzIwIDQ2NEgyMTQuMzc1QzIxMS4xMjUgNDU0LjM3NSAyMDIuMTI1IDQ0OCAxOTIgNDQ4UzE3Mi44NzUgNDU0LjM3NSAxNjkuNjI1IDQ2NEg2NEM1NS4xMjUgNDY0IDQ4IDQ1Ni44NzUgNDggNDQ4VjY0QzQ4IDU1LjEyNSA1NS4xMjUgNDggNjQgNDhIMTY5LjYyNUMxNzIuODc1IDU3LjYyNSAxODEuODc1IDY0IDE5MiA2NFMyMTEuMTI1IDU3LjYyNSAyMTQuMzc1IDQ4SDMyMEMzMjguODc1IDQ4IDMzNiA1NS4xMjUgMzM2IDY0VjQ0OFpNMjQwIDk2SDE0NEMxMTcuNiA5NiA5NiAxMTcuNiA5NiAxNDRWMzY4Qzk2IDM5NC40IDExNy42IDQxNiAxNDQgNDE2SDI0MEMyNjYuNCA0MTYgMjg4IDM5NC40IDI4OCAzNjhWMTQ0QzI4OCAxMTcuNiAyNjYuNCA5NiAyNDAgOTZaTTI0MCAzNjhIMTQ0VjI4MEgyNDBWMzY4Wk0yNDAgMjMySDE0NFYxNDRIMjQwVjIzMloiLz48L3N2Zz4=|width=32|height=32)
 */
const LightSwitch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 0H64C28.625 0 0 28.625 0 64V448C0 483.375 28.625 512 64 512H320C355.375 512 384 483.375 384 448V64C384 28.625 355.375 0 320 0ZM336 448C336 456.875 328.875 464 320 464H214.375C211.125 454.375 202.125 448 192 448S172.875 454.375 169.625 464H64C55.125 464 48 456.875 48 448V64C48 55.125 55.125 48 64 48H169.625C172.875 57.625 181.875 64 192 64S211.125 57.625 214.375 48H320C328.875 48 336 55.125 336 64V448ZM240 96H144C117.6 96 96 117.6 96 144V368C96 394.4 117.6 416 144 416H240C266.4 416 288 394.4 288 368V144C288 117.6 266.4 96 240 96ZM240 368H144V280H240V368ZM240 232H144V144H240V232Z" />
    </Icon>
);

export default LightSwitch;