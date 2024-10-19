
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=regular down-to-line}
 * @preview ![down-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjkuNzUgMzc0LjYyNUMxNzYgMzgwLjg3NSAxODQuMTg4IDM4NCAxOTIuMzc1IDM4NFMyMDguNzUgMzgwLjg3NSAyMTUgMzc0LjYyNUwzNTAuOTA4IDIyNC4xNzZDMzc4Ljc5MyAxOTMuMzA5IDM1Ni44ODcgMTQ0IDMxNS4yODkgMTQ0SDI3Mi4zNzVWODBDMjcyLjM3NSA1My40OTIgMjUwLjg4NSAzMiAyMjQuMzc1IDMySDE2MC4zNzVDMTMzLjg2NSAzMiAxMTIuMzc1IDUzLjQ5MiAxMTIuMzc1IDgwVjE0NEg2OS4wODhDMjcuNDU3IDE0NCA1LjU2NCAxOTMuMzcxIDMzLjUxMiAyMjQuMjI3TDE2OS43NSAzNzQuNjI1Wk0xNjAuMzc1IDE5MlY4MEgyMjQuMzc1VjE5MkgzMTMuNzQyTDE5Mi4zNzUgMzI5LjM2N0w3MS4wMDggMTkySDE2MC4zNzVaTTM2MCA0MzJIMjRDMTAuNzUgNDMyIDAgNDQyLjc1IDAgNDU2UzEwLjc1IDQ4MCAyNCA0ODBIMzYwQzM3My4yNSA0ODAgMzg0IDQ2OS4yNSAzODQgNDU2UzM3My4yNSA0MzIgMzYwIDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DownToLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M169.75 374.625C176 380.875 184.188 384 192.375 384S208.75 380.875 215 374.625L350.908 224.176C378.793 193.309 356.887 144 315.289 144H272.375V80C272.375 53.492 250.885 32 224.375 32H160.375C133.865 32 112.375 53.492 112.375 80V144H69.088C27.457 144 5.564 193.371 33.512 224.227L169.75 374.625ZM160.375 192V80H224.375V192H313.742L192.375 329.367L71.008 192H160.375ZM360 432H24C10.75 432 0 442.75 0 456S10.75 480 24 480H360C373.25 480 384 469.25 384 456S373.25 432 360 432Z" />
        </Icon>
    </>
}