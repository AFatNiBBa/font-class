
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `unlock` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=duotone unlock}
 * @preview ![unlock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE0NCAyMjRIODBWMTQ0QzgwIDY0LjU5NCAxNDQuNTk0IDAgMjI0IDBTMzY4IDY0LjU5NCAzNjggMTQ0VjE2MEgzMDRWMTQ0QzMwNCA5OS44NzUgMjY4LjEwOSA2NCAyMjQgNjRTMTQ0IDk5Ljg3NSAxNDQgMTQ0VjIyNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzg0IDIyNEg2NEMyOC42NTQgMjI0IDAgMjUyLjY1MiAwIDI4OFY0NDhDMCA0ODMuMzQ0IDI4LjY1NCA1MTIgNjQgNTEySDM4NEM0MTkuMzQ2IDUxMiA0NDggNDgzLjM0NCA0NDggNDQ4VjI4OEM0NDggMjUyLjY1MiA0MTkuMzQ2IDIyNCAzODQgMjI0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Unlock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M144 224H80V144C80 64.594 144.594 0 224 0S368 64.594 368 144V160H304V144C304 99.875 268.109 64 224 64S144 99.875 144 144V224Z" />
            <path d="M384 224H64C28.654 224 0 252.652 0 288V448C0 483.344 28.654 512 64 512H384C419.346 512 448 483.344 448 448V288C448 252.652 419.346 224 384 224Z" />
        </Icon>
    </>
}