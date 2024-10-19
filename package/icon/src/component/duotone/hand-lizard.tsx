
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-lizard` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-lizard?s=duotone hand-lizard}
 * @preview ![hand-lizard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45OTkgMzMwVjQzMkM1MTEuOTk5IDQ0MC44MzYgNTA0LjgzNSA0NDggNDk1Ljk5OSA0NDhIMzY3Ljk5OUMzNTkuMTYzIDQ0OCAzNTEuOTk5IDQ0MC44MzYgMzUxLjk5OSA0MzJWNDE2TDI2Ni42NjUgMzUySDk1Ljk5OUM3OS41MjggMzUyIDY0LjU2MSAzMzguNTYyIDY0LjAzNCAzMjIuMTAyQzYyLjg3IDI4NS43OTMgOTEuOTU2IDI1NiAxMjcuOTk5IDI1NkgyMzIuOTM0QzI0Ni43MDggMjU2IDI1OC45MzYgMjQ3LjE4OCAyNjMuMjkyIDIzNC4xMTdMMjczLjk2IDIwMi4xMTdDMjgwLjg2NiAxODEuMzk4IDI2NS40NDQgMTYwIDI0My42MDIgMTYwSDYzLjk5OUMyNy45NTQgMTYwIC0xLjEzIDEzMC4xOTkgMC4wMzQgOTMuODk4QzAuNTYxIDc3LjQzOCAxNS41MyA2NCAzMS45OTkgNjRIMzAzLjIxQzMyOS40NjUgNjQgMzU0LjA1MSA3Ni44ODMgMzY4Ljk5OSA5OC40NjlMNDk3Ljc3IDI4NC40NTNDNTA3LjAzNiAyOTcuODM2IDUxMS45OTkgMzEzLjcyMyA1MTEuOTk5IDMzMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandLizard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M511.999 330V432C511.999 440.836 504.835 448 495.999 448H367.999C359.163 448 351.999 440.836 351.999 432V416L266.665 352H95.999C79.528 352 64.561 338.562 64.034 322.102C62.87 285.793 91.956 256 127.999 256H232.934C246.708 256 258.936 247.188 263.292 234.117L273.96 202.117C280.866 181.398 265.444 160 243.602 160H63.999C27.954 160 -1.13 130.199 0.034 93.898C0.561 77.438 15.53 64 31.999 64H303.21C329.465 64 354.051 76.883 368.999 98.469L497.77 284.453C507.036 297.836 511.999 313.723 511.999 330Z" />
        </Icon>
    </>
}