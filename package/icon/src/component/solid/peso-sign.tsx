
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `peso-sign` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/peso-sign?s=solid peso-sign}
 * @preview ![peso-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAgMjI0SDM1MS4xODlDMzUxLjY2OCAyMTguNzIzIDM1MiAyMTMuNCAzNTIgMjA4UzM1MS42NjggMTk3LjI3NyAzNTEuMTg5IDE5MkgzNjBDMzczLjI1IDE5MiAzODQgMTgxLjI1IDM4NCAxNjhTMzczLjI1IDE0NCAzNjAgMTQ0SDMzOS43NzNDMzE0LjA5OCA3OC41NDkgMjUwLjQ0OSAzMiAxNzYgMzJINzJDNDkuOTA2IDMyIDMyIDQ5LjkwNiAzMiA3MlYxNDRIMjRDMTAuNzUgMTQ0IDAgMTU0Ljc1IDAgMTY4UzEwLjc1IDE5MiAyNCAxOTJIMzJWMjI0SDI0QzEwLjc1IDIyNCAwIDIzNC43NSAwIDI0OFMxMC43NSAyNzIgMjQgMjcySDMyVjQ0MEMzMiA0NjIuMDk0IDQ5LjkwNiA0ODAgNzIgNDgwUzExMiA0NjIuMDk0IDExMiA0NDBWMzg0SDE3NkMyNTAuNDQ5IDM4NCAzMTQuMDk4IDMzNy40NTEgMzM5Ljc3MyAyNzJIMzYwQzM3My4yNSAyNzIgMzg0IDI2MS4yNSAzODQgMjQ4UzM3My4yNSAyMjQgMzYwIDIyNFpNMTEyIDExMkgxNzZDMjA0LjI2MiAxMTIgMjI5LjQ0NyAxMjQuNTAyIDI0Ny4wMzEgMTQ0SDExMlYxMTJaTTExMiAxOTJIMjcwLjM4M0MyNzEuMjcgMTk3LjIzIDI3MiAyMDIuNTIxIDI3MiAyMDhTMjcxLjI3IDIxOC43NyAyNzAuMzgzIDIyNEgxMTJWMTkyWk0xNzYgMzA0SDExMlYyNzJIMjQ3LjAzMUMyMjkuNDQ3IDI5MS40OTggMjA0LjI2MiAzMDQgMTc2IDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PesoSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M360 224H351.189C351.668 218.723 352 213.4 352 208S351.668 197.277 351.189 192H360C373.25 192 384 181.25 384 168S373.25 144 360 144H339.773C314.098 78.549 250.449 32 176 32H72C49.906 32 32 49.906 32 72V144H24C10.75 144 0 154.75 0 168S10.75 192 24 192H32V224H24C10.75 224 0 234.75 0 248S10.75 272 24 272H32V440C32 462.094 49.906 480 72 480S112 462.094 112 440V384H176C250.449 384 314.098 337.451 339.773 272H360C373.25 272 384 261.25 384 248S373.25 224 360 224ZM112 112H176C204.262 112 229.447 124.502 247.031 144H112V112ZM112 192H270.383C271.27 197.23 272 202.521 272 208S271.27 218.77 270.383 224H112V192ZM176 304H112V272H247.031C229.447 291.498 204.262 304 176 304Z" />
        </Icon>
    </>
}