
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=solid house-heart}
 * @preview ![house-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjUuMDcyIDIzMS45MDZMNTExLjk4NiAxODUuNDU5VjQ3Ljk4NUM1MTEuOTg2IDM5LjE1NiA1MDQuODMyIDMxLjk4NSA0OTUuOTg5IDMxLjk4NUg0MzEuOTkzQzQyMy4xNSAzMS45ODUgNDE1Ljk5NSAzOS4xNTYgNDE1Ljk5NSA0Ny45ODVWMTAxLjQ3M0wzMDkuMDc1IDcuOTIyQzMwMy4wNDQgMi42NCAyOTUuNTIgMCAyODcuOTk2IDBDMjgxLjg2NiAwIDI3My44OTMgMS44MTUgMjY2LjkxOSA3LjkyMkwxMC45MjIgMjMxLjkwNkMzLjg0MiAyMzguMTA0IDAgMjQ2Ljk0NyAwIDI1NkMwIDI3My41NTcgMTQuMjIyIDI4OCAzMiAyODhINjQuMDIzVjQ0OEM2NC4wMjMgNDgzLjM0NSA5Mi42NzcgNTEyIDEyOC4wMjIgNTEySDQ0Ny45ODlDNDgzLjMzNCA1MTIgNTExLjk4OCA0ODMuMzQ1IDUxMS45ODggNDQ4VjI4OEg1NDMuOTk0QzU2MS43MyAyODggNTc1Ljk5NCAyNzMuNjAyIDU3NS45OTQgMjU2QzU3NS45OTQgMjQ2Ljk0NyA1NzIuMTUyIDIzOC4xMDQgNTY1LjA3MiAyMzEuOTA2Wk0zOTcuNjg1IDI4My43NzhDMzk3LjY4NSAyOTkuMTQ4IDM5Mi4wMDIgMzE0LjUyMyAzODAuNjM4IDMyNi4zMTJMMjk3LjY1MSA0MTEuODcxQzI5NC45NTkgNDE0LjYyMyAyOTEuNDcgNDE1Ljk5OSAyODcuOTgyIDQxNS45OTlTMjgxLjAwNSA0MTQuNjIzIDI3OC4zMTEgNDExLjg3MUwxOTUuMzI2IDMyNi4zMTJDMTgzLjk0OSAzMTQuNTA5IDE3OC4yNjcgMjk5LjExMyAxNzguMjY3IDI4My43MjRDMTc4LjI2NyAyNTQuMTkxIDIwMC43MTcgMjIzLjk5OCAyMzUuNTMyIDIyMy45OThDMjUxLjQ3NSAyMjMuOTk4IDI2Ny41MiAyMzAuNTg1IDI3OS40MTMgMjQyLjg3OUwyODcuODYgMjUxLjYzM0wyOTYuMzA1IDI0Mi44NzlDMzA4LjI2NiAyMzAuNTg1IDMyNC4zNzkgMjIzLjk5OCAzNDAuMzQ4IDIyMy45OThDMzc1LjA1MSAyMjMuOTk4IDM5Ny42ODUgMjU0LjA4OCAzOTcuNjg1IDI4My43NzhaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function HouseHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M565.072 231.906L511.986 185.459V47.985C511.986 39.156 504.832 31.985 495.989 31.985H431.993C423.15 31.985 415.995 39.156 415.995 47.985V101.473L309.075 7.922C303.044 2.64 295.52 0 287.996 0C281.866 0 273.893 1.815 266.919 7.922L10.922 231.906C3.842 238.104 0 246.947 0 256C0 273.557 14.222 288 32 288H64.023V448C64.023 483.345 92.677 512 128.022 512H447.989C483.334 512 511.988 483.345 511.988 448V288H543.994C561.73 288 575.994 273.602 575.994 256C575.994 246.947 572.152 238.104 565.072 231.906ZM397.685 283.778C397.685 299.148 392.002 314.523 380.638 326.312L297.651 411.871C294.959 414.623 291.47 415.999 287.982 415.999S281.005 414.623 278.311 411.871L195.326 326.312C183.949 314.509 178.267 299.113 178.267 283.724C178.267 254.191 200.717 223.998 235.532 223.998C251.475 223.998 267.52 230.585 279.413 242.879L287.86 251.633L296.305 242.879C308.266 230.585 324.379 223.998 340.348 223.998C375.051 223.998 397.685 254.088 397.685 283.778Z " />
        </Icon>
    </>
}