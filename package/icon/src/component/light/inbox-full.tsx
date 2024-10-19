
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-full` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-full?s=light inbox-full}
 * @preview ![inbox-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDguMjg1IDMwNC45MThMNDQ3LjAzMSA1Ni4yNUM0NDMuNDY5IDQyIDQzMC42ODggMzIgNDE2IDMySDk2QzgxLjMxMiAzMiA2OC41MzEgNDIgNjQuOTY5IDU2LjI1TDMuNzE1IDMwNC45MThDMS4yNDggMzE0LjkzNiAwIDMyNS4yMTUgMCAzMzUuNTMzVjQzMkMwIDQ1OC41MSAyMS40OSA0ODAgNDggNDgwSDQ2NEM0OTAuNTEgNDgwIDUxMiA0NTguNTEgNTEyIDQzMlYzMzUuNTMzQzUxMiAzMjUuMjE1IDUxMC43NTIgMzE0LjkzNiA1MDguMjg1IDMwNC45MThaTTk2IDY0SDQxNS45ODRMNDcxLjE2IDI4OEgzNjhDMzYxLjkzOCAyODggMzU2LjQwNiAyOTEuNDM4IDM1My42ODggMjk2Ljg0NEwzMjYuMTA5IDM1MkgxODUuODkxTDE1OC4zMTIgMjk2Ljg0NEMxNTUuNTk0IDI5MS40MzggMTUwLjA2MiAyODggMTQ0IDI4OEg0MC44MzhMOTYgNjRaTTQ4MCA0MzJDNDgwIDQ0MC44MjIgNDcyLjgyMiA0NDggNDY0IDQ0OEg0OEMzOS4xNzggNDQ4IDMyIDQ0MC44MjIgMzIgNDMyVjMzNS41MzNDMzIgMzMwLjMwNSAzMy4wMzUgMzI1LjE2IDMzLjg4NSAzMjBIMTM0LjEwOUwxNjEuNjg3IDM3NS4xNTZDMTY0LjQwNiAzODAuNTYyIDE2OS45MzggMzg0IDE3NiAzODRIMzM2QzM0Mi4wNjIgMzg0IDM0Ny41OTQgMzgwLjU2MiAzNTAuMzEyIDM3NS4xNTZMMzc3Ljg5MSAzMjBINDc4LjExNUM0NzguOTY1IDMyNS4xNiA0ODAgMzMwLjMwNyA0ODAgMzM1LjUzM1Y0MzJaTTM2OCAyNTZDMzc2LjgzOCAyNTYgMzg0IDI0OC44MzYgMzg0IDI0MFMzNzYuODM4IDIyNCAzNjggMjI0SDE0NEMxMzUuMTY0IDIyNCAxMjggMjMxLjE2NCAxMjggMjQwUzEzNS4xNjQgMjU2IDE0NCAyNTZIMzY4Wk0xNzYgMTc2SDMzNkMzNDQuODM4IDE3NiAzNTIgMTY4LjgzNiAzNTIgMTYwUzM0NC44MzggMTQ0IDMzNiAxNDRIMTc2QzE2Ny4xNjQgMTQ0IDE2MCAxNTEuMTY0IDE2MCAxNjBTMTY3LjE2NCAxNzYgMTc2IDE3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function InboxFull(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M508.285 304.918L447.031 56.25C443.469 42 430.688 32 416 32H96C81.312 32 68.531 42 64.969 56.25L3.715 304.918C1.248 314.936 0 325.215 0 335.533V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V335.533C512 325.215 510.752 314.936 508.285 304.918ZM96 64H415.984L471.16 288H368C361.938 288 356.406 291.438 353.688 296.844L326.109 352H185.891L158.312 296.844C155.594 291.438 150.062 288 144 288H40.838L96 64ZM480 432C480 440.822 472.822 448 464 448H48C39.178 448 32 440.822 32 432V335.533C32 330.305 33.035 325.16 33.885 320H134.109L161.687 375.156C164.406 380.562 169.938 384 176 384H336C342.062 384 347.594 380.562 350.312 375.156L377.891 320H478.115C478.965 325.16 480 330.307 480 335.533V432ZM368 256C376.838 256 384 248.836 384 240S376.838 224 368 224H144C135.164 224 128 231.164 128 240S135.164 256 144 256H368ZM176 176H336C344.838 176 352 168.836 352 160S344.838 144 336 144H176C167.164 144 160 151.164 160 160S167.164 176 176 176Z" />
        </Icon>
    </>
}