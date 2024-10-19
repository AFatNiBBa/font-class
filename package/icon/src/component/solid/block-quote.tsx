
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `block-quote` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/block-quote?s=solid block-quote}
 * @preview ![block-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMzg0SDE5MkMxNzQuMzI2IDM4NCAxNjAgMzk4LjMyNiAxNjAgNDE2UzE3NC4zMjYgNDQ4IDE5MiA0NDhINDgwQzQ5Ny42NzQgNDQ4IDUxMiA0MzMuNjc0IDUxMiA0MTZTNDk3LjY3NCAzODQgNDgwIDM4NFpNMzIgMTI4SDQ4MEM0OTcuNjc0IDEyOCA1MTIgMTEzLjY3NCA1MTIgOTZTNDk3LjY3NCA2NCA0ODAgNjRIMzJDMTQuMzI2IDY0IDAgNzguMzI2IDAgOTZTMTQuMzI2IDEyOCAzMiAxMjhaTTQ4MCAyMjRIMTkyQzE3NC4zMjYgMjI0IDE2MCAyMzguMzI2IDE2MCAyNTZTMTc0LjMyNiAyODggMTkyIDI4OEg0ODBDNDk3LjY3NCAyODggNTEyIDI3My42NzQgNTEyIDI1NlM0OTcuNjc0IDIyNCA0ODAgMjI0Wk0zMiAyMDhDMTQuMzI2IDIwOCAwIDIyMi4zMjYgMCAyNDBWNDMyQzAgNDQ5LjY3NCAxNC4zMjYgNDY0IDMyIDQ2NFM2NCA0NDkuNjc0IDY0IDQzMlYyNDBDNjQgMjIyLjMyNiA0OS42NzQgMjA4IDMyIDIwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BlockQuote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 384H192C174.326 384 160 398.326 160 416S174.326 448 192 448H480C497.674 448 512 433.674 512 416S497.674 384 480 384ZM32 128H480C497.674 128 512 113.674 512 96S497.674 64 480 64H32C14.326 64 0 78.326 0 96S14.326 128 32 128ZM480 224H192C174.326 224 160 238.326 160 256S174.326 288 192 288H480C497.674 288 512 273.674 512 256S497.674 224 480 224ZM32 208C14.326 208 0 222.326 0 240V432C0 449.674 14.326 464 32 464S64 449.674 64 432V240C64 222.326 49.674 208 32 208Z" />
        </Icon>
    </>
}