
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `speaker` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/speaker?s=regular speaker}
 * @preview ![speaker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMEg2NEMyOC42NTQgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzIwQzM1NS4zNDYgNTEyIDM4NCA0ODMuMzQ2IDM4NCA0NDhWNjRDMzg0IDI4LjY1MiAzNTUuMzQ2IDAgMzIwIDBaTTMzNiA0NDhDMzM2IDQ1Ni44MjIgMzI4LjgyMiA0NjQgMzIwIDQ2NEg2NEM1NS4xNzggNDY0IDQ4IDQ1Ni44MjIgNDggNDQ4VjY0QzQ4IDU1LjE3OCA1NS4xNzggNDggNjQgNDhIMzIwQzMyOC44MjIgNDggMzM2IDU1LjE3OCAzMzYgNjRWNDQ4Wk0xOTIgMTYwQzIxNC4wOTIgMTYwIDIzMiAxNDIuMDkyIDIzMiAxMjBTMjE0LjA5MiA4MCAxOTIgODBTMTUyIDk3LjkwOCAxNTIgMTIwUzE2OS45MDggMTYwIDE5MiAxNjBaTTE5MiAyMjRDMTM0LjU2MiAyMjQgODggMjcwLjU2MiA4OCAzMjhTMTM0LjU2MiA0MzIgMTkyIDQzMlMyOTYgMzg1LjQzOCAyOTYgMzI4UzI0OS40MzggMjI0IDE5MiAyMjRaTTE5MiAzODRDMTYxLjEyMSAzODQgMTM2IDM1OC44NzcgMTM2IDMyOEMxMzYgMjk3LjEyMSAxNjEuMTIxIDI3MiAxOTIgMjcyUzI0OCAyOTcuMTIxIDI0OCAzMjhDMjQ4IDM1OC44NzcgMjIyLjg3OSAzODQgMTkyIDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Speaker(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V64C384 28.652 355.346 0 320 0ZM336 448C336 456.822 328.822 464 320 464H64C55.178 464 48 456.822 48 448V64C48 55.178 55.178 48 64 48H320C328.822 48 336 55.178 336 64V448ZM192 160C214.092 160 232 142.092 232 120S214.092 80 192 80S152 97.908 152 120S169.908 160 192 160ZM192 224C134.562 224 88 270.562 88 328S134.562 432 192 432S296 385.438 296 328S249.438 224 192 224ZM192 384C161.121 384 136 358.877 136 328C136 297.121 161.121 272 192 272S248 297.121 248 328C248 358.877 222.879 384 192 384Z" />
        </Icon>
    </>
}