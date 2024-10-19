
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=duotone cube}
 * @preview ![cube](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MS4xMDkgODEuNDQ5TDI3OC40NzMgNC4xNDVDMjcxLjIyNyAxLjM4MyAyNjMuNjEzIDAgMjU2IDBTMjQwLjc3MyAxLjM4MyAyMzMuNTI3IDQuMTQ1TDMwLjg5MSA4MS40NDlDMTIuMjkgODguNTQ1IDAgMTA2LjM4OCAwIDEyNi4yOTZWMzg1LjcwNEMwIDQwNS42MTMgMTIuMjkgNDIzLjQ1NSAzMC44OTEgNDMwLjU1MUwyMzMuNTI3IDUwNy44NTVDMjQwLjc3MyA1MTAuNjE3IDI0OC4zODcgNTEyIDI1NiA1MTJTMjcxLjIyNyA1MTAuNjE3IDI3OC40NzMgNTA3Ljg1NUw0ODEuMTA5IDQzMC41NTFDNDk5LjcxIDQyMy40NTUgNTEyIDQwNS42MTIgNTEyIDM4NS43MDRWMTI2LjI5NkM1MTIgMTA2LjM4OCA0OTkuNzEgODguNTQ1IDQ4MS4xMDkgODEuNDQ5Wk0yNTYgNjQuMDdMNDIyLjIyOSAxMjcuNDg0TDI1NiAxODkuODI4TDg5Ljc3MSAxMjcuNDg0TDI1NiA2NC4wN1pNMjg4IDQzNS45NDFWMjQ2LjE4Mkw0NDggMTg2LjE4MlYzNzQuNzA3TDI4OCA0MzUuOTQxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODggNDM1Ljk0MVYyNDYuMTgyTDQ0OCAxODYuMTgyVjM3NC43MDdMMjg4IDQzNS45NDFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Cube(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M481.109 81.449L278.473 4.145C271.227 1.383 263.613 0 256 0S240.773 1.383 233.527 4.145L30.891 81.449C12.29 88.545 0 106.388 0 126.296V385.704C0 405.613 12.29 423.455 30.891 430.551L233.527 507.855C240.773 510.617 248.387 512 256 512S271.227 510.617 278.473 507.855L481.109 430.551C499.71 423.455 512 405.612 512 385.704V126.296C512 106.388 499.71 88.545 481.109 81.449ZM256 64.07L422.229 127.484L256 189.828L89.771 127.484L256 64.07ZM288 435.941V246.182L448 186.182V374.707L288 435.941Z" />
            <path d="M288 435.941V246.182L448 186.182V374.707L288 435.941Z" />
        </Icon>
    </>
}