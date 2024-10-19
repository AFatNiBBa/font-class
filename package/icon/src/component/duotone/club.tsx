
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `club` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/club?s=duotone club}
 * @preview ![club](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAyODhDNTEyIDM1OC42OTMgNDU0LjY5NSA0MTYgMzg0IDQxNkMzNDUuNTUxIDQxNiAzMTEuNDYxIDM5OC42OTUgMjg4IDM3MS44NTVWMjcyQzI4OCAyNjMuMTYyIDI4MC44MzYgMjU2IDI3MiAyNTZIMjQwQzIzMS4xNjQgMjU2IDIyNCAyNjMuMTYyIDIyNCAyNzJWMzcxLjg1NUMyMDAuNTM5IDM5OC42OTUgMTY2LjQ1MyA0MTYgMTI4IDQxNkM1Ny4zMDkgNDE2IDAgMzU4LjY5MyAwIDI4OFM1Ny4zMDkgMTYwIDEyOCAxNjBDMTI5LjYwMiAxNjAgMTMxLjA4NiAxNjAuNDEyIDEzMi42NzIgMTYwLjQ3MUMxMjkuOTMgMTUwLjA0MSAxMjggMTM5LjI5MSAxMjggMTI4QzEyOCA1Ny4zMDcgMTg1LjMwOSAwIDI1NiAwQzMyNi42OTUgMCAzODQgNTcuMzA3IDM4NCAxMjhDMzg0IDEzOS4yOTEgMzgyLjA3IDE1MC4wNDEgMzc5LjMyOCAxNjAuNDcxQzM4MC45MTQgMTYwLjQxMiAzODIuMzk4IDE2MCAzODQgMTYwQzQ1NC42OTUgMTYwIDUxMiAyMTcuMzA3IDUxMiAyODhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM1MiA0ODUuMDQ1QzM1MiA0OTkuOTMyIDMzOS45MyA1MTIgMzI1LjA0NyA1MTJIMTg2Ljk1M0MxNzIuMDcgNTEyIDE2MCA0OTkuOTMyIDE2MCA0ODUuMDQ1QzE2MCA0NzIuNjc4IDE2OC40MTggNDYxLjg5NiAxODAuNDE4IDQ1OC44OTZMMjAzLjU4NiA0NTMuMTA0QzIxNS41ODIgNDUwLjEwNCAyMjQgNDM5LjMyMiAyMjQgNDI2Ljk1NVYyNzJDMjI0IDI2My4xNjIgMjMxLjE2NCAyNTYgMjQwIDI1NkgyNzJDMjgwLjgzNiAyNTYgMjg4IDI2My4xNjIgMjg4IDI3MlY0MjYuOTU1QzI4OCA0MzkuMzIyIDI5Ni40MTggNDUwLjEwNCAzMDguNDE4IDQ1My4xMDRMMzMxLjU4NiA0NTguODk2QzM0My41ODIgNDYxLjg5NiAzNTIgNDcyLjY3OCAzNTIgNDg1LjA0NVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Club(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 288C512 358.693 454.695 416 384 416C345.551 416 311.461 398.695 288 371.855V272C288 263.162 280.836 256 272 256H240C231.164 256 224 263.162 224 272V371.855C200.539 398.695 166.453 416 128 416C57.309 416 0 358.693 0 288S57.309 160 128 160C129.602 160 131.086 160.412 132.672 160.471C129.93 150.041 128 139.291 128 128C128 57.307 185.309 0 256 0C326.695 0 384 57.307 384 128C384 139.291 382.07 150.041 379.328 160.471C380.914 160.412 382.398 160 384 160C454.695 160 512 217.307 512 288Z" />
            <path d="M352 485.045C352 499.932 339.93 512 325.047 512H186.953C172.07 512 160 499.932 160 485.045C160 472.678 168.418 461.896 180.418 458.896L203.586 453.104C215.582 450.104 224 439.322 224 426.955V272C224 263.162 231.164 256 240 256H272C280.836 256 288 263.162 288 272V426.955C288 439.322 296.418 450.104 308.418 453.104L331.586 458.896C343.582 461.896 352 472.678 352 485.045Z" />
        </Icon>
    </>
}