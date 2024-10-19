
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `command` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/command?s=regular command}
 * @preview ![command](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMjg4SDMwNFYyMjRIMzUyQzQwNS4wMiAyMjQgNDQ4IDE4MS4wMiA0NDggMTI4UzQwNS4wMiAzMiAzNTIgMzJTMjU2IDc0Ljk4IDI1NiAxMjhWMTc2SDE5MlYxMjhDMTkyIDc0Ljk4IDE0OS4wMiAzMiA5NiAzMlMwIDc0Ljk4IDAgMTI4UzQyLjk4IDIyNCA5NiAyMjRIMTQ0VjI4OEg5NkM0Mi45OCAyODggMCAzMzAuOTggMCAzODRTNDIuOTggNDgwIDk2IDQ4MFMxOTIgNDM3LjAyIDE5MiAzODRWMzM2SDI1NlYzODRDMjU2IDQzNy4wMiAyOTguOTggNDgwIDM1MiA0ODBTNDQ4IDQzNy4wMiA0NDggMzg0UzQwNS4wMiAyODggMzUyIDI4OFpNMzA0IDEyOEMzMDQgMTAxLjUzMyAzMjUuNTMzIDgwIDM1MiA4MFM0MDAgMTAxLjUzMyA0MDAgMTI4UzM3OC40NjcgMTc2IDM1MiAxNzZIMzA0VjEyOFpNMTQ0IDM4NEMxNDQgNDEwLjQ2NyAxMjIuNDY3IDQzMiA5NiA0MzJTNDggNDEwLjQ2NyA0OCAzODRTNjkuNTMzIDMzNiA5NiAzMzZIMTQ0VjM4NFpNMTQ0IDE3Nkg5NkM2OS41MzMgMTc2IDQ4IDE1NC40NjcgNDggMTI4UzY5LjUzMyA4MCA5NiA4MFMxNDQgMTAxLjUzMyAxNDQgMTI4VjE3NlpNMjU2IDI4OEgxOTJWMjI0SDI1NlYyODhaTTM1MiA0MzJDMzI1LjUzMyA0MzIgMzA0IDQxMC40NjcgMzA0IDM4NFYzMzZIMzUyQzM3OC40NjcgMzM2IDQwMCAzNTcuNTMzIDQwMCAzODRTMzc4LjQ2NyA0MzIgMzUyIDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Command(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M352 288H304V224H352C405.02 224 448 181.02 448 128S405.02 32 352 32S256 74.98 256 128V176H192V128C192 74.98 149.02 32 96 32S0 74.98 0 128S42.98 224 96 224H144V288H96C42.98 288 0 330.98 0 384S42.98 480 96 480S192 437.02 192 384V336H256V384C256 437.02 298.98 480 352 480S448 437.02 448 384S405.02 288 352 288ZM304 128C304 101.533 325.533 80 352 80S400 101.533 400 128S378.467 176 352 176H304V128ZM144 384C144 410.467 122.467 432 96 432S48 410.467 48 384S69.533 336 96 336H144V384ZM144 176H96C69.533 176 48 154.467 48 128S69.533 80 96 80S144 101.533 144 128V176ZM256 288H192V224H256V288ZM352 432C325.533 432 304 410.467 304 384V336H352C378.467 336 400 357.533 400 384S378.467 432 352 432Z" />
        </Icon>
    </>
}