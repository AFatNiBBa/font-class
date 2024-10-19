
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-ampersand` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-ampersand?s=regular square-ampersand}
 * @preview ![square-ampersand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MDAgNDE2QzQwMCA0MjQuODIyIDM5Mi44MjIgNDMyIDM4NCA0MzJINjRDNTUuMTc4IDQzMiA0OCA0MjQuODIyIDQ4IDQxNlY5NkM0OCA4Ny4xNzggNTUuMTc4IDgwIDY0IDgwSDM4NEMzOTIuODIyIDgwIDQwMCA4Ny4xNzggNDAwIDk2VjQxNlpNMjk5LjUwMiAzMTUuMzQ0TDMyNy42NTYgMjc0LjAzMUMzMzUuMTI1IDI2My4wNzggMzMyLjI4MSAyNDguMTQxIDMyMS4zNDQgMjQwLjY4OEMzMTAuMzc1IDIzMy4yMDMgMjk1LjQ2OSAyMzYuMDc4IDI4Ny45NjkgMjQ3TDI2Ni4yMDcgMjc4LjkzMkwyMzYuNDY5IDI0Ni40MDZMMjU2LjE1NiAyMzAuNTE2QzI2OS43NSAyMTkuNTE2IDI3Ny41NjIgMjAzLjE1NiAyNzcuNTYyIDE4NS42NTZDMjc3LjU2MiAxNTMuODU5IDI1MS42ODggMTI4IDIxOS45MDYgMTI4SDE5Ni43ODFDMTY1IDEyOCAxMzkuMTI1IDE1My44NTkgMTM5LjEyNSAxODUuNjU2QzEzOS4xMjUgMjAyLjAxNiAxNDUuMTg3IDIxNy42ODggMTU2LjI1IDIyOS43OTdMMTY2LjU5NCAyNDEuMTI1TDEzNi44NDQgMjY1LjE3MkMxMjEuMDYyIDI3Ny45MDYgMTEyIDI5Ni44NTkgMTEyIDMxNy4xNTZDMTEyIDM1NC4wMTYgMTQyIDM4NCAxNzguODQ0IDM4NEgyMTEuMzEyQzIzNC43MTkgMzg0IDI1Ni42ODggMzczLjU5NCAyNzEuNDY5IDM1NS44MTJMMjkwLjA5NCAzNzYuMTg4QzI5NC44NDQgMzgxLjM3NSAzMDEuMzEyIDM4NCAzMDcuODEyIDM4NEMzMTMuNTk0IDM4NCAzMTkuNDA2IDM4MS45MjIgMzI0IDM3Ny43MTlDMzMzLjc4MSAzNjguNzY2IDMzNC40NjkgMzUzLjU5NCAzMjUuNTMxIDM0My44MTJMMjk5LjUwMiAzMTUuMzQ0Wk0xOTYuNzgxIDE3NkgyMTkuOTA2QzIyNS4yMTkgMTc2IDIyOS41NjIgMTgwLjMyOCAyMjkuNTYyIDE4NS42NTZDMjI5LjU2MiAxODguNTk0IDIyOC4yNSAxOTEuMzQ0IDIyNS45NjkgMTkzLjE3MkwyMDQuMDMxIDIxMC45MDZMMTkxLjY4OCAxOTcuNDM4QzE4OC43NSAxOTQuMjAzIDE4Ny4xMjUgMTkwLjAxNiAxODcuMTI1IDE4NS42NTZDMTg3LjEyNSAxODAuMzI4IDE5MS40NjkgMTc2IDE5Ni43ODEgMTc2Wk0yMzYuMzEyIDMyMi43OTdDMjMwLjY4OCAzMzEuMDYyIDIyMS4zNDQgMzM2IDIxMS4zMTIgMzM2SDE3OC44NDRDMTY4LjQ2OSAzMzYgMTYwIDMyNy41NDcgMTYwIDMxNy4xNTZDMTYwIDMxMS40MzggMTYyLjUzMSAzMDYuMDk0IDE2NyAzMDIuNTE2TDE5OS4wNjIgMjc2LjYwOUwyMzguNDMgMzE5LjY5MUwyMzYuMzEyIDMyMi43OTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareAmpersand(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM299.502 315.344L327.656 274.031C335.125 263.078 332.281 248.141 321.344 240.688C310.375 233.203 295.469 236.078 287.969 247L266.207 278.932L236.469 246.406L256.156 230.516C269.75 219.516 277.562 203.156 277.562 185.656C277.562 153.859 251.688 128 219.906 128H196.781C165 128 139.125 153.859 139.125 185.656C139.125 202.016 145.187 217.688 156.25 229.797L166.594 241.125L136.844 265.172C121.062 277.906 112 296.859 112 317.156C112 354.016 142 384 178.844 384H211.312C234.719 384 256.688 373.594 271.469 355.812L290.094 376.188C294.844 381.375 301.312 384 307.812 384C313.594 384 319.406 381.922 324 377.719C333.781 368.766 334.469 353.594 325.531 343.812L299.502 315.344ZM196.781 176H219.906C225.219 176 229.562 180.328 229.562 185.656C229.562 188.594 228.25 191.344 225.969 193.172L204.031 210.906L191.688 197.438C188.75 194.203 187.125 190.016 187.125 185.656C187.125 180.328 191.469 176 196.781 176ZM236.312 322.797C230.688 331.062 221.344 336 211.312 336H178.844C168.469 336 160 327.547 160 317.156C160 311.438 162.531 306.094 167 302.516L199.062 276.609L238.43 319.691L236.312 322.797Z" />
        </Icon>
    </>
}