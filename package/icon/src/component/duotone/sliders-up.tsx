
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sliders-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sliders-up?s=duotone sliders-up}
 * @preview ![sliders-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2IDBIOTZDNzguNCAwIDY0IDE0LjQgNjQgMzJWOTZIMTI4VjMyQzEyOCAxNC40IDExMy42IDAgOTYgMFpNNjQgNDgwQzY0IDQ5Ny42IDc4LjQgNTEyIDk2IDUxMkg5NkMxMTMuNiA1MTIgMTI4IDQ5Ny42IDEyOCA0ODBWMTkySDY0VjQ4MFpNMjI0IDQ4MEMyMjQgNDk3LjYgMjM4LjQgNTEyIDI1NiA1MTJIMjU2QzI3My42IDUxMiAyODggNDk3LjYgMjg4IDQ4MFY0NDhIMjI0VjQ4MFpNMzg0IDQ4MEMzODQgNDk3LjYgMzk4LjQgNTEyIDQxNiA1MTJINDE2QzQzMy42IDUxMiA0NDggNDk3LjYgNDQ4IDQ4MFYzMjBIMzg0VjQ4MFpNNDE2IDBINDE2QzM5OC40IDAgMzg0IDE0LjQgMzg0IDMyVjIyNEg0NDhWMzJDNDQ4IDE0LjQgNDMzLjYgMCA0MTYgMFpNMjU2IDBIMjU2QzIzOC40IDAgMjI0IDE0LjQgMjI0IDMyVjM1MkgyODhWMzJDMjg4IDE0LjQgMjczLjYgMCAyNTYgMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTQ0IDk2SDQ4QzMwLjMyNiA5NiAxNiAxMTAuMzI2IDE2IDEyOEMxNiAxNDUuNjcyIDMwLjMyNiAxNjAgNDggMTYwSDE0NEMxNjEuNjc0IDE2MCAxNzYgMTQ1LjY3MiAxNzYgMTI4QzE3NiAxMTAuMzI2IDE2MS42NzQgOTYgMTQ0IDk2Wk00NjQgMjI0SDM2OEMzNTAuMzI2IDIyNCAzMzYgMjM4LjMyNiAzMzYgMjU2QzMzNiAyNzMuNjcyIDM1MC4zMjYgMjg4IDM2OCAyODhINDY0QzQ4MS42NzQgMjg4IDQ5NiAyNzMuNjcyIDQ5NiAyNTZDNDk2IDIzOC4zMjYgNDgxLjY3NCAyMjQgNDY0IDIyNFpNMzA0IDM1MkgyMDhDMTkwLjMyNiAzNTIgMTc2IDM2Ni4zMjYgMTc2IDM4NEMxNzYgNDAxLjY3MiAxOTAuMzI2IDQxNiAyMDggNDE2SDMwNEMzMjEuNjc0IDQxNiAzMzYgNDAxLjY3MiAzMzYgMzg0QzMzNiAzNjYuMzI2IDMyMS42NzQgMzUyIDMwNCAzNTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SlidersUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M96 0H96C78.4 0 64 14.4 64 32V96H128V32C128 14.4 113.6 0 96 0ZM64 480C64 497.6 78.4 512 96 512H96C113.6 512 128 497.6 128 480V192H64V480ZM224 480C224 497.6 238.4 512 256 512H256C273.6 512 288 497.6 288 480V448H224V480ZM384 480C384 497.6 398.4 512 416 512H416C433.6 512 448 497.6 448 480V320H384V480ZM416 0H416C398.4 0 384 14.4 384 32V224H448V32C448 14.4 433.6 0 416 0ZM256 0H256C238.4 0 224 14.4 224 32V352H288V32C288 14.4 273.6 0 256 0Z" />
            <path d="M144 96H48C30.326 96 16 110.326 16 128C16 145.672 30.326 160 48 160H144C161.674 160 176 145.672 176 128C176 110.326 161.674 96 144 96ZM464 224H368C350.326 224 336 238.326 336 256C336 273.672 350.326 288 368 288H464C481.674 288 496 273.672 496 256C496 238.326 481.674 224 464 224ZM304 352H208C190.326 352 176 366.326 176 384C176 401.672 190.326 416 208 416H304C321.674 416 336 401.672 336 384C336 366.326 321.674 352 304 352Z" />
        </Icon>
    </>
}