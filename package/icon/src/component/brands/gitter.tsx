
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gitter` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gitter?s=brands gitter}
 * @preview ![gitter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02Ni40IDMyMi41SDE2VjBoNTAuNHYzMjIuNXpNMTY2LjkgNzYuMWgtNTAuNFY1MTJoNTAuNFY3Ni4xem0xMDAuNiAwaC01MC40VjUxMmg1MC40Vjc2LjF6TTM2OCA3NmgtNTAuNHYyNDdIMzY4Vjc2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Gitter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z" />
        </Icon>
    </>
}