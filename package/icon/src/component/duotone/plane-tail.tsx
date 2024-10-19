
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `plane-tail` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plane-tail?s=duotone plane-tail}
 * @preview ![plane-tail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3Mi4xMjUgMjU2SDM4My4yNThMMTMwLjQzNSA5LjM3M0MxMjQuMzk2IDMuMzM0IDExNi4xOTUgLTAuMDQxIDEwNy42NTYgMEwzMS44NTcgMC4zNjFDMTEuNzIzIDAuNDU3IC0zLjMyMiAxOC45MDQgMC42MzUgMzguNjQ4TDYwLjY5MyAzMDUuMjZMMjM0LjM2MSAyNjAuNzZDMjQ2LjcwMSAyNTcuNiAyNTkuMzg3IDI1NiAyNzIuMTI1IDI1NlpNMzYwIDM1MkgyMTZDMjAyLjc0NiAzNTIgMTkyIDM2Mi43NDQgMTkyIDM3NkMxOTIgMzg5LjI1NCAyMDIuNzQ2IDQwMCAyMTYgNDAwSDM2MEMzNzMuMjU0IDQwMCAzODQgMzg5LjI1NCAzODQgMzc2QzM4NCAzNjIuNzQ0IDM3My4yNTQgMzUyIDM2MCAzNTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI3Mi4xMjUgMjU2QzI1OS4zODcgMjU2IDI0Ni43MDEgMjU3LjYgMjM0LjM2MSAyNjAuNzZMMzYuMDg2IDMxMS41NjRDMTQuODUyIDMxNy4wMDYgMCAzMzYuMTQxIDAgMzU4LjA2MlYzODIuMzc1QzAgNDAyLjI0NCAxMi4yNDIgNDIwLjA1OSAzMC43ODkgNDI3LjE4NEwyMjUuMjI3IDUwMS44NjlDMjQyLjY2MiA1MDguNTY2IDI2MS4xNzggNTEyIDI3OS44NTUgNTEySDUxMlYyNTZIMjcyLjEyNVpNMzYwIDQwMEgyMTZDMjAyLjc0NiA0MDAgMTkyIDM4OS4yNTQgMTkyIDM3NkMxOTIgMzYyLjc0NCAyMDIuNzQ2IDM1MiAyMTYgMzUySDM2MEMzNzMuMjU0IDM1MiAzODQgMzYyLjc0NCAzODQgMzc2QzM4NCAzODkuMjU0IDM3My4yNTQgNDAwIDM2MCA0MDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PlaneTail(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M272.125 256H383.258L130.435 9.373C124.396 3.334 116.195 -0.041 107.656 0L31.857 0.361C11.723 0.457 -3.322 18.904 0.635 38.648L60.693 305.26L234.361 260.76C246.701 257.6 259.387 256 272.125 256ZM360 352H216C202.746 352 192 362.744 192 376C192 389.254 202.746 400 216 400H360C373.254 400 384 389.254 384 376C384 362.744 373.254 352 360 352Z" />
            <path d="M272.125 256C259.387 256 246.701 257.6 234.361 260.76L36.086 311.564C14.852 317.006 0 336.141 0 358.062V382.375C0 402.244 12.242 420.059 30.789 427.184L225.227 501.869C242.662 508.566 261.178 512 279.855 512H512V256H272.125ZM360 400H216C202.746 400 192 389.254 192 376C192 362.744 202.746 352 216 352H360C373.254 352 384 362.744 384 376C384 389.254 373.254 400 360 400Z" />
        </Icon>
    </>
}